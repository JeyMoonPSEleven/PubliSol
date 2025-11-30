<script lang="ts">
	import { cn } from "$lib/utils/cva";
	import type { HTMLButtonAttributes } from "svelte/elements";

	interface RippleButtonProps extends Omit<HTMLButtonAttributes, 'onclick'> {
		rippleColor?: string;
		duration?: string;
		class?: string;
		onclick?: (event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) => void;
	}

	let {
		rippleColor = "#ffffff",
		duration = "600ms",
		class: className,
		onclick,
		children,
		...rest
	}: RippleButtonProps = $props();

	let buttonRipples = $state<
		Array<{ x: number; y: number; size: number; key: number }>
	>([]);
	let buttonElement: HTMLButtonElement | null = $state(null);

	const createRipple = (event: MouseEvent) => {
		if (!buttonElement) return;

		const rect = buttonElement.getBoundingClientRect();
		const size = Math.max(rect.width, rect.height);
		const x = event.clientX - rect.left - size / 2;
		const y = event.clientY - rect.top - size / 2;

		const newRipple = { x, y, size, key: Date.now() };
		buttonRipples = [...buttonRipples, newRipple];

		// Remove ripple after animation
		setTimeout(() => {
			buttonRipples = buttonRipples.filter(
				(ripple) => ripple.key !== newRipple.key,
			);
		}, parseInt(duration) || 600);
	};

	const handleClick = (event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) => {
		createRipple(event);
		onclick?.(event);
	};
</script>

<button
	bind:this={buttonElement}
	class={cn(
		"bg-background text-primary relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg border-2 px-4 py-2 text-center",
		className,
	)}
	onclick={handleClick}
	{...rest}
>
	<div class="relative z-10">{@render children()}</div>
	<span class="pointer-events-none absolute inset-0">
		{#each buttonRipples as ripple (ripple.key)}
			<span
				class="animate-rippling bg-background absolute rounded-full opacity-30"
				style="
					width: {ripple.size}px;
					height: {ripple.size}px;
					top: {ripple.y}px;
					left: {ripple.x}px;
					background-color: {rippleColor};
					transform: scale(0);
				"
			></span>
		{/each}
	</span>
</button>

