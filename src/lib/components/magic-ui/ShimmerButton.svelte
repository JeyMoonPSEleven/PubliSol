<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends Omit<HTMLButtonAttributes, 'class'> {
		shimmerColor?: string;
		shimmerSize?: string;
		borderRadius?: string;
		shimmerDuration?: string;
		background?: string;
		class?: string;
		children?: import('svelte').Snippet;
		action?: () => void;
	}
	
	let {
		shimmerColor = '#ffffff',
		shimmerSize = '0.05em',
		shimmerDuration = '3s',
		borderRadius = '100px',
		background = 'rgba(0, 0, 0, 1)',
		class: className = '',
		children,
		action,
		...restProps
	}: Props = $props();

	function handleClick(event: MouseEvent) {
		action?.();
	}
</script>

<button
	style="
		--spread: 90deg;
		--shimmer-color: {shimmerColor};
		--radius: {borderRadius};
		--speed: {shimmerDuration};
		--cut: {shimmerSize};
		--bg: {background};
	"
	class="group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden border border-white/10 px-6 py-3 whitespace-nowrap text-white transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px {className}"
	onclick={handleClick}
	{...restProps}
>
	<!-- spark container -->
	<div class="-z-30 blur-[2px] absolute inset-0 overflow-visible">
		<!-- spark -->
		<div class="absolute inset-0 aspect-square h-full animate-shimmer-slide">
			<!-- spark before -->
			<div class="absolute -inset-full w-auto translate-x-0 rotate-0 animate-spin-around" 
				style="background: conic-gradient(from calc(270deg - (var(--spread) * 0.5)), transparent 0, var(--shimmer-color) var(--spread), transparent var(--spread))"></div>
		</div>
	</div>
	
	{#if children}
		{@render children()}
	{/if}
	
	<!-- Highlight -->
	<div class="absolute inset-0 size-full rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f] transform-gpu transition-all duration-300 ease-in-out group-hover:shadow-[inset_0_-6px_10px_#ffffff3f] group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"></div>
	
	<!-- backdrop -->
	<div class="absolute -z-20 [inset:var(--cut)] [border-radius:var(--radius)] [background:var(--bg)]"></div>
</button>

<style>
	@keyframes shimmer-slide {
		0% {
			transform: translateX(-100%) translateY(-100%) rotate(-45deg);
		}
		100% {
			transform: translateX(100%) translateY(100%) rotate(-45deg);
		}
	}
	
	@keyframes spin-around {
		0% {
			transform: translateX(-50%) translateY(-50%) rotate(0deg);
		}
		100% {
			transform: translateX(-50%) translateY(-50%) rotate(360deg);
		}
	}
	
	.animate-shimmer-slide {
		animation: shimmer-slide var(--speed) linear infinite;
	}
	
	.animate-spin-around {
		animation: spin-around calc(var(--speed) * 2) linear infinite;
	}
</style>

