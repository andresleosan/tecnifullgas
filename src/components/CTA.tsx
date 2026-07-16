import Button from './common/Button'
import { WHATSAPP_URL } from '../utils/constants'

export default function CTA() {
  return (
    <section id="cta-final" className="px-6 sm:px-8 lg:px-12 py-16 sm:py-24 bg-gradient-to-r from-tf-primary to-tf-accent text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">¿Listo para empezar?</h2>
        <p className="text-xl sm:text-2xl mb-8 opacity-90">Contáctanos hoy mismo y resuelve tu problema</p>
        <Button
          variant="primary"
          text="Contáctanos por WhatsApp"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-tf-primary hover:bg-gray-100"
        />
        <div className="mt-12 text-center">
          <p className="text-lg font-semibold mb-2">📱 Número de contacto:</p>
          <p className="text-2xl font-bold">3014065931</p>
          <p className="text-sm opacity-75 mt-4">Ubicación: Medellín y alrededores</p>
        </div>
      </div>
    </section>
  )
}
