import Button from './common/Button';
import ClientCarousel from './ClientCarousel';
import HeroCarousel from './HeroCarousel';
import ScrollReveal from './ScrollReveal';
import { WHATSAPP_URL, COMPANY_LOCATION, COMPANY_NAME } from '../utils/constants';

export default function Hero() {
  return (
    <section
      id="servicios"
      className="hero-surface px-6 sm:px-8 lg:px-12 pt-28 sm:pt-32 lg:pt-40 pb-20 sm:pb-24 lg:pb-28"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <ScrollReveal>
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 border border-white/15 bg-white/10 text-white text-sm font-semibold rounded-full mb-6">
              Servicios Técnicos Certificados
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              Soluciones en Gas con <span className="text-tf-accent">Garantía</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/[0.85] mt-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Instalación, mantenimiento y reparación profesional de sistemas de gas. Confía en 
              {COMPANY_NAME} para la seguridad de tu hogar y negocio.
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

            <p className="text-white/75 mt-6">
              <strong>Servimos en:</strong> {COMPANY_LOCATION}
            </p>

            <ClientCarousel />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-tf-accent/35 to-[#214B8A]/40 rounded-[32px] rotate-3 scale-105" />
            <HeroCarousel />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
