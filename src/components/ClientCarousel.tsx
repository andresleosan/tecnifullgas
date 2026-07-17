import { useEffect, useRef } from 'react'

const CLIENT_IMAGES = [
  { src: '/img/Cliente1.png', alt: 'Cliente TecnifullGas' },
  { src: '/img/Cliente2.png', alt: 'Cliente TecnifullGas' },
  { src: '/img/Cliente3.png', alt: 'Cliente TecnifullGas' },
  { src: '/img/Cliente4.png', alt: 'Cliente TecnifullGas' },
]

const DURATION = 20000

export default function ClientCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let animId: number
    let startTime: number | null = null
    let paused = false
    let pausedAt = 0

    const animate = (time: number) => {
      if (paused) {
        animId = requestAnimationFrame(animate)
        return
      }
      if (startTime === null) startTime = time - pausedAt
      const elapsed = time - startTime
      const progress = (elapsed % DURATION) / DURATION
      track.style.transform = `translateX(${-progress * 50}%)`
      animId = requestAnimationFrame(animate)
    }

    const onMouseEnter = () => {
      paused = true
      pausedAt = performance.now() - (startTime ?? 0)
    }

    const onMouseLeave = () => {
      startTime = null
      paused = false
      animId = requestAnimationFrame(animate)
    }

    animId = requestAnimationFrame(animate)
    track.addEventListener('mouseenter', onMouseEnter)
    track.addEventListener('mouseleave', onMouseLeave)

    return () => {
      cancelAnimationFrame(animId)
      track.removeEventListener('mouseenter', onMouseEnter)
      track.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  const images = CLIENT_IMAGES.concat(CLIENT_IMAGES)

  return (
    <div className="mt-8">
      <p className="text-center text-xs font-medium text-tf-text/60 uppercase tracking-wider mb-4">
        Confían en nosotros
      </p>
      <div style={{ overflow: 'hidden' }}>
        <div ref={trackRef} style={{ display: 'flex', width: 'max-content' }}>
          {images.map((img, i) => (
            <img
              key={`${i}-${img.src}`}
              src={img.src}
              alt={img.alt}
              className="mx-4 sm:mx-6 shrink-0 h-12 sm:h-16 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
