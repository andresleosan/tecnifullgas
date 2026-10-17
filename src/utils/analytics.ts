type AnalyticsChoice = 'accepted' | 'rejected';
type Preference = { choice: AnalyticsChoice; savedAt: number };
type Gtag = (...args: unknown[]) => void;
type AnalyticsWindow = Window & {
  gtag?: Gtag;
  dataLayer?: unknown[];
  doNotTrack?: string;
};
type Session = {
  configured: boolean;
  pageViews: Set<string>;
  listener?: EventListener;
  storageListener?: (event: StorageEvent) => void;
};

const STORAGE_KEY = 'tecnifullgas.analytics-consent.v1';
const MAX_AGE = 180 * 24 * 60 * 60 * 1000;
const SITE = 'https://www.tecnifullgas.com';
const PATHS = ['/', '/reparacion-calentadores-gas-medellin', '/reparacion-estufas-gas-medellin'];
const sessions = new WeakMap<Window, Map<string, Session>>();
const denied = {
  analytics_storage: 'denied', ad_storage: 'denied',
  ad_user_data: 'denied', ad_personalization: 'denied',
};

function validPreference(value: unknown): value is Preference {
  if (!value || typeof value !== 'object') return false;
  const record = value as Partial<Preference>;
  return (record.choice === 'accepted' || record.choice === 'rejected')
    && typeof record.savedAt === 'number' && Number.isFinite(record.savedAt)
    && record.savedAt <= Date.now() && Date.now() - record.savedAt < MAX_AGE;
}

export function createAnalytics(measurementId: string, browser: Window = window) {
  const target = browser as AnalyticsWindow;
  const document = browser.document;
  const validId = /^G-[A-Z0-9]+$/.test(measurementId);
  const browserSessions = sessions.get(browser) ?? new Map<string, Session>();
  sessions.set(browser, browserSessions);
  const session = browserSessions.get(measurementId) ?? { configured: false, pageViews: new Set<string>() };
  browserSessions.set(measurementId, session);
  let preference: Preference | null = null;
  let destroyed = false;

  try {
    const stored: unknown = JSON.parse(browser.localStorage.getItem(STORAGE_KEY) ?? 'null');
    if (validPreference(stored)) preference = stored;
  } catch { /* Storage is optional; consent remains unset. */ }

  function privacySignal() {
    const navigator = browser.navigator as Navigator & { globalPrivacyControl?: boolean; msDoNotTrack?: string };
    return navigator.globalPrivacyControl === true
      || [navigator.doNotTrack, navigator.msDoNotTrack, target.doNotTrack]
        .some((value) => value === '1' || value?.toLowerCase() === 'yes');
  }

  function allowedPath() {
    return validId && browser.location.origin === SITE && PATHS.includes(browser.location.pathname)
      ? browser.location.pathname : null;
  }

  function command(...args: unknown[]) {
    try { target.gtag?.(...args); } catch { /* Measurement must never interrupt navigation. */ }
  }

  function removeListener() {
    if (session.listener === onClick) {
      document.removeEventListener('click', onClick, true);
      session.listener = undefined;
    }
  }

  function clearCookies() {
    if (!validId || browser.location.origin !== SITE) return;
    try {
      const names = document.cookie.split(';').map((part) => part.trim().split('=')[0])
        .filter((name) => /^_(?:ga(?:_|$)|gid$|gat(?:_|$)|gac_)/.test(name));
      const domains = new Set(['', browser.location.hostname, 'tecnifullgas.com', '.tecnifullgas.com', 'www.tecnifullgas.com', '.www.tecnifullgas.com']);
      for (const name of names) for (const domain of domains) {
        document.cookie = `${name}=; path=/; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT;${domain ? ` domain=${domain};` : ''}`;
      }
    } catch { /* Cookies can be unavailable in privacy modes. */ }
  }

  function disable() {
    removeListener();
    if (validId) (target as unknown as Record<string, unknown>)[`ga-disable-${measurementId}`] = true;
    if (session.configured) command('consent', 'update', { ...denied });
    clearCookies();
  }

  function getChoice(): AnalyticsChoice | null {
    if (privacySignal()) {
      disable();
      return 'rejected';
    }
    if (preference && !validPreference(preference)) {
      preference = null;
      disable();
      try { browser.localStorage.removeItem(STORAGE_KEY); } catch { /* Session-only fallback. */ }
    }
    return preference?.choice ?? null;
  }

  function cleanReferrer() {
    try {
      const referrer = new URL(document.referrer);
      return ['http:', 'https:'].includes(referrer.protocol) ? referrer.origin : '';
    } catch { return ''; }
  }

  function enable() {
    const pathname = allowedPath();
    if (!pathname || destroyed) return;
    (target as unknown as Record<string, unknown>)[`ga-disable-${measurementId}`] = false;
    if (!session.configured) {
      target.dataLayer ??= [];
      // gtag's documented command queue uses an Arguments object.
      // eslint-disable-next-line prefer-rest-params
      target.gtag ??= function () { target.dataLayer?.push(arguments); };
      command('consent', 'default', { ...denied });
      command('js', new Date());
      command('consent', 'update', { ...denied, analytics_storage: 'granted' });
      command('config', measurementId, {
        send_page_view: false,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
        cookie_expires: MAX_AGE / 1000,
        cookie_update: false,
        page_location: `${SITE}${pathname}`,
        page_referrer: cleanReferrer(),
      });
      session.configured = true;
      try {
        const script = document.createElement('script');
        script.async = true;
        script.referrerPolicy = 'origin';
        script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
        document.head.appendChild(script);
      } catch { /* Ad blockers must not break the page or contact links. */ }
    } else {
      command('consent', 'update', { ...denied, analytics_storage: 'granted' });
    }
    if (!session.pageViews.has(pathname)) {
      session.pageViews.add(pathname);
      command('event', 'page_view', {
        page_location: `${SITE}${pathname}`, page_referrer: cleanReferrer(), page_path: pathname,
      });
    }
    if (session.listener !== onClick) {
      if (session.listener) document.removeEventListener('click', session.listener, true);
      document.addEventListener('click', onClick, true);
      session.listener = onClick;
    }
  }

  function onClick(event: Event) {
    try {
      const pathname = allowedPath();
      if (destroyed || !pathname || getChoice() !== 'accepted') return;
      const clicked = event.target as Element | null;
      const anchor = clicked?.closest?.('a[href]');
      const href = anchor?.getAttribute('href');
      if (!anchor || !href) return;
      const url = new URL(href, browser.location.href);
      let contactMethod: 'whatsapp' | 'phone';
      if (url.protocol === 'https:' && url.hostname === 'wa.me' && !url.username && !url.password && url.pathname === '/573014065931') contactMethod = 'whatsapp';
      else if (url.protocol === 'tel:' && url.pathname.replace(/[\s().-]/g, '') === '+573014065931') contactMethod = 'phone';
      else return;
      const placement = anchor.closest('.floating-whatsapp') ? 'floating'
        : anchor.closest('header') ? 'header' : anchor.closest('footer') ? 'footer' : 'content';
      const service = pathname === PATHS[1] ? 'calentadores' : pathname === PATHS[2] ? 'estufas' : 'general';
      command('event', 'contact_click', { contact_method: contactMethod, page_path: pathname, placement, service });
    } catch { /* No measurement error may prevent a contact action. */ }
  }

  function setChoice(choice: AnalyticsChoice) {
    if (destroyed || (choice !== 'accepted' && choice !== 'rejected')) return;
    preference = { choice, savedAt: Date.now() };
    try { browser.localStorage.setItem(STORAGE_KEY, JSON.stringify(preference)); } catch { /* Keep the choice for this page only. */ }
    if (getChoice() === 'accepted') enable();
    else disable();
  }

  function onStorage(event: StorageEvent) {
    if (destroyed || (event.key !== STORAGE_KEY && event.key !== null)) return;
    try {
      const storage = browser.localStorage;
      if (event.storageArea !== storage || new URL(event.url).origin !== browser.location.origin) return;
      const current = storage.getItem(STORAGE_KEY);
      if (event.key === null ? event.newValue !== null || current !== null : event.newValue !== current) return;
      let stored: unknown = null;
      try { stored = JSON.parse(current ?? 'null'); } catch { /* Corrupt records do not authorize measurement. */ }
      preference = validPreference(stored) ? stored : null;
      if (getChoice() === 'accepted') enable();
      else disable();
    } catch { /* Ignore events whose origin or storage cannot be verified. */ }
  }

  if (getChoice() === 'accepted') enable();
  else disable();
  if (session.storageListener) browser.removeEventListener('storage', session.storageListener);
  browser.addEventListener('storage', onStorage);
  session.storageListener = onStorage;

  return {
    getChoice, setChoice, destroy: () => {
      destroyed = true;
      removeListener();
      if (session.storageListener === onStorage) {
        browser.removeEventListener('storage', onStorage);
        session.storageListener = undefined;
      }
    },
  };
}
