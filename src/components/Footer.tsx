import { WHATSAPP_URL, INSTAGRAM_URL, COMPANY_NAME } from '../utils/constants';
import { smoothScroll } from '../utils/helpers';

export default function Footer() {
  return (
    <footer className="footer-surface px-6 sm:px-8 lg:px-12 py-12 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/img/Logo.png"
                alt={COMPANY_NAME}
                className="w-10 h-10 rounded-full object-cover"
              />
              <h3 className="text-xl font-bold">{COMPANY_NAME}</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Servicios técnicos de gas profesionales y confiables en Medellín y sus alrededores.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => smoothScroll('servicios')}
                  className="text-gray-300 hover:text-tf-accent transition-colors"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => smoothScroll('nuestros-servicios')}
                  className="text-gray-300 hover:text-tf-accent transition-colors"
                >
                  Nuestros servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => smoothScroll('trabajos')}
                  className="text-gray-300 hover:text-tf-accent transition-colors"
                >
                  Trabajos
                </button>
              </li>
              <li>
                <button
                  onClick={() => smoothScroll('como-funciona')}
                  className="text-gray-300 hover:text-tf-accent transition-colors"
                >
                  Cómo funciona
                </button>
              </li>
              <li>
                <button
                  onClick={() => smoothScroll('faq')}
                  className="text-gray-300 hover:text-tf-accent transition-colors"
                >
                  Preguntas frecuentes
                </button>
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

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 {COMPANY_NAME}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
