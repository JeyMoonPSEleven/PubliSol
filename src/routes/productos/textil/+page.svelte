<script lang="ts">
	import {
		Heading,
		Text,
		Card,
		Button,
		Breadcrumb,
		Badge,
	} from "atomic-design-svelte";
	import { Link } from "atomic-design-svelte";
	import Drawer from "$lib/components/magic-ui/Drawer.svelte";
	import QuickView from "$lib/components/magic-ui/QuickView.svelte";
	import Seo from "$lib/components/Seo.svelte";

	let filtersDrawerOpen = $state(false);
	let quickViewOpen = $state(false);

	const breadcrumbItems = [
		{ label: "Inicio", href: "/" },
		{ label: "Productos", href: "/productos" },
		{ label: "Textil Personalizado", href: "/productos/textil" },
	];

	const products = [
		{
			id: 1,
			name: "Camiseta Corporativa Premium",
			category: "Textil",
			image: "/images/products/camiseta-corporativa.png",
			badge: "Eco",
			minQuantity: "10 unidades",
			href: "/producto/camiseta-corporativa",
		},
		{
			id: 2,
			name: "Polo Empresarial",
			category: "Textil",
			image: "/images/products/camiseta-corporativa.png",
			badge: "Premium",
			minQuantity: "15 unidades",
			href: "/producto/polo-empresarial",
		},
		{
			id: 3,
			name: "Sudadera con Capucha",
			category: "Textil",
			image: "/images/products/camiseta-corporativa.png",
			badge: "Nuevo",
			minQuantity: "12 unidades",
			href: "/producto/sudadera-capucha",
		},
		{
			id: 4,
			name: "Chaqueta Técnica",
			category: "Textil",
			image: "/images/products/camiseta-corporativa.png",
			badge: "Técnica",
			minQuantity: "8 unidades",
			href: "/producto/chaqueta-tecnica",
		},
	];

	let quickViewProduct = $state<(typeof products)[0] | undefined>(undefined);
	let filteredProducts = $state(products);

	function openQuickView(product: (typeof products)[0]) {
		quickViewProduct = product;
		quickViewOpen = true;
	}

	// SEO
	const seoTitle = "Textil Personalizado - Publisol | Ropa Corporativa";
	const seoDescription = "Textil corporativo personalizado: camisetas, polos, sudaderas y chaquetas con bordado o serigrafía. Calidad premium y personalización total.";
</script>

<Seo
	title={seoTitle}
	description={seoDescription}
	url="/productos/textil"
/>

<!-- Hero de Categoría -->
<section class="bg-surface-tertiary py-12">
	<div class="container mx-auto px-4">
		<Breadcrumb items={breadcrumbItems} />
		<div class="mt-8 max-w-4xl">
			<Heading level="h1" class="mb-4 text-3xl sm:text-4xl md:text-5xl">
				Textil Personalizado
			</Heading>
			<Text class="text-lg text-text-muted mb-6">
				Ropa corporativa personalizada con bordado o serigrafía. 
				Camisetas, polos, sudaderas y chaquetas de alta calidad para tu equipo.
			</Text>
			<div class="flex flex-wrap gap-4">
				<Badge intent="primary">35+ Modelos</Badge>
				<Badge intent="secondary">Bordado y Serigrafía</Badge>
				<Badge intent="success">Algodón Orgánico</Badge>
			</div>
		</div>
	</div>
</section>

<!-- Layout Principal: Sidebar + Grid -->
<section class="py-8 sm:py-12">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
			<!-- Sidebar de Filtros (Desktop) -->
			<aside class="hidden lg:block">
				<Card padding="lg" class="sticky top-24">
					{#snippet header()}
						<Heading level="h3" class="mb-4">Filtros</Heading>
					{/snippet}
					{#snippet children()}
						<div class="space-y-6">
							<div>
								<Text class="font-semibold mb-3">Tipo</Text>
								<div class="space-y-2">
									<label class="flex items-center gap-2 cursor-pointer">
										<input type="checkbox" class="rounded" />
										<Text class="text-sm">Camisetas</Text>
									</label>
									<label class="flex items-center gap-2 cursor-pointer">
										<input type="checkbox" class="rounded" />
										<Text class="text-sm">Polos</Text>
									</label>
									<label class="flex items-center gap-2 cursor-pointer">
										<input type="checkbox" class="rounded" />
										<Text class="text-sm">Sudaderas</Text>
									</label>
									<label class="flex items-center gap-2 cursor-pointer">
										<input type="checkbox" class="rounded" />
										<Text class="text-sm">Chaquetas</Text>
									</label>
								</div>
							</div>
							<div>
								<Text class="font-semibold mb-3">Personalización</Text>
								<div class="space-y-2">
									<label class="flex items-center gap-2 cursor-pointer">
										<input type="checkbox" class="rounded" />
										<Text class="text-sm">Bordado</Text>
									</label>
									<label class="flex items-center gap-2 cursor-pointer">
										<input type="checkbox" class="rounded" />
										<Text class="text-sm">Serigrafía</Text>
									</label>
								</div>
							</div>
						</div>
					{/snippet}
				</Card>
			</aside>

			<!-- Grid de Productos -->
			<div class="lg:col-span-3">
				<div
					class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6"
				>
					<Text class="text-text-muted">
						Mostrando {filteredProducts.length} productos
					</Text>
					<Button
						intent="secondary"
						size="sm"
						class="lg:hidden"
						onclick={() => (filtersDrawerOpen = true)}
					>
						Filtros
					</Button>
				</div>

				<div
					class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
				>
					{#each filteredProducts as product}
						<div class="group relative">
							<Card
								padding="none"
								class="overflow-hidden hover:elevation-2 transition-all hover-shadow-primary hover:-translate-y-1"
							>
								{#snippet header()}
									<div
										class="relative aspect-square overflow-hidden"
									>
										<img
											src={product.image}
											alt={product.name}
											class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
										/>
										{#if product.badge}
											<div
												class="absolute top-2 left-2"
											>
												<Badge intent="primary"
													>{product.badge}</Badge
												>
											</div>
										{/if}
										<button
											onclick={() =>
												openQuickView(product)}
											class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white rounded-lg px-3 py-2 text-sm font-medium shadow-md z-10 min-h-[36px]"
										>
											Vista Rápida
										</button>
									</div>
								{/snippet}
								{#snippet children()}
									<div class="p-4">
										<Heading level="h4" class="mb-2 text-base"
											>{product.name}</Heading
										>
										<Text class="text-sm text-text-muted mb-4">
											Mínimo: {product.minQuantity}
										</Text>
										<div class="flex gap-2">
											<Button
												intent="secondary"
												size="sm"
												class="flex-1"
												href={product.href}
											>
												Ver Detalles
											</Button>
											<Button
												intent="primary"
												size="sm"
												class="flex-1"
												onclick={() =>
													openQuickView(product)}
											>
												Vista Rápida
											</Button>
										</div>
									</div>
								{/snippet}
							</Card>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Drawer de Filtros (Mobile) -->
<Drawer
	open={filtersDrawerOpen}
	onClose={() => (filtersDrawerOpen = false)}
	side="right"
	title="Filtros"
>
	<div class="space-y-6">
		<div>
			<Text class="font-semibold mb-3">Tipo</Text>
			<div class="space-y-2">
				<label class="flex items-center gap-2 cursor-pointer">
					<input type="checkbox" class="rounded" />
					<Text class="text-sm">Camisetas</Text>
				</label>
				<label class="flex items-center gap-2 cursor-pointer">
					<input type="checkbox" class="rounded" />
					<Text class="text-sm">Polos</Text>
				</label>
				<label class="flex items-center gap-2 cursor-pointer">
					<input type="checkbox" class="rounded" />
					<Text class="text-sm">Sudaderas</Text>
				</label>
			</div>
		</div>
	</div>
</Drawer>

<!-- Quick View Modal -->
{#if quickViewProduct}
	<QuickView
		open={quickViewOpen}
		product={quickViewProduct}
		onClose={() => {
			quickViewOpen = false;
			quickViewProduct = undefined;
		}}
	/>
{/if}

