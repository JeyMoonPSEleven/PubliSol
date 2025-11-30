<script lang="ts">
	import { cn } from "$lib/utils/cva";
	import type { HTMLAttributes } from "svelte/elements";

	interface LineShadowTextProps extends HTMLAttributes<HTMLElement> {
		shadowColor?: string;
		as?: keyof HTMLElementTagNameMap;
		class?: string;
		children: string;
	}

	let {
		shadowColor = "black",
		as = "span",
		class: className,
		children,
		...rest
	}: LineShadowTextProps = $props();

	if (typeof children !== "string") {
		throw new Error("LineShadowText only accepts string content");
	}
</script>

<svelte:element
	this={as}
	style="--shadow-color: {shadowColor};"
	class={cn(
		"relative z-0 inline-flex",
		"after:absolute after:top-[0.04em] after:left-[0.04em] after:content-[attr(data-text)]",
		"after:bg-[linear-gradient(45deg,transparent_45%,var(--shadow-color)_45%,var(--shadow-color)_55%,transparent_0)]",
		"after:-z-10 after:bg-[length:0.06em_0.06em] after:bg-clip-text after:text-transparent",
		"after:animate-line-shadow",
		className,
	)}
	data-text={children}
	{...rest}
>
	{children}
</svelte:element>

<style>
	@keyframes line-shadow {
		0% {
			background-position: 0% 0%;
		}
		100% {
			background-position: 100% 100%;
		}
	}

	:global(.animate-line-shadow) {
		animation: line-shadow 3s linear infinite;
	}
</style>

