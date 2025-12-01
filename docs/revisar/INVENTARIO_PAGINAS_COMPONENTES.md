# 📋 INVENTARIO DE PÁGINAS, COMPONENTES Y ESTILOS - PUBLISOL

**Última actualización**: 2025-11-30  
**Proyecto**: Publisol - Sistema de Diseño Atomic Design con SvelteKit

---

## 📐 ESTRUCTURA DEL DOCUMENTO

Para cada página se documenta:
- **Ruta del archivo**: Ubicación del archivo `.svelte` final
- **Componentes Atomic Design**: Componentes del design-system utilizados
- **Componentes Custom**: Componentes propios de `$lib/components`
- **Componentes Magic UI**: Componentes de animación y efectos especiales
- **Estilos asociados**: Clases CSS principales, patrones de diseño, backgrounds, etc.

---

## 🏗️ LAYOUT PRINCIPAL

### `src/routes/+layout.svelte`
**Ruta**: `/` (aplica a todas las páginas)

**Componentes Atomic Design**:
- Ninguno (solo estructura)

**Componentes Custom**:
- `SiteHeader` (organismo)
- `SiteFooter` (organismo)
- `BottomNavigation` (organismo)
- `WhatsAppWidget` (componente)
- `ScrollProgress` (magic-ui)

**Estilos asociados**:
- `min-h-dvh` en `<main>`
- Estilos globales importados desde `../app.css`

---

## 🏠 PÁGINAS PRINCIPALES

### 1. Home (`/`)
**Ruta del archivo**: `src/routes/+page.svelte`

**Componentes Atomic Design**:
- `Card` (átomo)
- `Button` (átomo)
- `Heading` (átomo)
- `Text` (átomo)
- `Link` (átomo)

**Componentes Custom**:
- `HeroSection` (organismo)
- `ScrollReveal` (átomo)
- `Seo` (componente)

**Componentes Magic UI**:
- `NumberTicker`
- `AnimatedGridPattern`
- `Marquee`
- `ScrollProgress`
- `QuickView`
- `ShimmerButton`
- `ScrollBasedVelocity`
- `LineShadowText`
- `BentoGrid`
- `BentoCard`

**Iconos**:
- `lucide-svelte`: Palette, CheckCircle2, Package, Hash, Truck, Sprout, MessageCircle, Pencil, Factory, Box

**Estilos asociados**:
- Secciones con `bg-surface-page`, `bg-surface-tertiary`
- Gradientes: `bg-gradient-to-br from-primary/5 via-white to-secondary/5`
- Spacing responsive: `py-12 sm:py-16 md:py-24`
- Grid layouts: `grid md:grid-cols-2`, `grid md:grid-cols-3`
- Shadows: `shadow-[0_8px_24px_rgba(16,185,129,0.35)]`
- Container: `container mx-auto px-4 sm:px-6 lg:px-8`

---

### 2. Sobre Nosotros (`/nosotros`)
**Ruta del archivo**: `src/routes/nosotros/+page.svelte`

**Componentes Atomic Design**:
- `Heading` (átomo)
- `Text` (átomo)
- `Card` (átomo)
- `Timeline` (molécula)
- `Breadcrumb` (molécula)

**Componentes Custom**:
- `Seo` (componente)

**Componentes Magic UI**:
- Ninguno

**Estilos asociados**:
- `bg-surface-tertiary` en header
- `prose prose-lg` para contenido de texto
- `max-w-4xl` para ancho máximo de contenido
- Spacing: `py-12`, `py-16`

---

### 3. Catálogos (`/catalogos`)
**Ruta del archivo**: `src/routes/catalogos/+page.svelte`

**Componentes Atomic Design**:
- `Heading` (átomo)
- `Text` (átomo)
- `Card` (átomo)
- `Button` (átomo)
- `Modal` (molécula)
- `Breadcrumb` (molécula)

**Componentes Custom**:
- `Seo` (componente)

**Componentes Magic UI**:
- Ninguno

**Estilos asociados**:
- Grid de catálogos: `grid md:grid-cols-2 lg:grid-cols-3 gap-6`
- Cards con hover effects
- Modal para descarga de PDFs
- `bg-surface-tertiary` en header

---

### 4. Contacto (`/contacto`)
**Ruta del archivo**: `src/routes/contacto/+page.svelte`

**Componentes Atomic Design**:
- `Heading` (átomo)
- `Text` (átomo)
- `Card` (átomo)
- `Button` (átomo)
- `Form` (molécula)
- `Input` (átomo)
- `Select` (átomo)
- `Textarea` (átomo)
- `Checkbox` (átomo)
- `Link` (átomo)
- `Breadcrumb` (molécula)

**Componentes Custom**:
- `ShimmerButton` (magic-ui)
- `FormWizard` (magic-ui)
- `Seo` (componente)

**Componentes Magic UI**:
- `ShimmerButton`
- `FormWizard`
- `AnimatedGridPattern` (removido del fondo)

**Iconos**:
- `lucide-svelte`: MapPin, Phone, Mail, Clock, Truck, Globe, Package, Zap

**Estilos asociados**:
- Formulario multi-paso con wizard
- Grid de información de contacto: `grid md:grid-cols-2`
- Cards de información con iconos
- Validación de formularios
- Pre-llenado desde query params (`?producto=`)
- `bg-surface-tertiary` en secciones alternas

---

### 5. Productos - Listado (`/productos`)
**Ruta del archivo**: `src/routes/productos/+page.svelte`

**Componentes Atomic Design**:
- `Heading` (átomo)
- `Text` (átomo)
- `Card` (átomo)
- `Button` (átomo)
- `Breadcrumb` (molécula)
- `Badge` (átomo)
- `Pagination` (molécula)

**Componentes Custom**:
- `Drawer` (magic-ui)
- `QuickView` (magic-ui)
- `Seo` (componente)

**Componentes Magic UI**:
- `Drawer` (filtros laterales)
- `QuickView` (vista rápida de productos)

**Estilos asociados**:
- Grid de productos: `grid sm:grid-cols-2 lg:grid-cols-3 gap-6`
- Filtros en drawer lateral
- Búsqueda desde query params (`?q=`)
- Paginación funcional
- Cards de productos con hover effects
- Badges para estados (Nuevo, Personalizable, Eco, etc.)

---

### 6. Productos - Categoría Agendas Escolares (`/productos/agendas-escolares`)
**Ruta del archivo**: `src/routes/productos/agendas-escolares/+page.svelte`

**Componentes Atomic Design**:
- `Heading` (átomo)
- `Text` (átomo)
- `Card` (átomo)
- `Button` (átomo)
- `Breadcrumb` (molécula)
- `Badge` (átomo)

**Componentes Custom**:
- `Drawer` (magic-ui)
- `QuickView` (magic-ui)
- `Seo` (componente)

**Componentes Magic UI**:
- `Drawer`
- `QuickView`

**Estilos asociados**:
- Misma estructura que `/productos`
- Filtros específicos de categoría
- Grid de productos: `grid sm:grid-cols-2 lg:grid-cols-3 gap-6`

---

### 7. Productos - Categoría Merchandising (`/productos/merchandising`)
**Ruta del archivo**: `src/routes/productos/merchandising/+page.svelte`

**Componentes Atomic Design**:
- `Heading` (átomo)
- `Text` (átomo)
- `Card` (átomo)
- `Button` (átomo)
- `Breadcrumb` (molécula)
- `Badge` (átomo)

**Componentes Custom**:
- `Drawer` (magic-ui)
- `QuickView` (magic-ui)
- `Seo` (componente)

**Componentes Magic UI**:
- `Drawer`
- `QuickView`

**Estilos asociados**:
- Misma estructura que `/productos`
- Grid de productos: `grid sm:grid-cols-2 lg:grid-cols-3 gap-6`

---

### 8. Productos - Categoría Textil (`/productos/textil`)
**Ruta del archivo**: `src/routes/productos/textil/+page.svelte`

**Componentes Atomic Design**:
- `Heading` (átomo)
- `Text` (átomo)
- `Card` (átomo)
- `Button` (átomo)
- `Breadcrumb` (molécula)
- `Badge` (átomo)

**Componentes Custom**:
- `Drawer` (magic-ui)
- `QuickView` (magic-ui)
- `Seo` (componente)

**Componentes Magic UI**:
- `Drawer`
- `QuickView`

**Estilos asociados**:
- Misma estructura que `/productos`
- Grid de productos: `grid sm:grid-cols-2 lg:grid-cols-3 gap-6`

---

### 9. Productos - Categoría Papelería (`/productos/papeleria`)
**Ruta del archivo**: `src/routes/productos/papeleria/+page.svelte`

**Componentes Atomic Design**:
- `Heading` (átomo)
- `Text` (átomo)
- `Card` (átomo)
- `Button` (átomo)
- `Breadcrumb` (molécula)
- `Badge` (átomo)

**Componentes Custom**:
- `Drawer` (magic-ui)
- `QuickView` (magic-ui)
- `Seo` (componente)

**Componentes Magic UI**:
- `Drawer`
- `QuickView`

**Estilos asociados**:
- Misma estructura que `/productos`
- Grid de productos: `grid sm:grid-cols-2 lg:grid-cols-3 gap-6`

---

### 10. Productos - Categoría Sostenibles (`/productos/sostenibles`)
**Ruta del archivo**: `src/routes/productos/sostenibles/+page.svelte`

**Componentes Atomic Design**:
- `Heading` (átomo)
- `Text` (átomo)
- `Card` (átomo)
- `Button` (átomo)
- `Breadcrumb` (molécula)
- `Badge` (átomo)

**Componentes Custom**:
- `Drawer` (magic-ui)
- `QuickView` (magic-ui)
- `Seo` (componente)

**Componentes Magic UI**:
- `Drawer`
- `QuickView`

**Estilos asociados**:
- Misma estructura que `/productos`
- Grid de productos: `grid sm:grid-cols-2 lg:grid-cols-3 gap-6`
- Badges especiales para productos "Eco"

---

### 11. Producto - Detalle (`/producto/[slug]`)
**Ruta del archivo**: `src/routes/producto/[slug]/+page.svelte`

**Componentes Atomic Design**:
- `Heading` (átomo)
- `Text` (átomo)
- `Card` (átomo)
- `Button` (átomo)
- `Breadcrumb` (molécula)
- `Gallery` (molécula)
- `Tabs` (molécula)
- `Rating` (átomo)
- `Badge` (átomo)
- `Link` (átomo)

**Componentes Custom**:
- `Lightbox` (magic-ui)
- `Seo` (componente)

**Componentes Magic UI**:
- `Lightbox` (galería de imágenes)

**Estilos asociados**:
- Layout de dos columnas: `grid lg:grid-cols-2`
- Galería de imágenes con lightbox
- Configurador de producto (colores, formatos, opciones)
- Tabla de precios según cantidad
- Sticky summary card en desktop
- `bg-surface-tertiary` en secciones alternas

---

### 12. Producto Destacado (`/producto-destacado`)
**Ruta del archivo**: `src/routes/producto-destacado/+page.svelte`

**Componentes Atomic Design**:
- `Heading` (átomo)
- `Text` (átomo)
- `Button` (átomo)
- `Badge` (átomo)
- `Link` (átomo)

**Componentes Custom**:
- `ScrollReveal` (átomo)
- `Seo` (componente)

**Componentes Magic UI**:
- Ninguno

**Iconos**:
- `lucide-svelte`: CheckCircle2, Sparkles, Award, Leaf

**Estilos asociados**:
- Layout asimétrico en Hero: `grid lg:grid-cols-2`
- Gradientes: `bg-gradient-to-br from-primary/5 via-white to-secondary/5`
- Secciones con diferentes backgrounds: `bg-white`, `bg-surface-tertiary`, `bg-primary`
- Imágenes con aspect ratio: `aspect-[4/5]`
- Cards con hover effects: `hover:shadow-xl`
- Spacing grande: `py-16 sm:py-20 lg:py-28`
- Diseño editorial único (diferente al template estándar)

---

### 13. Blog (`/blog`)
**Ruta del archivo**: `src/routes/blog/+page.svelte`

**Componentes Atomic Design**:
- `Heading` (átomo)
- `Text` (átomo)
- `Card` (átomo)
- `Button` (átomo)
- `Breadcrumb` (molécula)
- `SearchBar` (molécula)
- `Link` (átomo)

**Componentes Custom**:
- `Seo` (componente)

**Componentes Magic UI**:
- Ninguno

**Estilos asociados**:
- Grid de artículos: `grid md:grid-cols-2 lg:grid-cols-3 gap-6`
- Filtros por categoría
- Búsqueda de artículos
- Cards de artículos con imágenes
- `bg-surface-tertiary` en header

---

### 14. FAQ (`/faq`)
**Ruta del archivo**: `src/routes/faq/+page.svelte`

**Componentes Atomic Design**:
- `Heading` (átomo)
- `Text` (átomo)
- `Breadcrumb` (molécula)
- `Accordion` (molécula)
- `Card` (átomo)
- `Button` (átomo)
- `Link` (átomo)

**Componentes Custom**:
- `Seo` (componente)

**Componentes Magic UI**:
- Ninguno

**Estilos asociados**:
- Accordion por categorías
- `bg-surface-tertiary` en header
- `prose prose-lg` para contenido
- Cards para categorías de preguntas

---

## 📄 PÁGINAS LEGALES

### 15. Aviso Legal (`/aviso-legal`)
**Ruta del archivo**: `src/routes/aviso-legal/+page.svelte`

**Componentes Atomic Design**:
- `Heading` (átomo)
- `Text` (átomo)
- `Breadcrumb` (molécula)

**Componentes Custom**:
- `Seo` (componente)

**Componentes Magic UI**:
- Ninguno

**Estilos asociados**:
- `bg-surface-tertiary` en header
- `prose prose-lg` para contenido legal
- `max-w-4xl` para ancho máximo
- Spacing: `py-12`, `py-16`

---

### 16. Política de Privacidad (`/privacidad`)
**Ruta del archivo**: `src/routes/privacidad/+page.svelte`

**Componentes Atomic Design**:
- `Heading` (átomo)
- `Text` (átomo)
- `Breadcrumb` (molécula)
- `Card` (átomo)
- `Link` (átomo)

**Componentes Custom**:
- `Seo` (componente)

**Componentes Magic UI**:
- Ninguno

**Estilos asociados**:
- `bg-surface-tertiary` en header
- `prose prose-lg` para contenido legal
- `max-w-4xl` para ancho máximo
- Cards para secciones destacadas

---

### 17. Política de Cookies (`/cookies`)
**Ruta del archivo**: `src/routes/cookies/+page.svelte`

**Componentes Atomic Design**:
- `Heading` (átomo)
- `Text` (átomo)
- `Breadcrumb` (molécula)
- `Card` (átomo)
- `Button` (átomo)
- `Checkbox` (átomo)
- `Modal` (molécula)
- `Link` (átomo)

**Componentes Custom**:
- `Seo` (componente)

**Componentes Magic UI**:
- Ninguno

**Estilos asociados**:
- `bg-surface-tertiary` en header
- `prose prose-lg` para contenido legal
- Modal para configuración de cookies
- Cards para tipos de cookies
- `max-w-4xl` para ancho máximo

---

### 18. Términos y Condiciones (`/terminos`)
**Ruta del archivo**: `src/routes/terminos/+page.svelte`

**Componentes Atomic Design**:
- `Heading` (átomo)
- `Text` (átomo)
- `Breadcrumb` (molécula)

**Componentes Custom**:
- `Seo` (componente)

**Componentes Magic UI**:
- Ninguno

**Estilos asociados**:
- `bg-surface-tertiary` en header
- `prose prose-lg` para contenido legal
- `max-w-4xl` para ancho máximo
- Spacing: `py-12`, `py-16`

---

## 🎨 PATRONES DE ESTILO COMUNES

### Backgrounds
- `bg-surface-page`: Fondo principal de página
- `bg-surface-tertiary`: Fondo alterno (beige claro)
- `bg-white`: Fondo blanco puro
- `bg-primary`: Fondo con color primario
- `bg-gradient-to-br from-primary/5 via-white to-secondary/5`: Gradientes sutiles

### Spacing
- Headers: `py-12`
- Secciones: `py-16` o `py-12 sm:py-16 md:py-24`
- Containers: `px-4 sm:px-6 lg:px-8`
- Gaps: `gap-4`, `gap-6`, `gap-8`

### Layouts
- Container: `container mx-auto px-4 sm:px-6 lg:px-8`
- Grid 2 columnas: `grid md:grid-cols-2`
- Grid 3 columnas: `grid sm:grid-cols-2 lg:grid-cols-3`
- Max width contenido: `max-w-4xl`, `max-w-6xl`

### Tipografía
- Headings: Usan `Heading` component (Playfair Display)
- Body: Usan `Text` component (Plus Jakarta Sans)
- Tamaños responsive: `text-2xl sm:text-3xl md:text-4xl`

### Efectos
- Hover: `hover:shadow-xl`, `hover:-translate-y-2`
- Transitions: `transition-all duration-300`
- Shadows: `shadow-lg`, `shadow-xl`, `shadow-2xl`

---

## 📊 RESUMEN DE COMPONENTES MÁS USADOS

### Componentes Atomic Design (Top 10)
1. `Heading` - Usado en todas las páginas
2. `Text` - Usado en todas las páginas
3. `Button` - Usado en 15+ páginas
4. `Card` - Usado en 12+ páginas
5. `Breadcrumb` - Usado en todas las páginas con contenido
6. `Badge` - Usado en páginas de productos
7. `Link` - Usado en navegación y enlaces
8. `Input` - Usado en formularios
9. `Select` - Usado en formularios
10. `Modal` - Usado en catálogos y cookies

### Componentes Custom (Top 5)
1. `Seo` - Usado en todas las páginas
2. `HeroSection` - Usado en home
3. `ScrollReveal` - Usado en home y producto-destacado
4. `QuickView` - Usado en páginas de productos
5. `Drawer` - Usado en páginas de productos

### Componentes Magic UI (Top 5)
1. `ScrollProgress` - Usado en layout global
2. `BentoGrid` / `BentoCard` - Usado en home
3. `ScrollBasedVelocity` - Usado en home
4. `ShimmerButton` - Usado en home y contacto
5. `FormWizard` - Usado en contacto

---

## 🔍 NOTAS IMPORTANTES

1. **Consistencia**: Todas las páginas usan `Breadcrumb` y `Seo` para mantener consistencia
2. **Responsive**: Todos los layouts usan breakpoints de Tailwind (`sm:`, `md:`, `lg:`)
3. **Tokens**: Los colores usan tokens semánticos (`bg-primary`, `text-text-muted`, etc.)
4. **Accesibilidad**: Componentes del design-system incluyen a11y por defecto
5. **Animaciones**: `ScrollReveal` se usa para animaciones de entrada
6. **Magic UI**: Componentes de animación se usan principalmente en home

---

**Total de páginas documentadas**: 18 páginas  
**Total de componentes únicos identificados**: 50+ componentes

