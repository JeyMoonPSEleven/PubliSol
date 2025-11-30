# 📋 PLAN MAESTRO DE IMPLEMENTACIÓN - PUBLISOL

## 📊 ANÁLISIS INICIAL

### Estado Actual del Proyecto
- ✅ **Stack**: SvelteKit 2 + Svelte 5 (Runes) + Tailwind v4
- ✅ **Arquitectura**: Atomic Design implementada
- ✅ **Componentes Base**: Header, Footer, Cards, Forms funcionales
- ⚠️ **Problemas Identificados**:
  - Paginación no funcional (hardcoded)
  - Header no transparente en Hero
  - Iconos inconsistentes (emojis mezclados)
  - Paleta de colores no unificada
  - Faltan componentes Magic UI solicitados
  - Buscador no redirige correctamente
  - Menú hamburguesa móvil no funciona

### Páginas Identificadas
1. `/` - Home
2. `/nosotros` - Sobre Nosotros
3. `/catalogos` - Catálogos
4. `/contacto` - Contacto
5. `/productos` - Listado de productos
6. `/productos/agendas-escolares` - Categoría
7. `/productos/merchandising` - Categoría
8. `/productos/textil` - Categoría
9. `/productos/papeleria` - Categoría
10. `/productos/sostenibles` - Categoría
11. `/producto/[slug]` - Detalle de producto
12. `/blog` - Blog
13. `/faq` - FAQ
14. `/aviso-legal` - Aviso Legal
15. `/privacidad` - Privacidad
16. `/cookies` - Cookies
17. `/terminos` - Términos

---

## 🎯 PLAN DE IMPLEMENTACIÓN POR BLOQUES

### 🔴 BLOQUE 1: IDENTIDAD VISUAL Y ASSETS (PRIORITARIO)

#### 1.1 Paleta de Colores Salem
**Archivo**: `src/app.css`

**Acción**: Integrar la paleta de colores "Salem" desde `colours.css` en Tailwind.

```css
/* Añadir a app.css */
@theme {
  --color-salem-50: #c3ffd2;
  --color-salem-100: #1dfb81;
  --color-salem-200: #17d76d;
  --color-salem-300: #12b75c;
  --color-salem-400: #0d9a4c;
  --color-salem-500: #097f3e; /* Base */
  --color-salem-600: #08783a;
  /* ... resto de la paleta */
}
```

**Pregunta**: ¿La paleta Salem reemplaza completamente la paleta actual (azul/verde/naranja) o se integra como colores adicionales?

#### 1.2 Unificación de Iconos
**Acción**: 
- Instalar `lucide-svelte` si no está instalado
- Reemplazar TODOS los emojis (🎨, 📦, ✓, etc.) por iconos de Lucide
- Crear un componente wrapper para mantener consistencia

**Archivos afectados**:
- `SiteHeader.svelte` (emojis en menú productos)
- `+page.svelte` (emojis en servicios)
- `HeroSection.svelte` (si hay emojis)
- Todos los componentes que usen emojis

**Pregunta**: ¿Tienes preferencia por algún estilo específico de iconos de Lucide (outline, solid, etc.)?

#### 1.3 Estructura de Imágenes Locales
**Acción**: Crear estructura de carpetas y placeholders:

```
static/
  images/
    hero/
      main-hero-bg.jpg (vacío)
    products/
      agenda-premium.png (vacío)
      kit-bienvenida.png (vacío)
      camiseta-corporativa.png (vacío)
      libreta-ejecutiva.png (vacío)
      agenda-sostenible.png (vacío)
      botella-termica.png (vacío)
    team/
      director-general.webp (vacío)
    blog/
      (placeholders según necesidad)
```

**Pregunta**: ¿Qué formato prefieres para cada tipo de imagen? (JPEG para fotos, PNG para gráficos, WebP para optimización, SVG para iconos)

---

### 🟠 BLOQUE 2: HEADER AVANZADO (CRÍTICO)

#### 2.1 Header Transparente → Sticky Blanco
**Archivo**: `src/lib/components/SiteHeader.svelte`

**Implementación**:
```svelte
<script lang="ts">
  let scrollY = $state(0);
  let isTransparent = $derived(scrollY < 50);
  
  // En onMount
  onMount(() => {
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<header 
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {isTransparent 
    ? 'bg-transparent text-white' 
    : 'bg-white/95 backdrop-blur-md text-primary shadow-md'}"
>
```

**Pregunta**: ¿El header debe estar siempre visible o ocultarse al hacer scroll hacia abajo (como está actualmente)?

#### 2.2 Centrar NavItems
**Acción**: Modificar el layout del Header para centrar los items de navegación.

#### 2.3 Visibilidad Botones Buscador y Contacto
**Acción**: Ajustar z-index y colores para que sean visibles sobre el Hero transparente.

#### 2.4 Menú Hamburguesa Móvil
**Archivo**: `SiteHeader.svelte`

**Problema actual**: El botón no dispara el Drawer correctamente.

**Acción**: Revisar el evento `onclick` y asegurar que el Drawer tenga z-index superior al Hero.

#### 2.5 Buscador → Redirección
**Archivo**: `SiteHeader.svelte`

**Implementación**:
```svelte
function handleSearch(query: string) {
  if (query.trim()) {
    window.location.href = `/productos?q=${encodeURIComponent(query)}`;
  }
}
```

**Archivo**: `src/routes/productos/+page.svelte`

**Implementación**: Leer query param `q` y filtrar productos:
```svelte
import { page } from '$app/stores';

let searchQuery = $derived($page.url.searchParams.get('q') || '');

let filteredProducts = $derived(
  searchQuery 
    ? products.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products
);
```

---

### 🟡 BLOQUE 3: HERO SECTION PREMIUM

#### 3.1 Animación Typewriter
**Archivo**: `src/lib/components/organisms/HeroSection.svelte`

**Acción**: Usar el componente `TypewriterText.svelte` existente o crear uno nuevo basado en Magic UI.

**Pregunta**: ¿El texto debe alternar entre varias frases o solo escribir una frase?

#### 3.2 VerticalMarquee con Dos Columnas (Sentido Inverso)
**Archivo**: `HeroSection.svelte`

**Implementación**: 
- Columna izquierda: `direction="up"`
- Columna derecha: `direction="down"`
- Cards más pequeñas (compact)

**Componente**: Ya existe `VerticalMarquee.svelte` en `src/lib/components/molecules/`

**Pregunta**: ¿Las cards deben mostrar productos reales o placeholders?

#### 3.3 Imagen de Fondo Local
**Acción**: 
- Crear `static/images/hero/main-hero-bg.jpg` (vacío)
- Usar como fondo con overlay oscuro para legibilidad

---

### 🟢 BLOQUE 4: COMPONENTES MAGIC UI

#### 4.1 Bento Grid
**Archivo**: `src/routes/+page.svelte` (Sección "¿Por qué elegirnos?")

**Acción**: 
- Crear componentes `BentoGrid.svelte` y `BentoCard.svelte` adaptados de React a Svelte
- Reemplazar el grid actual de 6 servicios

**Dependencias**: Necesitamos `framer-motion` para Svelte o usar animaciones CSS puras.

**Pregunta**: ¿Prefieres usar `svelte-motion` (wrapper de Framer Motion para Svelte) o implementar con CSS/JavaScript vanilla?

#### 4.2 Ripple Button
**Archivo**: Crear `src/lib/components/magic-ui/RippleButton.svelte`

**Acción**: Portar el componente de React a Svelte.

**CSS necesario**:
```css
@keyframes rippling {
  0% {
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}
```

**Uso**: Reemplazar botones principales del Hero y Header.

#### 4.3 Scroll Based Velocity
**Archivo**: Crear `src/lib/components/magic-ui/ScrollBasedVelocity.svelte`

**Acción**: Portar de React (Framer Motion) a Svelte.

**Dependencias**: `svelte-motion` o implementación vanilla.

**Ubicación**: Entre Hero y Bento Grid en la home.

**Pregunta**: ¿Qué frase de impacto quieres mostrar? (ej: "PERSONALIZACIÓN • CALIDAD • RAPIDEZ •")

#### 4.4 Line Shadow Text
**Archivo**: Crear `src/lib/components/magic-ui/LineShadowText.svelte`

**Acción**: Portar componente de React a Svelte.

**Ubicación**: Título "¿Listo para tu próximo proyecto?" en CTA final.

---

### 🔵 BLOQUE 5: FORMULARIOS Y LÓGICA DE NEGOCIO

#### 5.1 Formulario de Contacto - Pre-llenado desde Producto
**Archivo**: `src/routes/contacto/+page.svelte`

**Implementación**:
```svelte
import { page } from '$app/stores';

let productoParam = $derived($page.url.searchParams.get('producto') || '');

$effect(() => {
  if (productoParam) {
    formData.tipoProyecto = productoParam;
    formData.mensaje = `Hola, estoy interesado en ${productoParam}...`;
  }
});
```

**Archivo**: `src/routes/producto/[slug]/+page.svelte`

**Acción**: Cambiar botón "Solicitar Presupuesto" a:
```svelte
<Button href="/contacto?producto={product.name}">
  Solicitar Presupuesto
</Button>
```

#### 5.2 Quitar AnimatedGridPattern del Fondo
**Archivo**: `src/routes/contacto/+page.svelte`

**Acción**: Eliminar o comentar el componente `AnimatedGridPattern` y usar fondo limpio.

#### 5.3 Paginación Funcional
**Archivo**: `src/routes/productos/+page.svelte`

**Problema**: Paginación hardcoded, no funcional.

**Solución**: Usar componente `Pagination` del design-system:
```svelte
import { Pagination } from 'atomic-design-svelte';

let currentPage = $state(1);
const itemsPerPage = 9;
let totalPages = $derived(Math.ceil(filteredProducts.length / itemsPerPage));
let paginatedProducts = $derived(
  filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )
);

function handlePageChange(page: number) {
  currentPage = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
```

---

### 🟣 BLOQUE 6: UNIFICACIÓN Y ESTÁNDARES

#### 6.1 Unificar Estilos de Botones
**Acción**: 
- Auditar todos los botones del proyecto
- Asegurar que usen el componente `Button` del design-system
- Aplicar `RippleButton` en CTAs principales

**Archivos a revisar**: Todos los `.svelte` que contengan botones.

#### 6.2 Unificar Tipografía
**Acción**: 
- Asegurar que TODOS los componentes usen la misma fuente
- Según `app.css`: `Plus Jakarta Sans` para todo (por ahora)

**Pregunta**: ¿Confirmas que queremos la misma fuente para TODO (incluidos H1, H2, etc.) o mantener jerarquía con Playfair Display para headings?

#### 6.3 Layout Consistente
**Verificación**: Todas las páginas deben tener:
- Header
- Main (contenido)
- Newsletter/Contacto (sección)
- Footer

**Pregunta**: ¿La sección Newsletter/Contacto debe aparecer en TODAS las páginas o solo en la home?

---

### 🟤 BLOQUE 7: NUEVAS PÁGINAS Y FUNCIONALIDADES

#### 7.1 Página "Producto del Mes"
**Archivo**: `src/routes/producto-destacado/+page.svelte`

**Acción**: Crear página con diseño editorial único:
- Layout diferente al template estándar
- Fotos grandes
- Storytelling
- CTA directo

**Pregunta**: ¿Esta página debe ser estática o dinámica (con datos desde CMS/API)?

#### 7.2 Listado Completo de Páginas
**Acción**: Documentar todas las páginas existentes (ya listadas arriba).

#### 7.3 Intro Overlay (Tarea No Prioritaria)
**Archivo**: Crear `src/lib/components/atoms/IntroOverlay.svelte`

**Funcionalidad**:
- Muestra logo con animación
- Se desvanece después de 2 segundos
- Solo una vez por sesión (sessionStorage)

**Estado**: Tarea no prioritaria, añadida a lista.

---

## ✅ RESPUESTAS DEL CLIENTE

### Respuestas Críticas:

1. **Paleta de Colores**: ✅ **INTEGRAR** (no reemplazar) - Paleta Salem añadida como colores adicionales
2. **Header**: ✅ **SIEMPRE VISIBLE** - No ocultarse al hacer scroll
3. **Dependencias Magic UI**: ✅ **svelte-motion** (recomendación aceptada) - Instalado
4. **Tipografía**: ✅ **MANTENER JERARQUÍA** - Playfair Display para headings, Plus Jakarta Sans para body
5. **Newsletter**: ✅ **SOLO EN HOME** - No en todas las páginas

### Estado de Implementación:
- ✅ Dependencias instaladas: `lucide-svelte`, `svelte-motion`
- ✅ Paleta Salem integrada en `app.css` con sintaxis Tailwind v4
- ✅ Animación Ripple añadida a CSS

### Importantes (Mejoran la implementación):

6. **Iconos Lucide**: ¿Preferencia por outline, solid, o ambos?
7. **Typewriter**: ¿Alterna entre frases o solo una?
8. **VerticalMarquee**: ¿Productos reales o placeholders?
9. **Scroll Velocity**: ¿Qué frase de impacto mostrar?
10. **Producto del Mes**: ¿Página estática o dinámica?

### Secundarias (Pueden decidirse durante implementación):

11. **Formato Imágenes**: ¿JPEG/PNG/WebP según tipo?
12. **Intro Overlay**: ¿Confirmas que lo dejamos para después?

---

## 📦 DEPENDENCIAS NECESARIAS

### A Instalar:
- [ ] `lucide-svelte` (para iconos unificados)
- [ ] `svelte-motion` (si usamos Framer Motion para Magic UI) O implementación vanilla

### A Verificar:
- [ ] `atomic-design-svelte` (ya instalado como workspace)
- [ ] Componente `Pagination` disponible en design-system

---

## 🚀 ORDEN DE IMPLEMENTACIÓN RECOMENDADO

1. **BLOQUE 1** (Identidad Visual) - Base para todo
2. **BLOQUE 2** (Header) - Crítico para UX
3. **BLOQUE 3** (Hero) - Primera impresión
4. **BLOQUE 4** (Magic UI) - Wow factor
5. **BLOQUE 5** (Formularios) - Funcionalidad crítica
6. **BLOQUE 6** (Unificación) - Pulido final
7. **BLOQUE 7** (Nuevas páginas) - Extras

---

## ✅ CHECKLIST DE VALIDACIÓN

### Pre-implementación:
- [ ] Responder preguntas críticas
- [ ] Instalar dependencias necesarias
- [ ] Verificar errores del servidor `pnpm dev`

### Durante implementación:
- [ ] Cada bloque debe funcionar antes de pasar al siguiente
- [ ] Probar en móvil y desktop
- [ ] Verificar accesibilidad básica

### Post-implementación:
- [ ] Revisar todas las páginas
- [ ] Verificar que no hay errores en consola
- [ ] Probar flujos críticos (búsqueda, contacto, navegación)

---

## 📝 NOTAS ADICIONALES

- El proyecto usa **Svelte 5 con Runes** (`$state`, `$derived`, `$effect`)
- Tailwind v4 usa sintaxis `@theme` en lugar de `tailwind.config.js`
- Los componentes del design-system se importan desde `atomic-design-svelte`
- El layout base está en `src/routes/+layout.svelte`

---

**Última actualización**: $(date)
**Estado**: Pendiente de respuestas a preguntas críticas

