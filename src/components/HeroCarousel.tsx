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
    alt: 'Reparación de calentadores de gas en Medellín realizada por Tecni Full Gas',
    width: 531,
    height: 663,
  },
  {
    src: '/img/Cocina.png',
    alt: 'Reparación y mantenimiento de estufas de gas en Medellín por Tecni Full Gas',
    width: 714,
    height: 712,
  },
  {
    src: '/img/Servicios.png',
    alt: 'Servicio técnico de gas en Medellín — calentadores, estufas, campanas y fugas de gas',
    width: 718,
    height: 713,
  },
];

const AUTOPLAY_DELAY = 4000;

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const goToSlide = useCallback((direction: 1 | -1) => {
    setActiveIndex((current) => (current + direction + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const restartAutoplay = useCallback(() => {
    clearTimer();
    timerRef.current = window.setInterval(() => goToSlide(1), AUTOPLAY_DELAY);
  }, [clearTimer, goToSlide]);

  const handleControl = (direction: 1 | -1) => {
    goToSlide(direction);
    restartAutoplay();
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
    restartAutoplay();
    return clearTimer;
  }, [clearTimer, restartAutoplay]);

  return (
    <div
      className="hero-carousel group relative h-[300px] sm:h-[380px] lg:h-[600px] rounded-[32px] overflow-hidden"
      role="region"
      aria-label="Galería principal de servicios Tecni Full Gas"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {HERO_SLIDES.map((slide, index) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          width={slide.width}
          height={slide.height}
          className={`hero-carousel-slide ${index === activeIndex ? 'is-active' : ''}`}
          loading={index === 0 ? 'eager' : 'lazy'}
          fetchPriority={index === 0 ? 'high' : 'low'}
        />
      ))}

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
