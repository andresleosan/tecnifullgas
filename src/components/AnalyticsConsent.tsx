import { useEffect, useRef, useState } from 'react';
import { createAnalytics } from '../utils/analytics';

export default function AnalyticsConsent({ measurementId }: { measurementId: string }) {
  const analyticsRef = useRef<ReturnType<typeof createAnalytics> | null>(null);
  const [ready, setReady] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!/^G-[A-Z0-9]+$/.test(measurementId)) return;
    const analytics = createAnalytics(measurementId);
    analyticsRef.current = analytics;
    setExpanded(analytics.getChoice() === null);
    setReady(true);
    return () => {
      analytics.destroy();
      analyticsRef.current = null;
    };
  }, [measurementId]);

  if (!ready) return null;

  const choose = (choice: 'accepted' | 'rejected') => {
    analyticsRef.current?.setChoice(choice);
    setExpanded(false);
  };

  if (!expanded) {
    return (
      <button
        type="button"
        onClick={() => setExpanded(true)}
        className="fixed bottom-5 left-4 z-40 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-tf-dark shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tf-primary"
        aria-label="Cambiar preferencias de privacidad"
      >
        Privacidad
      </button>
    );
  }

  return (
    <section
      aria-labelledby="analytics-consent-title"
      aria-describedby="analytics-consent-description"
      className="fixed bottom-24 left-4 right-4 z-40 max-w-sm rounded-xl border border-slate-200 bg-white p-4 text-tf-dark shadow-xl sm:bottom-5 sm:right-auto"
    >
      <h2 id="analytics-consent-title" className="text-base font-bold">Privacidad y estadísticas</h2>
      <p id="analytics-consent-description" className="mt-2 text-sm leading-6 text-slate-600">
        Con tu permiso usamos Google Analytics para medir visitas y clics a WhatsApp.
        Puedes rechazarlo y seguir usando la web con normalidad.
      </p>
      <a href="/privacidad" className="mt-2 inline-block text-sm text-tf-primary underline underline-offset-4">
        Cómo usamos los datos
      </a>
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={() => choose('accepted')}
          className="min-h-11 flex-1 rounded-lg border border-tf-primary bg-white px-3 py-2 text-sm font-semibold text-tf-primary hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tf-primary"
        >
          Aceptar
        </button>
        <button
          type="button"
          onClick={() => choose('rejected')}
          className="min-h-11 flex-1 rounded-lg border border-tf-primary bg-white px-3 py-2 text-sm font-semibold text-tf-primary hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tf-primary"
        >
          Rechazar
        </button>
      </div>
    </section>
  );
}
