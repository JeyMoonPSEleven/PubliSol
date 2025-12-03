<script lang="ts">
	import { fade } from "svelte/transition";
	import ChristmasBanner from "$lib/components/atoms/ChristmasBanner.svelte";
	import FeatureList from "$lib/components/molecules/FeatureList.svelte";
	import CTAButtons from "$lib/components/molecules/CTAButtons.svelte";
	import Ratings from "$lib/components/molecules/Ratings.svelte";
	import Certifications from "$lib/components/molecules/Certifications.svelte";
	import RotatingPhrases from "$lib/components/atoms/RotatingPhrases.svelte";
	import VerticalMarquee, {
		type VerticalMarqueeItem,
	} from "$lib/components/molecules/VerticalMarquee.svelte";

	// Frases de impacto para rotación
	const heroPhrases = [
		"Tu Socio Estratégico Escolar",
		"Calidad Certificada desde 1975",
		"Personalización Total en 10-15 días",
	];

	// Datos del hero según el informe de Monday Merch
	const heroData = {
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

	// Productos para el VerticalMarquee (dos columnas con sentido inverso)
	// Estilo Monday Merch: tags arriba, título y subtítulo abajo
	const marqueeProducts: VerticalMarqueeItem[] = [
		{
			id: "product-01",
			title: "Agendas premium",
			subtitle: "Personalización total",
			image: "/images/products/agenda-premium.png",
			tags: ["Agenda Premium", "Personalizado", "A medida"],
		},
		{
			id: "product-02",
			title: "Kits de bienvenida",
			subtitle: "Kits corporativos",
			image: "/images/products/kit-bienvenida.png",
			tags: ["Kit de merchandising", "Off White", "Transferencia Digital"],
		},
		{
			id: "product-03",
			title: "Merchandising táctil",
			subtitle: "Productos personalizados",
			image: "/images/products/camiseta-corporativa.png",
			tags: ["Camiseta Premium", "Blanco", "Impresión Completa"],
		},
		{
			id: "product-04",
			title: "Papelería boutique",
			subtitle: "Material de oficina",
			image: "/images/products/libreta-ejecutiva.png",
			tags: ["Papelería", "Premium", "Personalizado"],
		},
		{
			id: "product-05",
			title: "Colecciones sostenibles",
			subtitle: "Productos eco-friendly",
			image: "/images/products/agenda-sostenible.png",
			tags: ["Eco", "Sostenible", "Certificado"],
		},
		{
			id: "product-06",
			title: "Packaging artesanal",
			subtitle: "Diseño exclusivo",
			image: "/images/products/botella-termica.png",
			tags: ["Packaging", "Metálico", "A medida"],
		},
		{
			id: "product-07",
			title: "Regalos de Año Nuevo",
			subtitle: "Bitvavo",
			image: "/images/products/kit-bienvenida.png",
			tags: ["Regalos de Año Nuevo", "Negro"],
		},
		{
			id: "product-08",
			title: "Paquetes de Año Nuevo",
			subtitle: "Año Nuevo",
			image: "/images/products/agenda-premium.png",
			tags: ["Paquete de Año Nuevo", "Impresión Completa", "Transferencia digital"],
		},
		{
			id: "product-09",
			title: "Bolsa Tote",
			subtitle: "Kota",
			image: "/images/products/camiseta-corporativa.png",
			tags: ["Bolsa tote premium", "Negro", "Impreso completo"],
		},
		{
			id: "product-10",
			title: "Merchandising para fans",
			subtitle: "Felicia Lu",
			image: "/images/products/libreta-ejecutiva.png",
			tags: ["Camiseta Premium", "Blanco", "Impresión Completa"],
		},
	];
</script>

<section
	class="relative overflow-hidden min-h-[85vh] sm:min-h-[90vh] flex items-center px-4 sm:px-6 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-gradient-to-br from-gray-50/95 via-white/90 to-gray-100/95 backdrop-blur-sm"
>
	<!-- Fondo sólido con transparencia -->
	<div class="absolute inset-0 z-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
	<div class="relative z-10 mx-auto max-w-[1400px]">
		<div
			class="grid gap-6 sm:gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12"
		>
			<!-- Columna Izquierda: Contenido Principal -->
			<div class="space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 relative z-10">
				<!-- Banner de Navidad -->
				<div in:fade={{ duration: 600, delay: 0 }}>
					<ChristmasBanner />
				</div>

				<!-- Título Principal - Rotating Phrases -->
				<div in:fade={{ duration: 600, delay: 200 }}>
					<RotatingPhrases
						phrases={heroPhrases}
						interval={3000}
						transitionDuration={500}
						className="text-fluid-3xl sm:text-fluid-4xl lg:text-fluid-5xl font-bold leading-tight text-gray-900"
					/>
				</div>

				<!-- Descripción - Fluid Typography -->
				<p
					class="leading-relaxed text-gray-700 text-fluid-base sm:text-fluid-lg max-w-2xl"
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

			<!-- Columna Derecha: VerticalMarquee con dos columnas (sentido inverso) -->
			<div class="hidden lg:block relative z-10" in:fade={{ duration: 800, delay: 300 }}>
				<div class="grid grid-cols-2 gap-3 sm:gap-4" style="height: 600px;">
					<!-- Columna izquierda: scroll hacia arriba -->
					<div class="h-full">
						<VerticalMarquee
							items={marqueeProducts.slice(0, 5)}
							direction="up"
							speed={30}
						/>
					</div>
					<!-- Columna derecha: scroll hacia abajo -->
					<div class="h-full">
						<VerticalMarquee
							items={marqueeProducts.slice(5, 10)}
							direction="down"
							speed={30}
						/>
					</div>
				</div>
			</div>

			<!-- Versión móvil: Grid horizontal -->
			<div class="lg:hidden mt-6 sm:mt-8">
				<div class="flex gap-3 sm:gap-4 overflow-x-auto pb-2 sm:pb-4 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory">
					{#each marqueeProducts as product}
						<div class="min-w-[240px] sm:min-w-[260px] flex-shrink-0 snap-center">
							<div
								class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-md"
							>
								<!-- Tags en la parte superior -->
								{#if product.tags && product.tags.length > 0}
									<div class="absolute top-2 left-2 right-2 z-10 flex flex-wrap gap-1.5">
										{#each product.tags.slice(0, 2) as tag}
											<span
												class="rounded-full bg-white/95 backdrop-blur-sm px-2 py-0.5 text-[10px] font-medium text-gray-700 shadow-sm"
											>
												{tag}
											</span>
										{/each}
									</div>
								{/if}
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
								<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-3">
									<h3
										class="text-sm font-semibold text-white mb-0.5 line-clamp-1"
									>
										{product.title}
									</h3>
									{#if product.subtitle}
										<p class="text-xs text-white/90 line-clamp-1">
											{product.subtitle}
										</p>
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
