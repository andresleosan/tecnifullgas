# 🛠️ TECH STACK

## TecnifullGas Landing Page

**Versión:** 1.0  
**Fecha:** 24 de mayo de 2026  
**Validado:** Sí

---

## 📦 DEPENDENCIAS PRINCIPALES

### Frontend

| Tecnología           | Versión | Propósito          | Justificación                                       |
| -------------------- | ------- | ------------------ | --------------------------------------------------- |
| **React**            | 18.x    | Framework de UI    | Componentes reutilizables, rendering eficiente      |
| **TypeScript**       | 5.x     | Tipado estático    | Seguridad de tipos, mejor experiencia de desarrollo |
| **Tailwind CSS**     | 3.x     | Estilos            | Utility-first, responsive rápido, muy flexible      |
| **React Router**     | 6.x     | Navegación interna | Scroll suave entre secciones                        |
| **Axios** (opcional) | 1.x     | HTTP client        | Si necesitamos enviar datos (ej: form)              |

### Build & DevOps

| Tecnología         | Versión   | Propósito       | Justificación                                    |
| ------------------ | --------- | --------------- | ------------------------------------------------ |
| **Vite**           | 4.x o 5.x | Build tool      | Más rápido que Create React App, HMR instantáneo |
| **Node.js**        | 18.x+     | Runtime         | Para ejecutar scripts y desarrollo local         |
| **npm** o **pnpm** | Última    | Package manager | Gestión de dependencias                          |

### Testing & QA (Fase 2+)

| Tecnología     | Versión   | Propósito                | Justificación                             |
| -------------- | --------- | ------------------------ | ----------------------------------------- |
| **Lighthouse** | Integrado | Auditoría de rendimiento | Verificar performance, accessibility, SEO |
| **ESLint**     | 8.x       | Linter                   | Mantener código limpio y consistente      |
| **Prettier**   | 3.x       | Formatter                | Código formateado automáticamente         |

### Deployment

| Plataforma       | Recomendación     | Razón                                                               |
| ---------------- | ----------------- | ------------------------------------------------------------------- |
| **Vercel**       | ⭐ Primera opción | Deployment automático, cinemática rápida, soporte para React nativo |
| **Netlify**      | ⭐ Segunda opción | Similar a Vercel, buen soporte, interfaz sencilla                   |
| **GitHub Pages** | Alternativa       | Hosting gratuito, para repos públicos                               |

---

## 🌳 ESTRUCTURA DE CARPETAS

```
tecnifullgas/
├── public/
│   ├── favicon.ico
│   ├── logo.png
│   ├── og-image.png
│   └── trabajos/              # Imágenes de proyectos (cargar después)
│       ├── .gitkeep
│       └── (imágenes aquí)
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── WorksGallery.tsx
│   │   ├── FAQ.tsx
│   │   ├── CTA.tsx
│   │   ├── Footer.tsx
│   │   ├── FloatingWhatsApp.tsx
│   │   └── common/            # Componentes reutilizables
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Section.tsx
│   ├── pages/
│   │   └── Home.tsx          # Página principal
│   ├── styles/
│   │   └── globals.css
│   ├── utils/
│   │   ├── constants.ts       # Números, URLs, textos constantes
│   │   └── helpers.ts         # Funciones de utilidad
│   ├── types/
│   │   └── index.ts           # Definiciones TypeScript globales
│   ├── App.tsx
│   └── main.tsx
├── docs/
│   ├── INDICE.md
│   ├── alcance-del-proyecto.md
│   ├── sistema-de-diseno.md
│   ├── tech-stack.md           (este archivo)
│   ├── arquitectura-del-proyecto.md
│   ├── fases-del-proyecto.md
│   ├── CONTINUIDAD.md
│   └── copy-y-contenido.md
├── .env.example
├── .gitignore
├── .prettierrc
├── .eslintrc.cjs
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── package.json
├── README.md
└── referencia-visual.png
```

---

## 📋 DEPENDENCIAS EXACTAS (package.json)

```json
{
  "name": "tecnifullgas-landing",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext ts,tsx",
    "format": "prettier --write src/"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.2.0",
    "eslint": "^8.55.0",
    "eslint-config-react-app": "^7.0.1",
    "prettier": "^3.1.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "typescript": "^5.3.0",
    "vite": "^5.0.0"
  }
}
```

---

## 🔧 CONFIGURACIONES IMPORTANTES

### Tailwind Configuration (tailwind.config.js)

```javascript
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "tf-primary": "#25D366",
        "tf-accent": "#FF9500",
        "tf-dark": "#001A4D",
        "tf-text": "#2C3E50",
        "tf-bg-light": "#ECF0F1",
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
};
```

### TypeScript Configuration (tsconfig.json)

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "module": "ESNext",
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "strict": true,
    "moduleResolution": "bundler"
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### Vite Configuration (vite.config.ts)

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
```

---

## 💾 VARIABLES DE ENTORNO (.env.example)

```env
# WhatsApp
VITE_WHATSAPP_NUMBER=3014065931
VITE_WHATSAPP_URL=https://wa.me/573014065931

# Redes sociales
VITE_INSTAGRAM_URL=https://www.instagram.com/tecnifullgas

# Información de empresa
VITE_COMPANY_NAME=TecnifullGas
VITE_COMPANY_LOCATION=Medellín, Colombia
```

---

## 🚀 COMANDOS CLAVE

```bash
# Instalación inicial
npm install

# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint

# Formatear código
npm run format
```

---

## 📊 COMPARATIVA: Por qué este stack

| Aspecto    | Nuestra elección | Alternativa       | Por qué                                         |
| ---------- | ---------------- | ----------------- | ----------------------------------------------- |
| Framework  | React            | Vue / Svelte      | Comunidad más grande, mejor soporte empresarial |
| Lenguaje   | TypeScript       | JavaScript        | Seguridad de tipos, menos bugs en producción    |
| Estilos    | Tailwind         | Styled Components | Velocidad de desarrollo, archivo único          |
| Build tool | Vite             | Webpack / Parcel  | 10x más rápido en HMR, mejor experiencia        |
| Hosting    | Vercel           | AWS / GCP         | Gratuito, automatizado, optimal para React      |

---

## ♻️ VERSIONADO Y ACTUALIZACIONES

- **Lock file:** Usar `package-lock.json` (npm) o `pnpm-lock.yaml` (pnpm)
- **Actualizaciones:** `npm outdated` - revisar cada 3 meses
- **Security:** `npm audit` - ejecutar antes de cada deploy

---

## 📌 DECISIÓN CRÍTICA

**NO incluimos:**

- ❌ Backend (nextjs api routes, express, etc.)
- ❌ Base de datos (firebase, mongodb, etc.)
- ❌ Sistema de auth
- ❌ CMS (contentful, strapi, etc.)

**Razón:** Landing estática, contenido fijo, máximo rendimiento, mínima complejidad.

---

**Referencia:** [arquitectura-del-proyecto.md](./arquitectura-del-proyecto.md) | [fases-del-proyecto.md](./fases-del-proyecto.md)
