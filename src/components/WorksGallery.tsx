import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type TouchEvent,
} from 'react';
import ScrollReveal from './ScrollReveal';

const WORK_VIDEOS = [
  {
    src: '/videos/Video1.mp4',
    title: 'Resultado TecnifullGas 1',
  },
  {
    src: '/videos/Video2.mp4',
    title: 'Resultado TecnifullGas 2',
  },
  {
    src: '/videos/Video3.mp4',
    title: 'Resultado TecnifullGas 3',
  },
  {
    src: '/videos/Video4.mp4',
    title: 'Resultado TecnifullGas 4',
  },
  {
    src: '/videos/Video5.mp4',
    title: 'Resultado TecnifullGas 5',
  },
];

export default function WorksGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [shouldContinuePlaying, setShouldContinuePlaying] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const touchStartX = useRef<number | null>(null);

  const goToVideo = useCallback((direction: 1 | -1) => {
    setActiveIndex((current) => (current + direction + WORK_VIDEOS.length) % WORK_VIDEOS.length);
  }, []);

  const handleControl = (direction: 1 | -1) => {
    setShouldContinuePlaying(true);
    goToVideo(direction);
  };

  const handleEnded = () => {
    setShouldContinuePlaying(true);
    goToVideo(1);
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
    if (!shouldContinuePlaying) return;

    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.play().catch(() => {
      setShouldContinuePlaying(false);
    });
  }, [activeIndex, shouldContinuePlaying]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldContinuePlaying(true);
          return;
        }

        videoRef.current?.pause();
        setShouldContinuePlaying(false);
      },
      {
        threshold: 0.45,
      }
    );

    observer.observe(carousel);

    return () => observer.disconnect();
  }, []);

  const activeVideo = WORK_VIDEOS[activeIndex];

  return (
    <section
      id="trabajos"
      className="works-surface px-6 sm:px-8 lg:px-12 py-16 sm:py-20 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Resultados que hablan por sí solos</h2>
            <p className="text-xl sm:text-2xl text-white/75 mt-2">
              Transformamos equipos deteriorados en sistemas seguros y eficientes.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div
            ref={carouselRef}
            className="video-carousel relative"
            role="region"
            aria-label="Galería de videos TecnifullGas"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <video
              key={activeVideo.src}
              ref={videoRef}
              className="work-video"
              controls
              muted
              preload="metadata"
              playsInline
              aria-label={`${activeVideo.title}. Video ${activeIndex + 1} de ${WORK_VIDEOS.length}`}
              onEnded={handleEnded}
              onPlay={() => setShouldContinuePlaying(true)}
              onPause={(event) => {
                if (!event.currentTarget.ended) {
                  setShouldContinuePlaying(false);
                }
              }}
            >
              <source src={activeVideo.src} type="video/mp4" />
              Tu navegador no soporta la reproducción de video.
            </video>

            <button
              type="button"
              className="media-carousel-control left-4 sm:left-6"
              aria-label="Ver video anterior"
              onClick={() => handleControl(-1)}
            >
              <span aria-hidden="true">‹</span>
            </button>

            <button
              type="button"
              className="media-carousel-control right-4 sm:right-6"
              aria-label="Ver video siguiente"
              onClick={() => handleControl(1)}
            >
              <span aria-hidden="true">›</span>
            </button>

            <div className="absolute top-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
              {WORK_VIDEOS.map((video, index) => (
                <button
                  key={video.src}
                  type="button"
                  className={`video-carousel-dot ${index === activeIndex ? 'is-active' : ''}`}
                  aria-label={`Ver video ${index + 1}`}
                  aria-current={index === activeIndex ? 'true' : undefined}
                  onClick={() => {
                    setShouldContinuePlaying(true);
                    setActiveIndex(index);
                  }}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
