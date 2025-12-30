<script lang="ts">
	import {
		Heading,
		Text,
		Card,
		Breadcrumb,
		Badge,
		Pagination,
	} from "atomic-design-svelte";
	import { Link } from "atomic-design-svelte";
	import { page } from "$app/stores";
	import Drawer from "$lib/components/magic-ui/Drawer.svelte";
	import QuickView from "$lib/components/magic-ui/QuickView.svelte";
	import Seo from "$lib/components/Seo.svelte";
	import PublisolButton from "$lib/components/atoms/PublisolButton.svelte";

	let filtersDrawerOpen = $state(false);
	let quickViewOpen = $state(false);

	const breadcrumbItems = [
		{ label: "Inicio", href: "/" },
		{ label: "Productos", href: "/productos" },
	];

	let categories = $state([
		{ label: "Agendas Escolares", checked: false },
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
			// Si hay búsqueda, mantener el filtro de búsqueda
			if (searchQuery) {
				filteredProducts = products.filter((product) =>
					product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
					product.category.toLowerCase().includes(searchQuery.toLowerCase())
				);
			} else {
				filteredProducts = products;
			}
			currentPage = 1;
			return;
		}

		let baseProducts = searchQuery
			? products.filter((product) =>
					product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
					product.category.toLowerCase().includes(searchQuery.toLowerCase())
				)
			: products;

		filteredProducts = baseProducts.filter((product) => {
			const matchesCategory =
				selectedCategories.length === 0 ||
				selectedCategories.some((cat) =>
					product.category.toLowerCase().includes(cat.toLowerCase()),
				);
			return matchesCategory;
		});
		currentPage = 1;
	}

	function clearFilters() {
		categories = categories.map((c) => ({ ...c, checked: false }));
		materials = materials.map((m) => ({ ...m, checked: false }));
		if (searchQuery) {
			filteredProducts = products.filter((product) =>
				product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				product.category.toLowerCase().includes(searchQuery.toLowerCase())
			);
		} else {
			filteredProducts = products;
		}
		currentPage = 1;
	}

	// Catálogo completo de productos
	const products = [
		// Agendas Escolares
		{
			id: 1,
			name: "Agenda Escolar Premium A4",
			category: "Agendas Escolares",
			image: "/images/products/agenda-premium.png",
			badge: "Nuevo 2025",
			minQuantity: "50 unidades",
			href: "/producto/agenda-escolar-premium",
		},
		{
			id: 2,
			name: "Agenda Clásica",
			category: "Agendas Escolares",
			image: "/images/products/agenda-premium.png",
			badge: "Clásica",
			minQuantity: "50 unidades",
			href: "/producto/agenda-clasica",
		},
		{
			id: 3,
			name: "Agenda Día Página",
			category: "Agendas Escolares",
			image: "/images/products/agenda-premium.png",
			badge: "Detallada",
			minQuantity: "50 unidades",
			href: "/producto/agenda-dia-pagina",
		},
		{
			id: 4,
			name: "Agendas de Doble Página",
			category: "Agendas Escolares",
			image: "/images/products/agenda-premium.png",
			badge: "Semanal",
			minQuantity: "50 unidades",
			href: "/producto/agenda-doble-pagina",
		},
		// Merchandising
		{
			id: 5,
			name: "Kit Corporativo Bienvenida",
			category: "Merchandising",
			image: "/images/products/kit-bienvenida.png",
			badge: "Personalizable",
			minQuantity: "25 unidades",
			href: "/producto/kit-corporativo-bienvenida",
		},
		{
			id: 6,
			name: "Kit Corporativo Premium",
			category: "Merchandising",
			image: "/images/products/kit-corporativo.png",
			badge: "Premium",
			minQuantity: "25 unidades",
			href: "/producto/kit-corporativo",
		},
		{
			id: 7,
			name: "Botella Térmica Personalizada",
			category: "Merchandising",
			image: "/images/products/botella-termica.png",
			badge: "Stock",
			minQuantity: "20 unidades",
			href: "/producto/botella-termica",
		},
		{
			id: 8,
			name: "Bolsa Tote Personalizada",
			category: "Merchandising",
			image: "/images/products/kit-corporativo.png",
			badge: "Eco",
			minQuantity: "30 unidades",
			href: "/producto/bolsa-tote",
		},
		{
			id: 9,
			name: "Pack Regalo Empresarial",
			category: "Merchandising",
			image: "/images/products/kit-bienvenida.png",
			badge: "Premium",
			minQuantity: "15 unidades",
			href: "/producto/pack-regalo",
		},
		{
			id: 10,
			name: "USB Personalizado",
			category: "Merchandising",
			image: "/images/products/kit-corporativo.png",
			badge: "Tecnológico",
			minQuantity: "50 unidades",
			href: "/producto/usb-personalizado",
		},
		{
			id: 11,
			name: "Power Bank Corporativo",
			category: "Merchandising",
			image: "/images/products/botella-termica.png",
			badge: "Nuevo",
			minQuantity: "30 unidades",
			href: "/producto/power-bank",
		},
		// Textil
		{
			id: 12,
			name: "Camiseta Corporativa Premium",
			category: "Textil",
			image: "/images/products/camiseta-corporativa.png",
			badge: "Eco",
			minQuantity: "10 unidades",
			href: "/producto/camiseta-corporativa",
		},
		{
			id: 13,
			name: "Polo Empresarial",
			category: "Textil",
			image: "/images/products/camiseta-corporativa.png",
			badge: "Premium",
			minQuantity: "15 unidades",
			href: "/producto/polo-empresarial",
		},
		{
			id: 14,
			name: "Sudadera con Capucha",
			category: "Textil",
			image: "/images/products/camiseta-corporativa.png",
			badge: "Nuevo",
			minQuantity: "12 unidades",
			href: "/producto/sudadera-capucha",
		},
		{
			id: 15,
			name: "Chaqueta Técnica",
			category: "Textil",
			image: "/images/products/camiseta-corporativa.png",
			badge: "Técnica",
			minQuantity: "8 unidades",
			href: "/producto/chaqueta-tecnica",
		},
		{
			id: 16,
			name: "Uniformes Escolares",
			category: "Textil",
			image: "/images/products/camiseta-corporativa.png",
			badge: "Escolar",
			minQuantity: "20 unidades",
			href: "/producto/uniformes-escolares",
		},
		{
			id: 17,
			name: "Gorra Personalizada",
			category: "Textil",
			image: "/images/products/camiseta-corporativa.png",
			badge: "Bordado",
			minQuantity: "20 unidades",
			href: "/producto/gorra-personalizada",
		},
		{
			id: 18,
			name: "Mochila Textil Personalizada",
			category: "Textil",
			image: "/images/products/camiseta-corporativa.png",
			badge: "Personalizada",
			minQuantity: "15 unidades",
			href: "/producto/mochila-textil",
		},
		{
			id: 19,
			name: "Pantalón Deportivo",
			category: "Textil",
			image: "/images/products/camiseta-corporativa.png",
			badge: "Equipación",
			minQuantity: "10 unidades",
			href: "/producto/pantalon-deportivo",
		},
		// Papelería
		{
			id: 20,
			name: "Libreta Ejecutiva A5",
			category: "Papelería",
			image: "/images/products/libreta-ejecutiva.png",
			badge: "Premium",
			minQuantity: "30 unidades",
			href: "/producto/libreta-ejecutiva",
		},
		{
			id: 21,
			name: "Cuaderno Tapa Dura",
			category: "Papelería",
			image: "/images/products/libreta-ejecutiva.png",
			badge: "Clásico",
			minQuantity: "25 unidades",
			href: "/producto/cuaderno-tapa-dura",
		},
		{
			id: 22,
			name: "Block de Notas Personalizado",
			category: "Papelería",
			image: "/images/products/libreta-ejecutiva.png",
			badge: "Nuevo",
			minQuantity: "40 unidades",
			href: "/producto/block-notas",
		},
		{
			id: 23,
			name: "Agenda Ejecutiva",
			category: "Papelería",
			image: "/images/products/libreta-ejecutiva.png",
			badge: "Ejecutiva",
			minQuantity: "20 unidades",
			href: "/producto/agenda-ejecutiva",
		},
		// Sostenibles
		{
			id: 24,
			name: "Agenda Sostenible Reciclada",
			category: "Sostenibles",
			image: "/images/products/agenda-sostenible.png",
			badge: "Eco",
			minQuantity: "50 unidades",
			href: "/producto/agenda-sostenible",
		},
		{
			id: 25,
			name: "Botella de Acero Inoxidable",
			category: "Sostenibles",
			image: "/images/products/agenda-sostenible.png",
			badge: "Reutilizable",
			minQuantity: "20 unidades",
			href: "/producto/botella-acero",
		},
		{
			id: 26,
			name: "Bolsa de Algodón Orgánico",
			category: "Sostenibles",
			image: "/images/products/agenda-sostenible.png",
			badge: "GOTS",
			minQuantity: "30 unidades",
			href: "/producto/bolsa-algodon",
		},
		{
			id: 27,
			name: "Libreta de Papel Piedra",
			category: "Sostenibles",
			image: "/images/products/agenda-sostenible.png",
			badge: "Innovación",
			minQuantity: "25 unidades",
			href: "/producto/libreta-papel-piedra",
		},
		{
			id: 28,
			name: "Bolígrafo de Bambú",
			category: "Sostenibles",
			image: "/images/products/agenda-sostenible.png",
			badge: "Biodegradable",
			minQuantity: "100 unidades",
			href: "/producto/boligrafo-bambu",
		},
		{
			id: 29,
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
	
	// Búsqueda desde query param
	let searchQuery = $derived($page.url.searchParams.get('q') || '');
	
	// Paginación
	let currentPage = $state(1);
	const itemsPerPage = 9;
	let totalPages = $derived(Math.ceil(filteredProducts.length / itemsPerPage));
	let paginatedProducts = $derived(
		filteredProducts.slice(
			(currentPage - 1) * itemsPerPage,
			currentPage * itemsPerPage
		)
	);
	
	function handlePageChange(page: number) {
		currentPage = page;
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
	
	// Filtrar productos según búsqueda y filtros
	$effect(() => {
		const selectedCategories = categories
			.filter((c) => c.checked)
			.map((c) => c.label);
		const selectedMaterials = materials
			.filter((m) => m.checked)
			.map((m) => m.label);

		let baseProducts = products;

		// Aplicar búsqueda primero
		if (searchQuery) {
			baseProducts = products.filter((product) =>
				product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				product.category.toLowerCase().includes(searchQuery.toLowerCase())
			);
		}

		// Aplicar filtros de categoría
		if (selectedCategories.length > 0) {
			baseProducts = baseProducts.filter((product) =>
				selectedCategories.some((cat) =>
					product.category.toLowerCase().includes(cat.toLowerCase())
				)
			);
		}

		// Aplicar filtros de material (si los productos tuvieran esta propiedad)
		// Por ahora solo filtramos por categoría

		filteredProducts = baseProducts;
		currentPage = 1; // Reset a página 1 cuando cambian los filtros
	});

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
			<PublisolButton
				text="Filtrar Productos"
				variant="secondary"
				size="md"
				onclick={() => (filtersDrawerOpen = true)}
				class="w-full"
			/>
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

								<PublisolButton
									text="Limpiar filtros"
									variant="secondary"
									size="sm"
									onclick={clearFilters}
									class="w-full"
								/>
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
						{#if searchQuery}
							Mostrando {filteredProducts.length} resultado{filteredProducts.length !== 1 ? 's' : ''} para "{searchQuery}"
						{:else}
							Mostrando {paginatedProducts.length} de {filteredProducts.length} productos
						{/if}
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
				{#if paginatedProducts.length === 0}
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
						<PublisolButton
							text="Limpiar Filtros"
							variant="primary"
							size="md"
							onclick={clearFilters}
						/>
					</div>
				{:else}
					<div
						class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
					>
						{#each paginatedProducts as product}
							<div class="group relative">
								<Card
									padding="none"
									class="overflow-hidden hover:elevation-2 transition-all hover-shadow-primary hover:-translate-y-1 min-h-[400px] flex flex-col"
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
										<div class="p-4 flex flex-col flex-1">
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
												class="text-sm text-text-muted mb-4 flex-1"
											>
												Desde {product.minQuantity}
											</Text>
										<div class="flex gap-2">
											<PublisolButton
												text="Ver Productos"
												variant="secondary"
												size="sm"
												href={product.href}
												class="flex-1"
											/>
											<PublisolButton
												text="Solicita Presupuesto"
												variant="primary"
												size="sm"
												onclick={() =>
													openQuickView(product)}
												class="flex-1"
											/>
										</div>
										</div>
									{/snippet}
								</Card>
							</div>
						{/each}
					</div>
				{/if}

				<!-- Paginación -->
				{#if totalPages > 1}
					<div class="flex justify-center items-center mt-8 sm:mt-12">
						<Pagination
							currentPage={currentPage}
							totalPages={totalPages}
							onpagechange={handlePageChange}
						/>
					</div>
				{/if}
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

				<PublisolButton
					text="Limpiar filtros"
					variant="secondary"
					size="sm"
					onclick={clearFilters}
					class="w-full"
				/>
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
