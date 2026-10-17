# Implementación de SEO local

Registro al 16 de octubre de 2026. La portada y las páginas de calentadores y
estufas ya están publicadas e indexadas. **La versión `6dd53a6` con consentimiento,
privacidad y medición se publicó correctamente en Cloudflare con autorización
explícita del usuario. Se verificó la producción y GA4 confirmó recepción de
datos de una sesión de prueba, sin atribuirles clientes ni ventas.** La referencia
para revertir esta nueva actualización es el commit `888ac98`.

## Alcance y preservación visual

Se conserva el diseño original, fotos, mascota, videos, carruseles, orden y marca.
Los textos SEO y enlaces a servicios permanecen; estos últimos se integran en
los títulos de tarjetas existentes. La galería de fotos nuevas fue revertida por
pedido del usuario y se reserva para Google Business Profile y el respaldo.
La excepción visual autorizada para esta actualización es un aviso pequeño con
Aceptar y Rechazar, un botón Privacidad y la página de privacidad.

Datos confirmados: solo domicilios en Medellín y área metropolitana, calentadores
y estufas de cualquier marca, garantía de tres meses en repuestos y seis meses
en mano de obra. La dirección de verificación permanece privada. No se añaden
certificaciones, autorizaciones de marcas ni servicios de pago.

Las páginas ofrecen contenido distinto en HTML inicial con React/Vite, metadatos
propios, canonical, `Organization`, `WebSite`, `Service` y breadcrumbs; navegación
rastreable y 404 real para rutas inexistentes. `src/seo.ts` centraliza metadatos.
Las mejoras multimedia conservan fuente en SSR, `preload="auto"`, orden y marca;
corrigen la coordinación de `requestAnimationFrame` y carreras entre estados,
sin introducir carga diferida en los medios.

## GA4 y consentimiento

Cuenta **412268233**, propiedad **559283199**, flujo web principal **16146219173**,
ID público **G-WKNRX9FN2C**. Cuenta y flujo creados con contratos autorizados por
el usuario. Configuración: Colombia, GMT-5 y COP; opciones adicionales de
compartir datos desactivadas. Search Console de tipo Dominio para
`tecnifullgas.com` quedó vinculada al flujo y la UI confirmó «VINCULACIÓN CREADA».

Configuración verificada en la UI de Analytics:

| Ajuste | Valor |
| --- | --- |
| Conservación de datos de usuarios y eventos | Dos meses en ambos casos |
| Reinicio del plazo con actividad nueva | Desactivado |
| Google signals | Desactivado |
| Medición mejorada | Desactivada |
| Método de contacto | Dimensión de evento, parámetro `contact_method` |
| Ubicación del enlace | Dimensión de evento, parámetro `placement` |
| Servicio consultado | Dimensión de evento, parámetro `service` |
| `contact_click` | Evento clave, una vez por evento, sin valor monetario predeterminado |

La reducción de retención se guardó con confirmación de éxito; no apareció
advertencia de borrado existente ni confirmación irreversible. La UI indica
24 horas para aplicar ese cambio. `contact_click` se registró mediante «Crear
con código», sin una regla derivada que duplique el evento. Mide intención de
contacto, no conversación, lead validado ni venta.

El código publicado usa consentimiento básico: la etiqueta y la medición
permanecen bloqueadas hasta aceptar. La preferencia dura 180 días. Rechazar o
revocar detiene la medición; Privacidad permite reabrir la decisión. GPC o DNT
la bloquean. Se envían URL y referrer limpios; los clics solo añaden método,
ubicación y servicio, sin `href` ni mensajes. No se envían datos personales de
contacto. La recepción en producción se confirmó con la sesión de prueba
detallada a continuación.

Evidencia local de configuración en `qa/reports/`:
`ga4-dimensiones-2026-10-16.png`, `ga4-contacto-evento-clave-2026-10-16.png`,
`ga4-search-console-vinculado-2026-10-16.png`,
`ga4-signals-desactivado-2026-10-16.png` y
`ga4-retencion-minima-2026-10-16.jpg`. La última captura de retención sustituye
como estado vigente a la anterior, conservada como evidencia histórica.

## Validación local previa a publicar

El agente principal confirmó estas comprobaciones del 16 de octubre:

- Build con TypeScript, Vite, prerender y comprobaciones SEO correcto.
- Lint con **cero errores y cero avisos**; auditoría de dependencias de producción
  con **cero vulnerabilidades reportadas**.
- **13 pruebas de analytics y siete de multimedia** aprobadas.
- Cloudflare Pages local: HTTP 200 en las tres rutas SEO y privacidad, esta última
  con `noindex`; 404 real con `noindex`; redirecciones 301/308 conservando consultas.
- CUA en Chrome, escritorio y **390 px**: rechazo, reapertura, recarga, aceptación,
  revocación, navegación de las tres rutas y política comprobados; sin
  desbordamiento horizontal ni errores de consola. Medios y diseño preservados.

Estas pruebas corresponden al entorno local, incluida la revisión móvil de
390 px. El build de Cloudflare también terminó correctamente. La comprobación
de producción se registra por separado a continuación.

## Publicación y comprobación de producción

Publicación autorizada completada correctamente en Cloudflare Pages:

- Commit `6dd53a6347a8d27a577e631bdc94173d5fe03d08`.
- Deployment `a12bdf2b-2a6c-4a6f-a77a-beadfde1fa67`.
- URL del despliegue: `https://a12bdf2b.tecnifullgas.pages.dev`.

El agente principal comparó el HTML público de las tres rutas SEO y privacidad
con la versión probada: idéntico tras normalizar CR/LF. El JavaScript
`index-BNYV61Ez.js` fue idéntico byte a byte. La comprobación pública confirmó
HTTP 200/404/301/308, canonical, JSON-LD, robots y sitemap de tres URLs correctos;
privacidad conserva `noindex`.

CUA en producción y escritorio confirmó ausencia de script de medición antes
de aceptar y tras rechazar, persistencia del rechazo y carga del ID correcto
al aceptar. El video estaba visible y reproduciéndose (`paused=false`, tiempo
2,32 s), sin desbordamiento horizontal ni errores de consola. No se registra
una comprobación móvil en producción; la evidencia de 390 px es local.

GA4 en tiempo real confirmó **un usuario de prueba**, **dos `page_view`**, **un
`contact_click` como evento clave**, **un `first_visit`** y **un `session_start`**.
Estos datos validan recepción e instrumentación, no prueban visitas orgánicas,
conversaciones, clientes ni éxito comercial.

Evidencia: [GA4 en producción](../qa/reports/ga4-produccion-6dd53a6.jpg) y
[web en producción](../qa/reports/seo-produccion-6dd53a6.jpg).

## Search Console: línea base pública

Propiedad `sc-domain:tecnifullgas.com` verificada por DNS con la cuenta
`tecnifullgas@gmail.com`. Sitemap `https://www.tecnifullgas.com/sitemap.xml`
correctamente procesado el **16/10/26**, con **tres URLs**.

Las inspecciones individuales del 16 de octubre de 2026 confirmaron «La URL
está en Google» y «La página está indexada» en:

- `https://www.tecnifullgas.com/`.
- `https://www.tecnifullgas.com/reparacion-calentadores-gas-medellin`.
- `https://www.tecnifullgas.com/reparacion-estufas-gas-medellin`.

La portada registra último rastreo **21:32:46**, hora mostrada en Search Console,
por Googlebot para smartphones: obtención correcta, rastreo e indexación
permitidos. Canónica declarada `https://www.tecnifullgas.com/`; Google selecciona
«URL inspeccionada».

Calentadores y estufas muestran HTTPS y **un Breadcrumb válido** cada una. Estufas
registra último rastreo **21:46:16** por Googlebot para smartphones, obtención
correcta, rastreo e indexación permitidos; su canónica declarada es la ruta de
estufas en www y Google selecciona «URL inspeccionada». El sitemap fuente es el
indicado arriba.

Son **tres URLs indexadas**; estas inspecciones preceden a la publicación de
`6dd53a6` y no demuestran posiciones ni tráfico. Las búsquedas de marca y dominio exacto
revisadas ese día no mostraron la web en la primera página observada. Se registra
como línea base técnica y de visibilidad, sin datos de rendimiento orgánico ni
comercial todavía. La sesión de prueba de GA4 no constituye esa línea base.
Registrar consultas, impresiones, clics, contactos y trabajos para comparar
periodos de 28 días, con fechas y contexto de cada revisión.

## Ficha de Google y redes

Google Business Profile fue creado con autorización como servicio a domicilio,
categoría «Servicio de reparación de electrodomésticos», cobertura Medellín y
área metropolitana, teléfono y web. La dirección queda oculta y solo se facilitó
para verificación. Google ofrece únicamente video: los propietarios harán la
grabación y el trámite; la ficha sigue sin verificar. Esto no bloquea el trabajo
orgánico de la web.

Las 12 fotos, logo y portada añadidos figuran pendientes de verificación. Los
14 originales permanecen intactos en
`F:/Proyectos/tecnifullgas/fotos-originales`, con SHA-256 verificado; no reactivar
la galería web retirada.

Instagram y Facebook se revisaron como visitante, sin acceso administrador.
Instagram enlaza WhatsApp y Facebook; Facebook enlaza Instagram. El enlace de
Instagram a Facebook corresponde al mismo ID de página y el alias actual es
correcto. Ambos perfiles carecen de enlace a `https://www.tecnifullgas.com/`.
El usuario confirmó que los propietarios añadirán estos enlaces con sus accesos
administradores. Este paso y el video de la ficha quedan asignados a ellos y no
bloquean el trabajo web de hoy; no se solicita otro inicio de sesión. No se
modificaron perfiles durante la revisión.

## Siguiente verificación y reversión

Publicación, comprobación pública y recepción de datos de prueba completadas.
El siguiente paso es establecer una línea base cuantitativa de rendimiento real.
Los propietarios harán el video de la ficha y añadirán la web en redes por
separado. No se presentan los datos propios de prueba como tráfico orgánico ni
resultados comerciales.

Reversión de esta actualización en Cloudflare Pages al despliegue conservado,
confirmado en su dashboard:

- Commit `888ac9839d77944d8a4ab8ce1cecc27d1e17ad99` (`888ac98`).
- Deployment `cad37f17-eed9-460f-9210-dc6e3c1faaa2`.
- URL del despliegue: `https://cad37f17.tecnifullgas.pages.dev`.

El rollback a ese despliegue conserva el dominio, el SEO y la multimedia
originales, y retira el aviso y la nueva medición del sitio. No modificar DNS ni
correo. No volver al commit `160627a`, que contiene la galería ya revertida.
La publicación SEO inicial autorizada fue el commit `53e27fd`, despliegue
`947e6539-b0cd-4892-a3a0-b46ce14e6efb`.

Fuentes: [Google y JavaScript](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics),
[rutas de Pages](https://developers.cloudflare.com/pages/configuration/serving-pages/).
