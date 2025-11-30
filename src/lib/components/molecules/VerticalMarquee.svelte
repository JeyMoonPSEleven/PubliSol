<script context="module" lang="ts">
	export type VerticalMarqueeItem = {
		id: string;
		title: string;
		description?: string;
		image: string;
		tag?: string;
	};
</script>

<script lang="ts">
	import GlassCard from "$lib/components/atoms/GlassCard.svelte";

	interface VerticalMarqueeProps {
		items?: VerticalMarqueeItem[];
		direction?: "up" | "down";
		speed?: number;
	}

	let {
		items = [],
		direction = "up",
		speed = 22,
	}: VerticalMarqueeProps = $props();

	// Duplicar items para scroll infinito (necesitamos suficientes copias)
	let repeatedItems = $derived(items.length > 0 ? [...items, ...items, ...items] : []);

	const animationName = $derived(direction === "up" ? "scroll-up" : "scroll-down");
	let animationDuration = $derived(`${Math.max(speed, 12)}s`);
</script>

<div
	class="relative h-full overflow-hidden rounded-[32px] border border-white/10 bg-transparent shadow-[0_20px_50px_rgba(2,6,23,0.55)]"
	style="mask-image: linear-gradient(180deg, transparent, #000 8%, #000 92%, transparent);
	-webkit-mask-image: linear-gradient(180deg, transparent, #000 8%, #000 92%, transparent);"
>
	<div
		class="marquee-track flex flex-col gap-5 p-4 will-change-transform"
		style="animation: {animationName} {animationDuration} linear infinite;"
	>
		{#each repeatedItems as item, idx (item.id + '-' + idx)}
			<div class="flex-shrink-0 h-56">
				<GlassCard
					title={item.title}
					description={item.description}
					image={item.image}
					tag={item.tag}
					className="h-full"
				/>
			</div>
		{/each}
	</div>
</div>

<style>
	.marquee-track {
		display: flex;
		flex-direction: column;
		will-change: transform;
	}

	@keyframes scroll-up {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(calc(-100% / 3));
		}
	}

	@keyframes scroll-down {
		0% {
			transform: translateY(calc(-100% / 3));
		}
		100% {
			transform: translateY(0);
		}
	}
</style>

