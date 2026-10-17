# SEO — Configuración y próximos pasos

Actualizado el 16 de octubre de 2026. El detalle de contenido y prioridades está en
[plan-seo-local.md](plan-seo-local.md); las pruebas y la publicación están en
[seo-implementacion.md](seo-implementacion.md).

## Publicación y dominio principal

Publicación SEO inicial autorizada: commit `53e27fd`, despliegue
`947e6539-b0cd-4892-a3a0-b46ce14e6efb`. Están activas la portada y las páginas:

- `https://www.tecnifullgas.com/reparacion-calentadores-gas-medellin`
- `https://www.tecnifullgas.com/reparacion-estufas-gas-medellin`

La comprobación pública confirmó las tres rutas con HTTP 200, H1 y canonical
correctos, una ruta inexistente con 404 real y sitemap de tres URLs.

Dominio principal: `https://www.tecnifullgas.com/`. DNS autoritativos en Porkbun;
CNAME `www` hacia `tecnifullgas.pages.dev`, asociado al proyecto Cloudflare Pages
`tecnifullgas`. La raíz redirige con 301 a www desde Porkbun. La regla y lista
`tecnifullgas_pages_to_www` redirigen pages.dev con 301 y conservan ruta y consulta.
Mantener estas redirecciones, HTTPS, robots y sitemap al actualizar contenido.

## Diseño y multimedia

El usuario exige conservar el diseño, las fotos originales, la mascota y los videos de la web. Se mantienen los textos SEO y la base técnica; los enlaces a servicios se integran en los títulos de tarjetas existentes, sin bloques nuevos. La galería web añadida se revirtió por pedido con `acdd956`. La composición y las clases originales de Hero y Services quedaron restauradas y verificadas; imágenes, videos y carruseles coinciden con la versión anterior al SEO.

Las fotos nuevas se destinan únicamente a Google Business Profile y al respaldo.
Conservar las imágenes originales, la mascota y los videos actuales de la web.

## Google Search Console

La propiedad de dominio `tecnifullgas.com` está verificada por DNS con
`tecnifullgas@gmail.com`. Conservar el TXT de Google y los registros MX y SPF.
Se volvió a enviar `https://www.tecnifullgas.com/sitemap.xml` con las tres URLs
publicadas. El envío no demuestra indexación ni tráfico.

El informe de índice de la home indicaba que no estaba indexada; el último
rastreo del 12 de octubre reflejaba la antigua redirección de parking.
La prueba en tiempo real del 16 de octubre a las 21:30 (Bogotá) indicó
«La URL está disponible para Google» y que puede indexarse. Google aceptó las
solicitudes de indexación de la home y ambas páginas de servicios: calentadores
y estufas. La indexación real sigue pendiente; la aceptación de la solicitud
no demuestra inclusión en el índice.

1. Comprobar la indexación efectiva de la portada y de las páginas de
   calentadores y estufas.
2. Inspeccionar cualquier URL con problemas y distinguir informes antiguos
   de la prueba en tiempo real.
3. Comparar consultas, impresiones y clics en periodos de 28 días; relacionarlos
   con contactos y trabajos contratados sin confundir clic y venta.

## Google Business Profile

Ficha creada con autorización como **Tecni Full Gas**, servicio a domicilio,
categoría **Servicio de reparación de electrodomésticos**, cobertura Medellín y
área metropolitana, teléfono `3014065931`, web principal y WhatsApp.

La dirección facilitada se usa únicamente para verificación y permanece oculta.
No añadirla al sitio, a JSON-LD ni como punto de atención. La ficha sigue pendiente
de verificación: Google solo ofrece video. El propietario debe grabar en una toma
continua el entorno, el nombre comercial impreso y equipos o una prueba de
administración. Seguir las indicaciones de Google desde la cuenta de la empresa;
no crear otra ficha para repetir el trámite.

Después, completar horarios confirmados, servicios reales, descripción y fotos
propias. No usar la mascota como prueba de trabajos ni añadir categorías que no
correspondan. Pedir reseñas reales sin incentivos ni selección de opiniones.

## Fotografías y garantía

Las 12 fotos se subieron correctamente a Google Business Profile; también se
añadieron logo y portada. Todo figura PENDIENTE de verificación por video y se
conserva en la ficha. La galería añadida a la web se revirtió por pedido del
usuario. Las nuevas fotografías se reservan para la ficha y el respaldo.
Los 14 originales están resguardados en
`F:/Proyectos/tecnifullgas/fotos-originales`, con SHA-256 verificado.
Conservar los originales intactos; respetar la restricción de uso de las nuevas fotos.

## Contenido y datos estructurados

Se usa `Organization`, `WebSite`, `Service` y breadcrumbs para las páginas de
servicio. Los metadatos están centralizados en `src/seo.ts` y el prerender los
incluye en el HTML de cada URL. No duplicar JSON-LD en `index.html` ni añadir
coordenadas aproximadas, dirección privada, valoraciones o acreditaciones.

Datos confirmados: solo domicilios, Medellín y área metropolitana, calentadores
y estufas de cualquier marca, garantía de 3 meses en repuestos y 6 en mano de obra.
Confirmar horarios y festivos, precio de visita y condiciones de garantía antes
de ampliarlos. Las redes publicadas están en `src/seo.ts` y los componentes;
actualizarlas juntas si cambian. Incluir `lastmod` en sitemap solo si refleja
una modificación real, sin regenerarlo por cada compilación.

## Reversión y pendientes posteriores

Referencia anterior a la publicación SEO inicial:
`73b826b2-4d25-4910-a086-22a54bab8bc8`, commit `0d2f8e2`.
Conservar el SEO aprobado al corregir el diseño. No cambiar DNS ni correo.

Bing Webmaster Tools es opcional: añadir el sitio principal y enviar el mismo
sitemap cuando se decida configurarlo. OpenSEO tampoco es necesario para iniciar
la medición y no está instalado ni contratado.
