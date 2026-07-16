# Diseño Visual Premium — TecnifullGas V1

**Fecha:** 2026-07-16
**Enfoque:** Gradiente Dinámico (inspirado en Stripe/Linear)
**Modelo:** MiMo V2.5 Free

---

## Resumen Ejecutivo

Rediseño visual completo de la landing page de TecnifullGas para transformarla de una landing corporativa genérica a una experiencia premium moderna, profesional y memorable. Se utilizan exclusivamente 4 imágenes aprobadas: `Cocina.png`, `Calentador.png`, `Servicios.png`, `Fulli.png`.

---

## Dirección de Arte

**Inspiración:** Apple, Stripe, Linear, Vercel, Notion, empresas modernas de Home Services

**Principios:**
- Mucho espacio en blanco
- Secciones amplias con padding generoso
- Fotografías grandes como protagonistas
- Tarjetas modernas con bordes redondeados (12-16px)
- Microanimaciones suaves (fade-in, stagger, hover)
- Glassmorphism ligero en Header
- Gradientes corporativos azul/naranja

**NO:** Volantes digitales, landing genérica, WordPress, catálogos PDF

---

## Paleta de Colores

| Token | Hex | Uso |
|---|---|---|
| `tf-primary` | `#25D366` | Verde WhatsApp, acentos principales |
| `tf-accent` | `#FF9500` | Naranja, hover states, gradientes |
| `tf-dark` | `#001A4D` | Azul oscuro, fondos de texto, footer |
| `tf-text` | `#2C3E50` | Texto principal |
| `tf-bg-light` | `#ECF0F1` | Fondos alternos |
| `tf-bg-subtle` | `#F8FAFC` | Fondos de sección Services |
| `tf-bg-faq` | `#F0F7FF` | Fondo de sección FAQ |

---

## Secciones Obligatorias (8)

1. Hero
2. Servicios
3. Resultados Reales
4. Cómo Trabajamos
5. Preguntas Frecuentes
6. CTA Final
7. Header
8. Footer

---

## Sección 1: Hero

**Layout:** Dividido 50/50 (desktop), apilado (mobile)

**Lado izquierdo:**
- Badge: "Servicios Técnicos Certificados"
- Título: "Soluciones en Gas con Garantía"
- Subtítulo: "Instalación, mantenimiento y reparación profesional"
- 2 botones: "Solicitar Ahora" (primario gradiente) + "WhatsApp" (outline verde)
- Fila de 3 métricas:
  - `+2,000` Equipos Reparados
  - `+1,500` Clientes Atendidos
  - `100%` Garantía

**Lado derecho:**
- `Cocina.png` con `rounded-2xl`, `shadow-2xl`
- Overlay gradiente ligero `from-tf-dark/10 to-transparent`

**Fondo:** Blanco puro
**Animación:** Imagen fade-in + slide derecha, texto fade-in izquierda
**Lazy load:** `eager` (Above the Fold)

---

## Sección 2: Servicios

**Layout:** Grid 6 tarjetas (3 cols desktop, 2 tablet, 1 mobile)

**Título:** "Nuestros Servicios"
**Subtítulo:** "Soluciones completas para cada necesidad"

**6 tarjetas:**
1. Estufas — icono 🔥
2. Calentadores — icono ♨️
3. Campanas — icono 🌀
4. Fugas — icono 💧
5. Reparaciones — icono 🔧
6. Repuestos — icono ⚙️

**Diseño tarjeta:**
- Fondo blanco, borde sutil
- Icono en círculo gradiente (azul → naranja)
- Título negrita, descripción 1 línea
- Hover: `shadow-lg` + `scale(1.02)`
- `rounded-xl` (12px)

**Fondo sección:** `#F8FAFC`
**Animación:** Tarjetas escalonadas (stagger) al scroll
**Imagen:** `Servicios.png` NO se usa visualmente

---

## Sección 3: Resultados Reales

**Layout:** Imagen de fondo a ancho completo

**Título:** "Resultados que hablan por sí solos"
**Subtítulo:** "Transformamos equipos deteriorados en sistemas seguros y eficientes"

**Imagen:** `Calentador.png`
- `object-cover`, altura `h-[500px]` desktop / `h-[350px]` mobile
- Overlay: `from-tf-dark/70 via-tf-dark/40 to-transparent`
- `rounded-2xl` desktop, `rounded-xl` mobile
- Texto blanco superpuesto a la izquierda
- 3 badges: "Equipo Restaurado", "Funcionamiento Óptimo", "Garantía Incluida"

**Lazy load:** `lazy`

---

## Sección 4: Cómo Trabajamos

**Layout:** 3 pasos horizontal (desktop), apilado (mobile)

**Título:** "Cómo Trabajamos"
**Subtítulo:** "3 pasos para resolver tu necesidad"

**Pasos:**
1. `01` Contacto — "Escríbenos por WhatsApp"
2. `02` Diagnóstico — "Nuestro equipo evalúa tu sistema"
3. `03` Solución — "Trabajo con calidad y garantía"

**Diseño:**
- Números grandes con fondo gradiente (azul → naranja), texto blanco
- Tarjetas blancas con sombra sutil
- Líneas punteadas conectoras entre pasos (desktop)
- `rounded-xl`

**Fondo:** Gradiente sutil `#F8FAFC` → blanco
**Animación:** Pasos de izquierda a derecha secuencialmente

---

## Sección 5: Preguntas Frecuentes

**Layout:** Dividido (desktop) — FAQ izquierda, Fulli.png derecha

**Título:** "Preguntas Frecuentes"
**Subtítulo:** "Resuelve tus dudas antes de contactarnos"

**Izquierda — Acordeón:**
- 5 preguntas (mismas de `constants.ts`)
- Fondo blanco, borde sutil, texto negrita
- Icono "▼" rota al abrir
- Solo 1 abierta a la vez
- Hover: borde cambia a `tf-primary`

**Derecha — Fulli.png:**
- `rounded-full` (círculo), `shadow-xl`
- Desktop: `w-64 h-64`, Tablet: `w-48 h-48`, Mobile: **oculta**
- Fondo: círculo gradiente `from-blue-100 to-white`
- Hover: `hover:rotate-3`

**Fondo sección:** `#F0F7FF`
**Lazy load:** `lazy`

---

## Sección 6: CTA Final

**Layout:** Ancho completo, centrado

**Fondo:** Degradado `#001A4D` → `#001A4D` con overlay naranja sutil

**Contenido:**
- Título blanco: "¿Listo para empezar?"
- Subtítulo blanco 80% opacidad
- 2 botones: "Solicitar Ahora" (blanco, texto azul) + "WhatsApp" (outline blanco)
- WhatsApp icon + número
- "Medellín y alrededores"

**Estilo:**
- `py-20` padding vertical
- `rounded-t-3xl` esquinas superiores (32px)
- Sombras sutiles

---

## Header

**Estilo:** Sticky top, glassmorphism
- Fondo: `rgba(255,255,255,0.85)` + `backdrop-blur-md`
- Borde inferior sutil
- Logo: círculo gradiente con "T" + texto "TecnifullGas"
- Nav links: hover con underline gradiente
- Botón "Contáctanos" gradiente
- Mobile: hamburguesa, menú slide-down glassmorphism
- Se comprime al hacer scroll

---

## Footer

**Estilo:** Gradiente oscuro `#001A4D` → `#001233`

**3 columnas (desktop):**
1. Logo + descripción
2. Links rápidos
3. Contacto (WhatsApp + Instagram)

**Inferior:** Línea separadora + copyright © 2026

---

## Uso de Imágenes

| Sección | Imagen | Ruta | Estilo |
|---|---|---|---|
| Hero | Cocina.png | `/img/Cocina.png` | `rounded-2xl`, shadow, overlay ligero |
| Servicios | *ninguna* | — | Tarjetas con iconos |
| Resultados Reales | Calentador.png | `/img/Calentador.png` | Fondo full-width, overlay gradiente |
| FAQ | Fulli.png | `/img/Fulli.png` | Círculo, sombra, hover rotate |
| CTA | *ninguna* | — | Solo gradiente |
| Footer | *ninguna* | — | Solo texto |

---

## Efectos Visuales

- **Fade In:** Elementos aparecen al hacer scroll (IntersectionObserver)
- **Scroll Reveal:** Reveals escalonados para tarjetas
- **Hover Effects:** Scale, elevación de sombra, rotación (Fulli)
- **Glassmorphism:** Header sticky con blur
- **Gradientes:** Botones, números de pasos, fondos de sección

---

## Componentes

### Eliminar
- `WhyChooseUs.tsx` → integrado en Hero
- `WorksGallery.tsx` → reemplazado por Resultados Reales

### Modificar
- `Hero.tsx` — split layout, Cocina.png, métricas
- `Services.tsx` — 6 tarjetas con iconos gradiente
- `HowItWorks.tsx` — números grandes, líneas conectoras
- `FAQ.tsx` — layout dividido con Fulli.png
- `CTA.tsx` — gradiente oscuro, bordes redondeados
- `Header.tsx` — glassmorphism, compresión scroll
- `Footer.tsx` — gradiente oscuro, bordes redondeados

### Crear
- `ScrollReveal.tsx` — wrapper IntersectionObserver + fade-in
- `MetricCard.tsx` — tarjeta de métrica para Hero

### No cambiar
- `FloatingWhatsApp.tsx`
- `Button.tsx`
- `Card.tsx`
- `Section.tsx`

### Archivos soporte
- `constants.ts` — servicios expandido (6 items), métricas Hero
- `types/index.ts` — interfaz `Metric`, actualizar `Service`
- `styles.css` — utilidades glassmorphism, scroll animations
- `tailwind.config.js` — colores custom si es necesario

---

## Animaciones (CSS + IntersectionObserver)

**Sin dependencias extra.** Todo implementado con:
- `IntersectionObserver` API nativa
- Clases CSS `opacity-0`, `translate-y-4`, `transition-all`
- `data-animate` attribute en elementos
- CSS transitions para hover states

---

## Responsive Breakpoints

| Breakpoint | Ancho | Comportamiento |
|---|---|---|
| Mobile | 360px - 767px | Stack vertical, Fulli oculto |
| Tablet | 768px - 1023px | 2 columnas donde aplica |
| Desktop | 1024px+ | Layout completo dividido |

---

## Verificación

- [ ] `npm run build` pasa sin errores
- [ ] `npm run lint` pasa sin warnings
- [ ] Responsive en 360px, 768px, 1024px+
- [ ] Animaciones funcionan al scroll
- [ ] Imágenes cargan correctamente
- [ ] FAQ acordeón funciona
- [ ] Header sticky con glassmorphism
- [ ] WhatsApp flotante funciona
