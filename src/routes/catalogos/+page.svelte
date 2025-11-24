<script lang="ts">
	import { Heading, Text, Card, Button, Modal } from "atomic-design-svelte";
	import { Breadcrumb } from "atomic-design-svelte";

	const breadcrumbItems = [
		{ label: "Inicio", href: "/" },
		{ label: "Catálogos", href: "/catalogos" },
	];

	const catalogos = [
		{
			name: "Agendas Escolares 2025-2026",
			pages: 24,
			image: "https://images.unsplash.com/photo-1503676260728-1c00e094b736?w=600&h=800&fit=crop&q=80",
			pdf: "/catalogos/agendas-escolares-2025.pdf",
		},
		{
			name: "Merchandising Empresarial",
			pages: 36,
			image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&h=800&fit=crop&q=80",
			pdf: "/catalogos/merchandising-empresarial.pdf",
		},
		{
			name: "Textil Corporativo",
			pages: 28,
			image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop&q=80",
			pdf: "/catalogos/textil-corporativo.pdf",
		},
		{
			name: "Productos Sostenibles",
			pages: 20,
			image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=800&fit=crop&q=80",
			pdf: "/catalogos/productos-sostenibles.pdf",
		},
		{
			name: "Papelería y Libretas",
			pages: 32,
			image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=800&fit=crop&q=80",
			pdf: "/catalogos/papeleria-libretas.pdf",
		},
		{
			name: "Catálogo General Completo",
			pages: 120,
			image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=800&fit=crop&q=80",
			pdf: "/catalogos/catalogo-general.pdf",
		},
	];

	let showDownloadModal = $state(false);
	let selectedCatalogo: (typeof catalogos)[0] | null = $state(null);

	function openDownloadModal(catalogo: (typeof catalogos)[0]) {
		selectedCatalogo = catalogo;
		showDownloadModal = true;
	}

	let downloadForm = $state({
		nombre: "",
		email: "",
		empresa: "",
		newsletter: false,
	});

	function handleDownload() {
		if (!selectedCatalogo) return;
		console.log("Descargar catálogo:", selectedCatalogo, downloadForm);
		// Aquí iría la lógica de descarga
		showDownloadModal = false;
	}
</script>

<!-- Hero -->
<section class="bg-surface-tertiary py-12">
	<div class="container mx-auto px-4">
		<Breadcrumb items={breadcrumbItems} />
		<Heading level="h1" class="mt-4 mb-2">Catálogos Descargables</Heading>
		<Text class="text-text-muted">
			Explora nuestra gama completa de productos en formato PDF
		</Text>
	</div>
</section>

<!-- Grid de Catálogos -->
<section class="py-12 sm:py-16">
	<div class="container mx-auto px-4 sm:px-6">
		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
		>
			{#each catalogos as catalogo}
				<Card
					padding="lg"
					elevation={1}
					class="hover:elevation-2 transition-all"
				>
					{#snippet header()}
						<div
							class="aspect-video rounded-lg mb-4 overflow-hidden"
						>
							<img
								src={catalogo.image}
								alt={catalogo.name}
								class="w-full h-full object-cover"
							/>
						</div>
						<Heading level="h3" class="mb-2"
							>{catalogo.name}</Heading
						>
					{/snippet}
					{#snippet children()}
						<Text class="text-sm text-text-muted mb-4">
							📄 {catalogo.pages} páginas
						</Text>
						<Button
							intent="primary"
							class="w-full"
							onclick={() => openDownloadModal(catalogo)}
						>
							Descargar PDF
						</Button>
					{/snippet}
				</Card>
			{/each}
		</div>
	</div>
</section>

<!-- Modal de Descarga -->
{#if showDownloadModal && selectedCatalogo}
	<Modal open={showDownloadModal} onclose={() => (showDownloadModal = false)}>
		{#snippet children()}
			<div class="p-6">
				<Heading level="h3" class="mb-4">
					Descargar: {selectedCatalogo?.name}
				</Heading>
				<Text class="mb-6 text-text-muted">
					Para descargar el catálogo, déjanos tu email:
				</Text>

				<form
					class="space-y-4"
					onsubmit={(e) => {
						e.preventDefault();
						handleDownload();
					}}
				>
					<div>
						<label
							for="nombre"
							class="block text-sm font-medium mb-2">Nombre</label
						>
						<input
							id="nombre"
							type="text"
							bind:value={downloadForm.nombre}
							required
							class="w-full px-4 py-2 rounded-lg border border-border-default"
						/>
					</div>

					<div>
						<label
							for="email"
							class="block text-sm font-medium mb-2"
							>Email corporativo</label
						>
						<input
							id="email"
							type="email"
							bind:value={downloadForm.email}
							required
							class="w-full px-4 py-2 rounded-lg border border-border-default"
						/>
					</div>

					<div>
						<label
							for="empresa"
							class="block text-sm font-medium mb-2"
							>Empresa/Centro</label
						>
						<input
							id="empresa"
							type="text"
							bind:value={downloadForm.empresa}
							class="w-full px-4 py-2 rounded-lg border border-border-default"
						/>
					</div>

					<label class="flex items-center gap-2">
						<input
							type="checkbox"
							bind:checked={downloadForm.newsletter}
							class="rounded"
						/>
						<Text class="text-sm"
							>Acepto recibir novedades y ofertas</Text
						>
					</label>

					<div class="flex gap-4 pt-4">
						<Button intent="primary" type="submit" class="flex-1">
							Descargar Ahora
						</Button>
						<Button
							intent="secondary"
							onclick={() => (showDownloadModal = false)}
						>
							Cancelar
						</Button>
					</div>
				</form>
			</div>
		{/snippet}
	</Modal>
{/if}
