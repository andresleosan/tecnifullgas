# Graph Report - tecnifullgas  (2026-07-20)

## Corpus Check
- 51 files · ~247,514 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 615 nodes · 701 edges · 40 communities (36 shown, 4 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c8e12af0`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Project Documentation
- Agent Instructions & Audit
- Architecture & Setup
- Scope & Business Rules
- Visual Design Reference
- Card Component
- CTA Component
- FloatingWhatsApp Component
- Footer Component
- Hero Component
- HowItWorks Component
- Services Component
- WhyChooseUs Component
- WorksGallery Component
- ButtonProps Type
- CardProps Type
- FAQItem Type
- Service Type
- Step Type
- WhyChooseUs Type
- Acordeones (FAQs)
- Los 4 Pilares
- File Structure
- compilerOptions
- AGENTS.md
- Cards (4 servicios)
- ✅ OBJETIVO: Diseño visual aprobado + HTML/Tailwind puro
- 🎁 OBJETIVO: Página lista para producción
- 🎯 OBJETIVO: Convertir maqueta a aplicación React interactiva
- 📑 ÍNDICE MAESTRO DE DOCUMENTACIÓN
- Archivos Afectados
- ✅ SÍ CONSTRUIMOS
- 📦 DEPENDENCIAS PRINCIPALES
- opencode.json
- graphify.js
- Section.tsx
- Progress Ledger

## God Nodes (most connected - your core abstractions)
1. `✍️ COPY Y CONTENIDO` - 23 edges
2. `🏗️ ARQUITECTURA DEL PROYECTO` - 20 edges
3. `Diseño Visual Premium — TecnifullGas V1` - 19 edges
4. `Estructura de Archivos` - 18 edges
5. `📋 ALCANCE DEL PROYECTO` - 17 edges
6. `🛠️ TECH STACK` - 17 edges
7. `🔧 TecnifullGas Landing Page` - 15 edges
8. `compilerOptions` - 14 edges
9. `📋 CONTINUIDAD DEL PROYECTO` - 13 edges
10. `🚀 FASES DEL PROYECTO` - 13 edges

## Surprising Connections (you probably didn't know these)
- `DDD Document Driven Development` --conceptually_related_to--> `docs/INDICE.md`  [INFERRED]
  README.md → docs/INDICE.md
- `Critical Audit Findings A-C1 and A-C2` --conceptually_related_to--> `Known Issues and Gotchas`  [INFERRED]
  AUDITORIA.md → AGENTS.md
- `React TypeScript Tailwind Vite Stack` --conceptually_related_to--> `SPA Single Page Application Architecture`  [INFERRED]
  docs/tech-stack.md → docs/arquitectura-del-proyecto.md
- `13 Component Architecture` --conceptually_related_to--> `Custom Tailwind Color Palette tf-*`  [INFERRED]
  docs/arquitectura-del-proyecto.md → docs/sistema-de-diseno.md
- `Header()` --calls--> `smoothScroll()`  [EXTRACTED]
  src/components/Header.tsx → src/utils/helpers.ts

## Import Cycles
- None detected.

## Communities (40 total, 4 thin omitted)

### Community 0 - "Project Documentation"
Cohesion: 0.09
Nodes (36): 📋 ALCANCE DEL PROYECTO, 🎨 CARACTERÍSTICAS DE DISEÑO, 📍 COBERTURA GEOGRÁFICA, ⚡ CRITERIOS DE ÉXITO FINAL, 📌 DECISIONES CLAVE DOCUMENTADAS, Medellin y Alrededores Geographic Coverage, Mobile First Responsive Design, No Backend No Database No Auth Constraint (+28 more)

### Community 1 - "Agent Instructions & Audit"
Cohesion: 0.11
Nodes (19): Graphify Knowledge Graph Integration, Known Issues and Gotchas, Critical Audit Findings A-C1 and A-C2, Medium Audit Findings A-M1 through T-M2, Security Findings C-B1 through C-B4, M1. Arreglar build de producción, M2. Implementar menú hamburguesa mobile, M3. Centralizar URL de WhatsApp (+11 more)

### Community 2 - "Architecture & Setup"
Cohesion: 0.08
Nodes (27): Accesibilidad, 🏗️ ARQUITECTURA DEL PROYECTO, Breakpoints, 13 Component Architecture, Comunicación: Utility Functions, 📊 DIAGRAMA DE ARQUITECTURA, Ejemplo Grid Services, Estrategia (+19 more)

### Community 3 - "Scope & Business Rules"
Cohesion: 0.04
Nodes (49): Animación, 📌 CONSTANTES GLOBALES, Contacto directo, Contenido, ✍️ COPY Y CONTENIDO, Copyright, CTA Button, CTA Principal (+41 more)

### Community 5 - "Card Component"
Cohesion: 0.07
Nodes (22): CLIENT_IMAGES, ClientCarousel(), CTA(), FloatingWhatsApp(), Footer(), Header(), NAV_LINKS, Hero() (+14 more)

### Community 6 - "CTA Component"
Cohesion: 0.06
Nodes (31): agent, Cronos V3, cat *credential*, cat *.env*, cat *secret*, env, git push --force*, history (+23 more)

### Community 7 - "FloatingWhatsApp Component"
Cohesion: 0.06
Nodes (31): 📁 ARCHIVOS CREADOS EN ESTA SESIÓN (Sesión 2), 📁 ARCHIVOS CREADOS O MODIFICADOS, Bloqueo 1: Imágenes de trabajos realizados, 🚩 BLOQUEOS O RIESGOS IDENTIFICADOS, ✅ CHECKLIST PARA REANUDACIÓN, Componentes React creados, 📋 CONTINUIDAD DEL PROYECTO, 💡 DECISIONES IMPORTANTES TOMADAS (+23 more)

### Community 8 - "Footer Component"
Cohesion: 0.08
Nodes (25): autoprefixer, eslint, eslint-config-react-app, eslint-plugin-react-refresh, devDependencies, autoprefixer, eslint, eslint-config-react-app (+17 more)

### Community 9 - "Hero Component"
Cohesion: 0.08
Nodes (24): Animaciones (CSS + IntersectionObserver), Archivos soporte, Componentes, Crear, Dirección de Arte, Diseño Visual Premium — TecnifullGas V1, Efectos Visuales, Eliminar (+16 more)

### Community 10 - "HowItWorks Component"
Cohesion: 0.08
Nodes (24): ♿ ACCESIBILIDAD, 🎬 ANIMACIONES Y TRANSICIONES, 📊 APLICACIÓN EN TAILWIND CSS, Botones, Botón flotante WhatsApp, Botón primario (WhatsApp), Botón secundario, 📱 BREAKPOINTS RESPONSIVOS (+16 more)

### Community 11 - "Services Component"
Cohesion: 0.09
Nodes (22): A-B1. Navegación inconsistente entre Header y Footer, A-B2. SectionProps definido inline, A-B3. Assets faltantes en /public, A-C1. Build de producción roto, A-C2. Menú hamburguesa sin funcionalidad, A-M1. URL de WhatsApp hardcodeada en 3 componentes, A-M2. Dependencia fantasma: react-router-dom, A-M3. Import sin usar: useState en App.tsx (+14 more)

### Community 12 - "WhyChooseUs Component"
Cohesion: 0.09
Nodes (21): Crear, Eliminar, Estructura de Archivos, Global Constraints, Modificar, Rediseño Visual Premium TecnifullGas — Plan de Implementación, Self-Review, Task 10: CTA Final — Gradiente Oscuro (+13 more)

### Community 13 - "WorksGallery Component"
Cohesion: 0.10
Nodes (21): 1. Leer documentación, 2. Instalar dependencias (cuando lleguemos a React), 3. Desarrollo local, ✨ CARACTERÍSTICAS PRINCIPALES, ✅ Completado, 🤝 CONTRIBUCIONES, 📖 CÓMO USAR ESTE REPOSITORIO, 📋 DECISIONES TOMADAS (+13 more)

### Community 14 - "ButtonProps Type"
Cohesion: 0.10
Nodes (20): DOM, DOM.Iterable, ES2020, src, compilerOptions, allowSyntheticDefaultImports, esModuleInterop, isolatedModules (+12 more)

### Community 15 - "CardProps Type"
Cohesion: 0.12
Nodes (17): Button.tsx, Card.tsx, Common Components, 🎯 COMPONENTES: RESPONSABILIDADES, CTA.tsx, FAQ.tsx, FloatingWhatsApp.tsx, Footer.tsx (+9 more)

### Community 16 - "FAQItem Type"
Cohesion: 0.12
Nodes (16): Cambios de Archivos, Comportamiento, Criterios de Aceptación, Eliminado: `src/components/MetricCard.tsx`, Estilo Visual, Modificado: `src/components/Hero.tsx`, Modificado: `src/styles.css`, Modificado: `src/types/index.ts` (+8 more)

### Community 17 - "Service Type"
Cohesion: 0.12
Nodes (16): dependencies, react, react-dom, react-icons, name, scripts, build, dev (+8 more)

### Community 18 - "Step Type"
Cohesion: 0.13
Nodes (14): 1. Problema Actual, 2. Paleta Objetivo, 3.1 `tailwind.config.js`, 3.2 `src/styles.css`, 3.3 `src/components/Header.tsx`, 3.4 `src/components/Hero.tsx`, 3.5 `src/components/common/Button.tsx`, 3.6 `src/components/FAQ.tsx` (+6 more)

### Community 19 - "WhyChooseUs Type"
Cohesion: 0.15
Nodes (13): 1. Instalar dependencias, 2. Ejecutar en desarrollo, 3. Compilar para producción, 4. Previsualizar build, ✅ CARACTERÍSTICAS INCLUIDAS, 🎨 COLORES PERSONALIZADOS (Tailwind), 🔧 COMANDOS DISPONIBLES, 📞 CONTACTO (+5 more)

### Community 20 - "Acordeones (FAQs)"
Cohesion: 0.22
Nodes (9): Acordeones (FAQs), P1, P2, P3, P4, P5, ❓ SECCIÓN 7: PREGUNTAS FRECUENTES, Subtítulo (+1 more)

### Community 21 - "Los 4 Pilares"
Cohesion: 0.22
Nodes (9): Fondo, Los 4 Pilares, Pilar 1: Experiencia, Pilar 2: Confianza, Pilar 3: Respuesta Rápida, Pilar 4: Atención Profesional, ⭐ SECCIÓN 4: ¿POR QUÉ ELEGIRNOS?, Subtítulo (+1 more)

### Community 22 - "File Structure"
Cohesion: 0.22
Nodes (8): Carrusel de Clientes en Hero — Implementation Plan, File Structure, Global Constraints, Task 1: Crear estilos CSS del carrusel, Task 2: Crear componente ClientCarousel.tsx, Task 3: Integrar ClientCarousel en Hero.tsx, Task 4: Eliminar código huérfano, Task 5: Verificación final y lint

### Community 23 - "compilerOptions"
Cohesion: 0.22
Nodes (8): vite.config.ts, compilerOptions, allowSyntheticDefaultImports, composite, module, moduleResolution, skipLibCheck, include

### Community 24 - "AGENTS.md"
Cohesion: 0.25
Nodes (6): Arquitectura, Comandos, Convenciones, Gotchas / Known issues, graphify, Referencias

### Community 25 - "Cards (4 servicios)"
Cohesion: 0.25
Nodes (8): Card 1: Instalación, Card 2: Mantenimiento, Card 3: Reparación, Card 4: Mantenimiento Preventivo y Correctivo, Cards (4 servicios), 💼 SECCIÓN 3: SERVICIOS, Subtítulo, Título

### Community 26 - "✅ OBJETIVO: Diseño visual aprobado + HTML/Tailwind puro"
Cohesion: 0.25
Nodes (8): 1.1 — Definir sistema de diseño completo, 1.2 — Aprobar sistema de diseño, 1.3 — Maquetar todas las secciones en HTML + Tailwind, 1.4 — Validar responsive mobile en cada sección, 1.5 — Documentar estructura de componentes identificados, ✅ FASE 1 COMPLETA cuando:, FASE 1: DOCUMENTACIÓN Y MAQUETACIÓN, ✅ OBJETIVO: Diseño visual aprobado + HTML/Tailwind puro

### Community 27 - "🎁 OBJETIVO: Página lista para producción"
Cohesion: 0.25
Nodes (8): 3.1 — SEO básico, 3.2 — Favicon e íconos, 3.3 — Deploy, 3.4 — Checklist final de calidad, ✅ FASE 3 COMPLETA cuando:, FASE 3: PULIDO Y ENTREGA, 🎁 OBJETIVO: Página lista para producción, 📋 RESUMEN: ESTADO DE FASES

### Community 28 - "🎯 OBJETIVO: Convertir maqueta a aplicación React interactiva"
Cohesion: 0.29
Nodes (7): 2.1 — Convertir maqueta a componentes React tipados, 2.2 — Implementar scroll suave entre secciones, 2.3 — Integrar botón flotante y CTAs de WhatsApp, 2.4 — Optimizar rendimiento y accesibilidad, ✅ FASE 2 COMPLETA cuando:, FASE 2: INTEGRACIÓN CON REACT + TYPESCRIPT, 🎯 OBJETIVO: Convertir maqueta a aplicación React interactiva

### Community 29 - "📑 ÍNDICE MAESTRO DE DOCUMENTACIÓN"
Cohesion: 0.29
Nodes (7): 🔄 ACTUALIZACIÓN AUTOMÁTICA, 📚 DOCUMENTOS OBLIGATORIOS, 📖 NAVEGACIÓN RÁPIDA, Para desarrollar, Para iniciar, Proyecto TecnifullGas Landing Page, 📑 ÍNDICE MAESTRO DE DOCUMENTACIÓN

### Community 30 - "Archivos Afectados"
Cohesion: 0.29
Nodes (6): Archivos Afectados, Global Constraints, Rebranding Paleta — Plan de Implementación, Task 1: Actualizar tokens Tailwind, Task 2: Actualizar hover states en CSS y componentes, Task 3: Verificación final

### Community 31 - "✅ SÍ CONSTRUIMOS"
Cohesion: 0.40
Nodes (5): Características técnicas, Elementos fijos, Objetivo principal, Secciones de contenido, ✅ SÍ CONSTRUIMOS

### Community 32 - "📦 DEPENDENCIAS PRINCIPALES"
Cohesion: 0.40
Nodes (5): Build & DevOps, 📦 DEPENDENCIAS PRINCIPALES, Deployment, Frontend, Testing & QA (Fase 2+)

### Community 34 - "opencode.json"
Cohesion: 0.50
Nodes (3): plugin, $schema, .opencode/plugins/graphify.js

## Knowledge Gaps
- **401 isolated node(s):** `$schema`, `.opencode/plugins/graphify.js`, `$schema`, `model`, `rm -rf *` (+396 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `✍️ COPY Y CONTENIDO` connect `Scope & Business Rules` to `Project Documentation`, `Cards (4 servicios)`, `Acordeones (FAQs)`, `Los 4 Pilares`?**
  _High betweenness centrality (0.117) - this node is a cross-community bridge._
- **Why does `🏗️ ARQUITECTURA DEL PROYECTO` connect `Architecture & Setup` to `Project Documentation`, `CardProps Type`?**
  _High betweenness centrality (0.071) - this node is a cross-community bridge._
- **Why does `📋 CONTINUIDAD DEL PROYECTO` connect `FloatingWhatsApp Component` to `Project Documentation`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._
- **What connects `$schema`, `.opencode/plugins/graphify.js`, `$schema` to the rest of the system?**
  _401 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Project Documentation` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._
- **Should `Agent Instructions & Audit` be split into smaller, more focused modules?**
  _Cohesion score 0.10822510822510822 - nodes in this community are weakly interconnected._
- **Should `Architecture & Setup` be split into smaller, more focused modules?**
  _Cohesion score 0.07692307692307693 - nodes in this community are weakly interconnected._