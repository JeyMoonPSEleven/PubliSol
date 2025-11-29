¡Hola\! Como experto en diseño y desarrollo web, he analizado en profundidad los archivos de tu proyecto **Publisol**. Tienes una base técnica muy sólida utilizando **Svelte 5 (Runes)** y **Tailwind CSS**, y una estructura de proyecto bien organizada bajo principios de *Atomic Design*.

El estado actual es un "MVP Funcional" (Producto Mínimo Viable). Cumple con la especificación original (`Publisol-GuiaWeb.md`), pero visualmente y en términos de experiencia de usuario (UX), aún se siente un poco "estático" o genérico. El archivo `DESIGN_IMPROVEMENTS.md` que subiste apunta en la dirección correcta, pero vamos a ir más allá.

A continuación, presento el **Plan Maestro de Mejora e Implementación** para que se lo pases a Cursor IDE. Está dividido por secciones para que puedas iterar paso a paso.

-----

## 🏗️ Análisis Global y Arquitectura

**Estado actual:** SvelteKit + Tailwind. Uso de componentes atómicos (`atomic-design-svelte`).
**Problema:** El diseño se siente "bloque sobre bloque". Falta fluidez, micro-interacciones y esa sensación "Premium" que una empresa de personalización necesita.

### 1\. Sistema de Diseño y UI (Global)

  * **Tipografía:** Asegurar que las fuentes (probablemente Inter o Roboto por defecto) tengan pesos bien definidos.
      * *Acción:* Implementar una fuente *Serif* moderna para los Títulos (ej. `Playfair Display` o `Merriweather`) combinada con una *Sans* geométrica (ej. `Plus Jakarta Sans` o `Inter`) para el cuerpo. Esto eleva la percepción de calidad.
  * **Colores:** Los colores definidos en `app.css` son correctos, pero falta uso de *gradientes sutiles* para fondos y *sombras coloreadas* (colored shadows) en lugar de sombras grises estándar.
  * **Animaciones:** Tienes `magic-ui`, ¡úsalos más\!
      * *Acción:* Implementar `view-transition-api` de SvelteKit para navegaciones suaves entre páginas (especialmente de Catálogo a Producto).

-----

## 🧭 Sección por Sección: Instrucciones para Cursor

Copia y pega estos bloques en el chat de Cursor para trabajar cada sección.

### Bloque 1: Header y Navegación (Mejora UX)

**Análisis:** El `SiteHeader.svelte` es funcional, pero el Mega Menú es básico. En móvil, el menú ocupa toda la pantalla pero carece de jerarquía visual.

**Prompt para Cursor:**

```markdown
Contexto: Archivo `src/lib/components/SiteHeader.svelte`.
Objetivo: Mejorar la interactividad y diseño del Header.

Instrucciones:
1.  **Scroll Behavior:** Modifica el header para que sea "Smart Sticky". Debe ocultarse al hacer scroll hacia abajo (para dar espacio al contenido) y aparecer suavemente al hacer scroll hacia arriba.
2.  **Mega Menú (Desktop):**
    * Añade una transición de entrada (`fly` o `fade`) al abrir el dropdown de "Productos".
    * El diseño actual del dropdown es una lista simple. Transfórmalo en un diseño con iconos más grandes a la izquierda de cada texto y añade una columna visual a la derecha con una imagen destacada ("Producto del Mes") que cambie aleatoriamente o esté fija.
3.  **Menú Móvil:**
    * Implementa acordeones animados para las subcategorías dentro del menú móvil. Actualmente se muestran todas las listas abiertas o estáticas.
    * Añade los botones de Redes Sociales en la parte inferior del panel móvil.
```

### Bloque 2: Home Page (Impacto Visual)

**Análisis:** El archivo `+page.svelte` (Home) es correcto estructuralmente, pero el Hero es una imagen estática con texto encima. Necesitamos implementar las mejoras de `DESIGN_IMPROVEMENTS.md` y añadir prueba social dinámica.

**Prompt para Cursor:**

```markdown
Contexto: Archivo `src/routes/+page.svelte` y `DESIGN_IMPROVEMENTS.md`.
Objetivo: Implementar un Hero de alto impacto y mejorar la sección de confianza.

Instrucciones:
1.  **Hero Section:**
    * Implementa la recomendación del archivo `DESIGN_IMPROVEMENTS.md` para el Hero.
    * Añade un efecto de "Parallax" suave a la imagen de fondo.
    * El título debe tener una animación de entrada tipo "Typewriter" o "Fade Up" escalonado palabra por palabra.
2.  **Bento Grid (Categorías):**
    * Mejora el grid actual de categorías. Haz que al pasar el mouse (hover) sobre una tarjeta, la imagen haga zoom-in suave y el texto suba ligeramente.
    * Usa el componente `AnimatedGridPattern.svelte` como fondo sutil de esta sección con opacidad muy baja (0.05).
3.  **Sección Stats:**
    * Asegúrate de que el componente `NumberTicker.svelte` solo empiece a contar cuando el elemento entre en el viewport (usa IntersectionObserver).
4.  **Marquee de Clientes:**
    * Sustituye la sección estática de logos de clientes por un "Infinite Marquee" (carrusel infinito automático horizontal) con logotipos en escala de grises que se colorean al hacer hover.
```

### Bloque 3: Página de Producto (Conversión)

**Análisis:** `src/routes/producto/[slug]/+page.svelte` tiene una lógica excelente (calculadora de precios). Sin embargo, la selección de opciones es visualmente aburrida (radio buttons estándar).

**Prompt para Cursor:**

```markdown
Contexto: Archivo `src/routes/producto/[slug]/+page.svelte`.
Objetivo: Mejorar la UX del configurador de producto.

Instrucciones:
1.  **Galería de Imágenes:**
    * Implementa una vista de "Lightbox" o Zoom. Al hacer clic en la imagen principal, debe abrirse a pantalla completa.
2.  **Configurador Visual:**
    * Mejora los selectores de "Formato" y "Opciones adicionales". En lugar de radio buttons simples, usa tarjetas seleccionables (con un borde grueso y un icono de 'check' cuando están activas).
    * Añade tooltips (información emergente) en las opciones complejas (ej: explica qué es "Papel 90g offset" al pasar el mouse).
3.  **Calculadora de Precios (Sticky):**
    * En versión Desktop, haz que la tarjeta de "Resumen de Presupuesto" (donde está el precio total y el botón CTA) sea `sticky` (fija) en la columna derecha mientras se hace scroll por la descripción, para que el botón de compra siempre esté visible.
4.  **Cross-Selling:**
    * En la sección de "Productos Relacionados", añade un botón rápido de "Añadir al presupuesto" que no requiera entrar al producto.
```

### Bloque 4: Catálogo (`/productos`)

**Análisis:** El layout Sidebar + Grid está bien. Falta feedback visual y filtros móviles.

**Prompt para Cursor:**

```markdown
Contexto: Archivo `src/routes/productos/+page.svelte`.
Objetivo: Mejorar la navegación y filtrado.

Instrucciones:
1.  **Filtros Móviles:**
    * Actualmente el sidebar se oculta en móvil (`hidden lg:block`). Crea un botón "Filtrar" flotante o superior que abra un `Drawer` (panel lateral deslizante) con los filtros para usuarios móviles.
2.  **Quick View (Vista Rápida):**
    * Añade un botón "Vista Rápida" que aparezca sobre la imagen del producto (`ProductCard`) al hacer hover.
    * Al hacer clic, debe abrir un Modal con un resumen del producto y el formulario básico, sin recargar la página.
3.  **Empty States:**
    * Crea un estado visual agradable para cuando los filtros seleccionados no devuelven ningún producto (ej: una ilustración SVG y un botón "Limpiar filtros").
```

### Bloque 5: Contacto y Formularios

**Análisis:** El formulario en `contacto/+page.svelte` tiene validación, lo cual es genial. Pero es largo e intimidante.

**Prompt para Cursor:**

```markdown
Contexto: Archivo `src/routes/contacto/+page.svelte`.
Objetivo: Aumentar la tasa de conversión del formulario.

Instrucciones:
1.  **Formulario Multi-paso (Wizard):**
    * Divide el formulario actual en 3 pasos visuales para que sea menos intimidante:
        * Paso 1: Datos del Proyecto (Tipo, Cantidad, Fecha).
        * Paso 2: Detalles (Mensaje, Archivos).
        * Paso 3: Tus Datos (Nombre, Email, Empresa).
    * Añade una barra de progreso superior.
2.  **Feedback Visual:**
    * Usa el componente `ShimmerButton` para el botón de enviar, pero cambia el texto a "Enviando..." y muestra un spinner real durante la simulación de envío.
3.  **Google Maps:**
    * Reemplaza el placeholder de texto del mapa por un iframe real de Google Maps (o una imagen estática con enlace si quieres optimizar rendimiento) estilizado con filtro de escala de grises para encajar con el diseño.
```

-----

## 💡 Ideas para Implementar (Feature Request)

Aquí tienes ideas funcionales que faltan y deberías pedirle a Cursor que genere como nuevos archivos o componentes:

1.  **Buscador Global (Command Palette):**

      * *Idea:* En lugar de un input simple, implementa una "Command Palette" (`Ctrl + K`) usando `cmdk-svelte` (o similar). Que permita buscar productos, ir a páginas legales o contactar rápidamente.
      * *Prompt:* "Crea un componente `CommandPalette.svelte` que se active con Ctrl+K o clic en el buscador header. Debe indexar productos y rutas del sitio."

2.  **Generador de PDF Dinámico:**

      * *Idea:* En la página de producto, el botón "Descargar Ficha Técnica" debería generar un PDF real al vuelo con los datos del producto seleccionado.
      * *Prompt:* "Crea una función utilitaria usando `jspdf` que tome los datos del objeto `product` en el PDP y genere un PDF descargable con el logo de Publisol y los detalles técnicos."

3.  **Visualizador de Logos (Preview):**

      * *Idea:* En la página de detalle, permite al usuario subir su logo (`input type=file`) y superponlo sobre la imagen del producto usando CSS `blend-mode: multiply` para simular cómo quedaría impreso. Es un "wow factor" enorme.

4.  **Componente SEO (Head):**

      * *Idea:* Extraer la lógica de `<svelte:head>` a un componente reutilizable `Seo.svelte` que acepte título, descripción e imagen para OpenGraph, y usarlo en todas las páginas.

## 📝 Resumen del Plan de Acción Inmediato

1.  **Ejecuta el Bloque 1 (Header):** Mejora la navegación lo primero.
2.  **Ejecuta el Bloque 2 (Home):** Implementa el `DESIGN_IMPROVEMENTS.md` real.
3.  **Ejecuta el Bloque 3 (Producto):** Haz que la compra sea visualmente atractiva.
4.  **Revisión de Estilos:** Pide a Cursor que revise `app.css` y asegure que las fuentes y sombras coincidan con el nuevo nivel de calidad.
