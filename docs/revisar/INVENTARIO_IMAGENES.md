# 📸 INVENTARIO COMPLETO DE IMÁGENES - PUBLISOL

Este documento lista todas las imágenes necesarias para el proyecto Publisol, organizadas por sección y con nombres descriptivos.

## 📁 ESTRUCTURA DE CARPETAS

```
static/images/
├── hero/              # Imágenes del hero principal
├── products/          # Imágenes de productos
├── categories/        # Imágenes de categorías
├── team/              # Fotos del equipo
├── blog/              # Imágenes de artículos del blog
├── cases/             # Casos de éxito / proyectos
└── certifications/    # Logos de certificaciones
```

---

## 🎯 HERO SECTION

### `/static/images/hero/`

> **NOTA IMPORTANTE:** El Hero ya no utiliza imagen de fondo. Se ha cambiado a un fondo sólido con transparencia (gradiente). La imagen `main-hero-bg.jpg` ya no es necesaria.

| Archivo | Descripción | Uso | Dimensiones Recomendadas | Estado |
|---------|-------------|-----|--------------------------|--------|
| ~~`main-hero-bg.jpg`~~ | ~~**Fondo principal del hero**~~ - ~~Imagen de fondo para la sección hero principal~~ | ~~HeroSection.svelte~~ | ~~1920x1080px (16:9)~~ | ❌ **YA NO SE USA** |

**Estado:** ✅ El Hero ahora usa fondo sólido con transparencia (gradiente CSS)

---

## 🛍️ PRODUCTOS

### `/static/images/products/`

| Archivo | Descripción | Uso | Dimensiones Recomendadas | Estado |
|---------|-------------|-----|--------------------------|--------|
| `agenda-premium.png` | **Agenda Premium** - Agenda escolar o corporativa de alta gama | **HeroSection (VerticalMarquee)**, Producto Destacado | **600x600px (1:1)** - Cards pequeñas | ✅ Existe |
| `agenda-sostenible.png` | **Agenda Sostenible** - Agenda ecológica con materiales reciclados | **HeroSection (VerticalMarquee)**, Productos Sostenibles | **600x600px (1:1)** - Cards pequeñas | ✅ Existe |
| `botella-termica.png` | **Botella Térmica** - Botella térmica personalizada | **HeroSection (VerticalMarquee)**, Merchandising | **600x600px (1:1)** - Cards pequeñas | ✅ Existe |
| `camiseta-corporativa.png` | **Camiseta Corporativa** - Camiseta con logo personalizado | **HeroSection (VerticalMarquee)**, Textil | **600x600px (1:1)** - Cards pequeñas | ✅ Existe |
| `kit-bienvenida.png` | **Kit de Bienvenida** - Kit corporativo de bienvenida | **HeroSection (VerticalMarquee)**, Merchandising | **600x600px (1:1)** - Cards pequeñas | ✅ Existe |
| `libreta-ejecutiva.png` | **Libreta Ejecutiva** - Libreta A5 ejecutiva personalizada | **HeroSection (VerticalMarquee)**, Papelería, Producto Destacado | **600x600px (1:1)** - Cards pequeñas | ✅ Existe |
| `kit-corporativo.png` | **Kit Corporativo** - Kit completo de merchandising empresarial | Producto Destacado (galería) | 800x800px (1:1) | ✅ Existe |

> **NOTA HERO:** Las 6 imágenes de productos listadas arriba se usan en el **VerticalMarquee del Hero** (columna derecha). Las cards son más pequeñas (h-40) y tienen movimiento continuo en dos columnas con direcciones opuestas (arriba/abajo). Las imágenes deben ser cuadradas y optimizadas para mostrar bien en cards pequeñas.

**Estado:** 
- ✅ `agenda-premium.png` - Existe (usada en Hero VerticalMarquee) - **Optimizada a 600x600px**
- ✅ `agenda-sostenible.png` - Existe (usada en Hero VerticalMarquee) - **Optimizada a 600x600px**
- ✅ `botella-termica.png` - Existe (usada en Hero VerticalMarquee) - **Pendiente de imagen**
- ✅ `camiseta-corporativa.png` - Existe (usada en Hero VerticalMarquee) - **Pendiente de imagen**
- ✅ `kit-bienvenida.png` - Existe (usada en Hero VerticalMarquee) - **Pendiente de imagen**
- ✅ `libreta-ejecutiva.png` - Existe (usada en Hero VerticalMarquee) - **Optimizada a 600x600px**
- ✅ `kit-corporativo.png` - Existe - **Optimizada a 800x800px**

---

## 📂 CATEGORÍAS

### `/static/images/categories/`

| Archivo | Descripción | Uso | Dimensiones Recomendadas |
|---------|-------------|-----|--------------------------|
| `categoria-agendas-escolares.jpg` | **Categoría Agendas Escolares** - Imagen representativa de la categoría | Homepage, Página de Productos | 800x600px (4:3) |
| `categoria-merchandising-empresarial.jpg` | **Categoría Merchandising Empresarial** - Productos corporativos diversos | Homepage, Página de Productos | 800x600px (4:3) |
| `categoria-textil-personalizado.jpg` | **Categoría Textil Personalizado** - Ropa y textil con personalización | Homepage, Página de Productos | 800x600px (4:3) |
| `categoria-papeleria-libretas.jpg` | **Categoría Papelería y Libretas** - Material de oficina y libretas | Homepage, Página de Productos | 800x600px (4:3) |
| `categoria-productos-sostenibles.jpg` | **Categoría Productos Sostenibles** - Productos eco-friendly | Homepage, Página de Productos | 800x600px (4:3) |

**Estado:** ✅ **TODAS EXISTEN** - Verificar optimización y medidas

---

## 👥 EQUIPO

### `/static/images/team/`

| Archivo | Descripción | Uso | Dimensiones Recomendadas |
|---------|-------------|-----|--------------------------|
| `director-general.webp` | **María González - Directora General** - Foto profesional | Página Nosotros | 400x400px (1:1) |
| `director-comercial.webp` | **Juan Pérez - Director Comercial** - Foto profesional | Página Nosotros | 400x400px (1:1) |
| `disenadora-grafica.webp` | **Ana Martínez - Diseñadora Gráfica** - Foto profesional | Página Nosotros | 400x400px (1:1) |
| `responsable-produccion.webp` | **Carlos Ruiz - Responsable de Producción** - Foto profesional | Página Nosotros | 400x400px (1:1) |

**Estado:**
- ✅ `director-general.webp` - Existe
- ✅ `director-comercial.webp` - Existe
- ✅ `disenadora-grafica.webp` - Existe
- ✅ `responsable-produccion.webp` - Existe

---

## 📰 BLOG

### `/static/images/blog/`

| Archivo | Descripción | Uso | Dimensiones Recomendadas |
|---------|-------------|-----|--------------------------|
| `blog-merchandising-2025.jpg` | **10 ideas creativas para merchandising 2025** - Imagen del artículo | Página Blog | 800x500px (16:10) |
| `blog-agenda-escolar-perfecta.jpg` | **Cómo elegir la agenda escolar perfecta** - Imagen del artículo | Página Blog | 800x500px (16:10) |
| `blog-productos-ecofriendly.jpg` | **Productos eco-friendly: La tendencia** - Imagen del artículo | Página Blog | 800x500px (16:10) |
| `blog-preparar-archivos-impresion.jpg` | **Guía: Preparar archivos para impresión** - Imagen del artículo | Página Blog | 800x500px (16:10) |
| `blog-caso-exito-empresa-x.jpg` | **Caso de éxito: Empresa X renovó su imagen** - Imagen del artículo | Página Blog | 800x500px (16:10) |

**Estado:** ✅ **TODAS EXISTEN** - Verificar optimización y medidas

---

## 🏆 CASOS DE ÉXITO / PROYECTOS

### `/static/images/cases/`

| Archivo | Descripción | Uso | Dimensiones Recomendadas |
|---------|-------------|-----|--------------------------|
| `proyecto-colegio-san-juan.jpg` | **Proyecto Colegio San Juan** - Imagen del proyecto completo | Homepage - Casos de Éxito | 600x400px (3:2) |
| `proyecto-colegio-san-juan-logo.png` | **Logo Colegio San Juan** - Logo del cliente | Homepage - Casos de Éxito | 100x100px (1:1) |
| `proyecto-empresa-tech-solutions.jpg` | **Proyecto Tech Solutions** - Imagen del proyecto completo | Homepage - Casos de Éxito | 600x400px (3:2) |
| `proyecto-empresa-tech-solutions-logo.png` | **Logo Tech Solutions** - Logo del cliente | Homepage - Casos de Éxito | 100x100px (1:1) |
| `proyecto-universidad-madrid.jpg` | **Proyecto Universidad Madrid** - Imagen del proyecto completo | Homepage - Casos de Éxito | 600x400px (3:2) |
| `proyecto-universidad-madrid-logo.png` | **Logo Universidad Madrid** - Logo del cliente | Homepage - Casos de Éxito | 100x100px (1:1) |

**Estado:** ✅ **TODAS EXISTEN** - Verificar optimización y medidas

---

## 📜 CERTIFICACIONES

### `/static/images/certifications/`

| Archivo | Descripción | Uso | Dimensiones Recomendadas |
|---------|-------------|-----|--------------------------|
| `certificacion-iso-9001.png` | **Certificación ISO 9001** - Logo oficial ISO 9001 | Página Nosotros, Footer | 128x128px (1:1) |
| `certificacion-fsc.png` | **Certificación FSC** - Logo oficial FSC | Página Nosotros, Footer | 128x128px (1:1) |
| `certificacion-ecovadis.png` | **Certificación EcoVadis** - Logo oficial EcoVadis | Página Nosotros, Footer | 128x128px (1:1) |

**Estado:** ✅ **TODAS EXISTEN** - Verificar optimización y medidas

---

## 🏢 INSTALACIONES / SOBRE NOSOTROS

### `/static/images/about/`

| Archivo | Descripción | Uso | Dimensiones Recomendadas |
|---------|-------------|-----|--------------------------|
| `instalaciones-hero.jpg` | **Instalaciones Publisol** - Vista general de instalaciones o equipo trabajando | Página Nosotros - Hero | 1200x675px (16:9) |

**Estado:** ✅ **EXISTE** - Verificar optimización y medidas

---

## 📊 RESUMEN

### ✅ Imágenes Existentes (Todas las principales)

**Productos (7):**
- `products/agenda-premium.png` - **Usada en Hero VerticalMarquee**
- `products/agenda-sostenible.png` - **Usada en Hero VerticalMarquee**
- `products/botella-termica.png` - **Usada en Hero VerticalMarquee**
- `products/camiseta-corporativa.png` - **Usada en Hero VerticalMarquee**
- `products/kit-bienvenida.png` - **Usada en Hero VerticalMarquee**
- `products/libreta-ejecutiva.png` - **Usada en Hero VerticalMarquee**
- `products/kit-corporativo.png` - **Usada en galería de producto destacado**

**Categorías (5):**
- `categories/categoria-agendas-escolares.jpg` ✅ Existe
- `categories/categoria-merchandising-empresarial.jpg` ✅ Existe
- `categories/categoria-textil-personalizado.jpg` ✅ Existe
- `categories/categoria-papeleria-libretas.jpg` ✅ Existe
- `categories/categoria-productos-sostenibles.jpg` ✅ Existe

**Equipo (4):**
- `team/director-general.webp` ✅ Existe
- `team/director-comercial.webp` ✅ Existe
- `team/disenadora-grafica.webp` ✅ Existe
- `team/responsable-produccion.webp` ✅ Existe

**Blog (5):**
- `blog/blog-merchandising-2025.jpg` ✅ Existe
- `blog/blog-agenda-escolar-perfecta.jpg` ✅ Existe
- `blog/blog-productos-ecofriendly.jpg` ✅ Existe
- `blog/blog-preparar-archivos-impresion.jpg` ✅ Existe
- `blog/blog-caso-exito-empresa-x.jpg` ✅ Existe

**Casos de Éxito (6):**
- `cases/proyecto-colegio-san-juan.jpg` ✅ Existe
- `cases/proyecto-colegio-san-juan-logo.png` ✅ Existe
- `cases/proyecto-empresa-tech-solutions.jpg` ✅ Existe
- `cases/proyecto-empresa-tech-solutions-logo.png` ✅ Existe
- `cases/proyecto-universidad-madrid.jpg` ✅ Existe
- `cases/proyecto-universidad-madrid-logo.png` ✅ Existe

**Certificaciones (3):**
- `certifications/certificacion-iso-9001.png` ✅ Existe
- `certifications/certificacion-fsc.png` ✅ Existe
- `certifications/certificacion-ecovadis.png` ✅ Existe

**Sobre Nosotros (1):**
- `about/instalaciones-hero.jpg` ✅ Existe

**Nota:** ~~`hero/main-hero-bg.jpg`~~ - **YA NO SE USA** (Hero ahora usa fondo sólido)

### ⚠️ Imágenes que Necesitan Verificación/Optimización

**Nota:** Todas las imágenes principales existen en el proyecto. Sin embargo, muchas están siendo referenciadas con URLs de Unsplash (placeholders) en el código y deben reemplazarse con las imágenes locales.

**Imágenes con Placeholders en el Código (PRIORIDAD ALTA):**

**Categorías (5):** - Reemplazar URLs de Unsplash en `+page.svelte`
- `categories/categoria-agendas-escolares.jpg` ✅ Existe
- `categories/categoria-merchandising-empresarial.jpg` ✅ Existe
- `categories/categoria-textil-personalizado.jpg` ✅ Existe
- `categories/categoria-papeleria-libretas.jpg` ✅ Existe
- `categories/categoria-productos-sostenibles.jpg` ✅ Existe

**Casos de Éxito (6):** - Reemplazar URLs de Unsplash en `+page.svelte`
- `cases/proyecto-colegio-san-juan.jpg` ✅ Existe
- `cases/proyecto-colegio-san-juan-logo.png` ✅ Existe
- `cases/proyecto-empresa-tech-solutions.jpg` ✅ Existe
- `cases/proyecto-empresa-tech-solutions-logo.png` ✅ Existe
- `cases/proyecto-universidad-madrid.jpg` ✅ Existe
- `cases/proyecto-universidad-madrid-logo.png` ✅ Existe

**Blog (5):** - Reemplazar URLs de Unsplash en `blog/+page.svelte`
- `blog/blog-merchandising-2025.jpg` ✅ Existe
- `blog/blog-agenda-escolar-perfecta.jpg` ✅ Existe
- `blog/blog-productos-ecofriendly.jpg` ✅ Existe
- `blog/blog-preparar-archivos-impresion.jpg` ✅ Existe
- `blog/blog-caso-exito-empresa-x.jpg` ✅ Existe

**Equipo (4):** - Todas existen
- `team/director-general.webp` ✅ Existe
- `team/director-comercial.webp` ✅ Existe
- `team/disenadora-grafica.webp` ✅ Existe
- `team/responsable-produccion.webp` ✅ Existe

**Certificaciones (3):** - Todas existen
- `certifications/certificacion-iso-9001.png` ✅ Existe
- `certifications/certificacion-fsc.png` ✅ Existe
- `certifications/certificacion-ecovadis.png` ✅ Existe

**Sobre Nosotros (1):** - Existe
- `about/instalaciones-hero.jpg` ✅ Existe

**SEO/OG Image (1):** - Falta crear
- `og-image.jpg` ❌ Falta crear (1200x630px)

---

## 📝 NOTAS IMPORTANTES

1. **Formatos:**
   - Productos: PNG (transparencia si es necesario)
   - Fotos: JPG (optimizado) o WebP (mejor compresión)
   - Logos: PNG (transparencia)

2. **Optimización:**
   - Todas las imágenes deben estar optimizadas para web
   - Usar WebP cuando sea posible para mejor rendimiento
   - Mantener tamaños razonables (máx 500KB por imagen)

3. **Nombres:**
   - Usar nombres descriptivos en minúsculas
   - Separar palabras con guiones
   - Incluir extensión correcta (.jpg, .png, .webp)

4. **Rutas en el código:**
   - Las rutas en el código usan `/images/` (se resuelven desde `static/`)
   - Ejemplo: `/images/products/agenda-premium.png` → `static/images/products/agenda-premium.png`

5. **⚠️ IMPORTANTE - Placeholders:**
   - Muchas imágenes existen en `static/images/` pero el código aún usa URLs de Unsplash
   - Ver documento `ESPECIFICACIONES_CANVA.md` para detalles completos
   - Prioridad: Reemplazar placeholders en categorías y casos de éxito (homepage)

---

## 🚀 PRÓXIMOS PASOS

1. ✅ Las carpetas y la mayoría de imágenes ya existen
2. ⚠️ **PRIORIDAD:** Reemplazar URLs de Unsplash en el código con rutas locales
   - Categorías en `+page.svelte` (líneas 84, 92, 100, 108, 116)
   - Casos de éxito en `+page.svelte` (líneas 142, 158, 174)
   - Blog en `blog/+page.svelte` (líneas 20, 31, 42, 53, 64)
3. Crear imagen SEO/OG (`og-image.jpg` - 1200x630px)
4. Verificar optimización de todas las imágenes existentes
5. Usar `ESPECIFICACIONES_CANVA.md` como guía para crear nuevas imágenes o reemplazar existentes

