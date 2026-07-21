# SEO — Pasos manuales pendientes

Esta lista documenta las acciones SEO que no se pueden automatizar desde el código
y requieren intervención del operador. Generar la fecha de completado al ejecutar cada una.

## 1. Google Search Console — enviar sitemap

1. Abrir https://search.google.com/search-console
2. Añadir propiedad `https://tecnifullgas.pages.dev/` (verificación via DNS TXT o meta tag)
3. En "Sitemaps" -> añadir `https://tecnifullgas.pages.dev/sitemap.xml`
4. En "Inspección de URLs" -> probar la home y los anchors `#nuestros-servicios`, `#trabajos`, `#faq`
5. Solicitar indexación de la home una vez verificada

**Verificación hecha:** sitemap.xml publicado en `/public/sitemap.xml` y referenciado en `robots.txt`.

## 2. Bing Webmaster Tools — mismo sitemap

1. Abrir https://www.bing.com/webmasters
2. Añadir sitio `https://tecnifullgas.pages.dev/`
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
- Asociar URL: https://tecnifullgas.pages.dev/
- Horario: L-V 8-18, S 8-15, D cerrado (coincide con schema JSON-LD)

Esto es lo que mas impacta SEO local para "reparacion de calentadores Medellín".

## Estado

- [ ] Google Search Console - sitemap enviado
- [ ] Bing Webmaster Tools - sitemap enviado
- [ ] Direccion postal cargada en schema
- [ ] Geo coords exactas
- [ ] Google Business Profile creado