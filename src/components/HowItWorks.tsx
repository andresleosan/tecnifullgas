import ScrollReveal from './ScrollReveal'
import { HOW_IT_WORKS } from '../utils/constants'

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="px-6 sm:px-8 lg:px-12 py-16 sm:py-24 bg-gradient-to-b from-[#F8FAFC] to-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-tf-dark">Cómo Trabajamos</h2>
            <p className="text-xl sm:text-2xl font-semibold text-tf-accent mt-2">
              3 pasos para resolver tu necesidad
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Línea conectora (solo desktop) */}
          <div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-tf-primary to-tf-accent opacity-30" />

          {HOW_IT_WORKS.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 150}>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-tf-primary to-tf-accent rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg relative z-10">
                  {String(step.number).padStart(2, '0')}
                </div>
                <h3 className="text-2xl font-bold text-tf-dark mb-3">{step.title}</h3>
                <p className="text-tf-text leading-relaxed max-w-xs mx-auto">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
