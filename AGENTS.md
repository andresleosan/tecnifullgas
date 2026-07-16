# AGENTS.md

## Comandos

```bash
npm run dev       # Dev server en http://localhost:3000 (se abre automáticamente)
npm run build     # Build de producción: tsc && vite build
npm run lint      # ESLint sobre src/
npm run format    # Prettier sobre src/
```

No hay tests configurados. `npm run build` ya corre `tsc` (no hay typecheck separado).

## Arquitectura

Landing page SPA de una sola página. Sin backend, sin base de datos, sin autenticación.

**Entrypoints:** `index.html` → `src/main.tsx` → `src/App.tsx`

**Componentes (13 total):**
- Secciones (10): Header, Hero, Services, WhyChooseUs, HowItWorks, WorksGallery, FAQ, CTA, Footer, FloatingWhatsApp
- Comunes (3): Button, Card, Section

**Estructura clave:**
- `src/utils/constants.ts` — datos centralizados (servicios, FAQs, contactos)
- `src/utils/helpers.ts` — smoothScroll, openWhatsApp
- `src/types/index.ts` — interfaces TypeScript
- `src/styles.css` — utilidades CSS custom (`.btn-primary`, `.card`, `.section-title`, `.faq-item`, `.floating-whatsapp`) que complementan Tailwind

**Configuración de herramientas:**
- ESLint: `@typescript-eslint/parser`, `react-refresh` plugin, reglas estándar TS + React hooks
- Prettier: semicolons, single quotes, trailingComma es5, printWidth 100, tabWidth 2
- Tailwind: colores custom `tf-*`, breakpoints mobile-first (360px, 768px, 1024px+)
- `.opencode/opencode.json` — plugin graphify.js activo

## Convenciones

- Colores Tailwind custom: `tf-primary` (#25D366), `tf-accent` (#FF9500), `tf-dark` (#001A4D), `tf-text` (#2C3E50), `tf-bg-light` (#ECF0F1)
- TypeScript strict mode
- Mobile-first (360px, 768px, 1024px+)
- Metodología DDD: `docs/` es fuente de verdad. Textos exactos en `docs/copy-y-contenido.md`. Sistema de diseño en `docs/sistema-de-diseno.md`.
- Contacto: WhatsApp 3014065931, Instagram @tecnifullgas, ubicación Medellín y alrededores

## Gotchas / Known issues

- **Build roto sin los cambios sin commit.** El working tree tiene fixes (ver `git diff HEAD`): `import App from './App'` (sin extensión), menú hamburguesa funcional, URLs de WhatsApp centralizadas, imports muertos eliminados. Hacer commit de los cambios pendientes antes de cualquier otra tarea.
- **Navegación inconsistente:** Header usa `smoothScroll()` (JS), Footer usa `<a href="#id">` (navegación nativa). Comportamiento distinto al hacer clic.
- **SectionProps definido inline** en `Section.tsx`, no en `src/types/index.ts` donde están las demás interfaces.
- **Assets faltantes en `/public`:** No existen `favicon.ico`, `logo.png`, `og-image.png`. La galería de trabajos usa placeholder (imágenes irían en `/public/trabajos/`).

## Referencias

- `docs/CONTINUIDAD.md` — estado actual, historial de sesiones, próxima subfase
- `docs/fases-del-proyecto.md` — roadmap completo
- `AUDITORIA.md` — hallazgos de auditoría (build, hamburger menu, imports muertos, etc.). Los hallazgos críticos/medios ya están fixeados en el working tree.
- `MEJORAS.md` — plan de acción priorizado basado en la auditoría

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships. The graphify plugin is already configured in `.opencode/opencode.json`.

When the user types `/graphify`, use the installed graphify skill or instructions before doing anything else.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- Dirty graphify-out/ files are expected after hooks or incremental updates; dirty graph files are not a reason to skip graphify. Only skip graphify if the task is about stale or incorrect graph output, or the user explicitly says not to use it.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
