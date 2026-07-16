# MEJORAS.md — TecnifullGas Landing Page

**Fecha:** 12 de julio de 2026
**Basado en:** AUDITORIA.md (Atlas + Crío + Temis)

---

## Prioridad ALTA (bloqueantes)

### M1. Arreglar build de producción
- **Ref:** A-C1
- **Acción:** Quitar la extensión `.tsx` del import en `src/main.tsx:3` → cambiar `import App from './App.tsx'` a `import App from './App'`
- **Verificación:** `npm run build` debe completar sin errores y generar `dist/`
- **Esfuerzo:** 1 minuto

### M2. Implementar menú hamburguesa mobile
- **Ref:** A-C2
- **Acción:** Agregar estado (`useState`) al Header para toggle del menú mobile. Renderizar los links de navegación en un panel desplegable cuando el botón hamburguesa se activa.
- **Verificación:** En viewport < 768px, el botón hamburguesa debe mostrar/ocultar los links de navegación.
- **Esfuerzo:** ~30 minutos

---

## Prioridad MEDIA (calidad de código)

### M3. Centralizar URL de WhatsApp
- **Ref:** A-M1
- **Acción:** Reemplazar las URLs hardcodeadas en `Header.tsx:55`, `Hero.tsx:22`, `CTA.tsx:12` por la constante `WHATSAPP_URL` importada de `constants.ts`.
- **Verificación:** Grep de `wa.me` debe arrojar solo 1 resultado (en constants.ts).
- **Esfuerzo:** 5 minutos

### M4. Eliminar dependencias e imports muertos
- **Ref:** A-M2, A-M3, A-M4, A-M5
- **Acción:**
  1. Quitar `react-router-dom` de `package.json` y correr `npm install`.
  2. Quitar `import { useState } from 'react'` en `App.tsx:1`.
  3. Quitar `WHATSAPP_NUMBER` del import en `Hero.tsx:2`.
  4. Quitar `WHATSAPP_NUMBER` del import en `HowItWorks.tsx:2`.
- **Verificación:** `npm run lint` sin warnings de imports sin usar. `npm run build` exitoso.
- **Esfuerzo:** 5 minutos

### M5. Agregar Vitest como framework de testing
- **Ref:** T-M1
- **Acción:** Instalar Vitest + Testing Library. Configurar script `test` en `package.json`. Escribir tests básicos para: render de cada sección, toggle de FAQ, click en botón WhatsApp.
- **Verificación:** `npm run test` pasa con todos los tests en verde.
- **Esfuerzo:** ~2 horas

### M6. Unificar navegación Header/Footer
- **Ref:** A-B1
- **Acción:** Cambiar los `href="#id"` del Footer para que usen `smoothScroll()` igual que el Header, o viceversa.
- **Verificación:** Click en links del Footer debe hacer scroll suave igual que el Header.
- **Esfuerzo:** 10 minutos

---

## Prioridad BAJA (pulido)

### M7. Agregar assets faltantes
- **Ref:** A-B3
- **Acción:** Agregar `favicon.ico` (o `.svg`) a `public/`. Agregar `og-image.png` para redes sociales y referenciarlo en los meta tags OG de `index.html`.
- **Verificación:** Navegar a localhost:3000 no debe dar 404 en favicon. Validar OG tags con herramienta de debug de Facebook/Twitter.
- **Esfuerzo:** ~30 minutos (depende de tener las imágenes)

### M8. Mover SectionProps a types/index.ts
- **Ref:** A-B2
- **Acción:** Extraer la interfaz `SectionProps` de `Section.tsx` y colocarla en `src/types/index.ts`.
- **Verificación:** Build exitoso, sin cambios funcionales.
- **Esfuerzo:** 2 minutos

---

## No se recomienda ahora

- **CI/CD (T-M2):** Valioso pero prematuro para Nivel 1 con un solo commit. Configurar cuando haya deploy real.
- **Playwright/E2E:** Excesivo para una landing estática. Vitest + Testing Library es suficiente.
