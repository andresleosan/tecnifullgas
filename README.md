# 🔧 TecnifullGas Landing Page

## Repositorio de desarrollo profesional

**Estado:** En construcción (Fase 1)  
**Última actualización:** 24 de mayo de 2026

---

## 📌 INFORMACIÓN RÁPIDA

- **Empresa:** TecnifullGas
- **Objetivo:** Landing page de una sola página (SPA)
- **Propósito principal:** Dirección de tráfico a WhatsApp (3014065931)
- **Ubicación:** Medellín y alrededores
- **Stack:** React + TypeScript + Tailwind CSS + Vite

---

## 🚀 INICIO RÁPIDO

### 1. Leer documentación

```bash
# Inicia siempre aquí:
docs/CONTINUIDAD.md          # Estado actual del proyecto
docs/INDICE.md               # Guía de documentación
docs/alcance-del-proyecto.md # Qué construimos y qué no
docs/sistema-de-diseno.md    # Paleta, tipografía, componentes
```

### 2. Instalar dependencias (cuando lleguemos a React)

```bash
npm install
```

### 3. Desarrollo local

```bash
npm run dev          # Servidor en http://localhost:3000
npm run build        # Build para producción
npm run lint         # Revisar código
npm run format       # Formatear código
```

---

## 📂 ESTRUCTURA DEL PROYECTO

```
tecnifullgas/
├── docs/                          # 📚 DOCUMENTACIÓN (COMIENZA AQUÍ)
│   ├── INDICE.md                 # Índice maestro
│   ├── CONTINUIDAD.md            # Estado y reanudación
│   ├── alcance-del-proyecto.md   # Qué sí, qué no
│   ├── sistema-de-diseno.md      # Colores, tipografía
│   ├── tech-stack.md             # Tecnologías usadas
│   ├── arquitectura-del-proyecto.md # Estructura código
│   ├── fases-del-proyecto.md     # Roadmap completo
│   └── copy-y-contenido.md       # Textos de la página
│
├── src/                          # 🔄 Código React (próximamente)
│   ├── components/               # Componentes React
│   ├── pages/                    # Páginas
│   ├── styles/                   # Estilos globales
│   ├── utils/                    # Funciones auxiliares
│   ├── types/                    # Tipos TypeScript
│   ├── App.tsx                   # Componente raíz
│   └── main.tsx                  # Punto de entrada
│
├── public/                       # 🖼️ Archivos estáticos
│   ├── favicon.ico               # Favicon
│   ├── logo.png                  # Logo empresa
│   ├── og-image.png              # Imagen para redes
│   └── trabajos/                 # Imágenes de proyectos (cargar después)
│
├── referencia-visual.png         # 🎨 Sistema de diseño base
├── package.json                  # Dependencias
├── tsconfig.json                 # Configuración TypeScript
├── vite.config.ts                # Configuración Vite
├── tailwind.config.js            # Configuración Tailwind
├── README.md                     # Este archivo
└── .gitignore

```

---

## 📋 DECISIONES TOMADAS

| Decisión       | Valor                          | Referencia                                              |
| -------------- | ------------------------------ | ------------------------------------------------------- |
| Stack frontend | React + TypeScript             | [tech-stack.md](docs/tech-stack.md)                     |
| Estilos        | Tailwind CSS                   | [sistema-de-diseno.md](docs/sistema-de-diseno.md)       |
| Build tool     | Vite                           | [tech-stack.md](docs/tech-stack.md)                     |
| Alcance        | Landing estática (sin backend) | [alcance-del-proyecto.md](docs/alcance-del-proyecto.md) |
| Contacto       | Solo WhatsApp + Instagram      | [alcance-del-proyecto.md](docs/alcance-del-proyecto.md) |
| Cobertura      | Medellín y alrededores         | [alcance-del-proyecto.md](docs/alcance-del-proyecto.md) |
| Galería        | Placeholder, imágenes después  | [copy-y-contenido.md](docs/copy-y-contenido.md)         |

---

## 🎯 ESTADO ACTUAL

### ✅ Completado

- Análisis de `referencia-visual.png`
- 9 documentos base creados
- Sistema de diseño definido
- Roadmap de 3 fases documentado
- Contenido y copy redactado
- **Subfase 1.3:** Maquetación HTML + Tailwind completa
  - ✅ 10 secciones HTML semánticas
  - ✅ Configuración Tailwind CSS
  - ✅ Estilos globales y componentes
  - ✅ Scripts interactivos (FAQs, scroll suave)
  - ✅ Botón flotante WhatsApp
- **Subfase 1.3b:** Conversión a React + TypeScript
  - ✅ Vite configurado
  - ✅ 19 componentes React creados
  - ✅ TypeScript types definidos
  - ✅ Constants centralizados
  - ✅ Helpers para interactividad
  - ✅ npm install completado
  - ✅ npm run dev ejecutándose en http://localhost:3000/

### ⏳ En progreso

- **Subfase 1.4:** Validación responsive y testing interactivo

### ⏰ Próximas

- Subfase 1.5: Documentar componentes React en arquitectura
- Subfase 2: Pulido, imágenes reales, optimizaciones
- Subfase 3: Deploy y configuración

---

## 📞 INFORMACIÓN DE CONTACTO

- **Número WhatsApp:** 3014065931
- **URL WhatsApp:** https://wa.me/573014065931
- **Instagram:** @tecnifullgas
- **Ubicación:** Medellín, Colombia

---

## 🔗 REFERENCIAS IMPORTANTES

- [Metodología DDD (Document Driven Development)](docs/INDICE.md)
- [Sistema de diseño completo](docs/sistema-de-diseno.md)
- [Roadmap de fases](docs/fases-del-proyecto.md)
- [Documento de continuidad](docs/CONTINUIDAD.md)

---

## 🛠️ PRÓXIMOS PASOS

**Próxima sesión:** Subfase 1.4 (Validación Responsive)

1. Probar responsive en 360px, 768px, 1024px+
2. Validar interactividad (FAQ accordion, scroll suave)
3. Verificar accesibilidad (WCAG 2.1)
4. Testing en navegadores (Chrome, Firefox, Safari, Edge)
5. Optimizaciones Lighthouse
6. Comenzar Subfase 1.5: documentación de componentes

---

## 📊 PROGRESO GENERAL

```
Fase 1: Documentación y Maquetación    ███████████ 55%
Fase 2: React + TypeScript (En curso)  ████░░░░░░ 40%
Fase 3: Pulido y Entrega              ░░░░░░░░░ 0%

Total del proyecto:                     ███████░░░░░░░░░░░░░░░░░ 32%
```

---

## 📖 CÓMO USAR ESTE REPOSITORIO

1. **Primera vez:** Lee `docs/CONTINUIDAD.md`
2. **Desarrollar:** Usa `docs/fases-del-proyecto.md` como guía
3. **Diseño:** Consulta `docs/sistema-de-diseno.md`
4. **Contenido:** Copia de `docs/copy-y-contenido.md`
5. **Arquitectura:** Sigue `docs/arquitectura-del-proyecto.md`

---

## ✨ CARACTERÍSTICAS PRINCIPALES

- ✅ Responsivo mobile-first (360px, 768px, 1024px+)
- ✅ Scroll suave entre secciones
- ✅ Botón flotante WhatsApp
- ✅ Llamados a acción claros
- ✅ Optimizado (Lighthouse ≥ 90)
- ✅ Accesibilidad WCAG 2.1
- ✅ SEO básico
- ✅ Galería de trabajos (imágenes flexibles)
- ✅ FAQs interactivos
- ✅ Integración Instagram

---

## 🤝 CONTRIBUCIONES

Seguimos la metodología **DDD (Document Driven Development):**

- La documentación va PRIMERO
- El código va DESPUÉS
- Cada cambio debe estar documentado

---

## 📜 LICENCIA

Proyecto privado de TecnifullGas © 2026

---

**Última decisión registrada:**  
Generación completa de documentos base - 24/05/2026  
Referencia: [docs/CONTINUIDAD.md](docs/CONTINUIDAD.md)

**Estado:** Fase 1, subfase 1.1 ✅ | Próxima: 1.3 ⏳

---

**Para reanudación:** Lee [docs/CONTINUIDAD.md](docs/CONTINUIDAD.md)
