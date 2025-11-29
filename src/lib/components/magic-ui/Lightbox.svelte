<script lang="ts">
	import { onMount } from "svelte";
	import { fade, fly } from "svelte/transition";

	interface Props {
		open?: boolean;
		images: string[];
		currentIndex?: number;
		onClose?: () => void;
		onNavigate?: (index: number) => void;
	}

	let { 
		open = $bindable(false), 
		images, 
		currentIndex = $bindable(0),
		onClose,
		onNavigate 
	}: Props = $props();

	let imageRef = $state<HTMLImageElement | undefined>(undefined);

	function handleKeydown(e: KeyboardEvent) {
		if (!open) return;
		
		if (e.key === "Escape") {
			close();
		} else if (e.key === "ArrowLeft") {
			previous();
		} else if (e.key === "ArrowRight") {
			next();
		}
	}

	function close() {
		open = false;
		onClose?.();
	}

	function next() {
		currentIndex = (currentIndex + 1) % images.length;
		onNavigate?.(currentIndex);
	}

	function previous() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
		onNavigate?.(currentIndex);
	}

	onMount(() => {
		window.addEventListener("keydown", handleKeydown);
		return () => {
			window.removeEventListener("keydown", handleKeydown);
		};
	});
</script>

{#if open}
	<div
		class="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
		onclick={close}
		onkeydown={(e) => { if (e.key === "Escape") close(); }}
		role="dialog"
		aria-modal="true"
		tabindex="-1"
		transition:fade={{ duration: 200 }}
	>
		<!-- Botón cerrar -->
		<button
			onclick={close}
			class="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
			aria-label="Cerrar lightbox"
		>
			<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>

		<!-- Botón anterior -->
		<button
			onclick={(e) => { e.stopPropagation(); previous(); }}
			class="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center bg-black/50 rounded-full backdrop-blur-sm"
			aria-label="Imagen anterior"
		>
			<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
			</svg>
		</button>

		<!-- Botón siguiente -->
		<button
			onclick={(e) => { e.stopPropagation(); next(); }}
			class="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center bg-black/50 rounded-full backdrop-blur-sm"
			aria-label="Imagen siguiente"
		>
			<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
			</svg>
		</button>

		<!-- Imagen -->
		<div 
			class="max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
			onclick={(e) => e.stopPropagation()}
			role="presentation"
			transition:fly={{ y: 20, duration: 300 }}
		>
			<img
				bind:this={imageRef}
				src={images[currentIndex]}
				alt={`Imagen ${currentIndex + 1} de ${images.length}`}
				class="max-w-full max-h-full object-contain rounded-lg"
			/>
		</div>

		<!-- Indicador de posición -->
		<div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-white text-sm">
			{currentIndex + 1} / {images.length}
		</div>

		<!-- Miniaturas -->
		<div class="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex gap-2 max-w-full overflow-x-auto px-4">
			{#each images as image, index}
				<button
					onclick={(e) => { e.stopPropagation(); currentIndex = index; }}
					class="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all {currentIndex === index ? 'border-white scale-110' : 'border-white/30 opacity-60 hover:opacity-100'}"
				>
					<img
						src={image}
						alt={`Miniatura ${index + 1}`}
						class="w-full h-full object-cover"
					/>
				</button>
			{/each}
		</div>
	</div>
{/if}

