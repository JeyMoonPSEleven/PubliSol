<script lang="ts">
	import { fade } from "svelte/transition";
	import ChristmasBanner from "$lib/components/atoms/ChristmasBanner.svelte";
	import FeatureList from "$lib/components/molecules/FeatureList.svelte";
	import CTAButtons from "$lib/components/molecules/CTAButtons.svelte";
	import Ratings from "$lib/components/molecules/Ratings.svelte";
	import Certifications from "$lib/components/molecules/Certifications.svelte";
	import ProductGrid from "$lib/components/organisms/ProductGrid.svelte";

	// Datos del hero según el informe de Monday Merch
	const heroData = {
		title: "Servicio Completo de Artículos Promocionales",
		description:
			"Organizar el Merchandising de la compañía es difícil y consume mucho tiempo. Déjanos manejarlo por ti: diseño, producción, almacenamiento y envío global.",
		features: [
			{ text: "Diseños gratis en 24 horas" },
			{ text: "Certificado y Sostenible" },
		],
		cta: {
			primary: { text: "Productos", href: "/productos" },
			secondary: { text: "Contáctanos", href: "/contacto" },
		},
	};

	// Productos para el grid (usando los showcaseItems existentes adaptados)
	const products = [
		{
			id: "product-01",
			title: "Agendas premium",
			subtitle: "Publisol",
			image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=900&h=600&fit=crop&q=80",
			tags: ["Agendas", "Premium"],
		},
		{
			id: "product-02",
			title: "Kits de bienvenida",
			subtitle: "Publisol",
			image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=900&h=600&fit=crop&q=80",
			tags: ["Kits", "Empresarial"],
		},
		{
			id: "product-03",
			title: "Merchandising táctil",
			subtitle: "Publisol",
			image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=600&fit=crop&q=80",
			tags: ["Merchandising", "Táctil"],
		},
		{
			id: "product-04",
			title: "Papelería boutique",
			subtitle: "Publisol",
			image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=900&h=600&fit=crop&q=80",
			tags: ["Papelería", "Boutique"],
		},
		{
			id: "product-05",
			title: "Colecciones sostenibles",
			subtitle: "Publisol",
			image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900&h=600&fit=crop&q=80",
			tags: ["Sostenible", "Eco"],
		},
		{
			id: "product-06",
			title: "Packaging artesanal",
			subtitle: "Publisol",
			image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=900&h=800&fit=crop&q=80",
			tags: ["Packaging", "Artesanal"],
		},
	];
</script>

<section
	class="relative overflow-hidden bg-white px-4 py-8 sm:py-12 md:py-16 lg:py-20"
>
	<div class="relative z-10 mx-auto max-w-[1400px]">
		<div
			class="grid gap-6 sm:gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12"
		>
			<!-- Columna Izquierda: Contenido Principal -->
			<div class="space-y-4 sm:space-y-6 lg:space-y-8">
				<!-- Banner de Navidad -->
				<div in:fade={{ duration: 600, delay: 0 }}>
					<ChristmasBanner />
				</div>

				<!-- Título Principal - Fluid Typography -->
				<h1
					class="font-bold leading-tight text-black text-fluid-3xl sm:text-fluid-4xl lg:text-fluid-5xl"
					style="font-size: clamp(1.875rem, 1.5rem + 1.875vw, 3.5rem);"
					in:fade={{ duration: 600, delay: 200 }}
				>
					{heroData.title}
				</h1>

				<!-- Descripción - Fluid Typography -->
				<p
					class="leading-relaxed text-black/80 text-fluid-base sm:text-fluid-lg"
					style="font-size: clamp(1rem, 0.95rem + 0.25vw, 1.25rem);"
					in:fade={{ duration: 600, delay: 400 }}
				>
					{heroData.description}
				</p>

				<!-- Lista de Características -->
				<div in:fade={{ duration: 600, delay: 500 }}>
					<FeatureList features={heroData.features} />
				</div>

				<!-- Botones CTA -->
				<div in:fade={{ duration: 600, delay: 600 }}>
					<CTAButtons
						primary={heroData.cta.primary}
						secondary={heroData.cta.secondary}
					/>
				</div>

				<!-- Ratings -->
				<div in:fade={{ duration: 600, delay: 700 }}>
					<Ratings />
				</div>

				<!-- Certificaciones -->
				<div in:fade={{ duration: 600, delay: 800 }}>
					<Certifications />
				</div>
			</div>

			<!-- Columna Derecha: Grid de Productos -->
			<div class="hidden lg:block">
				<ProductGrid {products} />
			</div>

			<!-- Versión móvil: Grid horizontal -->
			<div class="lg:hidden">
				<div class="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
					{#each products as product}
						<div class="min-w-[220px] flex-shrink-0">
							<div
								class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-md"
							>
								<div class="aspect-square overflow-hidden">
									<img
										src={product.image}
										alt={product.title}
										class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
										loading="lazy"
										decoding="async"
										width="400"
										height="400"
										fetchpriority="low"
									/>
								</div>
								<div class="p-4">
									{#if product.subtitle}
										<p
											class="mb-1 text-xs font-medium uppercase tracking-wide text-gray-500"
										>
											{product.subtitle}
										</p>
									{/if}
									<h3
										class="mb-2 text-sm font-semibold text-black"
									>
										{product.title}
									</h3>
									{#if product.tags && product.tags.length > 0}
										<div class="flex flex-wrap gap-1">
											{#each product.tags as tag}
												<span
													class="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-600"
												>
													{tag}
												</span>
											{/each}
										</div>
									{/if}
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.scrollbar-hide {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}
</style>
