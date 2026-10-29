import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const sourcePath = fileURLToPath(new URL('../src/utils/analytics.ts', import.meta.url));
const source = existsSync(sourcePath) ? readFileSync(sourcePath, 'utf8') : '';
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
});
const module = { exports: {} };
new Function('exports', 'module', compiled.outputText)(module.exports, module);
assert.equal(typeof module.exports.createAnalytics, 'function', 'El módulo debe exponer createAnalytics');
const { createAnalytics } = module.exports;

const KEY = 'tecnifullgas.analytics-consent.v1';
const ID = 'G-TFG123';
const DAY = 86_400_000;
const SITE = 'https://www.tecnifullgas.com';
const PATHS = ['/', '/reparacion-calentadores-gas-medellin', '/reparacion-estufas-gas-medellin'];
const saved = (choice, age = 0) => JSON.stringify({ choice, savedAt: Date.now() - age });

function fixture(options = {}) {
  const requests = [];
  const listeners = new Set();
  const storageListeners = new Set();
  const storage = new Map(options.stored === undefined ? [] : [[KEY, options.stored]]);
  const cookies = new Set(['_ga', '_ga_TFG123', 'site-preference']);
  const cookieWrites = [];
  const document = {
    referrer: options.referrer ?? 'https://www.google.com/search?q=private-referrer',
    head: {
      appendChild(script) {
        requests.push(script);
        if (options.blockScript) throw new Error('Carga bloqueada');
        return script;
      },
    },
    createElement(tag) {
      assert.equal(tag, 'script');
      return {};
    },
    addEventListener(type, listener, capture) {
      assert.equal(type, 'click');
      assert.equal(capture, true, 'La medición escucha en captura sin cancelar el contacto');
      listeners.add(listener);
    },
    removeEventListener(type, listener, capture) {
      assert.equal(type, 'click');
      assert.equal(capture, true);
      listeners.delete(listener);
    },
  };
  Object.defineProperty(document, 'cookie', {
    get: () => [...cookies].map((name) => `${name}=test-value`).join('; '),
    set: (value) => {
      cookieWrites.push(value);
      if (/max-age=0/i.test(value)) cookies.delete(value.split('=')[0]);
    },
  });
  const browser = {
    location: new URL(options.url ?? `${SITE}/?email=private-query#private-fragment`),
    navigator: { globalPrivacyControl: options.gpc, doNotTrack: options.dnt },
    doNotTrack: options.windowDnt,
    document,
    gtag: options.gtag,
    addEventListener(type, listener) {
      assert.equal(type, 'storage');
      storageListeners.add(listener);
    },
    removeEventListener(type, listener) {
      assert.equal(type, 'storage');
      storageListeners.delete(listener);
    },
  };
  const localStorage = {
    getItem: (key) => storage.get(key) ?? null,
    setItem: (key, value) => storage.set(key, value),
    removeItem: (key) => storage.delete(key),
  };
  Object.defineProperty(browser, 'localStorage', {
    get() {
      if (options.storageThrows) throw new Error('Almacenamiento no disponible');
      return localStorage;
    },
  });
  function storageEvent(overrides = {}) {
    const event = {
      key: KEY, newValue: storage.get(KEY) ?? null,
      storageArea: localStorage, url: `${SITE}/`, ...overrides,
    };
    for (const listener of [...storageListeners]) listener(event);
  }
  function otherTab(value) {
    if (value === null) storage.delete(KEY);
    else storage.set(KEY, value);
    storageEvent();
  }
  function click(href = 'https://wa.me/573014065931?text=private-contact', placement = 'content') {
    const anchor = {
      nodeType: 1,
      getAttribute: (name) => name === 'href' ? href : null,
      closest(selector) {
        if (selector === 'a[href]') return this;
        if (selector === '.floating-whatsapp' && placement === 'floating') return this;
        if (selector === placement && ['header', 'footer'].includes(placement)) return {};
        return null;
      },
    };
    let prevented = false;
    const event = {
      target: { nodeType: 1, closest: (selector) => anchor.closest(selector) },
      preventDefault: () => { prevented = true; },
    };
    for (const listener of [...listeners]) listener(event);
    assert.equal(prevented, false, 'La medición nunca impide abrir el contacto');
  }
  return { browser, requests, listeners, storageListeners, storage, cookies, cookieWrites, click, storageEvent, otherTab };
}

const calls = (f) => (f.browser.dataLayer ?? []).map((entry) => Array.from(entry));
const events = (f, name) => calls(f).filter((entry) => entry[0] === 'event' && entry[1] === name);
let passed = 0;
function test(name, run) {
  run();
  passed += 1;
  console.log(`Analítica correcta: ${name}`);
}

test('otros orígenes e IDs inválidos nunca escriben cookies de analítica', () => {
  for (const url of ['http://localhost:5173/', 'https://otro.example/', 'https://tecnifullgas.pages.dev/', 'http://www.tecnifullgas.com/']) {
    const f = fixture({ url });
    const analytics = createAnalytics(ID, f.browser);
    analytics.setChoice('accepted');
    analytics.setChoice('rejected');
    assert.equal(f.cookieWrites.length, 0, `No alterar cookies en ${url}`);
    assert.deepEqual([...f.cookies], ['_ga', '_ga_TFG123', 'site-preference']);
    analytics.destroy();
  }
  const invalid = fixture();
  const analytics = createAnalytics('UA-123', invalid.browser);
  analytics.setChoice('rejected');
  assert.equal(invalid.cookieWrites.length, 0);
  analytics.destroy();
});

test('revocación, borrado y caducidad en otra pestaña deshabilitan inmediatamente', () => {
  for (const value of [saved('rejected'), null, saved('accepted', 181 * DAY)]) {
    const f = fixture({ stored: saved('accepted') });
    const analytics = createAnalytics(ID, f.browser);
    f.cookieWrites.length = 0;
    f.otherTab(value);
    assert.equal(f.browser[`ga-disable-${ID}`], true);
    assert.equal(f.listeners.size, 0);
    assert(f.cookieWrites.length > 0);
    f.click();
    assert.equal(events(f, 'contact_click').length, 0);
    assert.equal(analytics.getChoice(), value?.includes('rejected') ? 'rejected' : null);
    analytics.destroy();
    assert.equal(f.storageListeners.size, 0);
  }
  const cleared = fixture({ stored: saved('accepted') });
  const analytics = createAnalytics(ID, cleared.browser);
  cleared.storage.clear();
  cleared.storageEvent({ key: null, newValue: null });
  assert.equal(cleared.browser[`ga-disable-${ID}`], true);
  assert.equal(cleared.listeners.size, 0);
  analytics.destroy();
});

test('storage solo aplica la clave y estado actuales del mismo origen', () => {
  const f = fixture();
  const analytics = createAnalytics(ID, f.browser);
  const accepted = saved('accepted');
  f.storage.set(KEY, accepted);
  for (const overrides of [
    { key: 'otra-preferencia', newValue: accepted },
    { newValue: saved('rejected') },
    { newValue: accepted, storageArea: {} },
    { newValue: accepted, url: 'https://otro.example/' },
    { key: null, newValue: null },
  ]) f.storageEvent(overrides);
  assert.equal(analytics.getChoice(), null);
  assert.equal(f.requests.length, 0);
  f.otherTab(accepted);
  assert.equal(analytics.getChoice(), 'accepted');
  assert.equal(f.requests.length, 1);
  assert.equal(events(f, 'page_view').length, 1);
  f.storageEvent();
  assert.equal(events(f, 'page_view').length, 1);
  analytics.destroy();
  assert.equal(f.storageListeners.size, 0);
  const blocked = fixture({ gpc: true });
  const respectSignal = createAnalytics(ID, blocked.browser);
  blocked.otherTab(accepted);
  assert.equal(respectSignal.getChoice(), 'rejected');
  assert.equal(blocked.requests.length, 0);
  respectSignal.destroy();
});

test('cookies de analítica restringidas a HTTPS, SameSite Lax y el dominio público', () => {
  for (const pathname of PATHS) {
    const f = fixture({ url: `${SITE}${pathname}`, stored: saved('accepted') });
    const analytics = createAnalytics(ID, f.browser);
    const config = calls(f).find((entry) => entry[0] === 'config')?.[2] ?? {};
    const flags = String(config.cookie_flags ?? '').split(';').map((flag) => flag.trim().toLowerCase());
    assert.deepEqual({
      secure: flags.includes('secure'),
      sameSite: flags.find((flag) => flag.startsWith('samesite=')),
      domain: config.cookie_domain,
    }, { secure: true, sameSite: 'samesite=lax', domain: f.browser.location.hostname });
    analytics.destroy();
  }
});

test('sin decisión o rechazo no hay tag, eventos ni cola de clics', () => {
  const f = fixture();
  const analytics = createAnalytics(ID, f.browser);
  assert.equal(analytics.getChoice(), null);
  f.click();
  analytics.setChoice('rejected');
  assert.equal(analytics.getChoice(), 'rejected');
  assert.equal(f.requests.length, 0);
  assert.equal(calls(f).length, 0);
  assert.equal(JSON.parse(f.storage.get(KEY)).choice, 'rejected');
  analytics.destroy();
});

test('aceptar configura privacidad y un page_view limpio una sola vez', () => {
  const f = fixture();
  const analytics = createAnalytics(ID, f.browser);
  f.click();
  analytics.setChoice('accepted');
  analytics.setChoice('accepted');
  assert.equal(f.requests.length, 1);
  assert.equal(f.requests[0].src, `https://www.googletagmanager.com/gtag/js?id=${ID}`);
  assert.equal(f.requests[0].async, true);
  assert.equal(f.requests[0].referrerPolicy, 'origin');
  const configs = calls(f).filter((entry) => entry[0] === 'config');
  assert.equal(configs.length, 1);
  assert.equal(configs[0][2].send_page_view, false);
  assert.equal(configs[0][2].allow_google_signals, false);
  assert.equal(configs[0][2].allow_ad_personalization_signals, false);
  assert.equal(configs[0][2].cookie_expires, 180 * 86_400);
  for (const [, , consent] of calls(f).filter((entry) => entry[0] === 'consent')) {
    assert.equal(consent.ad_storage, 'denied');
    assert.equal(consent.ad_user_data, 'denied');
    assert.equal(consent.ad_personalization, 'denied');
  }
  assert.equal(events(f, 'page_view').length, 1);
  assert.equal(events(f, 'page_view')[0][2].page_location, `${SITE}/`);
  assert.equal(events(f, 'page_view')[0][2].page_referrer, 'https://www.google.com');
  assert.equal(events(f, 'contact_click').length, 0, 'No se recuperan clics anteriores al consentimiento');
  assert(!JSON.stringify(calls(f)).includes('private-'), 'Sin query, hash, mensaje ni referrer completo');
  analytics.destroy();
});

test('clics delegados con método, ubicación y servicio limitados', () => {
  for (const [index, pathname] of PATHS.entries()) {
    const f = fixture({ url: `${SITE}${pathname}?private-query=1#private-fragment` });
    const analytics = createAnalytics(ID, f.browser);
    analytics.setChoice('accepted');
    for (const placement of ['header', 'footer', 'floating', 'content']) f.click(undefined, placement);
    f.click('tel:+573014065931');
    f.click('https://wa.me/5700000000000');
    f.click('https://www.instagram.com/tecnifullgas');
    const contacts = events(f, 'contact_click');
    assert.equal(contacts.length, 5);
    assert.deepEqual(contacts.slice(0, 4).map((entry) => entry[2].placement), ['header', 'footer', 'floating', 'content']);
    for (const [, , params] of contacts) {
      assert.deepEqual(Object.keys(params).sort(), ['contact_method', 'page_path', 'placement', 'service']);
      assert.equal(params.page_path, pathname);
      assert.equal(params.service, ['general', 'calentadores', 'estufas'][index]);
    }
    assert.equal(contacts[4][2].contact_method, 'phone');
    assert(!JSON.stringify(calls(f)).includes('private-'));
    analytics.destroy();
  }
});

test('revocar bloquea y elimina únicamente cookies de Google Analytics', () => {
  const f = fixture();
  const analytics = createAnalytics(ID, f.browser);
  analytics.setChoice('accepted');
  f.click();
  analytics.setChoice('rejected');
  f.click();
  assert.equal(events(f, 'contact_click').length, 1);
  assert.equal(f.browser[`ga-disable-${ID}`], true);
  assert.deepEqual([...f.cookies], ['site-preference']);
  assert(f.cookieWrites.some((value) => /domain=tecnifullgas\.com;/i.test(value)));
  assert(f.cookieWrites.some((value) => /domain=www\.tecnifullgas\.com;/i.test(value)));
  const lastConsent = calls(f).filter((entry) => entry[0] === 'consent').at(-1)[2];
  assert.equal(lastConsent.analytics_storage, 'denied');
  analytics.setChoice('accepted');
  assert.equal(events(f, 'page_view').length, 1, 'No duplicar visitas al cambiar preferencia');
  analytics.destroy();
});

test('preferencias corruptas, futuras o vencidas no autorizan', () => {
  for (const stored of ['{', saved('unknown'), saved('accepted', 181 * DAY), saved('accepted', -DAY)]) {
    const f = fixture({ stored });
    const analytics = createAnalytics(ID, f.browser);
    assert.equal(analytics.getChoice(), null);
    assert.equal(f.requests.length, 0);
    analytics.destroy();
  }
  for (const choice of ['accepted', 'rejected']) {
    const f = fixture({ stored: saved(choice, DAY) });
    const analytics = createAnalytics(ID, f.browser);
    assert.equal(analytics.getChoice(), choice);
    assert.equal(f.requests.length, choice === 'accepted' ? 1 : 0);
    analytics.destroy();
  }
});

test('GPC y DNT prevalecen sobre consentimiento guardado y explícito', () => {
  for (const signal of [{ gpc: true }, { dnt: '1' }, { dnt: 'yes' }, { windowDnt: '1' }]) {
    const f = fixture({ ...signal, stored: saved('accepted') });
    const analytics = createAnalytics(ID, f.browser);
    analytics.setChoice('accepted');
    f.click();
    assert.equal(analytics.getChoice(), 'rejected');
    assert.equal(f.requests.length, 0);
    assert.equal(calls(f).length, 0);
    analytics.destroy();
  }
});

test('caducidad y señales de privacidad nuevas detienen los clics de una sesión abierta', () => {
  const now = Date.now;
  const f = fixture({ stored: saved('accepted') });
  const analytics = createAnalytics(ID, f.browser);
  try {
    Date.now = () => now() + 180 * DAY;
    f.click();
    assert.equal(analytics.getChoice(), null);
    assert.equal(events(f, 'contact_click').length, 0);
    assert.equal(f.browser[`ga-disable-${ID}`], true);
    assert.equal(f.storage.has(KEY), false);
  } finally {
    Date.now = now;
    analytics.destroy();
  }
  const g = fixture({ stored: saved('accepted') });
  const active = createAnalytics(ID, g.browser);
  g.browser.navigator.globalPrivacyControl = true;
  g.click();
  assert.equal(active.getChoice(), 'rejected');
  assert.equal(events(g, 'contact_click').length, 0);
  assert.equal(g.browser[`ga-disable-${ID}`], true);
  active.destroy();
});

test('desarrollo, otros hosts, rutas desconocidas e IDs inválidos no envían', () => {
  for (const url of ['http://localhost:5173/', 'https://localhost/', 'https://tecnifullgas.pages.dev/', `${SITE}/privacidad`, 'http://www.tecnifullgas.com/']) {
    const f = fixture({ url, stored: saved('accepted') });
    const analytics = createAnalytics(ID, f.browser);
    f.click();
    assert.equal(f.requests.length, 0);
    assert.equal(calls(f).length, 0);
    analytics.destroy();
  }
  for (const id of ['', 'G-ABC?x=1', 'UA-123', 'G-abc']) {
    const f = fixture();
    const analytics = createAnalytics(id, f.browser);
    analytics.setChoice('accepted');
    assert.equal(f.requests.length, 0);
    assert.equal(calls(f).length, 0);
    analytics.destroy();
  }
});

test('almacenamiento o Google bloqueados no rompen el contacto', () => {
  for (const options of [{ storageThrows: true }, { blockScript: true }, { gtag: () => { throw new Error('Tag bloqueado'); } }]) {
    const f = fixture(options);
    const analytics = createAnalytics(ID, f.browser);
    assert.doesNotThrow(() => analytics.setChoice('accepted'));
    assert.doesNotThrow(() => f.click());
    assert.doesNotThrow(() => analytics.setChoice('rejected'));
    analytics.destroy();
  }
});

test('montajes y limpieza no duplican listeners ni page_view', () => {
  const f = fixture({ stored: saved('accepted') });
  const first = createAnalytics(ID, f.browser);
  first.destroy();
  const second = createAnalytics(ID, f.browser);
  assert.equal(f.requests.length, 1);
  assert.equal(events(f, 'page_view').length, 1);
  assert.equal(f.listeners.size, 1);
  assert.equal(f.storageListeners.size, 1);
  f.click();
  assert.equal(events(f, 'contact_click').length, 1);
  second.destroy();
  assert.equal(f.listeners.size, 0);
  assert.equal(f.storageListeners.size, 0);
  f.click();
  assert.equal(events(f, 'contact_click').length, 1);
});

console.log(`${passed} grupos de pruebas de analítica correctos; sin conexiones externas.`);
