import { WHATSAPP_URL, INSTAGRAM_URL } from '../utils/constants'

export default function Footer() {
  return (
    <footer className="px-6 sm:px-8 lg:px-12 py-12 bg-tf-dark text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">TecnifullGas</h3>
            <p className="text-gray-300 text-sm">
              Servicios técnicos de gas profesionales y confiables en Medellín y sus alrededores.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-tf-accent transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#por-que-elegirnos" className="text-gray-300 hover:text-tf-accent transition-colors">
                  ¿Por qué elegirnos?
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-gray-300 hover:text-tf-accent transition-colors">
                  Cómo funciona
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-tf-accent transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <div className="space-y-3">
              <p className="text-sm">
                <span className="font-semibold">WhatsApp:</span> <br />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tf-accent hover:text-white transition-colors"
                >
                  3014065931
                </a>
              </p>
              <p className="text-sm">
                <span className="font-semibold">Instagram:</span> <br />
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tf-accent hover:text-white transition-colors"
                >
                  @tecnifullgas
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2026 TecnifullGas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
