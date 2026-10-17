import { getServicePage, SERVICE_PAGES } from './data/servicePages';

export const SITE_URL = 'https://www.tecnifullgas.com';

export interface SeoMetadata {
  title: string;
  description: string;
  canonical?: string;
  image: string;
  imageAlt: string;
  indexable: boolean;
  preloadImage?: string;
  schema: object;
}

export function normalizePath(pathname: string): string {
  const path = pathname.split(/[?#]/, 1)[0] || '/';
  return path.replace(/\/+$/, '') || '/';
}

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const IMAGE = `${SITE_URL}/og-image.png`;
const IMAGE_ALT = 'Tecni Full Gas — reparación y mantenimiento de gas a domicilio en Medellín';
const HOME_TITLE = 'Reparación de gas doméstico en Medellín | Tecni Full Gas';
const HOME_DESCRIPTION =
  'Reparación y mantenimiento de calentadores y estufas de gas a domicilio en Medellín y el área metropolitana. Atendemos cualquier marca. Consulta disponibilidad.';

const AREA_SERVED = [
  { '@type': 'City', name: 'Medellín' },
  { '@type': 'AdministrativeArea', name: 'Área Metropolitana del Valle de Aburrá' },
];

const organization = {
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: 'Tecni Full Gas',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/img/Logo.png`,
  description: HOME_DESCRIPTION,
  telephone: '+573014065931',
  areaServed: AREA_SERVED,
  sameAs: [
    'https://www.instagram.com/tecnifullgas',
    'https://www.facebook.com/profile.php?id=61590600920439',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+573014065931',
    contactType: 'customer service',
    availableLanguage: ['Spanish'],
    areaServed: AREA_SERVED,
  },
};

const website = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: 'Tecni Full Gas',
  inLanguage: 'es-CO',
  publisher: { '@id': ORGANIZATION_ID },
};

export function getSeoMetadata(pathname: string): SeoMetadata {
  const path = normalizePath(pathname);
  const page = getServicePage(path);

  if (path !== '/' && !page) {
    return {
      title: 'Página no encontrada | Tecni Full Gas',
      description: 'La página solicitada no está disponible. Consulta los servicios de Tecni Full Gas.',
      image: IMAGE,
      imageAlt: IMAGE_ALT,
      indexable: false,
      schema: { '@context': 'https://schema.org', '@graph': [] },
    };
  }

  const canonical = `${SITE_URL}${path}`;
  const services = (page ? [page] : SERVICE_PAGES).map((service) => {
    const url = `${SITE_URL}${normalizePath(`/${service.slug}`)}`;
    return {
      '@type': 'Service',
      '@id': `${url}#service`,
      name: service.heading,
      description: service.description,
      url,
      image: `${SITE_URL}${service.image}`,
      provider: { '@id': ORGANIZATION_ID },
      areaServed: AREA_SERVED,
    };
  });

  const breadcrumbs = page
    ? [
        {
          '@type': 'BreadcrumbList',
          '@id': `${canonical}#breadcrumb`,
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: page.heading, item: canonical },
          ],
        },
      ]
    : [];

  return {
    title: page?.title ?? HOME_TITLE,
    description: page?.description ?? HOME_DESCRIPTION,
    canonical,
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    indexable: true,
    preloadImage: page?.image ?? '/img/Calentador.png',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [organization, website, ...services, ...breadcrumbs],
    },
  };
}
