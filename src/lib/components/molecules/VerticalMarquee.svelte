<script lang="ts">
	import GlassCard from "$lib/components/atoms/GlassCard.svelte";

	export type VerticalMarqueeItem = {
		id: string;
		title: string;
		description?: string;
		image: string;
		tag?: string;
	};

	export let items: VerticalMarqueeItem[] = [];
	export let direction: "up" | "down" = "up";
	export let speed = 22;

	$: repeatedItems = [...items, ...items];

	const animationName = direction === "up" ? "scroll-up" : "scroll-down";
	$: trackStyle = `animation: ${animationName} ${Math.max(speed, 12)}s linear infinite;`;
</script>

<div
	class="relative overflow-hidden rounded-[32px] border border-white/10 bg-transparent shadow-[0_20px_50px_rgba(2,6,23,0.55)]"
	style="mask-image: linear-gradient(180deg, transparent, #000 12%, #000 88%, transparent);
	-webkit-mask-image: linear-gradient(180deg, transparent, #000 12%, #000 88%, transparent);"
>
	<div
		class="marquee-track flex flex-col gap-5 p-4"
		style={trackStyle}
	>
		{#each repeatedItems as item, idx (item.id + '-' + idx)}
			<div class="h-56">
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
		min-height: 100%;
	}

	@keyframes scroll-up {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(-50%);
		}
	}

	@keyframes scroll-down {
		0% {
			transform: translateY(-50%);
		}
		100% {
			transform: translateY(0);
		}
	}
</style>

