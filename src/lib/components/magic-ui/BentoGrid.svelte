<script lang="ts">
	import { cn } from "$lib/utils/cva";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	interface BentoGridProps extends HTMLAttributes<HTMLDivElement> {
		/** Contenido del grid */
		children?: Snippet;
		/** Clases CSS adicionales */
		class?: string;
	}

	let { children, class: className, ...rest }: BentoGridProps = $props();
</script>

<div
	class={cn('grid w-full auto-rows-[22rem] grid-cols-3 gap-4', className)}
	{...rest}
>
	{#if children}
		{@render children()}
	{/if}
</div>

