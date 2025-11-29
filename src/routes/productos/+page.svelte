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
	];

	let categories = $state([
		{ label: "Agendas Escolares", checked: false },
		{ label: "Agendas Personalizadas", checked: false },
		{ label: "Merchandising", checked: false },
		{ label: "Textil", checked: false },
		{ label: "Papelería", checked: false },
		{ label: "Sostenibles", checked: false },
	]);

	let materials = $state([
		{ label: "Papel reciclado", checked: false },
		{ label: "Cuero sintético", checked: false },
		{ label: "Tela", checked: false },
		{ label: "Plástico reciclado", checked: false },
	]);

	function openQuickView(product: (typeof products)[0]) {
		quickViewProduct = product;
		quickViewOpen = true;
	}

	function applyFilters() {
		// Lógica de filtrado (simplificada)
		const selectedCategories = categories
			.filter((c) => c.checked)
			.map((c) => c.label);
		const selectedMaterials = materials
			.filter((m) => m.checked)
			.map((m) => m.label);

		if (selectedCategories.length === 0 && selectedMaterials.length === 0) {
			filteredProducts = products;
			return;
		}

		filteredProducts = products.filter((product) => {
			const matchesCategory =
				selectedCategories.length === 0 ||
				selectedCategories.some((cat) =>
					product.category.toLowerCase().includes(cat.toLowerCase()),
				);
			return matchesCategory;
		});
	}

	function clearFilters() {
		categories = categories.map((c) => ({ ...c, checked: false }));
		materials = materials.map((m) => ({ ...m, checked: false }));
		filteredProducts = products;
	}

	// Ejemplo de productos
	const products = [
		{
			id: 1,
			name: "Agenda Escolar Premium A4",
			category: "Agendas Escolares",
			image: "https://images.unsplash.com/photo-1503676260728-1c00e094b736?w=600&h=600&fit=crop&q=80",
			badge: "Nuevo 2025",
			minQuantity: "50 unidades",
			href: "/producto/agenda-escolar-premium",
		},
		{
			id: 2,
			name: "Kit Corporativo Bienvenida",
			category: "Merchandising",
			image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&h=600&fit=crop&q=80",
			badge: "Personalizable",
			minQuantity: "25 unidades",
			href: "/producto/kit-corporativo-bienvenida",
		},
		{
			id: 3,
			name: "Camiseta Corporativa Premium",
			category: "Textil",
			image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&q=80",
			badge: "Eco",
			minQuantity: "10 unidades",
			href: "/producto/camiseta-corporativa",
		},
		{
			id: 4,
			name: "Libreta Ejecutiva A5",
			category: "Papelería",
			image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=600&fit=crop&q=80",
			badge: "Premium",
			minQuantity: "30 unidades",
			href: "/producto/libreta-ejecutiva",
		},
		{
			id: 5,
			name: "Agenda Sostenible Reciclada",
			category: "Sostenibles",
			image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=600&fit=crop&q=80",
			badge: "Eco",
			minQuantity: "50 unidades",
			href: "/producto/agenda-sostenible",
		},
		{
			id: 6,
			name: "Botella Térmica Personalizada",
			category: "Merchandising",
			image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=600&fit=crop&q=80",
			badge: "Stock",
			minQuantity: "20 unidades",
			href: "/producto/botella-termica",
		},
	];

	let quickViewProduct = $state<(typeof products)[0] | undefined>(undefined);
	let filteredProducts = $state(products);

	// SEO
	const seoTitle =
		"Catálogo de Productos - Publisol | Agendas y Merchandising";
	const seoDescription =
		"Explora nuestro catálogo completo de agendas escolares, merchandising empresarial, textil corporativo y productos personalizados.";
</script>

<Seo title={seoTitle} description={seoDescription} url="/productos" />

<!-- Hero de Categoría -->
<section class="bg-surface-tertiary py-12">
	<div class="container mx-auto px-4">
		<Breadcrumb items={breadcrumbItems} />
		<Heading level="h1" class="mt-4 mb-2">Nuestro Catálogo</Heading>
		<Text class="text-text-muted">
			Descubre nuestra amplia gama de productos personalizados para
			colegios y empresas
		</Text>
	</div>
</section>

<!-- Layout Principal: Sidebar + Grid -->
<section class="py-8 sm:py-12">
	<div class="container mx-auto px-4 sm:px-6">
		<!-- Botón Filtros Móvil -->
		<div class="lg:hidden mb-4">
			<Button
				intent="secondary"
				size="md"
				class="w-full"
				onclick={() => (filtersDrawerOpen = true)}
			>
				<svg
					class="w-5 h-5 mr-2"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
					/>
				</svg>
				Filtrar Productos
			</Button>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
			<!-- Sidebar Filtros (Desktop) -->
			<aside class="hidden lg:block">
				<div class="sticky top-24 space-y-6">
					<Card padding="lg">
						{#snippet children()}
							<div class="space-y-6">
								<!-- Categorías -->
								<div>
									<Heading level="h4" class="mb-4"
										>Categorías</Heading
									>
									<div class="space-y-2">
										{#each categories as category, index}
											<label
												class="flex items-center gap-2 cursor-pointer"
											>
												<input
													type="checkbox"
													class="rounded"
													bind:checked={
														category.checked
													}
													onchange={applyFilters}
												/>
												<Text class="text-sm"
													>{category.label}</Text
												>
											</label>
										{/each}
									</div>
								</div>

								<!-- Material -->
								<div>
									<Heading level="h4" class="mb-4"
										>Material</Heading
									>
									<div class="space-y-2">
										{#each materials as material, index}
											<label
												class="flex items-center gap-2 cursor-pointer"
											>
												<input
													type="checkbox"
													class="rounded"
													bind:checked={
														material.checked
													}
													onchange={applyFilters}
												/>
												<Text class="text-sm"
													>{material.label}</Text
												>
											</label>
										{/each}
									</div>
								</div>

								<!-- Características -->
								<div>
									<Heading level="h4" class="mb-4"
										>Características</Heading
									>
									<div class="space-y-2">
										<label
											class="flex items-center gap-2 cursor-pointer"
										>
											<input
												type="checkbox"
												class="rounded"
											/>
											<Text class="text-sm"
												>Eco-friendly</Text
											>
										</label>
										<label
											class="flex items-center gap-2 cursor-pointer"
										>
											<input
												type="checkbox"
												class="rounded"
											/>
											<Text class="text-sm">Premium</Text>
										</label>
										<label
											class="flex items-center gap-2 cursor-pointer"
										>
											<input
												type="checkbox"
												class="rounded"
											/>
											<Text class="text-sm"
												>Personalizable</Text
											>
										</label>
										<label
											class="flex items-center gap-2 cursor-pointer"
										>
											<input
												type="checkbox"
												class="rounded"
											/>
											<Text class="text-sm"
												>Stock inmediato</Text
											>
										</label>
									</div>
								</div>

								<Button
									intent="ghost"
									class="w-full text-sm"
									onclick={clearFilters}
								>
									Limpiar filtros
								</Button>
							</div>
						{/snippet}
					</Card>
				</div>
			</aside>

			<!-- Grid de Productos -->
			<div class="lg:col-span-3">
				<!-- Controles Superiores -->
				<div
					class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6"
				>
					<Text class="text-text-muted">
						Mostrando {filteredProducts.length} de {products.length}
						productos
					</Text>
					<div class="flex items-center gap-4">
						<select
							class="px-4 py-2 rounded-lg border border-border-default text-sm"
						>
							<option>Relevancia</option>
							<option>Más recientes</option>
							<option>Nombre A-Z</option>
						</select>
					</div>
				</div>

				<!-- Grid de Productos -->
				{#if filteredProducts.length === 0}
					<!-- Empty State -->
					<div class="text-center py-16 px-4">
						<svg
							class="w-24 h-24 mx-auto text-text-muted mb-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<Heading level="h3" class="mb-2 text-xl"
							>No se encontraron productos</Heading
						>
						<Text class="text-text-muted mb-6">
							Intenta ajustar los filtros para ver más resultados
						</Text>
						<Button intent="primary" onclick={clearFilters}>
							Limpiar Filtros
						</Button>
					</div>
				{:else}
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
											<!-- Botón Quick View (aparece en hover) -->
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
											<Text
												class="text-xs text-text-muted mb-1"
												>{product.category}</Text
											>
											<Heading
												level="h4"
												class="mb-2 text-base"
												>{product.name}</Heading
											>
											<Text
												class="text-sm text-text-muted mb-4"
											>
												Desde {product.minQuantity}
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
				{/if}

				<!-- Paginación -->
				<div
					class="flex justify-center items-center gap-1 sm:gap-2 mt-8 sm:mt-12 flex-wrap"
				>
					<Button
						intent="ghost"
						size="sm"
						class="min-h-[44px] min-w-[44px]">«</Button
					>
					<Button
						intent="primary"
						size="sm"
						class="min-h-[44px] min-w-[44px]">1</Button
					>
					<Button
						intent="ghost"
						size="sm"
						class="min-h-[44px] min-w-[44px]">2</Button
					>
					<Button
						intent="ghost"
						size="sm"
						class="min-h-[44px] min-w-[44px]">3</Button
					>
					<Text class="text-text-muted px-2">...</Text>
					<Button
						intent="ghost"
						size="sm"
						class="min-h-[44px] min-w-[44px]">8</Button
					>
					<Button
						intent="ghost"
						size="sm"
						class="min-h-[44px] min-w-[44px]">»</Button
					>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Drawer de Filtros Móvil -->
<Drawer bind:open={filtersDrawerOpen} side="left" title="Filtrar Productos">
	<Card padding="lg">
		{#snippet children()}
			<div class="space-y-6">
				<!-- Categorías -->
				<div>
					<Heading level="h4" class="mb-4">Categorías</Heading>
					<div class="space-y-2">
						{#each categories as category}
							<label
								class="flex items-center gap-2 cursor-pointer"
							>
								<input
									type="checkbox"
									class="rounded"
									bind:checked={category.checked}
									onchange={applyFilters}
								/>
								<Text class="text-sm">{category.label}</Text>
							</label>
						{/each}
					</div>
				</div>

				<!-- Material -->
				<div>
					<Heading level="h4" class="mb-4">Material</Heading>
					<div class="space-y-2">
						{#each materials as material}
							<label
								class="flex items-center gap-2 cursor-pointer"
							>
								<input
									type="checkbox"
									class="rounded"
									bind:checked={material.checked}
									onchange={applyFilters}
								/>
								<Text class="text-sm">{material.label}</Text>
							</label>
						{/each}
					</div>
				</div>

				<Button
					intent="ghost"
					class="w-full text-sm"
					onclick={clearFilters}
				>
					Limpiar filtros
				</Button>
			</div>
		{/snippet}
	</Card>
</Drawer>

<!-- Quick View Modal -->
<QuickView
	bind:open={quickViewOpen}
	product={quickViewProduct}
	onClose={() => (quickViewProduct = undefined)}
/>
