# 🚀 Guía de Deployment en Hostinger - Publisol

**Fecha:** 2025-01-27  
**Estado:** ✅ Configuración Lista

---

## 📋 PREPARACIÓN PREVIA

### ✅ Configuración Realizada
- ✅ Adapter cambiado a `@sveltejs/adapter-node`
- ✅ Script `start` añadido a package.json
- ✅ Precompresión habilitada
- ✅ Build completado exitosamente

---

## 🎯 OPCIÓN 1: Hostinger VPS/Cloud (Node.js)

### Paso 1: Acceder al Servidor
1. Accede a tu panel de Hostinger
2. Ve a **VPS** o **Cloud Hosting**
3. Accede por **SSH** o usa el **File Manager**

### Paso 2: Subir el Código
```bash
# Opción A: Clonar desde GitHub
cd /home/usuario/public_html
git clone https://github.com/JeyMoonPSEleven/PubliSol.git
cd PubliSol/packages/client-example

# Opción B: Subir archivos por FTP/SFTP
# Sube todo el proyecto a: /home/usuario/public_html/
```

### Paso 3: Instalar Node.js (si no está instalado)
```bash
# Verificar versión de Node.js
node --version

# Si no está instalado, instalar Node.js 18+ o 20+
# Hostinger generalmente tiene Node.js preinstalado
```

### Paso 4: Instalar Dependencias
```bash
# Instalar pnpm globalmente (si no está)
npm install -g pnpm

# Instalar dependencias
pnpm install
```

### Paso 5: Configurar Variables de Entorno
```bash
# Crear archivo .env en la raíz del proyecto
nano .env

# Añadir variables necesarias (si las hay)
# VITE_RECAPTCHA_SITE_KEY=tu_clave_aqui
```

### Paso 6: Build del Proyecto
```bash
# Hacer build de producción
pnpm build

# Verificar que se creó la carpeta build/
ls -la build/
```

### Paso 7: Configurar PM2 (Recomendado)
```bash
# Instalar PM2 globalmente
npm install -g pm2

# Crear archivo ecosystem.config.js
cat > ecosystem.config.js << EOF
module.exports = {
  apps: [{
    name: 'publisol',
    script: './build/index.js',
    instances: 1,
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
      HOST: '0.0.0.0'
    }
  }]
}
EOF

# Iniciar aplicación con PM2
pm2 start ecosystem.config.js

# Guardar configuración de PM2
pm2 save

# Configurar PM2 para iniciar al reiniciar el servidor
pm2 startup
```

### Paso 8: Configurar Nginx (Si aplica)
```nginx
server {
    listen 80;
    server_name publisolronda.com www.publisolronda.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### Paso 9: Configurar SSL/HTTPS
- En el panel de Hostinger, activa **SSL gratuito** (Let's Encrypt)
- O configura certificado SSL personalizado

---

## 🎯 OPCIÓN 2: Hostinger Shared Hosting (Static)

Si Hostinger no soporta Node.js en tu plan, necesitarás usar `adapter-static`:

### Paso 1: Cambiar a Adapter Static
```bash
# Instalar adapter-static
pnpm add -D @sveltejs/adapter-static

# Modificar svelte.config.js
```

### Paso 2: Modificar svelte.config.js
```javascript
import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      precompress: true
    })
  }
};
```

### Paso 3: Build y Subir
```bash
# Build
pnpm build

# Subir carpeta build/ a public_html/
# Todo el contenido de build/ va a public_html/
```

---

## 📁 ESTRUCTURA DE ARCHIVOS EN HOSTINGER

### Para Node.js (VPS/Cloud):
```
/home/usuario/
├── public_html/          # (Opcional, si usas Nginx)
└── publisol/            # Tu proyecto
    ├── packages/
    │   └── client-example/
    │       ├── build/   # ← Aplicación Node.js
    │       ├── package.json
    │       └── ...
    └── ...
```

### Para Static (Shared Hosting):
```
/home/usuario/
└── public_html/          # Carpeta raíz del sitio
    ├── index.html
    ├── _app/
    ├── images/
    └── ...              # Todo el contenido de build/
```

---

## 🔧 CONFIGURACIÓN ADICIONAL

### Variables de Entorno en Hostinger
1. Ve a **Panel de Control** → **Variables de Entorno**
2. Añade las variables necesarias:
   - `NODE_ENV=production`
   - `PORT=3000` (o el puerto asignado)
   - `HOST=0.0.0.0`

### Configurar Dominio
1. En el panel de Hostinger, ve a **Dominios**
2. Añade tu dominio `publisolronda.com`
3. Apunta el DNS si es necesario

---

## ✅ CHECKLIST DE DEPLOYMENT

### Antes de Subir
- [x] Adapter configurado (`adapter-node`)
- [x] Build completado exitosamente
- [x] Variables de entorno documentadas
- [x] Script `start` añadido

### Durante el Deployment
- [ ] Código subido al servidor
- [ ] Dependencias instaladas (`pnpm install`)
- [ ] Build ejecutado (`pnpm build`)
- [ ] Variables de entorno configuradas
- [ ] Aplicación iniciada (PM2 o similar)
- [ ] Puerto configurado correctamente

### Después del Deployment
- [ ] Verificar que el sitio carga correctamente
- [ ] Verificar HTTPS/SSL activo
- [ ] Verificar Service Worker funcionando
- [ ] Verificar que todas las rutas funcionan
- [ ] Verificar formularios funcionando
- [ ] Verificar imágenes cargando

---

## 🐛 SOLUCIÓN DE PROBLEMAS

### Error: "Cannot find module"
```bash
# Asegúrate de instalar todas las dependencias
pnpm install

# Verificar que el design-system está disponible
# Si es monorepo, instalar desde la raíz
cd ../../ && pnpm install
```

### Error: "Port already in use"
```bash
# Cambiar puerto en ecosystem.config.js
# O matar proceso en ese puerto
lsof -ti:3000 | xargs kill -9
```

### Error: "Build folder not found"
```bash
# Asegúrate de ejecutar build
pnpm build

# Verificar que existe build/
ls -la build/
```

### Service Worker no funciona
- Verificar que HTTPS está activo
- Verificar que `sw.js` está accesible
- Verificar consola del navegador para errores

---

## 📞 SOPORTE

Si tienes problemas:
1. Revisa los logs de PM2: `pm2 logs publisol`
2. Revisa los logs de Nginx: `/var/log/nginx/error.log`
3. Verifica que el puerto está abierto
4. Contacta con soporte de Hostinger si es necesario

---

## 🎯 COMANDOS RÁPIDOS

```bash
# Ver estado de la aplicación
pm2 status

# Ver logs en tiempo real
pm2 logs publisol

# Reiniciar aplicación
pm2 restart publisol

# Detener aplicación
pm2 stop publisol

# Verificar que el puerto está escuchando
netstat -tulpn | grep 3000

# Verificar procesos Node.js
ps aux | grep node
```

---

## ✅ CONCLUSIÓN

El proyecto está configurado para deployment en Hostinger con:
- ✅ Adapter Node.js configurado
- ✅ Scripts de producción listos
- ✅ Build completado
- ✅ Documentación completa

**Sigue los pasos según tu tipo de hosting en Hostinger.**

---

**Última actualización:** 2025-01-27  
**Configurado por:** AI Assistant

