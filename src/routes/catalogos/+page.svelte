<script lang="ts">
	import { Heading, Text, Card, Button, Modal } from "atomic-design-svelte";
	import { Breadcrumb } from "atomic-design-svelte";
	import Seo from "$lib/components/Seo.svelte";
	import SizeGuideModal from "$lib/components/molecules/SizeGuideModal.svelte";

	const breadcrumbItems = [
		{ label: "Inicio", href: "/" },
		{ label: "Catálogos", href: "/catalogos" },
	];

	const catalogos = [
		{
			name: "Agendas Escolares 2025-2026",
			pages: 24,
			image: "/images/categories/categoria-agendas-escolares.jpg",
			pdf: "/catalogos/agendas-escolares-2025.pdf",
		},
		{
			name: "Merchandising Empresarial",
			pages: 36,
			image: "/images/categories/categoria-merchandising-empresarial.jpg",
			pdf: "/catalogos/merchandising-empresarial.pdf",
		},
		{
			name: "Textil Corporativo",
			pages: 28,
			image: "/images/categories/categoria-textil-personalizado.jpg",
			pdf: "/catalogos/textil-corporativo.pdf",
		},
		{
			name: "Productos Sostenibles",
			pages: 20,
			image: "/images/categories/categoria-productos-sostenibles.jpg",
			pdf: "/catalogos/productos-sostenibles.pdf",
		},
		{
			name: "Papelería y Libretas",
			pages: 32,
			image: "/images/categories/categoria-papeleria-libretas.jpg",
			pdf: "/catalogos/papeleria-libretas.pdf",
		},
		{
			name: "Catálogo General Completo",
			pages: 120,
			image: "/images/products/agenda-premium.png",
			pdf: "/catalogos/catalogo-general.pdf",
		},
	];

	let showDownloadModal = $state(false);
	let selectedCatalogo: (typeof catalogos)[0] | null = $state(null);
	let showSizeGuide = $state(false);
	
	type ColorItem = {
		name: string;
		code: string;
		hex: string;
	};
	let selectedColor = $state<ColorItem | null>(null);

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
		
		// Crear enlace temporal para descargar el PDF
		const link = document.createElement('a');
		link.href = selectedCatalogo.pdf;
		link.download = selectedCatalogo.name.replace(/\s+/g, '-').toLowerCase() + '.pdf';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		
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
							class="w-full bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
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
		<div class="max-w-4xl mx-auto text-center">
			<Text class="text-text-muted mb-8">
				Consulta nuestra guía de tallas para productos textiles y asegúrate de elegir la talla correcta
			</Text>
			<Button
				intent="primary"
				size="lg"
				onclick={() => (showSizeGuide = true)}
				class="min-h-[48px] px-8"
			>
				Ver Guía de Tallas
			</Button>
		</div>
	</div>
</section>

<SizeGuideModal bind:open={showSizeGuide} />

<!-- Carta de Colores -->
<section class="py-12 sm:py-16 bg-surface-tertiary" id="carta-colores">
	<div class="container mx-auto px-4 sm:px-6">
		<Heading level="h2" class="text-center mb-8 sm:mb-12">Carta de Colores</Heading>
		<div class="max-w-4xl mx-auto">
			<Text class="text-center text-text-muted mb-8">
				Colores disponibles para personalización de productos textiles y papelería
			</Text>
			
			<!-- Cuadro de Muestra -->
			<div class="mb-8 flex flex-col items-center">
				<div
					class="w-full max-w-md h-48 rounded-2xl border-4 border-border-default shadow-lg transition-all duration-300 mb-4"
					style="background-color: {selectedColor?.code || '#FFFFFF'};"
				>
				</div>
				{#if selectedColor}
					<div class="text-center">
						<Heading level="h3" class="text-xl font-bold mb-1">{selectedColor.name}</Heading>
						<Text class="text-text-muted">#{selectedColor.hex}</Text>
					</div>
				{:else}
					<Text class="text-text-muted text-center">Haz clic en un color para verlo aquí</Text>
				{/if}
			</div>
			
			<!-- Grid de Colores -->
			<div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
				{#each [
					{ name: "Azul Marino", code: "#1E3A8A", hex: "1E3A8A" },
					{ name: "Verde Publisol", code: "#2e7625", hex: "2e7625" },
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
					<button
						type="button"
						onclick={() => (selectedColor = color)}
						class="text-center hover-shadow-primary transition-all cursor-pointer group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg p-2"
					>
						<div
							class="w-full h-20 rounded-lg mb-3 border-2 {selectedColor?.hex === color.hex
								? 'border-primary ring-2 ring-primary/50'
								: 'border-border-default'} group-hover:scale-105 transition-transform"
							style="background-color: {color.code};"
						></div>
						<Text class="text-xs font-semibold mb-1 {selectedColor?.hex === color.hex
							? 'text-primary'
							: ''}">{color.name}</Text>
						<Text class="text-xs text-text-muted">#{color.hex}</Text>
					</button>
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
