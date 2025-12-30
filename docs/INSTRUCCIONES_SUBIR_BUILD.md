# 📤 Instrucciones para Subir Build a Hostinger

**Fecha:** 2025-01-27  
**Método:** File Browser de Hostinger

---

## 📦 ARCHIVOS PREPARADOS

Se han creado dos archivos comprimidos con el build:

1. **`build-publisol.tar.gz`** - Formato TAR.GZ (más eficiente)
2. **`build-publisol.zip`** - Formato ZIP (más compatible)

**Ubicación:** En la raíz del proyecto `client-example/`

---

## 🚀 PASOS PARA SUBIR A HOSTINGER

### Paso 1: Subir el Archivo Comprimido

1. **En el File Browser de Hostinger:**
   - Navega a la carpeta `public_html`
   - Haz clic en el botón **"Upload"** (flecha hacia arriba) en la barra superior
   - Selecciona el archivo `build-publisol.zip` o `build-publisol.tar.gz`
   - Espera a que termine la subida

### Paso 2: Extraer el Archivo

1. **Una vez subido:**
   - Haz clic derecho sobre el archivo comprimido
   - Selecciona **"Extract"** o **"Unzip"**
   - Esto creará una carpeta `build/` dentro de `public_html`

### Paso 3: Mover Contenido (IMPORTANTE)

**⚠️ IMPORTANTE:** El contenido de `build/` debe estar directamente en `public_html`, no en una subcarpeta.

1. **Opción A: Mover archivos manualmente**
   - Entra en la carpeta `build/`
   - Selecciona todos los archivos (Ctrl+A o Cmd+A)
   - Muévelos a `public_html/`
   - Elimina la carpeta `build/` vacía

2. **Opción B: Usar terminal SSH** (si tienes acceso)
   ```bash
   cd public_html
   unzip build-publisol.zip
   mv build/* .
   mv build/.* . 2>/dev/null || true
   rmdir build
   ```

### Paso 4: Estructura Final Correcta

La estructura en `public_html` debe quedar así:

```
public_html/
├── index.js          # ← Punto de entrada Node.js
├── handler.js
├── env.js
├── shims.js
├── client/          # ← Archivos estáticos
│   ├── _app/
│   ├── images/
│   ├── sw.js
│   └── ...
├── server/          # ← Archivos del servidor
└── ...
```

**NO debe quedar así:**
```
public_html/
└── build/           # ❌ INCORRECTO
    ├── index.js
    └── ...
```

---

## ⚠️ IMPORTANTE: Hostinger y Node.js

### Si Hostinger NO soporta Node.js directamente:

Si tu plan de Hostinger es **Shared Hosting** (no VPS), necesitarás cambiar a `adapter-static`:

1. **Cambiar adapter:**
   ```bash
   pnpm add -D @sveltejs/adapter-static
   ```

2. **Modificar `svelte.config.js`:**
   ```javascript
   import adapter from '@sveltejs/adapter-static';
   
   export default {
     kit: {
       adapter: adapter({
         pages: 'build',
         assets: 'build',
         fallback: 'index.html'
       })
     }
   };
   ```

3. **Rebuild:**
   ```bash
   pnpm build
   ```

4. **Subir contenido de `build/` directamente a `public_html/`**

### Si Hostinger SÍ soporta Node.js (VPS/Cloud):

1. **No subas a `public_html`**
2. **Sube a otra carpeta** (ej: `/home/usuario/publisol/`)
3. **Sigue la guía completa:** `docs/GUIA_DEPLOYMENT_HOSTINGER.md`
4. **Usa PM2** para ejecutar la aplicación

---

## 🔍 VERIFICACIÓN

Después de subir, verifica:

1. ✅ Archivos en `public_html/` (no en subcarpeta)
2. ✅ `index.js` presente en la raíz
3. ✅ Carpeta `client/` presente
4. ✅ Carpeta `server/` presente

---

## 📝 NOTAS

- **Tamaño del build:** ~75MB (comprimido ~15-20MB)
- **Tiempo de subida:** Depende de tu conexión
- **Si falla la subida:** Intenta con el archivo ZIP (más compatible)

---

## 🆘 SOLUCIÓN DE PROBLEMAS

### Error: "File too large"
- Usa el formato TAR.GZ (más pequeño)
- O sube por partes

### Error: "Cannot extract"
- Verifica que el archivo se subió completamente
- Intenta extraer desde SSH si tienes acceso

### El sitio no carga
- Verifica que los archivos están en `public_html/` (no en subcarpeta)
- Verifica permisos de archivos (deben ser 644 para archivos, 755 para carpetas)
- Verifica que `index.js` está en la raíz

---

**Última actualización:** 2025-01-27

