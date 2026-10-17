# SEO — Configuración y próximos pasos

Actualizado el 16 de octubre de 2026. El contenido y las prioridades están en
[plan-seo-local.md](plan-seo-local.md); la configuración y evidencia técnica, en
[seo-implementacion.md](seo-implementacion.md).

## Estado previo a publicación

La portada y las páginas de calentadores y estufas están publicadas en
`https://www.tecnifullgas.com/` e indexadas según sus inspecciones individuales
en Search Console del 16 de octubre. El sitemap se procesó correctamente ese
día con tres URLs. La nueva versión con consentimiento, privacidad y medición
está validada localmente y tiene autorización explícita del usuario para push y
publicación. Este registro es previo al despliegue: todavía no se ha confirmado
su publicación ni la recepción de eventos de GA4.

La referencia para revertir esta nueva actualización es el commit `888ac98`.
El detalle del despliegue conservado está en el registro técnico. Mantener DNS,
correo, redirecciones y SEO ya publicados al actualizarla.

## Dominio y diseño

Dominio principal: `https://www.tecnifullgas.com/`. DNS autoritativos en Porkbun;
CNAME `www` hacia `tecnifullgas.pages.dev`, asociado al proyecto Cloudflare Pages
`tecnifullgas`. La raíz redirige con 301 a www desde Porkbun. La regla y lista
`tecnifullgas_pages_to_www` redirigen pages.dev con 301, conservando ruta y consulta.
Mantener HTTPS, robots, canonicals y sitemap coherentes con www.

Conservar diseño, fotos originales, mascota, videos, carruseles y orden visual.
Los enlaces de servicio permanecen dentro de los títulos de tarjetas existentes.
El usuario autorizó una excepción concreta: un aviso pequeño con **Aceptar** y
**Rechazar**, un botón **Privacidad** y la página de privacidad. Las fotos nuevas
se reservan para Google Business Profile y el respaldo; no reactivar su galería web.

## Search Console y seguimiento

La propiedad de dominio `sc-domain:tecnifullgas.com` está verificada por DNS con
la cuenta de la empresa y ya vinculada al flujo web principal de GA4. Conservar
el TXT de Google y los registros MX y SPF. Sitemap:
`https://www.tecnifullgas.com/sitemap.xml`.

La línea base del **16 de octubre de 2026** es de **tres URLs indexadas**, sin
datos de rendimiento todavía. En las búsquedas de marca y dominio exacto
revisadas ese día, la web no apareció en la primera página observada. Esa
observación depende de consulta, lugar y dispositivo; indexación no equivale a
posición ni tráfico. El detalle de rastreo y canonicals está en el registro técnico.

Después de publicar la actualización autorizada:

1. Comprobar las tres rutas y privacidad, navegación y medios originales; una
   ruta inexistente debe conservar su 404 real y `noindex`.
2. Verificar que no se envía medición antes de aceptar, que rechazar o revocar
   detiene la medición y que Privacidad permite volver a decidir. GPC o DNT
   deben mantenerla bloqueada.
3. Confirmar en GA4 la recepción de visitas y `contact_click` tras aceptar,
   distinguiendo la comprobación propia de contactos reales. No asignar ventas
   ni importes a esos clics. Las dimensiones pueden tardar en poblar informes.
4. Registrar una línea base cuantitativa en Search Console y comparar periodos
   de 28 días: consultas sin marca, impresiones, clics, contactos y trabajos
   contratados. Anotar consulta exacta, fecha, lugar y dispositivo al revisar SERP.

GA4 ya tiene las tres dimensiones de evento y `contact_click` como evento clave,
sin valor monetario. Retención de usuarios y eventos: **dos meses**; reinicio
por actividad, Google signals y medición mejorada: **desactivados**. Las opciones
adicionales de compartir datos están desactivadas. El cambio de retención tarda
24 horas en aplicarse. Los identificadores y el contrato de medición están
documentados una sola vez en [seo-implementacion.md](seo-implementacion.md).

## Google Business Profile y redes

Ficha creada con autorización como **Tecni Full Gas**, servicio a domicilio,
categoría **Servicio de reparación de electrodomésticos**, cobertura Medellín y
área metropolitana, teléfono `3014065931`, web principal y WhatsApp.

La dirección se usa únicamente para verificación y permanece oculta; no añadirla
al sitio ni a JSON-LD. Google ofrece únicamente video y los propietarios harán
la grabación y el trámite. La ficha sigue sin verificar; no crear otra. Este
pendiente no bloquea la medición ni el posicionamiento orgánico de la web.

Las 12 fotos, el logo y la portada se subieron a la ficha y figuran pendientes
de verificación. Los 14 originales siguen intactos en
`F:/Proyectos/tecnifullgas/fotos-originales`, con SHA-256 verificado. Completar
horarios y festivos confirmados; solicitar reseñas auténticas sin incentivos
ni selección de opiniones.

Instagram y Facebook se revisaron como visitante, sin acceso administrador.
Instagram enlaza WhatsApp y Facebook; Facebook enlaza Instagram. El enlace de
Instagram a Facebook corresponde al mismo ID de la página y su alias actual
es correcto. Falta la URL `https://www.tecnifullgas.com/` en ambos perfiles:
los propietarios añadirán los enlaces, según confirmó el usuario. Esta tarea
queda asignada a ellos y no bloquea el trabajo web ni requiere otro inicio de sesión.

## Contenido y pendientes comerciales

Mantener `Organization`, `WebSite`, `Service` y breadcrumbs en el HTML inicial,
sin duplicar JSON-LD. No añadir dirección privada, coordenadas aproximadas,
valoraciones, certificaciones ni autorizaciones de marcas sin respaldo.

Datos confirmados: solo domicilios en Medellín y área metropolitana,
calentadores y estufas de cualquier marca, garantía de **tres meses en repuestos
y seis en mano de obra**. Precisar horarios, festivos, costo de visita y
condiciones de garantía antes de ampliarlos. Actualizar redes en los componentes
y `src/seo.ts` juntas si cambian. Usar `lastmod` solo para cambios reales.

Bing Webmaster Tools y OpenSEO son opcionales; OpenSEO no está instalado ni
contratado y no es necesario para iniciar la medición.
