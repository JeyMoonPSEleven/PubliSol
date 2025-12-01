# 🎨 ESPECIFICACIONES COMPLETAS PARA CANVA PRO - PUBLISOL

Este documento contiene todas las especificaciones detalladas para crear las imágenes del proyecto Publisol en Canva Pro. Cada imagen incluye medidas exactas, formato, descripción del contenido y palabras clave para búsqueda.

> **📖 Guía de uso:** Consulta también `GUIA_CANVA_MCP.md` para instrucciones paso a paso sobre cómo configurar Canva MCP y usar estas especificaciones.

---

## 📋 ÍNDICE

1. [Productos](#productos)
2. [Categorías](#categorías)
3. [Equipo](#equipo)
4. [Blog](#blog)
5. [Casos de Éxito](#casos-de-éxito)
6. [Certificaciones](#certificaciones)
7. [Sobre Nosotros](#sobre-nosotros)
8. [SEO y Open Graph](#seo-y-open-graph)
9. [Placeholders a Reemplazar](#placeholders-a-reemplazar)

---

## 🛍️ PRODUCTOS

### Imágenes para Hero VerticalMarquee

Estas imágenes se muestran en el Hero principal en cards pequeñas (h-40) con movimiento continuo. Deben ser cuadradas y optimizadas para visualización pequeña.

| Archivo | Dimensiones Canva | Formato | Aspect Ratio | Estado | Prioridad |
|---------|-------------------|---------|--------------|--------|-----------|
| `agenda-premium.png` | 600x600px | PNG (transparencia) | 1:1 | ✅ Existe | Media |
| `agenda-sostenible.png` | 600x600px | PNG (transparencia) | 1:1 | ✅ Existe | Media |
| `botella-termica.png` | 600x600px | PNG (transparencia) | 1:1 | ✅ Existe | Media |
| `camiseta-corporativa.png` | 600x600px | PNG (transparencia) | 1:1 | ✅ Existe | Media |
| `kit-bienvenida.png` | 600x600px | PNG (transparencia) | 1:1 | ✅ Existe | Media |
| `libreta-ejecutiva.png` | 600x600px | PNG (transparencia) | 1:1 | ✅ Existe | Media |

**Ruta en código:** `packages/client-example/src/lib/components/organisms/HeroSection.svelte` (líneas 34, 41, 48, 55, 62, 69)

**Descripción del contenido:**
- **Agenda Premium**: Agenda escolar o corporativa de alta gama, vista frontal o abierta mostrando páginas interiores
- **Agenda Sostenible**: Agenda ecológica con materiales reciclados, destacar certificación FSC
- **Botella Térmica**: Botella térmica personalizada, vista frontal con logo/estampado visible
- **Camiseta Corporativa**: Camiseta con logo personalizado, vista frontal o en maniquí
- **Kit de Bienvenida**: Kit corporativo con múltiples productos (libreta, bolígrafo, USB, etc.)
- **Libreta Ejecutiva**: Libreta A5 ejecutiva personalizada, vista frontal o abierta

**Palabras clave Canva:**
- Agenda: "school planner", "notebook", "agenda", "diary", "stationery"
- Botella: "water bottle", "tumbler", "thermos", "reusable bottle"
- Camiseta: "t-shirt", "corporate apparel", "custom shirt", "promotional clothing"
- Kit: "corporate kit", "welcome pack", "business gift set", "promotional items"
- Libreta: "executive notebook", "notebook", "journal", "writing pad"

**Estilo recomendado:**
- Fondo blanco o transparente
- Iluminación profesional
- Producto centrado
- Colores corporativos si aplica (verde primario, azul secundario)

---

### Imágenes para Galería de Producto Destacado

| Archivo | Dimensiones Canva | Formato | Aspect Ratio | Estado | Prioridad |
|---------|-------------------|---------|--------------|--------|-----------|
| `kit-corporativo.png` | 800x800px | PNG (transparencia) | 1:1 | ✅ Existe | Media |

**Ruta en código:** `packages/client-example/src/routes/producto-destacado/+page.svelte` (línea 55)

**Descripción:** Kit completo de merchandising empresarial (puede incluir: bolígrafo, libreta, USB, mochila, etc.) dispuesto de forma atractiva

**Palabras clave Canva:** "corporate gift set", "business kit", "promotional package", "executive gift box"

---

## 📂 CATEGORÍAS

Estas imágenes se usan en el grid de categorías de la homepage. Actualmente usan URLs de Unsplash que deben reemplazarse.

| Archivo | Dimensiones Canva | Formato | Aspect Ratio | Estado | Prioridad |
|---------|-------------------|---------|--------------|--------|-----------|
| `categoria-agendas-escolares.jpg` | 800x600px | JPG (optimizado) | 4:3 | ✅ Existe | **ALTA** |
| `categoria-merchandising-empresarial.jpg` | 800x600px | JPG (optimizado) | 4:3 | ✅ Existe | **ALTA** |
| `categoria-textil-personalizado.jpg` | 800x600px | JPG (optimizado) | 4:3 | ✅ Existe | **ALTA** |
| `categoria-papeleria-libretas.jpg` | 800x600px | JPG (optimizado) | 4:3 | ✅ Existe | **ALTA** |
| `categoria-productos-sostenibles.jpg` | 800x600px | JPG (optimizado) | 4:3 | ✅ Existe | **ALTA** |

**Ruta en código:** `packages/client-example/src/routes/+page.svelte` (líneas 84, 92, 100, 108, 116)

**Descripción del contenido:**

1. **Agendas Escolares** (línea 84)
   - Contenido: Agendas escolares apiladas o abiertas mostrando páginas, ambiente educativo
   - Palabras clave: "school notebooks", "student planners", "educational materials", "school supplies"
   - Estilo: Profesional, educativo, colores vivos pero corporativos

2. **Textil y Uniformidad** (línea 92)
   - Contenido: Uniformes escolares o ropa corporativa colgada o en maniquí, textil de calidad
   - Palabras clave: "school uniforms", "corporate clothing", "custom apparel", "textile products"
   - Estilo: Profesional, textil visible, colores corporativos

3. **Merchandising y Viajes Fin de Curso** (línea 100)
   - Contenido: Productos de merchandising diversos (sudaderas, camisetas, mochilas) para financiar viajes
   - Palabras clave: "promotional products", "merchandise", "corporate gifts", "branded items"
   - Estilo: Dinámico, juvenil pero profesional, productos variados

4. **Packs Erasmus** (línea 108)
   - Contenido: Mochila, powerbank, botella, agenda de viaje dispuestos juntos
   - Palabras clave: "travel pack", "erasmus kit", "student travel", "backpack set"
   - Estilo: Moderno, viajero, productos de viaje

5. **Regalos Institucionales** (línea 116)
   - Contenido: Bolígrafos premium, tote bags ecológicos, libretas ejecutivas, material de oficina
   - Palabras clave: "corporate gifts", "executive stationery", "business gifts", "premium office supplies"
   - Estilo: Elegante, premium, profesional

**Nota importante:** Estas imágenes tienen **PRIORIDAD ALTA** porque son visibles en la homepage y actualmente usan placeholders de Unsplash.

---

## 👥 EQUIPO

Fotos profesionales del equipo para la página "Nosotros". Formato cuadrado para avatares.

| Archivo | Dimensiones Canva | Formato | Aspect Ratio | Estado | Prioridad |
|---------|-------------------|---------|--------------|--------|-----------|
| `director-general.webp` | 400x400px | WebP (optimizado) | 1:1 | ✅ Existe | Media |
| `director-comercial.webp` | 400x400px | WebP (optimizado) | 1:1 | ✅ Existe | Media |
| `disenadora-grafica.webp` | 400x400px | WebP (optimizado) | 1:1 | ✅ Existe | Media |
| `responsable-produccion.webp` | 400x400px | WebP (optimizado) | 1:1 | ✅ Existe | Media |

**Ruta en código:** `packages/client-example/src/routes/nosotros/+page.svelte` (líneas 58, 64, 70, 76)

**Descripción del contenido:**
- Fotos profesionales tipo headshot
- Fondo neutro o con blur
- Iluminación profesional
- Sonrisa amigable pero profesional

**Palabras clave Canva:** "professional headshot", "business portrait", "corporate photo", "team member"

**Estilo recomendado:**
- Fondo blanco o con blur
- Iluminación suave y profesional
- Vestimenta corporativa
- Expresión amigable y profesional

---

## 📰 BLOG

Imágenes de portada para artículos del blog. Formato horizontal para cards de blog.

| Archivo | Dimensiones Canva | Formato | Aspect Ratio | Estado | Prioridad |
|---------|-------------------|---------|--------------|--------|-----------|
| `blog-merchandising-2025.jpg` | 800x500px | JPG (optimizado) | 16:10 | ✅ Existe | Media |
| `blog-agenda-escolar-perfecta.jpg` | 800x500px | JPG (optimizado) | 16:10 | ✅ Existe | Media |
| `blog-productos-ecofriendly.jpg` | 800x500px | JPG (optimizado) | 16:10 | ✅ Existe | Media |
| `blog-preparar-archivos-impresion.jpg` | 800x500px | JPG (optimizado) | 16:10 | ✅ Existe | Media |
| `blog-caso-exito-empresa-x.jpg` | 800x500px | JPG (optimizado) | 16:10 | ✅ Existe | Media |

**Ruta en código:** `packages/client-example/src/routes/blog/+page.svelte` (líneas 20, 31, 42, 53, 64)

**Descripción del contenido:**

1. **10 ideas creativas para merchandising 2025** (línea 20)
   - Contenido: Productos de merchandising creativos y modernos, tendencias 2025
   - Palabras clave: "promotional products 2025", "creative merchandise", "corporate gifts", "branded items"
   - Estilo: Moderno, creativo, productos diversos

2. **Cómo elegir la agenda escolar perfecta** (línea 31)
   - Contenido: Agendas escolares abiertas mostrando diferentes formatos, comparativa
   - Palabras clave: "school planner", "student diary", "educational planner", "notebook selection"
   - Estilo: Educativo, comparativo, profesional

3. **Productos eco-friendly: La tendencia** (línea 42)
   - Contenido: Productos sostenibles, materiales ecológicos, certificaciones verdes
   - Palabras clave: "eco-friendly products", "sustainable merchandise", "green products", "environmental"
   - Estilo: Natural, verde, sostenible, certificaciones visibles

4. **Guía: Preparar archivos para impresión** (línea 53)
   - Contenido: Diseño gráfico, archivos digitales, proceso de impresión, herramientas
   - Palabras clave: "print design", "graphic design", "printing guide", "design files"
   - Estilo: Técnico pero accesible, diseño gráfico, proceso

5. **Casos de éxito: Empresa X renovó su imagen** (línea 64)
   - Contenido: Antes/después, transformación corporativa, productos personalizados
   - Palabras clave: "corporate rebranding", "brand transformation", "business success", "case study"
   - Estilo: Profesional, transformación, éxito empresarial

---

## 🏆 CASOS DE ÉXITO

Imágenes de proyectos y logos de clientes para la sección de casos de éxito en homepage.

### Imágenes de Proyectos

| Archivo | Dimensiones Canva | Formato | Aspect Ratio | Estado | Prioridad |
|---------|-------------------|---------|--------------|--------|-----------|
| `proyecto-colegio-san-juan.jpg` | 600x400px | JPG (optimizado) | 3:2 | ✅ Existe | **ALTA** |
| `proyecto-empresa-tech-solutions.jpg` | 600x400px | JPG (optimizado) | 3:2 | ✅ Existe | **ALTA** |
| `proyecto-universidad-madrid.jpg` | 600x400px | JPG (optimizado) | 3:2 | ✅ Existe | **ALTA** |

**Ruta en código:** `packages/client-example/src/routes/+page.svelte` (líneas 142, 158, 174)

**Descripción del contenido:**

1. **Proyecto Colegio San Juan** (línea 142)
   - Cliente: Colegio San José (según código)
   - Contenido: Agendas escolares personalizadas, productos del proyecto, ambiente educativo
   - Palabras clave: "school project", "custom school supplies", "educational products", "student materials"
   - Estilo: Educativo, profesional, productos escolares visibles

2. **Proyecto TechCorp Solutions** (línea 158)
   - Cliente: TechCorp Solutions
   - Contenido: Kits de bienvenida corporativos, productos de onboarding, ambiente empresarial
   - Palabras clave: "corporate welcome kit", "employee onboarding", "business kit", "corporate gifts"
   - Estilo: Corporativo, moderno, profesional

3. **Proyecto Universidad Madrid** (línea 174)
   - Cliente: Asociación Deportiva (según código)
   - Contenido: Uniformes deportivos, equipaciones, productos deportivos personalizados
   - Palabras clave: "sports uniforms", "athletic apparel", "team uniforms", "sports equipment"
   - Estilo: Deportivo, dinámico, profesional

### Logos de Clientes

| Archivo | Dimensiones Canva | Formato | Aspect Ratio | Estado | Prioridad |
|---------|-------------------|---------|--------------|--------|-----------|
| `proyecto-colegio-san-juan-logo.png` | 100x100px | PNG (transparencia) | 1:1 | ✅ Existe | Media |
| `proyecto-empresa-tech-solutions-logo.png` | 100x100px | PNG (transparencia) | 1:1 | ✅ Existe | Media |
| `proyecto-universidad-madrid-logo.png` | 100x100px | PNG (transparencia) | 1:1 | ✅ Existe | Media |

**Ruta en código:** `packages/client-example/src/routes/+page.svelte` (líneas 143, 159, 175)

**Descripción:** Logos de los clientes en formato pequeño para mostrar en las cards de casos de éxito. Deben tener fondo transparente.

**Nota importante:** Las imágenes de proyectos tienen **PRIORIDAD ALTA** porque son visibles en la homepage y actualmente usan placeholders de Unsplash.

---

## 📜 CERTIFICACIONES

Logos oficiales de certificaciones para mostrar en footer y página Nosotros.

| Archivo | Dimensiones Canva | Formato | Aspect Ratio | Estado | Prioridad |
|---------|-------------------|---------|--------------|--------|-----------|
| `certificacion-iso-9001.png` | 128x128px | PNG (transparencia) | 1:1 | ✅ Existe | Baja |
| `certificacion-fsc.png` | 128x128px | PNG (transparencia) | 1:1 | ✅ Existe | Baja |
| `certificacion-ecovadis.png` | 128x128px | PNG (transparencia) | 1:1 | ✅ Existe | Baja |

**Descripción:** Logos oficiales de certificaciones. Deben descargarse de las fuentes oficiales o usar versiones oficiales disponibles en Canva.

**Palabras clave Canva:** "ISO 9001 logo", "FSC certification", "EcoVadis logo", "quality certification"

**Nota:** Estos logos deben ser oficiales. Si no están disponibles en Canva, descargarlos de las webs oficiales de las certificaciones.

---

## 🏢 SOBRE NOSOTROS

Imagen hero para la página "Nosotros".

| Archivo | Dimensiones Canva | Formato | Aspect Ratio | Estado | Prioridad |
|---------|-------------------|---------|--------------|--------|-----------|
| `instalaciones-hero.jpg` | 1200x675px | JPG (optimizado) | 16:9 | ✅ Existe | Media |

**Ruta en código:** `packages/client-example/src/routes/nosotros/+page.svelte` (línea 100 - placeholder actual)

**Descripción del contenido:**
- Vista general de instalaciones de Publisol
- Equipo trabajando
- Ambiente profesional y moderno
- Proceso de producción visible (opcional)

**Palabras clave Canva:** "printing facility", "manufacturing", "corporate workspace", "production facility", "team working"

**Estilo recomendado:**
- Profesional
- Iluminación natural
- Equipo visible trabajando
- Instalaciones modernas

---

## 🔍 SEO Y OPEN GRAPH

Imagen para SEO y Open Graph (redes sociales).

| Archivo | Dimensiones Canva | Formato | Aspect Ratio | Estado | Prioridad |
|---------|-------------------|---------|--------------|--------|-----------|
| `og-image.jpg` | 1200x630px | JPG (optimizado) | 1.91:1 | ❌ Falta | Media |

**Ruta en código:** 
- `packages/client-example/src/routes/+page.svelte` (línea 309)
- `packages/client-example/src/lib/components/Seo.svelte` (línea 18)

**Descripción del contenido:**
- Logo de Publisol
- Texto: "Publisol - Agendas y Merchandising Personalizado desde 1995"
- Diseño profesional y atractivo
- Colores corporativos

**Palabras clave Canva:** "social media image", "og image", "facebook cover", "linkedin banner"

**Estilo recomendado:**
- Diseño gráfico con logo y texto
- Colores corporativos (verde primario, azul secundario)
- Profesional y moderno
- Texto legible en tamaño pequeño

---

## 🔄 PLACEHOLDERS A REEMPLAZAR

### Resumen de URLs de Unsplash que deben reemplazarse

#### Homepage - Categorías (5 imágenes)
- `+page.svelte` línea 84: `categoria-agendas-escolares.jpg`
- `+page.svelte` línea 92: `categoria-textil-personalizado.jpg`
- `+page.svelte` línea 100: `categoria-merchandising-empresarial.jpg`
- `+page.svelte` línea 108: `categoria-papeleria-libretas.jpg` (Packs Erasmus)
- `+page.svelte` línea 116: `categoria-productos-sostenibles.jpg` (Regalos Institucionales)

#### Homepage - Casos de Éxito (6 imágenes)
- `+page.svelte` línea 142: `proyecto-colegio-san-juan.jpg`
- `+page.svelte` línea 143: `proyecto-colegio-san-juan-logo.png`
- `+page.svelte` línea 158: `proyecto-empresa-tech-solutions.jpg`
- `+page.svelte` línea 159: `proyecto-empresa-tech-solutions-logo.png`
- `+page.svelte` línea 174: `proyecto-universidad-madrid.jpg`
- `+page.svelte` línea 175: `proyecto-universidad-madrid-logo.png`

#### Blog (5 imágenes)
- `blog/+page.svelte` línea 20: `blog-merchandising-2025.jpg`
- `blog/+page.svelte` línea 31: `blog-agenda-escolar-perfecta.jpg`
- `blog/+page.svelte` línea 42: `blog-productos-ecofriendly.jpg`
- `blog/+page.svelte` línea 53: `blog-preparar-archivos-impresion.jpg`
- `blog/+page.svelte` línea 64: `blog-caso-exito-empresa-x.jpg`

#### SEO
- `+page.svelte` línea 309: `og-image.jpg` (o usar imagen existente)
- `Seo.svelte` línea 18: `og-image.jpg` (fallback)

#### Otras páginas
- `productos/+page.svelte`: Múltiples productos con placeholders
- `productos/agendas-escolares/+page.svelte`: Productos con placeholders
- `productos/textil/+page.svelte`: Productos con placeholders
- `productos/merchandising/+page.svelte`: Productos con placeholders
- `productos/papeleria/+page.svelte`: Productos con placeholders
- `productos/sostenibles/+page.svelte`: Productos con placeholders
- `catalogos/+page.svelte`: Catálogos con placeholders
- `producto/[slug]/+page.svelte`: Galerías de productos con placeholders

**Nota:** Las páginas de productos individuales usan placeholders genéricos. Estas pueden crearse después de las imágenes principales.

---

## 📊 RESUMEN POR PRIORIDAD

### 🔴 PRIORIDAD ALTA (Crear primero)
1. **Categorías** (5 imágenes) - 800x600px
2. **Casos de Éxito - Proyectos** (3 imágenes) - 600x400px

**Total:** 8 imágenes

### 🟡 PRIORIDAD MEDIA (Crear después)
1. **Blog** (5 imágenes) - 800x500px
2. **Equipo** (3 imágenes faltantes) - 400x400px
3. **Productos** (verificar optimización) - 600x600px y 800x800px
4. **Sobre Nosotros** (1 imagen) - 1200x675px
5. **SEO/OG Image** (1 imagen) - 1200x630px

**Total:** 13 imágenes

### 🟢 PRIORIDAD BAJA (Crear al final)
1. **Certificaciones** (3 logos) - 128x128px
2. **Logos de clientes** (3 logos) - 100x100px
3. **Productos de páginas individuales** (múltiples) - 600x600px

**Total:** 6+ imágenes

---

## 🎨 GUÍA DE ESTILO PARA CANVA

### Paleta de Colores
- **Primario:** Verde (#10B981 o similar)
- **Secundario:** Azul (#3B82F6 o similar)
- **Fondo:** Blanco o gris muy claro
- **Texto:** Gris oscuro (#1F2937) o negro

### Tipografía
- **Títulos:** Sans-serif moderna y profesional
- **Cuerpo:** Legible y clara

### Estilo General
- **Iluminación:** Profesional, natural
- **Composición:** Centrada, balanceada
- **Calidad:** Alta resolución, nítida
- **Estética:** Moderna, limpia, profesional

### Elementos a Evitar
- Fondos muy ocupados
- Texto sobre imágenes (a menos que sea necesario)
- Colores muy saturados
- Imágenes pixeladas o de baja calidad

---

## 📝 INSTRUCCIONES PARA CANVA PRO

### Proceso de Creación

1. **Abrir Canva Pro**
2. **Crear diseño personalizado** con las dimensiones exactas especificadas
3. **Buscar imágenes** usando las palabras clave proporcionadas
4. **Aplicar filtros/ajustes** según el estilo recomendado
5. **Exportar** en el formato especificado:
   - PNG para transparencia (productos, logos)
   - JPG para fotografías (blog, categorías, casos)
   - WebP si Canva lo soporta (equipo)
6. **Optimizar** el tamaño del archivo (objetivo: <500KB)
7. **Guardar** con el nombre exacto especificado
8. **Subir** a `packages/client-example/static/images/[carpeta]/`

### Consejos de Optimización

- **PNG:** Usar compresión sin pérdida de calidad visible
- **JPG:** Calidad 85-90% para web
- **WebP:** Mejor compresión, usar cuando sea posible
- **Tamaño:** Reducir dimensiones si el archivo supera 500KB
- **Resolución:** 72 DPI es suficiente para web

---

## ✅ CHECKLIST DE CREACIÓN

### Fase 1: Prioridad Alta (8 imágenes)
- [ ] `categoria-agendas-escolares.jpg` - 800x600px
- [ ] `categoria-merchandising-empresarial.jpg` - 800x600px
- [ ] `categoria-textil-personalizado.jpg` - 800x600px
- [ ] `categoria-papeleria-libretas.jpg` - 800x600px
- [ ] `categoria-productos-sostenibles.jpg` - 800x600px
- [ ] `proyecto-colegio-san-juan.jpg` - 600x400px
- [ ] `proyecto-empresa-tech-solutions.jpg` - 600x400px
- [ ] `proyecto-universidad-madrid.jpg` - 600x400px

### Fase 2: Prioridad Media (13 imágenes)
- [ ] `blog-merchandising-2025.jpg` - 800x500px
- [ ] `blog-agenda-escolar-perfecta.jpg` - 800x500px
- [ ] `blog-productos-ecofriendly.jpg` - 800x500px
- [ ] `blog-preparar-archivos-impresion.jpg` - 800x500px
- [ ] `blog-caso-exito-empresa-x.jpg` - 800x500px
- [ ] `director-comercial.webp` - 400x400px (si falta)
- [ ] `disenadora-grafica.webp` - 400x400px (si falta)
- [ ] `responsable-produccion.webp` - 400x400px (si falta)
- [ ] `instalaciones-hero.jpg` - 1200x675px
- [ ] `og-image.jpg` - 1200x630px
- [ ] Verificar optimización de productos existentes

### Fase 3: Prioridad Baja (6+ imágenes)
- [ ] `certificacion-iso-9001.png` - 128x128px
- [ ] `certificacion-fsc.png` - 128x128px
- [ ] `certificacion-ecovadis.png` - 128x128px
- [ ] `proyecto-colegio-san-juan-logo.png` - 100x100px
- [ ] `proyecto-empresa-tech-solutions-logo.png` - 100x100px
- [ ] `proyecto-universidad-madrid-logo.png` - 100x100px

---

## 🔗 REFERENCIAS ÚTILES

### Documentación Relacionada
- `INVENTARIO_IMAGENES.md` - Inventario completo de imágenes
- `GUIA_SUBIDA_IMAGENES.md` - Guía rápida para subir imágenes

### Rutas en el Código
- Homepage: `packages/client-example/src/routes/+page.svelte`
- Blog: `packages/client-example/src/routes/blog/+page.svelte`
- Nosotros: `packages/client-example/src/routes/nosotros/+page.svelte`
- Hero: `packages/client-example/src/lib/components/organisms/HeroSection.svelte`

---

**Última actualización:** 2025-01-XX
**Versión:** 1.0

