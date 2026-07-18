import { Service } from '../types';

export const WHATSAPP_NUMBER = '3014065931';
export const WHATSAPP_URL = 'https://wa.me/573014065931';
export const INSTAGRAM_URL = 'https://www.instagram.com/tecnifullgas';
export const COMPANY_NAME = 'TecnifullGas';
export const COMPANY_LOCATION = 'Medellín y alrededores';

export const WHY_CHOOSE_US = [
  {
    id: 'experience',
    title: 'Experiencia',
    emoji: '⭐',
    description:
      'Años de trayectoria en servicios técnicos de gas. Conocemos cada detalle del mercado y las necesidades de nuestros clientes.',
  },
  {
    id: 'trust',
    title: 'Confianza',
    emoji: '✅',
    description:
      'Trabajamos con transparencia total. Nuestros clientes nos recomiendan porque cumplimos lo que prometemos, siempre.',
  },
  {
    id: 'speed',
    title: 'Respuesta Rápida',
    emoji: '⚡',
    description:
      'Tu tiempo es valioso. Nos caracterizamos por responder de inmediato a tus llamadas y resolver problemas en el menor tiempo posible.',
  },
  {
    id: 'professionalism',
    title: 'Atención Profesional',
    emoji: '👨‍💼',
    description:
      'Equipo capacitado, respetuoso y siempre dispuesto a aclarar tus dudas. Nos preocupamos por tu satisfacción en cada interacción.',
  },
];

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
      'Estamos disponibles para emergencias. Contacta con nosotros por WhatsApp y te responderemos con la mayor brevedad posible.',
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
      'Sí, puedes escribirnos por WhatsApp en cualquier momento. Nuestro equipo responde lo más pronto posible, priorizando emergencias.',
  },
];

export const SERVICES_EXPANDED: Service[] = [
  {
    id: 'estufas',
    title: 'Estufas',
    image: '/img/Estufas.png',
    description: 'Instalación, mantenimiento y reparación de estufas de gas.',
  },
  {
    id: 'calentadores',
    title: 'Calentadores',
    image: '/img/Calentadores.png',
    description: 'Servicio técnico especializado en calentadores a gas.',
  },
  {
    id: 'campanas',
    title: 'Campanas',
    image: '/img/Campanas.png',
    description: 'Instalación y reparación de campanas extractoras.',
  },
  {
    id: 'fugas',
    title: 'Fugas',
    image: '/img/Fugas.png',
    description: 'Detección y reparación de fugas de gas.',
  },
  {
    id: 'reparaciones',
    title: 'Reparaciones',
    image: '/img/Reparaciones.png',
    description: 'Reparación general de todos los sistemas de gas.',
  },
  {
    id: 'repuestos',
    title: 'Repuestos',
    image: '/img/Repuestos.png',
    description: 'Suministro e instalación de repuestos originales.',
  },
];
