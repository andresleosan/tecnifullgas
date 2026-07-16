# Rediseño Visual Premium TecnifullGas — Plan de Implementación

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transformar la landing page de TecnifullGas en una experiencia visual premium moderna con el enfoque "Gradiente Dinámico" inspirado en Stripe/Linear.

**Architecture:** React SPA con Tailwind CSS. Componentes de sección independientes, utilidad `ScrollReveal` para animaciones, sin dependencias extra (solo CSS + IntersectionObserver). 4 imágenes reales: Cocina.png, Calentador.png, Servicios.png, Fulli.png.

**Tech Stack:** React 18, TypeScript, Tailwind CSS 3.4, Vite 5

## Global Constraints

- Sin dependencias nuevas (solo CSS + IntersectionObserver)
- Imágenes: solo `/img/Cocina.png`, `/img/Calentador.png`, `/img/Servicios.png`, `/img/Fulli.png`
- IDs de sección: mantener `hero`, `servicios`, `por-que-elegirnos`, `como-funciona`, `faq`, `cta-final`
- Colores: `tf-primary` (#25D366), `tf-accent` (#FF9500), `tf-dark` (#001A4D)
- Responsive: 360px mobile, 768px tablet, 1024px+ desktop
- `npm run build` debe pasar sin errores
- `npm run lint` debe pasar sin warnings

---

## Estructura de Archivos

### Crear
| Archivo | Responsabilidad |
|---|---|
| `src/components/ScrollReveal.tsx` | Wrapper IntersectionObserver + fade-in animation |
| `src/components/MetricCard.tsx` | Tarjeta de métrica numérica para Hero |

### Modificar
| Archivo | Cambios |
|---|---|
| `src/components/Header.tsx` | Glassmorphism, compresión al scroll |
| `src/components/Hero.tsx` | Split layout, Cocina.png, métricas, 2 botones |
| `src/components/Services.tsx` | 6 tarjetas con iconos gradiente |
| `src/components/HowItWorks.tsx` | Números grandes gradiente, líneas conectoras |
| `src/components/FAQ.tsx` | Layout dividido con Fulli.png |
| `src/components/CTA.tsx` | Gradiente oscuro, bordes redondeados |
| `src/components/Footer.tsx` | Gradiente oscuro, bordes redondeados arriba |
| `src/App.tsx` | Eliminar WhyChooseUs y WorksGallery |
| `src/utils/constants.ts` | Servicios expandido (6 items), métricas Hero |
| `src/types/index.ts` | Interfaz Metric, actualizar Service |
| `src/styles.css` | Utilidades glassmorphism, scroll animations |
| `src/components/common/Button.tsx` | Sin cambios funcionales, solo verify |
| `src/components/common/Card.tsx` | Sin cambios funcionales, solo verify |
| `src/components/common/Section.tsx` | Sin cambios funcionales, solo verify |

### Eliminar
| Archivo | Razón |
|---|---|
| `src/components/WhyChooseUs.tsx` | Integrado en Hero |
| `src/components/WorksGallery.tsx` | Reemplazado por Resultados Reales |

---

### Task 1: Tipos y Constantes

**Files:**
- Modify: `src/types/index.ts`
- Modify: `src/utils/constants.ts`

**Interfaces:**
- Consumes: nothing (first task)
- Produces: `Metric` type, updated `Service` type, `HERO_METRICS` array, `SERVICES_EXPANDED` array

- [ ] **Step 1: Actualizar types/index.ts**

```typescript
export interface Metric {
  value: string
  label: string
}

export interface Service {
  id: string
  title: string
  icon: string
  description: string
}

export interface WhyChooseUs {
  id: string
  title: string
  emoji: string
  description: string
}

export interface Step {
  number: number
  title: string
  description: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary'
  text: string
  onClick?: () => void
  href?: string
  className?: string
  target?: string
  rel?: string
}

export interface CardProps {
  title: string
  description: string
  icon?: string
  image?: string
  children?: React.ReactNode
}
```

- [ ] **Step 2: Actualizar constants.ts — agregar HERO_METRICS y SERVICES_EXPANDED**

Agregar al final de `src/utils/constants.ts`:

```typescript
export const HERO_METRICS: Metric[] = [
  { value: '+2,000', label: 'Equipos Reparados' },
  { value: '+1,500', label: 'Clientes Atendidos' },
  { value: '100%', label: 'Garantía' },
]

export const SERVICES_EXPANDED: Service[] = [
  {
    id: 'estufas',
    title: 'Estufas',
    icon: '🔥',
    description: 'Instalación, mantenimiento y reparación de estufas de gas.',
  },
  {
    id: 'calentadores',
    title: 'Calentadores',
    icon: '♨️',
    description: 'Servicio técnico especializado en calentadores a gas.',
  },
  {
    id: 'campanas',
    title: 'Campanas',
    icon: '🌀',
    description: 'Instalación y reparación de campanas extractoras.',
  },
  {
    id: 'fugas',
    title: 'Fugas',
    icon: '💧',
    description: 'Detección y reparación de fugas de gas.',
  },
  {
    id: 'reparaciones',
    title: 'Reparaciones',
    icon: '🔧',
    description: 'Reparación general de todos los sistemas de gas.',
  },
  {
    id: 'repuestos',
    title: 'Repuestos',
    icon: '⚙️',
    description: 'Suministro e instalación de repuestos originales.',
  },
]
```

- [ ] **Step 3: Verificar build**

Run: `npm run build`
Expected: PASS sin errores de tipos

- [ ] **Step 4: Commit**

```bash
git add src/types/index.ts src/utils/constants.ts
git commit -m "feat: add Metric type and expanded services constants"
```

---

### Task 2: ScrollReveal Component

**Files:**
- Create: `src/components/ScrollReveal.tsx`

**Interfaces:**
- Consumes: nothing
- Produces: `<ScrollReveal>` component with `children`, `className`, `delay` props

- [ ] **Step 1: Crear ScrollReveal.tsx**

```tsx
import { useEffect, useRef, ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function ScrollReveal({ children, className = '', delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.style.opacity = '0'
    el.style.transform = 'translateY(24px)'
    el.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
```

- [ ] **Step 2: Verificar build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/components/ScrollReveal.tsx
git commit -m "feat: add ScrollReveal component with IntersectionObserver"
```

---

### Task 3: MetricCard Component

**Files:**
- Create: `src/components/MetricCard.tsx`

**Interfaces:**
- Consumes: `Metric` type from `src/types/index.ts`
- Produces: `<MetricCard>` component

- [ ] **Step 1: Crear MetricCard.tsx**

```tsx
import { Metric } from '../types'

interface MetricCardProps {
  metric: Metric
}

export default function MetricCard({ metric }: MetricCardProps) {
  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-tf-primary to-tf-accent bg-clip-text text-transparent">
        {metric.value}
      </div>
      <div className="text-sm text-tf-text mt-1">{metric.label}</div>
    </div>
  )
}
```

- [ ] **Step 2: Verificar build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/components/MetricCard.tsx
git commit -m "feat: add MetricCard component for Hero section"
```

---

### Task 4: Header — Glassmorphism + Compresión

**Files:**
- Modify: `src/components/Header.tsx`

**Interfaces:**
- Consumes: `smoothScroll` from helpers, `WHATSAPP_URL` from constants
- Produces: Updated `<Header>` with glassmorphism and scroll compression

- [ ] **Step 1: Reescribir Header.tsx**

```tsx
import { useState, useEffect } from 'react'
import { smoothScroll } from '../utils/helpers'
import { WHATSAPP_URL } from '../utils/constants'
import Button from './common/Button'

const NAV_LINKS = [
  { id: 'servicios', label: 'Servicios' },
  { id: 'por-que-elegirnos', label: '¿Por qué?' },
  { id: 'como-funciona', label: 'Cómo funciona' },
  { id: 'faq', label: 'Preguntas' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (id: string) => {
    smoothScroll(id)
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md shadow-md py-2'
          : 'bg-white/85 backdrop-blur-md py-4'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-r from-tf-primary to-tf-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
            T
          </div>
          <span className="text-xl sm:text-2xl font-bold text-tf-dark hidden sm:inline">
            TecnifullGas
          </span>
          <span className="text-lg sm:text-xl font-bold text-tf-dark sm:hidden">TG</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="text-tf-text hover:text-tf-primary transition-colors font-medium relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-tf-primary to-tf-accent transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        <Button
          variant="primary"
          text="Contáctanos"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block"
        />

        <button
          className="md:hidden text-tf-dark hover:text-tf-primary transition-colors"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-tf-bg-light bg-white/90 backdrop-blur-md px-6 pb-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="block w-full text-left py-3 text-tf-text hover:text-tf-primary transition-colors font-medium"
            >
              {link.label}
            </button>
          ))}
          <Button
            variant="primary"
            text="Contáctanos por WhatsApp"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-2 text-center"
          />
        </div>
      )}
    </header>
  )
}
```

- [ ] **Step 2: Verificar build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/components/Header.tsx
git commit -m "feat: redesign Header with glassmorphism and scroll compression"
```

---

### Task 5: Hero — Split Layout + Cocina.png + Métricas

**Files:**
- Modify: `src/components/Hero.tsx`

**Interfaces:**
- Consumes: `MetricCard` from MetricCard.tsx, `HERO_METRICS` from constants, `WHATSAPP_URL`, `COMPANY_LOCATION`
- Produces: Updated `<Hero>` with split layout and real image

- [ ] **Step 1: Reescribir Hero.tsx**

```tsx
import Button from './common/Button'
import MetricCard from './MetricCard'
import ScrollReveal from './ScrollReveal'
import { WHATSAPP_URL, COMPANY_LOCATION, HERO_METRICS } from '../utils/constants'

export default function Hero() {
  return (
    <section id="hero" className="px-6 sm:px-8 lg:px-12 pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-24 lg:pb-32 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Contenido Hero */}
        <ScrollReveal>
          <div>
            <span className="inline-block px-4 py-1.5 bg-tf-primary/10 text-tf-primary text-sm font-semibold rounded-full mb-6">
              Servicios Técnicos Certificados
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-tf-dark leading-tight">
              Soluciones en Gas con{' '}
              <span className="bg-gradient-to-r from-tf-primary to-tf-accent bg-clip-text text-transparent">
                Garantía
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-tf-text mt-6 leading-relaxed">
              Instalación, mantenimiento y reparación profesional de sistemas de gas.
              Confía en TecnifullGas para la seguridad de tu hogar y negocio.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                text="Solicitar Ahora"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              />
              <Button
                variant="secondary"
                text="WhatsApp"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>

            <p className="text-tf-text mt-6">
              <strong>Servimos a:</strong> {COMPANY_LOCATION}
            </p>

            {/* Métricas */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-tf-bg-light">
              {HERO_METRICS.map((metric) => (
                <MetricCard key={metric.label} metric={metric} />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Imagen Hero */}
        <ScrollReveal delay={200}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-tf-primary/10 to-tf-accent/10 rounded-3xl transform rotate-3 scale-105" />
            <img
              src="/img/Cocina.png"
              alt="Servicio técnico profesional de gas"
              className="relative w-full h-auto rounded-2xl shadow-2xl"
              loading="eager"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verificar build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat: redesign Hero with split layout, Cocina.png, and metrics"
```

---

### Task 6: Services — 6 Tarjetas con Iconos Gradiente

**Files:**
- Modify: `src/components/Services.tsx`

**Interfaces:**
- Consumes: `SERVICES_EXPANDED` from constants, `ScrollReveal`
- Produces: Updated `<Services>` with 6 gradient icon cards

- [ ] **Step 1: Reescribir Services.tsx**

```tsx
import ScrollReveal from './ScrollReveal'
import { SERVICES_EXPANDED } from '../utils/constants'

export default function Services() {
  return (
    <section id="servicios" className="px-6 sm:px-8 lg:px-12 py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-tf-dark">Nuestros Servicios</h2>
            <p className="text-xl sm:text-2xl font-semibold text-tf-accent mt-2">
              Soluciones completas para cada necesidad
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_EXPANDED.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 100}>
              <div className="bg-white border border-tf-bg-light rounded-xl p-6 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-tf-primary to-tf-accent rounded-full flex items-center justify-center text-2xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-tf-dark mb-2">{service.title}</h3>
                <p className="text-tf-text text-sm leading-relaxed">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verificar build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/components/Services.tsx
git commit -m "feat: redesign Services with 6 gradient icon cards"
```

---

### Task 7: Resultados Reales — Calentador.png Full-Width

**Files:**
- Modify: `src/components/WorksGallery.tsx` → rename content (keep file, change content)

**Interfaces:**
- Consumes: `ScrollReveal`
- Produces: Updated section (now "Resultados Reales")

- [ ] **Step 1: Reescribir WorksGallery.tsx como Resultados Reales**

```tsx
import ScrollReveal from './ScrollReveal'

export default function WorksGallery() {
  return (
    <section id="trabajos" className="px-6 sm:px-8 lg:px-12 py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-tf-dark">
              Resultados que hablan por sí solos
            </h2>
            <p className="text-xl sm:text-2xl text-tf-text mt-2">
              Transformamos equipos deteriorados en sistemas seguros y eficientes.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="relative rounded-2xl overflow-hidden h-[350px] sm:h-[400px] lg:h-[500px]">
            <img
              src="/img/Calentador.png"
              alt="Resultado de servicio — calentador restaurado"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-tf-dark/70 via-tf-dark/40 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 sm:px-12 lg:px-16 max-w-xl">
                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                    Equipo Restaurado
                  </span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                    Funcionamiento Óptimo
                  </span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                    Garantía Incluida
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verificar build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/components/WorksGallery.tsx
git commit -m "feat: transform WorksGallery into Resultados Reales with Calentador.png"
```

---

### Task 8: Cómo Trabajamos — Números Grandes + Líneas Conectoras

**Files:**
- Modify: `src/components/HowItWorks.tsx`

**Interfaces:**
- Consumes: `HOW_IT_WORKS` from constants, `ScrollReveal`
- Produces: Updated `<HowItWorks>` with gradient numbers and connector lines

- [ ] **Step 1: Reescribir HowItWorks.tsx**

```tsx
import ScrollReveal from './ScrollReveal'
import { HOW_IT_WORKS } from '../utils/constants'

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="px-6 sm:px-8 lg:px-12 py-16 sm:py-24 bg-gradient-to-b from-[#F8FAFC] to-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-tf-dark">Cómo Trabajamos</h2>
            <p className="text-xl sm:text-2xl font-semibold text-tf-accent mt-2">
              3 pasos para resolver tu necesidad
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Línea conectora (solo desktop) */}
          <div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-tf-primary to-tf-accent opacity-30" />

          {HOW_IT_WORKS.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 150}>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-tf-primary to-tf-accent rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg relative z-10">
                  {String(step.number).padStart(2, '0')}
                </div>
                <h3 className="text-2xl font-bold text-tf-dark mb-3">{step.title}</h3>
                <p className="text-tf-text leading-relaxed max-w-xs mx-auto">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verificar build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/components/HowItWorks.tsx
git commit -m "feat: redesign HowItWorks with gradient numbers and connector lines"
```

---

### Task 9: FAQ — Layout Dividido + Fulli.png

**Files:**
- Modify: `src/components/FAQ.tsx`

**Interfaces:**
- Consumes: `FAQ_ITEMS` from constants, `ScrollReveal`
- Produces: Updated `<FAQ>` with split layout and Fulli.png

- [ ] **Step 1: Reescribir FAQ.tsx**

```tsx
import { useState } from 'react'
import ScrollReveal from './ScrollReveal'
import { FAQ_ITEMS } from '../utils/constants'

export default function FAQ() {
  const [activeId, setActiveId] = useState<string | null>(null)

  const toggleFAQ = (id: string) => {
    setActiveId(activeId === id ? null : id)
  }

  return (
    <section id="faq" className="px-6 sm:px-8 lg:px-12 py-16 sm:py-24 bg-[#F0F7FF]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-tf-dark">Preguntas Frecuentes</h2>
            <p className="text-xl sm:text-2xl font-semibold text-tf-accent mt-2">
              Resuelve tus dudas antes de contactarnos
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* FAQ Acordeón */}
          <div className="lg:col-span-3 space-y-0">
            {FAQ_ITEMS.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 80}>
                <div className="border-b border-tf-bg-light">
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className="w-full flex justify-between items-center py-4 text-left text-lg font-semibold text-tf-dark hover:text-tf-primary transition-colors"
                    aria-expanded={activeId === item.id}
                  >
                    <span>{item.question}</span>
                    <span
                      className={`transform transition-transform duration-300 ml-4 ${
                        activeId === item.id ? 'rotate-180' : ''
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  {activeId === item.id && (
                    <div className="text-tf-text leading-relaxed pb-4">{item.answer}</div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Fulli.png */}
          <ScrollReveal delay={400} className="lg:col-span-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-white rounded-full scale-110 opacity-50" />
              <img
                src="/img/Fulli.png"
                alt="Fulli — asistente experto en gas"
                className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full shadow-xl hover:rotate-3 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verificar build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/components/FAQ.tsx
git commit -m "feat: redesign FAQ with split layout and Fulli.png"
```

---

### Task 10: CTA Final — Gradiente Oscuro

**Files:**
- Modify: `src/components/CTA.tsx`

**Interfaces:**
- Consumes: `WHATSAPP_URL` from constants, `Button`
- Produces: Updated `<CTA>` with dark gradient and rounded corners

- [ ] **Step 1: Reescribir CTA.tsx**

```tsx
import Button from './common/Button'
import ScrollReveal from './ScrollReveal'
import { WHATSAPP_URL } from '../utils/constants'

export default function CTA() {
  return (
    <section id="cta-final" className="px-6 sm:px-8 lg:px-12 py-20 sm:py-24 bg-gradient-to-br from-tf-dark via-tf-dark to-[#002970] rounded-t-3xl text-white">
      <ScrollReveal>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">¿Listo para empezar?</h2>
          <p className="text-xl sm:text-2xl mb-8 opacity-80">
            Contáctanos hoy y resuelve tu problema
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              text="Solicitar Ahora"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-tf-dark hover:bg-gray-100"
            />
            <Button
              variant="secondary"
              text="WhatsApp"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border-white text-white hover:bg-white hover:text-tf-dark"
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg opacity-80 mb-2">📱 Número de contacto:</p>
            <p className="text-2xl font-bold">3014065931</p>
            <p className="text-sm opacity-60 mt-4">Ubicación: Medellín y alrededores</p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
```

- [ ] **Step 2: Verificar build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/components/CTA.tsx
git commit -m "feat: redesign CTA with dark gradient and rounded corners"
```

---

### Task 11: Footer — Gradiente Oscuro + Bordes Redondeados

**Files:**
- Modify: `src/components/Footer.tsx`

**Interfaces:**
- Consumes: `WHATSAPP_URL`, `INSTAGRAM_URL` from constants
- Produces: Updated `<Footer>` with dark gradient

- [ ] **Step 1: Reescribir Footer.tsx**

```tsx
import { WHATSAPP_URL, INSTAGRAM_URL } from '../utils/constants'

export default function Footer() {
  return (
    <footer className="px-6 sm:px-8 lg:px-12 py-12 bg-gradient-to-b from-tf-dark to-[#001233] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-tf-primary to-tf-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                T
              </div>
              <h3 className="text-xl font-bold">TecnifullGas</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Servicios técnicos de gas profesionales y confiables en Medellín y sus alrededores.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-tf-accent transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#por-que-elegirnos" className="text-gray-300 hover:text-tf-accent transition-colors">
                  ¿Por qué elegirnos?
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-gray-300 hover:text-tf-accent transition-colors">
                  Cómo funciona
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-tf-accent transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <div className="space-y-3">
              <p className="text-sm">
                <span className="font-semibold">WhatsApp:</span> <br />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tf-accent hover:text-white transition-colors"
                >
                  3014065931
                </a>
              </p>
              <p className="text-sm">
                <span className="font-semibold">Instagram:</span> <br />
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tf-accent hover:text-white transition-colors"
                >
                  @tecnifullgas
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2026 TecnifullGas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Verificar build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: redesign Footer with dark gradient"
```

---

### Task 12: App.tsx — Eliminar Componentes

**Files:**
- Modify: `src/App.tsx`
- Delete: `src/components/WhyChooseUs.tsx`

**Interfaces:**
- Consumes: all updated components
- Produces: Clean App.tsx with 8 sections

- [ ] **Step 1: Actualizar App.tsx**

```tsx
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import WorksGallery from './components/WorksGallery'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <WorksGallery />
      <FAQ />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
```

- [ ] **Step 2: Eliminar WhyChooseUs.tsx**

```bash
Remove-Item src/components/WhyChooseUs.tsx
```

- [ ] **Step 3: Verificar build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add src/App.tsx src/components/WhyChooseUs.tsx
git commit -m "feat: remove WhyChooseUs from App, clean up component list"
```

---

### Task 13: Estilos — Glassmorphism + Scroll Animations

**Files:**
- Modify: `src/styles.css`

**Interfaces:**
- Consumes: nothing (utility styles)
- Produces: Updated CSS with glassmorphism and animation utilities

- [ ] **Step 1: Actualizar styles.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #2C3E50;
  background-color: #FFFFFF;
}

/* Gradientes personalizados */
.bg-gradient-tf {
  @apply bg-gradient-to-r from-tf-primary to-tf-accent;
}

/* Botones */
.btn-primary {
  @apply bg-gradient-to-r from-tf-primary to-tf-accent text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-200 font-semibold;
}

.btn-primary:hover {
  @apply scale-105;
}

.btn-secondary {
  @apply border-2 border-tf-primary text-tf-primary px-6 py-3 rounded-lg hover:bg-tf-primary hover:text-white transition-all duration-200 font-semibold;
}

/* Cards */
.card {
  @apply bg-white border border-tf-bg-light rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300;
}

/* Secciones */
.section-title {
  @apply text-3xl sm:text-4xl font-bold text-tf-dark;
}

.section-subtitle {
  @apply text-xl sm:text-2xl font-semibold text-tf-accent mt-2;
}

.section-description {
  @apply text-tf-text text-base sm:text-lg leading-relaxed mt-4;
}

/* Icono placeholder */
.icon-placeholder {
  @apply w-12 h-12 bg-tf-bg-light rounded-lg flex items-center justify-center text-tf-accent text-2xl font-bold;
}

/* FAQ Acordeón */
.faq-item {
  @apply border-b border-tf-bg-light py-4;
}

.faq-question {
  @apply cursor-pointer flex justify-between items-center py-3 text-lg font-semibold text-tf-dark hover:text-tf-primary transition-colors;
}

.faq-answer {
  @apply text-tf-text leading-relaxed py-3 max-h-0 overflow-hidden transition-all duration-300;
}

.faq-item.active .faq-answer {
  @apply max-h-96;
}

.faq-icon {
  @apply transform transition-transform duration-300;
}

.faq-item.active .faq-icon {
  @apply rotate-180;
}

/* Botón flotante WhatsApp */
.floating-whatsapp {
  @apply fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-tf-primary to-tf-accent rounded-full shadow-lg flex items-center justify-center text-white text-2xl hover:scale-110 transition-transform duration-200 z-50 cursor-pointer;
}

.floating-whatsapp:hover {
  @apply shadow-2xl;
}

/* Glassmorphism */
.glass {
  @apply bg-white/85 backdrop-blur-md;
}

/* Scroll reveal base */
.scroll-reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.scroll-reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Responsivo móvil */
@media (max-width: 640px) {
  .btn-primary,
  .btn-secondary {
    @apply w-full;
  }

  .section-title {
    @apply text-2xl;
  }

  .section-subtitle {
    @apply text-lg;
  }
}
```

- [ ] **Step 2: Verificar build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/styles.css
git commit -m "feat: update styles with glassmorphism and scroll animation utilities"
```

---

### Task 14: Verificación Final

**Files:** none (verification only)

- [ ] **Step 1: Build completo**

Run: `npm run build`
Expected: PASS sin errores

- [ ] **Step 2: Lint**

Run: `npm run lint`
Expected: PASS sin warnings

- [ ] **Step 3: Verificar que no quedan imports muertos**

Run: buscar `WhyChooseUs` en src/ — no debe existir
Run: buscar `WorksGallery` como import en App.tsx — debe existir (se mantiene el archivo)

- [ ] **Step 4: Commit final**

```bash
git add -A
git commit -m "feat: complete premium visual redesign of TecnifullGas landing"
```

---

## Self-Review

**1. Spec coverage:**
- ✅ Hero: split layout, Cocina.png, métricas → Task 5
- ✅ Servicios: 6 tarjetas icono gradiente → Task 6
- ✅ Resultados Reales: Calentador.png full-width → Task 7
- ✅ Cómo Trabajamos: números grandes, líneas → Task 8
- ✅ FAQ: dividido con Fulli.png → Task 9
- ✅ CTA Final: gradiente oscuro → Task 10
- ✅ Footer: gradiente oscuro → Task 11
- ✅ Header: glassmorphism → Task 4
- ✅ Tipos y constantes → Task 1
- ✅ ScrollReveal → Task 2
- ✅ MetricCard → Task 3
- ✅ Eliminar WhyChooseUs → Task 12
- ✅ Estilos → Task 13
- ✅ Verificación → Task 14

**2. Placeholder scan:** No TBD/TODO found.

**3. Type consistency:** `Metric` type used in Task 1 matches MetricCard usage in Task 5. `SERVICES_EXPANDED` matches Services component. All consistent.
