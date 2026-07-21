import { useEffect } from 'react';
import { FAQ_ITEMS, SERVICES_EXPANDED } from '../utils/constants';

const SITE_URL = 'https://tecnifullgas.pages.dev';
const ORG_ID = `${SITE_URL}/#organization`;
const LOCALBUSINESS_ID = `${SITE_URL}/#localbusiness`;

/**
 * SeoSchema inyecta los schemas JSON-LD dinámicos basados en los datos de
 * `constants.ts` (Service por cada uno de los servicios + FAQPage con los FAQ).
 * No renderiza nada visible. Devuelve null. Cero impacto visual o de layout.
 */
export default function SeoSchema() {
  useEffect(() => {
    const serviceSchemas = SERVICES_EXPANDED.map((service) => ({
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${SITE_URL}/#service-${service.id}`,
      name: service.title,
      description: service.description,
      image: `${SITE_URL}${service.image}`,
      areaServed: {
        '@type': 'City',
        name: 'Medellín',
      },
      provider: {
        '@id': ORG_ID,
      },
      url: `${SITE_URL}/#nuestros-servicios`,
    }));

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faqpage`,
      mainEntity: FAQ_ITEMS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    };

    const graphSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'GeneralContractor',
          '@id': LOCALBUSINESS_ID,
          name: 'Tecni Full Gas',
          url: SITE_URL,
          image: `${SITE_URL}/img/Logo.png`,
          telephone: '+573014065931',
          priceRange: '$$',
          areaServed: {
            '@type': 'City',
            name: 'Medellín',
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Servicios técnicos de gas en Medellín',
            itemListElement: SERVICES_EXPANDED.map((service) => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                '@id': `${SITE_URL}/#service-${service.id}`,
                name: service.title,
                description: service.description,
                image: `${SITE_URL}${service.image}`,
              },
            })),
          },
        },
        ...serviceSchemas,
        faqSchema,
      ],
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.seoSchema = 'dynamic';
    script.textContent = JSON.stringify(graphSchema);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}
