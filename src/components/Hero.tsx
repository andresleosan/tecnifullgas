import Button from './common/Button'
import { WHATSAPP_URL, COMPANY_LOCATION } from '../utils/constants'

export default function Hero() {
  return (
    <section id="hero" className="px-6 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Contenido Hero */}
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-tf-dark leading-tight">
            Servicios Técnicos de Gas
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-tf-accent mt-4">Profesionales y Confiables</h2>
          <p className="section-description">
            Instalación, mantenimiento y reparación de sistemas de gas con la máxima calidad y respuesta rápida.
            Confía en TecnifullGas para la seguridad de tu hogar y negocio.
          </p>
          <div className="mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="primary"
              text="Contáctanos por WhatsApp"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
          <p className="text-tf-text text-lg mt-6">
            <strong>Servimos a:</strong> {COMPANY_LOCATION}
          </p>
          <p className="text-tf-text text-lg">
            <strong>Para:</strong> Residencial, comercial y empresarial
          </p>
        </div>

        {/* Imagen Hero (Placeholder) */}
        <div className="hidden lg:block">
          <div className="bg-gradient-tf rounded-lg h-96 flex items-center justify-center">
            <div className="text-center text-white">
              <svg className="w-32 h-32 mx-auto opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m0 0l7-7 7 7" />
              </svg>
              <p className="mt-4 font-semibold">Imagen Hero</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
