# 🎨 SISTEMA DE DISEÑO

## TecnifullGas Landing Page

**Versión:** 1.0  
**Fecha:** 24 de mayo de 2026  
**Fuente:** `/referencia-visual.png`

---

## 🎯 IDENTIDAD VISUAL

### Logo

- **Logo actual:** De `referencia-visual.png`
- **Formatos disponibles:** PNG únicamente
- **Ubicación en página:** Header (izquierda), centrado en móvil
- **Tamaño recomendado:**
  - Desktop: 180px ancho
  - Mobile: 140px ancho

---

## 🌈 PALETA DE COLORES

### Colores primarios

| Color              | Código Hex | RGB          | Uso                                              |
| ------------------ | ---------- | ------------ | ------------------------------------------------ |
| **Verde WhatsApp** | `#25D366`  | 37, 211, 102 | Botones CTA, acentos principales, botón flotante |
| **Naranja/Dorado** | `#FF9500`  | 255, 149, 0  | Acentos de marca, subtítulos, énfasis            |
| **Azul Marino**    | `#001A4D`  | 0, 26, 77    | Títulos, headers, fondos secundarios             |

### Colores neutrales

| Color           | Código Hex | RGB           | Uso                                  |
| --------------- | ---------- | ------------- | ------------------------------------ |
| **Blanco**      | `#FFFFFF`  | 255, 255, 255 | Fondo principal, texto sobre colores |
| **Gris oscuro** | `#2C3E50`  | 44, 62, 80    | Texto cuerpo, descripciones          |
| **Gris claro**  | `#ECF0F1`  | 236, 240, 241 | Fondos secundarios, separadores      |

### Gradientes

| Gradiente    | Colores         | Uso                         |
| ------------ | --------------- | --------------------------- |
| **Hero CTA** | Verde → Naranja | Botones principales en hero |
| **Accent**   | Naranja → Rojo  | Hover en botones            |

---

## 📝 TIPOGRAFÍA

### Fuentes recomendadas (Tailwind)

```css
/* Títulos principales (H1, H2) */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
font-weight: 700; /* Bold */
font-size: 2.5rem (40px) - H1
font-size: 2rem (32px) - H2
color: #001A4D;
```

```css
/* Subtítulos y énfasis (H3, H4) */
font-weight: 600; /* Semibold */
font-size: 1.5rem (24px) - H3
font-size: 1.25rem (20px) - H4
color: #FF9500;
```

```css
/* Cuerpo de texto */
font-size: 1rem (16px) - párrafos
font-size: 0.875rem (14px) - descripción pequeña
font-weight: 400; /* Regular */
color: #2C3E50;
line-height: 1.6;
```

```css
/* Botones y CTAs */
font-size: 1rem (16px);
font-weight: 600; /* Semibold */
color: #ffffff;
text-transform: uppercase; /* Opcional */
```

### Jerarquía de tamaños

| Elemento         | Tamaño | Peso | Color       |
| ---------------- | ------ | ---- | ----------- |
| H1 Hero          | 40px   | 700  | Azul marino |
| H2 Secciones     | 32px   | 700  | Azul marino |
| H3 Subtítulos    | 24px   | 600  | Naranja     |
| Cuerpo principal | 16px   | 400  | Gris oscuro |
| Small/Caption    | 14px   | 400  | Gris claro  |

---

## 🧩 COMPONENTES BASE

### Botones

#### Botón primario (WhatsApp)

```
Fondo: Gradiente Verde → Naranja
Color texto: Blanco
Padding: 12px 24px (móvil) / 16px 32px (desktop)
Border-radius: 8px
Hover: Oscurecer gradiente 10%
```

#### Botón secundario

```
Fondo: Transparente
Border: 2px sólido Verde
Color texto: Verde
Padding: 12px 24px
Border-radius: 8px
Hover: Fondo Verde, texto blanco
```

### Cards de servicios

```
Fondo: Blanco
Border: 1px sólido Gris claro
Border-radius: 12px
Padding: 24px
Shadow: 0 2px 8px rgba(0,0,0,0.1)
Hover: Sombra más pronunciada, borde naranja
```

### Header/Navegación

```
Fondo: Blanco
Border-bottom: 1px sólido Gris claro
Sticky: Sí (fijo en scroll)
Padding: 16px 24px (móvil) / 20px 40px (desktop)
```

### Botón flotante WhatsApp

```
Tamaño: 60px círculo
Fondo: Gradiente Verde → Naranja
Icono: WhatsApp blanco
Posición: Fixed, inferior derecha, 24px del borde
Sombra: 0 4px 12px rgba(0,0,0,0.2)
Hover: Escala 1.1, sombra más grande
```

---

## 📐 ESPACIADOS (Tailwind Spacing)

```
Padding secciones: 40px (móvil) / 60px (desktop)
Margin entre secciones: 80px (móvil) / 100px (desktop)
Gap en grillas: 16px (móvil) / 24px (desktop)
Padding cards: 20px (móvil) / 24px (desktop)
```

---

## 📱 BREAKPOINTS RESPONSIVOS

```
Mobile: < 640px
Tablet: 640px - 1024px
Desktop: > 1024px
```

### Reglas mobile-first

- ✅ Textos más grandes en móvil (legibilidad)
- ✅ Una columna en móvil, grilla en desktop
- ✅ Botones ocupan todo ancho en móvil
- ✅ Header hamburguesa en móvil
- ✅ Navegación expandible en móvil

---

## 🎬 ANIMACIONES Y TRANSICIONES

| Elemento             | Animación            | Duración |
| -------------------- | -------------------- | -------- |
| Botones hover        | Escala 1.05 + sombra | 200ms    |
| Links                | Color fade           | 150ms    |
| Scroll suave         | Easing cubic-bezier  | 300ms    |
| Entrada de secciones | Fade in + slide up   | 400ms    |

---

## ♿ ACCESIBILIDAD

- ✅ Contraste mínimo WCAG AA (4.5:1 texto pequeño)
- ✅ Botones con tamaño mínimo 44x44px (móvil)
- ✅ Alt text en todas las imágenes
- ✅ Navegación por teclado funcional
- ✅ Focus visible en links y botones

---

## 📊 APLICACIÓN EN TAILWIND CSS

```tailwind
/* Paleta de colores en tailwind.config.js */
colors: {
  'tf-primary': '#25D366',    // Verde WhatsApp
  'tf-accent': '#FF9500',     // Naranja
  'tf-dark': '#001A4D',       // Azul marino
  'tf-text': '#2C3E50',       // Gris texto
  'tf-bg-light': '#ECF0F1',   // Gris fondo
}

/* Ejemplo de uso */
<button class="bg-gradient-to-r from-tf-primary to-tf-accent text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all">
  Contáctanos
</button>
```

---

**Referencia:** [alcance-del-proyecto.md](./alcance-del-proyecto.md) | [CONTINUIDAD.md](./CONTINUIDAD.md)
