# Flowbite Svelte MCP para `client-example`

Este bloque documenta cómo levantar el servidor MCP local de Flowbite Svelte y cómo consumirlo desde `packages/client-example` para que Cursor / Claude pueda responder preguntas sobre los bloques de Flowbite mientras trabajas con el cliente de ejemplo.

## 1. ¿Qué logramos?

- Bajamos la doc oficial de Flowbite Svelte y la servimos a través de un MCP propio (`flowbite-svelte-mcp`).
- El servidor se ejecuta en stdio y lo referenciamos desde `.cursor/mcp.json`, así que cualquier prompt de Cursor puede explorar automáticamente la librería Flowbite cuando levantas `client-example`.
- Con este flujo no dependemos de una conexión a docs externas y ganamos consistencia en la generación de UI.

## 2. Requisitos

- Node.js 20 o superior.
- `pnpm` en el workspace raíz.
- Repositorio `flowbite-svelte-mcp` clonado en la raíz del monorepo (ya existe en `../flowbite-svelte-mcp`).
- Cursor/Claude configurado para usar los servidores declarados en `packages/design-system/.cursor/mcp.json`, incluido el nuevo `flowbite-svelte`.

## 3. Preparación del servidor MCP

Si necesitas reinstalar o refrescar el servidor Flowbite:

```bash
cd /Users/javie/NUEVOS NUEVOS MINISTERIOS/PROJECTS-DEV/Atomic-Design-Svelte/flowbite-svelte-mcp
pnpm install
pnpm run copy:llm    # descarga los archivos markdown más recientes de flowbite-svelte.com
pnpm run build       # genera build/server.js con la data preparada
```

Estos comandos ya se ejecutaron una vez, pero puedes repetirlos cada vez que quieras actualizar la documentación.

## 4. Arrancar el servidor durante el desarrollo

Mantén el servidor Flowbite activo antes de abrir Cursor o ejecutar `client-example`.

```bash
pnpm --prefix /Users/javie/NUEVOS NUEVOS MINISTERIOS/PROJECTS-DEV/Atomic-Design-Svelte/flowbite-svelte-mcp start
```

Esto ejecuta `node build/server.js` y expone la interfaz MCP que registra `.cursor/mcp.json`. Deja la terminal abierta o ejecútalo con `nohup`/`tmux` si necesitas seguir trabajando en otra consola.

## 5. Consumirlo desde `client-example`

1. Con el MCP activo, abre otra terminal y lanza el dev server del cliente:

   ```bash
   pnpm dev:client-example
   # o
   pnpm --filter client-example dev
   ```

2. Abre Cursor/Claude en el workspace `Atomic-Design-Svelte`. La configuración que apunta al servidor Flowbite ya está en `.cursor/mcp.json`, así que la nueva opción `flowbite-svelte` debería aparecer en la lista de agentes disponibles.
3. Pregunta cosas como “¿Cómo uso el componente Dropdown?” o “Devuélveme el snippet de la sección Content de Flowbite Svelte” para verificar que el MCP responde con la documentación descargada.

## 6. Verificación y mantenimiento

- Si actualizas los snippets de Flowbite o quieres material nuevo, vuelve a ejecutar `pnpm --prefix flowbite-svelte-mcp copy:llm` y `pnpm --prefix flowbite-svelte-mcp build`.
- Cada vez que cambies los datos, reinicia el servidor (`Ctrl+C` + volver a ejecutar `pnpm --prefix ... start`) para que sirva la versión nueva.
- En caso de necesitar ejecutar pruebas del MCP, puedes usar `pnpm --prefix flowbite-svelte-mcp test`.

## 7. Notas adicionales

- El servidor usa `StdioTransport`, así que no escucha en un puerto HTTP convencional; el cliente lo consume directamente via el protocolo MCP. No es necesario exponer puertos adicionales.
- `.cursor/mcp.json` contiene la ruta absoluta `flowbite-svelte-mcp/build/server.js`, ajusta el path si mueves el repo.
- Todas las instrucciones están centralizadas en `client-example/docs/Flowbite-MCP.md`; añade aquí cualquier paso nuevo que necesiten los demás desarrolladores.

