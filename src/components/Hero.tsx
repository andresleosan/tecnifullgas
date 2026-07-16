import Button from './common/Button'
import MetricCard from './MetricCard'
import ScrollReveal from './ScrollReveal'
import { WHATSAPP_URL, COMPANY_LOCATION, HERO_METRICS } from '../utils/constants'

export default function Hero() {
  return (
    <section id="hero" className="px-6 sm:px-8 lg:px-12 pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-24 lg:pb-32 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Contenido Hero */}
        <ScrollReveal>
          <div>
            <span className="inline-block px-4 py-1.5 bg-tf-primary/10 text-tf-primary text-sm font-semibold rounded-full mb-6">
              Servicios Técnicos Certificados
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-tf-dark leading-tight">
              Soluciones en Gas con{' '}
              <span className="bg-gradient-to-r from-tf-primary to-tf-accent bg-clip-text text-transparent">
                Garantía
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-tf-text mt-6 leading-relaxed">
              Instalación, mantenimiento y reparación profesional de sistemas de gas.
              Confía en TecnifullGas para la seguridad de tu hogar y negocio.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                text="Solicitar Ahora"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              />
              <Button
                variant="secondary"
                text="WhatsApp"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>

            <p className="text-tf-text mt-6">
              <strong>Servimos a:</strong> {COMPANY_LOCATION}
            </p>

            {/* Métricas */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-tf-bg-light">
              {HERO_METRICS.map((metric) => (
                <MetricCard key={metric.label} metric={metric} />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Imagen Hero */}
        <ScrollReveal delay={200}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-tf-primary/10 to-tf-accent/10 rounded-3xl transform rotate-3 scale-105" />
            <img
              src="/img/Cocina.png"
              alt="Servicio técnico profesional de gas"
              className="relative w-full h-auto rounded-2xl shadow-2xl"
              loading="eager"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
