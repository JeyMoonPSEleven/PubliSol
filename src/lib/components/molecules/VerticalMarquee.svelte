<script module lang="ts">
	export type VerticalMarqueeItem = {
		id: string;
		title: string;
		subtitle?: string;
		image: string;
		tags?: string[];
	};
</script>

<script lang="ts">
	interface VerticalMarqueeProps {
		items?: VerticalMarqueeItem[];
		direction?: "up" | "down";
		speed?: number;
	}

	let {
		items = [],
		direction = "up",
		speed = 30,
	}: VerticalMarqueeProps = $props();

	// Duplicar items múltiples veces para scroll infinito suave (estilo mondaymerch.com)
	// Necesitamos suficientes copias para que el loop sea imperceptible
	// Usamos 3 copias (duplicado total = 6) para un scroll más fluido y eficiente
	const REPEAT_COUNT = 3;
	let repeatedItems = $derived(
		items.length > 0
			? Array(REPEAT_COUNT).fill(items).flat()
			: [],
	);

	const animationName = $derived(
		direction === "up" ? "scroll-up" : "scroll-down",
	);
	let animationDuration = $derived(`${Math.max(speed, 20)}s`);
	
	// Calcular altura total para animación precisa
	let itemHeight = $derived(items.length > 0 ? 100 / items.length : 0);
</script>

<div
	class="relative h-full overflow-hidden"
	style="mask-image: linear-gradient(180deg, transparent 0%, #000 8%, #000 92%, transparent 100%);
	-webkit-mask-image: linear-gradient(180deg, transparent 0%, #000 8%, #000 92%, transparent 100%);"
>
	<div
		class="marquee-track flex flex-col gap-3 sm:gap-4 will-change-transform"
		style="animation: {animationName} {animationDuration} linear infinite; transform: translateZ(0); --repeat-count: {REPEAT_COUNT};"
	>
		{#each repeatedItems as item, idx (item.id + '-' + idx)}
			<div class="flex-shrink-0">
				<!-- Card estilo mondaymerch.com: tags arriba, imagen, título y subtítulo abajo -->
				<div
					class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer"
				>
					<!-- Tags en la parte superior (siempre visibles) -->
					{#if item.tags && item.tags.length > 0}
						<div class="absolute top-2 left-2 right-2 z-10 flex flex-wrap gap-1.5">
							{#each item.tags as tag}
								<span
									class="rounded-full bg-white/95 backdrop-blur-sm px-2 py-0.5 text-[10px] font-medium text-gray-700 shadow-sm"
								>
									{tag}
								</span>
							{/each}
						</div>
					{/if}
					
					<!-- Imagen -->
					<div class="aspect-square overflow-hidden rounded-xl">
						<img
							src={item.image}
							alt={item.title}
							class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
							loading="lazy"
							decoding="async"
							width="400"
							height="400"
							fetchpriority="low"
						/>
					</div>
					
					<!-- Información en la parte inferior (siempre visible) -->
					<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-3 sm:p-4">
						<h3
							class="text-sm sm:text-base font-semibold text-white mb-0.5 line-clamp-1"
						>
							{item.title}
						</h3>
						{#if item.subtitle}
							<p class="text-xs sm:text-sm text-white/90 line-clamp-1">
								{item.subtitle}
							</p>
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.marquee-track {
		display: flex;
		flex-direction: column;
		will-change: transform;
		/* Forzar aceleración por hardware */
		transform: translateZ(0);
		backface-visibility: hidden;
		perspective: 1000px;
	}

	@keyframes scroll-up {
		0% {
			transform: translateY(0) translateZ(0);
		}
		100% {
			transform: translateY(calc(-100% / var(--repeat-count, 3))) translateZ(0);
		}
	}

	@keyframes scroll-down {
		0% {
			transform: translateY(calc(-100% / var(--repeat-count, 3))) translateZ(0);
		}
		100% {
			transform: translateY(0) translateZ(0);
		}
	}
	
	/* Asegurar que las cards tengan bordes redondeados y sombras suaves */
	.marquee-track > div > div {
		border-radius: 0.75rem; /* rounded-xl */
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
	}
</style>
