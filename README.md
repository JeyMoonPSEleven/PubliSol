# Client Example

Este es un proyecto de ejemplo que demuestra cómo usar el sistema de diseño Atomic Design en un proyecto cliente real.

## Características

- ✅ Importa componentes del design-system
- ✅ Usa tokens CSS del design-system
- ✅ Ejemplo completo de página usando Header, Hero, Card, Button, Footer
- ✅ Configuración de Vite para resolver imports del design-system

## Estructura

```
client-example/
├── src/
│   ├── app.css          # Importa tokens del design-system
│   ├── app.html         # HTML base
│   └── routes/
│       ├── +layout.svelte
│       └── +page.svelte  # Ejemplo de uso de componentes
├── package.json
├── vite.config.ts       # Configuración con plugin para resolver $lib
└── svelte.config.js
```

## Uso

```bash
# Instalar dependencias (desde la raíz del monorepo)
pnpm install

# Ejecutar en desarrollo
pnpm dev:client-example
# O desde este directorio:
cd packages/client-example
pnpm dev

# Build
pnpm build:client-example
```

## Importar Componentes

```svelte
<script lang="ts">
  // Importar todos los componentes
  import { Button, Card, Header } from "atomic-design-svelte";
  
  // O importar por nivel
  import { Button } from "atomic-design-svelte/components/01-atoms";
  import { Card } from "atomic-design-svelte/components/02-molecules";
  import { Header } from "atomic-design-svelte/components/03-organisms";
</script>
```

## Personalización

Puedes personalizar los tokens en `src/app.css`:

```css
@import "atomic-design-svelte/app.css";

@theme {
  /* Personalizar tokens aquí */
}
```

## Notas

- Este proyecto usa la configuración de Vite para resolver los imports `$lib` del design-system
- Ver `vite.config.ts` para la configuración completa
- Flowbite Svelte MCP local: consulta `docs/Flowbite-MCP.md` para arrancar el servidor que alimenta los prompts de Cursor / Claude desde `client-example`.

### Verificación de Tipos

**Nota importante**: Cuando ejecutas `pnpm check` en este proyecto, verás errores de TypeScript relacionados con los archivos del design-system. Esto es **esperado y normal** porque:

1. Los componentes del design-system usan `$lib` internamente
2. Durante el build, el plugin de Vite transforma estos imports a paths relativos automáticamente
3. TypeScript no puede resolver estos paths cuando verifica desde el contexto del client-example
4. Los archivos del design-system deben ser verificados en su propio contexto ejecutando `pnpm check` desde `packages/design-system`

**El build funciona correctamente** gracias al plugin de Vite que transforma los imports automáticamente. Si necesitas verificar tipos:

```bash
# Verificar tipos del design-system
cd ../design-system && pnpm check

# Verificar tipos del client-example (mostrará errores esperados del design-system)
cd ../client-example && pnpm check
```

### Cómo Funciona la Resolución

El `vite.config.ts` incluye un plugin que:
1. Intercepta los imports `$lib` de los archivos del design-system
2. Los transforma automáticamente a paths relativos durante el build
3. Permite que Vite resuelva correctamente las dependencias internas del design-system

Esto significa que **no necesitas cambiar nada** en los componentes del design-system - el plugin maneja todo automáticamente.

