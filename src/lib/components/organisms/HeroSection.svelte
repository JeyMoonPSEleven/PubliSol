<script lang="ts">
	import { fade } from "svelte/transition";
	import ChristmasBanner from "$lib/components/atoms/ChristmasBanner.svelte";
	import FeatureList from "$lib/components/molecules/FeatureList.svelte";
	import CTAButtons from "$lib/components/molecules/CTAButtons.svelte";
	import Ratings from "$lib/components/molecules/Ratings.svelte";
	import Certifications from "$lib/components/molecules/Certifications.svelte";
	import TypewriterText from "$lib/components/atoms/TypewriterText.svelte";
	import VerticalMarquee, {
		type VerticalMarqueeItem,
	} from "$lib/components/molecules/VerticalMarquee.svelte";

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

	// Productos para el VerticalMarquee (dos columnas con sentido inverso)
	const marqueeProducts: VerticalMarqueeItem[] = [
		{
			id: "product-01",
			title: "Agendas premium",
			description: "Personalización total",
			image: "/images/products/agenda-premium.png",
			tag: "Premium",
		},
		{
			id: "product-02",
			title: "Kits de bienvenida",
			description: "Kits corporativos",
			image: "/images/products/kit-bienvenida.png",
			tag: "Empresarial",
		},
		{
			id: "product-03",
			title: "Merchandising táctil",
			description: "Productos personalizados",
			image: "/images/products/camiseta-corporativa.png",
			tag: "Textil",
		},
		{
			id: "product-04",
			title: "Papelería boutique",
			description: "Material de oficina",
			image: "/images/products/libreta-ejecutiva.png",
			tag: "Papelería",
		},
		{
			id: "product-05",
			title: "Colecciones sostenibles",
			description: "Productos eco-friendly",
			image: "/images/products/agenda-sostenible.png",
			tag: "Eco",
		},
		{
			id: "product-06",
			title: "Packaging artesanal",
			description: "Diseño exclusivo",
			image: "/images/products/botella-termica.png",
			tag: "Packaging",
		},
	];
</script>

<section
	class="relative overflow-hidden min-h-[90vh] flex items-center px-4 py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50/95 via-white/90 to-gray-100/95 backdrop-blur-sm"
>
	<!-- Fondo sólido con transparencia -->
	<div class="absolute inset-0 z-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
	<div class="relative z-10 mx-auto max-w-[1400px]">
		<div
			class="grid gap-6 sm:gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12"
		>
			<!-- Columna Izquierda: Contenido Principal -->
			<div class="space-y-4 sm:space-y-6 lg:space-y-8 relative z-10">
				<!-- Banner de Navidad -->
				<div in:fade={{ duration: 600, delay: 0 }}>
					<ChristmasBanner />
				</div>

				<!-- Título Principal - Typewriter Animation -->
				<div in:fade={{ duration: 600, delay: 200 }}>
					<TypewriterText
						text={heroData.title}
						speed={40}
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
				<div class="grid grid-cols-2 gap-3" style="height: 500px;">
					<!-- Columna izquierda: scroll hacia arriba -->
					<div class="h-full">
						<VerticalMarquee
							items={marqueeProducts.slice(0, 3)}
							direction="up"
							speed={25}
						/>
					</div>
					<!-- Columna derecha: scroll hacia abajo -->
					<div class="h-full">
						<VerticalMarquee
							items={marqueeProducts.slice(3, 6)}
							direction="down"
							speed={25}
						/>
					</div>
				</div>
			</div>

			<!-- Versión móvil: Grid horizontal -->
			<div class="lg:hidden">
				<div class="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
					{#each marqueeProducts as product}
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
									<h3
										class="mb-2 text-sm font-semibold text-black"
									>
										{product.title}
									</h3>
									{#if product.tag}
										<span
											class="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-600"
										>
											{product.tag}
										</span>
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
