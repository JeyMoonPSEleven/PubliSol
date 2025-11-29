<script lang="ts">
	import BottomSheet from "$lib/components/molecules/BottomSheet.svelte";
	import { Button } from "atomic-design-svelte";

	let isOpen = $state(false);

	function openSheet() {
		isOpen = true;
	}

	function closeSheet() {
		isOpen = false;
	}
</script>

<Button onclick={openSheet} class="touch-target">
	Abrir Bottom Sheet
</Button>

<BottomSheet
	open={isOpen}
	onClose={closeSheet}
	title="Ejemplo de Bottom Sheet"
>
	{#snippet children()}
		<div class="space-y-4">
			<p class="text-text-muted">
				Este es un ejemplo de Bottom Sheet optimizado para móvil. Emerge desde
				abajo, respetando la zona del pulgar y las safe areas.
			</p>
			<div class="space-y-3">
				<Button intent="primary" size="lg" class="w-full touch-target">
					Acción Principal
				</Button>
				<Button intent="secondary" size="lg" class="w-full touch-target">
					Acción Secundaria
				</Button>
			</div>
		</div>
	{/snippet}
</BottomSheet>

