<script lang="ts">
	import { cn } from "$lib/utils/cva";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	interface BentoCardProps extends HTMLAttributes<HTMLDivElement> {
		/** Nombre de la tarjeta */
		name: string;
		/** Descripción */
		description: string;
		/** URL del enlace */
		href: string;
		/** Texto del CTA */
		cta: string;
		/** Slot para el fondo */
		background?: Snippet;
		/** Slot para el icono */
		icon?: Snippet;
		/** Clases CSS adicionales */
		class?: string;
	}

	let {
		name,
		description,
		href,
		cta,
		background,
		icon,
		class: className,
		...rest
	}: BentoCardProps = $props();
</script>

<div
	class={cn(
		"group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
		// light styles
		"bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
		// dark styles
		"dark:bg-background transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]",
		className,
	)}
	{...rest}
>
	<div>
		{#if background}
			{@render background()}
		{/if}
	</div>
	<div class="p-4">
		<div
			class="pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-10"
		>
			{#if icon}
				<div
					class="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75"
				>
					{@render icon()}
				</div>
			{/if}
			<h3
				class="text-xl font-semibold text-neutral-700 dark:text-neutral-300"
			>
				{name}
			</h3>
			<p class="max-w-lg text-neutral-400">{description}</p>
		</div>

		<div
			class="pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:hidden"
		>
			<a
				{href}
				class="pointer-events-auto p-0 text-sm font-medium text-primary underline-offset-4 hover:underline"
			>
				{cta}
				<svg
					class="ms-2 inline-block h-4 w-4 rtl:rotate-180"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 5l7 7-7 7"
					/>
				</svg>
			</a>
		</div>
	</div>

	<div
		class="pointer-events-none absolute bottom-0 hidden w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex"
	>
		<a
			{href}
			class="pointer-events-auto p-0 text-sm font-medium text-primary underline-offset-4 hover:underline"
		>
			{cta}
			<svg
				class="ms-2 inline-block h-4 w-4 rtl:rotate-180"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9 5l7 7-7 7"
				/>
			</svg>
		</a>
	</div>

	<div
		class="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10"
	></div>
</div>

