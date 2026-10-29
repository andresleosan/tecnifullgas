import ScrollReveal from './ScrollReveal';
import { FAQ_ITEMS } from '../utils/constants';

export default function FAQ() {
  return (
    <section id="faq" className="faq-surface px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-tf-dark">Preguntas Frecuentes</h2>
            <p className="text-xl sm:text-2xl font-semibold text-tf-primary mt-2">
              Resuelve tus dudas antes de contactarnos
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* FAQ Acordeón */}
          <div className="lg:col-span-3 space-y-3">
            {FAQ_ITEMS.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 80}>
                <details name="preguntas-frecuentes" className="group rounded-xl border border-white/80 bg-white/75 px-5 shadow-sm">
                  <summary className="flex w-full cursor-pointer list-none items-center justify-between py-4 text-left text-lg font-semibold text-tf-dark transition-colors hover:text-tf-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                    <span>{item.question}</span>
                    <span
                      className="ml-4 transform transition-transform duration-300 group-open:rotate-180"
                      aria-hidden="true"
                    >
                      ▼
                    </span>
                  </summary>
                    <div className="whitespace-pre-line text-tf-text leading-relaxed pb-4">
                      {item.answer}
                    </div>
                </details>
              </ScrollReveal>
            ))}
          </div>

          {/* Fulli.png */}
          <ScrollReveal delay={400} className="lg:col-span-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-white rounded-full scale-110 opacity-50" />
              <img
                src="/img/Fulli.png"
                alt="Fulli — asistente experto en gas"
                width={256}
                height={256}
                className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full shadow-xl hover:rotate-3 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
