<script lang="ts">
	import { Heading, Text, Card, Button, Modal } from "atomic-design-svelte";
	import { Breadcrumb } from "atomic-design-svelte";
	import Seo from "$lib/components/Seo.svelte";

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

<Seo
	title="Catálogos Descargables - Publisol | PDFs de Productos"
	description="Descarga nuestros catálogos en PDF: agendas escolares, merchandising empresarial, textil corporativo y productos sostenibles."
	url="/catalogos"
/>

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

<!-- Guía de Tallas -->
<section class="py-12 sm:py-16 bg-surface-page" id="guia-tallas">
	<div class="container mx-auto px-4 sm:px-6">
		<Heading level="h2" class="text-center mb-8 sm:mb-12">Guía de Tallas</Heading>
		<div class="max-w-4xl mx-auto">
			<Text class="text-center text-text-muted mb-8">
				Consulta nuestra guía de tallas para productos textiles y asegúrate de elegir la talla correcta
			</Text>
			<Card padding="lg" class="mb-8">
				{#snippet children()}
					<div class="overflow-x-auto">
						<table class="w-full text-sm">
							<thead>
								<tr class="border-b border-border-default">
									<th class="text-left py-3 px-4 font-semibold">Talla</th>
									<th class="text-left py-3 px-4 font-semibold">Pecho (cm)</th>
									<th class="text-left py-3 px-4 font-semibold">Cintura (cm)</th>
									<th class="text-left py-3 px-4 font-semibold">Cadera (cm)</th>
								</tr>
							</thead>
							<tbody>
								<tr class="border-b border-border-default">
									<td class="py-3 px-4 font-medium">S</td>
									<td class="py-3 px-4">92-96</td>
									<td class="py-3 px-4">76-80</td>
									<td class="py-3 px-4">96-100</td>
								</tr>
								<tr class="border-b border-border-default">
									<td class="py-3 px-4 font-medium">M</td>
									<td class="py-3 px-4">100-104</td>
									<td class="py-3 px-4">84-88</td>
									<td class="py-3 px-4">104-108</td>
								</tr>
								<tr class="border-b border-border-default">
									<td class="py-3 px-4 font-medium">L</td>
									<td class="py-3 px-4">108-112</td>
									<td class="py-3 px-4">92-96</td>
									<td class="py-3 px-4">112-116</td>
								</tr>
								<tr>
									<td class="py-3 px-4 font-medium">XL</td>
									<td class="py-3 px-4">116-120</td>
									<td class="py-3 px-4">100-104</td>
									<td class="py-3 px-4">120-124</td>
								</tr>
							</tbody>
						</table>
					</div>
					<Text class="text-xs text-text-muted mt-4">
						* Las medidas pueden variar según el modelo. Consulta con nuestro equipo para más información.
					</Text>
				{/snippet}
			</Card>
		</div>
	</div>
</section>

<!-- Carta de Colores -->
<section class="py-12 sm:py-16 bg-surface-tertiary" id="carta-colores">
	<div class="container mx-auto px-4 sm:px-6">
		<Heading level="h2" class="text-center mb-8 sm:mb-12">Carta de Colores</Heading>
		<div class="max-w-4xl mx-auto">
			<Text class="text-center text-text-muted mb-8">
				Colores disponibles para personalización de productos textiles y papelería
			</Text>
			<div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
				{#each [
					{ name: "Azul Marino", code: "#1E3A8A", hex: "1E3A8A" },
					{ name: "Verde", code: "#10B981", hex: "10B981" },
					{ name: "Naranja", code: "#F59E0B", hex: "F59E0B" },
					{ name: "Rojo", code: "#EF4444", hex: "EF4444" },
					{ name: "Negro", code: "#1F2937", hex: "1F2937" },
					{ name: "Blanco", code: "#FFFFFF", hex: "FFFFFF" },
					{ name: "Gris", code: "#6B7280", hex: "6B7280" },
					{ name: "Amarillo", code: "#FBBF24", hex: "FBBF24" },
					{ name: "Rosa", code: "#EC4899", hex: "EC4899" },
					{ name: "Morado", code: "#8B5CF6", hex: "8B5CF6" },
					{ name: "Turquesa", code: "#14B8A6", hex: "14B8A6" },
					{ name: "Beige", code: "#FAF8F5", hex: "FAF8F5" }
				] as color}
					<Card padding="md" class="text-center hover-shadow-primary transition-all cursor-pointer group">
						{#snippet children()}
							<div
								class="w-full h-20 rounded-lg mb-3 border border-border-default group-hover:scale-105 transition-transform"
								style="background-color: {color.code};"
							></div>
							<Text class="text-xs font-semibold mb-1">{color.name}</Text>
							<Text class="text-xs text-text-muted">#{color.hex}</Text>
						{/snippet}
					</Card>
				{/each}
			</div>
			<Text class="text-center text-sm text-text-muted mt-8">
				* Colores disponibles según el tipo de producto y método de impresión. Consulta disponibilidad en tu presupuesto.
			</Text>
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
