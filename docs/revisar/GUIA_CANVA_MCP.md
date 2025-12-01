# 🎨 GUÍA RÁPIDA: CONFIGURACIÓN CANVA MCP Y USO

Esta guía explica cómo configurar el servidor MCP de Canva en Cursor y cómo usar las especificaciones para crear imágenes.

---

## 📋 CONFIGURACIÓN DEL MCP DE CANVA

### Paso 1: Crear archivo de configuración

1. **Crear directorio** (si no existe):
   ```bash
   mkdir -p .cursor
   ```

2. **Crear archivo** `.cursor/mcp.json` en la raíz del proyecto:
   ```json
   {
     "mcpServers": {
       "Canva": {
         "command": "npx",
         "args": [
           "-y",
           "mcp-remote@latest",
           "https://mcp.canva.com/mcp"
         ]
       }
     }
   }
   ```

### Paso 2: Verificar requisitos

- **Node.js:** Versión 22.16 o superior
  ```bash
  node --version
  ```
  Si no tienes Node.js 22.16+, instálalo desde [nodejs.org](https://nodejs.org/)

### Paso 3: Reiniciar Cursor

1. Guarda todos los archivos
2. Cierra completamente Cursor
3. Vuelve a abrir Cursor

### Paso 4: Autorizar Canva

1. Al usar el MCP de Canva por primera vez, se abrirá una ventana del navegador
2. Inicia sesión en tu cuenta de Canva Pro
3. Autoriza el acceso al Canva AI Connector
4. Haz clic en **"Allow"** (Permitir)

### Paso 5: Verificar conexión

Para probar que funciona, puedes preguntar al asistente:
> "Muestra mis diseños más recientes en Canva"

Si la conexión es exitosa, verás una solicitud de uso de herramienta que debes aprobar.

---

## 🎯 USO DE LAS ESPECIFICACIONES

### Documento principal

Usa el archivo **`ESPECIFICACIONES_CANVA.md`** como referencia completa. Contiene:

- ✅ Dimensiones exactas para cada imagen
- ✅ Formatos de exportación (PNG, JPG, WebP)
- ✅ Descripciones detalladas del contenido
- ✅ Palabras clave para búsqueda en Canva
- ✅ Estilos recomendados
- ✅ Prioridades de creación

### Proceso de creación en Canva Pro

1. **Abrir Canva Pro**
   - Ve a [canva.com](https://www.canva.com)
   - Inicia sesión con tu cuenta Pro

2. **Crear diseño personalizado**
   - Haz clic en "Crear un diseño"
   - Selecciona "Tamaño personalizado"
   - Ingresa las dimensiones exactas del documento `ESPECIFICACIONES_CANVA.md`
   - Ejemplo: 800x600px para categorías

3. **Buscar imágenes**
   - Usa la barra de búsqueda de Canva
   - Ingresa las palabras clave del documento
   - Filtra por "Fotos" o "Ilustraciones" según corresponda

4. **Aplicar estilo**
   - Sigue las recomendaciones de estilo del documento
   - Usa la paleta de colores corporativa (verde primario, azul secundario)
   - Mantén el diseño limpio y profesional

5. **Exportar**
   - Haz clic en "Descargar"
   - Selecciona el formato especificado:
     - **PNG** para transparencia (productos, logos)
     - **JPG** para fotografías (blog, categorías)
     - **WebP** si está disponible (equipo)
   - Asegúrate de que la calidad sea alta pero el tamaño <500KB

6. **Guardar con nombre exacto**
   - Usa el nombre exacto del archivo del documento
   - Ejemplo: `categoria-agendas-escolares.jpg`
   - Guarda en la ubicación correcta: `packages/client-example/static/images/[carpeta]/`

---

## 📁 ESTRUCTURA DE CARPETAS

Las imágenes deben guardarse en:

```
packages/client-example/static/images/
├── products/          # Imágenes de productos
├── categories/        # Imágenes de categorías
├── team/              # Fotos del equipo
├── blog/              # Imágenes de artículos del blog
├── cases/             # Casos de éxito / proyectos
├── certifications/    # Logos de certificaciones
└── about/             # Imágenes sobre nosotros
```

---

## 🎨 PRIORIDADES DE CREACIÓN

### 🔴 PRIORIDAD ALTA (Crear primero)

Estas imágenes son visibles en la homepage y actualmente usan placeholders:

1. **Categorías** (5 imágenes) - 800x600px
   - `categoria-agendas-escolares.jpg`
   - `categoria-merchandising-empresarial.jpg`
   - `categoria-textil-personalizado.jpg`
   - `categoria-papeleria-libretas.jpg`
   - `categoria-productos-sostenibles.jpg`

2. **Casos de Éxito - Proyectos** (3 imágenes) - 600x400px
   - `proyecto-colegio-san-juan.jpg`
   - `proyecto-empresa-tech-solutions.jpg`
   - `proyecto-universidad-madrid.jpg`

**Total:** 8 imágenes

### 🟡 PRIORIDAD MEDIA (Crear después)

1. **Blog** (5 imágenes) - 800x500px
2. **SEO/OG Image** (1 imagen) - 1200x630px
3. **Sobre Nosotros** (1 imagen) - 1200x675px

**Total:** 7 imágenes

### 🟢 PRIORIDAD BAJA (Crear al final)

1. **Certificaciones** (3 logos) - 128x128px
2. **Logos de clientes** (3 logos) - 100x100px

**Total:** 6 imágenes

---

## 🔄 REEMPLAZAR PLACEHOLDERS EN EL CÓDIGO

Después de crear las imágenes, debes reemplazar las URLs de Unsplash en el código:

### Homepage - Categorías

**Archivo:** `packages/client-example/src/routes/+page.svelte`

**Línea 84:**
```svelte
// ANTES:
image: "https://images.unsplash.com/photo-1503676260728-1c00e094b736?w=800&h=600&fit=crop&q=80",

// DESPUÉS:
image: "/images/categories/categoria-agendas-escolares.jpg",
```

**Línea 92:**
```svelte
// ANTES:
image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80",

// DESPUÉS:
image: "/images/categories/categoria-textil-personalizado.jpg",
```

**Línea 100:**
```svelte
// ANTES:
image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=600&fit=crop&q=80",

// DESPUÉS:
image: "/images/categories/categoria-merchandising-empresarial.jpg",
```

**Línea 108:**
```svelte
// ANTES:
image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=600&fit=crop&q=80",

// DESPUÉS:
image: "/images/categories/categoria-papeleria-libretas.jpg",
```

**Línea 116:**
```svelte
// ANTES:
image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop&q=80",

// DESPUÉS:
image: "/images/categories/categoria-productos-sostenibles.jpg",
```

### Homepage - Casos de Éxito

**Archivo:** `packages/client-example/src/routes/+page.svelte`

**Líneas 142-143:**
```svelte
// ANTES:
image: "https://images.unsplash.com/photo-1503676260728-1c00e094b736?w=600&h=400&fit=crop&q=80",
logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop&q=80",

// DESPUÉS:
image: "/images/cases/proyecto-colegio-san-juan.jpg",
logo: "/images/cases/proyecto-colegio-san-juan-logo.png",
```

**Líneas 158-159:**
```svelte
// ANTES:
image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&h=400&fit=crop&q=80",
logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop&q=80",

// DESPUÉS:
image: "/images/cases/proyecto-empresa-tech-solutions.jpg",
logo: "/images/cases/proyecto-empresa-tech-solutions-logo.png",
```

**Líneas 174-175:**
```svelte
// ANTES:
image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=80",
logo: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=100&h=100&fit=crop&q=80",

// DESPUÉS:
image: "/images/cases/proyecto-universidad-madrid.jpg",
logo: "/images/cases/proyecto-universidad-madrid-logo.png",
```

### Blog

**Archivo:** `packages/client-example/src/routes/blog/+page.svelte`

**Línea 20:**
```svelte
// ANTES:
image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=500&fit=crop&q=80",

// DESPUÉS:
image: "/images/blog/blog-merchandising-2025.jpg",
```

**Línea 31:**
```svelte
// ANTES:
image: "https://images.unsplash.com/photo-1503676260728-1c00e094b736?w=800&h=500&fit=crop&q=80",

// DESPUÉS:
image: "/images/blog/blog-agenda-escolar-perfecta.jpg",
```

**Línea 42:**
```svelte
// ANTES:
image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=500&fit=crop&q=80",

// DESPUÉS:
image: "/images/blog/blog-productos-ecofriendly.jpg",
```

**Línea 53:**
```svelte
// ANTES:
image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=500&fit=crop&q=80",

// DESPUÉS:
image: "/images/blog/blog-preparar-archivos-impresion.jpg",
```

**Línea 64:**
```svelte
// ANTES:
image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&q=80",

// DESPUÉS:
image: "/images/blog/blog-caso-exito-empresa-x.jpg",
```

### SEO Image

**Archivo:** `packages/client-example/src/routes/+page.svelte`

**Línea 309:**
```svelte
// ANTES:
image="https://images.unsplash.com/photo-1503676260728-1c00e094b736?w=1200&h=630&fit=crop&q=80"

// DESPUÉS:
image="/images/og-image.jpg"
```

**Archivo:** `packages/client-example/src/lib/components/Seo.svelte`

**Línea 18:**
```svelte
// ANTES:
image = "https://images.unsplash.com/photo-1503676260728-1c00e094b736?w=1200&h=630&fit=crop&q=80",

// DESPUÉS:
image = "/images/og-image.jpg",
```

---

## ✅ CHECKLIST COMPLETO

### Configuración
- [ ] Crear `.cursor/mcp.json` con configuración de Canva
- [ ] Verificar Node.js 22.16+
- [ ] Reiniciar Cursor
- [ ] Autorizar Canva MCP

### Creación de Imágenes (Prioridad Alta)
- [ ] `categoria-agendas-escolares.jpg` - 800x600px
- [ ] `categoria-merchandising-empresarial.jpg` - 800x600px
- [ ] `categoria-textil-personalizado.jpg` - 800x600px
- [ ] `categoria-papeleria-libretas.jpg` - 800x600px
- [ ] `categoria-productos-sostenibles.jpg` - 800x600px
- [ ] `proyecto-colegio-san-juan.jpg` - 600x400px
- [ ] `proyecto-empresa-tech-solutions.jpg` - 600x400px
- [ ] `proyecto-universidad-madrid.jpg` - 600x400px

### Reemplazo en Código
- [ ] Reemplazar categorías en `+page.svelte`
- [ ] Reemplazar casos de éxito en `+page.svelte`
- [ ] Reemplazar blog en `blog/+page.svelte`
- [ ] Reemplazar SEO image en `+page.svelte` y `Seo.svelte`

### Verificación
- [ ] Verificar que todas las imágenes se cargan correctamente
- [ ] Verificar que no hay errores en consola
- [ ] Verificar que las imágenes están optimizadas (<500KB)

---

## 📚 DOCUMENTOS RELACIONADOS

- **`ESPECIFICACIONES_CANVA.md`** - Especificaciones detalladas de todas las imágenes
- **`INVENTARIO_IMAGENES.md`** - Inventario completo de imágenes
- **`GUIA_SUBIDA_IMAGENES.md`** - Guía rápida para subir imágenes

---

## 🆘 SOLUCIÓN DE PROBLEMAS

### El MCP de Canva no aparece en Cursor

1. Verifica que el archivo `.cursor/mcp.json` existe y tiene la sintaxis correcta
2. Reinicia Cursor completamente
3. Verifica que Node.js 22.16+ está instalado
4. Revisa la consola de Cursor para errores

### No puedo autorizar Canva

1. Asegúrate de estar logueado en Canva Pro
2. Verifica que tu cuenta de Canva tiene permisos para usar la API
3. Intenta abrir Canva en el navegador primero y luego autoriza

### Las imágenes no se cargan

1. Verifica que las rutas en el código usan `/images/` (no `static/images/`)
2. Verifica que los nombres de archivo coinciden exactamente
3. Verifica que las imágenes están en la carpeta correcta
4. Limpia la caché del navegador

---

**Última actualización:** 2025-01-XX
**Versión:** 1.0

