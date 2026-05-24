# 🚀 FASES DEL PROYECTO

## TecnifullGas Landing Page - Roadmap Completo

**Versión:** 1.0  
**Fecha:** 24 de mayo de 2026  
**Total de fases:** 3  
**Duración estimada:** 2-3 semanas

---

## 📊 RESUMEN EJECUTIVO

| Fase  | Nombre                             | Duración | Status       |
| ----- | ---------------------------------- | -------- | ------------ |
| **1** | Documentación y Maquetación        | 4-5 días | ⏳ Próxima   |
| **2** | Integración con React + TypeScript | 5-7 días | ⏰ Pendiente |
| **3** | Pulido y Entrega                   | 3-4 días | ⏰ Pendiente |

---

# FASE 1: DOCUMENTACIÓN Y MAQUETACIÓN

## ✅ OBJETIVO: Diseño visual aprobado + HTML/Tailwind puro

**Duración:** 4-5 días  
**Responsable:** Frontend Engineer  
**Criterio de éxito:** Todas las subfases completadas y aprobadas

---

### 1.1 — Definir sistema de diseño completo

**Objetivo:** Documentar colores, tipografía, espaciados y componentes base

**Tareas:**

- ✅ Analizar `referencia-visual.png` → completado
- ✅ Documentar en `docs/sistema-de-diseno.md` → completado
- ✅ Crear variables Tailwind → en `tailwind.config.js`
- ✅ Definir componentes base (Button, Card, Section)
- ⏳ Crear guía visual con ejemplos

**Entregables:**

- `docs/sistema-de-diseno.md` completo
- Archivo `tailwind.config.js` con colores y espaciados
- Ejemplos visuales de componentes en HTML puro

**Criterio de éxito:** El sistema está documentado y listo para implementar

---

### 1.2 — Aprobar sistema de diseño

**Objetivo:** Validar que paleta, tipografía y componentes están correctos

**Tareas:**

- ⏳ Presentar sistema al cliente / PM
- ⏳ Recopilar feedback
- ⏳ Ajustar si es necesario
- ⏳ Obtener firma de aprobación (documento)

**Entregables:**

- Aprobación documentada en `docs/CONTINUIDAD.md`

**Criterio de éxito:** Sistema aprobado, sin cambios pendientes

---

### 1.3 — Maquetar todas las secciones en HTML + Tailwind

**Objetivo:** Crear la página completa con HTML y Tailwind, SIN React aún

**Secciones a maquetar:**

1. ✅ Header (logo, nav, botón WhatsApp)
2. ✅ Hero (headline, CTA principal)
3. ✅ Servicios (grid 4 cards)
4. ✅ ¿Por qué elegirnos? (4 pilares, fondo azul)
5. ✅ Cómo funciona (3 pasos)
6. ✅ Trabajos realizados (galería placeholder)
7. ✅ Preguntas frecuentes (acordeones)
8. ✅ CTA final (botón grande)
9. ✅ Footer (redes, contacto)
10. ✅ Botón flotante WhatsApp (fijo esquina inferior derecha)

**Tareas por sección:**

```
Para cada sección:
  1. Crear index.html con estructura semántica
  2. Aplicar estilos con Tailwind
  3. Asegurar que sea responsive (1 columna móvil)
  4. Validar contraste y legibilidad
```

**Archivo:** `src/pages/Home.html` (o similar)

**Criterio de éxito:**

- ✅ Todas las secciones implementadas
- ✅ Sin errores HTML
- ✅ Estilos correctos según sistema de diseño

---

### 1.4 — Validar responsive mobile en cada sección

**Objetivo:** Asegurar que funciona en móvil (360px, 768px, 1024px)

**Tareas:**

- ⏳ Revisar en Chrome DevTools (360px)
- ⏳ Revisar en tablet (768px)
- ⏳ Revisar en desktop (1024px+)
- ⏳ Validar que textos sean legibles
- ⏳ Validar que botones sean clickeables (44x44px mín)
- ⏳ Probar scroll suave entre secciones
- ⏳ Probar botón flotante en todos los tamaños

**Checklist responsive:**

```
[ ] Tipografía escalable correctamente
[ ] Imágenes responsivas
[ ] Espaciados (padding/margin) correctos en móvil
[ ] Grid se colapsa a 1 columna en móvil
[ ] Botones ocupan ancho completo en móvil
[ ] Hamburguesa visible en móvil, nav horizontal en desktop
[ ] Botón WhatsApp flotante visible en todos lados
[ ] Sin scroll horizontal
```

**Criterio de éxito:** ✅ 100% responsive, sin errores

---

### 1.5 — Documentar estructura de componentes identificados

**Objetivo:** Registrar qué componentes React se crearán en Fase 2

**Tareas:**

- ⏳ Listar todos los componentes necesarios
- ⏳ Documentar props de cada uno
- ⏳ Crear diagrama de dependencias
- ⏳ Actualizar `docs/arquitectura-del-proyecto.md`

**Ejemplo:**

```typescript
// Header.tsx
Props: navigationLinks, whatsappNumber
Children: Logo, Nav, ButtonWhatsApp, Hamburger

// Services.tsx
Props: servicesList
Children: Grid de Cards
```

**Entregables:**

- `docs/arquitectura-del-proyecto.md` actualizado
- Lista de archivos `.tsx` a crear

**Criterio de éxito:** ✅ Arquitectura clara y documentada

---

## ✅ FASE 1 COMPLETA cuando:

- [x] Sistema de diseño documentado
- [x] Maqueta HTML + Tailwind completa
- [x] Responsive validado en 3+ tamaños
- [x] Componentes identificados y documentados
- [ ] Aprobación del cliente recibida

---

---

# FASE 2: INTEGRACIÓN CON REACT + TYPESCRIPT

## 🎯 OBJETIVO: Convertir maqueta a aplicación React interactiva

**Duración:** 5-7 días  
**Responsable:** React Developer  
**Criterio de éxito:** Todas las subfases completadas y funcionales

---

### 2.1 — Convertir maqueta a componentes React tipados

**Objetivo:** Transformar HTML a componentes React con TypeScript

**Tareas:**

- ⏳ Crear estructura base del proyecto (Vite + React + TypeScript)
- ⏳ Configurar Tailwind CSS
- ⏳ Crear archivo `src/types/index.ts` con interfaces
- ⏳ Crear componentes en `src/components/`
  - Header.tsx
  - Hero.tsx
  - Services.tsx
  - WhyChooseUs.tsx
  - HowItWorks.tsx
  - WorksGallery.tsx
  - FAQ.tsx
  - CTA.tsx
  - Footer.tsx
  - FloatingWhatsApp.tsx
  - common/Button.tsx
  - common/Card.tsx
  - common/Section.tsx
- ⏳ Crear página principal `src/pages/Home.tsx`

**Tareas por componente:**

```
Para cada componente:
  1. Crear archivo .tsx
  2. Definir interface Props
  3. Exportar componente con TypeScript
  4. Mantener estilos exactos de maqueta
  5. Props deben venir de constantes/utils
```

**Archivo de constantes:** `src/utils/constants.ts`

```typescript
export const WHATSAPP_NUMBER = "3014065931";
export const WHATSAPP_URL = "https://wa.me/573014065931";
export const INSTAGRAM_URL = "https://www.instagram.com/tecnifullgas";
export const SERVICES = [
  { id: "installation", title: "Instalación", ... },
  // ...
];
export const FAQ_ITEMS = [
  { id: "q1", question: "...", answer: "..." },
  // ...
];
```

**Criterio de éxito:**

- ✅ Todos los componentes creados
- ✅ Cero errores TypeScript (`npm run lint` limpio)
- ✅ Funcionan exactamente como la maqueta
- ✅ Props tipadas correctamente

---

### 2.2 — Implementar scroll suave entre secciones

**Objetivo:** Navegación interna fluida sin refresh

**Tareas:**

- ⏳ Crear función `smoothScroll()` en `src/utils/helpers.ts`
- ⏳ Enlazar Header nav links con IDs de secciones
- ⏳ Cada sección tiene `id="servicios"`, `id="faqs"`, etc.
- ⏳ Hacer que scroll sea suave (CSS + JavaScript)

**Implementación:**

```typescript
// src/utils/helpers.ts
export const smoothScroll = (elementId: string) => {
  const element = document.getElementById(elementId);
  element?.scrollIntoView({ behavior: 'smooth' });
};

// Header.tsx
<a onClick={() => smoothScroll('services')}>Servicios</a>
```

**Criterio de éxito:**

- ✅ Todos los links de nav funcionan
- ✅ Scroll es suave (no jump)
- ✅ URL puede actualizar (hash navigation)

---

### 2.3 — Integrar botón flotante y CTAs de WhatsApp

**Objetivo:** Todos los CTAs abren WhatsApp correctamente

**Tareas:**

- ⏳ Crear `FloatingWhatsApp.tsx`
- ⏳ Crear función `openWhatsApp()` en helpers
- ⏳ Vincular todos los botones CTA
- ⏳ Botón flotante fijo en esquina inferior derecha
- ⏳ Probar en móvil y desktop
- ⏳ Validar que el enlace abre WhatsApp correctamente

**Implementación:**

```typescript
// src/utils/helpers.ts
export const openWhatsApp = (number: string, message?: string) => {
  const url = message
    ? `https://wa.me/${number}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${number}`;
  window.open(url, '_blank');
};

// Button.tsx
<button onClick={() => openWhatsApp(WHATSAPP_NUMBER)}>
  Contáctanos
</button>
```

**Criterio de éxito:**

- ✅ Botón flotante visible en todo tiempo
- ✅ Todos los CTAs abren WhatsApp
- ✅ Funciona en móvil y desktop
- ✅ Mensaje de bienvenida se puede personalizar

---

### 2.4 — Optimizar rendimiento y accesibilidad

**Objetivo:** Lighthouse score ≥ 90 en Performance y Accessibility

**Tareas:**

- ⏳ Ejecutar Lighthouse audit
- ⏳ Optimizar imágenes (lazy loading, compresión)
- ⏳ Eliminar código no usado
- ⏳ Minificar CSS/JS
- ⏳ Agregar ARIA labels
- ⏳ Validar contraste WCAG AA
- ⏳ Probar navegación por teclado
- ⏳ Agregar alt text a imágenes

**Checklist accesibilidad:**

```
[ ] Todos los botones tienen aria-label
[ ] Imágenes tienen alt text descriptivo
[ ] Contraste de texto ≥ 4.5:1 (WCAG AA)
[ ] Tamaño botones ≥ 44x44px (móvil)
[ ] Tab navigation funciona
[ ] Focus visible en todos los elementos
[ ] Estructura semántica correcta (headings)
```

**Criterio de éxito:**

- ✅ Lighthouse Performance ≥ 90
- ✅ Lighthouse Accessibility ≥ 90
- ✅ Cero errores de accesibilidad

---

## ✅ FASE 2 COMPLETA cuando:

- [ ] Componentes React creados y tipados
- [ ] Scroll suave funciona
- [ ] WhatsApp integrado en todos lados
- [ ] Lighthouse scores ≥ 90
- [ ] Cero errores TypeScript
- [ ] Aprobación del cliente recibida

---

---

# FASE 3: PULIDO Y ENTREGA

## 🎁 OBJETIVO: Página lista para producción

**Duración:** 3-4 días  
**Responsable:** DevOps / PM  
**Criterio de éxito:** Página en producción, monitoreada

---

### 3.1 — SEO básico

**Objetivo:** Página indexable en Google con metadatos correctos

**Tareas:**

- ⏳ Actualizar `index.html` con:
  - Título: "TecnifullGas - Servicios Técnicos de Gas en Medellín"
  - Description: Resumen de 160 caracteres
  - og:image: Imagen para redes sociales
  - og:url, og:title, og:description
- ⏳ Agregar `robots.txt`
- ⏳ Crear `sitemap.xml`
- ⏳ Estructura schema.org (LocalBusiness)

**Ejemplo:**

```html
<head>
  <title>TecnifullGas - Servicios de Gas en Medellín</title>
  <meta
    name="description"
    content="Servicios técnicos de gas, instalación, mantenimiento y reparación. Medellín y alrededores. Respuesta rápida y profesional."
  />
  <meta property="og:image" content="https://tecnifullgas.com/og-image.png" />
  <meta property="og:type" content="website" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
```

**Criterio de éxito:**

- ✅ Meta tags completos
- ✅ Imagen og:image optimizada
- ✅ Estructura semántica correcta

---

### 3.2 — Favicon e íconos

**Objetivo:** Branding completo en todas las plataformas

**Tareas:**

- ⏳ Crear favicon.ico (16x16, 32x32, 64x64)
- ⏳ Crear apple-touch-icon.png (180x180)
- ⏳ Crear web app manifest.json
- ⏳ Agregar a `public/`
- ⏳ Enlazar en `index.html`

**Entregables:**

```
public/
├── favicon.ico
├── favicon-32x32.png
├── favicon-16x16.png
├── apple-touch-icon.png
└── manifest.json
```

**Criterio de éxito:**

- ✅ Favicon visible en pestaña
- ✅ Ícono correcto en homescreen (iOS/Android)

---

### 3.3 — Deploy

**Objetivo:** Página en línea, accesible desde cualquier lugar

**Tareas:**

- ⏳ Elegir plataforma: **Vercel** o **Netlify** (recomendado Vercel)
- ⏳ Conectar repositorio Git
- ⏳ Configurar build command: `npm run build`
- ⏳ Configurar output directory: `dist/`
- ⏳ Configurar variables de entorno (.env)
- ⏳ Deploy automático en cada push a `main`
- ⏳ Apuntar dominio (si tienen uno)

**Plataforma recomendada: Vercel**

```bash
# 1. Instalar CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Producción
vercel --prod
```

**Alternativa: Netlify**

```bash
# Conectar repo en netlify.com
# Build: npm run build
# Publish: dist/
```

**Criterio de éxito:**

- ✅ URL pública accesible
- ✅ Deploy automático funciona
- ✅ HTTPS habilitado (automático en Vercel/Netlify)

---

### 3.4 — Checklist final de calidad

**Objetivo:** Validación completa antes de declarar "Done"

**Checklist técnico:**

```
[ ] npm run build - Sin errores
[ ] npm run lint - Sin warnings
[ ] Lighthouse Performance ≥ 90
[ ] Lighthouse Accessibility ≥ 90
[ ] Lighthouse Best Practices ≥ 85
[ ] Lighthouse SEO ≥ 100
[ ] Responsive en 360px, 768px, 1024px+
[ ] Scroll suave funciona
[ ] Botón WhatsApp funciona en móvil y desktop
[ ] Links WhatsApp abren correctamente
[ ] Instagram link abre correctamente
[ ] Botón flotante visible siempre
[ ] Galería trabajos carga imágenes correctamente
[ ] FAQ acordeones abren/cierran
[ ] Cero errores en consola
```

**Checklist de negocio:**

```
[ ] Contenido aprobado por cliente
[ ] Diseño aprobado por cliente
[ ] Número WhatsApp correcto (3014065931)
[ ] Link Instagram correcto (@tecnifullgas)
[ ] Tono y mensajes alineados con marca
[ ] Cobertura geográfica clara (Medellín + alrededores)
```

**Checklist post-deploy:**

```
[ ] URL del sitio en vivo
[ ] Dominio apunta correctamente (si aplica)
[ ] HTTPS funciona
[ ] Redirecciones configuradas (si aplica)
[ ] Analytics configurado (Google Analytics)
[ ] Errores monitoreados (Sentry, etc.)
[ ] Backups automáticos (si aplica)
```

**Criterio de éxito:**

- ✅ Todos los checkboxes marcados
- ✅ Aprobación final del cliente
- ✅ Documentación completa

---

## ✅ FASE 3 COMPLETA cuando:

- [ ] SEO optimizado
- [ ] Favicon e íconos agregados
- [ ] Deploy en Vercel/Netlify
- [ ] Lighthouse scores ≥ 90 (perf + access)
- [ ] Checklist completo finalizado
- [ ] Cliente da visto bueno

---

---

## 📋 RESUMEN: ESTADO DE FASES

```
FASE 1: Documentación y Maquetación
├── 1.1 Sistema de diseño           ✅ COMPLETO
├── 1.2 Aprobación sistema          ⏳ PENDIENTE
├── 1.3 Maquetación HTML + Tailwind ⏳ PRÓXIMO
├── 1.4 Validar responsive          ⏳ PENDIENTE
└── 1.5 Documentar componentes      ⏳ PENDIENTE

FASE 2: React + TypeScript
├── 2.1 Convertir a React           ⏰ FUTURO
├── 2.2 Scroll suave                ⏰ FUTURO
├── 2.3 WhatsApp integration        ⏰ FUTURO
└── 2.4 Optimizar (Lighthouse)      ⏰ FUTURO

FASE 3: Pulido y Entrega
├── 3.1 SEO                         ⏰ FUTURO
├── 3.2 Favicon e íconos            ⏰ FUTURO
├── 3.3 Deploy                      ⏰ FUTURO
└── 3.4 Checklist final             ⏰ FUTURO
```

---

**Referencia:** [CONTINUIDAD.md](./CONTINUIDAD.md) | [arquitectura-del-proyecto.md](./arquitectura-del-proyecto.md)
