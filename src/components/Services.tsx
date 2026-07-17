import ScrollReveal from './ScrollReveal';
import { SERVICES_EXPANDED } from '../utils/constants';

export default function Services() {
  return (
    <section
      id="nuestros-servicios"
      className="services-surface px-6 sm:px-8 lg:px-12 py-16 sm:py-20"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-tf-dark">Nuestros Servicios</h2>
            <p className="text-xl sm:text-2xl font-semibold text-tf-accent mt-2">
              Soluciones completas para cada necesidad
            </p>
            <p className="text-slate-600 mt-4 leading-relaxed">
              Atención técnica confiable, con diagnóstico claro y soluciones pensadas para la
              seguridad de tu espacio.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_EXPANDED.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 100}>
              <div className="service-card h-full rounded-2xl p-6 sm:p-7">
                <div className="w-14 h-14 bg-gradient-to-br from-tf-primary to-tf-accent rounded-full flex items-center justify-center text-2xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-tf-dark mb-2">{service.title}</h3>
                <p className="text-tf-text text-sm leading-relaxed">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
