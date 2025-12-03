<script lang="ts">
	import { Modal, Heading, Text, Button } from "atomic-design-svelte";
	import { fade } from "svelte/transition";

	interface SizeGuideModalProps {
		open?: boolean;
		onClose?: () => void;
	}

	let { open = $bindable(false), onClose }: SizeGuideModalProps = $props();

	const sizeGuide = [
		{ size: "S", chest: "92-96", waist: "76-80", hip: "96-100" },
		{ size: "M", chest: "100-104", waist: "84-88", hip: "104-108" },
		{ size: "L", chest: "108-112", waist: "92-96", hip: "112-116" },
		{ size: "XL", chest: "116-120", waist: "100-104", hip: "120-124" },
		{ size: "XXL", chest: "124-128", waist: "108-112", hip: "128-132" },
	];

	function handleClose() {
		open = false;
		onClose?.();
	}
</script>

{#if open}
	<Modal open={open} onclose={handleClose}>
		{#snippet children()}
			<div class="p-6 sm:p-8">
				<div class="flex items-center justify-between mb-6">
					<Heading level="h3" class="text-2xl font-bold">Guía de Tallas</Heading>
					<button
						onclick={handleClose}
						class="p-2 hover:bg-surface-tertiary rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
						aria-label="Cerrar"
					>
						<svg
							class="w-6 h-6 text-text-muted"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>

				<Text class="text-text-muted mb-6 text-sm">
					Consulta nuestra guía de tallas para productos textiles. Las medidas están en centímetros y pueden variar según el modelo.
				</Text>

				<div class="overflow-x-auto mb-6">
					<table class="w-full text-sm border-collapse">
						<thead>
							<tr class="border-b-2 border-border-default">
								<th class="text-left py-3 px-4 font-semibold text-text-default">Talla</th>
								<th class="text-left py-3 px-4 font-semibold text-text-default">Pecho (cm)</th>
								<th class="text-left py-3 px-4 font-semibold text-text-default">Cintura (cm)</th>
								<th class="text-left py-3 px-4 font-semibold text-text-default">Cadera (cm)</th>
							</tr>
						</thead>
						<tbody>
							{#each sizeGuide as row, index}
								<tr class="border-b border-border-default {index % 2 === 0 ? 'bg-surface-tertiary/30' : ''}">
									<td class="py-3 px-4 font-medium text-text-default">{row.size}</td>
									<td class="py-3 px-4 text-text-muted">{row.chest}</td>
									<td class="py-3 px-4 text-text-muted">{row.waist}</td>
									<td class="py-3 px-4 text-text-muted">{row.hip}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>

				<Text class="text-xs text-text-muted mb-6">
					* Las medidas pueden variar según el modelo. Para más información, contacta con nuestro equipo.
				</Text>

				<div class="flex gap-3">
					<Button intent="primary" onclick={handleClose} class="flex-1 min-h-[48px]">
						Entendido
					</Button>
					<Button intent="secondary" href="/contacto" class="flex-1 min-h-[48px]">
						Contactar
					</Button>
				</div>
			</div>
		{/snippet}
	</Modal>
{/if}

