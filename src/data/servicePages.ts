export type ServicePageData = {
  slug: string;
  id: 'calentadores' | 'estufas';
  title: string;
  description: string;
  heading: string;
  intro: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  sections: Array<{ heading: string; paragraphs: string[] }>;
  faqs: Array<{ question: string; answer: string }>;
};

export const SERVICE_PAGES: ServicePageData[] = [
  {
    slug: 'reparacion-calentadores-gas-medellin',
    id: 'calentadores',
    title: 'Reparación de calentadores a gas en Medellín | Tecni Full Gas',
    description:
      'Reparación y mantenimiento de calentadores a gas de cualquier marca. Atención a domicilio en Medellín y el área metropolitana. Consulta por WhatsApp.',
    heading: 'Reparación de calentadores a gas en Medellín',
    intro:
      'Reparamos y hacemos mantenimiento a calentadores a gas de cualquier marca, con atención a domicilio en Medellín y el área metropolitana. Cuéntanos qué ocurre con tu equipo para coordinar una revisión.',
    image: '/img/servicios-webp/Calentadores.webp',
    imageAlt: 'Calentador a gas instalado en una pared',
    imageWidth: 1953,
    imageHeight: 805,
    sections: [
      {
        heading: 'Una revisión para entender la falla del calentador',
        paragraphs: [
          'Si el calentador no enciende, se apaga durante el uso o el agua no alcanza la temperatura habitual, puedes solicitar una revisión. La información sobre cuándo empezó la falla y cómo se presenta ayuda a preparar la visita.',
          'El diagnóstico permite definir si el equipo necesita mantenimiento, una reparación o un repuesto. El alcance del trabajo se explica antes de acordar la intervención.',
        ],
      },
      {
        heading: 'Mantenimiento y reparación según el estado del equipo',
        paragraphs: [
          'Una falla puntual y una consulta de mantenimiento requieren revisar necesidades distintas. Al contactarnos, indícanos si buscas resolver un problema de funcionamiento o consultar el estado general de tu calentador.',
          'Atendemos cualquier marca. Comparte la marca y el modelo si los conoces; la necesidad y disponibilidad de repuestos se confirman según el equipo y el diagnóstico.',
        ],
      },
      {
        heading: 'Servicio a domicilio en Medellín y el área metropolitana',
        paragraphs: [
          'La atención se realiza en tu domicilio. Escríbenos tu barrio o municipio, describe el problema y consulta la disponibilidad para coordinar la visita.',
          'Antes de programar, puedes consultar el valor de la visita y qué incluye la revisión. El presupuesto de la reparación dependerá del diagnóstico y de los repuestos que se requieran.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Reparan calentadores a gas de cualquier marca?',
        answer:
          'Sí, atendemos calentadores a gas de cualquier marca. Indícanos la marca y el modelo que conoces para consultar el servicio y, si hace falta, la disponibilidad de repuestos.',
      },
      {
        question: '¿Puedo pedir mantenimiento aunque el calentador funcione?',
        answer:
          'Sí, puedes consultar por mantenimiento. Cuéntanos el tipo de equipo y cuándo recibió la última atención, si lo recuerdas, para coordinar una revisión de su estado.',
      },
      {
        question: '¿Cuánto cuesta reparar un calentador?',
        answer:
          'El valor depende del diagnóstico, el trabajo necesario y los repuestos. Consúltanos el costo de la visita y el alcance de la revisión antes de programarla; la reparación se cotiza según lo que requiera el equipo.',
      },
      {
        question: '¿Qué garantía tiene el servicio?',
        answer:
          'La garantía es de 3 meses para repuestos y de 6 meses para mano de obra. Puedes consultar el alcance de la garantía al acordar el trabajo.',
      },
    ],
  },
  {
    slug: 'reparacion-estufas-gas-medellin',
    id: 'estufas',
    title: 'Reparación de estufas a gas en Medellín | Tecni Full Gas',
    description:
      'Reparación y mantenimiento de estufas a gas de cualquier marca en Medellín y el área metropolitana. Servicio a domicilio y consultas por WhatsApp.',
    heading: 'Reparación de estufas a gas en Medellín',
    intro:
      'Atendemos la reparación y el mantenimiento de estufas a gas de cualquier marca. Visitamos tu domicilio en Medellín y el área metropolitana para revisar el equipo y definir el trabajo que necesita.',
    image: '/img/servicios-webp/Estufas.webp',
    imageAlt: 'Estufa a gas con hornillas y horno en una cocina',
    imageWidth: 1952,
    imageHeight: 806,
    sections: [
      {
        heading: 'Revisión de problemas de encendido y funcionamiento',
        paragraphs: [
          'Cuéntanos si la consulta está relacionada con el encendido, una hornilla o el funcionamiento general de la estufa. Saber si el problema afecta una parte o todo el equipo ayuda a orientar la revisión.',
          'Si tu estufa tiene horno, menciona también si la falla se presenta allí. El tipo de equipo y el diagnóstico permiten confirmar el alcance de la reparación.',
        ],
      },
      {
        heading: 'Mantenimiento y repuestos para tu estufa',
        paragraphs: [
          'Puedes solicitar mantenimiento o una revisión por una falla concreta. La atención se define según el estado de la estufa; no todos los problemas requieren el mismo trabajo ni los mismos repuestos.',
          'Trabajamos con estufas de cualquier marca. Comparte la marca, el modelo y una descripción del problema para consultar el servicio. Si se necesita una pieza, su disponibilidad y valor se confirman antes de acordar el trabajo.',
        ],
      },
      {
        heading: 'Coordina la revisión sin trasladar la estufa',
        paragraphs: [
          'El servicio es exclusivamente a domicilio en Medellín y el área metropolitana. Indícanos tu barrio o municipio para consultar disponibilidad y coordinar la visita en el lugar donde está el equipo.',
          'Antes de programar, consulta el costo de la visita y qué incluye la revisión. Con el diagnóstico podrás conocer la reparación propuesta, los repuestos necesarios y su cotización.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Atienden estufas a gas de cualquier marca?',
        answer:
          'Sí, atendemos estufas a gas de cualquier marca. Comparte la marca y el modelo si los conoces, e indícanos qué parte del equipo presenta la falla.',
      },
      {
        question: '¿Puedo consultar por una sola hornilla o por el horno?',
        answer:
          'Sí, puedes describirnos si la consulta es sobre una hornilla, el encendido o el horno de tu estufa. El alcance del servicio y los repuestos se confirman según el tipo de equipo y la revisión.',
      },
      {
        question: '¿Debo llevar la estufa a un local?',
        answer:
          'No, nuestra atención es exclusivamente a domicilio. Escríbenos tu ubicación en Medellín o el área metropolitana para consultar disponibilidad y coordinar la visita.',
      },
      {
        question: '¿Qué garantía tienen la reparación y los repuestos?',
        answer:
          'Ofrecemos 3 meses de garantía en repuestos y 6 meses en mano de obra. Consulta el alcance de la garantía al acordar la reparación de tu estufa.',
      },
    ],
  },
];

export function getServicePage(pathname: string): ServicePageData | undefined {
  const slug = pathname.split(/[?#]/, 1)[0].replace(/^\/+|\/+$/g, '');
  return SERVICE_PAGES.find((page) => page.slug === slug);
}
