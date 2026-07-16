import { useState } from 'react'
import ScrollReveal from './ScrollReveal'
import { FAQ_ITEMS } from '../utils/constants'

export default function FAQ() {
  const [activeId, setActiveId] = useState<string | null>(null)

  const toggleFAQ = (id: string) => {
    setActiveId(activeId === id ? null : id)
  }

  return (
    <section id="faq" className="px-6 sm:px-8 lg:px-12 py-16 sm:py-24 bg-[#F0F7FF]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-tf-dark">Preguntas Frecuentes</h2>
            <p className="text-xl sm:text-2xl font-semibold text-tf-accent mt-2">
              Resuelve tus dudas antes de contactarnos
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* FAQ Acordeón */}
          <div className="lg:col-span-3 space-y-0">
            {FAQ_ITEMS.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 80}>
                <div className="border-b border-tf-bg-light">
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className="w-full flex justify-between items-center py-4 text-left text-lg font-semibold text-tf-dark hover:text-tf-hover transition-colors"
                    aria-expanded={activeId === item.id}
                  >
                    <span>{item.question}</span>
                    <span
                      className={`transform transition-transform duration-300 ml-4 ${
                        activeId === item.id ? 'rotate-180' : ''
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  {activeId === item.id && (
                    <div className="text-tf-text leading-relaxed pb-4">{item.answer}</div>
                  )}
                </div>
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
                className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full shadow-xl hover:rotate-3 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
