import { useState } from 'react'
import { smoothScroll } from '../utils/helpers'
import { WHATSAPP_URL } from '../utils/constants'
import Button from './common/Button'

const NAV_LINKS = [
  { id: 'servicios', label: 'Servicios' },
  { id: 'por-que-elegirnos', label: '¿Por qué?' },
  { id: 'como-funciona', label: 'Cómo funciona' },
  { id: 'trabajos', label: 'Trabajos' },
  { id: 'faq', label: 'Preguntas' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = (id: string) => {
    smoothScroll(id)
    setMenuOpen(false)
  }

  return (
    <header id="header" className="sticky top-0 z-40 bg-white border-b border-tf-bg-light shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-r from-tf-primary to-tf-accent rounded-lg flex items-center justify-center text-white font-bold text-lg">
            T
          </div>
          <span className="text-xl sm:text-2xl font-bold text-tf-dark hidden sm:inline">TecnifullGas</span>
          <span className="text-lg sm:text-xl font-bold text-tf-dark sm:hidden">TG</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="text-tf-text hover:text-tf-primary transition-colors font-medium"
            >
              {link.label}
            </button>
          ))}
        </div>

        <Button
          variant="primary"
          text="Contáctanos"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block"
        />

        <button
          className="md:hidden text-tf-dark hover:text-tf-primary transition-colors"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-tf-bg-light bg-white px-6 pb-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="block w-full text-left py-3 text-tf-text hover:text-tf-primary transition-colors font-medium"
            >
              {link.label}
            </button>
          ))}
          <Button
            variant="primary"
            text="Contáctanos por WhatsApp"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-2 text-center"
          />
        </div>
      )}
    </header>
  )
}
