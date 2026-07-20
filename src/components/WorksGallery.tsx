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
    title: 'Resultado Tecni Full Gas 1',
  },
  {
    src: '/videos/Video3.mp4',
    title: 'Resultado Tecni Full Gas 3',
  },
  {
    src: '/videos/Video4.mp4',
    title: 'Resultado Tecni Full Gas 4',
  },
  {
    src: '/videos/Video5.mp4',
    title: 'Resultado Tecni Full Gas 5',
  },
];

export default function WorksGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const touchStartX = useRef<number | null>(null);
  const inViewRef = useRef(false);
  const userPausedRef = useRef(false);
  const ignorePauseRef = useRef(false);
  const soundBlockedRef = useRef(false);

  const goToVideo = useCallback((direction: 1 | -1) => {
    setActiveIndex((current) => (current + direction + WORK_VIDEOS.length) % WORK_VIDEOS.length);
  }, []);

  const playActiveVideo = useCallback(async () => {
    const video = videoRef.current;
    if (!video || !inViewRef.current || userPausedRef.current) return;

    ignorePauseRef.current = true;

    // 1) Arrancar muteado: autoplay confiable en desktop y mobile
    video.defaultMuted = true;
    video.muted = true;
    video.volume = 1;

    try {
      if (video.readyState < 2) {
        await new Promise<void>((resolve, reject) => {
          const onReady = () => {
            cleanup();
            resolve();
          };
          const onError = () => {
            cleanup();
            reject(new Error('video error'));
          };
          const cleanup = () => {
            video.removeEventListener('loadeddata', onReady);
            video.removeEventListener('canplay', onReady);
            video.removeEventListener('error', onError);
          };

          video.addEventListener('loadeddata', onReady, { once: true });
          video.addEventListener('canplay', onReady, { once: true });
          video.addEventListener('error', onError, { once: true });
          video.load();
        });
      }

      await video.play();
    } catch {
      ignorePauseRef.current = false;
      return;
    }

    if (!inViewRef.current || userPausedRef.current) {
      ignorePauseRef.current = false;
      return;
    }

    // 2) Intentar activar sonido tras el play muteado
    video.defaultMuted = false;
    video.muted = false;

    if (video.paused) {
      video.muted = true;
      soundBlockedRef.current = true;
      try {
        await video.play();
      } catch {
        ignorePauseRef.current = false;
        return;
      }
    } else {
      soundBlockedRef.current = video.muted;
    }

    window.setTimeout(() => {
      ignorePauseRef.current = false;
    }, 100);
  }, []);

  const pauseActiveVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    ignorePauseRef.current = true;
    video.pause();
    window.setTimeout(() => {
      ignorePauseRef.current = false;
    }, 0);
  }, []);

  const handleControl = (direction: 1 | -1) => {
    userPausedRef.current = false;
    goToVideo(direction);
  };

  const handleEnded = () => {
    if (activeIndex === WORK_VIDEOS.length - 1) {
      userPausedRef.current = true;
      return;
    }

    userPausedRef.current = false;
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

  // Autoplay al entrar en viewport (threshold bajo para desktop)
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
          inViewRef.current = true;
          if (!userPausedRef.current) {
            void playActiveVideo();
          }
          return;
        }

        if (!entry.isIntersecting) {
          inViewRef.current = false;
          pauseActiveVideo();
        }
      },
      {
        threshold: [0, 0.2, 0.35, 0.5],
        rootMargin: '0px 0px -10% 0px',
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [pauseActiveVideo, playActiveVideo]);

  // Al cambiar de video, reproducir si sigue visible
  useEffect(() => {
    if (!inViewRef.current || userPausedRef.current) return;
    void playActiveVideo();
  }, [activeIndex, playActiveVideo]);

  // Desbloquear sonido con la primera interacción del usuario
  useEffect(() => {
    const unlockSound = () => {
      if (!inViewRef.current || userPausedRef.current || !soundBlockedRef.current) return;

      const video = videoRef.current;
      if (!video) return;

      ignorePauseRef.current = true;
      video.defaultMuted = false;
      video.muted = false;
      video.volume = 1;
      soundBlockedRef.current = false;

      if (video.paused) {
        void video.play().catch(() => undefined);
      }

      window.setTimeout(() => {
        ignorePauseRef.current = false;
      }, 100);
    };

    document.addEventListener('pointerdown', unlockSound);
    document.addEventListener('keydown', unlockSound);

    return () => {
      document.removeEventListener('pointerdown', unlockSound);
      document.removeEventListener('keydown', unlockSound);
    };
  }, []);

  const activeVideo = WORK_VIDEOS[activeIndex];

  return (
    <section
      ref={sectionRef}
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
            className="video-carousel relative"
            role="region"
            aria-label="Galería de videos Tecni Full Gas"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <video
              key={activeVideo.src}
              ref={(element) => {
                videoRef.current = element;
                if (element) {
                  element.defaultMuted = true;
                  element.muted = true;
                  element.volume = 1;
                }
              }}
              className="work-video"
              controls
              autoPlay
              preload="auto"
              playsInline
              aria-label={`${activeVideo.title}. Video ${activeIndex + 1} de ${WORK_VIDEOS.length}`}
              onEnded={handleEnded}
              onLoadedData={() => {
                if (inViewRef.current && !userPausedRef.current) {
                  void playActiveVideo();
                }
              }}
              onPlay={() => {
                userPausedRef.current = false;
              }}
              onPause={() => {
                if (ignorePauseRef.current) return;
                if (!inViewRef.current) return;
                if (videoRef.current?.ended) return;
                userPausedRef.current = true;
              }}
            >
              <source src={activeVideo.src} type="video/mp4" />
              Tu navegador no soporta la reproducción de video.
            </video>

            <button
              type="button"
              className="media-carousel-control left-1 sm:left-2"
              aria-label="Ver video anterior"
              onClick={() => handleControl(-1)}
            >
              <span aria-hidden="true">‹</span>
            </button>

            <button
              type="button"
              className="media-carousel-control right-1 sm:right-2"
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
                    userPausedRef.current = false;
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
