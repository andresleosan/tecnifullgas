const CLIENT_IMAGES = [
  { src: '/img/Cliente1.png', alt: 'Cliente TecnifullGas' },
  { src: '/img/Cliente2.png', alt: 'Cliente TecnifullGas' },
  { src: '/img/Cliente3.png', alt: 'Cliente TecnifullGas' },
  { src: '/img/Cliente4.png', alt: 'Cliente TecnifullGas' },
]

export default function ClientCarousel() {
  return (
    <div className="client-carousel mt-8">
      <p className="text-center text-xs font-medium text-tf-text/60 uppercase tracking-wider mb-4">
        Confían en nosotros
      </p>
      <div className="overflow-hidden">
        <div className="client-track">
          {CLIENT_IMAGES.concat(CLIENT_IMAGES).map((img, i) => (
            <img
              key={i}
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
