<script lang="ts">
	import { Heading, Text, Card, Button, Breadcrumb, Filters, ProductCard } from "atomic-design-svelte";
	import { Link } from "atomic-design-svelte";
	
	const breadcrumbItems = [
		{ label: "Inicio", href: "/" },
		{ label: "Productos", href: "/productos" }
	];
	
	const categories = [
		{ label: "Agendas Escolares", checked: false },
		{ label: "Agendas Personalizadas", checked: false },
		{ label: "Merchandising", checked: false },
		{ label: "Textil", checked: false },
		{ label: "Papelería", checked: false },
		{ label: "Sostenibles", checked: false }
	];
	
	const materials = [
		{ label: "Papel reciclado", checked: false },
		{ label: "Cuero sintético", checked: false },
		{ label: "Tela", checked: false },
		{ label: "Plástico reciclado", checked: false }
	];
	
	// Ejemplo de productos
	const products = [
		{
			id: 1,
			name: "Agenda Escolar Premium A4",
			category: "Agendas Escolares",
			image: "https://images.unsplash.com/photo-1503676260728-1c00e094b736?w=600&h=600&fit=crop&q=80",
			badge: "Nuevo 2025",
			minQuantity: "50 unidades",
			href: "/producto/agenda-escolar-premium"
		},
		{
			id: 2,
			name: "Kit Corporativo Bienvenida",
			category: "Merchandising",
			image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&h=600&fit=crop&q=80",
			badge: "Personalizable",
			minQuantity: "25 unidades",
			href: "/producto/kit-corporativo-bienvenida"
		},
		{
			id: 3,
			name: "Camiseta Corporativa Premium",
			category: "Textil",
			image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&q=80",
			badge: "Eco",
			minQuantity: "10 unidades",
			href: "/producto/camiseta-corporativa"
		},
		{
			id: 4,
			name: "Libreta Ejecutiva A5",
			category: "Papelería",
			image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=600&fit=crop&q=80",
			badge: "Premium",
			minQuantity: "30 unidades",
			href: "/producto/libreta-ejecutiva"
		},
		{
			id: 5,
			name: "Agenda Sostenible Reciclada",
			category: "Sostenibles",
			image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=600&fit=crop&q=80",
			badge: "Eco",
			minQuantity: "50 unidades",
			href: "/producto/agenda-sostenible"
		},
		{
			id: 6,
			name: "Botella Térmica Personalizada",
			category: "Merchandising",
			image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=600&fit=crop&q=80",
			badge: "Stock",
			minQuantity: "20 unidades",
			href: "/producto/botella-termica"
		}
	];
</script>

<!-- Hero de Categoría -->
<section class="bg-surface-tertiary py-12">
	<div class="container mx-auto px-4">
		<Breadcrumb items={breadcrumbItems} />
		<Heading level="h1" class="mt-4 mb-2">Nuestro Catálogo</Heading>
		<Text class="text-text-muted">
			Descubre nuestra amplia gama de productos personalizados para colegios y empresas
		</Text>
	</div>
</section>

<!-- Layout Principal: Sidebar + Grid -->
<section class="py-8 sm:py-12">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
			<!-- Sidebar Filtros (Desktop) -->
			<aside class="hidden lg:block">
				<div class="sticky top-24 space-y-6">
					<Filters>
						{#snippet children()}
							<div class="space-y-6">
								<!-- Categorías -->
								<div>
									<Heading level="h4" class="mb-4">Categorías</Heading>
									<div class="space-y-2">
										{#each categories as category}
											<label class="flex items-center gap-2 cursor-pointer">
												<input type="checkbox" class="rounded" />
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
											<label class="flex items-center gap-2 cursor-pointer">
												<input type="checkbox" class="rounded" />
												<Text class="text-sm">{material.label}</Text>
											</label>
										{/each}
									</div>
								</div>
								
								<!-- Características -->
								<div>
									<Heading level="h4" class="mb-4">Características</Heading>
									<div class="space-y-2">
										<label class="flex items-center gap-2 cursor-pointer">
											<input type="checkbox" class="rounded" />
											<Text class="text-sm">Eco-friendly</Text>
										</label>
										<label class="flex items-center gap-2 cursor-pointer">
											<input type="checkbox" class="rounded" />
											<Text class="text-sm">Premium</Text>
										</label>
										<label class="flex items-center gap-2 cursor-pointer">
											<input type="checkbox" class="rounded" />
											<Text class="text-sm">Personalizable</Text>
										</label>
										<label class="flex items-center gap-2 cursor-pointer">
											<input type="checkbox" class="rounded" />
											<Text class="text-sm">Stock inmediato</Text>
										</label>
									</div>
								</div>
								
								<Button intent="ghost" class="w-full text-sm">
									Limpiar filtros
								</Button>
							</div>
						{/snippet}
					</Filters>
				</div>
			</aside>
			
			<!-- Grid de Productos -->
			<div class="lg:col-span-3">
				<!-- Controles Superiores -->
				<div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
					<Text class="text-text-muted">
						Mostrando {products.length} de {products.length} productos
					</Text>
					<div class="flex items-center gap-4">
						<select class="px-4 py-2 rounded-lg border border-border-default text-sm">
							<option>Relevancia</option>
							<option>Más recientes</option>
							<option>Nombre A-Z</option>
						</select>
					</div>
				</div>
				
				<!-- Grid de Productos -->
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
					{#each products as product}
						<ProductCard
							name={product.name}
							category={product.category}
							image={product.image}
							badge={product.badge}
							href={product.href}
						>
							{#snippet children()}
								<Text class="text-sm text-text-muted mb-4">
									Desde {product.minQuantity}
								</Text>
								<Button intent="secondary" size="sm" class="w-full" href={product.href}>
									Ver Detalles
								</Button>
							{/snippet}
						</ProductCard>
					{/each}
				</div>
				
				<!-- Paginación -->
				<div class="flex justify-center items-center gap-1 sm:gap-2 mt-8 sm:mt-12 flex-wrap">
					<Button intent="ghost" size="sm" class="min-h-[44px] min-w-[44px]">«</Button>
					<Button intent="primary" size="sm" class="min-h-[44px] min-w-[44px]">1</Button>
					<Button intent="ghost" size="sm" class="min-h-[44px] min-w-[44px]">2</Button>
					<Button intent="ghost" size="sm" class="min-h-[44px] min-w-[44px]">3</Button>
					<Text class="text-text-muted px-2">...</Text>
					<Button intent="ghost" size="sm" class="min-h-[44px] min-w-[44px]">8</Button>
					<Button intent="ghost" size="sm" class="min-h-[44px] min-w-[44px]">»</Button>
				</div>
			</div>
		</div>
	</div>
</section>

