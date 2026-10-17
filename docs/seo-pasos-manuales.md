# SEO — Pasos manuales pendientes

Esta lista documenta las acciones SEO que no se pueden automatizar desde el código
y requieren intervención del operador. Generar la fecha de completado al ejecutar cada una.

## 1. Google Search Console — enviar sitemap

1. Abrir https://search.google.com/search-console
2. Añadir una propiedad de tipo **Dominio** con el valor `tecnifullgas.com` (sin protocolo ni `www`)
3. Copiar el registro TXT de verificación que entrega Google. En Porkbun, abrir DNS de `tecnifullgas.com`, añadir ese TXT en la raíz (Host vacío) y conservar los registros existentes. Si se cambia el proveedor de DNS, crear el TXT en el proveedor autoritativo
4. Volver a Search Console y verificar la propiedad cuando el TXT sea visible
5. Cuando `https://www.tecnifullgas.com/` esté activo con HTTPS, en "Sitemaps" -> añadir `https://www.tecnifullgas.com/sitemap.xml`
6. En "Inspección de URLs" -> probar `https://www.tecnifullgas.com/` y comprobar su URL canónica
7. Solicitar indexación de la home una vez verificada

El sitemap está preparado en `public/sitemap.xml` y referenciado en `public/robots.txt`.
Incluye solo la home: las anclas de sección pertenecen a la misma página y no se envían como URL independientes.
La verificación en Google y la publicación del dominio requieren comprobarse por separado.

## 2. Bing Webmaster Tools — mismo sitemap

1. Abrir https://www.bing.com/webmasters
2. Añadir sitio `https://www.tecnifullgas.com/`
3. Enviar sitemap.xml

## 3. Dirección postal completa

Schema.org `LocalBusiness` lleva hoy `addressLocality: Medellín`, `addressRegion: Antioquia`, sin calle.

Cuando tengas la dirección física, actualiza:

- `index.html` -> bloque JSON-LD `LocalBusiness` -> `address` (añadir `streetAddress`)
- `src/components/SeoSchema.tsx` -> igual (se replica en runtime)
- Opcional: rich result "PostalAddress" con `postalCode` (código postal de Medellín: 0500xx)

## 4. Geolocalización exacta

Hoy: `latitude 6.2442, longitude -75.5812` (centro de Medellín, un punto aproximado).
Si tienes la dirección exacta, conviértela a coords en https://www.google.com/maps y reemplaza:
- `index.html` -> `geo.position` meta + JSON-LD `geo` (LocalBusiness)
- `SeoSchema.tsx` -> igual

## 5. lastmod dinámico en sitemap.xml

`sitemap.xml` no incluye `<lastmod>` porque el sitio es una landing estática sin CMS.
Si más adelante se añaden secciones/blog, regenerar el sitemap con fecha de modificación de cada archivo.

## 6. Merchant / Facebook

`sameAs` en Schema.org Organization incluye hoy:
- `https://www.instagram.com/tecnifullgas`
- `https://www.facebook.com/profile.php?id=61590600920439`

Si el Facebook cambia de URL vanity, actualizar en `index.html` (schema) y `NuestrasRedes.tsx`.

## 7. Google Business Profile (ex G My Business)

Acción **fuera del código**:https://business.google.com
- Crear ficha de "Tecnico de gas" / "Reparacion de electrodomesticos" en Medellín
- Categoria principal: "Servicio de reparacion de electrodomesticos"
- Categoria secundaria: "Plomero" o "Gasfitero"
- Subir fotos de trabajos (los videos /img/Fulli.png / Carousel de clientes)
- Asociar URL: https://www.tecnifullgas.com/
- Horario: L-V 8-18, S 8-15, D cerrado (coincide con schema JSON-LD)

Esto es lo que mas impacta SEO local para "reparacion de calentadores Medellín".

## Estado

- [ ] Google Search Console - sitemap enviado
- [ ] Bing Webmaster Tools - sitemap enviado
- [ ] Direccion postal cargada en schema
- [ ] Geo coords exactas
- [ ] Google Business Profile creado

## Dominio principal y reversión

Dominio principal: `https://www.tecnifullgas.com/`. El registro CNAME `www` en
Porkbun apunta a `tecnifullgas.pages.dev` y el dominio está asociado al proyecto
`tecnifullgas` de Cloudflare Pages. Los DNS autoritativos siguen en Porkbun;
conservar MX y SPF de correo.

La redirección raíz en Porkbun tiene destino `https://www.tecnifullgas.com`,
código 301, inclusión de ruta y wildcard desactivado. La lista de Cloudflare
`tecnifullgas_pages_to_www` lleva `tecnifullgas.pages.dev/` al mismo dominio con
301, conservando ruta y consulta. La lista requiere su regla habilitada.

Antes de cerrar el cambio, comprobar HTTP y HTTPS con y sin www, el origen
pages.dev, una ruta con consulta y las URLs de canonical, robots y sitemap.
El destino www debe responder 200 y las variantes deben converger sin bucles.

Para revertir la publicación de metadatos, usar Rollback en Cloudflare Pages
al despliegue previo `1b62d590-3c1d-4597-a2ae-23082e3a7c64` (commit `917f87e`).
Si la incidencia es de dominio, deshabilitar primero la regla de redirección de
Tecnifullgas para recuperar el acceso directo a pages.dev. El registro `www`
añadido puede retirarse para volver al wildcard anterior `uixie.porkbun.com`.
El forward previo de Porkbun era temporal (302) hacia
`http://tecnifullgas-com.l.ink`, con ruta y wildcard activados. No modificar
registros de correo al revertir.
