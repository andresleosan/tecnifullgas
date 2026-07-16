import ScrollReveal from './ScrollReveal'

export default function WorksGallery() {
  return (
    <section id="trabajos" className="px-6 sm:px-8 lg:px-12 py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-tf-dark">
              Resultados que hablan por sí solos
            </h2>
            <p className="text-xl sm:text-2xl text-tf-text mt-2">
              Transformamos equipos deteriorados en sistemas seguros y eficientes.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="relative rounded-2xl overflow-hidden h-[350px] sm:h-[400px] lg:h-[500px]">
            <img
              src="/img/Calentador.png"
              alt="Resultado de servicio — calentador restaurado"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-tf-dark/70 via-tf-dark/40 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 sm:px-12 lg:px-16 max-w-xl">
                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                    Equipo Restaurado
                  </span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                    Funcionamiento Óptimo
                  </span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                    Garantía Incluida
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
