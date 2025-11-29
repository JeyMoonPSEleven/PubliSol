<script lang="ts">
	interface Props {
		items: Array<{ name: string; logo?: string; href?: string }>;
		speed?: number;
		direction?: "left" | "right";
		pauseOnHover?: boolean;
		className?: string;
	}

	let { 
		items, 
		speed = 50, 
		direction = "left",
		pauseOnHover = true,
		className = "" 
	}: Props = $props();

	// Duplicar items para efecto infinito
	const duplicatedItems = [...items, ...items];
</script>

<div 
	class="relative overflow-hidden {className}"
	class:pause-on-hover={pauseOnHover}
>
	<div 
		class="flex gap-8 md:gap-12 animate-marquee-{direction}"
		style="--marquee-speed: {speed}s;"
	>
		{#each duplicatedItems as item, index}
			<div class="flex-shrink-0 flex items-center justify-center min-w-[120px] md:min-w-[150px]">
				{#if item.href}
					<a 
						href={item.href} 
						class="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
						target="_blank"
						rel="noopener noreferrer"
					>
						{#if item.logo}
							<img 
								src={item.logo} 
								alt={item.name}
								class="h-8 md:h-12 w-auto object-contain"
							/>
						{:else}
							<span class="text-text-muted text-sm md:text-base font-medium">{item.name}</span>
						{/if}
					</a>
				{:else}
					<div class="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
						{#if item.logo}
							<img 
								src={item.logo} 
								alt={item.name}
								class="h-8 md:h-12 w-auto object-contain"
							/>
						{:else}
							<span class="text-text-muted text-sm md:text-base font-medium">{item.name}</span>
						{/if}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>

<style>
	@keyframes marquee-left {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}

	@keyframes marquee-right {
		from {
			transform: translateX(-50%);
		}
		to {
			transform: translateX(0);
		}
	}

	.animate-marquee-left {
		animation: marquee-left var(--marquee-speed) linear infinite;
	}

	.animate-marquee-right {
		animation: marquee-right var(--marquee-speed) linear infinite;
	}

	.pause-on-hover:hover .animate-marquee-left,
	.pause-on-hover:hover .animate-marquee-right {
		animation-play-state: paused;
	}
</style>

