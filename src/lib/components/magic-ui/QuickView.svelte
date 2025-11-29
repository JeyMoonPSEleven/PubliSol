<script lang="ts">
	import { fade, fly } from "svelte/transition";
	import { Modal, Button, Heading, Text, Badge } from "atomic-design-svelte";
	import { Link } from "atomic-design-svelte";

	interface Product {
		id?: number;
		name: string;
		category: string;
		image: string;
		badge?: string;
		minQuantity: string;
		href: string;
		description?: string;
		price?: string;
	}

	interface Props {
		open?: boolean;
		product?: Product;
		onClose?: () => void;
	}

	let { 
		open = $bindable(false), 
		product,
		onClose 
	}: Props = $props();

	function close() {
		open = false;
		onClose?.();
	}
</script>

{#if open && product}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
		onclick={close}
		onkeydown={(e) => { if (e.key === "Escape") close(); }}
		role="dialog"
		aria-modal="true"
		tabindex="-1"
		transition:fade={{ duration: 200 }}
	>
		<div
			class="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
			onclick={(e) => e.stopPropagation()}
			role="document"
			transition:fly={{ y: 20, duration: 300 }}
		>
			<div class="p-6">
				<!-- Header -->
				<div class="flex items-start justify-between mb-4">
					<div class="flex-1">
						{#if product.badge}
							<Badge intent="primary" class="mb-2">{product.badge}</Badge>
						{/if}
						<Heading level="h3" class="mb-1">{product.name}</Heading>
						<Text class="text-sm text-text-muted">{product.category}</Text>
					</div>
					<button
						onclick={close}
						class="p-2 hover:bg-surface-tertiary rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center ml-4"
						aria-label="Cerrar"
					>
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>

				<!-- Imagen -->
				<div class="mb-4">
					<img
						src={product.image}
						alt={product.name}
						class="w-full h-64 object-cover rounded-lg"
					/>
				</div>

				<!-- Descripción -->
				{#if product.description}
					<Text class="mb-4 text-text-muted">{product.description}</Text>
				{/if}

				<!-- Información -->
				<div class="mb-6 space-y-2">
					<div class="flex items-center justify-between">
						<Text class="text-sm font-medium">Cantidad mínima:</Text>
						<Text class="text-sm">{product.minQuantity}</Text>
					</div>
					{#if product.price}
						<div class="flex items-center justify-between">
							<Text class="text-sm font-medium">Precio desde:</Text>
							<Text class="text-sm font-semibold text-primary">{product.price}</Text>
						</div>
					{/if}
				</div>

				<!-- CTAs -->
				<div class="flex gap-3">
					<Button
						intent="secondary"
						size="lg"
						class="flex-1"
						href={product.href}
						onclick={close}
					>
						Ver Detalles Completos
					</Button>
					<Button
						intent="primary"
						size="lg"
						class="flex-1"
						href="/contacto"
						onclick={close}
					>
						Solicitar Presupuesto
					</Button>
				</div>
			</div>
		</div>
	</div>
{/if}

