# Auditoría de privacidad y accesibilidad de Tecnifullgas

Fecha: **16 de octubre de 2026, Bogotá**. Registro iniciado el 17 de octubre a
las 04:01 UTC, todavía 16 de octubre a las 23:01 en Bogotá. Alcance: los nueve
puntos solicitados sobre privacidad, consentimiento, contratación, datos,
integraciones, accesibilidad, afirmaciones y derechos sobre contenidos.

Este informe distingue evidencia técnica, datos confirmados, inferencias y
pendientes. No certifica cumplimiento jurídico ni conformidad WCAG. Los datos
legales del negocio se aportarán después. El agente principal completó la
validación técnica local y aislada descrita al final; no hay nuevo despliegue de
esta auditoría. Los borradores legales requieren datos y revisión profesional.
No se publica ni reproduce la dirección privada usada para verificar Google.

## Hallazgos prioritarios antes de las correcciones

P1 indica una prioridad alta para cerrar información u operabilidad; P2, una
mejora necesaria o una comprobación pendiente. Una ausencia de documentación no
demuestra por sí sola una infracción ni falsedad.

| ID | Prioridad | Hallazgo o incertidumbre inicial | Acción y estado |
| --- | --- | --- | --- |
| L01 | P1 | Identidad legal, NIT, dirección válida de notificaciones y correo legal sin confirmar. La marca no identifica por sí sola al responsable jurídico. | Obtener datos de los propietarios; completar borradores y revisión profesional. Pendiente. |
| L02 | P1 | Condiciones completas de visita, presupuesto, cancelación, retracto y garantía sin documentar suficientemente para cerrar esta revisión. | Borradores revisados en lectura; datos operativos y validación jurídica final pendientes. |
| D01 | P1 | Tratamiento interno de WhatsApp, destinatarios, acceso, respaldos, conservación y prueba de autorización no inspeccionados. | Inventario con propietarios; separar atención solicitada de publicidad. Pendiente. |
| A01 | P1 | Texto naranja `#F58220` sobre `#F8FAFC`: contraste 2,48:1; sobre `#EEF3F8`: 2,32:1, según revisión técnica. | Corregidos localmente los usos identificados: Services/FAQ computan azul y el extremo del gradiente primario es `#B45309`. Comprobación local confirmada; sin declaración global de conformidad. |
| A02 | P1 | Carruseles automáticos sin pausa accesible y sin tratamiento suficiente de movimiento reducido; control de teclado del video interfiere con controles nativos. | Correcciones y pruebas locales/aisladas aprobadas; movimiento reducido y controles nativos comprobados. Pendiente publicación. |
| A03 | P2 | Alternativas de ClientCarousel duplicadas, Hero oculto a tecnologías de asistencia y puntos de navegación de 10 px. | Medios revisados y pruebas aprobadas; Hero con alternativas descriptivas, iconos decorativos ocultos y puntos de 24 × 24 px. No equivale a revisión completa con lector de pantalla. |
| A04 | P2 | Cuatro videos tienen audio y no constan tracks, VTT/SRT ni transcripciones. No se ha determinado aquí el contenido informativo de cada audio. | Escuchar y revisar alternativas accesibles y derechos de audio. Pendiente. |
| D02 | P2 | Cookies GA observadas en dominio raíz con `Secure=false` y duración de 180 días. Son identificadores de analítica, no se han identificado como credenciales. | Nueva configuración Secure/SameSite=Lax y dominio www verificada por pruebas y documentación; cookies nuevas reales pendientes por bloqueo local. La evidencia pública anterior no demuestra esos atributos nuevos. |
| C01 | P2 | Procedencia y autorización de reseñas, nombres y avatares sin acreditar; horarios sin respaldo aportado. No se ha demostrado que las reseñas sean falsas. | Solicitar respaldo o retirar/corregir contenido no verificable. Pendiente de decisión de propietarios. |
| IP01 | P2 | Derechos sobre todas las fotos, videos, voces/audio, avatares, textos e iconos sin inventario documental completo. | Añadida atribución Font Awesome Free/CC BY 4.0 en Términos para iconos de redes; autenticidad, permisos y licencias del resto de medios siguen pendientes. |

Las carencias ARIA iniciales del encabezado se corrigieron: expanded/controls,
identificador y ocultación del panel, Escape y restauración del foco. La revisión
aislada combina estilos de HEAD con estas correcciones; el trabajo principal
preserva sus cuatro ajustes visuales preexistentes. El alcance no atribuye esos
otros cambios visuales a esta auditoría.

## Contexto del negocio

Tecnifullgas presta servicio **solo a domicilio**, en **Medellín y el área
metropolitana**, para calentadores y estufas a gas de cualquier marca. Los
propietarios confirmaron garantía de **tres meses en repuestos y seis en mano de
obra**; faltan sus condiciones detalladas. No están confirmadas certificaciones,
autorizaciones de fabricantes, urgencias ni horarios para nuevas afirmaciones.

Se infiere una audiencia principal de hogares y personas que coordinan una
reparación doméstica; no es un estudio demográfico. La web informa y conduce a
WhatsApp o teléfono. No tiene formularios de captura, backend de negocio ni
pagos en línea identificados. La ausencia de esos elementos no descarta datos
en hosting, analítica o mensajería.

La versión `6dd53a6` fue publicada y comprobada previamente; su registro está en
[seo-implementacion.md](seo-implementacion.md). Las correcciones de esta auditoría
están verificadas localmente según el cierre de este informe; no se ha publicado
un despliegue nuevo.

## 1. Privacidad, términos y cookies frente al funcionamiento real

La documentación debe describir la web informativa y el contacto a domicilio,
sin inventar una tienda, formulario o pasarela. El aviso de analítica, la política
de tratamiento y las condiciones del servicio cumplen funciones distintas.
Aceptar analítica no debe presentarse como aceptar un contrato de reparación.

Se revisaron en lectura los borradores `public/privacidad.html`,
`public/cookies.html` y `public/terminos.html`. Se identifican como borradores y
explican las carencias jurídicas; no se detectó una renuncia general a garantías
o reembolsos ni datos legales inventados. Eso no constituye aprobación jurídica.
Quedan pendientes identidad, canal atendido de derechos y proceso comercial real.

Tras esa lectura se precisó en Términos el cómputo del retracto de servicios
desde la celebración del contrato. También se sustituyó la frase sobre cómo
se define el presupuesto por una indicación para confirmarlo antes de autorizar
el trabajo, sin dar por acreditada una operativa interna concreta.

Ocultar una dirección en Google Business Profile no resuelve el requisito distinto
de notificaciones legales. Los propietarios deben confirmar una dirección válida
para ese propósito; no reutilizar automáticamente su domicilio privado.

## 2. Cookies, analítica y consentimiento

Evidencia de navegador/CDP de la producción anterior, comunicada por el agente
principal. No corresponde al nuevo código local ni a una inspección nueva de la
cuenta de Analytics:

| Decisión | Resultado observado |
| --- | --- |
| Rechazar | Cero solicitudes de GA y cero cookies de GA. |
| Aceptar | Carga de gtag y solicitudes de recogida de Google Analytics; cookies `_ga` y `_ga_WKNRX9FN2C`, dominio raíz, `Secure=false`, duración observada de 180 días. |
| Revocar | Cookies observadas vacías y cero solicitudes a Google en la comprobación posterior. |

El código nuevo configura Secure, SameSite=Lax y dominio www. Esos valores
pasaron pruebas de configuración y contraste con documentación de Google, pero
el bloqueo del hosting local impidió comprobar cookies nuevas reales. No se
declaran observados en navegador ni desplegados. La evidencia pública vigente
permanece en la tabla anterior.

La preferencia de consentimiento dura 180 días según la implementación
documentada. GPC/DNT bloquean la medición. URL y referrer se limpian; el evento
`contact_click` incorpora método, ubicación y servicio, sin href ni mensajes.
Rechazar o revocar no debe impedir llamar o consultar por WhatsApp. La retirada
de consentimiento no demuestra por sí sola eliminación de datos ya enviados.

Configuración previa documentada de GA4: usuarios y eventos dos meses, reinicio
por actividad desactivado, Google signals desactivado, medición mejorada
desactivada y opciones adicionales de compartir datos desactivadas. No se
reinspeccionaron esos ajustes de cuenta en esta auditoría. Los dos meses no
deben describirse como eliminación universal de todos los informes agregados.

Los plazos de 180 días/dos meses y el soporte GPC/DNT son decisiones técnicas;
no se presentan como plazos generales impuestos por la legislación colombiana.

## 3. Cancelaciones, devoluciones y reembolsos del servicio

Hay que distinguir solicitud de información, reserva, contratación y comienzo
del trabajo. Si el servicio se pacta por mensajes, puede encajar en comercio
electrónico aunque se pague a domicilio; es una inferencia que depende del
proceso real. La publicidad sigue siendo relevante aunque no haya checkout.

Confirmar costo de visita/diagnóstico, desplazamiento, anticipos, reprogramación,
cancelación, alcance del trabajo y autorización de repuestos o extras. Conservar
presupuesto y aceptación. No redactar una prohibición general de reembolsos.
Las reglas de retracto y su excepción por inicio acordado están en el punto 9.

## 4. Formularios, minimización, acceso y conservación

No hay formularios ni almacenamiento de clientes en un backend de la web
identificados. El tratamiento posterior al contacto no está auditado. Pedir a los
propietarios únicamente la información necesaria para documentarlo; no solicitar
exportaciones de chats, identificaciones de clientes ni datos sensibles para
completar este informe.

| Flujo | Datos/finalidad conocidos | Acceso y conservación conocidos o pendientes |
| --- | --- | --- |
| Preferencia local | Decisión de medición; duración documentada de 180 días. | En el navegador; evidencia conservable y versión de autorización, pendientes de revisar. |
| GA4 tras aceptar | Navegación y clic de contacto con método, ubicación y servicio; identificadores de analítica. | Google y usuarios autorizados de la propiedad. Retención de usuarios/eventos de dos meses documentada previamente; no inspeccionada otra vez. |
| Solicitud HTTP al hosting | Entrega de archivos por Cloudflare Pages; existe información técnica de conexión. | Contenido de logs, personas con acceso, ubicación y retención efectiva no inspeccionados. |
| WhatsApp/teléfono | Contacto iniciado por el visitante; luego podrían solicitarse ubicación y datos del servicio. | Cuenta/dispositivos, técnicos receptores, copias, plazos, eliminación y posibles grabaciones: desconocidos. No se afirma que existan grabaciones. |
| Órdenes, facturas y garantías | Proceso comercial fuera de la web no inspeccionado. | Soportes, responsables, retención legal/contractual y medidas de acceso pendientes. |
| Reseñas y multimedia | Contenido publicado que puede mostrar nombres, rostros, viviendas o voces. | Origen, permiso de publicación, alcance y conservación pendientes de acreditar. |

No equiparar conversaciones y documentos de servicio con analítica. Una
conservación necesaria por ley o contrato puede requerir un plazo distinto; no
prometer borrar todas las categorías al retirar cookies.

## 5. Integraciones y datos de terceros

Cloudflare aloja el sitio; Google Analytics recibe medición tras aceptar;
WhatsApp es el destino de contacto. Los enlaces a redes no demuestran por sí
solos que exista un píxel o SDK integrado. Google Business Profile y Search
Console tienen funciones externas de ficha y visibilidad; no se han demostrado
nuevos flujos de datos personales hacia ellos durante esta auditoría.

No consta aquí revisión de contratos de tratamiento, subencargados, países,
retención técnica de proveedores ni prácticas de las cuentas de mensajería.
Inventariarlos y distinguir encargado, responsable independiente y transferencias;
no declarar automáticamente una función jurídica para cada plataforma.

## 6. Accesibilidad: alternativas, contraste, teclado y etiquetas

La revisión técnica inicial reportó los hallazgos A01–A04 y las carencias ARIA
del encabezado. Los ratios de texto naranja indicados no alcanzaban 4,5:1 para
texto normal ni 3:1 para texto grande. Los usos identificados de Services/FAQ
ahora computan azul; el gradiente primario termina en `#B45309`. Se conserva la
identidad y los 34 archivos multimedia originales, idénticos byte a byte a HEAD.

Inicialmente Hero rotaba cada cuatro segundos y ClientCarousel se movía sin
pausa accesible suficiente ni adaptación de movimiento reducido. Las correcciones
locales comprobaron pausa/movimiento reducido y etiqueta dinámica «Reanudar».
Hero tiene alternativas descriptivas y los puntos miden 24 × 24 px. La revisión
de medios no acredita todavía permisos, autenticidad ni alternativas de audio.

En video se verificaron pausa fuera de pantalla, reproducción automática sin
sonido, avance manual que reproduce Video 3 silenciado y flechas nativas sin
cambiar la fuente. Se conserva pendiente escuchar los cuatro audios para definir
subtítulos, transcripciones y alternativas necesarias; no se afirma que estén
resueltos. También se comprobó foco del consentimiento, main con tabindex -1,
iconos decorativos ocultos, menú con Escape y restauración del foco.

Referencia técnica: [WCAG 2.2, W3C](https://www.w3.org/TR/WCAG22/), criterios
1.1.1, 1.2.2, 1.4.3, 2.1.1, 2.2.2, 2.4.3, 2.4.7, 2.5.8 y 4.1.2. Se usa como
marco de comprobación; no se afirma certificación ni aplicabilidad jurídica
automática de todas sus exigencias a este negocio.

## 7. Reseñas y afirmaciones sin respaldo

No se ha demostrado falsedad de las reseñas. Tampoco se dispone todavía de
pruebas suficientes sobre su origen, publicación original o permiso de uso de
nombres y avatares. Solicitar respaldo verificable o retirar/corregir lo que no
pueda sostenerse, sin inventar reemplazos ni calificaciones.

El subtítulo de Works se neutralizó en la versión local. Ese cambio de texto no
verifica las reseñas ni sustituye la acreditación de sus permisos.

Los horarios no tienen respaldo aportado para esta auditoría. Se retiró el
horario exacto de la versión local y se invita a confirmar disponibilidad por
WhatsApp antes de agendar. No convertir atención de cualquier
marca en autorización de fabricantes, ni añadir acreditaciones o urgencias no
confirmadas. Las condiciones comerciales anunciadas deben ser comprobables.

## 8. Datos del negocio y derechos sobre contenidos

Confirmados: marca, modalidad a domicilio, cobertura, servicios, teléfono y los
plazos de garantía comunicados. Sin confirmar como datos jurídicos completos:
nombre/razón social del responsable, NIT, dirección válida de notificaciones y
correo designado para derechos y reclamaciones. No se concluye que un correo
operativo existente esté formalmente designado para esas funciones.

Preparar inventario de cada foto, video, avatar, voz/audio, texto e icono, con
autor/origen, titular, licencia o autorización, alcance comercial y fecha. Conservar
las autorizaciones de personas identificables y clientes cuando correspondan.
El borrador de Términos incluye atribución de los iconos de Instagram/Facebook a
Font Awesome Free/Fonticons, Inc. y enlace CC BY 4.0. Esta atribución no verifica
el origen ni todos los derechos del catálogo. Recibir una imagen por mensajería
no acredita todos los derechos de publicación comercial.

No se altera la multimedia en este informe ni se afirma autorización verificada
para todo el catálogo. La preferencia visual del usuario no sustituye permisos.

## 9. Normas, riesgos jurídicos y revisión profesional

Fuentes oficiales consultadas el 16 de octubre de 2026:

| Fuente | Artículos relevantes y aplicación a confirmar |
| --- | --- |
| [Ley 1581 de 2012, Función Pública](https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981) | 4, 8–12 y 17: finalidad, autorización informada y demostrable, derechos y responsable. 14–15: consultas en diez días hábiles y reclamos en quince, con ampliaciones motivadas de cinco y ocho. 26: transferencias internacionales. |
| [Decreto 1074 de 2015, Función Pública](https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76608) | Capítulo 25 compila el Decreto 1377. 2.2.2.25.2.2, .2.4–.2.6: autorización, prueba y retiro; el silencio no equivale a aceptar. .3.1–.3.4: contenido y difusión de política/aviso. .4.4: atención de derechos. .5.1–.5.2: transmisión con contrato frente a transferencia. |
| [Decreto 1377 de 2013, Función Pública](https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=53646) | Arts. 13–16: política clara, identificación y contacto, finalidades, derechos, responsable de atención, procedimientos y vigencias. Un aviso breve no reemplaza la política. Leerlo con la compilación del DUR. |
| [Ley 1480 de 2011, Función Pública](https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=44306) | 8–12: garantías; 18: equipo recibido y presupuesto; 26: precio completo; 29: publicidad vinculante. 46–49: contratación a distancia, prueba y mensajes. 47: retracto de cinco días hábiles y excepción del servicio iniciado con acuerdo. 50(a): identificación, NIT, dirección judicial, teléfono y correo; parágrafo: enlace a autoridad. |
| [Ley 2439 de 2024, Función Pública](https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=257116) | Art. 3 modifica el retracto electrónico: devolución hasta quince días calendario bajo sus condiciones, no copiar el antiguo plazo general de treinta. Art. 4 modifica 50(b), (g), (h): descripción del servicio y canales de reclamación trazables con radicado, fecha, hora y seguimiento. |
| [SIC: políticas de tratamiento](https://sedeelectronica.sic.gov.co/publicaciones/boletin-juridico/concepto/politicas-de-tratamiento-de-datos-personales) | Distingue política/aviso y aclara que no se exige certificación de la política: deben cumplirse los requisitos legales. |
| [SIC: cookies y régimen colombiano](https://sedeelectronica.sic.gov.co/noticias/superindustria-ordena-google-cumplir-con-el-estandar-nacional-de-proteccion-de-datos) | Cookies que recogen datos personales pueden activar la Ley 1581. No toda cookie se califica automáticamente del mismo modo. |

Estos textos no permiten declarar universalmente que los tres/seis meses
anunciados sustituyen cualquier garantía legal; hay que revisar reparación,
repuesto y condiciones reales. Tampoco fundamentan excluir todas las devoluciones.

No se aplica automáticamente el RGPD por usar Google o alojar la web en Internet.
La audiencia y operación conocidas se sitúan en Colombia; una actividad dirigida
a otros territorios requeriría evaluar su alcance. Esta observación no es una
conclusión sobre jurisdicciones no investigadas.

Prioridad profesional: validar identidad y dirección legal sin exponer el domicilio
privado; política y canal efectivo de derechos; contratación/garantía/retracto;
roles y contratos de proveedores; derechos de contenido. No basta con publicar
plantillas ni con una prueba técnica de consentimiento.

## Cierre técnico local y pendientes

El agente principal confirmó en el trabajo principal y en un entorno aislado:

- Build y lint correctos; auditoría de dependencias de producción con cero vulnerabilidades reportadas.
- **28 grupos de pruebas: 14 de analytics y 14 de medios**, aprobados en ambos entornos.
- **34 archivos multimedia originales idénticos byte a byte a HEAD**.
- HTTP local 200 en seis rutas; los tres documentos legales con `noindex`,
  aviso de borrador y sin scripts ni formularios. Footer con enlaces legales en
  HTML inicial y ruta inexistente con 404 real.
- Cabeceras nuevas: CSP limitada a `frame-ancestors 'none'`, `object-src 'none'`
  y `base-uri 'self'`; Referrer-Policy `no-referrer`; Permissions-Policy para
  cámara, micrófono, geolocalización y pagos desactivados; X-Frame-Options DENY
  y X-Content-Type-Options nosniff. No se
  describe esta CSP como restricción completa de todos los recursos.
- CUA local a **390 px**: sin desbordamiento del body en inicio, privacidad y
  cookies; Tab/Rechazar/retorno de foco, Space para abrir y Enter en política;
  reapertura mediante hash y menú con Escape/restauración del foco.
- Al activar una sección del menú móvil, el foco pasa a esa sección y el panel
  queda oculto; desde la página de calentadores, Inicio regresa correctamente a
  la portada. El salto al contenido enfoca el elemento principal.
- Medios con movimiento reducido y etiqueta dinámica, pausa fuera de pantalla,
  reproducción silenciada y controles nativos comprobados; colores computados
  de Services/FAQ y extremo del gradiente primario verificados.

Captura: [vista local de la auditoría](../qa/reports/auditoria-privacidad-vista-local.jpg).
Es evidencia local; **no hay nuevo despliegue**. Los atributos nuevos de cookies
siguen pendientes de observación real; no confundirlos con el CDP público anterior.

| Trabajo | Estado al cerrar este registro |
| --- | --- |
| Contraste identificado, Footer, foco, encabezado y medios/carruseles. | Correcciones técnicas verificadas localmente y en entorno aislado; no desplegadas. |
| Cookies Secure/Lax y dominio www. | Configuración y pruebas aprobadas; comprobación de cookies nuevas reales pendiente. |
| Borradores de privacidad, cookies y condiciones del servicio. | Revisados en lectura; datos legales, ajustes operativos y revisión profesional pendientes. |
| Identidad, condiciones, horarios y permisos de contenidos. | Aportación pendiente de los propietarios. |
| Audios, subtítulos, transcripciones y derechos de medios/reseñas. | Pendientes; no se ha acreditado autenticidad o licencia de todo el contenido. |
| Gestión interna de WhatsApp, acceso, contratos de terceros y retención. | No inspeccionados; pendientes de propietarios y revisión profesional. |

La prueba técnica no acredita por sí sola que el negocio pueda aportar una
prueba conservable de cada autorización: la preferencia se guarda en el
navegador y no se inspeccionó un archivo central de consentimientos. Revisar
la suficiencia de esa evidencia y el procedimiento de atención de derechos,
sin añadir recogida de datos innecesaria. Tampoco se observó directamente el
contenido de todos los eventos de contacto enviados por Google en esta revisión;
la sanitización está comprobada en código y pruebas automatizadas.

Se incorporaron las observaciones de revisión de los borradores: cómputo del
retracto de servicios desde la celebración del contrato y texto que pide
confirmar el presupuesto antes de autorizar, sin inventar una operativa cerrada.

La vista aislada se encuentra en
`node_modules/.cache/tecnifullgas-privacy-audit`. Excluye los cuatro cambios
previos de espaciado de Header, que permanecen intactos en la copia de trabajo;
incluye solo sus correcciones funcionales y ARIA de esta auditoría. El parche
correspondiente se guarda localmente en
`qa/reports/header-accesibilidad-sin-espaciados-previos.patch`. Antes de publicar
hay que conservar esa separación, completar la revisión de los borradores y
obtener la confirmación de despliegue exigida por AGENTS.md. No se hizo push ni
se modificó producción en esta auditoría.

Antes de marcar un hallazgo cerrado, registrar cambio, fecha, entorno y evidencia:
teclado y foco, alternativas de medios, contraste, movimiento, decisiones de
consentimiento, cookies/solicitudes y datos del payload. Volver a distinguir
pruebas locales de producción. El cierre técnico anterior no cierra los asuntos
jurídicos ni de medios pendientes: requieren datos y revisión profesional. No se
afirma conformidad final.
