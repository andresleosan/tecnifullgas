import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type TouchEvent,
} from 'react';

const HERO_SLIDES = [
  {
    src: '/img/Calentador.png',
    alt: 'Comparación antes y después de un calentador a gas: partes internas y equipo montado.',
    width: 531,
    height: 663,
  },
  {
    src: '/img/Cocina.png',
    alt: 'Cubierta de gas con cuatro quemadores encendidos y fotografías de sus componentes internos.',
    width: 714,
    height: 712,
  },
  {
    src: '/img/Servicios.png',
    alt: 'Cartel de Tecnifullgas: mantenimiento de calentadores, estufas y campanas; reparaciones; detección de fugas; instalación de calentadores y estufas; venta de equipos y repuestos. Incluye los lemas Seguridad garantizada, Trabajo profesional y confiable y Atención rápida y eficiente.',
    width: 718,
    height: 713,
  },
];

const AUTOPLAY_DELAY = 4000;

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [playbackOverride, setPlaybackOverride] = useState<boolean | null>(null);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const timerRef = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const rotationEnabled = playbackOverride ?? !reducedMotion;

  const clearTimer = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const goToSlide = useCallback((direction: 1 | -1) => {
    setActiveIndex((current) => (current + direction + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const handleControl = (direction: 1 | -1) => {
    goToSlide(direction);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      handleControl(-1);
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      handleControl(1);
    }
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const deltaX = touchEndX - touchStartX.current;

    if (Math.abs(deltaX) > 48) {
      handleControl(deltaX > 0 ? -1 : 1);
    }

    touchStartX.current = null;
  };

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => {
      setReducedMotion(preference.matches);
      if (preference.matches) setPlaybackOverride((current) => current === true ? null : current);
    };
    updatePreference();
    preference.addEventListener('change', updatePreference);
    return () => preference.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (!rotationEnabled || hovered || focused) return;
    timerRef.current = window.setTimeout(() => goToSlide(1), AUTOPLAY_DELAY);
    return clearTimer;
  }, [activeIndex, clearTimer, focused, goToSlide, hovered, rotationEnabled]);

  return (
    <div
      className="hero-carousel group relative h-[300px] sm:h-[380px] lg:h-[600px] rounded-[32px] overflow-hidden"
      role="region"
      aria-label="Galería principal de servicios Tecni Full Gas"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false);
      }}
    >
      {HERO_SLIDES.map((slide, index) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          aria-hidden={index !== activeIndex}
          width={slide.width}
          height={slide.height}
          className={`hero-carousel-slide ${index === activeIndex ? 'is-active' : ''}`}
          loading={index === 0 ? 'eager' : 'lazy'}
          fetchPriority={index === 0 ? 'high' : 'low'}
        />
      ))}

      <button
        type="button"
        className="carousel-pause-control absolute bottom-3 right-3 z-10"
        aria-label={rotationEnabled ? 'Pausar galería principal' : 'Reanudar galería principal'}
        onClick={() => setPlaybackOverride(!rotationEnabled)}
      >
        {rotationEnabled ? 'Pausar' : 'Reanudar'}
      </button>

      <button
        type="button"
              className="hero-carousel-control left-1 sm:left-2"
        aria-label="Ver imagen anterior"
        onClick={() => handleControl(-1)}
      >
        <span aria-hidden="true">‹</span>
      </button>

      <button
        type="button"
              className="hero-carousel-control right-1 sm:right-2"
        aria-label="Ver imagen siguiente"
        onClick={() => handleControl(1)}
      >
        <span aria-hidden="true">›</span>
      </button>
    </div>
  );
}
