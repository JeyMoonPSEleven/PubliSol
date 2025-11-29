<script lang="ts">
	import { onMount } from "svelte";
	import { fly, fade, scale } from "svelte/transition";
	import type { Snippet } from "svelte";

	type Props = {
		delay?: number;
		duration?: number;
		threshold?: number;
		animation?: "fade" | "fly" | "scale";
		direction?: "up" | "down" | "left" | "right";
		class?: string;
		children?: Snippet;
	};

	let {
		delay = 0,
		duration = 600,
		threshold = 0.1,
		animation = "fade",
		direction = "up",
		class: className = "",
		children,
	}: Props = $props();

	let element: HTMLElement | null = $state(null);
	let isVisible = $state(false);

	onMount(() => {
		if (!element) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						isVisible = true;
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold },
		);

		observer.observe(element);

		return () => {
			observer.disconnect();
		};
	});
</script>

<div bind:this={element} class={className}>
	{#if isVisible && children}
		{#if animation === "fly"}
			<div
				in:fly={{
					y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
					x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
					duration,
					delay,
				}}
			>
				{@render children()}
			</div>
		{:else if animation === "scale"}
			<div in:scale={{ duration, delay, start: 0.8 }}>
				{@render children()}
			</div>
		{:else}
			<div in:fade={{ duration, delay }}>
				{@render children()}
			</div>
		{/if}
	{:else if children}
		<div class="opacity-0">
			{@render children()}
		</div>
	{/if}
</div>

