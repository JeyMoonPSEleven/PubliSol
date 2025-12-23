# 📋 GUÍA COMPLETA DEL PROYECTO - PUBLISOL

**Fecha de creación:** 2025-11-01 
**Última actualización:** 2025-12-22  
**Estado:** Documentación completa del proyecto actual

---

## 📊 RESUMEN EJECUTIVO

### Información del Proyecto
- **Nombre:** Publisol - Agendas Escolares y Merchandising Personalizado
- **Stack Tecnológico:** SvelteKit 2 + Svelte 5 (Runes) + Tailwind CSS v4
- **Metodología:** Atomic Design
- **Enfoque:** Mobile-First, Responsive Design // Muy importante que todos nuestros componentes, imagenes, secciones y demás sean mobile-first.
- **Arquitectura:** Componentes modulares y reutilizables

### Estado Actual
- ✅ **17 páginas** implementadas y funcionales
- ✅ **50+ componentes** creados (atoms, molecules, organisms)
- ✅ **14 componentes Magic UI** integrados
- ✅ **Sistema de diseño** completo con tokens semánticos
- ✅ **Optimizaciones** de performance y SEO implementadas

---

## 🎨 SISTEMA DE DISEÑO // Te paso los nuevos colores, realiza los cambios en nuestro proyecto adaptando esta nueva paleta de colores.

Paleta de Colores (Green Apple & Sky Blue)
Colores Primarios
Primary (Apple Green / Lime-600): #72CB10

Hover: #5AB507

Active: #3D7A05

Light: #E8F7D6

Dark: #255000

Colores Secundarios
Secondary (Lime Bright): #89D631

Accent (Sky Blue): #4EB7F7

Deep Moss (Verde Bosque): #588100 (paleta completa basada en la imagen inferior)

Colores Semánticos
Success: #66C00B

Warning: #F59E0B

Danger: #EF4444

Neutral: Grises fríos (Slate) para equilibrar la calidez del verde.

Superficies
Page: #FFFFFF

Card: #FFFFFF

Header: #FFFFFF con backdrop-blur

Tertiary: #F7F9F2 (beige con matiz verde muy suave)

Glass: rgba(114, 203, 16, 0.05) con blur (tinte verde manzana)

Texto
Default: #1A1C18 (gris casi negro verdoso para mejor legibilidad)

Muted: #5C6154

Light: #A4A99B

On Primary: #000000 (se recomienda negro/oscuro por el alto brillo del verde primario)

Degradados (Gradients)
Primary Gradient: linear-gradient(135deg, #72CB10 0%, #89D631 100%)

Accent Gradient: linear-gradient(135deg, #4EB7F7 0%, #0284C7 100%)

Mixed Tech: linear-gradient(135deg, #72CB10 0%, #4EB7F7 100%)


### Tipografía

#### Fuentes
- **Headings:** `'Playfair Display', serif` (serif moderna)
- **Body:** `'Plus Jakarta Sans', sans-serif` (sans geométrica)
- **Mono:** `'Fira Code', 'Courier New', monospace`

#### Tamaños Responsivos (Fluid Typography)
- **H1:** `clamp(2rem, 1.5rem + 2.5vw, 3rem)` (32px - 48px)
- **H2:** `clamp(1.5rem, 1.25rem + 1.25vw, 2.25rem)` (24px - 36px)
- **H3:** `clamp(1.25rem, 1.125rem + 0.625vw, 1.5rem)` (20px - 24px)
- **Body:** `1rem` (16px base)

#### Pesos
- Light: 300
- Normal: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- Extrabold: 800

### Espaciado
Sistema basado en múltiplos de 8px:
- **XS:** 4px (0.25rem)
- **SM:** 8px (0.5rem)
- **MD:** 16px (1rem)
- **LG:** 24px (1.5rem)
- **XL:** 32px (2rem)
- **2XL:** 48px (3rem)
- **3XL:** 64px (4rem)

### Radios de Borde
- **Button:** 6px
- **Button Large:** 12px
- **Card:** 12px
- **Card Large:** 16px
- **Input:** 6px
- **Badge:** 9999px (pill)

### Sombras
- **XS:** `0 1px 2px 0 rgb(0 0 0 / 0.05)`
- **SM:** `0 1px 3px 0 rgb(0 0 0 / 0.1)`
- **MD:** `0 4px 6px -1px rgb(0 0 0 / 0.1)`
- **LG:** `0 10px 15px -3px rgb(0 0 0 / 0.1)`
- **XL:** `0 20px 25px -5px rgb(0 0 0 / 0.1)`
- **Coloreadas:** Sombras con color primario, secundario y salem

---

## 🧩 COMPONENTES EN USO

### Atoms (Componentes Base)

#### 1. **OptimizedImage.svelte**
- **Ubicación:** `src/lib/components/atoms/OptimizedImage.svelte`
- **Uso:** Imágenes optimizadas con `<picture>` element
- **Características:**
  - Soporte para WebP y AVIF
  - Srcset responsive
  - Fallback automático
  - Optimización de fetchpriority
- **Estado:** ✅ En uso

#### 2. **ProductCard.svelte**
- **Ubicación:** `src/lib/components/atoms/ProductCard.svelte`
- **Uso:** Tarjetas de productos en grids
- **Características:**
  - Hover effects (scale, shadow)
  - Imagen con aspect-ratio 1:1
  - Badges y etiquetas
- **Estado:** ✅ En uso (ProductGrid)

#### 3. **GlassCard.svelte**
- **Ubicación:** `src/lib/components/atoms/GlassCard.svelte`
- **Uso:** Cards con efecto glassmorphism
- **Características:**
  - Backdrop blur
  - Borde semitransparente
  - Fondo translúcido
- **Estado:** ⚠️ Verificar uso

#### 4. **ScrollReveal.svelte**
- **Ubicación:** `src/lib/components/atoms/ScrollReveal.svelte`
- **Uso:** Animaciones al hacer scroll
- **Características:**
  - Animaciones: `fly`, `fade`, `scale`
  - Direcciones: `up`, `down`, `left`, `right`
  - Delays configurables
- **Estado:** ✅ En uso (Homepage)

#### 5. **TypewriterText.svelte**
- **Ubicación:** `src/lib/components/atoms/TypewriterText.svelte`
- **Uso:** Efecto máquina de escribir
- **Estado:** ⚠️ Verificar uso (puede estar reemplazado por RotatingPhrases)

#### 6. **RotatingPhrases.svelte**
- **Ubicación:** `src/lib/components/atoms/RotatingPhrases.svelte`
- **Uso:** Rotación de frases en Hero
- **Características:**
  - Intervalo configurable (3000ms)
  - Transición suave (500ms)
  - Múltiples frases
- **Estado:** ✅ En uso (HeroSection)

#### 7. **ChristmasBanner.svelte**
- **Ubicación:** `src/lib/components/atoms/ChristmasBanner.svelte`
- **Uso:** Banner temporal navideño
- **Estado:** ✅ En uso (HeroSection) - Considerar mover a carpeta temporal

---

### Molecules (Componentes Compuestos)

#### 1. **VerticalMarquee.svelte**
- **Ubicación:** `src/lib/components/molecules/VerticalMarquee.svelte`
- **Uso:** Carrusel vertical de productos en Hero
- **Características:**
  - Dirección: `up` o `down`
  - Velocidad configurable (30px/s)
  - Dos columnas con sentido inverso
  - Cards con tags, título y subtítulo
- **Estado:** ✅ En uso (HeroSection)

#### 2. **FeatureList.svelte**
- **Ubicación:** `src/lib/components/molecules/FeatureList.svelte`
- **Uso:** Lista de características con iconos
- **Estado:** ✅ En uso (HeroSection)

#### 3. **CTAButtons.svelte**
- **Ubicación:** `src/lib/components/molecules/CTAButtons.svelte`
- **Uso:** Botones de llamada a la acción
- **Estado:** ✅ En uso (HeroSection)

#### 4. **Ratings.svelte**
- **Ubicación:** `src/lib/components/molecules/Ratings.svelte`
- **Uso:** Sistema de valoraciones/estrellas
- **Estado:** ✅ En uso (HeroSection)

#### 5. **Certifications.svelte**
- **Ubicación:** `src/lib/components/molecules/Certifications.svelte`
- **Uso:** Badges de certificaciones (ISO, FSC)
- **Estado:** ✅ En uso (HeroSection)

#### 6. **SizeGuideModal.svelte**
- **Ubicación:** `src/lib/components/molecules/SizeGuideModal.svelte`
- **Uso:** Modal con guía de tallas
- **Estado:** ✅ En uso (Catálogos)

#### 7. **BottomSheet.svelte**
- **Ubicación:** `src/lib/components/molecules/BottomSheet.svelte`
- **Uso:** Modal que emerge desde abajo (móvil)
- **Características:**
  - Safe area padding
  - Backdrop blur
  - Animaciones suaves
- **Estado:** ✅ Disponible (no verificado en uso activo)

---

### Organisms (Componentes Complejos)

#### 1. **HeroSection.svelte**
- **Ubicación:** `src/lib/components/organisms/HeroSection.svelte`
- **Uso:** Sección hero principal de la homepage
- **Características:**
  - Banner navideño (ChristmasBanner)
  - Título con RotatingPhrases
  - Descripción fluida
  - FeatureList
  - CTAButtons
  - Ratings
  - Certifications
  - VerticalMarquee (2 columnas, sentido inverso)
- **Diseño:**
  - Fondo: Gradiente sutil (`from-gray-50/95 via-white/90 to-gray-100/95`)
  - Layout: Grid 2 columnas en desktop, stack en móvil
  - Animaciones: Fade-in con delays escalonados
- **Estado:** ✅ En uso (Homepage)

#### 2. **ProductGrid.svelte**
- **Ubicación:** `src/lib/components/organisms/ProductGrid.svelte`
- **Uso:** Grid de productos
- **Características:**
  - Responsive grid
  - ProductCard components
- **Estado:** ✅ En uso

#### 3. **BottomNavigation.svelte**
- **Ubicación:** `src/lib/components/organisms/BottomNavigation.svelte`
- **Uso:** Navegación inferior móvil
- **Características:**
  - Visible solo en móvil (`lg:hidden`)
  - Posicionado en "Thumb Zone"
  - Safe area padding
  - Glassmorphism
  - Estados activos
- **Estado:** ✅ En uso (Layout)

#### 4. **BottomSheetExample.svelte**
- **Ubicación:** `src/lib/components/organisms/BottomSheetExample.svelte`
- **Uso:** Ejemplo de uso de BottomSheet
- **Estado:** ⚠️ Solo ejemplo, considerar mover a docs

---

### Componentes Magic UI

#### 1. **AnimatedGridPattern.svelte**
- **Ubicación:** `src/lib/components/magic-ui/AnimatedGridPattern.svelte`
- **Uso:** Patrón de cuadrícula animado como fondo
- **Características:**
  - Opacidad configurable
  - Número de cuadrados configurable
  - Animación continua
- **Estado:** ✅ En uso (Homepage, Contacto)

#### 2. **BentoGrid.svelte** y **BentoCard.svelte**
- **Ubicación:** `src/lib/components/magic-ui/BentoGrid.svelte`
- **Uso:** Grid asimétrico estilo Bento
- **Características:**
  - Cards de diferentes tamaños
  - Layout responsive
  - Hover effects
- **Estado:** ✅ En uso (Homepage - Sección "¿Por qué elegirnos?")

#### 3. **Marquee.svelte**
- **Ubicación:** `src/lib/components/magic-ui/Marquee.svelte`
- **Uso:** Carrusel horizontal infinito
- **Características:**
  - Dirección: `left` o `right`
  - Velocidad configurable
  - Pausa al hover
- **Estado:** ✅ En uso (Homepage - Sección clientes)

#### 4. **ScrollProgress.svelte**
- **Ubicación:** `src/lib/components/magic-ui/ScrollProgress.svelte`
- **Uso:** Barra de progreso de scroll
- **Características:**
  - Gradiente configurable
  - Altura configurable
  - Sombra con color primario
- **Estado:** ✅ En uso (Layout y Homepage)

#### 5. **QuickView.svelte**
- **Ubicación:** `src/lib/components/magic-ui/QuickView.svelte`
- **Uso:** Vista rápida de productos/casos de éxito
- **Características:**
  - Modal con información del producto
  - Animaciones suaves
- **Estado:** ✅ En uso (Homepage - Casos de éxito, Páginas de productos)

#### 6. **ShimmerButton.svelte**
- **Ubicación:** `src/lib/components/magic-ui/ShimmerButton.svelte`
- **Uso:** Botón con efecto shimmer
- **Características:**
  - Color shimmer configurable
  - Fondo configurable
  - Animación continua
- **Estado:** ✅ En uso (Homepage - Casos de éxito, CTA final, Contacto)

#### 7. **ScrollBasedVelocity.svelte**
- **Ubicación:** `src/lib/components/magic-ui/ScrollBasedVelocity.svelte`
- **Uso:** Texto con velocidad basada en scroll
- **Estado:** ⚠️ Importado pero no verificado en uso

#### 8. **LineShadowText.svelte**
- **Ubicación:** `src/lib/components/magic-ui/LineShadowText.svelte`
- **Uso:** Texto con sombra de línea animada
- **Estado:** ⚠️ Importado pero no verificado en uso

#### 9. **NumberTicker.svelte**
- **Ubicación:** `src/lib/components/magic-ui/NumberTicker.svelte`
- **Uso:** Contador animado de números
- **Características:**
  - Duración configurable (2s)
  - Animación suave
- **Estado:** ✅ En uso (Homepage - Sección stats)

#### 10. **Drawer.svelte**
- **Ubicación:** `src/lib/components/magic-ui/Drawer.svelte`
- **Uso:** Menú lateral deslizable
- **Estado:** ✅ En uso (Páginas de productos - Filtros móvil)

#### 11. **FormWizard.svelte**
- **Ubicación:** `src/lib/components/magic-ui/FormWizard.svelte`
- **Uso:** Formulario multi-paso
- **Estado:** ✅ En uso (Contacto)

#### 12. **Lightbox.svelte**
- **Ubicación:** `src/lib/components/magic-ui/Lightbox.svelte`
- **Uso:** Galería de imágenes con lightbox
- **Estado:** ✅ En uso (Página de detalle de producto)

---

### Componentes Globales

#### 1. **SiteHeader.svelte**
- **Ubicación:** `src/lib/components/SiteHeader.svelte`
- **Uso:** Header principal del sitio
- **Características:**
  - Transparente en top, sticky blanco al scroll
  - Menú hamburguesa móvil
  - Dropdown de productos
  - Buscador con sugerencias
  - CTA "Solicitar Presupuesto"
- **Diseño:**
  - Fondo: Transparente → `bg-white/95 backdrop-blur-md`
  - Texto: Blanco → `text-primary`
  - Sombra: Aparece al hacer scroll
- **Animaciones:**
  - Transición suave de fondo (300ms)
  - Fly transition en dropdown
  - Fade en modal de búsqueda
- **Estado:** ✅ En uso (Layout)

#### 2. **SiteFooter.svelte**
- **Ubicación:** `src/lib/components/SiteFooter.svelte`
- **Uso:** Footer principal del sitio
- **Características:**
  - Newsletter con modal de agradecimiento
  - 5 columnas: Identidad, Productos, Empresa, Recursos, Atención
  - Información de contacto
  - Redes sociales
  - Enlaces legales
- **Diseño:**
  - Newsletter destacada con gradiente
  - Grid responsive (1-2-5 columnas)
  - Badges de certificaciones
- **Estado:** ✅ En uso (Layout)

#### 3. **WhatsAppWidget.svelte**
- **Ubicación:** `src/lib/components/WhatsAppWidget.svelte`
- **Uso:** Botón flotante de WhatsApp
- **Características:**
  - Posición fija bottom-right
  - Animación de pulso
  - Tooltip al hover
  - Link directo a WhatsApp
- **Diseño:**
  - Botón verde WhatsApp
  - Tamaño: 56x56px (touch target)
  - Sombra elevada
- **Estado:** ✅ En uso (Layout)

#### 4. **Seo.svelte**
- **Ubicación:** `src/lib/components/Seo.svelte`
- **Uso:** Componente SEO con meta tags y schema markup
- **Características:**
  - Meta tags dinámicos
  - Schema JSON-LD (Organization, WebSite, Product, etc.)
  - Open Graph tags
  - Twitter Cards
- **Estado:** ✅ En uso (Todas las páginas)

---

## 📄 PÁGINAS Y RUTAS

### Páginas Principales

#### 1. **Homepage (`/`)**
- **Archivo:** `src/routes/+page.svelte`
- **Componentes usados:**
  - HeroSection
  - ScrollProgress
  - AnimatedGridPattern
  - BentoGrid / BentoCard
  - Marquee
  - QuickView
  - ShimmerButton
  - NumberTicker
  - ScrollReveal
- **Secciones:**
  1. Hero con VerticalMarquee
  2. Banner de categorías (iconos)
  3. Propuesta de valor (Bento Grid)
  4. Categorías principales (Bento Grid con imágenes)
  5. Casos de éxito (Cards con QuickView)
  6. Proceso de trabajo (4 pasos)
  7. Estadísticas (NumberTicker)
  8. Marquee de clientes
  9. CTA final con formulario
- **Estado:** ✅ Completa y funcional

#### 2. **Nosotros (`/nosotros`)**
- **Archivo:** `src/routes/nosotros/+page.svelte`
- **Estado:** ✅ Implementada

#### 3. **Productos (`/productos`)**
- **Archivo:** `src/routes/productos/+page.svelte`
- **Componentes:**
  - Drawer (filtros móvil)
  - QuickView
  - ProductGrid
- **Estado:** ✅ Implementada

#### 4. **Categorías de Productos**
- **Agendas Escolares:** `/productos/agendas-escolares`
- **Merchandising:** `/productos/merchandising`
- **Textil:** `/productos/textil`
- **Papelería:** `/productos/papeleria`
- **Sostenibles:** `/productos/sostenibles`
- **Componentes:** Drawer, QuickView
- **Estado:** ✅ Todas implementadas

#### 5. **Detalle de Producto (`/producto/[slug]`)**
- **Archivo:** `src/routes/producto/[slug]/+page.svelte`
- **Componentes:**
  - Lightbox (galería de imágenes)
- **Estado:** ✅ Implementada

#### 6. **Contacto (`/contacto`)**
- **Archivo:** `src/routes/contacto/+page.svelte`
- **Componentes:**
  - FormWizard (formulario multi-paso)
  - ShimmerButton
  - AnimatedGridPattern (fondo)
- **Estado:** ✅ Implementada

#### 7. **Catálogos (`/catalogos`)**
- **Archivo:** `src/routes/catalogos/+page.svelte`
- **Componentes:**
  - SizeGuideModal
- **Estado:** ✅ Implementada

#### 8. **Blog (`/blog`)**
- **Archivo:** `src/routes/blog/+page.svelte`
- **Estado:** ✅ Implementada

#### 9. **FAQ (`/faq`)**
- **Archivo:** `src/routes/faq/+page.svelte`
- **Estado:** ✅ Implementada

#### 10. **Producto Destacado (`/producto-destacado`)**
- **Archivo:** `src/routes/producto-destacado/+page.svelte`
- **Componentes:**
  - ScrollReveal
- **Estado:** ✅ Implementada

### Páginas Legales
- **Aviso Legal:** `/aviso-legal`
- **Privacidad:** `/privacidad`
- **Cookies:** `/cookies`
- **Términos:** `/terminos`
- **Estado:** ✅ Todas implementadas

---

## 🎬 ANIMACIONES Y EFECTOS

### Animaciones CSS

#### 1. **Fade In/Out**
- **Uso:** Entrada/salida de elementos
- **Duración:** 600ms (entrada), 300ms (salida)

#### 2. **Fly**
- **Uso:** Elementos que vuelan desde una dirección
- **Direcciones:** up, down, left, right
- **Duración:** 200-800ms

#### 3. **Scale In/Out**
- **Uso:** Elementos que escalan
- **Duración:** 200ms

#### 4. **Shimmer**
- **Uso:** Efecto brillante en botones
- **Animación:** `shimmer-slide` (3s linear infinite)

#### 5. **Ripple**
- **Uso:** Efecto de ondas en botones
- **Animación:** `rippling` (600ms ease-out)

#### 6. **Marquee**
- **Uso:** Carrusel infinito horizontal
- **Animación:** `marquee` (40s linear infinite)

#### 7. **Marquee Vertical**
- **Uso:** Carrusel infinito vertical
- **Animación:** `marquee-vertical` (40s linear infinite)

#### 8. **Pulse (WhatsApp)**
- **Uso:** Botón de WhatsApp
- **Animación:** `pulse-whatsapp` (2s ease-in-out infinite)

### Efectos de Hover

#### 1. **Hover Lift**
- **Clase:** `.hover-lift`
- **Efecto:** `translateY(-4px)` + sombra aumentada

#### 2. **Hover Scale**
- **Clase:** `.hover-scale`
- **Efecto:** `scale(1.05)`

#### 3. **Hover Glow**
- **Clase:** `.hover-glow`
- **Efecto:** Sombra coloreada primaria

#### 4. **Hover Shadow Primary**
- **Clase:** `.hover-shadow-primary`
- **Efecto:** Sombra primaria + `translateY(-2px)`

### Transiciones
- **Fast:** 150ms ease
- **Base:** 200ms ease
- **Slow:** 300ms ease
- **Slower:** 500ms ease

---

## 📦 COMPONENTES NO UTILIZADOS (MOVER A CARPETA APARTE)

### Componentes a Revisar

#### 1. **TypewriterText.svelte**
- **Razón:** Reemplazado por RotatingPhrases
- **Acción:** Mover a `src/lib/components/_archived/` o eliminar

#### 2. **BottomSheetExample.svelte**
- **Razón:** Solo es un ejemplo
- **Acción:** Mover a `docs/examples/` o eliminar

#### 3. **ChristmasBanner.svelte**
- **Razón:** Componente temporal navideño
- **Acción:** Mover a `src/lib/components/_temporal/` o eliminar después de temporada

#### 4. **ScrollBasedVelocity.svelte**
- **Razón:** Importado pero no usado
- **Acción:** Verificar uso, si no se usa, mover a `_archived/`

#### 5. **LineShadowText.svelte**
- **Razón:** Importado pero no usado
- **Acción:** Verificar uso, si no se usa, mover a `_archived/`

### Componentes External/Uiverse

#### 1. **HeroGlassShowcase.svelte**
- **Ubicación:** `src/lib/components/external/uiverse/organisms/`
- **Estado:** ⚠️ Verificar uso

#### 2. **GlassCard.svelte (Uiverse)**
- **Ubicación:** `src/lib/components/external/uiverse/molecules/`
- **Estado:** ⚠️ Verificar uso (hay otro GlassCard en atoms)

#### 3. **GlassBadge.svelte**
- **Ubicación:** `src/lib/components/external/uiverse/atoms/`
- **Estado:** ⚠️ Verificar uso

---

## 🎯 CONTENIDO MOSTRADO

### Homepage

#### Hero Section
- **Título:** Rotación entre 3 frases:
  1. "Tu Socio Estratégico Escolar"
  2. "Calidad Certificada desde 1975"
  3. "Personalización Total en 10-15 días"
- **Descripción:** "Organizar el Merchandising de la compañía es difícil y consume mucho tiempo..."
- **Features:**
  - "Diseños gratis en 24 horas"
  - "Certificado y Sostenible"
- **CTAs:**
  - Primary: "Productos" → `/productos`
  - Secondary: "Contáctanos" → `/contacto`

#### Propuesta de Valor (6 servicios)
1. Consultoría Especializada
2. Calidad Certificada
3. Gestión Integral
4. Precios Dinámicos
5. Garantía de Entrega
6. Compromiso Sostenible

#### Categorías (5 categorías)
1. Agendas Escolares
2. Textil y Uniformidad
3. Merchandising y Viajes Fin de Curso
4. Packs Erasmus
5. Regalos Institucionales

#### Casos de Éxito (3 proyectos)
1. Colegio San José - 800 agendas escolares
2. TechCorp Solutions - Kits de onboarding
3. Asociación Deportiva - Uniformes personalizados

#### Proceso de Trabajo (4 pasos)
1. Contacto (24-48h)
2. Diseño (3-5 días)
3. Producción (10-15 días)
4. Entrega (24-48h)

#### Estadísticas (4 stats)
- +25 AÑOS de experiencia
- +500 CLIENTES satisfechos
- +10000 PRODUCTOS entregados al año
- 100% PERSONALIZACIÓN en cada proyecto

#### Clientes (8 clientes en Marquee)
- Colegio San José
- TechCorp Solutions
- Instituto San Juan
- Asociación Deportiva
- Universidad Complutense
- Empresa ABC
- Colegio Santa María
- Corporación XYZ

### Configuración del Sitio (`siteConfig.ts`)

#### Información de Contacto
- **Teléfono principal:** `+34 653 18 95 99`
- **Email:** `publisolronda@gmail.com`
- **Dirección:** Carretera de Coin Nº 56 - 4º A, 29700 Cártama, Málaga
- **Horario:** Lun-Vie: 9:00 - 18:00, Sáb: 10:00 - 14:00

#### Redes Sociales
- LinkedIn: `https://linkedin.com/company/publisol`
- Instagram: `https://instagram.com/publisol`
- Facebook: `https://facebook.com/publisol`

#### Certificaciones
- ISO 9001
- FSC

---

## 🚀 OPTIMIZACIONES IMPLEMENTADAS

### Performance
- ✅ Optimización de imágenes (WebP/AVIF)
- ✅ Lazy loading de imágenes
- ✅ Compresión GZIP y Brotli
- ✅ Bundle size analysis (rollup-plugin-visualizer)

### SEO
- ✅ Schema Markup (JSON-LD)
- ✅ Sitemap.xml dinámico
- ✅ Robots.txt configurado
- ✅ Meta tags dinámicos por página

### PWA
- ✅ Service Worker configurado
- ✅ Manifest.json
- ⚠️ Pendiente: Iconos PWA (192x192, 512x512)

### Accesibilidad
- ✅ Touch targets mínimos (44x44px)
- ✅ ARIA labels
- ✅ Focus states visibles
- ✅ Contraste mejorado

### Mobile
- ✅ Dynamic Viewport Height (dvh)
- ✅ Safe Area utilities
- ✅ Bottom Navigation
- ✅ Fluid Typography
- ✅ Container Queries

---

## 📝 RECOMENDACIONES

### Limpieza de Componentes

1. **Crear carpeta para componentes no utilizados:**
   ```
   src/lib/components/_archived/
   src/lib/components/_temporal/
   ```

2. **Mover componentes:**
   - `TypewriterText.svelte` → `_archived/`
   - `BottomSheetExample.svelte` → `docs/examples/` o `_archived/`
   - `ChristmasBanner.svelte` → `_temporal/` (eliminar después de temporada)
   - `ScrollBasedVelocity.svelte` → `_archived/` (si no se usa)
   - `LineShadowText.svelte` → `_archived/` (si no se usa)

3. **Revisar componentes Uiverse:**
   - Verificar si `HeroGlassShowcase`, `GlassCard` (uiverse), `GlassBadge` se usan
   - Si no, mover a `_archived/`

### Mejoras Sugeridas

1. **Completar PWA:**
   - Crear iconos PWA (192x192, 512x512)
   - Colocarlos en `/static/`

2. **Optimizar imágenes:**
   - Verificar que todas las imágenes usen `OptimizedImage`
   - Convertir imágenes estáticas a WebP/AVIF

3. **Documentar componentes:**
   - Añadir JSDoc a componentes complejos
   - Crear Storybook (si se decide usar) o documentación alternativa

4. **Testing:**
   - Añadir tests unitarios para componentes críticos
   - Tests E2E para flujos principales

5. **Analytics:**
   - Integrar Google Analytics 4
   - Configurar eventos personalizados

---

## 📊 ESTADÍSTICAS DEL PROYECTO

### Componentes
- **Atoms:** 7 componentes
- **Molecules:** 7 componentes
- **Organisms:** 4 componentes
- **Magic UI:** 14 componentes
- **Globales:** 4 componentes
- **External/Uiverse:** 4 componentes
- **Total:** ~40 componentes activos

### Páginas
- **Principales:** 10 páginas
- **Categorías:** 5 páginas
- **Legales:** 4 páginas
- **Total:** 19 rutas

### Archivos de Configuración
- `siteConfig.ts` - Configuración centralizada
- `app.css` - Sistema de diseño completo
- `productsIndex.ts` - Índice de productos

---

## 🔗 REFERENCIAS

### Documentación Interna
- `docs/README.md` - Índice de documentación
- `docs/MEJORAS_IMPLEMENTADAS.md` - Mejoras técnicas
- `docs/PLAN_MAESTRO_IMPLEMENTACION.md` - Plan de implementación
- `docs/DESIGN_IMPROVEMENTS.md` - Mejoras de diseño
- `docs/MOBILE_DESIGN_IMPROVEMENTS.md` - Mejoras móviles

### Stack Tecnológico
- **SvelteKit:** https://kit.svelte.dev/
- **Svelte 5:** https://svelte.dev/docs/svelte/$state
- **Tailwind CSS v4:** https://tailwindcss.com/docs
- **Atomic Design:** https://atomicdesign.bradfrost.com/

---

**Última actualización:** 2025-01-27  
**Versión del documento:** 1.0  
**Mantenido por:** Equipo de desarrollo Publisol

