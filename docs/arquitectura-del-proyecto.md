# 🏗️ ARQUITECTURA DEL PROYECTO

## TecnifullGas Landing Page

**Versión:** 1.0  
**Fecha:** 24 de mayo de 2026  
**Enfoque:** Single Page Application (SPA) con componentes React reutilizables

---

## 📊 DIAGRAMA DE ARQUITECTURA

```
┌──────────────────────────────────────────────┐
│          USUARIO (NAVEGADOR)                 │
└──────────────────────┬──────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│         APP.TSX (ENRUTADOR RAÍZ)             │
│  - Router configuration                      │
│  - Global providers                          │
└──────────────────────┬──────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│       HOME.TSX (PÁGINA PRINCIPAL)            │
│  - Orquesta todos los componentes            │
│  - Maneja scroll suave                       │
└──────────────┬────────────────────┬──────────┘
               │                    │
       ┌───────▼────────┐   ┌───────▼────────┐
       │  COMPONENTES   │   │  COMPONENTES   │
       │  LAYOUT        │   │  DE SECCIÓN   │
       │ (Header,       │   │ (Hero,        │
       │  Footer,       │   │  Services,    │
       │  FloatingWA)   │   │  FAQ, etc.)   │
       └────────────────┘   └───────┬────────┘
                                    │
                            ┌───────▼────────┐
                            │  COMPONENTES   │
                            │  COMUNES       │
                            │ (Button, Card) │
                            └────────────────┘
```

---

## 🗂️ ESTRUCTURA COMPLETA DE CARPETAS

```
src/
│
├── components/
│   ├── Header.tsx                    # Navegación principal + logo
│   ├── Hero.tsx                      # Sección inicio
│   ├── Services.tsx                  # Grid de servicios
│   ├── WhyChooseUs.tsx               # Diferenciadores (4 pilares)
│   ├── HowItWorks.tsx                # Proceso en 3 pasos
│   ├── WorksGallery.tsx              # Galería de trabajos realizados
│   ├── FAQ.tsx                       # Preguntas frecuentes
│   ├── CTA.tsx                       # Call-to-action final
│   ├── Footer.tsx                    # Pie de página
│   ├── FloatingWhatsApp.tsx          # Botón flotante WhatsApp
│   │
│   └── common/                       # Componentes reutilizables
│       ├── Button.tsx                # Botón genérico (primary/secondary)
│       ├── Card.tsx                  # Card genérico
│       ├── Section.tsx               # Wrapper de sección
│       └── Icon.tsx                  # Iconos SVG
│
├── pages/
│   └── Home.tsx                      # Página principal (orquesta)
│
├── styles/
│   └── globals.css                   # Estilos globales + Tailwind
│
├── utils/
│   ├── constants.ts                  # URLs, números, textos constantes
│   └── helpers.ts                    # Funciones de utilidad (scroll, etc.)
│
├── types/
│   └── index.ts                      # Interfaces y tipos globales
│
├── App.tsx                           # Enrutador y setup global
└── main.tsx                          # Punto de entrada
```

---

## 🔄 FLUJO DE DATOS

### Top-Down: Datos → Componentes

```
App.tsx (Root)
  ↓
Home.tsx (Orquestadora)
  ├── Header (props: navigation links)
  ├── Hero (props: ctaText, backgroundImage)
  ├── Services (props: servicesList)
  ├── WhyChooseUs (props: benefits)
  ├── HowItWorks (props: steps)
  ├── WorksGallery (props: imagesPath)
  ├── FAQ (props: questions)
  ├── CTA (props: whatsappNumber)
  ├── FloatingWhatsApp (props: whatsappNumber)
  └── Footer (props: socialLinks)
```

### Comunicación: Utility Functions

```
utils/constants.ts
├── WHATSAPP_NUMBER = "3014065931"
├── WHATSAPP_URL = "https://wa.me/573014065931"
├── INSTAGRAM_URL = "https://www.instagram.com/tecnifullgas"
├── COMPANY_NAME = "TecnifullGas"
└── NAVIGATION_LINKS = [...]

utils/helpers.ts
├── smoothScroll(elementId)
├── openWhatsApp()
├── handleContactClick()
└── formatPhoneNumber()
```

---

## 💾 TIPADO TYPESCRIPT (types/index.ts)

```typescript
// Servicios
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Pasos del proceso
export interface Step {
  number: number;
  title: string;
  description: string;
}

// Preguntas frecuentes
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Props de componentes
export interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  onClick: () => void;
  className?: string;
}

export interface CardProps {
  title: string;
  description: string;
  icon?: string;
  image?: string;
  children?: React.ReactNode;
}

export interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}
```

---

## 🎯 COMPONENTES: RESPONSABILIDADES

### Layout Components

#### Header.tsx

- Logo + marca
- Navegación links (scroll suave)
- Botón WhatsApp (desktop)
- Menú hamburguesa (mobile)
- Sticky en scroll

**Props sugeridas:**

```typescript
interface HeaderProps {
  navigationLinks: Array<{ label: string; href: string }>;
  whatsappNumber: string;
}
```

#### Footer.tsx

- Links de redes sociales
- Copyright
- Contacto

#### FloatingWhatsApp.tsx

- Botón circular verde fijo
- Abierto a WhatsApp al hacer click
- Visible en todo scroll

### Page Sections

#### Hero.tsx

- Headline principal
- Subtítulo (propuesta de valor)
- CTA principal (botón WhatsApp)
- Posible fondo/imagen

#### Services.tsx

- Grid 1 columna (móvil) → 2-4 (desktop)
- Cards con icono + título + descripción
- 4 servicios: Instalación, Mantenimiento, Reparación, Preventivo/Correctivo

#### WhyChooseUs.tsx

- 4 pilares (experiencia, confianza, respuesta rápida, atención profesional)
- Fondo azul marino
- Texto blanco

#### HowItWorks.tsx

- 3 pasos: Contacto → Visita → Solución
- Numeración clara
- Timeline o cards conectadas

#### WorksGallery.tsx

- Grid de imágenes desde `/public/trabajos/`
- Lazy loading
- Placeholder mientras se cargan imágenes
- Galería responsiva

#### FAQ.tsx

- Acordeones o expansibles
- Preguntas comunes sobre servicios
- Respuestas claras y concisas

#### CTA.tsx

- Sección final con botón grande WhatsApp
- Mensaje llamativo

### Common Components

#### Button.tsx

```typescript
// Props
- variant: 'primary' | 'secondary' | 'tertiary'
- text: string
- onClick: () => void
- disabled?: boolean
- fullWidth?: boolean
- className?: string

// Estados: default, hover, active, disabled
```

#### Card.tsx

```typescript
// Props
- title: string
- description: string
- icon?: string
- image?: string
- children?: ReactNode
```

#### Section.tsx

```typescript
// Props
- id: string (para scroll)
- title: string
- subtitle?: string
- backgroundColor?: string
- children: ReactNode
```

---

## 🔀 NAVEGACIÓN Y SCROLL

### Scroll Suave

```typescript
// utils/helpers.ts
export const smoothScroll = (elementId: string) => {
  const element = document.getElementById(elementId);
  element?.scrollIntoView({ behavior: "smooth" });
};
```

### Links internos

```html
<!-- Header -->
<a onClick="{()" =""> smoothScroll('services')}>Servicios</a>

<!-- Section -->
<section id="services">...</section>
```

### WhatsApp

```typescript
export const openWhatsApp = (number: string, message?: string) => {
  const url = `https://wa.me/${number}`;
  window.open(url, "_blank");
};
```

---

## 🎨 MANEJO DE ESTILOS

### Tailwind CSS (Responsivo)

```tsx
// Ejemplo: Hero section
<section
  className="
  px-6 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-32
  bg-white
  flex flex-col lg:flex-row
  gap-8
"
>
  {/* Contenido */}
</section>
```

### Breakpoints

- `sm`: 640px (tablet)
- `md`: 768px (tablet grande)
- `lg`: 1024px (desktop)
- `xl`: 1280px (desktop grande)

### Variables de color (Tailwind config)

```
tf-primary: #25D366 (Verde WhatsApp)
tf-accent: #FF9500 (Naranja)
tf-dark: #001A4D (Azul marino)
```

---

## 🚀 OPTIMIZACIONES

### Performance

- ✅ Code splitting automático por Vite
- ✅ Lazy loading en galería de trabajos
- ✅ Compresión de imágenes
- ✅ Critical CSS en inline

### SEO

- ✅ Meta tags en index.html
- ✅ Semantic HTML
- ✅ Alt text en imágenes
- ✅ Structured data (schema.org)

### Accesibilidad

- ✅ ARIA labels en botones
- ✅ Focus management
- ✅ Contraste suficiente (WCAG AA)
- ✅ Navegación por teclado

---

## 🔗 INTEGRACIONES EXTERNAS

| Servicio      | Endpoint                     | Propósito        |
| ------------- | ---------------------------- | ---------------- |
| **WhatsApp**  | `wa.me/573014065931`         | Contacto directo |
| **Instagram** | `instagram.com/tecnifullgas` | Red social       |

**Nota:** Sin APIs, sin backend, sin base de datos.

---

## 📱 RESPONSIVIDAD: Mobile-First

### Estrategia

1. **Base:** Diseño móvil (360px)
2. **Tablet:** Añadir dos columnas (640px+)
3. **Desktop:** Grid completo, spacing mayor (1024px+)

### Ejemplo Grid Services

```tsx
<div
  className="
  grid
  grid-cols-1 sm:grid-cols-2
  lg:grid-cols-4
  gap-4 sm:gap-6 lg:gap-8
"
>
  {services.map((service) => (
    <Card key={service.id} {...service} />
  ))}
</div>
```

---

## 🧪 TESTING (Fase 2+)

```bash
# Lighthouse audit
npm run build && npx lighthouse http://localhost:3000

# ESLint check
npm run lint

# Manual testing checklist
- [ ] Móvil 360px
- [ ] Tablet 768px
- [ ] Desktop 1024px+
- [ ] Todos los links funcionan
- [ ] WhatsApp se abre
- [ ] Instagram se abre
```

---

**Referencia:** [tech-stack.md](./tech-stack.md) | [fases-del-proyecto.md](./fases-del-proyecto.md)
