# Rebranding Visual — Paleta de Colores TecnifullGas

**Fecha:** 2026-07-16
**Tipo:** Rebranding de paleta (remapeo de tokens)
**Enfoque:** A — Cambiar tokens Tailwind, mantener estructura de componentes

---

## 1. Problema Actual

La paleta actual utiliza verde (#25D366) y amarillo/naranja (#FF9500) como colores principales. Esto transmite una identidad de empresa ecológica/renovable, cuando TecnifullGas es una empresa de servicios técnicos de gas que debe transmitir:

- Profesionalismo
- Seguridad
- Confianza
- Servicio técnico certificado
- Especialización en gas

## 2. Paleta Objetivo

| Token | Valor | Uso | Reemplaza |
|---|---|---|---|
| `tf-primary` | `#0B2E6B` | Botones, bordes, acentos, logo | `#25D366` (verde) |
| `tf-accent` | `#F57C00` | Naranja corporativo (fuego/gas) | `#FF9500` (amarillo) |
| `tf-dark` | `#1E293B` | Texto principal (gris carbón) | `#001A4D` (navy) |
| `tf-text` | `#64748B` | Texto secundario (gris medio) | `#2C3E50` (gris oscuro) |
| `tf-bg-light` | `#F8FAFC` | Fondos claros | `#ECF0F1` (gris claro) |
| `tf-border` | `#E2E8F0` | Bordes de cards | (nuevo) |
| `tf-hover` | `#0D3A7A` | Hover del primario | (nuevo) |

## 3. Cambios por Archivo

### 3.1 `tailwind.config.js`
- Reemplazar valores de `tf-primary`, `tf-accent`, `tf-dark`
- Actualizar `tf-text`, `tf-bg-light`
- Agregar `tf-border` y `tf-hover`

### 3.2 `src/styles.css`
- `.btn-secondary`: `border-tf-primary text-tf-primary hover:bg-tf-primary` → azul
- `.faq-question`: `hover:text-tf-primary` → `hover:text-tf-hover`
- `.icon-placeholder`: `text-tf-accent` → se mantiene (naranja)
- `.floating-whatsapp`: gradiente `from-tf-primary to-tf-accent` → azul→naranja

### 3.3 `src/components/Header.tsx`
- Logo circle: gradiente `from-tf-primary to-tf-accent` → azul→naranja
- Nav links: `hover:text-tf-primary` → `hover:text-tf-hover` (3 usos)
- Nav underline: gradiente se mantiene (azul→naranja)
- Hamburger: `hover:text-tf-primary` → `hover:text-tf-hover`
- Mobile menu: `hover:text-tf-primary` → `hover:text-tf-hover`

### 3.4 `src/components/Hero.tsx`
- Badge: `bg-tf-primary/10 text-tf-primary` → `bg-tf-primary/10 text-tf-primary` (mismo token, nuevo valor = azul)
- Headline highlight: gradiente se mantiene (ahora azul→naranja)
- Decorative bg: `from-tf-primary/10 to-tf-accent/10` → azul→naranja tenue

### 3.5 `src/components/common/Button.tsx`
- Primary: gradiente se mantiene (ahora azul→naranja)
- Secondary: `hover:bg-tf-primary` → `hover:bg-tf-hover`

### 3.6 `src/components/FAQ.tsx`
- `hover:text-tf-primary` → `hover:text-tf-hover`

### 3.7 Sin cambios
- `Footer.tsx` — usa gradientes y `text-tf-accent` (se mantienen)
- `Services.tsx` — usa gradientes (se mantienen)
- `HowItWorks.tsx` — usa gradientes (se mantienen)
- `MetricCard.tsx` — usa gradientes (se mantienen)
- `WorksGallery.tsx` — usa gradientes (se mantienen)
- `ScrollReveal.tsx` — sin colores

## 4. Resultado Visual Esperado

- **Botones primarios:** Azul oscuro sólido (#0B2E6B) con hover más claro (#0D3A7A)
- **Gradientes:** Azul→Naranja en logo, step numbers, WhatsApp flotante, headlines
- **Hover nav:** Azul hover en vez de verde
- **Badge Hero:** Fondo azul claro, texto azul oscuro
- **Footer:** Misma estética, hover de links en naranja (se mantiene)
- **Cards:** Bordes sutiles en #E2E8F0

## 5. No Cambia

- Estructura de componentes
- Layouts y espaciado
- Animaciones y transiciones
- Contenido y textos
- Imágenes existentes
- IDs de sección para navegación

## 6. Validación

- `npm run build` debe pasar sin errores
- Verificar que no queden referencias a colores hex anteriores (#25D366, #FF9500, #001A4D)
- Probar en `npm run dev` que todos los hover states funcionan
