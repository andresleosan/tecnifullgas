import Button from './common/Button';
import ClientCarousel from './ClientCarousel';
import HeroCarousel from './HeroCarousel';
import ScrollReveal from './ScrollReveal';
import { WHATSAPP_URL, COMPANY_LOCATION } from '../utils/constants';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="hero-surface px-6 sm:px-8 lg:px-12 pt-28 sm:pt-32 lg:pt-40 pb-20 sm:pb-24 lg:pb-28"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <ScrollReveal>
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              Reparación y mantenimiento de <span className="text-tf-accent">gas en Medellín</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/[0.85] mt-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Servicio técnico a domicilio para calentadores y estufas de todas las marcas.
              También atendemos campanas extractoras y fugas de gas en Medellín y el área metropolitana.
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <Button
                variant="primary"
                text="Consultar servicio por WhatsApp"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>

            <p className="text-white/75 mt-6">
              <strong>Atención a domicilio:</strong> {COMPANY_LOCATION}
            </p>

            <p className="mt-4 max-w-xl text-sm leading-6 text-white/85">
              Garantía de 3 meses en repuestos y 6 meses en mano de obra.
              Consulta las condiciones para el trabajo que necesitas.
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
