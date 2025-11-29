<script lang="ts">
	import { fly } from "svelte/transition";
	import { onMount } from "svelte";
	import { browser } from "$app/environment";
	import type { Snippet } from "svelte";

	type Props = {
		open?: boolean;
		onClose?: () => void;
		title?: string;
		children?: Snippet;
		class?: string;
		showHandle?: boolean;
	};

	let {
		open = false,
		onClose,
		title,
		children,
		class: className = "",
		showHandle = true,
	}: Props = $props();

	let sheetElement: HTMLDivElement | null = $state(null);
	let backdropElement: HTMLDivElement | null = $state(null);

	// Prevenir scroll del body cuando el sheet está abierto
	$effect(() => {
		if (!browser) return;

		if (open) {
			// Guardar el scroll actual
			const scrollY = window.scrollY;
			document.body.style.position = "fixed";
			document.body.style.top = `-${scrollY}px`;
			document.body.style.width = "100%";
			document.body.style.overflow = "hidden";
		} else {
			// Restaurar el scroll
			const scrollY = document.body.style.top;
			document.body.style.position = "";
			document.body.style.top = "";
			document.body.style.width = "";
			document.body.style.overflow = "";
			if (scrollY) {
				window.scrollTo(0, parseInt(scrollY || "0") * -1);
			}
		}

		return () => {
			// Cleanup
			document.body.style.position = "";
			document.body.style.top = "";
			document.body.style.width = "";
			document.body.style.overflow = "";
		};
	});

	function handleBackdropClick(event: MouseEvent) {
		if (event.target === backdropElement && onClose) {
			onClose();
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === "Escape" && open && onClose) {
			onClose();
		}
	}

	onMount(() => {
		if (browser) {
			document.addEventListener("keydown", handleKeydown);
			return () => {
				document.removeEventListener("keydown", handleKeydown);
			};
		}
	});
</script>

{#if open}
	<!-- Backdrop -->
	<div
		bind:this={backdropElement}
		class="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
		onclick={handleBackdropClick}
		role="presentation"
		aria-hidden="true"
		in:fade={{ duration: 200 }}
	></div>

	<!-- Bottom Sheet -->
	<div
		bind:this={sheetElement}
		class="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl max-h-[90dvh] overflow-hidden flex flex-col pb-safe {className}"
		role="dialog"
		aria-modal="true"
		aria-labelledby={title ? "bottom-sheet-title" : undefined}
		in:fly={{ y: 100, duration: 300 }}
	>
		<!-- Handle (opcional) -->
		{#if showHandle}
			<div class="flex justify-center pt-3 pb-2">
				<div
					class="w-12 h-1.5 bg-gray-300 rounded-full"
					aria-hidden="true"
				></div>
			</div>
		{/if}

		<!-- Header -->
		{#if title}
			<div class="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-border-default">
				<h2 id="bottom-sheet-title" class="text-lg sm:text-xl font-semibold text-text-default">
					{title}
				</h2>
				{#if onClose}
					<button
						onclick={onClose}
						class="touch-target-icon text-text-muted hover:text-text-default transition-colors"
						aria-label="Cerrar"
					>
						<svg
							class="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				{/if}
			</div>
		{/if}

		<!-- Content -->
		<div class="flex-1 overflow-y-auto overscroll-contain px-4 sm:px-6 py-4">
			{#if children}
				{@render children()}
			{/if}
		</div>
	</div>
{/if}

<style>
	/* Mejorar el scroll dentro del sheet */
	:global(.overscroll-contain) {
		overscroll-behavior: contain;
		-webkit-overflow-scrolling: touch;
	}
</style>

