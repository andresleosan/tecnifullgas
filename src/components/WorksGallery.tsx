import ScrollReveal from './ScrollReveal';

export default function WorksGallery() {
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
          <div className="relative rounded-3xl overflow-hidden h-[350px] sm:h-[400px] lg:h-[480px] shadow-2xl shadow-black/30 border border-white/10">
            <img
              src="/img/Calentador.png"
              alt="Resultado de servicio — calentador restaurado"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E3A]/95 via-[#173B78]/80 to-[#0B1E3A]/35" />
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
  );
}
