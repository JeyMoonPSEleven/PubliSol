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
		{ label: "Productos Sostenibles", href: "/productos/sostenibles" },
	];

	const products = [
		{
			id: 1,
			name: "Agenda Sostenible Reciclada",
			category: "Sostenibles",
			image: "/images/products/agenda-sostenible.png",
			badge: "Eco",
			minQuantity: "50 unidades",
			href: "/producto/agenda-sostenible",
		},
		{
			id: 2,
			name: "Botella de Acero Inoxidable",
			category: "Sostenibles",
			image: "/images/products/agenda-sostenible.png",
			badge: "Reutilizable",
			minQuantity: "20 unidades",
			href: "/producto/botella-acero",
		},
		{
			id: 3,
			name: "Bolsa de Algodón Orgánico",
			category: "Sostenibles",
			image: "/images/products/agenda-sostenible.png",
			badge: "GOTS",
			minQuantity: "30 unidades",
			href: "/producto/bolsa-algodon",
		},
		{
			id: 4,
			name: "Libreta de Papel Piedra",
			category: "Sostenibles",
			image: "/images/products/agenda-sostenible.png",
			badge: "Innovación",
			minQuantity: "25 unidades",
			href: "/producto/libreta-papel-piedra",
		},
		{
			id: 5,
			name: "Bolígrafo de Bambú",
			category: "Sostenibles",
			image: "/images/products/agenda-sostenible.png",
			badge: "Biodegradable",
			minQuantity: "100 unidades",
			href: "/producto/boligrafo-bambu",
		},
		{
			id: 6,
			name: "Pack Sostenible Corporativo",
			category: "Sostenibles",
			image: "/images/products/agenda-sostenible.png",
			badge: "Completo",
			minQuantity: "15 unidades",
			href: "/producto/pack-sostenible",
		},
	];

	let quickViewProduct = $state<(typeof products)[0] | undefined>(undefined);
	let filteredProducts = $state(products);

	function openQuickView(product: (typeof products)[0]) {
		quickViewProduct = product;
		quickViewOpen = true;
	}

	// SEO
	const seoTitle = "Productos Sostenibles - Publisol | Eco-Friendly";
	const seoDescription = "Productos sostenibles y eco-friendly: agendas recicladas, botellas reutilizables, bolsas de algodón orgánico. Compromiso con el medio ambiente.";
</script>

<Seo
	title={seoTitle}
	description={seoDescription}
	url="/productos/sostenibles"
/>

<!-- Hero de Categoría -->
<section class="bg-gradient-to-br from-secondary/10 via-white to-primary/10 py-12">
	<div class="container mx-auto px-4">
		<Breadcrumb items={breadcrumbItems} />
		<div class="mt-8 max-w-4xl">
			<Heading level="h1" class="mb-4 text-3xl sm:text-4xl md:text-5xl">
				Productos Sostenibles
			</Heading>
			<Text class="text-lg text-text-muted mb-6">
				Productos eco-friendly y sostenibles para empresas comprometidas con el medio ambiente. 
				Materiales reciclados, orgánicos y certificados.
			</Text>
			<div class="flex flex-wrap gap-4">
				<Badge intent="success">25+ Productos</Badge>
				<Badge intent="secondary">Certificado FSC</Badge>
				<Badge intent="success">GOTS</Badge>
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
										<Text class="text-sm">Papel Reciclado</Text>
									</label>
									<label class="flex items-center gap-2 cursor-pointer">
										<input type="checkbox" class="rounded" />
										<Text class="text-sm">Algodón Orgánico</Text>
									</label>
									<label class="flex items-center gap-2 cursor-pointer">
										<input type="checkbox" class="rounded" />
										<Text class="text-sm">Materiales Reutilizables</Text>
									</label>
									<label class="flex items-center gap-2 cursor-pointer">
										<input type="checkbox" class="rounded" />
										<Text class="text-sm">Biodegradables</Text>
									</label>
								</div>
							</div>
							<div>
								<Text class="font-semibold mb-3">Certificaciones</Text>
								<div class="space-y-2">
									<label class="flex items-center gap-2 cursor-pointer">
										<input type="checkbox" class="rounded" />
										<Text class="text-sm">FSC</Text>
									</label>
									<label class="flex items-center gap-2 cursor-pointer">
										<input type="checkbox" class="rounded" />
										<Text class="text-sm">GOTS</Text>
									</label>
									<label class="flex items-center gap-2 cursor-pointer">
										<input type="checkbox" class="rounded" />
										<Text class="text-sm">ISO 14001</Text>
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
								class="overflow-hidden hover:elevation-2 transition-all hover-shadow-secondary hover:-translate-y-1"
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
												<Badge intent="success"
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
					<Text class="text-sm">Papel Reciclado</Text>
				</label>
				<label class="flex items-center gap-2 cursor-pointer">
					<input type="checkbox" class="rounded" />
					<Text class="text-sm">Algodón Orgánico</Text>
				</label>
				<label class="flex items-center gap-2 cursor-pointer">
					<input type="checkbox" class="rounded" />
					<Text class="text-sm">Materiales Reutilizables</Text>
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

