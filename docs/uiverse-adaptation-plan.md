# Plan de adaptación de componentes Uiverse para `client-example`

## 1. Hallazgos clave
- La guía oficial que ya hay en `packages/design-system/docs/external-libraries/uiverse.md` define el flujo ideal: copiar el HTML/Tailwind del componente, identificar el nivel atómico y reemplazar valores literales por tokens semánticos (`bg-primary`, `text-text-on-primary`, `backdrop-blur-md`, etc.).
- El ejemplo `Resources/UI-Svelte/card-hover4.svelte` (glass card con gradiente de neón, capas translúcidas y botones sociales que flotan al pasar el cursor) resume perfectamente el estilo que queremos adaptar: *glassmorphism*, animaciones Lerp (transition+transform) y uso de iconografía SVG.
- De los componentes adjuntos destacan tres patrones para replicar en Svelte:
  1. **Tarjeta glass y gradiente**: fondo difuso, borde translúcido, card con sombra suave, contenido en capas, botones sociales con transiciones escaladas.
  2. **Botones y micro-animaciones**: escalado, sombras y degradados radiales/cóncavos que pueden parametrizarse con `cn`.
  3. **Layout hero/hero card**: hero con fondo degradado, parallax y CTA central rodeado de cards flotantes (combinación ideal para la sección hero existente en `+page.svelte`).

## 2. Estructura atómica actual y propuesta para Uiverse
| Componente | Tipo actual | Nivel atómico sugerido |
|------------|-------------|------------------------|
| `Seo.svelte` | Meta/utility | Utility (no visual). |
| `SiteHeader.svelte` y `SiteFooter.svelte` | Layout | Organismos. |
| `WhatsAppWidget.svelte` | CTA | Molécula (botón flotante con estado). |
| `magic-ui/AnimatedGridPattern.svelte` | Background | Átomo (patrón reutilizable). |
| `magic-ui/Marquee`, `QuickView`, `Lightbox` | Experiencias compuestas | Organismos/moléculas. |
| `magic-ui/ShimmerButton`, `NumberTicker`, `ScrollProgress` | Elementos interactivos | Atoms/moléculas según complejidad.

### Nueva propuesta `src/lib/components/external/uiverse/`
- `atoms/GlassBadge.svelte`: elemento circular translúcido con SVG (similar a los círculos de la esquina superior del card). Se puede reutilizar como logo flotante o indicador de estado.
- `molecules/GlassCard.svelte`: carta con fondo gradiente/backdrop, zona de contenido y barra inferior de botones sociales. Recibe `title`, `description`, `actions`, `socialIcons` y variantes de gradiente.
- `organisms/HeroGlassShowcase.svelte`: hero basado en el card anterior, con una capa adicional de fondo degradado/parallax que puede alojar el contenido hero actual (`heroData`). Integra el `GlassCard` como componente secundario para dar profundidad al hero principal.

## 3. Especificaciones previstas

### `GlassCard` (molécula)
- **Props**: `{ title: string; description: string; actions?: { label: string; href?: string; onClick?: () => void; variant?: 'primary' | 'ghost' }[]; socialIcons?: { icon: keyof typeof ICON_MAP; label?: string; href?: string }[]; gradient?: 'emerald' | 'violet' | 'sunrise'; class?: string }`.
- **Tokens**: `bg-surface-card/10`, `border-border-default/30`, `text-text-default`, `shadow-[0_25px_50px_rgba(16,185,129,0.25)]`, `bg-gradient-to-br from-primary/40 to-secondary/30`.
- **Animaciones**: `transition-all duration-500 ease-in-out`, `hover:-translate-y-1 hover:shadow-xl`, `group-hover:translate-z-10`. Las social buttons se animan con `transform: translate3d` y `box-shadow`.
- **Estructura**: `GlassBadge` en la esquina superior, capa `glassOverlay` para la textura translúcida, `content` con `Heading` + `Text`, `actions` renderizadas con `ShimmerButton` o `Button`, `socialIcons` en fila con `aria-label`.
- **Integración**: usar `cn` (`$lib/utils/cva`) para combinar tokens y permitir overrides (`class` prop). Permitir `children` slot para custom content (p. ej. listado de stats).

### `HeroGlassShowcase` (organismo)
- **Props**: `{ heroData: { title: string; subtitle: string; primaryAction: Action; secondaryAction: Action }; cards: GlassCardProps[]; background?: 'gradient' | 'image'; class?: string }`.
- **Comportamiento**: contiene un layout grid (hero + cards), utiliza `AnimatedGridPattern` como fondo tenue y puede recibir un `heroImage`.
- **Animaciones**: micro-transiciones en `cards` con `@keyframes float` y `motion` manual (Svelte `on:mouseenter`/`on:mouseleave` para ajustar `parallaxOffset`). Si se decide agregar `framer-motion` se evaluará compatibilidad con Svelte (por ahora se replica con CSS y transform).
- **Tokens**: `bg-primary/80`, `text-white`, `backdrop-blur-[40px]`, `rounded-[3rem]`, `border border-white/20`.

## 4. Plan de implementación
1. **Estructura de carpetas**: crear `packages/client-example/src/lib/components/external/uiverse/` con subcarpetas `atoms/`, `molecules/`, `organisms/`.
2. **Componentes base**: implementar `GlassBadge`, `GlassCard`, `HeroGlassShowcase`. Reusar utilidades existentes (`cn`, `ShimmerButton`) y los tokens de `tailwind.config`.
3. **Integración en `+page.svelte`**: reemplazar parte del hero actual por `HeroGlassShowcase`, alimentarlo con `heroData` y `cards` basados en `projects` o `services`. Aprovechar la interpolación actual para mantener CTA y trust badges.
4. **Documentación y showcase**: añadir un nuevo ejemplo en `packages/client-example/docs` (este archivo) y eventualmente registrar la adaptación en `design-system/docs/external-libraries/uiverse.md`.
5. **Verificación**: revisar navegación principal y hero en `client-example` (no hay tests automatizados, se hace revisión visual en el navegador). Actualizar `docs/Flowbite-MCP.md` si hay pasos repetidos.

## 5. Recursos adicionales
- `packages/design-system/docs/external-libraries/uiverse.md`
- `Resources/UI-Svelte/card-hover4.svelte`
- `Packages/client-example/src/routes/+page.svelte` (hero actual)

