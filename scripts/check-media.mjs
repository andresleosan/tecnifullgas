import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

// Executes the real components. Only browser scheduling/media and React's hook
// lifecycle are simulated; no browser, network, credentials or new packages.
class Events {
  listeners = new Map();
  addEventListener(type, callback, options = {}) {
    if (!this.listeners.has(type)) this.listeners.set(type, new Map());
    this.listeners.get(type).set(callback, options);
  }
  removeEventListener(type, callback) {
    this.listeners.get(type)?.delete(callback);
  }
  dispatch(type, event = {}) {
    for (const [callback, options] of [...(this.listeners.get(type) ?? [])]) {
      if (options.once) this.removeEventListener(type, callback);
      callback(event);
    }
  }
  get listenerCount() {
    return [...this.listeners.values()].reduce((sum, entries) => sum + entries.size, 0);
  }
}

function mountComponent(name, { reducedMotion = false } = {}) {
  const hooks = [];
  const frames = new Map();
  const timers = new Map();
  const document = new Events();
  const motionPreference = new Events();
  motionPreference.matches = reducedMotion;
  const track = new Events();
  track.style = {};
  const section = {};
  const observers = new Set();
  let now = 100;
  let nextId = 0;
  let cursor = 0;
  let dirty = true;
  let mounted = true;
  let tree;
  let video;
  let videoKey;
  let videoRef;
  let effectJobs = [];
  const sameDeps = (left, right) => left && right && left.length === right.length
    && left.every((value, index) => Object.is(value, right[index]));
  const react = {
    useRef(initial) {
      const index = cursor++;
      hooks[index] ??= { current: initial };
      return hooks[index];
    },
    useState(initial) {
      const index = cursor++;
      hooks[index] ??= { value: initial };
      return [hooks[index].value, (update) => {
        const value = typeof update === 'function' ? update(hooks[index].value) : update;
        if (!Object.is(value, hooks[index].value)) {
          hooks[index].value = value;
          dirty = true;
        }
      }];
    },
    useCallback(callback, deps) {
      const index = cursor++;
      if (!sameDeps(hooks[index]?.deps, deps)) hooks[index] = { value: callback, deps };
      return hooks[index].value;
    },
    useEffect(effect, deps) {
      const index = cursor++;
      if (!sameDeps(hooks[index]?.deps, deps)) {
        effectJobs.push(() => {
          hooks[index]?.cleanup?.();
          hooks[index] = { deps, cleanup: effect() };
        });
      }
    },
  };

  function makeVideo() {
    const element = new Events();
    return Object.assign(element, {
      readyState: 0, paused: true, ended: false, muted: true,
      loadCalls: 0, playCalls: 0, pauseCalls: 0, deferPlay: false, preloadAtLoad: [],
      load() { this.loadCalls += 1; this.preloadAtLoad.push(this.preload); },
      play() {
        this.playCalls += 1;
        const start = () => {
          this.paused = false;
          this.props.onPlay?.({ currentTarget: this });
        };
        if (this.deferPlay) {
          return new Promise((resolve) => { this.resolvePlay = () => { start(); resolve(); }; });
        }
        start();
        return Promise.resolve();
      },
      pause() {
        this.pauseCalls += 1;
        const wasPlaying = !this.paused;
        this.paused = true;
        if (wasPlaying) this.props.onPause?.({ currentTarget: this });
      },
      ready() {
        this.readyState = 2;
        this.dispatch('loadeddata');
        this.props.onLoadedData?.({ currentTarget: this });
      },
    });
  }

  const jsx = (type, props, key) => ({ type, props, key });
  const context = {
    exports: {},
    require(module) {
      if (module === 'react') return react;
      if (module === 'react/jsx-runtime') return { jsx, jsxs: jsx };
      if (module === './ScrollReveal') return { default: () => null };
      throw new Error(`Unexpected component dependency: ${module}`);
    },
    requestAnimationFrame(callback) {
      const id = ++nextId;
      frames.set(id, callback);
      return id;
    },
    cancelAnimationFrame(id) { frames.delete(id); },
    performance: { now: () => now },
    document,
    window: {
      matchMedia: () => motionPreference,
      setTimeout(callback, delay) {
        const id = ++nextId;
        timers.set(id, { callback, due: now + delay });
        return id;
      },
      clearTimeout(id) { timers.delete(id); },
      setInterval(callback, delay) {
        const id = ++nextId;
        timers.set(id, { callback, due: now + delay, interval: delay });
        return id;
      },
      clearInterval(id) { timers.delete(id); },
    },
    IntersectionObserver: class {
      constructor(callback) { this.callback = callback; }
      observe() { observers.add(this); }
      disconnect() { observers.delete(this); }
    },
  };
  let source = readFileSync(new URL(`../src/components/${name}.tsx`, import.meta.url), 'utf8');
  // Optional controlled regression: the same behavior checks must fail if
  // cancellation stops removing the readiness listeners (no file is changed).
  if (name === 'WorksGallery' && process.argv.includes('--mutation=no-readiness-cleanup')) {
    assert(source.includes('pendingReadyRef.current?.();'), 'Mutation target exists');
    source = source.replace('pendingReadyRef.current?.();', '');
  }
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
  }).outputText;
  vm.runInNewContext(compiled, context, { filename: `${name}.tsx` });

  function visit(node, callback, hidden = false) {
    if (Array.isArray(node)) return node.forEach((child) => visit(child, callback, hidden));
    if (!node || typeof node !== 'object') return;
    const inaccessible = hidden || node.props?.['aria-hidden'] === true;
    callback(node, inaccessible);
    visit(node.props?.children, callback, inaccessible);
  }

  function find(predicate) {
    let result;
    visit(tree, (node) => { if (!result && predicate(node)) result = node; });
    return result;
  }

  function flush() {
    for (let guard = 0; dirty && mounted; guard += 1) {
      assert(guard < 20, 'Component rendering must converge');
      dirty = false;
      cursor = 0;
      effectJobs = [];
      tree = context.exports.default();
      visit(tree, (node) => {
        if (node.type === 'section' && node.props.ref) node.props.ref.current = section;
        if (node.type === 'div' && node.props.ref) node.props.ref.current = track;
        if (node.type !== 'video') return;
        const previous = video;
        const next = previous && videoKey === node.key ? previous : makeVideo();
        if (videoRef && (next !== previous || videoRef !== node.props.ref)) videoRef(null);
        video = next;
        videoKey = node.key;
        const changedRef = videoRef !== node.props.ref || next !== previous;
        videoRef = node.props.ref;
        if (next !== previous || video.props?.preload !== node.props.preload) video.preload = node.props.preload;
        video.props = node.props;
        const sourceNode = (Array.isArray(node.props.children) ? node.props.children : [node.props.children])
          .find((child) => child?.type === 'source');
        video.source = sourceNode?.props.src;
        if (changedRef) videoRef(video);
      });
      effectJobs.forEach((job) => job());
    }
  }

  const runtime = {
    track, frames, timers, document, observers, motionPreference,
    get video() { return video; },
    get images() {
      const images = [];
      visit(tree, (node, hidden) => { if (node.type === 'img') images.push({ ...node.props, hidden }); });
      return images;
    },
    frame(time) {
      now = time;
      const pending = [...frames.values()];
      frames.clear();
      pending.forEach((callback) => callback(time));
    },
    hover(inside) {
      track.dispatch(inside ? 'mouseenter' : 'mouseleave');
      const target = find((node) => node.props?.onMouseEnter);
      target?.props[inside ? 'onMouseEnter' : 'onMouseLeave']?.();
      flush();
    },
    focus(inside, within = false) {
      const target = find((node) => node.props?.onFocus);
      assert(target, 'Carousel exposes focus pause handlers');
      target.props[inside ? 'onFocus' : 'onBlur']({
        currentTarget: { contains: () => within }, relatedTarget: within ? {} : null,
      });
      flush();
    },
    reducedMotion(value) {
      motionPreference.matches = value;
      motionPreference.dispatch('change', { matches: value });
      flush();
    },
    key(key, fromVideo = false) {
      const target = find((node) => node.props?.onKeyDown);
      assert(target, 'Keyboard container exists');
      const element = {};
      let prevented = false;
      target.props.onKeyDown({ key, currentTarget: element, target: fromVideo ? video : element,
        preventDefault() { prevented = true; } });
      flush();
      return prevented;
    },
    visibility(visible, ratio = visible ? 0.5 : 0) {
      for (const observer of [...observers]) observer.callback([{ isIntersecting: visible, intersectionRatio: ratio }]);
      flush();
    },
    control(label) {
      let target;
      visit(tree, (node) => { if (node.props?.['aria-label'] === label) target = node; });
      assert(target, `Control exists: ${label}`);
      target.props.onClick();
      flush();
    },
    ended() { video.ended = true; video.props.onEnded(); flush(); },
    advance(milliseconds) {
      const end = now + milliseconds;
      for (let guard = 0; guard < 1000; guard += 1) {
        const next = [...timers].filter(([, timer]) => timer.due <= end)
          .sort((left, right) => left[1].due - right[1].due)[0];
        if (!next) break;
        const [id, timer] = next;
        now = timer.due;
        if (timer.interval) timer.due += timer.interval;
        else timers.delete(id);
        timer.callback();
        flush();
      }
      now = end;
      flush();
    },
    async settle() { for (let step = 0; step < 8; step += 1) { await Promise.resolve(); flush(); } },
    unmount() {
      mounted = false;
      videoRef?.(null);
      hooks.forEach((hook) => hook?.cleanup?.());
      hooks.forEach((hook) => { if (hook?.current === track || hook?.current === section) hook.current = null; });
    },
  };
  flush();
  return runtime;
}

const checks = [
  ['HeroCarousel exposes only the active slide and preserves a persistent pause across focus and hover', async () => {
    const app = mountComponent('HeroCarousel');
    assert.equal(app.images.filter((image) => !image.hidden).length, 1);
    app.advance(4000);
    assert.equal(app.images.find((image) => !image.hidden).src, '/img/Cocina.png');
    app.hover(true);
    assert.equal(app.timers.size, 0, 'Hover stops automatic slide changes');
    app.hover(false);
    assert.equal(app.timers.size, 1);
    app.focus(true);
    assert.equal(app.timers.size, 0, 'Focus stops automatic slide changes');
    app.focus(false, true);
    assert.equal(app.timers.size, 0, 'Moving focus between carousel controls stays paused');
    app.control('Pausar galería principal');
    app.focus(false);
    app.hover(true);
    app.hover(false);
    app.advance(8000);
    assert.equal(app.images.find((image) => !image.hidden).src, '/img/Cocina.png', 'Explicit pause survives focus and mouse exit');
    app.focus(true);
    app.control('Reanudar galería principal');
    assert.equal(app.timers.size, 0, 'Resuming does not move slides while controls have focus');
    app.focus(false);
    app.advance(4000);
    assert.equal(app.images.find((image) => !image.hidden).src, '/img/Servicios.png');
    app.unmount();
    assert.equal(app.timers.size, 0);
    assert.equal(app.motionPreference.listenerCount, 0);
  }],
  ['HeroCarousel follows initial and dynamic reduced motion without blocking manual navigation', async () => {
    const app = mountComponent('HeroCarousel', { reducedMotion: true });
    assert.equal(app.timers.size, 0, 'Reduced motion starts with rotation stopped');
    app.control('Ver imagen siguiente');
    app.advance(8000);
    assert.equal(app.images.find((image) => !image.hidden).src, '/img/Cocina.png');
    app.reducedMotion(false);
    assert.equal(app.timers.size, 1);
    app.reducedMotion(true);
    assert.equal(app.timers.size, 0);
    app.control('Reanudar galería principal');
    assert.equal(app.timers.size, 1, 'Explicit resume can override the motion default');
    app.control('Pausar galería principal');
    app.reducedMotion(false);
    assert.equal(app.timers.size, 0, 'A user pause survives preference changes');
    app.unmount();
    assert.equal(app.motionPreference.listenerCount, 0);
  }],
  ['ClientCarousel transcribes each comment once and supports focus, persistent pause and reduced motion', async () => {
    const app = mountComponent('ClientCarousel');
    assert.deepEqual(app.images.filter((image) => !image.hidden).map((image) => image.alt), [
      'Excelente servicio muy responsable', '👏👏👏', 'Los mejores sin duda 👏👏👏👏❤️', 'Excelente servicio',
    ]);
    assert.equal(app.images.filter((image) => image.hidden).length, 4);
    app.frame(100);
    app.frame(5100);
    app.focus(true);
    assert.equal(app.frames.size, 0);
    app.focus(false, true);
    assert.equal(app.frames.size, 0);
    app.control('Pausar opiniones de clientes');
    app.focus(false);
    app.hover(true);
    app.hover(false);
    assert.equal(app.frames.size, 0);
    app.control('Reanudar opiniones de clientes');
    app.frame(5100);
    assert.equal(app.track.style.transform, 'translateX(-12.5%)', 'Pause preserves the current position');
    app.reducedMotion(true);
    assert.equal(app.frames.size, 0);
    app.reducedMotion(false);
    assert.equal(app.frames.size, 1);
    app.control('Pausar opiniones de clientes');
    app.reducedMotion(true);
    app.reducedMotion(false);
    assert.equal(app.frames.size, 0, 'Explicit pause survives later preference changes');
    app.unmount();
    assert.equal(app.frames.size, 0);
    assert.equal(app.motionPreference.listenerCount, 0);
    const reduced = mountComponent('ClientCarousel', { reducedMotion: true });
    assert.equal(reduced.frames.size, 0);
    reduced.control('Reanudar opiniones de clientes');
    assert.equal(reduced.frames.size, 1);
    reduced.unmount();
  }],
  ['ClientCarousel pauses on hover and resumes one animation at the same position', async () => {
    const app = mountComponent('ClientCarousel');
    app.frame(100);
    app.frame(5100);
    assert.equal(app.track.style.transform, 'translateX(-12.5%)');
    app.hover(true);
    assert.equal(app.frames.size, 0, 'Hover cancels the scheduled animation');
    app.advance(2000);
    app.hover(false);
    app.frame(7100);
    assert.equal(app.track.style.transform, 'translateX(-12.5%)', 'Resume preserves position');
    app.frame(12100);
    assert.equal(app.track.style.transform, 'translateX(-25%)', 'The original 20s duration is preserved');
    for (let count = 0; count < 5; count += 1) { app.hover(true); app.hover(false); }
    assert.equal(app.frames.size, 1, 'Repeated hover leaves only one animation chain');
    app.unmount();
    assert.equal(app.frames.size, 0, 'No animation survives unmount');
    assert.equal(app.track.listenerCount, 0);
  }],
  ['WorksGallery preserves its initial media source without autonomous offscreen playback', async () => {
    const app = mountComponent('WorksGallery');
    assert.equal(app.video.source, '/videos/Video1.mp4', 'The original source remains present in initial HTML');
    assert.equal(app.video.preload, 'auto', 'The original preload policy remains unchanged');
    assert(!app.video.props.autoPlay, 'Native autoplay must not bypass visibility');
    assert.equal(app.video.loadCalls, 0);
    app.video.ready();
    app.document.dispatch('pointerdown');
    app.document.dispatch('keydown');
    await app.settle();
    assert.equal(app.video.playCalls, 0);
    app.unmount();
    assert.equal(app.observers.size, 0);
    assert.equal(app.document.listenerCount, 0);
  }],
  ['WorksGallery keeps autoplay muted and leaves sound changes to native controls', async () => {
    const app = mountComponent('WorksGallery');
    app.visibility(true);
    app.video.ready();
    await app.settle();
    assert.equal(app.video.muted, true, 'Automatic playback must remain muted');
    assert.equal(app.document.listenerCount, 0, 'Unrelated document interactions must not control sound');
    app.document.dispatch('pointerdown');
    app.document.dispatch('keydown', { key: 'Enter' });
    await app.settle();
    assert.equal(app.video.muted, true);
    assert.equal(app.video.playCalls, 1);
    assert.equal(app.video.props.controls, true);
    // The browser owns these properties when its volume controls are used.
    app.video.muted = false;
    app.video.volume = 0.35;
    app.video.ready();
    app.document.dispatch('pointerdown');
    app.document.dispatch('keydown', { key: 'Tab' });
    await app.settle();
    assert.equal(app.video.muted, false, 'Explicit native unmute remains available');
    assert.equal(app.video.volume, 0.35, 'Native volume is not reset by unrelated events');
    app.unmount();
    assert.equal(app.timers.size, 0);
  }],
  ['WorksGallery leaves native video arrow keys alone and navigates only from the container', async () => {
    const app = mountComponent('WorksGallery');
    assert.equal(app.key('ArrowRight', true), false, 'Native video controls keep their keyboard actions');
    assert.equal(app.video.source, '/videos/Video1.mp4');
    assert.equal(app.key('ArrowRight'), true);
    assert.equal(app.video.source, '/videos/Video3.mp4');
    app.unmount();
  }],
  ['WorksGallery respects reduced motion while retaining explicit playback and cancellation', async () => {
    const app = mountComponent('WorksGallery', { reducedMotion: true });
    assert.equal(app.video.source, '/videos/Video1.mp4');
    assert.equal(app.video.preload, 'auto');
    app.visibility(true);
    app.video.ready();
    await app.settle();
    assert.equal(app.video.playCalls, 0, 'Viewport entry and readiness do not autoplay with reduced motion');
    app.control('Ver video siguiente');
    app.video.ready();
    await app.settle();
    assert.equal(app.video.playCalls, 1, 'An explicit video selection can play');
    app.visibility(false);
    app.visibility(true);
    await app.settle();
    assert.equal(app.video.playCalls, 1, 'Re-entry does not restart a previous manual playback');
    await app.video.play();
    assert.equal(app.video.paused, false, 'The native play control remains usable');
    app.unmount();
    assert.equal(app.motionPreference.listenerCount, 0);
    const changing = mountComponent('WorksGallery');
    changing.visibility(true);
    assert(changing.video.listenerCount > 0);
    changing.reducedMotion(true);
    assert.equal(changing.video.listenerCount, 0, 'A new motion preference cancels pending readiness');
    changing.video.ready();
    await changing.settle();
    assert.equal(changing.video.playCalls, 0);
    changing.unmount();
    assert.equal(changing.timers.size, 0);
  }],
  ['WorksGallery cancels a delayed play when reduced motion becomes active', async () => {
    const app = mountComponent('WorksGallery');
    app.video.deferPlay = true;
    app.visibility(true);
    app.video.ready();
    await app.settle();
    assert.equal(app.video.playCalls, 1);
    app.reducedMotion(true);
    app.video.resolvePlay();
    await app.settle();
    assert.equal(app.video.paused, true, 'A delayed autoplay cannot override a new motion preference');
    assert.equal(app.video.muted, true);
    app.unmount();
    assert.equal(app.timers.size, 0);
    assert.equal(app.motionPreference.listenerCount, 0);
  }],
  ['WorksGallery coalesces readiness events and preserves a manual pause', async () => {
    const app = mountComponent('WorksGallery');
    app.visibility(true, 0.2);
    app.visibility(true, 0.35);
    app.visibility(true, 0.5);
    assert.equal(app.video.loadCalls, 1, 'One pending media load despite observer thresholds');
    assert.equal(app.video.preloadAtLoad[0], 'auto', 'Readiness retains the original preload policy');
    app.video.ready();
    await app.settle();
    assert.equal(app.video.playCalls, 1, 'loadeddata must not create a second playback request');
    app.advance(100);
    app.video.pause();
    app.visibility(false);
    assert.equal(app.video.preload, 'auto', 'Viewport exit preserves the original preload policy');
    app.visibility(true);
    await app.settle();
    assert.equal(app.video.playCalls, 1, 'A manually paused video stays paused on re-entry');
    app.unmount();
    assert.equal(app.timers.size, 0);
  }],
  ['WorksGallery cancels readiness when leaving the viewport and on unmount', async () => {
    const app = mountComponent('WorksGallery');
    app.visibility(true);
    const oldVideo = app.video;
    assert(oldVideo.listenerCount > 0, 'Test starts with a real pending readiness wait');
    app.visibility(false);
    assert.equal(oldVideo.listenerCount, 0, 'Viewport exit removes readiness listeners');
    oldVideo.ready();
    await app.settle();
    assert.equal(oldVideo.playCalls, 0, 'Late loadeddata cannot play an offscreen video');
    app.visibility(true);
    await app.settle();
    app.unmount();
    await app.settle();
    assert.equal(oldVideo.listenerCount, 0);
    assert.equal(app.document.listenerCount, 0);
    assert.equal(app.observers.size, 0);
    assert.equal(app.timers.size, 0, 'Reset timers do not survive unmount');
  }],
  ['WorksGallery pauses a play promise that resolves after leaving the viewport', async () => {
    const app = mountComponent('WorksGallery');
    app.video.deferPlay = true;
    app.visibility(true);
    app.video.ready();
    await app.settle();
    assert.equal(app.video.playCalls, 1);
    app.visibility(false);
    app.video.resolvePlay();
    await app.settle();
    assert.equal(app.video.paused, true, 'A stale play completion is immediately paused');
    assert.equal(app.video.muted, true, 'A stale play completion cannot enable sound');
    app.unmount();
    assert.equal(app.timers.size, 0);
  }],
  ['WorksGallery removes a pending load and cannot restart it after unmount', async () => {
    const app = mountComponent('WorksGallery');
    app.visibility(true);
    const detachedVideo = app.video;
    assert(detachedVideo.listenerCount > 0);
    app.unmount();
    assert.equal(detachedVideo.listenerCount, 0, 'Unmount removes every pending readiness listener');
    detachedVideo.ready();
    await app.settle();
    assert.equal(detachedVideo.playCalls, 0, 'Readiness from a detached element is ignored');
    assert.equal(app.timers.size, 0);
    assert.equal(app.observers.size, 0);
    assert.equal(app.document.listenerCount, 0);
  }],
  ['WorksGallery ignores readiness from a replaced video and keeps the original sequence', async () => {
    const app = mountComponent('WorksGallery');
    app.visibility(true);
    const replacedVideo = app.video;
    app.control('Ver video siguiente');
    assert.equal(replacedVideo.listenerCount, 0, 'Replacing a video cancels its readiness listeners');
    replacedVideo.ready();
    await app.settle();
    assert.equal(replacedVideo.playCalls, 0);
    assert.equal(app.video.source, '/videos/Video3.mp4');
    app.video.ready();
    await app.settle();
    app.ended();
    assert.equal(app.video.source, '/videos/Video4.mp4');
    app.video.ready();
    await app.settle();
    app.ended();
    assert.equal(app.video.source, '/videos/Video5.mp4');
    app.video.ready();
    await app.settle();
    app.ended();
    assert.equal(app.video.source, '/videos/Video5.mp4', 'The sequence stops after the final video');
    app.control('Ver video siguiente');
    assert.equal(app.video.source, '/videos/Video1.mp4', 'The next control keeps its original wrap behavior');
    app.unmount();
    assert.equal(app.timers.size, 0);
  }],
];

let failures = 0;
for (const [name, check] of checks) {
  try {
    await check();
    console.log(`PASS ${name}`);
  } catch (error) {
    failures += 1;
    console.error(`FAIL ${name}: ${error.message}`);
  }
}
assert.equal(failures, 0, `${failures} media behavior check(s) failed`);
console.log(`${checks.length} media behavior checks passed`);
