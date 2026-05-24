# 💡 GUÍA: CÓMO EJECUTAR EL PROYECTO

## 🚀 INICIO RÁPIDO

### 1. Instalar dependencias

```bash
npm install
```

O si usas pnpm:

```bash
pnpm install
```

### 2. Ejecutar en desarrollo

```bash
npm run dev
```

Se abrirá automáticamente en `http://localhost:3000`

### 3. Compilar para producción

```bash
npm run build
```

Los archivos compilados estarán en `dist/`

### 4. Previsualizar build

```bash
npm run preview
```

---

## ✅ CARACTERÍSTICAS INCLUIDAS

- ✅ React 18 + TypeScript
- ✅ Tailwind CSS con colores personalizados
- ✅ Componentes reutilizables tipados
- ✅ FAQs interactivos con estado
- ✅ Scroll suave entre secciones
- ✅ Botón flotante WhatsApp
- ✅ Responsive mobile-first
- ✅ ESLint + Prettier configurados

---

## 📂 ESTRUCTURA DE COMPONENTES

```
src/
├── components/
│   ├── common/
│   │   ├── Button.tsx      # Botón reutilizable
│   │   ├── Card.tsx        # Card reutilizable
│   │   └── Section.tsx     # Wrapper de sección
│   ├── Header.tsx          # Navegación
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Servicios (grid)
│   ├── WhyChooseUs.tsx     # 4 pilares
│   ├── HowItWorks.tsx      # 3 pasos
│   ├── WorksGallery.tsx    # Galería
│   ├── FAQ.tsx             # FAQs acordeones
│   ├── CTA.tsx             # Call-to-action final
│   ├── Footer.tsx          # Pie de página
│   └── FloatingWhatsApp.tsx # Botón flotante
├── utils/
│   ├── constants.ts        # Datos y URLs
│   └── helpers.ts          # Funciones auxiliares
├── types/
│   └── index.ts            # Interfaces TypeScript
├── styles.css              # Estilos globales
├── App.tsx                 # Componente raíz
└── main.tsx                # Punto de entrada
```

---

## 🔧 COMANDOS DISPONIBLES

```bash
npm run dev            # Desarrollo con HMR
npm run build          # Build para producción
npm run preview        # Preview del build
npm run lint           # Verificar código
npm run format         # Formatear código
```

---

## 📱 RESPONSIVE

- ✅ Mobile: 360px
- ✅ Tablet: 768px
- ✅ Desktop: 1024px+

---

## 🎨 COLORES PERSONALIZADOS (Tailwind)

```
tf-primary: #25D366 (Verde WhatsApp)
tf-accent: #FF9500 (Naranja)
tf-dark: #001A4D (Azul marino)
tf-text: #2C3E50 (Gris texto)
tf-bg-light: #ECF0F1 (Gris fondo)
```

---

## 📞 CONTACTO

- WhatsApp: 3014065931
- Instagram: @tecnifullgas
- Ubicación: Medellín y alrededores

---

## ⚡ NEXT STEPS

1. ✅ Verificar que `npm run dev` funciona
2. Validar responsive en 3 breakpoints
3. Completar subfase 1.4 (validación responsive)
4. Subfase 1.5: Documentar componentes
5. Fase 2: Optimización y SEO

---

**Referencia:** Ver [docs/CONTINUIDAD.md](./docs/CONTINUIDAD.md)
