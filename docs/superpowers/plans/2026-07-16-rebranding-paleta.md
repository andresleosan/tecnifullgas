# Rebranding Paleta — Plan de Implementación

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reemplazar la paleta verde/amarillo por azul corporativo/naranja en toda la landing de TecnifullGas.

**Architecture:** Remapeo de tokens Tailwind + actualización de hover states. No se cambia estructura de componentes, layouts, ni contenido.

**Tech Stack:** Tailwind CSS, React, TypeScript

## Global Constraints

- Sin dependencias nuevas
- `npm run build` debe pasar sin errores
- No cambiar layouts, espaciado, contenido, ni IDs de sección
- Tokens nuevos: `tf-border` (#E2E8F0), `tf-hover` (#0D3A7A)

---

## Archivos Afectados

| Archivo | Cambio |
|---|---|
| `tailwind.config.js` | Remapear 3 tokens + agregar 2 nuevos |
| `src/styles.css` | `hover:text-tf-primary` → `hover:text-tf-hover` |
| `src/components/Header.tsx` | `hover:text-tf-primary` → `hover:text-tf-hover` (3 usos) |
| `src/components/common/Button.tsx` | `hover:bg-tf-primary` → `hover:bg-tf-hover` |
| `src/components/FAQ.tsx` | `hover:text-tf-primary` → `hover:text-tf-hover` |

---

### Task 1: Actualizar tokens Tailwind

**Files:**
- Modify: `tailwind.config.js`

**Interfaces:**
- Consumes: none
- Produces: tokens `tf-primary`, `tf-accent`, `tf-dark`, `tf-text`, `tf-bg-light` con nuevos valores; tokens `tf-border`, `tf-hover` nuevos

- [ ] **Step 1: Reemplazar valores en tailwind.config.js**

```js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'tf-primary': '#0B2E6B',
        'tf-accent': '#F57C00',
        'tf-dark': '#1E293B',
        'tf-text': '#64748B',
        'tf-bg-light': '#F8FAFC',
        'tf-border': '#E2E8F0',
        'tf-hover': '#0D3A7A',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

- [ ] **Step 2: Build para verificar**

Run: `npm run build`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add tailwind.config.js
git commit -m "chore: rebrand paleta - tokens azul corporativo/naranja"
```

---

### Task 2: Actualizar hover states en CSS y componentes

**Files:**
- Modify: `src/styles.css`
- Modify: `src/components/Header.tsx`
- Modify: `src/components/common/Button.tsx`
- Modify: `src/components/FAQ.tsx`

**Interfaces:**
- Consumes: token `tf-hover` definido en Task 1
- Produces: todos los hover states apuntan a `tf-hover` en vez de `tf-primary`

- [ ] **Step 1: Actualizar styles.css**

Reemplazar en `src/styles.css`:
- Línea 62: `hover:text-tf-primary` → `hover:text-tf-hover`

```css
.faq-question {
  @apply cursor-pointer flex justify-between items-center py-3 text-lg font-semibold text-tf-dark hover:text-tf-hover transition-colors;
}
```

- [ ] **Step 2: Actualizar Header.tsx**

Reemplazar en `src/components/Header.tsx`:
- Nav links desktop: `hover:text-tf-primary` → `hover:text-tf-hover`
- Hamburger icon: `hover:text-tf-primary` → `hover:text-tf-hover`
- Mobile menu links: `hover:text-tf-primary` → `hover:text-tf-hover`

```tsx
// Desktop nav links
className="text-tf-text hover:text-tf-hover transition-colors relative group"

// Hamburger icon
className="text-tf-dark hover:text-tf-hover transition-colors md:hidden"

// Mobile menu links
className="block py-2 text-tf-text hover:text-tf-hover transition-colors"
```

- [ ] **Step 3: Actualizar Button.tsx**

Reemplazar en `src/components/common/Button.tsx`:
- Secondary variant: `hover:bg-tf-primary` → `hover:bg-tf-hover`

```tsx
// Secondary variant
'border-2 border-tf-primary text-tf-primary px-6 py-3 rounded-lg hover:bg-tf-hover hover:text-white transition-all duration-200 font-semibold'
```

- [ ] **Step 4: Actualizar FAQ.tsx**

Reemplazar en `src/components/FAQ.tsx`:
- Question button: `hover:text-tf-primary` → `hover:text-tf-hover`

```tsx
className="w-full text-left cursor-pointer flex justify-between items-center py-3 text-lg font-semibold text-tf-dark hover:text-tf-hover transition-colors"
```

- [ ] **Step 5: Build para verificar**

Run: `npm run build`
Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add src/styles.css src/components/Header.tsx src/components/common/Button.tsx src/components/FAQ.tsx
git commit -m "chore: rebrand hover states a tf-hover"
```

---

### Task 3: Verificación final

**Files:**
- Read only (verificar que no queden referencias a hex antiguos)

**Interfaces:**
- Consumes: Tasks 1 y 2 completadas
- Produces: confirmación de que el rebranding está completo

- [ ] **Step 1: Buscar hex antiguos en src/**

Run: `rg "#25D366|#FF9500|#001A4D" src/`
Expected: Sin resultados

- [ ] **Step 2: Buscar tokens hover antiguos**

Run: `rg "hover:text-tf-primary|hover:bg-tf-primary" src/`
Expected: Sin resultados

- [ ] **Step 3: Build final**

Run: `npm run build`
Expected: PASS

- [ ] **Step 4: Commit final (si hay cambios pendientes)**

```bash
git add -A
git commit -m "chore: rebranding visual completo - paleta azul/naranja"
```
