<script lang="ts">
	import { onMount } from 'svelte';
	
	interface Props extends Omit<import('svelte/elements').SVGAttributes<SVGSVGElement>, 'class'> {
		width?: number;
		height?: number;
		x?: number;
		y?: number;
		numSquares?: number;
		maxOpacity?: number;
		class?: string;
	}
	
	let {
		width = 40,
		height = 40,
		x = -1,
		y = -1,
		numSquares = 50,
		maxOpacity = 0.5,
		class: className = '',
		...restProps
	}: Props = $props();
	
	let containerRef: SVGSVGElement;
	let dimensions = $state({ width: 0, height: 0 });
	let squares = $state<Array<{ id: number; pos: [number, number]; opacity: number }>>([]);
	
	function getPos(): [number, number] {
		if (dimensions.width === 0 || dimensions.height === 0) {
			return [0, 0];
		}
		return [
			Math.floor((Math.random() * dimensions.width) / width),
			Math.floor((Math.random() * dimensions.height) / height)
		];
	}
	
	function generateSquares(count: number) {
		return Array.from({ length: count }, (_, i) => ({
			id: i,
			pos: getPos(),
			opacity: 0
		}));
	}
	
	function animateSquare(square: { id: number; pos: [number, number]; opacity: number }) {
		const startTime = Date.now();
		const duration = 4000; // 4 seconds
		
		function update() {
			const elapsed = Date.now() - startTime;
			const progress = (elapsed % duration) / duration;
			
			// Create a sine wave for smooth fade in/out
			square.opacity = Math.sin(progress * Math.PI) * maxOpacity;
			
			if (elapsed < duration * 2) {
				requestAnimationFrame(update);
			} else {
				// Reset position and restart animation
				square.pos = getPos();
				square.opacity = 0;
				setTimeout(() => animateSquare(square), Math.random() * 2000);
			}
		}
		
		// Start animation after a random delay
		setTimeout(() => {
			requestAnimationFrame(update);
		}, square.id * 100);
	}
	
	onMount(() => {
		if (!containerRef) return;
		
		const updateDimensions = () => {
			const rect = containerRef.getBoundingClientRect();
			dimensions = {
				width: rect.width || 1000,
				height: rect.height || 1000
			};
		};
		
		updateDimensions();
		
		const resizeObserver = new ResizeObserver(() => {
			updateDimensions();
			// Regenerate squares when dimensions change
			squares = generateSquares(numSquares);
			squares.forEach(animateSquare);
		});
		
		resizeObserver.observe(containerRef);
		
		// Initialize squares
		squares = generateSquares(numSquares);
		squares.forEach(animateSquare);
		
		return () => {
			resizeObserver.disconnect();
		};
	});
</script>

<svg
	bind:this={containerRef}
	aria-hidden="true"
	class="pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30 {className}"
	{...restProps}
>
	<defs>
		<pattern id="grid-pattern" {width} {height} patternUnits="userSpaceOnUse" {x} {y}>
			<path d="M.5 {height}V.5H{width}" fill="none" stroke-dasharray="0" />
		</pattern>
	</defs>
	<rect width="100%" height="100%" fill="url(#grid-pattern)" />
	<svg {x} {y} class="overflow-visible">
		{#each squares as square (square.id)}
			<rect
				width={width - 1}
				height={height - 1}
				x={square.pos[0] * width + 1}
				y={square.pos[1] * height + 1}
				fill="currentColor"
				stroke-width="0"
				style="opacity: {square.opacity}"
			/>
		{/each}
	</svg>
</svg>

