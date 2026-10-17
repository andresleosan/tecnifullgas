# Implementación de SEO local

Alcance autorizado: portada y dos páginas de servicio, contenido en HTML inicial,
metadatos propios, enlaces rastreables y respuesta 404 para rutas inexistentes.
Se mantiene la identidad visual azul y naranja y se conservan los cambios locales
del encabezado. No se añaden dependencias ni servicios de pago.

Datos confirmados: servicio solo a domicilio en Medellín y área metropolitana,
todas las marcas, garantía de tres meses en repuestos y seis meses en mano de obra.
La dirección facilitada se reserva para verificación de Google, sin publicación.

- [x] Crear páginas distintas de calentadores y estufas con dudas de contratación.
- [x] Generar HTML estático con React/Vite y metadatos por URL; hidratar sin duplicados.
- [x] Enlazar desde portada y pie; navegación hacia la portada desde los servicios.
- [x] Comprobar HTML sin JavaScript, canonicals, sitemap, JSON-LD, 404 y navegación móvil.
- [x] Verificar Search Console por DNS con la cuenta de Tecnifullgas y enviar sitemap.
- [ ] Completar la verificación de la ficha de Google creada con autorización.
- [x] Presentar resultado verificado para confirmar publicación a producción.

Validación local, 16 de octubre de 2026:

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

Search Console confirmó el sitemap como «Correcto» con una página descubierta
(la portada publicada). Las dos páginas nuevas se enviarán tras desplegarlas;
el envío o la solicitud de indexación no garantiza que Google las indexe.

La ficha de Google fue creada con la cuenta `tecnifullgas@gmail.com`, como servicio
a domicilio, categoría «Servicio de reparación de electrodomésticos», cobertura
Medellín y área metropolitana, teléfono y web publicados. La dirección se envió
con autorización solo para verificación y Google indica que no será pública.
Google ofrece únicamente video: requiere una grabación continua del entorno,
nombre comercial impreso y equipo o prueba de administración. Este paso físico
queda a cargo del propietario; la ficha aún no está verificada.

Fuentes: [Google y JavaScript](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics),
[rutas de Pages](https://developers.cloudflare.com/pages/configuration/serving-pages/).

Reversión: restaurar el despliegue anterior de Cloudflare Pages si una publicación
falla; no modificar DNS ni las redirecciones existentes del dominio principal.
