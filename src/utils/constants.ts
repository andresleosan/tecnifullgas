import { Service } from '../types';

export const WHATSAPP_NUMBER = '3014065931';

const WHATSAPP_MESSAGE =
  'Hola, acabo de ver su página web y estoy interesado en contratar sus servicios. Me brindan más información por favor.';

export const WHATSAPP_URL = `https://wa.me/573014065931?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const INSTAGRAM_URL = 'https://www.instagram.com/tecnifullgas';
export const COMPANY_NAME = 'Tecni Full Gas';
export const COMPANY_LOCATION = 'Medellín y alrededores';

export const HOW_IT_WORKS = [
  {
    number: 1,
    title: 'Contacto',
    description: `Llámanos o escríbenos por WhatsApp al ${WHATSAPP_NUMBER}. Cuéntanos tu necesidad con los detalles que puedas.`,
  },
  {
    number: 2,
    title: 'Visita',
    description:
      'Nuestro equipo llega a tu ubicación rápidamente. Realizamos un diagnóstico profesional y te explicamos la solución.',
  },
  {
    number: 3,
    title: 'Solución',
    description:
      'Ejecutamos el trabajo con calidad y profesionalismo. Te quedas con la tranquilidad de que todo está en orden.',
  },
];

export const FAQ_ITEMS = [
  {
    id: 'q1',
    question: '¿Cuál es el horario de atención?',
    answer:
      'Lunes a Viernes: 08:00 AM - 06:00 PM\nSábados: 08:00 AM - 03:00 PM\nDomingos y festivos: No laboramos',
  },
  {
    id: 'q2',
    question: '¿Atienden en toda Medellín?',
    answer:
      'Sí, atendemos Medellín y sus alrededores. Podemos evaluar disponibilidad en otras ciudades. Contáctanos para confirmar tu ubicación.',
  },
  {
    id: 'q3',
    question: '¿Cuál es el costo de los servicios?',
    answer:
      'Los precios dependen del servicio requerido y la complejidad. Te haremos una cotización sin costo después del diagnóstico inicial.',
  },
  {
    id: 'q4',
    question: '¿Ofrecen garantía en los trabajos?',
    answer:
      'Garantizamos la calidad de nuestro trabajo y el profesionalismo. Contáctanos para detalles específicos sobre cobertura en cada servicio.',
  },
  {
    id: 'q5',
    question: '¿Puedo contactar de noche?',
    answer:
      'Sí, puedes escribirnos por WhatsApp en cualquier momento. Nuestro equipo responde lo más pronto posible.',
  },
];

export const SERVICES_EXPANDED: Service[] = [
  {
    id: 'estufas',
    title: 'Estufas',
    image: '/img/Estufas.png',
    imageWidth: 1952,
    imageHeight: 806,
    description: 'Instalación, mantenimiento y reparación de estufas de gas.',
    keywords: ['reparación de estufas Medellín', 'mantenimiento de estufas de gas', 'instalación de estufas'],
  },
  {
    id: 'calentadores',
    title: 'Calentadores',
    image: '/img/Calentadores.png',
    imageWidth: 1953,
    imageHeight: 805,
    description: 'Servicio técnico especializado en calentadores a gas.',
    keywords: [
      'reparación de calentadores de gas en Medellín',
      'mantenimiento de calentadores Medellín',
      'servicio técnico calentadores Medellín',
    ],
  },
  {
    id: 'campanas',
    title: 'Campanas',
    image: '/img/Campanas.png',
    imageWidth: 1953,
    imageHeight: 805,
    description: 'Instalación y reparación de campanas extractoras.',
    keywords: ['reparación de campanas Medellín', 'instalación de campanas extractoras', 'mantenimiento de campanas'],
  },
  {
    id: 'fugas',
    title: 'Fugas',
    image: '/img/Fugas.png',
    imageWidth: 1953,
    imageHeight: 805,
    description: 'Detección y reparación de fugas de gas.',
    keywords: ['fugas de gas Medellín', 'detección de fugas de gas', 'reparación de fugas de gas'],
  },
  {
    id: 'reparaciones',
    title: 'Reparaciones',
    image: '/img/Reparaciones.png',
    imageWidth: 1952,
    imageHeight: 806,
    description: 'Reparación general de todos los sistemas de gas.',
    keywords: ['reparación de sistemas de gas', 'servicio técnico de gas Medellín', 'reparaciones de gas'],
  },
  {
    id: 'repuestos',
    title: 'Repuestos',
    image: '/img/Repuestos.png',
    imageWidth: 1952,
    imageHeight: 806,
    description: 'Suministro e instalación de repuestos originales.',
    keywords: ['repuestos para calentadores de gas', 'repuestos originales de gas', 'repuestos estufas Medellín'],
  },
];
