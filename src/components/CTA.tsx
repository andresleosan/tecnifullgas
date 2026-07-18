import Button from './common/Button';
import ScrollReveal from './ScrollReveal';
import { WHATSAPP_URL, WHATSAPP_NUMBER, COMPANY_LOCATION } from '../utils/constants';

export default function CTA() {
  return (
    <section id="cta-final" className="cta-surface px-6 sm:px-8 lg:px-12 py-14 sm:py-16 text-white">
      <ScrollReveal>
        <div className="cta-card max-w-4xl mx-auto text-center px-6 py-10 sm:px-12 sm:py-14">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">¿Listo para empezar?</h2>
          <p className="text-xl sm:text-2xl mb-8 opacity-80">
            Contáctanos hoy y resuelve tu problema
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              text="Solicitar Ahora"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shadow-lg shadow-black/20"
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg opacity-80 mb-2">Número de contacto:</p>
            <p className="text-2xl font-bold">{WHATSAPP_NUMBER}</p>
            <p className="text-sm opacity-60 mt-4">Ubicación: {COMPANY_LOCATION}</p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
