# Spec: Carrusel de Clientes en Hero

## Resumen

Reemplazar la sección de estadísticas/métricas del Hero por un carrusel horizontal infinito de imágenes de clientes que se desplaza automáticamente con animación CSS.

## Problema

La sección de estadísticas (+2,000 Equipos Reparados, +1,500 Clientes Atendidos, 100% Garantía) se ve anticuada y rompe la estética moderna de la página rediseñada. No aporta valor visual al Hero.

## Solución

Un componente `ClientCarousel` que muestra 4 imágenes de clientes (`Cliente1.png` a `Cliente4.png`) en un scroll horizontal continuo e infinito usando CSS `@keyframes`.

## Comportamiento

- **Animación:** `translateX(0)` → `translateX(-50%)` en loop infinito, duración 20s, easing lineal
- **Duplicación:** Las 4 imágenes se renderizan dos veces en el DOM para lograr el efecto de loop continuo
- **Pausa:** La animación se pausa al hacer hover sobre el carrusel (`animation-play-state: paused`)
- **Responsivo:** Las imágenes escalan de `h-12` (mobile) a `h-16` (desktop)
- **Estilo:** Imágenes en grayscale con opacidad reducida; color completo y opacidad al 100% en hover
- **Título:** "Confían en nosotros" centrado arriba del carrusel, texto sutil

## Posición en Hero

Se ubica entre los botones CTA y el texto "Servimos a: Medellín y alrededores". Elimina la sección de métricas y el divisor `border-t`.

## Cambios de Archivos

### Nuevo: `src/components/ClientCarousel.tsx`
- Componente React funcional
- Renderiza un `<div className="overflow-hidden">` conteniendo un track con 8 imágenes (4 originales + 4 duplicadas)
- Cada imagen: `<img>` con `src="/img/ClienteN.png"`, `alt="Cliente TecnifullGas"`, clases de estilo

### Modificado: `src/components/Hero.tsx`
- Eliminar import de `MetricCard` y `HERO_METRICS`
- Eliminar el bloque de métricas (líneas 48-53: `<div className="grid grid-cols-3...">`)
- Importar y renderizar `<ClientCarousel />` después de los botones CTA

### Modificado: `src/styles.css`
- Agregar `@keyframes marquee` con translateX de 0% a -50%
- Agregar clase `.client-track` con `display: flex`, `animation: marquee 20s linear infinite`
- Agregar hover rule para pausar: `.client-track:hover { animation-play-state: paused; }`
- Agregar estilos de grayscale/opacity para imágenes del carrusel

### Eliminado: `src/components/MetricCard.tsx`
- Componente huérfano tras la eliminación de métricas

### Modificado: `src/utils/constants.ts`
- Eliminar `HERO_METRICS` (líneas 124-128)
- Eliminar `Metric` del import de tipos (línea 1)

### Modificado: `src/types/index.ts`
- Eliminar interfaz `Metric` (líneas 45-48) si ya no se usa en ningún otro lugar

## Estilo Visual

```
┌─────────────────────────────────────────────┐
│  [Botón Solicitar]  [Botón WhatsApp]        │
│                                             │
│       Confían en nosotros                   │
│                                             │
│  [C1] [C2] [C3] [C4] [C1] [C2] [C3] [C4]  │  ← scroll infinito
│                                             │
│  Servimos a: Medellín y alrededores         │
└─────────────────────────────────────────────┘
```

- Imágenes: `h-12 sm:h-16`, `object-contain`, `grayscale`, `opacity-50`
- Hover individual: `grayscale-0`, `opacity-100`, `transition-all duration-300`
- Track: `gap-8 sm:gap-12`, `items-center`
- Título: `text-sm font-medium text-tf-text/60 uppercase tracking-wider`

## Restricciones

- Sin dependencias externas (no framer-motion, no swiper)
- CSS puro para la animación
- Las imágenes ya existen en `public/img/Cliente[1-4].png` (~3KB cada una)
- Se mantiene la coherencia visual con el sistema de diseño actual (colores tf-*)

## Criterios de Aceptación

1. El carrusel se desplaza horizontalmente de forma continua e infinita
2. Las 4 imágenes son visibles y se repiten sin cortes visibles
3. La animación se pausa al hover
4. Responsive: se ve bien en mobile (360px) y desktop (1024px+)
5. Las métricas originales fueron eliminadas completamente
6. `MetricCard.tsx` fue eliminado sin errores de build
7. `npm run build` pasa sin errores
