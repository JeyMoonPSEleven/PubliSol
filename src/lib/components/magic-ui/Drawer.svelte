<script lang="ts">
	import { fade, slide } from "svelte/transition";
	import { onMount } from "svelte";

	interface Props {
		open?: boolean;
		side?: "left" | "right" | "top" | "bottom";
		onClose?: () => void;
		title?: string;
		children: import("svelte").Snippet;
	}

	let { 
		open = $bindable(false), 
		side = "left",
		onClose,
		title,
		children 
	}: Props = $props();

	function close() {
		open = false;
		onClose?.();
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === "Escape" && open) {
			close();
		}
	}

	onMount(() => {
		window.addEventListener("keydown", handleKeydown);
		return () => {
			window.removeEventListener("keydown", handleKeydown);
		};
	});

	const slideDirection = {
		left: { x: -100 },
		right: { x: 100 },
		top: { y: -100 },
		bottom: { y: 100 }
	}[side];
</script>

{#if open}
	<!-- Overlay -->
	<div
		class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
		onclick={close}
		transition:fade={{ duration: 200 }}
		role="presentation"
		aria-hidden="true"
	></div>

	<!-- Drawer -->
	<div
		class="fixed z-[60] bg-white shadow-xl {side === 'left' ? 'left-0 top-0 bottom-0' : ''} {side === 'right' ? 'right-0 top-0 bottom-0' : ''} {side === 'top' ? 'top-0 left-0 right-0' : ''} {side === 'bottom' ? 'bottom-0 left-0 right-0' : ''} {side === 'left' || side === 'right' ? 'w-full max-w-sm' : ''} {side === 'top' || side === 'bottom' ? 'h-full max-h-96' : 'h-full'} overflow-y-auto"
		transition:slide={slideDirection}
		role="dialog"
		aria-modal="true"
		aria-labelledby={title ? "drawer-title" : undefined}
	>
		{#if title}
			<div class="flex items-center justify-between border-b border-border-default p-4 sticky top-0 bg-white z-10">
				<h2 id="drawer-title" class="text-lg font-semibold text-text-default">{title}</h2>
				<button
					onclick={close}
					class="p-2 hover:bg-surface-tertiary rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
					aria-label="Cerrar"
				>
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
		{/if}
		<div class="p-4">
			{@render children()}
		</div>
	</div>
{/if}

