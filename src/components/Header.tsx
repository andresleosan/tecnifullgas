import { smoothScroll } from '../utils/helpers'
import Button from './common/Button'

export default function Header() {
  return (
    <header id="header" className="sticky top-0 z-40 bg-white border-b border-tf-bg-light shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-r from-tf-primary to-tf-accent rounded-lg flex items-center justify-center text-white font-bold text-lg">
            T
          </div>
          <span className="text-xl sm:text-2xl font-bold text-tf-dark hidden sm:inline">TecnifullGas</span>
          <span className="text-lg sm:text-xl font-bold text-tf-dark sm:hidden">TG</span>
        </div>

        {/* Navegación Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => smoothScroll('servicios')}
            className="text-tf-text hover:text-tf-primary transition-colors font-medium"
          >
            Servicios
          </button>
          <button
            onClick={() => smoothScroll('por-que-elegirnos')}
            className="text-tf-text hover:text-tf-primary transition-colors font-medium"
          >
            ¿Por qué?
          </button>
          <button
            onClick={() => smoothScroll('como-funciona')}
            className="text-tf-text hover:text-tf-primary transition-colors font-medium"
          >
            Cómo funciona
          </button>
          <button
            onClick={() => smoothScroll('trabajos')}
            className="text-tf-text hover:text-tf-primary transition-colors font-medium"
          >
            Trabajos
          </button>
          <button
            onClick={() => smoothScroll('faq')}
            className="text-tf-text hover:text-tf-primary transition-colors font-medium"
          >
            Preguntas
          </button>
        </div>

        {/* Botón WhatsApp Desktop */}
        <Button
          variant="primary"
          text="Contáctanos"
          href="https://wa.me/573014065931"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block"
        />

        {/* Hamburguesa Mobile */}
        <button className="md:hidden text-tf-dark hover:text-tf-primary transition-colors" aria-label="Abrir menú">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  )
}
