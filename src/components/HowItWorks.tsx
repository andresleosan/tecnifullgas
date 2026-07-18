import ScrollReveal from './ScrollReveal';
import { COMPANY_NAME, HOW_IT_WORKS } from '../utils/constants';

const LOGO_SRC = '/img/Logo.png';

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="how-it-works-surface px-6 sm:px-8 lg:px-12 py-16 sm:py-20"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.42)]">
              Cómo Trabajamos
            </h2>
            <div className="w-24 h-1.5 bg-tf-accent rounded-full mx-auto mt-5 shadow-lg shadow-tf-accent/30" />
            <p className="text-xl sm:text-2xl font-semibold text-white/85 mt-5">
              3 pasos para resolver tu necesidad
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative">
          <div className="hidden md:block absolute top-16 left-[18%] right-[18%] h-px bg-white/15" />
          {HOW_IT_WORKS.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 150}>
              <div className="text-center relative">
                <div className="relative z-10 mx-auto mb-7 flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-2xl shadow-black/25 ring-4 ring-white/15">
                  <img
                    src={LOGO_SRC}
                    alt={COMPANY_NAME}
                    className="h-20 w-20 object-contain"
                    loading="lazy"
                  />
                  <span className="absolute -right-1 -bottom-1 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-[#0B1E3A] text-xs font-black text-tf-accent shadow-lg">
                    {String(step.number).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/70 leading-relaxed max-w-xs mx-auto">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
