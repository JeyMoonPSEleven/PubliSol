<script lang="ts">
	import { onMount } from "svelte";
	import ProductCard from "$lib/components/atoms/ProductCard.svelte";

	type Product = {
		id: string;
		title: string;
		subtitle?: string;
		image: string;
		tags?: string[];
	};

	type Props = {
		products: Product[];
		class?: string;
	};

	let { products, class: className = "" }: Props = $props();

	let scrollContainer: HTMLDivElement | null = $state(null);
	let scrollPosition = $state(0);
	let animationFrameId: number | null = $state(null);

	// Duplicar productos para efecto infinito
	const duplicatedProducts = $derived([...products, ...products]);

	onMount(() => {
		if (!scrollContainer) return;

		const scrollSpeed = 0.3; // Velocidad de scroll (píxeles por frame)

		function animate() {
			if (scrollContainer) {
				// Actualizar scrollPosition de forma reactiva
				scrollPosition += scrollSpeed;

				// Reset cuando se alcanza la mitad (donde empieza la duplicación)
				const maxScroll = scrollContainer.scrollHeight / 2;
				if (scrollPosition >= maxScroll) {
					scrollPosition = 0;
				}
			}

			animationFrameId = requestAnimationFrame(animate);
		}

		// Esperar un frame para que el DOM se renderice
		requestAnimationFrame(() => {
			animate();
		});

		return () => {
			if (animationFrameId) {
				cancelAnimationFrame(animationFrameId);
			}
		};
	});
</script>

<div class="relative h-[600px] overflow-hidden lg:h-dvh {className}">
	<!-- Máscara para efecto fade en los bordes -->
	<div
		class="pointer-events-none absolute inset-0 z-10"
		style="mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);"
	></div>

	<div
		bind:this={scrollContainer}
		class="grid grid-cols-2 gap-3 lg:gap-4 will-change-transform"
		style="transform: translateY(-{scrollPosition}px);"
	>
		{#each duplicatedProducts as product}
			<ProductCard {product} />
		{/each}
	</div>
</div>

