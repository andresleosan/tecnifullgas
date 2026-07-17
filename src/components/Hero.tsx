import Button from './common/Button';
import ClientCarousel from './ClientCarousel';
import ScrollReveal from './ScrollReveal';
import { WHATSAPP_URL, COMPANY_LOCATION } from '../utils/constants';

export default function Hero() {
  return (
    <section
      id="servicios"
      className="hero-surface px-6 sm:px-8 lg:px-12 pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Contenido Hero */}
        <ScrollReveal>
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 bg-tf-accent/15 text-tf-accent text-sm font-semibold rounded-full mb-6">
              Servicios Técnicos Certificados
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-tf-dark leading-tight">
              Soluciones en Gas con{' '}
              <span className="bg-gradient-to-r from-tf-primary to-tf-accent bg-clip-text text-transparent">
                Garantía
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mt-6 leading-relaxed">
              Instalación, mantenimiento y reparación profesional de sistemas de gas. Confía en
              TecnifullGas para la seguridad de tu hogar y negocio.
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <Button
                variant="primary"
                text="Solicitar Ahora"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>

            <p className="text-slate-600 mt-6">
              <strong>Servimos a:</strong> {COMPANY_LOCATION}
            </p>

            <ClientCarousel />
          </div>
        </ScrollReveal>

        {/* Imagen Hero */}
        <ScrollReveal delay={200}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-tf-primary/10 to-tf-accent/10 rounded-3xl transform rotate-3 scale-105" />
            <img
              src="/img/Cocina.png"
              alt="Servicio técnico profesional de gas"
              className="relative w-full h-auto rounded-2xl shadow-2xl"
              loading="eager"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
