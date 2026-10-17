# Implementación de SEO local

Alcance autorizado: portada y dos páginas de servicio, contenido en HTML inicial,
metadatos propios, enlaces rastreables y respuesta 404 para rutas inexistentes.
Preferencia explícita del usuario: conservar el diseño y las fotos originales,
la mascota y los videos de la web; mantener las mejoras de texto y SEO técnico.
No añadir bloques visuales. Integrar los enlaces de servicio en los títulos de
las tarjetas existentes y preservar el cambio preexistente del encabezado.
No se añaden dependencias ni servicios de pago.

Datos confirmados: servicio solo a domicilio en Medellín y área metropolitana,
todas las marcas, garantía de tres meses en repuestos y seis meses en mano de obra.
La dirección facilitada se reserva para verificación de Google, sin publicación.

- [x] Crear páginas distintas de calentadores y estufas con dudas de contratación.
- [x] Generar HTML estático con React/Vite y metadatos por URL; hidratar sin duplicados.
- [x] Enlazar desde los títulos de las tarjetas existentes; regreso a la portada desde servicios.
- [x] Comprobar HTML sin JavaScript, canonicals, sitemap, JSON-LD, 404 y navegación móvil.
- [x] Verificar Search Console por DNS con la cuenta de Tecnifullgas y enviar sitemap.
- [ ] Completar la verificación de la ficha de Google creada con autorización.
- [x] Publicar la actualización SEO con autorización del usuario y verificar producción.

Publicación SEO inicial del 16 de octubre de 2026: commit `53e27fd`, despliegue
`947e6539-b0cd-4892-a3a0-b46ce14e6efb`. La comprobación pública confirmó las tres
rutas con HTTP 200, H1 y canonical correctos, una ruta inexistente con 404 real
y sitemap de tres URLs. El sitemap se volvió a enviar a Search Console.

La galería web del commit `160627a` se revirtió por pedido del usuario mediante
`acdd956`, ya enviado. Las fotos nuevas se reservan para Google Business Profile
y el respaldo, sin cambiar la multimedia original de la web. La composición y
las clases originales de Hero y Services quedaron restauradas. El build con
prerender y comprobaciones SEO pasó, lint no tiene errores y Chrome verificó
los enlaces de tarjetas y el acordeón con una sola pregunta abierta.
Git confirmó que imágenes, videos y componentes de carruseles coinciden con
`0d2f8e2`; la mascota conserva su archivo y estilos originales.

Validación de la publicación SEO inicial, 16 de octubre de 2026:

- `npm run build`: TypeScript, Vite y prerender de tres páginas y una 404 correctos.
- `node scripts/check-seo.mjs`: HTML inicial, títulos únicos, un H1 y canonical por
  página, enlaces, contacto, JSON-LD, privacidad y sitemap correctos. El build
  ejecuta estas comprobaciones antes de permitir una publicación.
- `npm run lint`: cero errores; un aviso previo en `ClientCarousel.tsx` por
  `paused` sin usar.
- `npm audit --omit=dev`: cero vulnerabilidades reportadas en dependencias de producción.
- Cloudflare Pages local, Wrangler 4.151.1: tres rutas con HTTP 200; ruta inexistente
  con HTTP 404 y `noindex`; barra final con 301 y extensión `.html` con 308,
  conservando los parámetros.
- Chrome, escritorio y 390 px: menú, regreso a la portada, enlaces entre servicios,
  FAQ y contacto comprobados; sin errores de hidratación ni desbordamiento horizontal.

Search Console está verificado y el sitemap de las tres URLs se reenvió.
El informe de índice de la home seguía indicando «no indexada», con último
rastreo del 12 de octubre asociado a la antigua redirección de parking. La prueba
en tiempo real del 16 de octubre a las 21:30 (Bogotá) indicó «La URL está
disponible para Google» y que puede indexarse. Google aceptó las tres solicitudes
de indexación: home, calentadores y estufas. La indexación efectiva sigue
pendiente; la aceptación no demuestra que las páginas ya estén indexadas.

La ficha de Google fue creada con la cuenta `tecnifullgas@gmail.com`, como servicio
a domicilio, categoría «Servicio de reparación de electrodomésticos», cobertura
Medellín y área metropolitana, teléfono y web publicados. La dirección se envió
con autorización solo para verificación y Google indica que no será pública.
Google ofrece únicamente video: requiere una grabación continua del entorno,
nombre comercial impreso y equipo o prueba de administración. Este paso físico
queda a cargo del propietario; la ficha aún no está verificada.

Fotos: las 12 imágenes de trabajos, el logo y la portada se añadieron a Google
Business Profile y figuran PENDIENTE de verificación por video. Esas incorporaciones
se conservan. La galería de fotos nuevas en la web fue revertida por pedido del
usuario; mantener el diseño y la multimedia originales.
Los 14 originales quedaron resguardados en
`F:/Proyectos/tecnifullgas/fotos-originales`, con SHA-256 verificado. Mantener
los originales intactos; las fotos nuevas se reservan para la ficha y el respaldo.

Fuentes: [Google y JavaScript](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics),
[rutas de Pages](https://developers.cloudflare.com/pages/configuration/serving-pages/).

Referencia anterior a la publicación SEO inicial:
`73b826b2-4d25-4910-a086-22a54bab8bc8`, correspondiente al commit `0d2f8e2`.
Las correcciones de diseño deben conservar textos, URLs y SEO aprobados, DNS,
correo y redirecciones del dominio principal.
