# Especificación Técnica: Sitio Web Corporativo - Agendas y Merchandising

## 1. Infraestructura Global & Stack Tecnológico

### GLOBAL: Tech Stack Base
Svelte

### GLOBAL: Design System (UI Kit)
- **Paleta de Colores:**
  - **Primario:** Azul corporativo (#1E3A8A) - Confianza y profesionalismo
  - **Secundario:** Verde (#10B981) - Sostenibilidad
  - **Acento:** Naranja (#F59E0B) - CTAs y destacados
  - **Neutros:** Grises (#F9FAFB, #E5E7EB, #374151, #1F2937)
  - **Backgrounds:** Blanco (#FFFFFF) + Beige claro (#FAF8F5)

- **Tipografía:**
  - **Headings:** 700 weight, line-height 1.2
  - **Body:** 400 weight, line-height 1.6
  - **Jerarquía:** H1 (48px), H2 (36px), H3 (24px), Body (16px)

- **Espaciado:** Sistema de 8px (8, 16, 24, 32, 48, 64, 96px)

- **Componentes Base:**
  - **Botones:** 
    - Primario: Fondo azul, texto blanco, hover con scale(1.05)
    - Secundario: Outline azul, hover relleno
    - Radio: 6px
  - **Tarjetas:** 
    - Border-radius: 12px
    - Sombra sutil: `0 1px 3px rgba(0,0,0,0.1)`
    - Hover: Elevación suave `0 4px 12px rgba(0,0,0,0.15)`
  - **Inputs:** 
    - Border gris claro, focus ring azul
    - Padding interno: 12px 16px

- **Interacciones:**
  - Transiciones: `transition: all 0.3s ease`
  - Hover en imágenes: `scale(1.05)` + overlay con opacidad
  - Scroll reveal: Elementos aparecen con fade-in desde abajo

---

## 2. Navegación y Header

### HEADER: Barra de Navegación Principal
- **Posición:** Sticky top con backdrop-blur (fondo semitransparente al hacer scroll)
- **Altura:** 80px desktop / 64px mobile
- **Fondo:** Blanco con sombra sutil al hacer scroll

**Estructura Desktop:**
```
[LOGO] ─────── [MENÚ NAVEGACIÓN] ─────── [BÚSQUEDA] [CTA CONTACTO]
```

**Elementos:**

1. **Logo (Izquierda)**
   - Tamaño: 140px ancho max
   - Link a home (`/`)
   - Versión adaptativa: Logo completo desktop / Isotipo mobile

2. **Menú Central**
   - **Inicio** → `/`
   - **Productos** (Dropdown) → Ver estructura abajo
   - **Sobre Nosotros** → `/nosotros`
   - **Catálogos** → `/catalogos`
   - **Contacto** → `/contacto`

3. **Zona Derecha**
   - **Buscador:** Input con icono lupa (expandible al click)
     - Placeholder: "Buscar productos..."
     - Búsqueda en vivo con sugerencias
   - **CTA Principal:** Botón "Solicitar Presupuesto" (Naranja, destacado)

### DROPDOWN MENÚ: Productos
**Trigger:** Hover/Click en "Productos"

**Layout:** Mega menu fullwidth (max 1200px centrado)

**Estructura 3 Columnas:**

**Columna 1: Agendas Escolares**
- 📚 Agendas Primaria
- 📖 Agendas Secundaria
- 🎓 Agendas Universitarias
- ✏️ Agendas Personalizadas

**Columna 2: Merchandising Empresarial**
- 🎁 Kits Corporativos
- 👕 Textil Corporativo
- 🖊️ Material de Oficina
- 💼 Regalos Empresariales
- ♻️ Productos Sostenibles

**Columna 3: Agendas & Papelería**
- 📅 Agendas Anuales
- 📔 Cuadernos y Libretas
- 📋 Planificadores
- 🎨 Papelería Premium

**Columna 4 (Visual):**
- Imagen destacada del producto del mes
- Badge: "Nuevo 2025"
- Link: "Ver todas las novedades →"

**Interacción:**
- Fade-in suave (300ms)
- Cada enlace con hover underline animado
- Iconos en color del brand

---

### MOBILE MENU (Hamburguesa)
**Trigger:** Icono hamburguesa (top-right)

**Comportamiento:**
- Slide-in desde derecha
- Overlay oscuro (backdrop)
- Animación suave 400ms

**Estructura:**
- **Header del menú:** Logo + Botón cerrar (X)
- **Navegación:** Acordeones para subcategorías
  - Cada item expandible con chevron
  - Padding generoso (touch-friendly)
- **Footer del menú:**
  - Botón grande "Solicitar Presupuesto"
  - Datos de contacto rápido (teléfono/email)
  - Iconos redes sociales

---

## 3. Home Page (`/`) - Estructura Completa

### SECCIÓN 1: HERO Principal
**Objetivo:** Impacto visual + Propuesta de valor clara

**Layout:** Fullscreen (100vh) con imagen/video de fondo

**Contenido Visual:**
- **Opción A:** Video loop (15-20s) mostrando:
  - Agendas personalizadas siendo impresas
  - Productos textiles de calidad
  - Empaquetado cuidado
- **Opción B:** Carousel automático de imágenes hero (4-5 imágenes)
  - Agendas escolares coloridas
  - Ropa corporativa bordada
  - Productos finales en uso

**Contenido Textual (Centrado o Izquierda):**
```
[H1] "Agendas y Merchandising Personalizado"
[Subtítulo] "Desde 1995 creando productos únicos para colegios, 
empresas y asociaciones. Calidad, creatividad y servicio integral."

[Dos CTAs lado a lado]
[Botón Primario: "Ver Catálogo"] [Botón Secundario: "Contactar"]
```

**Trust Badges (Parte inferior):**
- "Más de 500 colegios confían en nosotros"
- "Producción sostenible certificada"
- "Entrega en toda España"
- Iconografía simple acompañando cada badge

**Elementos Técnicos:**
- Gradiente oscuro sobre video/imagen (legibilidad)
- Parallax scroll en desktop
- Botón scroll down (bounce animation)

---

### SECCIÓN 2: Propuesta de Valor (Services Grid)
**Título:** "¿Por qué elegirnos?"

**Layout:** Grid 3 columnas desktop / 1 columna mobile

**Card Estructura (Cada una):**
```
[Icono grande animado]
[Título del servicio]
[Descripción breve 2-3 líneas]
[Link: "Saber más →"]
```

**Cards Específicas:**

1. **Personalización Total**
   - Icono: 🎨 Paleta de colores
   - "Diseñamos agendas y productos 100% adaptados a tu imagen corporativa o centro educativo."
   
2. **Calidad Garantizada**
   - Icono: ✓ Sello de calidad
   - "Materiales premium y procesos de fabricación certificados. Garantía en todos nuestros productos."

3. **Servicio Integral**
   - Icono: 📦 Paquete
   - "Desde el diseño hasta la entrega. Nos encargamos de todo para que no te preocupes de nada."

4. **Sin Mínimos (opcional)**
   - Icono: 🔢 Números
   - "Adaptamos cantidades a tus necesidades. Proyectos grandes o pequeños, todos son importantes."

5. **Entrega Rápida**
   - Icono: 🚚 Camión
   - "Plazos ajustados y cumplidos. Envíos a toda España en 24-48h para productos en stock."

6. **Sostenibilidad**
   - Icono: 🌱 Hoja
   - "Productos eco-friendly y compromiso con el medio ambiente en cada proceso."

**Interacción:**
- Hover: Card se eleva (shadow aumenta)
- Icono con animación sutil al entrar en viewport
- Stagger animation: Las cards aparecen secuencialmente (100ms delay)

---

### SECCIÓN 3: Categorías Principales (Interactive Cards)
**Título:** "Nuestros Productos"
**Subtítulo:** "Explora nuestro catálogo completo"

**Layout:** Bento Grid / Masonry Layout (cajas de diferentes tamaños)

**Ejemplo Distribución:**
```
[Agendas Escolares - Grande]  [Merchandising - Mediano]
                              [Textil - Mediano]
[Papelería - Mediano]  [Sostenibles - Grande]
```

**Card de Categoría:**
- **Imagen:** Foto lifestyle del producto (ej: niños usando agendas en clase)
- **Overlay:** Gradiente oscuro en la parte inferior
- **Texto sobre imagen:**
  - Nombre categoría (H3, blanco, bold)
  - Contador de productos: "Ver 45+ productos"
- **Hover:** 
  - Zoom imagen (scale 1.1)
  - Overlay más oscuro
  - Botón "Explorar" aparece

**Categorías Sugeridas:**
1. **Agendas Escolares** (Imagen: Agendas coloridas con logo de colegio)
2. **Merchandising Empresarial** (Imagen: Set de productos corporativos)
3. **Textil Personalizado** (Imagen: Polos/sudaderas bordadas)
4. **Papelería y Libretas** (Imagen: Escritorio con cuadernos abiertos)
5. **Productos Sostenibles** (Imagen: Productos eco con badge verde)

**CTA Final de Sección:**
- Botón centrado: "Ver Catálogo Completo"

---

### SECCIÓN 4: Casos de Éxito / Portfolio
**Título:** "Proyectos que nos enorgullecen"

**Layout:** Carousel horizontal de tarjetas

**Card de Proyecto:**
```
┌─────────────────────────────┐
│  [Imagen del producto]      │
│                             │
│  [Logo Cliente]             │
│  Nombre Cliente             │
│  "Breve testimonial de      │
│   satisfacción con el       │
│   servicio recibido."       │
│                             │
│  [Badge: Agendas Escolares] │
└─────────────────────────────┘
```

**Proyectos Ejemplo:**
1. **Colegio San José**
   - Imagen: Agendas personalizadas con escudo
   - "800 agendas escolares con diseño exclusivo"
   
2. **TechCorp Solutions**
   - Imagen: Kit bienvenida (libreta, bolígrafo, botella)
   - "Kits de onboarding para 150 empleados"

3. **Asociación Deportiva**
   - Imagen: Equipación completa
   - "Uniformes personalizados para equipo juvenil"

**Controles:**
- Flechas prev/next
- Indicadores de punto (bullets)
- Autoplay pausable

**Interacción:**
- Swipe en mobile
- Hover en card: Elevación + ver botón "Ver proyecto completo"

---

### SECCIÓN 5: Proceso de Trabajo (How It Works)
**Título:** "Cómo trabajamos contigo"
**Subtítulo:** "Simple, transparente y efectivo"

**Layout:** Timeline horizontal (Desktop) / Vertical (Mobile)

**Pasos:**

```
1️⃣ CONTACTO          →    2️⃣ DISEÑO          →    3️⃣ PRODUCCIÓN    →    4️⃣ ENTREGA
[Icono Mensaje]           [Icono Lápiz]            [Icono Fábrica]        [Icono Paquete]
Nos cuentas             Creamos                 Fabricamos con        Recibe tu pedido
tu proyecto             propuesta visual        los mejores            en tiempo y forma
                        personalizada           materiales
```

**Cada Paso (Card expandida al hover):**
- Número grande decorativo
- Icono representativo
- Título del paso
- Descripción expandida (2-3 líneas)
- Tiempo estimado: "24-48h" / "3-5 días" etc.

**Visual:**
- Línea conectora entre pasos (animada al scroll)
- Iconos animados cuando entran en viewport
- Color de acento para el paso actual en scroll

---

### SECCIÓN 6: Números / Stats (Credibilidad)
**Fondo:** Color sólido (Azul oscuro) o imagen con overlay

**Layout:** 4 columnas (Grid)

**Contenido:**
```
    [Contador animado]           [Contador animado]
         +25                           +500
        AÑOS                         CLIENTES
    de experiencia                 satisfechos

    [Contador animado]           [Contador animado]
      +10,000                         100%
     PRODUCTOS                    PERSONALIZACIÓN
    entregados al año             en cada proyecto
```

**Técnica:**
- Números cuentan desde 0 cuando la sección entra en viewport
- Animación suave con easing
- Texto descriptivo debajo en color claro

---

### SECCIÓN 7: Llamada a la Acción Final (Pre-Footer)
**Objetivo:** Conversión directa

**Diseño:** Panel destacado con fondo de color o imagen

**Contenido:**
```
[H2] "¿Listo para tu próximo proyecto?"
[Subtítulo] "Solicita presupuesto sin compromiso y descubre 
             cómo podemos ayudarte"

[Formulario Inline Simple]
┌────────────────────────────────────────────────────────┐
│  [Input: Nombre] [Input: Email] [Input: Teléfono]     │
│                   [Botón: "Quiero que me contacten"]   │
└────────────────────────────────────────────────────────┘

O llámanos: +34 XXX XXX XXX
```

**Alternativa:**
- Dos botones grandes lado a lado:
  - "Descargar Catálogo PDF" (Secundario)
  - "Solicitar Presupuesto" (Primario)

---

## 4. Páginas de Producto y Catálogo

### CATALOG PAGE (`/productos` o `/catalogo`)

**Hero de Categoría:**
- Título: "Nuestro Catálogo"
- Breadcrumb: Inicio > Productos
- Descripción breve

**Layout Principal:**
```
[Sidebar Filtros]  │  [Grid de Productos]
     (25%)         │         (75%)
```

### SIDEBAR: Filtros (Desktop) / Drawer (Mobile)
**Secciones de Filtro:**

1. **Categorías** (Checkboxes)
   - □ Agendas Escolares
   - □ Agendas Personalizadas
   - □ Merchandising
   - □ Textil
   - □ Papelería
   - □ Sostenibles

2. **Material** (Radio buttons o checkboxes)
   - □ Papel reciclado
   - □ Cuero sintético
   - □ Tela
   - □ Plástico reciclado

3. **Color Disponible** (Swatches visuales)
   - Círculos de color clickeables

4. **Aplicaciones** (Checkboxes)
   - □ Colegios
   - □ Empresas
   - □ Asociaciones
   - □ Eventos

5. **Características** (Tags)
   - □ Eco-friendly
   - □ Premium
   - □ Personalizable
   - □ Stock inmediato

**Botones de Acción:**
- "Limpiar filtros" (link discreto)
- Contador: "Mostrando 24 de 156 productos"

---

### GRID DE PRODUCTOS
**Layout:** 3 columnas desktop / 2 tablet / 1 mobile

**Controles Superiores:**
```
[Resultados: 24 productos]    [Ordenar por: ▼]  [Vista: Grid/List]
                              • Relevancia
                              • Más recientes
                              • Nombre A-Z
```

### PRODUCT CARD (Tarjeta de Producto)
```
┌─────────────────────────┐
│                         │
│   [Imagen Producto]     │
│   (hover: 2ª imagen)    │
│                         │
│ [Badge: NUEVO/ECO]      │
├─────────────────────────┤
│ Nombre del Producto     │
│ Categoría               │
│                         │
│ "Desde XXX unidades"    │
│ [Botón: Ver Detalles]  │
└─────────────────────────┘
```

**Elementos de la Card:**
1. **Imagen Principal:** Producto sobre fondo blanco/neutro
2. **Imagen Hover:** Producto en contexto/lifestyle
3. **Badges (Esquina superior):**
   - Verde: "Eco"
   - Azul: "Nuevo 2025"
   - Naranja: "Personalizable"
   - Gris: "Stock"
4. **Título:** Nombre claro del producto (H4)
5. **Categoría:** Texto pequeño gris
6. **Info Adicional:** "Mínimo 50 uds" o "Disponible en 12 colores"
7. **CTA:** Botón "Ver Detalles" (outline, hover relleno)

**Interacción:**
- Hover card: Elevación suave
- Hover imagen: Zoom 1.05
- Click en card: Navega a detalle
- Favoritos (opcional): Icono corazón esquina superior

**Paginación (Parte inferior):**
- Números de página: « 1 2 3 ... 8 »
- Botón "Cargar más" (alternativa lazy loading)

---

### PRODUCT DETAIL PAGE (PDP) (`/producto/[slug]`)

**Layout Desktop:**
```
[Galería Imágenes]  │  [Información y Configuración]
      50%           │              50%
```

### COLUMNA IZQUIERDA: Galería
**Componente Principal:**
- **Imagen Grande:** Vista principal (zoom al hover)
- **Thumbnails:** Fila inferior con miniaturas (4-6 imágenes)
  - Producto solo
  - Producto en uso
  - Detalles (texturas, costuras)
  - Área de personalización marcada
  - Variantes de color

**Características:**
- Click en thumbnail: Cambia imagen principal (transición fade)
- Fullscreen mode: Icono expandir → Modal con galería completa
- Zoom: Lupa al hover (desktop)
- Swipe: Gestos táctiles (mobile)

---

### COLUMNA DERECHA: Información

**Sección 1: Header**
```
[Breadcrumb] Inicio > Productos > Agendas Escolares > [Nombre]

[H1] Agenda Escolar Personalizada Premium
[Categoría Badge] Agendas Escolares

[Rating Visual] ★★★★★ (12 valoraciones)
```

**Sección 2: Descripción Corta**
- 2-3 líneas destacando beneficios clave
- "Agenda escolar con cubierta resistente, 100% personalizable con el logo de tu centro. Papel de 90g certificado FSC."

**Sección 3: Características Destacadas (Iconos)**
```
✓ Personalización total    ✓ Papel reciclado FSC
✓ Cubierta resistente      ✓ Entrega en 10-15 días
```

**Sección 4: Configurador**

**Subsección A: Variantes de Color**
```
Color de cubierta:
[⚫ Negro]  [🔵 Azul]  [🔴 Rojo]  [🟢 Verde]  [⚪ Blanco]
(Swatches clickeables, seleccionado con borde grueso)
```

**Subsección B: Especificaciones Técnicas**
```
Formato:
○ A5 (148x210mm)
● A4 (210x297mm)  ← Seleccionado

Opciones adicionales:
□ Marcapáginas integrado (+0.50€/ud)
□ Esquinas redondeadas (+0.30€/ud)
□ Cierre elástico (+0.80€/ud)
```

**Sección 5: Cantidades y Presupuesto**
```
┌──────────────────────────────────────┐
│  Cantidad mínima: 50 unidades        │
│                                      │
│  [Input: Cantidad]  100              │
│  ┌──────┬──────────────┐            │
│  │ Uds  │ Precio/Unidad│            │
│  ├──────┼──────────────┤            │
│  │ 50   │ 8.50€        │            │
│  │ 100  │ 7.80€  ← Tu precio        │
│  │ 250  │ 6.90€        │            │
│  │ 500+ │ Consultar    │            │
│  └──────┴──────────────┘            │
│                                      │
│  Precio estimado: 780€ (IVA no incl)│
└──────────────────────────────────────┘
```

**Sección 6: Llamadas a la Acción**
```
[Botón Primario Grande] "Solicitar Presupuesto Personalizado"
[Botón Secundario] "Descargar Ficha Técnica PDF"
[Link] "¿Necesitas ayuda? Contacta con un asesor"
```

**Sección 7: Información de Envío**
```
📦 Envío:
• España peninsular: 24-48h (en stock)
• Producción personalizada: 10-15 días laborables
• Consulta envíos a Canarias, Baleares, Ceuta y Melilla

🔒 Garantía:
• Satisfacción garantizada o devolución del dinero
• Revisión de muestra digital antes de producción
```

---

### TABS DE INFORMACIÓN (Debajo de columnas principales)

**Tab 1: Descripción Detallada**
- Párrafos completos sobre el producto
- Materiales específicos
- Proceso de fabricación
- Ventajas y beneficios

**Tab 2: Especificaciones Técnicas**
Tabla estructurada:
```
| Característica        | Detalle                    |
|-----------------------|----------------------------|
| Dimensiones           | 210 x 297 mm (A4)          |
| Peso                  | 450g                       |
| Páginas               | 160 páginas (80 hojas)     |
| Papel interior        | 90g offset blanco          |
| Encuadernación        | Wire-o / Espiral metálico  |
| Cubierta              | Cartón 300g plastificado   |
| Impresión cubierta    | Full color (CMYK)          |
| Área personalización  | 180 x 250 mm               |
```

**Tab 3: Área de Personalización**
- Diagrama visual mostrando zona imprimible
- Formatos de archivo aceptados (.AI, .PDF, .EPS)
- Requisitos técnicos (resolución mínima 300dpi)
- Colores Pantone vs CMYK

**Tab 4: Opiniones de Clientes**
```
[Avatar] Colegio Santa María
★★★★★
"Excelente calidad y servicio. Las agendas quedaron perfectas
y los alumnos están encantados. Repetiremos sin duda."
- María González, Directora
```

---

### PRODUCTOS RELACIONADOS (Parte inferior)
**Título:** "También te puede interesar"

**Carousel de productos:**
- 4 productos similares de la misma categoría
- Cards simplificadas (imagen + título + botón)
- Lógica: Misma categoría o mismo color o mismo uso

---

## 5. Página de Catálogos Descargables (`/catalogos`)

**Hero:**
```
[H1] "Catálogos Descargables"
[Subtítulo] "Explora nuestra gama completa de productos en formato PDF"
```

**Grid de Catálogos:**
```
┌─────────────────────────┐  ┌─────────────────────────┐
│  [Preview Portada]      │  │  [Preview Portada]      │
│                         │  │                         │
│  Catálogo Agendas       │  │  Catálogo Merchandising │
│  Escolares 2025         │  │  Empresarial            │
│                         │  │                         │
│  [📄 24 páginas]        │  │  [📄 36 páginas]        │
│  [Botón: Descargar PDF] │  │  [Botón: Descargar PDF] │
└─────────────────────────┘  └─────────────────────────┘
```

**Catálogos Sugeridos:**
1. Agendas Escolares 2025-2026
2. Merchandising Empresarial
3. Textil Corporativo
4. Productos Sostenibles
5. Papelería y Libretas
6. Catálogo General Completo

**Modal de Descarga (Al click):**
```
Para descargar el catálogo, déjanos tu email:

[Input: Nombre]
[Input: Email corporativo]
[Input: Empresa/Centro]
[Checkbox] Acepto recibir novedades y ofertas

[Botón: Descargar Ahora]
```

---

## 6. Página Sobre Nosotros (`/nosotros`)

### SECCIÓN 1: Hero About
```
[H1] "Más de 25 años creando productos únicos"
[Subtítulo largo] Nuestra historia comenzó en 1995...
[Imagen grande] Equipo / Instalaciones / Proceso productivo
```

### SECCIÓN 2: Nuestra Historia (Timeline)
```
1995 → Fundación
       Primeros pasos en agendas escolares

2005 → Expansión
       Incorporamos merchandising empresarial

2015 → Sostenibilidad
       Certificación ISO y productos eco

2025 → Presente
       Líderes en personalización y calidad
```

### SECCIÓN 3: Nuestros Valores
**Grid 3 columnas:**
1. **Calidad:** Materiales premium y controles rigurosos
2. **Compromiso:** Con nuestros clientes y el medio ambiente
3. **Innovación:** Siempre buscando nuevas soluciones

### SECCIÓN 4: Equipo (Opcional)
- Fotos del equipo directivo o comercial
- Nombres y roles
- "Conoce a las personas detrás de cada proyecto"

### SECCIÓN 5: Instalaciones / Proceso
- Video virtual tour de las instalaciones
- O carousel de fotos: Diseño → Producción → Control de calidad → Envío

### SECCIÓN 6: Certificaciones
- Logos de certificaciones (ISO, FSC, EcoVadis)
- Sellos de calidad
- Asociaciones del sector

---

## 7. Página de Contacto (`/contacto`)

**Layout Dos Columnas:**

### COLUMNA IZQUIERDA: Formulario
```
[H2] "Cuéntanos tu proyecto"

[Input] Nombre *
[Input] Apellidos
[Input] Email *
[Input] Teléfono *
[Input] Empresa / Centro educativo

[Select] Tipo de proyecto *
• Agendas escolares
• Merchandising empresarial
• Textil corporativo
• Papelería
• Otro

[Input Number] Cantidad estimada
[Date Picker] Fecha necesaria (aproximada)

[Textarea] Cuéntanos más sobre tu proyecto *
(Mínimo 50 caracteres)

[Checkbox] He leído y acepto la política de privacidad *
[Checkbox] Quiero recibir novedades y ofertas

[Botón Grande] "Enviar Solicitud"
```

**Validaciones:**
- Campos obligatorios marcados con *
- Email con formato válido
- Teléfono con formato español
- Mensaje de éxito tras envío:
  ```
  ✅ ¡Gracias! Tu solicitud ha sido enviada.
  Te contactaremos en menos de 24 horas.
  ```

---

### COLUMNA DERECHA: Información de Contacto

**Sección 1: Datos Directos**
```
📍 Dirección:
   Calle Ejemplo, 123
   28001 Madrid, España

📞 Teléfono:
   +34 XXX XXX XXX
   (Lun-Vie 9:00-18:00)

✉️ Email:
   info@tuempresa.com
   comercial@tuempresa.com

🕐 Horario:
   Lunes a Viernes: 9:00 - 18:00
   Sábados: 10:00 - 14:00
```

**Sección 2: Mapa Embebido**
- Google Maps iframe
- Ubicación exacta de la oficina/almacén
- Indicaciones para llegar

**Sección 3: Redes Sociales**
```
Síguenos:
[🔵 LinkedIn] [📷 Instagram] [👍 Facebook]
```

---

## 8. Footer Global

**Estructura 5 Columnas (Desktop) / Acordeón (Mobile):**
```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│  [LOGO]              PRODUCTOS          EMPRESA          RECURSOS       │
│                                                                          │
│  Breve descripción   • Agendas         • Sobre          • Blog         │
│  de la empresa       Escolares         Nosotros         • Guía de      │
│  en 2-3 líneas.      • Merchandising   • Equipo          Tallas        │
│                      • Textil          • Carreras        • Tabla de    │
│  Certificaciones:    • Papelería       • Sostenibilidad   Colores      │
│  [ISO] [FSC]         • Productos Eco   • Proveedores     • FAQs        │
│                      • Ver todo        • Prensa          • Descargas   │
│                                        • Contacto                       │
│                                                                          │
│                                              ATENCIÓN AL CLIENTE         │
│                                              • +34 XXX XXX XXX          │
│                                              • info@empresa.com         │
│                                              • Lun-Vie 9:00-18:00      │
│                                              • Solicitar presupuesto   │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│                          SECCIÓN NEWSLETTER                              │
│                                                                          │
│  📧 Suscríbete a nuestra newsletter                                     │
│  Recibe novedades, ofertas exclusivas y consejos                        │
│                                                                          │
│  [Input: Tu email]  [Botón: Suscribirse]                               │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  © 2025 [Nombre Empresa]. Todos los derechos reservados                │
│                                                                          │
│  [Términos y Condiciones] | [Política de Privacidad] | [Política de    │
│  Cookies] | [Aviso Legal]                                               │
│                                                                          │
│  [LinkedIn] [Instagram] [Facebook] [WhatsApp Business]                  │
│                                                                          │
│  Pagos seguros: [Visa] [Mastercard] [PayPal] (si aplica en futuro)    │
│  Certificado SSL | Empresa registrada XXX                               │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

### COLUMNA 1: Identidad de Marca
**Elementos:**
- **Logo:** Versión monocromo o blanco si el footer es oscuro
- **Tagline:** "Tu socio en personalización desde 1995"
- **Descripción breve:** 2-3 líneas sobre la empresa
- **Sellos de Certificación:**
  - ISO 9001
  - FSC (Papel certificado)
  - Certificado Eco/Sostenible
  - Badges interactivos (tooltip al hover con info)

### COLUMNA 2: Productos (Links SEO)
**Título:** "Productos"
**Enlaces:**
- Agendas Escolares
- Agendas Personalizadas
- Merchandising Empresarial
- Textil Corporativo
- Material de Oficina
- Papelería Premium
- Productos Sostenibles
- Ver Catálogo Completo

*Objetivo SEO:* Link juice interno

### COLUMNA 3: Empresa
**Título:** "Conoce [Nombre Empresa]"
**Enlaces:**
- Sobre Nosotros
- Nuestro Equipo
- Historia y Valores
- Sostenibilidad
- Trabaja con Nosotros
- Proveedores
- Sala de Prensa
- Contacto

### COLUMNA 4: Recursos
**Título:** "Recursos Útiles"
**Enlaces:**
- Blog / Noticias
- Catálogos Descargables
- Guía de Tallas (Textil)
- Carta de Colores
- Preguntas Frecuentes (FAQ)
- Área de Clientes (si aplica)
- Condiciones de Personalización
- Plantillas de Diseño

### COLUMNA 5: Atención al Cliente
**Título:** "¿Necesitas ayuda?"
**Contenido:**
```
📞 Teléfono:
   +34 XXX XXX XXX
   
✉️ Email:
   info@empresa.com
   
🕐 Horario:
   Lun-Vie: 9:00 - 18:00
   Sáb: 10:00 - 14:00
   
💬 Chat en vivo
   (Widget flotante)
   
[Botón CTA]
"Solicitar Presupuesto"
```

---

### SECCIÓN NEWSLETTER (Banda superior del footer)
**Diseño:** Fondo destacado (color acento suave o degradado)

**Layout:**
```
┌────────────────────────────────────────────────────────────┐
│  📧  ¡No te pierdas nada!                                  │
│                                                            │
│  Suscríbete y recibe novedades, ofertas exclusivas        │
│  y consejos para tus proyectos de personalización         │
│                                                            │
│  [Input Email] [Botón: Suscribirse]                       │
│                                                            │
│  🔒 No enviamos spam. Darse de baja en cualquier momento  │
└────────────────────────────────────────────────────────────┘
```

**Funcionalidad:**
- Integración con Mailchimp / Brevo / HubSpot
- Validación de email en tiempo real
- Mensaje de confirmación: "¡Gracias! Revisa tu email para confirmar"
- Doble opt-in para RGPD compliance

---

### BOTTOM BAR (Barra inferior)
**Fondo:** Más oscuro que el footer principal

**Layout Izquierda-Centro-Derecha:**

**Izquierda:**
```
© 2025 [Nombre Empresa]. Todos los derechos reservados.
Diseñado con ❤️ en España
```

**Centro:**
```
[Términos] | [Privacidad] | [Cookies] | [Aviso Legal]
```

**Derecha:**
```
[Icon LinkedIn] [Icon Instagram] [Icon Facebook] [Icon WhatsApp]
```

---

## 9. Páginas Legales (Obligatorias RGPD)

### PÁGINA: Política de Privacidad (`/privacidad`)

**Estructura:**
```
[H1] Política de Privacidad

Última actualización: [Fecha]

1. RESPONSABLE DEL TRATAMIENTO
   - Identidad: [Nombre Empresa]
   - NIF: XXXXXXXXX
   - Dirección: [Dirección completa]
   - Email: privacidad@empresa.com

2. DATOS QUE RECOPILAMOS
   2.1. Datos de navegación
   2.2. Datos del formulario de contacto
   2.3. Datos de suscripción newsletter
   2.4. Cookies (enlace a política específica)

3. FINALIDAD DEL TRATAMIENTO
   - Gestión de consultas y presupuestos
   - Envío de comunicaciones comerciales (con consentimiento)
   - Mejora de la experiencia de usuario

4. BASE LEGAL
   - Consentimiento del interesado
   - Ejecución de contrato
   - Interés legítimo

5. CONSERVACIÓN DE DATOS
   - Plazos específicos por tipo de dato

6. DESTINATARIOS
   - No cedemos datos a terceros salvo obligación legal
   - Proveedores de servicios (hosting, email marketing)

7. DERECHOS DEL USUARIO
   - Acceso, rectificación, supresión
   - Limitación, oposición, portabilidad
   - Cómo ejercerlos: email a privacidad@empresa.com

8. MEDIDAS DE SEGURIDAD
   - Cifrado SSL
   - Servidores seguros
   - Copias de seguridad

9. RECLAMACIONES
   - Autoridad de Control: AEPD (www.aepd.es)
```

**Diseño:**
- Tipografía legible (16px mínimo)
- Tabla de contenidos sticky (lateral)
- Links internos a secciones
- Botón "Descargar PDF"

---

### PÁGINA: Política de Cookies (`/cookies`)

**Banner de Cookies (Aparece en primera visita):**
```
┌──────────────────────────────────────────────────────────┐
│  🍪 Este sitio usa cookies                               │
│                                                          │
│  Usamos cookies propias y de terceros para mejorar      │
│  tu experiencia. Puedes aceptar todas o configurarlas.  │
│                                                          │
│  [Rechazar]  [Configurar]  [Aceptar todas]             │
│                                                          │
│  [Más información sobre cookies]                        │
└──────────────────────────────────────────────────────────┘
```

**Panel de Configuración (Modal):**
```
CONFIGURACIÓN DE COOKIES

✅ Cookies Necesarias (No se pueden desactivar)
   Esenciales para el funcionamiento del sitio

□ Cookies Analíticas
   Google Analytics - Nos ayudan a entender cómo usas el sitio

□ Cookies de Marketing
   Meta Pixel, LinkedIn Insight - Personalización de anuncios

[Guardar Preferencias]  [Aceptar Todas]
```

**Contenido de la Página:**
```
[H1] Política de Cookies

1. QUÉ SON LAS COOKIES
2. TIPOS DE COOKIES QUE USAMOS
   
   [Tabla]
   ┌──────────────┬──────────┬──────────┬───────────┐
   │ Nombre       │ Tipo     │ Duración │ Propósito │
   ├──────────────┼──────────┼──────────┼───────────┤
   │ session_id   │ Necesaria│ Sesión   │ Login     │
   │ _ga          │ Analítica│ 2 años   │ Analytics │
   │ consent      │ Necesaria│ 1 año    │ Preferenc.│
   └──────────────┴──────────┴──────────┴───────────┘

3. CÓMO GESTIONARLAS
4. COOKIES DE TERCEROS
5. ACTUALIZACIONES
```

---

### PÁGINA: Términos y Condiciones (`/terminos`)

**Contenido:**
```
[H1] Términos y Condiciones de Uso

1. OBJETO
   - Régimen de uso del sitio web

2. USUARIO
   - Obligaciones y responsabilidades

3. USO DEL SITIO
   - Contenido permitido
   - Prohibiciones

4. PROPIEDAD INTELECTUAL
   - Todos los contenidos son propiedad de [Empresa]
   - Uso autorizado de materiales

5. PROCESO DE COMPRA / PRESUPUESTO
   5.1. Solicitud de presupuesto
   5.2. Aceptación del presupuesto
   5.3. Producción y plazos
   5.4. Entrega
   5.5. Devoluciones y cambios

6. PRECIOS Y PAGOS
   - Precios sujetos a confirmación
   - IVA no incluido salvo indicación
   - Formas de pago aceptadas

7. GARANTÍAS
   - Productos defectuosos
   - Errores de producción

8. LIMITACIÓN DE RESPONSABILIDAD

9. MODIFICACIONES

10. LEY APLICABLE Y JURISDICCIÓN
    - Legislación española
    - Tribunales de [Ciudad]
```

---

### PÁGINA: Aviso Legal (`/aviso-legal`)

**Contenido:**
```
[H1] Aviso Legal

En cumplimiento del artículo 10 de la Ley 34/2002...

1. DATOS IDENTIFICATIVOS
   - Titular: [Nombre Empresa S.L.]
   - NIF: BXXXXXXXX
   - Domicilio: [Dirección completa]
   - Email: info@empresa.com
   - Teléfono: +34 XXX XXX XXX
   - Registro Mercantil: [Datos]

2. OBJETO
   - Información sobre la actividad
   - Venta de agendas, merchandising y textil personalizado

3. CONDICIONES DE USO

4. PROPIEDAD INTELECTUAL E INDUSTRIAL

5. EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD

6. PROTECCIÓN DE DATOS
   (Enlace a Política de Privacidad)

7. LEGISLACIÓN APLICABLE
```

---

## 10. Página de Blog (`/blog`)

**Objetivo:** SEO, engagement, autoridad

### BLOG HOME

**Hero:**
```
[H1] "Blog y Recursos"
[Subtítulo] "Consejos, tendencias y novedades sobre 
             personalización y merchandising"

[Buscador interno del blog]
```

**Categorías (Tabs o Pills):**
```
[Todos] [Tendencias] [Consejos] [Casos de Éxito] [Sostenibilidad]
```

**Grid de Artículos:**
```
┌─────────────────────────────┐
│  [Imagen Featured]          │
│                             │
│  [Categoría Badge]          │
│  Título del Artículo        │
│  Breve extracto de 2 líneas │
│  que atraiga al lector...   │
│                             │
│  [Avatar] Autor | 📅 Fecha  │
│  ⏱️ 5 min lectura           │
│                             │
│  [Leer más →]              │
└─────────────────────────────┘
```

**Sidebar (Opcional):**
- Artículos más populares
- Categorías con contador
- Newsletter signup
- Descarga de catálogos

**Paginación:** Estilo "Load more" o numerada

---

### BLOG POST (Artículo Individual)

**Estructura:**
```
[Breadcrumb] Blog > [Categoría] > [Título]

[Imagen Hero Grande]

[Categoría Badge]
[H1] Título del Artículo

[Autor Info]
Por [Nombre] | 📅 15 Nov 2025 | ⏱️ 8 min | 💬 3 comentarios

[Social Share] [LinkedIn] [Twitter] [Facebook] [Copy Link]

───────────────────────────────────────────────────

[Contenido del artículo en HTML limpio]

• Párrafos espaciados
• Subtítulos H2, H3
• Imágenes inline con captions
• Listas bullet/numbered
• Blockquotes para destacar
• CTAs inline (ej: "Descarga nuestra guía")

───────────────────────────────────────────────────

[Tags] #merchandising #sostenibilidad #agendas

[Share again] Comparte este artículo

[Autor Bio Box]
┌────────────────────────────────────────┐
│ [Avatar] Sobre [Nombre Autor]          │
│ Breve bio del autor...                 │
│ [Ver más artículos de este autor]      │
└────────────────────────────────────────┘

[Artículos Relacionados - Carousel]
```

**Artículos Sugeridos (Ejemplos):**
1. "10 ideas creativas para merchandising de empresa en 2025"
2. "Cómo elegir la agenda escolar perfecta para tu centro"
3. "Productos eco-friendly: La tendencia que llegó para quedarse"
4. "Guía completa: Preparar archivos para impresión"
5. "Casos de éxito: Cómo Empresa X renovó su imagen corporativa"

---

## 11. Página de Preguntas Frecuentes (`/faq`)

**Hero:**
```
[H1] "Preguntas Frecuentes"
[Subtítulo] "Resolvemos tus dudas más comunes"

[Buscador] "Busca tu pregunta..."
```

**Categorías con Acordeones:**

### CATEGORÍA 1: Pedidos y Presupuestos
```
▼ ¿Cuál es el pedido mínimo?
  Depende del producto. Generalmente desde 25-50 unidades 
  para agendas y 10-25 para textil. Consúltanos para tu caso.

▼ ¿Cómo solicito un presupuesto?
  Pasos detallados con enlaces...

▼ ¿Cuánto tarda en llegar mi pedido?
  [Tabla de plazos por tipo de producto]

▼ ¿Puedo ver una muestra antes de producir?
  Sí, ofrecemos muestras digitales (mockups) gratuitas...
```

### CATEGORÍA 2: Personalización y Diseño
```
▼ ¿Qué formatos de archivo aceptan?
  AI, EPS, PDF, PNG de alta resolución...

▼ ¿Ofrecen servicio de diseño?
  Sí, nuestro equipo puede ayudarte...

▼ ¿Puedo personalizar cualquier producto?
  La mayoría sí. Consulta opciones específicas...

▼ ¿Cuántos colores puedo usar en mi diseño?
  Depende del método de impresión...
```

### CATEGORÍA 3: Pagos y Facturación
```
▼ ¿Qué formas de pago aceptan?
▼ ¿Emiten factura?
▼ ¿Los precios incluyen IVA?
```

### CATEGORÍA 4: Envíos y Devoluciones
```
▼ ¿Envían a toda España?
▼ ¿Cuál es el coste de envío?
▼ ¿Puedo devolver un producto personalizado?
▼ ¿Qué pasa si hay un error en mi pedido?
```

### CATEGORÍA 5: Sostenibilidad
```
▼ ¿Qué productos eco-friendly ofrecen?
▼ ¿Tienen certificaciones ambientales?
▼ ¿Los materiales son reciclados?
```

**Interacción:**
- Click en pregunta: Abre respuesta con animación suave
- Icono +/- que rota
- Highlight en hover
- Deep linking: Compartir link de pregunta específica

**Footer de Sección:**
```
¿No encuentras tu respuesta?

[Botón: Contacta con nosotros]
o llámanos: +34 XXX XXX XXX
```

---

## 12. Funcionalidades Adicionales y Widgets

### WIDGET: Chat en Vivo / WhatsApp
**Ubicación:** Botón flotante (fixed bottom-right)

**Diseño:**
```
[Botón circular verde con icono WhatsApp]
Hover: "¿Necesitas ayuda?"
```

**Click:** Abre widget de chat o redirige a WhatsApp Business
```
WhatsApp: wa.me/34XXXXXXXXX?text=Hola,%20necesito%20información...
```

**Alternativa:** Integración de Tidio, Crisp, Intercom para chat web

---

### WIDGET: Buscador Avanzado
**Trigger:** Click en lupa del header

**Modal de búsqueda:**
```
┌────────────────────────────────────────────┐
│                                            │
│  [Input grande: "Buscar productos..."]     │
│                                            │
│  BÚSQUEDAS POPULARES                       │
│  • Agendas escolares                       │
│  • Botellas personalizadas                 │
│  • Camisetas corporativas                  │
│                                            │
│  CATEGORÍAS RÁPIDAS                        │
│  [Agendas] [Textil] [Merchandising]       │
│                                            │
└────────────────────────────────────────────┘
```

**Con resultados:**
```
PRODUCTOS (4)
━━━━━━━━━━━━━━━━━━━━━
[Thumbnail] Agenda Escolar Premium...
[Thumbnail] Agenda Personalizada...

PÁGINAS (2)
━━━━━━━━━━━━━━━━━━━━
📄 Sobre Nosotros
📄 Catálogos Descargables

BLOG (1)
━━━━━━━━━━━━━━━━━━━━
📝 Cómo elegir tu agenda perfecta
```

---

### SISTEMA: Breadcrumbs (Migas de pan)
**En todas las páginas internas:**
```
Inicio > Productos > Agendas Escolares > Agenda Premium A4

(Cada elemento es clickeable hasta el actual)
```

**Estilo:**
- Texto gris
- Separador: `/` o `>`
- Página actual: Bold y no clickeable
- Hover: Subrayado

---

### COMPONENTE: Tabla de Tallas (Textil)
**Modal emergente desde PDP:**

```
GUÍA DE TALLAS - CAMISETAS

┌────────┬──────┬──────┬──────┬──────┬──────┐
│ Talla  │  XS  │  S   │  M   │  L   │  XL  │
├────────┼──────┼──────┼──────┼──────┼──────┤
│ Pecho  │ 86cm │ 91cm │ 96cm │101cm │106cm │
│ Largo  │ 66cm │ 69cm │ 72cm │ 75cm │ 78cm │
│ Manga  │ 19cm │ 20cm │ 21cm │ 22cm │ 23cm │
└────────┴──────┴──────┴──────┴──────┴──────┘

[Imagen: Cómo medir correctamente]

💡 Consejo: Si estás entre dos tallas, elige la mayor.
```

---

### FUNCIONALIDAD: Comparador de Productos (Opcional)
**Desde catálogo:**
- Checkbox en cada card: "Comparar"
- Botón sticky bottom: "Comparar (3) productos"

**Tabla comparativa:**
```
┌─────────────┬───────────┬───────────┬───────────┐
│             │ Producto A│ Producto B│ Producto C│
├─────────────┼───────────┼───────────┼───────────┤
│ [Imagen]    │ [Img]     │ [Img]     │ [Img]     │
│ Precio desde│ 6.50€     │ 7.80€     │ 8.90€     │
│ Material    │ Papel 90g │ Papel 100g│ Eco 80g   │
│ Colores     │ 8         │ 12        │ 6         │
│ Eco         │ ✗         │ ✗         │ ✓         │
│             │ [Detalle] │ [Detalle] │ [Detalle] │
└─────────────┴───────────┴───────────┴───────────┘
```

---

## 13. Páginas de Casos de Uso (Landing Pages Específicas)

### LANDING: Agendas para Colegios (`/agendas-colegios`)

**Hero Específico:**
```
[H1] "Agendas Escolares Personalizadas para tu Centro"
[Subtítulo] "Diseño exclusivo, calidad premium y entrega garantizada 
             antes del inicio del curso"

[Imagen: Niños felices con agendas personalizadas]

[CTAs]
[Ver Modelos de Agendas] [Solicitar Muestras Gratis]
```

**Beneficios Específicos (Iconos + Texto):**
- 📚 Diseño adaptado a tu proyecto educativo
- ✅ Revisión y aprobación antes de imprimir
- 🎨 Colores corporativos de tu colegio
- 📦 Entrega antes del inicio de curso
- 💰 Precios especiales para centros educativos

**Sección: Modelos Populares**
- Grid con los 3-4 modelos más vendidos a colegios
- Badges: "Más vendido", "Primaria", "Secundaria"

**Testimonios:**
```
"Llevamos 5 años trabajando con ellos. Las agendas son de 
excelente calidad y el servicio impecable."
- Colegio San José, Madrid
★★★★★
```

**CTA Final:**
```
¿Preparado para el próximo curso?
[Botón: Solicitar Presupuesto Sin Compromiso]
```

---

### LANDING: Merchandising Empresarial (`/merchandising-empresas`)

**Hero:**
```
[H1] "Merchandising Corporativo que Representa tu Marca"
[Subtítulo] "Regalos de empresa, welcome kits y productos 
             promocionales 100% personalizados"

[Video corto: Unboxing de welcome kit corporativo]
```

**Casos de Uso:**
1. **Onboarding de Empleados** → Welcome kits
2. **Eventos Corporativos** → Material promocional
3. **Regalos a Clientes** → Detalles premium
4. **Ferias y Stands** → Merchandising masivo

**Productos Destacados para Empresas:**
- Kits de bienvenida completos
- USB y tech gadgets
- Botellas y termos personalizados
- Libretas y agendas corporativas
- Textil con bordado

**Proceso para Empresas:**
```
1. CONSULTA → Cuéntanos tus necesidades
2. PROPUESTA → Recibe 2-3 opciones visuales
3. PRODUCCIÓN → Fabricamos con calidad premium
4. ENTREGA → Recibe en tu oficina o evento
```

---

### LANDING: Productos Sostenibles (`/eco-friendly`)

**Hero:**
```
[H1] "Merchandising Sostenible para tu Marca"
[Subtítulo] "Productos eco-friendly que cuidan el planeta 
             sin renunciar a la calidad"

[Fondo: Verde natural, productos con materiales reciclados]
```

**Certificaciones Destacadas:**
- FSC (Papel certificado)
- GOTS (Textil orgánico)
- Plástico reciclado
- Materiales biodegradables

**Productos Eco:**
- Agendas en papel reciclado
- Botellas de acero inoxidable
- Bolsas de algodón orgánico
- Libretas de papel piedra
- Bolígrafos de bambú

**Sección: Tu Impacto Positivo**
```
Con tu pedido de 100 agendas eco:
🌳 Salvas 2 árboles
💧 Ahorras 50L de agua
♻️ Reciclas 5kg de papel
```

---

## 14. Optimización SEO y Rendimiento

### SEO On-Page (Checklist)

**Cada Página debe tener:**
- ✅ Title único (50-60 caracteres)
- ✅ Meta Description (150-160 caracteres)
- ✅ URL amigable (slug limpio)
- ✅ H1 único y descriptivo
- ✅ Jerarquía H2, H3 lógica
- ✅ Alt text en todas las imágenes
- ✅ Internal linking estratégico
- ✅ Schema Markup (JSON-LD)

**Schema Markup Específico:**

**Home:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "[Nombre Empresa]",
  "url": "https://www.tuempresa.com",
  "logo": "https://www.tuempresa.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+34-XXX-XXX-XXX",
    "contactType": "Customer Service"
  },
  "sameAs": [
    "https://www.linkedin.com/company/tuempresa",
    "https://www.instagram.com/tuempresa"
  ]
}
```

**Productos:**
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Agenda Escolar Premium",
  "image": "[URL imagen]",
  "description": "...",
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "6.50",
    "priceCurrency": "EUR"
  }
}
```

---

### Performance Optimization

**Imágenes:**
- Formato: WebP con fallback JPG
- Lazy loading en imágenes below-the-fold
- Responsive images (srcset)
- CDN para assets estáticos
- Compresión: TinyPNG / ImageOptim

**Código:**
- Minificación CSS/JS
- Code splitting (carga bajo demanda)
- Defer non-critical JS
- Critical CSS inline
- Tree shaking (eliminar código no usado)

**Hosting:**
- Servidor con HTTP/2 o HTTP/3
- GZIP/Brotli compression
- Browser caching headers
- CDN: Cloudflare / AWS CloudFront

**Core Web Vitals Objetivo:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

---

## 15. Integraciones y APIs

### Email Marketing
**Plataforma sugerida:** Mailchimp / Brevo (Sendinblue) / HubSpot

**Automatizaciones:**
1. **Welcome Email** (Suscripción newsletter)
2. **Recordatorio de presupuesto** (48h después de solicitud)
3. **Seguimiento post-proyecto** (Satisfacción)
4. **Newsletter mensual** (Novedades y ofertas)

---

### CRM Integration (Opcional)
**Si el cliente escala:** HubSpot CRM / Pipedrive

**Funcionalidad:**
- Formularios → Leads automáticos en CRM
- Tracking de interacciones
- Pipeline de ventas
- Segmentación de contactos

---

### Analytics
**Google Analytics 4:**
- Eventos personalizados:
  - `view_product`
  - `add_to_quote`
  - `submit_quote_request`
  - `download_catalog`
  - `newsletter_signup`

**Google Search Console:**
- Monitoreo de indexación
- Análisis de keywords
- Detección de errores 404
- Mejoras de rendimiento

**Hotjar / Microsoft Clarity (Opcional):**
- Heatmaps de clics
- Session recordings
- Funnel analysis
- Feedback widgets

---

### Gestión de Formularios
**Herramienta:** Formspree / Netlify Forms / Custom API

**Flujo tras envío de formulario:**
1. **Validación** → Frontend + Backend
2. **Almacenamiento** → Base de datos / Google Sheets
3. **Notificación Email** → Al equipo comercial
4. **Autoresponder** → Email confirmación al cliente
5. **CRM** → Crear lead automáticamente

**Email Template (Autoresponder):**
```
Asunto: ✅ Hemos recibido tu solicitud - [Nombre Empresa]

Hola [Nombre],

¡Gracias por contactar con nosotros! Hemos recibido tu solicitud 
de presupuesto para [tipo de proyecto].

📋 Resumen de tu solicitud:
- Producto: [X]
- Cantidad estimada: [Y]
- Fecha necesaria: [Z]

Nuestro equipo comercial revisará tu consulta y te contactará 
en menos de 24 horas laborables.

Mientras tanto, puedes:
🔸 Ver nuestros catálogos: [Link]
🔸 Explorar casos de éxito: [Link]
🔸 Contactarnos directamente: +34 XXX XXX XXX

¡Estamos deseando trabajar contigo!

Equipo [Nombre Empresa]
```

---

## 16. Área de Cliente (Opcional - Fase 2)

### LOGIN PAGE (`/login`)

**Layout:**
```
┌────────────────────────────────────────┐
│                                        │
│         [LOGO]                         │
│                                        │
│    Accede a tu Área de Cliente        │
│                                        │
│    [Input: Email]                      │
│    [Input: Contraseña]                 │
│    [Checkbox] Recordarme               │
│                                        │
│    [Botón: Iniciar Sesión]            │
│                                        │
│    ¿Olvidaste tu contraseña?          │
│                                        │
│    ────────── o ──────────             │
│                                        │
│    ¿Primera vez aquí?                  │
│    [Registrarse]                       │
│                                        │
└────────────────────────────────────────┘
```

**Funcionalidades:**
- Recuperación de contraseña
- Registro de nuevo cliente
- OAuth (opcional): Google / LinkedIn

---

### DASHBOARD CLIENTE (`/dashboard`)

**Navegación Lateral:**
```
📊 Panel de control
📦 Mis Pedidos
💰 Presupuestos
📄 Facturas
⭐ Favoritos
👤 Mi Perfil
🚪 Cerrar Sesión
```

**Panel Principal:**
```
┌─────────────────────────────────────────────────┐
│  Bienvenido, [Nombre]                           │
│                                                 │
│  RESUMEN RÁPIDO                                 │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│  │ Pedidos  │ │Presupues.│ │ Favoritos│       │
│  │    3     │ │    2     │ │    8     │       │
│  └──────────┘ └──────────┘ └──────────┘       │
│                                                 │
│  PEDIDOS RECIENTES                              │
│  ┌───────────────────────────────────────────┐ │
│  │ #12345 | Agendas Escolares | En producción│ │
│  │ #12344 | Kit Bienvenida    | Entregado    │ │
│  └───────────────────────────────────────────┘ │
│                                                 │
│  ACCIONES RÁPIDAS                               │
│  [Nuevo Presupuesto] [Ver Catálogo]           │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Sección: Mis Pedidos**
```
FILTROS: [Todos] [En curso] [Completados] [Cancelados]

┌──────────────────────────────────────────────────┐
│ Pedido #12345                    Estado: ⚙️ En producción
│ 
│ 500x Agendas Escolares Personalizadas
│ Fecha pedido: 15 Nov 2024
│ Entrega estimada: 30 Nov 2024
│ 
│ [Ver Detalles] [Descargar Factura] [Contactar]
└──────────────────────────────────────────────────┘
```

**Detalle de Pedido:**
```
PEDIDO #12345

TIMELINE:
✅ Pedido confirmado (15 Nov)
✅ Diseño aprobado (17 Nov)
⚙️ En producción (18 Nov) ← Estado actual
⏳ Control de calidad
⏳ Envío
⏳ Entregado

PRODUCTOS:
• 500x Agenda Escolar Premium A4
  Color: Azul corporativo
  Personalización: Logo en portada

DETALLES DE ENVÍO:
📍 Colegio San José
   Calle Ejemplo 123, Madrid

DOCUMENTOS:
📄 Factura proforma
📄 Albarán (disponible tras envío)
📄 Factura final (disponible tras entrega)
```

---

## 17. Elementos de Conversión y UX

### Trust Signals (Señales de Confianza)

**Ubicaciones estratégicas:**

**Homepage Hero:**
```
Con la confianza de más de 500 empresas y colegios

[Logo Cliente 1] [Logo Cliente 2] [Logo Cliente 3] [Logo Cliente 4]
```

**PDP (Página de Producto):**
```
✓ Envío asegurado
✓ Garantía de satisfacción
✓ Pago seguro SSL
✓ 25 años de experiencia
```

**Footer:**
```
[Badge: Certificado SSL]
[Badge: ISO 9001]
[Badge: FSC]
[Badge: Pago Seguro]
```

---

### Elementos de Urgencia (Escasez - Usar con honestidad)

**En productos con stock limitado:**
```
⚠️ Solo quedan 15 unidades en stock
🔥 12 personas viendo este producto ahora
⏰ Pedido antes de las 14h → Envío hoy mismo
```

**En landing de agendas escolares (temporal):**
```
🎒 Campaña Vuelta al Cole
   Descuento especial hasta el 30 de Junio
   
   [Contador regresivo]
   23 días : 14 horas : 32 min
```

---

### Social Proof Dinámico

**Widget de actividad reciente:**
```
┌────────────────────────────────────┐
│ 🔔 Actividad reciente              │
│                                    │
│ • María G. solicitó presupuesto    │
│   para 200 agendas                 │
│   Hace 5 minutos                   │
│                                    │
│ • Colegio Santa Ana descargó       │
│   el catálogo escolar              │
│   Hace 18 minutos                  │
└────────────────────────────────────┘
```

**Ubicación:** Popup discreto (bottom-left), aparece cada 30-60s

---

### Badges de Calidad y Certificación

**Diseño de badges personalizados:**

```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   🌱 ECO     │  │   ⭐ PREMIUM │  │   ✓ ISO      │
│  FRIENDLY    │  │   QUALITY    │  │   9001       │
└──────────────┘  └──────────────┘  └──────────────┘

┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   🚚 ENVÍO   │  │  💯 GARANTÍA │  │   👥 +500    │
│   24-48H     │  │  SATISFACC.  │  │   CLIENTES   │
└──────────────┘  └──────────────┘  └──────────────┘
```

---

### Popups y Modales (Usar con moderación)

**Exit-Intent Popup (Solo desktop):**
```
┌──────────────────────────────────────────────┐
│  [X]                                         │
│                                              │
│     ¡Espera! 🎁                              │
│                                              │
│     Descarga GRATIS nuestro catálogo         │
│     de productos 2025                        │
│                                              │
│     [Input: Tu email]                        │
│     [Botón: Descargar Ahora]                │
│                                              │
│     🔒 No spam, prometido                    │
│                                              │
└──────────────────────────────────────────────┘
```

**Timing:** Solo aparece 1 vez por sesión, al detectar intención de salida

**Newsletter Popup (Timed):**
- Aparece después de 45-60 segundos en el sitio
- O después de scroll del 50% de la página
- Cookie para no molestar (7 días)

---

## 18. Responsive Design y Mobile Experience

### Mobile-First Approach

**Header Mobile:**
```
┌────────────────────────────────────┐
│  ☰        [LOGO]          🔍      │
└────────────────────────────────────┘
```

**Características:**
- Altura reducida: 56px
- Logo centrado o izquierda
- Hamburguesa: Izquierda
- Búsqueda: Icono derecha

---

### Adaptaciones Mobile Críticas

**Cards de Producto:**
- Grid: 1 columna mobile / 2 tablet / 3-4 desktop
- Imágenes: Ratio 1:1 (cuadradas) para consistencia
- Touch targets: Mínimo 48x48px

**Formularios:**
```
[Input: Nombre completo]
(100% ancho, stack vertical)

[Input: Email]

[Input: Teléfono]
(type="tel" para teclado numérico)

[Select: Tipo de proyecto]
(Native select en mobile)

[Textarea: Mensaje]
(Min-height: 120px)

[Botón: Enviar Consulta]
(100% ancho, altura 48px)
```

**Mega Menu Mobile:**
- Acordeones en lugar de hover
- Iconos + texto
- Espaciado generoso (touch-friendly)
- Swipe para cerrar

---

### Gestos Táctiles

**Galería de Producto:**
- Swipe horizontal entre imágenes
- Pinch to zoom
- Double tap para ampliar

**Carousel:**
- Swipe con inercia
- Indicadores de punto grandes

**Menú:**
- Swipe desde borde para abrir/cerrar
- Tap en overlay oscuro para cerrar

---

## 19. Accesibilidad (A11y)

### WCAG 2.1 Nivel AA Compliance

**Contraste de Color:**
- Texto normal: Ratio mínimo 4.5:1
- Texto grande (18px+): Ratio mínimo 3:1
- Herramienta: WebAIM Contrast Checker

**Navegación por Teclado:**
- Todos los elementos interactivos accesibles con Tab
- Focus visible (outline claro)
- Skip to content link
- Orden lógico de tabulación

**Imágenes:**
- Alt text descriptivo en todas las imágenes
- Imágenes decorativas: `alt=""`
- Iconos funcionales: texto alternativo

**Formularios:**
```html
<label for="nombre">Nombre completo *</label>
<input 
  id="nombre" 
  type="text" 
  required 
  aria-required="true"
  aria-describedby="nombre-error"
>
<span id="nombre-error" role="alert">
  Este campo es obligatorio
</span>
```

**ARIA Labels:**
- `aria-label` en iconos sin texto
- `aria-expanded` en acordeones
- `role="navigation"` en menús
- `role="alert"` para mensajes de error

**Video/Multimedia:**
- Subtítulos en videos
- Transcripciones disponibles
- Controles accesibles

---

### Herramientas de Testing:
- Lighthouse (Chrome DevTools)
- WAVE Browser Extension
- axe DevTools
- Screen reader: NVDA (Windows) / VoiceOver (Mac)

---

## 20. Seguridad y Protección de Datos

### Certificado SSL/TLS
- **Obligatorio:** HTTPS en todo el sitio
- Certificado: Let's Encrypt (gratuito) o comercial
- Redirección automática HTTP → HTTPS
- HSTS headers

---

### Formularios Seguros

**Protección contra Spam:**
- Google reCAPTCHA v3 (invisible)
- Honeypot fields (campos ocultos)
- Rate limiting (máx. 3 envíos por hora por IP)
- Validación server-side

**Sanitización de Inputs:**
- Escape de caracteres especiales
- Validación de tipos de dato
- Límite de caracteres
- Prevención de SQL Injection / XSS

---

### RGPD Compliance Checklist

**✅ Consentimiento explícito:**
- Checkboxes no pre-marcados
- Lenguaje claro: "Acepto el tratamiento de mis datos"
- Separar consentimientos (newsletter vs contacto)

**✅ Información transparente:**
- Política de privacidad accesible
- Quién trata los datos
- Para qué se usan
- Cuánto tiempo se guardan

**✅ Derechos del usuario:**
- Email de contacto: privacidad@empresa.com
- Procedimiento claro para ejercer derechos (ARCO)
- Respuesta en máximo 30 días

**✅ Cookies:**
- Banner visible en primera visita
- Opciones de configuración
- Cookies no esenciales solo tras consentimiento

**✅ Terceros:**
- DPA (Data Processing Agreement) con proveedores
- Google Analytics con IP anonimizada
- Servidores en UE preferiblemente

---

## 21. Testing y Quality Assurance

### Checklist Pre-Launch

**Funcionalidad:**
- [ ] Todos los enlaces funcionan (no 404s)
- [ ] Formularios envían correctamente
- [ ] Emails de confirmación llegan
- [ ] Búsqueda devuelve resultados relevantes
- [ ] Filtros de catálogo funcionan
- [ ] Modales y popups se cierran correctamente
- [ ] Videos/medios se cargan

**Cross-Browser:**
- [ ] Chrome (últimas 2 versiones)
- [ ] Firefox (últimas 2 versiones)
- [ ] Safari (últimas 2 versiones)
- [ ] Edge (últimas 2 versiones)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

**Responsive:**
- [ ] 320px (móvil pequeño)
- [ ] 375px (iPhone SE)
- [ ] 768px (tablet)
- [ ] 1024px (tablet landscape)
- [ ] 1280px (laptop)
- [ ] 1920px+ (desktop)

**Performance:**
- [ ] Lighthouse Score: >90
- [ ] Tiempo de carga: <3s
- [ ] Imágenes optimizadas (WebP)
- [ ] No errores de consola

**SEO:**
- [ ] Titles únicos en todas las páginas
- [ ] Meta descriptions
- [ ] Alt text en imágenes
- [ ] Sitemap.xml generado
- [ ] Robots.txt configurado
- [ ] Schema markup implementado
- [ ] Google Search Console configurado

**Accesibilidad:**
- [ ] Test con screen reader
- [ ] Navegación completa por teclado
- [ ] Contraste de colores conforme
- [ ] WAVE test sin errores críticos

**Seguridad:**
- [ ] SSL activo
- [ ] Formularios con protección spam
- [ ] Headers de seguridad configurados
- [ ] Backups automáticos configurados

---

## 22. Métricas y KPIs a Monitorizar

### Métricas de Tráfico
- **Visitantes únicos** (mensual)
- **Páginas vistas** por sesión
- **Tasa de rebote** (objetivo: <50%)
- **Duración media** de sesión
- **Fuentes de tráfico** (Orgánico / Directo / Referral / Social)

### Métricas de Conversión
- **Solicitudes de presupuesto** (objetivo principal)
- **Descargas de catálogo**
- **Suscripciones a newsletter**
- **Llamadas telefónicas** (tracking con número dinámico)
- **Clics en WhatsApp**

### Métricas de Producto
- **Productos más vistos**
- **Categorías más populares**
- **Términos de búsqueda**
- **Productos añadidos a "favoritos" o "comparar"**

### Funnel de Conversión
```
1000 visitantes
  ↓ 40%
400 vieron productos
  ↓ 25%
100 llegaron a PDP
  ↓ 15%
15 rellenaron formulario contacto
  ↓ 60%
9 solicitudes válidas convertidas en venta
```

**Objetivo:** Optimizar cada paso del funnel

---

## 23. Mantenimiento y Actualizaciones

### Rutinas de Mantenimiento

**Semanales:**
- Revisar formularios de contacto (spam)
- Responder comentarios del blog
- Actualizar productos destacados en home

**Mensuales:**
- Revisar Analytics y ajustar estrategia
- Actualizar catálogo de productos
- Publicar 2-4 artículos de blog
- Revisar links rotos (Screaming Frog)
- Actualizar imágenes hero/banners

**Trimestrales:**
- Auditoría SEO completa
- Actualización de contenido legal (si aplica)
- Review de velocidad y performance
- Actualizar certificados/sellos

**Anuales:**
- Renovación SSL
- Backup completo descargado offline
- Actualización de tecnología (frameworks)
- Rediseño parcial según tendencias

---

### Plan de Contenidos (Blog)

**Calendario Editorial Sugerido:**

**Enero:**
- "Tendencias en merchandising empresarial 2025"
- "Cómo preparar tu centro para el próximo curso escolar"

**Febrero:**
- "Ideas creativas para regalos de empresa en San Valentín"
- "La importancia de los materiales sostenibles"

**Marzo:**
- "Guía completa: Organiza tu evento corporativo"
- "Casos de éxito: Rebranding de [Cliente]"

**Abril-Mayo:**
- "Especial Vuelta al Cole: Agendas escolares 2025-2026"
- "Check list: Lo que necesitas para tu campaña de verano"

**Septiembre:**
- "Vuelta al trabajo: Welcome kits para nuevos empleados"
- "Cómo elegir la agenda perfecta para tu equipo"

**Noviembre-Diciembre:**
- "Regalos corporativos para Navidad con sentido"
- "Cierre de año: Agradece a tus clientes con estilo"

---

## 24. Estrategia de Lanzamiento

### Fase 1: Pre-Lanzamiento (2-3 semanas antes)

**Técnico:**
- [ ] Dominio registrado y DNS configurado
- [ ] Hosting contratado y sitio en staging
- [ ] SSL instalado
- [ ] Emails corporativos configurados
- [ ] Google Analytics y Search Console

**Contenido:**
- [ ] Todas las páginas completas
- [ ] Imágenes optimizadas subidas
- [ ] Catálogos PDF finalizados
- [ ] 3-5 artículos de blog iniciales

**Marketing:**
- [ ] Redes sociales creadas/optimizadas
- [ ] Newsletter template diseñado
- [ ] Lista inicial de contactos importada
- [ ] Teaser en redes: "Próximamente..."

---

### Fase 2: Lanzamiento (Semana 1)

**Día 1:**
- ✅ Sitio web en vivo
- 📧 Email a base de datos existente anunciando web
- 📱 Publicación en redes sociales
- 📰 Nota de prensa a medios locales (opcional)

**Semana 1:**
- Monitoreo intensivo de Analytics
- Respuesta rápida a consultas
- Recopilar feedback de primeros usuarios
- Ajustes menores de UX si se detectan problemas

---

### Fase 3: Post-Lanzamiento (Mes 1-3)

**SEO:**
- Alta en Google My Business
- Alta en directorios del sector
- Estrategia de link building básica
- Publicación constante blog (2x/semana)

**Marketing:**
- Campaña Google Ads (si presupuesto)
- Facebook/Instagram Ads (Remarketing)
- Email marketing semanal/quincenal
- Colaboraciones con colegios/empresas

**Optimización:**
- A/B testing de CTAs
- Heatmaps y ajustes según comportamiento
- Optimización de conversión en formularios
- Mejora de páginas con alta tasa de rebote

---

## 25. Presupuesto Estimado y Timeline

### Desglose de Inversión (Estimaciones)

**Desarrollo Web:**
- Diseño UI/UX: 2.000€ - 4.000€
- Desarrollo Frontend: 3.000€ - 6.000€
- Desarrollo Backend: 2.000€ - 4.000€
- Integraciones (Email, CRM): 500€ - 1.500€
- **Total Desarrollo: 7.500€ - 15.500€**

**Contenido:**
- Fotografía de producto: 1.000€ - 3.000€
- Copywriting: 800€ - 1.500€
- Producción video (si aplica): 1.500€ - 5.000€
- **Total Contenido: 3.300€ - 9.500€**

**Infraestructura (Anual):**
- Dominio: 15€/año
- Hosting profesional: 200€ - 600€/año
- SSL Premium (opcional): 50€ - 200€/año
- Email marketing (500 contactos): 0€ - 300€/año
- **Total Infraestructura: 265€ - 1.115€/año**

**Mantenimiento (Mensual):**
- Soporte técnico: 100€ - 300€/mes
- Actualización contenido: 150€ - 400€/mes
- SEO básico: 200€ - 500€/mes
- **Total Mantenimiento: 450€ - 1.200€/mes**

---

### Timeline de Desarrollo

**Semana 1-2: Planificación**
- Reuniones con cliente
- Definición de requerimientos
- Wireframes y arquitectura
- Selección de tecnología

**Semana 3-4: Diseño**
- Moodboard y paleta de colores
- Diseño UI de páginas clave
- Aprobación cliente
- Design system completo

**Semana 5-8: Desarrollo**
- Setup de proyecto
- Desarrollo de componentes
- Integración de contenido
- Funcionalidades (formularios, filtros)

**Semana 9: Testing**
- QA completo
- Testing cross-browser
- Testing mobile
- Corrección de bugs

**Semana 10: Lanzamiento**
- Migración a producción
- Configuración DNS
- Monitoreo intensivo
- Ajustes post-launch

**Total: 10-12 semanas**

---

## 26. Documentación para el Cliente

### Manual de Usuario (Entregable)

**Secciones del Manual:**

1. **Acceso al Panel de Administración**
   - URL de acceso
   - Credenciales
   - Recuperación de contraseña

2. **Gestión de Productos**
   - Cómo añadir nuevo producto
   - Actualizar imágenes
   - Modificar descripciones
   - Gestionar stock/disponibilidad

3. **Gestión de Contenido**
   - Editar textos de páginas
   - Actualizar banners del home
   - Cambiar imágenes de categorías
   - Publicar artículos de blog

4. **Gestión de Formularios**
   - Ver solicitudes recibidas
   - Exportar leads a Excel
   - Responder a consultas

5. **Catálogos PDF**
   - Cómo subir nuevos catálogos
   - Reemplazar versiones antiguas
   - Tracking de descargas

6. **Newsletter**
   - Crear campaña
   - Segmentar lista
   - Analizar resultados

7. **Analítica Básica**
   - Acceso a Google Analytics
   - Métricas clave a monitorizar
   - Informes mensuales

8. **Mantenimiento Básico**
   - Actualizar plugin/sistema
   - Realizar backup manual
   - Contacto soporte técnico

---

### Guía de Estilo y Brand Guidelines

**Documento separado con:**

**Logotipo:**
- Versiones (color, monocromo, negativo)
- Área de seguridad
- Tamaños mínimos
- Usos incorrectos

**Colores:**
- Códigos HEX, RGB, CMYK
- Uso por tipo de aplicación
- Combinaciones aprobadas

**Tipografía:**
- Fuentes primarias y secundarias
- Tamaños y pesos
- Jerarquía tipográfica

**Fotografía:**
- Estilo visual (luz, composición)
- Qué hacer / qué no hacer
- Tratamiento de color

**Iconografía:**
- Biblioteca de iconos
- Estilo (outline/solid)
- Tamaños

**Tono de Comunicación:**
- Personalidad de marca
- Palabras clave
- Ejemplos de copy correcto/incorrecto

---

## 27. Recursos y Assets Necesarios

### Lista de Entregables del Cliente

**Antes de Empezar:**
- [ ] Logo (vectorial .AI o .EPS)
- [ ] Manual de identidad corporativa (si existe)
- [ ] Catálogos PDF existentes
- [ ] Fotografías de productos (alta resolución)
- [ ] Textos institucionales (sobre nosotros, historia)
- [ ] Datos de contacto oficiales
- [ ] Links a redes sociales
- [ ] Certificaciones (PDFs de diplomas)
- [ ] Testimonios de clientes (con autorización)
- [ ] Lista de productos y descripciones
- [ ] Precios orientativos (si se publican)

**Durante el Proyecto:**
- Feedback en cada fase
- Aprobación de diseños
- Pruebas de formularios
- Revisión de textos finales

---

### Herramientas Recomendadas

**Diseño:**
- Figma (diseño UI/UX)
- Adobe Illustrator (gráficos vectoriales)
- Adobe Photoshop (edición foto)
- Canva (gráficos rápidos redes sociales)

**Desarrollo:**
- VS Code (editor código)
- GitHub (control versiones)
- Netlify/Vercel (hosting frontend)
- Postman (testing API)

**SEO:**
- Google Search Console
- Google Analytics 4
- Ubersuggest / Ahrefs (keywords)
- Screaming Frog (auditoría técnica)

**Gestión:**
- Trello / Asana (project management)
- Slack (comunicación equipo)
- Google Drive (documentos compartidos)
- Loom (videos explicativos)

---

## 28. Próximos Pasos y Fases Futuras

### Fase 2 (Post-Lanzamiento - Meses 3-6)

**Funcionalidades Avanzadas:**
- [ ] Área de cliente completa
- [ ] Configurador visual de productos (3D)
- [ ] Chat en vivo 24/7 con IA
- [ ] Sistema de pedidos online (sin pago, tipo B2B)
- [ ] Portal de proveedores

**Marketing Avanzado:**
- [ ] Marketing automation completo
- [ ] Lead scoring
- [ ] Retargeting ads
- [ ] Programa de referidos

---

### Fase 3 (Largo Plazo - Año 1-2)

**Expansión:**
- [ ] Versión en inglés (internacional)
- [ ] App móvil (iOS/Android)
- [ ] Marketplace (productos de terceros)
- [ ] Sistema de afiliados
- [ ] Realidad aumentada (probar producto virtualmente)

**Integración Total:**
- [ ] ERP integration
- [ ] CRM avanzado
- [ ] Automatización de producción
- [ ] BI y dashboards avanzados

---

## 29. Conclusión y Notas Finales

### Puntos Clave del Proyecto

✅ **Objetivo Principal:** Sitio web profesional que genere confianza y captures leads cualificados para proyectos de agendas y merchandising.

✅ **Diferenciadores:**
- Diseño moderno y profesional
- Foco en B2B y colegios
- Sostenibilidad como valor
- Proceso transparente y claro
- Atención personalizada

✅ **No es un eCommerce tradicional:**
- Sin carrito de compra
- Sin pasarela de pago
- Sistema de presupuestos
- Venta consultiva

✅ **Conversión = Solicitud de Presupuesto**
- Formularios optimizados
- Multiple touch points
- Fácil acceso a contacto
- Descarga de catálogos como lead magnet

---

### Recomendaciones Estratégicas

**Prioridad Alta (Must Have):**
1. Fotografía de producto profesional
2. Catálogos PDF bien diseñados
3. Formulario de contacto perfecto
4. Versión mobile impecable
5. Carga rápida (<3s)
6. SEO básico bien implementado

**Prioridad Media (Should Have):**
1. Blog con contenido regular
2. Casos de éxito con testimonios
3. Video corporativo
