import { CSSProperties } from 'react'

const CLIENT_IMAGES = [
  { src: '/img/Cliente1.png', alt: 'Cliente TecnifullGas' },
  { src: '/img/Cliente2.png', alt: 'Cliente TecnifullGas' },
  { src: '/img/Cliente3.png', alt: 'Cliente TecnifullGas' },
  { src: '/img/Cliente4.png', alt: 'Cliente TecnifullGas' },
]

const trackStyle: CSSProperties = {
  display: 'flex',
  width: 'max-content',
  animation: 'client-marquee 20s linear infinite',
}

export default function ClientCarousel() {
  return (
    <div className="mt-8">
      <p className="text-center text-xs font-medium text-tf-text/60 uppercase tracking-wider mb-4">
        Confían en nosotros
      </p>
      <div style={{ overflow: 'hidden' }}>
        <div style={trackStyle}>
          {CLIENT_IMAGES.concat(CLIENT_IMAGES).map((img, i) => (
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
