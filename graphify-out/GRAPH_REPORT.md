# Graph Report - .  (2026-07-15)

## Corpus Check
- 41 files · ~87,709 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 48 nodes · 75 edges · 20 communities (4 shown, 16 thin omitted)
- Extraction: 85% EXTRACTED · 15% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

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

## God Nodes (most connected - your core abstractions)
1. `docs/CONTINUIDAD.md` - 10 edges
2. `docs/fases-del-proyecto.md` - 10 edges
3. `docs/INDICE.md` - 9 edges
4. `docs/alcance-del-proyecto.md` - 9 edges
5. `docs/arquitectura-del-proyecto.md` - 7 edges
6. `docs/sistema-de-diseno.md` - 6 edges
7. `docs/tech-stack.md` - 6 edges
8. `React TypeScript Tailwind Vite Stack` - 6 edges
9. `docs/copy-y-contenido.md` - 5 edges
10. `WhatsApp Primary Contact Strategy` - 4 edges

## Surprising Connections (you probably didn't know these)
- `DDD Document Driven Development` --conceptually_related_to--> `docs/INDICE.md`  [INFERRED]
  README.md → docs/INDICE.md
- `Critical Audit Findings A-C1 and A-C2` --conceptually_related_to--> `Known Issues and Gotchas`  [INFERRED]
  AUDITORIA.md → AGENTS.md
- `React TypeScript Tailwind Vite Stack` --conceptually_related_to--> `No Backend No Database No Auth Constraint`  [INFERRED]
  docs/tech-stack.md → docs/alcance-del-proyecto.md
- `docs/alcance-del-proyecto.md` --references--> `docs/CONTINUIDAD.md`  [EXTRACTED]
  docs/alcance-del-proyecto.md → docs/CONTINUIDAD.md
- `docs/CONTINUIDAD.md` --references--> `docs/arquitectura-del-proyecto.md`  [EXTRACTED]
  docs/CONTINUIDAD.md → docs/arquitectura-del-proyecto.md

## Import Cycles
- None detected.

## Communities (20 total, 16 thin omitted)

### Community 0 - "Project Documentation"
Cohesion: 0.58
Nodes (9): docs/CONTINUIDAD.md, docs/copy-y-contenido.md, Fase 1 Documentacion y Maquetacion, Fase 2 React TypeScript Integration, Fase 3 Pulido y Entrega, docs/fases-del-proyecto.md, docs/INDICE.md, docs/sistema-de-diseno.md (+1 more)

### Community 1 - "Agent Instructions & Audit"
Cohesion: 0.33
Nodes (6): Graphify Knowledge Graph Integration, Known Issues and Gotchas, Critical Audit Findings A-C1 and A-C2, Medium Audit Findings A-M1 through T-M2, Security Findings C-B1 through C-B4, DDD Document Driven Development

### Community 2 - "Architecture & Setup"
Cohesion: 0.32
Nodes (6): Mobile First Responsive Design, docs/arquitectura-del-proyecto.md, 13 Component Architecture, SPA Single Page Application Architecture, Custom Tailwind Color Palette tf-*, React TypeScript Tailwind Vite Stack

### Community 3 - "Scope & Business Rules"
Cohesion: 0.60
Nodes (5): docs/alcance-del-proyecto.md, Medellin y Alrededores Geographic Coverage, No Backend No Database No Auth Constraint, WhatsApp Instagram Only Contact Methods, WhatsApp Primary Contact Strategy

## Knowledge Gaps
- **18 isolated node(s):** `CTA`, `FloatingWhatsApp`, `Footer`, `Hero`, `HowItWorks` (+13 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **16 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `docs/CONTINUIDAD.md` connect `Project Documentation` to `Agent Instructions & Audit`, `Architecture & Setup`, `Scope & Business Rules`?**
  _High betweenness centrality (0.102) - this node is a cross-community bridge._
- **Why does `docs/fases-del-proyecto.md` connect `Project Documentation` to `Agent Instructions & Audit`, `Architecture & Setup`?**
  _High betweenness centrality (0.067) - this node is a cross-community bridge._
- **Why does `docs/alcance-del-proyecto.md` connect `Scope & Business Rules` to `Project Documentation`, `Architecture & Setup`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._
- **What connects `CTA`, `FloatingWhatsApp`, `Footer` to the rest of the system?**
  _18 weakly-connected nodes found - possible documentation gaps or missing edges._