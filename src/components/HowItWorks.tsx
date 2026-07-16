import Section from './common/Section'
import { HOW_IT_WORKS } from '../utils/constants'

export default function HowItWorks() {
  return (
    <Section id="como-funciona" title="Cómo Funciona" subtitle="3 pasos simples para resolver tu necesidad">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {HOW_IT_WORKS.map((step) => (
          <div key={step.number} className="text-center">
            <div className="w-16 h-16 bg-gradient-tf rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6">
              {step.number}
            </div>
            <h3 className="text-2xl font-bold text-tf-dark mb-3">{step.title}</h3>
            <p className="text-tf-text leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
