# Implementación de SEO local

Registro al 16 de octubre de 2026. La portada y las páginas de calentadores y
estufas ya están publicadas e indexadas. **La nueva versión con consentimiento,
privacidad y medición está validada localmente y tiene autorización explícita
del usuario para push y publicación. Este registro es previo al despliegue;
no se ha confirmado publicación ni recepción de eventos de GA4.** La referencia
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

El código preparado usa consentimiento básico: la etiqueta y la medición
permanecen bloqueadas hasta aceptar. La preferencia dura 180 días. Rechazar o
revocar detiene la medición; Privacidad permite reabrir la decisión. GPC o DNT
la bloquean. Se envían URL y referrer limpios; los clics solo añaden método,
ubicación y servicio, sin `href` ni mensajes. No se envían datos personales de
contacto. No confundir la configuración externa completada con la nueva versión
del sitio, que todavía no se ha publicado.

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

Estos resultados corresponden al entorno local; no prueban que la actualización
ya esté desplegada ni que Google Analytics esté recibiendo eventos. Tras publicar
la versión autorizada, repetir las comprobaciones públicas y confirmar recepción en GA4 con
consentimiento antes de presentar métricas.

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

Son **tres URLs indexadas**; esta evidencia no corresponde a un despliegue nuevo
ni demuestra posiciones o tráfico. Las búsquedas de marca y dominio exacto
revisadas ese día no mostraron la web en la primera página observada. Se registra
como línea base técnica y de visibilidad, sin datos de rendimiento todavía.
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

Pendientes de esta versión autorizada: publicación, comprobación pública y
recepción de eventos tras consentimiento; línea base cuantitativa. Los
propietarios harán el video de la ficha y añadirán la web en redes por separado.
No se presentan métricas de tráfico ni se afirma medición activa en producción.

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
