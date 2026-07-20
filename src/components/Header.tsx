import { useState, useEffect } from 'react';
import { smoothScroll } from '../utils/helpers';
import { COMPANY_NAME, WHATSAPP_URL } from '../utils/constants';
import Button from './common/Button';

const NAV_LINKS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'nuestros-servicios', label: 'Nuestros Servicios' },
  { id: 'trabajos', label: 'Trabajos' },
  { id: 'como-funciona', label: 'Cómo funciona' },
  { id: 'faq', label: 'Preguntas' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id: string) => {
    smoothScroll(id);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 border-b border-white/[0.08] transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B1E3A]/95 backdrop-blur-[14px] shadow-xl shadow-[#0B1E3A]/20 py-2'
          : 'bg-[#0B1E3A]/[0.88] backdrop-blur-[14px] py-4'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/img/Logo.png"
            alt={COMPANY_NAME}
            className="w-12 h-12 rounded-full object-cover shadow-lg shadow-black/30 ring-1 ring-white/30"
          />
          <span className="text-xl sm:text-2xl font-bold text-white hidden sm:inline">
            {COMPANY_NAME}
          </span>
          <span className="text-lg sm:text-xl font-bold text-white sm:hidden">{COMPANY_NAME}</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="text-white hover:text-tf-accent active:text-tf-accent focus-visible:text-tf-accent transition-colors font-semibold relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-tf-accent transition-all duration-300 group-hover:w-full" />
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
          className="md:hidden text-white hover:text-tf-accent transition-colors"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#102A55]/95 backdrop-blur-md px-6 pb-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="block w-full text-left py-3 text-white hover:text-tf-accent active:text-tf-accent transition-colors font-semibold"
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
  );
}
