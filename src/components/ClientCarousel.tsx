import { useEffect, useRef, useState } from 'react';

const CLIENT_IMAGES = [
  { src: '/img/Cliente1.png', alt: 'Excelente servicio muy responsable' },
  { src: '/img/Cliente2.png', alt: '👏👏👏' },
  { src: '/img/Cliente3.png', alt: 'Los mejores sin duda 👏👏👏👏❤️' },
  { src: '/img/Cliente4.png', alt: 'Excelente servicio' },
];

const DURATION = 20000;

export default function ClientCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const elapsedRef = useRef(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [playbackOverride, setPlaybackOverride] = useState<boolean | null>(null);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const rotationEnabled = playbackOverride ?? !reducedMotion;
  const shouldAnimate = rotationEnabled && !hovered && !focused;

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
    const track = trackRef.current;
    if (!track || !shouldAnimate) return;

    let animId: number | null = null;
    const startTime = performance.now();
    let disposed = false;

    const start = (time: number) => {
      animId = null;
      if (disposed) return;
      const elapsed = elapsedRef.current + time - startTime;
      const progress = (elapsed % DURATION) / DURATION;
      track.style.transform = `translateX(${-progress * 50}%)`;
      animId = requestAnimationFrame(start);
    };

    animId = requestAnimationFrame(start);

    return () => {
      disposed = true;
      elapsedRef.current = (elapsedRef.current + performance.now() - startTime) % DURATION;
      if (animId !== null) cancelAnimationFrame(animId);
      animId = null;
    };
  }, [shouldAnimate]);

  const images = CLIENT_IMAGES.concat(CLIENT_IMAGES);

  return (
    <div
      className="mt-8"
      role="region"
      aria-label="Opiniones de clientes"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false);
      }}
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-center lg:text-left text-xs font-medium text-white/60 uppercase tracking-wider">
          Confían en nosotros
        </p>
        <button
          type="button"
          className="carousel-pause-control"
          aria-label={rotationEnabled ? 'Pausar opiniones de clientes' : 'Reanudar opiniones de clientes'}
          onClick={() => setPlaybackOverride(!rotationEnabled)}
        >
          {rotationEnabled ? 'Pausar' : 'Reanudar'}
        </button>
      </div>
      <div style={{ overflow: 'hidden' }}>
        <div ref={trackRef} style={{ display: 'flex', width: 'max-content' }}>
          {images.map((img, i) => (
            <img
              key={`${i}-${img.src}`}
              src={img.src}
              alt={i >= CLIENT_IMAGES.length ? '' : img.alt}
              aria-hidden={i >= CLIENT_IMAGES.length}
              className="mx-4 sm:mx-6 shrink-0 h-12 sm:h-16 object-contain"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
