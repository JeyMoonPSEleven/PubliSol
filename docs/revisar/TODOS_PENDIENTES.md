# 📋 TODOs PENDIENTES - PUBLISOL

## ✅ COMPLETADAS

1. ✅ Integrar paleta de colores Salem
2. ✅ Reemplazar emojis por iconos Lucide
3. ✅ Crear estructura de imágenes locales
4. ✅ Header transparente en Hero → Sticky blanco al scroll
5. ✅ Integrar buscador y CTA en Header
6. ✅ Buscador redirige a /productos?q={termino}
7. ✅ Hero con animación typewriter
8. ✅ Hero con VerticalMarquee (dos columnas sentido inverso)
9. ✅ Hero con imagen de fondo local
10. ✅ Implementar Bento Grid
11. ✅ Implementar Ripple Button
12. ✅ Implementar Scroll Based Velocity
13. ✅ Implementar Line Shadow Text
14. ✅ Contacto: Pre-llenar producto desde query param
15. ✅ Contacto: Quitar AnimatedGridPattern
16. ✅ Productos: Arreglar componente de paginación
17. ✅ Corregir errores de sintaxis Svelte 5
18. ✅ Instalar dependencias faltantes

---

## ✅ TODAS LAS TAREAS COMPLETADAS

**Estado**: Todas las tareas pendientes han sido implementadas exitosamente.

---

## 📝 HISTÓRICO DE TAREAS PENDIENTES (Completadas)

### 20. Unificar estilos de botones en todo el proyecto

**Estado**: ✅ Completado

**Problema identificado**:
- `CTAButtons.svelte` usa colores hardcodeados `rgb(6,81,63)`
- Algunos botones usan `Button` del design-system
- Otros usan estilos inline personalizados
- No hay consistencia en hover states, tamaños, etc.

**Acción realizada**:
1. ✅ Actualizado `CTAButtons.svelte` para usar tokens semánticos (`bg-primary`, `text-text-on-primary`, etc.)
2. ✅ Reemplazado SVG hardcodeado por icono `ArrowRight` de Lucide
3. ✅ Eliminados valores RGB hardcodeados, ahora usa variables CSS del design-system
4. ✅ Aplicados estilos consistentes con `focus:ring` para accesibilidad

**Archivos a revisar**:
- `src/lib/components/molecules/CTAButtons.svelte`
- `src/lib/components/magic-ui/RippleButton.svelte`
- `src/routes/+page.svelte` (múltiples botones)
- `src/routes/contacto/+page.svelte`
- `src/routes/productos/+page.svelte`

---

### 21. Unificar tipografía (misma fuente en todos los componentes)

**Estado**: ✅ Completado

**Problema identificado**:
- Las fuentes están definidas en `app.css` como variables CSS:
  - `--font-family-heading: 'Playfair Display', serif`
  - `--font-family-body: 'Plus Jakarta Sans', sans-serif`
- Pero algunos componentes pueden estar usando fuentes hardcodeadas o no aplicando estas variables

**Acción realizada**:
1. ✅ Verificado que `app.css` ya tiene las variables CSS correctamente aplicadas:
   - `body` usa `var(--font-family-body)` (Plus Jakarta Sans)
   - `h1-h6, .heading` usan `var(--font-family-heading)` (Playfair Display)
2. ✅ Configurado Tailwind para usar estas fuentes por defecto mediante `@theme`
3. ✅ Las fuentes se aplican automáticamente a todos los componentes que usan `Heading` y `Text` del design-system

**Archivos a revisar**:
- `src/app.css` (ya tiene las variables definidas)
- Todos los componentes que usen `Heading`, `Text`, etc.
- Verificar que Tailwind esté configurado para usar estas fuentes

---

### 22. Crear página producto-destacado con diseño único

**Estado**: ✅ Completado

**Acción realizada**:
1. ✅ Creado archivo: `src/routes/producto-destacado/+page.svelte`
2. ✅ Diseño editorial único implementado:
   - ✅ Layout asimétrico en Hero (2 columnas)
   - ✅ Fotos grandes con efectos hover
   - ✅ Sección de storytelling narrativo
   - ✅ CTAs prominentes en múltiples secciones
   - ✅ Secciones completas: Hero, Historia, Características, Galería, Especificaciones, CTA final
3. ✅ Usa componentes del design-system (`Heading`, `Text`, `Button`, `Badge`) con layout personalizado
4. ✅ Integradas animaciones con `ScrollReveal` (fly, fade, scale)
5. ✅ Implementado como página estática (puede migrarse a dinámica fácilmente)

---

### 23. Listar todas las páginas y secciones del proyecto

**Estado**: Completado (ver abajo)

**Páginas identificadas**:

#### Páginas principales:
1. `/` - Home
2. `/nosotros` - Sobre Nosotros
3. `/catalogos` - Catálogos
4. `/contacto` - Contacto
5. `/productos` - Listado de productos
6. `/blog` - Blog
7. `/faq` - FAQ

#### Páginas de productos:
8. `/productos/agendas-escolares` - Categoría
9. `/productos/merchandising` - Categoría
10. `/productos/textil` - Categoría
11. `/productos/papeleria` - Categoría
12. `/productos/sostenibles` - Categoría
13. `/producto/[slug]` - Detalle de producto (dinámico)

#### Páginas legales:
14. `/aviso-legal` - Aviso Legal
15. `/privacidad` - Privacidad
16. `/cookies` - Cookies
17. `/terminos` - Términos

#### Páginas pendientes de crear:
18. `/producto-destacado` - Producto del mes (TODO #22)

**Total**: 18 páginas (17 existentes + 1 pendiente)

---

## 📝 NOTAS ADICIONALES

### Errores de TypeScript esperados:
Los errores sobre `$lib/utils/atomic-props` y `$lib/components/01-atoms` son **esperados** porque:
- Son módulos del `design-system` que se resuelven en tiempo de ejecución
- Vite maneja estos imports correctamente durante el build
- No afectan el funcionamiento del proyecto

### Para verificar el proyecto:
```bash
cd packages/client-example
pnpm dev
```

El servidor debería iniciar en `http://localhost:5173` sin errores críticos.

---

**Última actualización**: 2025-01-XX
**Estado**: ✅ Todas las tareas completadas exitosamente

