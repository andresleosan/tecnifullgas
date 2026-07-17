# Carrusel de Clientes en Hero — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reemplazar la sección de estadísticas del Hero por un carrusel horizontal infinito de imágenes de clientes con animación CSS.

**Architecture:** Componente `ClientCarousel` que duplica 4 imágenes de clientes y las anima con `@keyframes translateX`. CSS puro, sin dependencias externas. Se integra en Hero.tsx entre los botones CTA y el texto de ubicación.

**Tech Stack:** React 18, TypeScript, Tailwind CSS, CSS @keyframes

## Global Constraints

- Sin dependencias externas (no framer-motion, no swiper)
- CSS puro para la animación del carrusel
- Imágenes existentes en `public/img/Cliente[1-4].png`
- Sistema de colores: `tf-primary` (#0B2E6B), `tf-accent` (#F57C00), `tf-text` (#64748B)
- Mobile-first (360px, 768px, 1024px+)
- `npm run build` debe pasar sin errores al final

---

## File Structure

| Acción | Archivo | Responsabilidad |
|--------|---------|-----------------|
| Crear | `src/components/ClientCarousel.tsx` | Componente carrusel infinito |
| Modificar | `src/components/Hero.tsx` | Eliminar métricas, integrar carrusel |
| Modificar | `src/styles.css` | Agregar keyframes y estilos del carrusel |
| Eliminar | `src/components/MetricCard.tsx` | Componente huérfano |
| Modificar | `src/utils/constants.ts` | Eliminar HERO_METRICS |
| Modificar | `src/types/index.ts` | Eliminar interfaz Metric |

---

### Task 1: Crear estilos CSS del carrusel

**Files:**
- Modify: `src/styles.css`

**Interfaces:**
- Consumes: colores `tf-primary`, `tf-accent`, `tf-text` existentes en Tailwind config
- Produce: clases `.client-carousel`, `.client-track`, `@keyframes marquee` — usadas por `ClientCarousel.tsx`

- [ ] **Step 1: Agregar keyframes y estilos del carrusel al final de styles.css**

```css
/* Carrusel de clientes */
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.client-track {
  display: flex;
  animation: marquee 20s linear infinite;
  width: max-content;
}

.client-track:hover {
  animation-play-state: paused;
}

.client-carousel img {
  height: 3rem;
  object-fit: contain;
  filter: grayscale(100%) opacity(0.5);
  transition: filter 0.3s ease;
}

@media (min-width: 640px) {
  .client-carousel img {
    height: 4rem;
  }
}

.client-carousel img:hover {
  filter: grayscale(0%) opacity(1);
}
```

- [ ] **Step 2: Verificar que styles.css no tiene errores de sintaxis**

Run: `npm run build`
Expected: Build pasa (los estilos se compilan sin errores)

- [ ] **Step 3: Commit**

```bash
git add src/styles.css
git commit -m "feat: agregar estilos CSS del carrusel de clientes"
```

---

### Task 2: Crear componente ClientCarousel.tsx

**Files:**
- Create: `src/components/ClientCarousel.tsx`

**Interfaces:**
- Consumes: estilos `.client-carousel` y `.client-track` de `styles.css` (Task 1)
- Produce: componente `<ClientCarousel />` — importado por Hero.tsx (Task 3)

- [ ] **Step 1: Crear ClientCarousel.tsx**

```tsx
const CLIENT_IMAGES = [
  { src: '/img/Cliente1.png', alt: 'Cliente TecnifullGas' },
  { src: '/img/Cliente2.png', alt: 'Cliente TecnifullGas' },
  { src: '/img/Cliente3.png', alt: 'Cliente TecnifullGas' },
  { src: '/img/Cliente4.png', alt: 'Cliente TecnifullGas' },
]

export default function ClientCarousel() {
  return (
    <div className="client-carousel mt-8">
      <p className="text-center text-xs font-medium text-tf-text/60 uppercase tracking-wider mb-4">
        Confían en nosotros
      </p>
      <div className="overflow-hidden">
        <div className="client-track">
          {CLIENT_IMAGES.concat(CLIENT_IMAGES).map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              className="mx-4 sm:mx-6 shrink-0"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Verificar build**

Run: `npm run build`
Expected: Build pasa

- [ ] **Step 3: Commit**

```bash
git add src/components/ClientCarousel.tsx
git commit -m "feat: crear componente ClientCarousel con scroll infinito CSS"
```

---

### Task 3: Integrar ClientCarousel en Hero.tsx

**Files:**
- Modify: `src/components/Hero.tsx:1-4` (imports)
- Modify: `src/components/Hero.tsx:48-53` (métricas → carrusel)

**Interfaces:**
- Consumes: `<ClientCarousel />` de `ClientCarousel.tsx` (Task 2)
- Produce: Hero.tsx renderiza el carrusel en lugar de las métricas

- [ ] **Step 1: Actualizar imports en Hero.tsx**

Eliminar:
```tsx
import MetricCard from './MetricCard'
import { WHATSAPP_URL, COMPANY_LOCATION, HERO_METRICS } from '../utils/constants'
```

Agregar:
```tsx
import ClientCarousel from './ClientCarousel'
import { WHATSAPP_URL, COMPANY_LOCATION } from '../utils/constants'
```

- [ ] **Step 2: Reemplazar métricas por carrusel en Hero.tsx**

Eliminar el bloque completo (líneas 48-53):
```tsx
{/* Métricas */}
<div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-tf-bg-light">
  {HERO_METRICS.map((metric) => (
    <MetricCard key={metric.label} metric={metric} />
  ))}
</div>
```

Insertar en su lugar:
```tsx
<ClientCarousel />
```

- [ ] **Step 3: Verificar build**

Run: `npm run build`
Expected: Build pasa sin errores

- [ ] **Step 4: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat: integrar ClientCarousel en Hero, eliminar métricas"
```

---

### Task 4: Eliminar código huérfano

**Files:**
- Delete: `src/components/MetricCard.tsx`
- Modify: `src/utils/constants.ts:1,124-128`
- Modify: `src/types/index.ts:45-48`

**Interfaces:**
- Consumes: Task 3 completada (Hero.tsx ya no usa MetricCard ni HERO_METRICS)
- Produce: codebase limpio sin componentes/constantes huérfanas

- [ ] **Step 1: Eliminar MetricCard.tsx**

```bash
rm src/components/MetricCard.tsx
```

- [ ] **Step 2: Eliminar HERO_METRICS de constants.ts**

Eliminar línea 1 (import de Metric):
```tsx
import { Metric, Service } from '../types'
```
Cambiar a:
```tsx
import { Service } from '../types'
```

Eliminar líneas 124-128:
```tsx
export const HERO_METRICS: Metric[] = [
  { value: '+2,000', label: 'Equipos Reparados' },
  { value: '+1,500', label: 'Clientes Atendidos' },
  { value: '100%', label: 'Garantía' },
]
```

- [ ] **Step 3: Eliminar interfaz Metric de types/index.ts**

Eliminar líneas 45-48:
```tsx
export interface Metric {
  value: string
  label: string
}
```

- [ ] **Step 4: Verificar build completo**

Run: `npm run build`
Expected: Build pasa sin errores ni warnings de imports muertos

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: eliminar MetricCard, HERO_METRICS y interfaz Metric huérfanos"
```

---

### Task 5: Verificación final y lint

**Files:** Ninguno (solo verificación)

- [ ] **Step 1: Build de producción**

Run: `npm run build`
Expected: Build pasa sin errores

- [ ] **Step 2: Verificar que el carrusel es visible en el Hero**

Revisar que:
1. Las 4 imágenes de clientes aparecen en el Hero
2. El scroll horizontal es continuo e infinito
3. Las métricas originales fueron eliminadas
4. El texto "Confían en nosotros" está presente
5. Responsive: se ve bien en mobile y desktop

- [ ] **Step 3: Commit final (si hay cambios pendientes)**

```bash
git status
# Si hay cambios:
git add -A && git commit -m "feat: carrusel de clientes en Hero - verificación final"
```
