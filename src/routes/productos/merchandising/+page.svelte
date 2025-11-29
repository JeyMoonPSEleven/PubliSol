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
		{ label: "Merchandising Empresarial", href: "/productos/merchandising" },
	];

	const products = [
		{
			id: 1,
			name: "Kit Corporativo Bienvenida",
			category: "Merchandising",
			image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&h=600&fit=crop&q=80",
			badge: "Personalizable",
			minQuantity: "25 unidades",
			href: "/producto/kit-corporativo-bienvenida",
		},
		{
			id: 2,
			name: "Botella Térmica Personalizada",
			category: "Merchandising",
			image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=600&fit=crop&q=80",
			badge: "Stock",
			minQuantity: "20 unidades",
			href: "/producto/botella-termica",
		},
		{
			id: 3,
			name: "Bolsa Tote Personalizada",
			category: "Merchandising",
			image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop&q=80",
			badge: "Eco",
			minQuantity: "30 unidades",
			href: "/producto/bolsa-tote",
		},
		{
			id: 4,
			name: "Pack Regalo Empresarial",
			category: "Merchandising",
			image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=600&fit=crop&q=80",
			badge: "Premium",
			minQuantity: "15 unidades",
			href: "/producto/pack-regalo",
		},
		{
			id: 5,
			name: "USB Personalizado",
			category: "Merchandising",
			image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&h=600&fit=crop&q=80",
			badge: "Tecnológico",
			minQuantity: "50 unidades",
			href: "/producto/usb-personalizado",
		},
		{
			id: 6,
			name: "Power Bank Corporativo",
			category: "Merchandising",
			image: "https://images.unsplash.com/photo-1609091839311-d5365f5bf245?w=600&h=600&fit=crop&q=80",
			badge: "Nuevo",
			minQuantity: "30 unidades",
			href: "/producto/power-bank",
		},
	];

	let quickViewProduct = $state<(typeof products)[0] | undefined>(undefined);
	let filteredProducts = $state(products);

	function openQuickView(product: (typeof products)[0]) {
		quickViewProduct = product;
		quickViewOpen = true;
	}

	// SEO
	const seoTitle = "Merchandising Empresarial - Publisol | Productos Corporativos";
	const seoDescription = "Merchandising empresarial personalizado: kits corporativos, regalos promocionales y productos de marca para empresas.";
</script>

<Seo
	title={seoTitle}
	description={seoDescription}
	url="/productos/merchandising"
/>

<!-- Hero de Categoría -->
<section class="bg-surface-tertiary py-12">
	<div class="container mx-auto px-4">
		<Breadcrumb items={breadcrumbItems} />
		<div class="mt-8 max-w-4xl">
			<Heading level="h1" class="mb-4 text-3xl sm:text-4xl md:text-5xl">
				Merchandising Empresarial
			</Heading>
			<Text class="text-lg text-text-muted mb-6">
				Productos corporativos personalizados para potenciar tu marca. 
				Kits de bienvenida, regalos promocionales y merchandising de alta calidad.
			</Text>
			<div class="flex flex-wrap gap-4">
				<Badge intent="primary">60+ Productos</Badge>
				<Badge intent="secondary">Personalización Total</Badge>
				<Badge intent="success">Mínimos Flexibles</Badge>
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
										<Text class="text-sm">Kits Corporativos</Text>
									</label>
									<label class="flex items-center gap-2 cursor-pointer">
										<input type="checkbox" class="rounded" />
										<Text class="text-sm">Regalos Promocionales</Text>
									</label>
									<label class="flex items-center gap-2 cursor-pointer">
										<input type="checkbox" class="rounded" />
										<Text class="text-sm">Productos Tecnológicos</Text>
									</label>
								</div>
							</div>
						</div>
					{/snippet}
				</Card>
			</aside>

			<!-- Grid de Productos -->
			<div class="lg:col-span-3">
				<!-- Controles Superiores -->
				<div
					class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6"
				>
					<Text class="text-text-muted">
						Mostrando {filteredProducts.length} productos
					</Text>
					<div class="flex items-center gap-4">
						<Button
							intent="secondary"
							size="sm"
							class="lg:hidden"
							onclick={() => (filtersDrawerOpen = true)}
						>
							Filtros
						</Button>
					</div>
				</div>

				<!-- Grid de Productos -->
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
					<Text class="text-sm">Kits Corporativos</Text>
				</label>
				<label class="flex items-center gap-2 cursor-pointer">
					<input type="checkbox" class="rounded" />
					<Text class="text-sm">Regalos Promocionales</Text>
				</label>
				<label class="flex items-center gap-2 cursor-pointer">
					<input type="checkbox" class="rounded" />
					<Text class="text-sm">Productos Tecnológicos</Text>
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

