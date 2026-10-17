# SEO ? Configuraci?n y pr?ximos pasos

Actualizado el 16 de octubre de 2026. El detalle de contenido y prioridades est? en
[plan-seo-local.md](plan-seo-local.md); las pruebas de esta actualizaci?n est?n en
[seo-implementacion.md](seo-implementacion.md).

## Google Search Console

La propiedad de dominio `tecnifullgas.com` est? verificada por DNS con
`tecnifullgas@gmail.com`. Conservar el TXT de Google y los registros MX y SPF.
El sitemap `https://www.tecnifullgas.com/sitemap.xml` figura ?Correcto? y Google
ha descubierto la portada publicada. Esto no acredita indexaci?n ni tr?fico.

Tras publicar las p?ginas preparadas de calentadores y estufas:

1. Comprobar las tres URLs, sus canonical y el sitemap publicado.
2. Volver a enviar el sitemap e inspeccionar las URLs desde Search Console.
3. Solicitar indexaci?n si procede y registrar el resultado real.
4. Comparar consultas, impresiones y clics en periodos de 28 d?as; relacionarlos
   con consultas comerciales y trabajos contratados sin confundir clic y venta.

## Google Business Profile

Ficha creada con autorizaci?n como **Tecni Full Gas**, servicio a domicilio,
categor?a **Servicio de reparaci?n de electrodom?sticos**, cobertura Medell?n y
?rea metropolitana, tel?fono `3014065931`, web principal y WhatsApp.

La direcci?n facilitada se usa ?nicamente para verificaci?n y Google indica que
no ser? p?blica. No a?adirla al sitio, a JSON-LD ni como punto de atenci?n.
La ficha sigue pendiente de verificaci?n: Google solo ofrece enviar un video.
El propietario debe grabar en una toma continua el entorno, el nombre comercial
impreso y equipos o una prueba de administraci?n. Seguir las indicaciones de
Google desde la cuenta de la empresa; no crear otra ficha para repetir el tr?mite.

Despu?s, completar horarios confirmados, servicios reales, descripci?n y fotos
propias. No usar la mascota como prueba de trabajos ni a?adir categor?as que no
correspondan. Pedir rese?as reales sin incentivos ni selecci?n de opiniones.

## Contenido y datos estructurados

Se usa `Organization`, `WebSite`, `Service` y breadcrumbs para las p?ginas de
servicio. Los metadatos est?n centralizados en `src/seo.ts` y el prerender los
incluye en el HTML de cada URL. No duplicar JSON-LD en `index.html` ni a?adir
coordenadas aproximadas, direcci?n privada, valoraciones o acreditaciones.

Datos confirmados: solo domicilios, Medell?n y ?rea metropolitana, calentadores
y estufas de cualquier marca, garant?a de 3 meses en repuestos y 6 en mano de obra.
Confirmar horarios y festivos, precio de visita y condiciones de garant?a antes
de ampliarlos. Las redes publicadas est?n en `src/seo.ts` y los componentes;
actualizarlas juntas si cambian. Incluir `lastmod` en sitemap solo si refleja
una modificaci?n real, sin regenerarlo por cada compilaci?n.

## Dominio principal y reversi?n

Dominio principal: `https://www.tecnifullgas.com/`. DNS autoritativos en Porkbun;
CNAME `www` hacia `tecnifullgas.pages.dev`, asociado al proyecto Cloudflare Pages
`tecnifullgas`. La ra?z redirige con 301 a www desde Porkbun. La regla y lista
`tecnifullgas_pages_to_www` redirigen pages.dev con 301 y conservan ruta y consulta.

Las redirecciones, HTTPS, robots y sitemap se comprobaron p?blicamente el
16 de octubre de 2026. Mantenerlas al publicar mejoras de contenido.
Para revertir esta actualizaci?n SEO, restaurar el despliegue inmediatamente
anterior en Cloudflare Pages; no cambiar DNS ni correo. El commit base anterior
al trabajo SEO es `0d2f8e2`. El rollback antiguo `1b62d590-3c1d-4597-a2ae-23082e3a7c64`
corresponde al cambio de dominio y no debe usarse para una incidencia solo de SEO.

## Pendientes posteriores

Bing Webmaster Tools es opcional: a?adir el sitio principal y enviar el mismo
sitemap cuando se decida configurarlo. OpenSEO tampoco es necesario para iniciar
la medici?n y no est? instalado ni contratado.
