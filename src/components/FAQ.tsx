import { useState } from 'react'
import Section from './common/Section'
import { FAQ_ITEMS } from '../utils/constants'

export default function FAQ() {
  const [activeId, setActiveId] = useState<string | null>(null)

  const toggleFAQ = (id: string) => {
    setActiveId(activeId === id ? null : id)
  }

  return (
    <Section id="faq" title="Preguntas Frecuentes" subtitle="Resuelve tus dudas sobre nuestros servicios">
      <div className="max-w-4xl mx-auto space-y-0">
        {FAQ_ITEMS.map((item) => (
          <div key={item.id} className="faq-item">
            <button
              onClick={() => toggleFAQ(item.id)}
              className="w-full faq-question"
              aria-expanded={activeId === item.id}
            >
              <span>{item.question}</span>
              <span className="faq-icon">▼</span>
            </button>
            {activeId === item.id && <div className="faq-answer px-0">{item.answer}</div>}
          </div>
        ))}
      </div>
    </Section>
  )
}
