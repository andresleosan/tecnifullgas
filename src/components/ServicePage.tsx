import { SERVICE_PAGES, type ServicePageData } from '../data/servicePages';
import { WHATSAPP_NUMBER, WHATSAPP_URL } from '../utils/constants';

export default function ServicePage({ page }: { page: ServicePageData }) {
  const serviceName = page.id === 'calentadores' ? 'calentadores' : 'estufas';
  const otherService = SERVICE_PAGES.find((service) => service.id !== page.id);
  const fallbackImage = page.image
    .replace('/servicios-webp/', '/')
    .replace(/\.webp$/, '.png');
  const whatsappUrl = new URL(WHATSAPP_URL);
  whatsappUrl.searchParams.set(
    'text',
    `Hola, quiero consultar una revisión de ${serviceName} a gas a domicilio en Medellín o el área metropolitana. ¿Me indican disponibilidad y el valor de la visita?`,
  );
  const contactHref = whatsappUrl.toString();
  const contactClasses =
    'inline-flex min-h-12 items-center justify-center rounded-lg bg-tf-accent px-6 py-3 text-center font-bold text-tf-dark transition-colors hover:bg-[#ff9a42] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white';

  return (
    <main id="contenido-principal" tabIndex={-1} className="bg-white">
      <section className="hero-surface px-6 pb-14 pt-36 text-white sm:px-8 sm:pb-20 sm:pt-40 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Ruta de navegación" className="mb-8 text-sm text-slate-200">
            <ol className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <li>
                <a
                  href="/"
                  className="underline underline-offset-4 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Inicio
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="capitalize">
                {serviceName} a gas
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <h1 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                {page.heading}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">{page.intro}</p>
              <a
                href={contactHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${contactClasses} mt-8 w-full sm:w-auto`}
              >
                Solicitar revisión por WhatsApp
              </a>
            </div>
            <picture className="block overflow-hidden rounded-2xl shadow-xl shadow-black/20">
              <source srcSet={page.image} type="image/webp" />
              <img
                src={fallbackImage}
                alt={page.imageAlt}
                width={page.imageWidth}
                height={page.imageHeight}
                fetchPriority="high"
                className="block h-auto w-full"
              />
            </picture>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-4 sm:px-8 sm:py-8 lg:px-12">
        {page.sections.map((section) => (
          <section
            key={section.heading}
            className="grid gap-5 border-b border-tf-border py-10 last:border-b-0 sm:py-12 lg:grid-cols-3 lg:gap-12"
          >
            <h2 className="text-2xl font-bold leading-snug text-tf-dark sm:text-3xl">
              {section.heading}
            </h2>
            <div className="space-y-4 text-base leading-8 text-tf-text sm:text-lg lg:col-span-2">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section aria-labelledby="preguntas-servicio" className="bg-tf-bg-light px-6 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 id="preguntas-servicio" className="mb-8 text-2xl font-bold text-tf-dark sm:text-3xl">
            Preguntas sobre el servicio de {serviceName}
          </h2>
          {page.faqs.map((faq) => (
            <details key={faq.question} className="border-b border-tf-border first-of-type:border-t">
              <summary className="cursor-pointer py-5 pr-3 text-lg font-semibold text-tf-dark marker:text-tf-primary hover:text-tf-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tf-primary">
                {faq.question}
              </summary>
              <p className="pb-6 pr-4 text-base leading-8 text-tf-text">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {otherService && (
        <section aria-labelledby="otro-servicio" className="px-6 py-12 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl">
            <h2 id="otro-servicio" className="text-xl font-bold text-tf-dark sm:text-2xl">
              También atendemos {otherService.id} a gas
            </h2>
            <a
              href={`/${otherService.slug}`}
              className="mt-4 inline-block font-semibold text-tf-primary underline underline-offset-4 transition-colors hover:text-tf-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tf-primary"
            >
              {otherService.heading}
            </a>
          </div>
        </section>
      )}

      <section aria-labelledby="contacto-servicio" className="bg-tf-dark px-6 py-12 text-white sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2">
            <h2 id="contacto-servicio" className="text-2xl font-bold sm:text-3xl">
              Consulta la revisión de tu {page.id === 'calentadores' ? 'calentador' : 'estufa'}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
              Cuéntanos qué sucede con el equipo y en qué barrio o municipio necesitas la atención a
              domicilio. Por WhatsApp podemos confirmar disponibilidad y el valor de la visita.
            </p>
            <p className="mt-4 text-sm text-slate-200">WhatsApp: {WHATSAPP_NUMBER}</p>
          </div>
          <a
            href={contactHref}
            target="_blank"
            rel="noopener noreferrer"
            className={contactClasses}
          >
            Consultar por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
