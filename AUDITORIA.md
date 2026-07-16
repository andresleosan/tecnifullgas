# AUDITORIA.md — TecnifullGas Landing Page

**Fecha:** 12 de julio de 2026
**Auditores:** Atlas (arquitectura), Crío (seguridad), Temis (testing)
**Commit auditado:** `baef07b` — Subfase 1.3b: Conversión completa a React + TypeScript

---

## Resumen ejecutivo

Landing page funcional en React + TypeScript + Tailwind, con buena estructura de componentes y datos centralizados. El build de producción está **roto** (error de TypeScript). No hay tests. Seguridad limpia: sin secretos expuestos ni vulnerabilidades.

---

## Hallazgos CRÍTICOS

### A-C1. Build de producción roto
- **Auditor:** Atlas
- **Archivo:** `src/main.tsx:3`
- **Problema:** `import App from './App.tsx'` — importar con extensión `.tsx` requiere `allowImportingTsExtensions` en `tsconfig.json`, que no está habilitado. `tsc` falla y por tanto `npm run build` nunca completa.
- **Impacto:** No se puede generar el bundle de producción. El proyecto no es desplegable.

### A-C2. Menú hamburguesa sin funcionalidad
- **Auditor:** Atlas
- **Archivo:** `src/components/Header.tsx:62`
- **Problema:** El botón hamburguesa (mobile) no tiene `onClick` ni estado asociado. Al tocarlo no pasa nada — el menú mobile no existe.
- **Impacto:** Navegación mobile completamente rota. Los usuarios en móvil no pueden acceder a las secciones desde el header.

---

## Hallazgos MEDIOS

### A-M1. URL de WhatsApp hardcodeada en 3 componentes
- **Auditor:** Atlas
- **Archivos:** `Header.tsx:55`, `Hero.tsx:22`, `CTA.tsx:12`
- **Problema:** La URL `https://wa.me/573014065931` está escrita directamente en el JSX en vez de usar la constante `WHATSAPP_URL` que ya existe en `constants.ts`.
- **Impacto:** Si el número cambia, hay que editarlo en 4 lugares distintos (3 componentes + constants.ts).

### A-M2. Dependencia fantasma: react-router-dom
- **Auditor:** Atlas
- **Archivo:** `package.json:15`
- **Problema:** `react-router-dom` está en `dependencies` pero ningún componente lo importa ni usa.
- **Impacto:** Bundle innecesariamente más pesado si se tree-shake mal. Confusión sobre la arquitectura (parece que habría routing cuando no lo hay).

### A-M3. Import sin usar: useState en App.tsx
- **Auditor:** Atlas
- **Archivo:** `src/App.tsx:1`
- **Problema:** `useState` se importa pero nunca se usa en el componente App.
- **Impacto:** Código muerto. El lint debería detectarlo (pero la config de ESLint no incluye `no-unused-vars` explícitamente para imports).

### A-M4. Import sin usar: WHATSAPP_NUMBER en Hero.tsx
- **Auditor:** Atlas
- **Archivo:** `src/components/Hero.tsx:2`
- **Problema:** `WHATSAPP_NUMBER` se importa pero no se usa en el componente (solo se usa `COMPANY_LOCATION`).
- **Impacto:** Código muerto.

### A-M5. Import sin usar: WHATSAPP_NUMBER en HowItWorks.tsx
- **Auditor:** Atlas
- **Archivo:** `src/components/HowItWorks.tsx:2`
- **Problema:** `WHATSAPP_NUMBER` se importa pero el componente no lo referencia directamente (está embebido dentro del string de `HOW_IT_WORKS` en constants.ts).
- **Impacto:** Código muerto.

### T-M1. Cero tests
- **Auditor:** Temis
- **Problema:** No existe ningún framework de testing (ni Vitest, ni Jest, ni Testing Library, ni Playwright). No hay script `test` en `package.json`. No hay un solo archivo `.test.*` o `.spec.*`.
- **Impacto:** Sin red de seguridad para cambios futuros. Cualquier refactor puede romper funcionalidad sin que se detecte.

### T-M2. Sin CI/CD
- **Auditor:** Temis
- **Problema:** No hay `.github/workflows/`, ni configuración de ningún servicio de CI.
- **Impacto:** No hay verificación automática de build, lint ni tests antes de mergear.

---

## Hallazgos BAJOS

### A-B1. Navegación inconsistente entre Header y Footer
- **Auditor:** Atlas
- **Archivos:** `Header.tsx` usa `smoothScroll()`, `Footer.tsx` usa `href="#id"`
- **Problema:** El Header navega con JavaScript (smooth scroll), el Footer con anclas nativas del browser. Comportamiento distinto al hacer clic.
- **Impacto:** UX inconsistente.

### A-B2. SectionProps definido inline
- **Auditor:** Atlas
- **Archivo:** `src/components/common/Section.tsx:1-8`
- **Problema:** La interfaz `SectionProps` está definida dentro del componente en vez de en `src/types/index.ts` donde están las demás interfaces.
- **Impacto:** Inconsistencia menor en la organización de tipos.

### A-B3. Assets faltantes en /public
- **Auditor:** Atlas
- **Problema:** `index.html` referencia `/favicon.ico` pero no existe en `public/`. Tampoco existen `logo.png` ni `og-image.png` mencionados en README.
- **Impacto:** 404 en favicon. OG image no funciona para redes sociales.

### C-B1. Sin vulnerabilidades en dependencias
- **Auditor:** Crío
- **Resultado:** `npm audit` no reportó vulnerabilidades conocidas en dependencias de producción.

### C-B2. .gitignore correcto
- **Auditor:** Crío
- **Resultado:** Incluye `node_modules`, `dist`, `.env`, `.env.local`, `.env.*.local`. Cobertura adecuada.

### C-B3. Sin secretos en historial git
- **Auditor:** Crío
- **Resultado:** No se encontraron archivos `.env`, keys, secrets ni credenciales en el historial de commits.

### C-B4. Links externos seguros
- **Auditor:** Crío
- **Resultado:** Todos los `target="_blank"` incluyen `rel="noopener noreferrer"`. Correcto.

---

## Clasificación del proyecto

**Nivel: 1 (simple)**

Landing page estática, sin backend, sin base de datos, sin autenticación, sin integraciones complejas. Un solo propósito: dirigir tráfico a WhatsApp. No justifica workflow completo de Superpowers ni arquitectura empresarial.
