import ScrollReveal from './ScrollReveal';
import { SERVICES_EXPANDED } from '../utils/constants';

export default function Services() {
  return (
    <section
      id="nuestros-servicios"
      className="services-surface px-4 py-16 sm:px-6 sm:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider text-tf-accent">
              Servicios técnicos de gas
            </p>
            <h2 className="mt-4 text-3xl font-black text-tf-dark sm:text-5xl">
              Nuestros Servicios
            </h2>
            <p className="mt-4 text-lg font-semibold text-[#173B78] sm:text-2xl">
              Soluciones completas para cada necesidad
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Atención técnica confiable, con diagnóstico claro y soluciones pensadas para la
              seguridad de tu espacio.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {SERVICES_EXPANDED.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 100}>
              <article className="group relative overflow-hidden rounded-[28px] bg-slate-950 shadow-[0_22px_60px_rgba(15,23,42,0.14)] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(15,23,42,0.24)]">
                <img
                  src={service.image}
                  alt={`Servicio de ${service.title} Tecni Full Gas`}
                  loading="lazy"
                  className="block h-auto w-full transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-colors duration-500 group-hover:from-black/80 group-hover:via-black/30" />
                <div className="absolute inset-0 bg-white/0 transition-colors duration-500 group-hover:bg-white/5" />

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                  <h3 className="text-2xl font-black text-white sm:text-3xl">{service.title}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
                    {service.description}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
