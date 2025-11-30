<script lang="ts">
	import {
		Heading,
		Text,
		Button,
		Badge,
	} from "atomic-design-svelte";
	import { Link } from "atomic-design-svelte";
	import { onMount } from "svelte";
	import ScrollReveal from "$lib/components/atoms/ScrollReveal.svelte";
	import Seo from "$lib/components/Seo.svelte";
	import { CheckCircle2, Sparkles, Award, Leaf } from "lucide-svelte";

	// Producto destacado del mes (puede venir de API)
	const featuredProduct = {
		name: "Agenda Escolar Sostenible 2025",
		tagline: "El futuro de la personalización educativa",
		category: "Agendas Escolares",
		badge: "Producto del Mes",
		description:
			"Una agenda escolar que combina funcionalidad, sostenibilidad y personalización total. Diseñada para centros educativos que buscan calidad y compromiso medioambiental.",
		story: {
			title: "Nacida de la necesidad de unir educación y sostenibilidad",
			content:
				"En Publisol, creemos que cada proyecto educativo merece una solución única. Esta agenda nació cuando un colegio nos pidió algo más que un producto personalizado: querían transmitir valores de sostenibilidad a sus estudiantes. Así creamos una agenda 100% reciclada, con certificación FSC, que no compromete la calidad ni la durabilidad.",
		},
		features: [
			{
				icon: Leaf,
				title: "100% Sostenible",
				description: "Papel reciclado certificado FSC, tinta ecológica y proceso de producción con huella de carbono mínima.",
			},
			{
				icon: Award,
				title: "Calidad Premium",
				description: "Cubierta resistente, papel de 90g que no traspasa, y encuadernación de alta durabilidad.",
			},
			{
				icon: Sparkles,
				title: "Personalización Total",
				description: "Logo, colores corporativos, páginas personalizadas y diseño adaptado a tu proyecto educativo.",
			},
		],
		highlights: [
			"Certificación FSC y PEFC",
			"Papel reciclado de 90g",
			"Entrega en 10-15 días laborables",
			"Pedido mínimo: 50 unidades",
			"Precio desde 6.50€/unidad",
		],
		images: {
			hero: "/images/products/agenda-premium.png",
			gallery: [
				"/images/products/agenda-premium.png",
				"/images/products/kit-corporativo.png",
				"/images/products/libreta-ejecutiva.png",
			],
		},
		cta: {
			primary: {
				text: "Solicitar Presupuesto Personalizado",
				href: "/contacto?producto=Agenda Escolar Sostenible 2025",
			},
			secondary: {
				text: "Ver Catálogo Completo",
				href: "/productos",
			},
		},
	};

	onMount(() => {
		// Scroll suave para anclas
		document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
			anchor.addEventListener("click", function (e) {
				e.preventDefault();
				const target = document.querySelector(
					this.getAttribute("href") || "",
				);
				if (target) {
					target.scrollIntoView({ behavior: "smooth", block: "start" });
				}
			});
		});
	});
</script>

<Seo
	title={`${featuredProduct.name} - Producto del Mes | Publisol`}
	description={featuredProduct.description}
	image={featuredProduct.images.hero}
	url="/producto-destacado"
/>

<!-- Hero Asimétrico -->
<section class="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/5">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
		<div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
			<!-- Columna Izquierda: Contenido -->
			<ScrollReveal animation="fly" direction="right" delay={0}>
				{#snippet children()}
					<div class="space-y-6 sm:space-y-8">
						<Badge intent="primary" class="inline-flex items-center gap-2">
							<Sparkles class="w-4 h-4" />
							{featuredProduct.badge}
						</Badge>

						<Heading
							level="h1"
							class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
						>
							{featuredProduct.name}
						</Heading>

						<Text class="text-xl sm:text-2xl text-text-muted font-medium">
							{featuredProduct.tagline}
						</Text>

						<Text class="text-lg text-text-muted leading-relaxed max-w-2xl">
							{featuredProduct.description}
						</Text>

						<div class="flex flex-wrap gap-4 pt-4">
							<Button
								intent="primary"
								size="lg"
								href={featuredProduct.cta.primary.href}
								class="min-h-[56px] px-8"
							>
								{featuredProduct.cta.primary.text}
							</Button>
							<Button
								intent="secondary"
								size="lg"
								href={featuredProduct.cta.secondary.href}
								class="min-h-[56px] px-8"
							>
								{featuredProduct.cta.secondary.text}
							</Button>
						</div>
					</div>
				{/snippet}
			</ScrollReveal>

			<!-- Columna Derecha: Imagen Hero -->
			<ScrollReveal animation="fly" direction="left" delay={200}>
				{#snippet children()}
					<div class="relative">
						<div
							class="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/10 to-secondary/10"
						>
							<img
								src={featuredProduct.images.hero}
								alt={featuredProduct.name}
								class="w-full h-full object-cover"
								loading="eager"
							/>
							<div
								class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
							></div>
						</div>
						<!-- Elemento decorativo -->
						<div
							class="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
						></div>
					</div>
				{/snippet}
			</ScrollReveal>
		</div>
	</div>
</section>

<!-- Storytelling Section -->
<section
	id="historia"
	class="py-16 sm:py-20 lg:py-28 bg-white"
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-4xl mx-auto">
			<ScrollReveal animation="fade" delay={0}>
				{#snippet children()}
					<div class="space-y-8">
						<Badge intent="secondary" class="inline-block mb-4">
							{featuredProduct.category}
						</Badge>

						<Heading
							level="h2"
							class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
						>
							{featuredProduct.story.title}
						</Heading>

						<Text
							class="text-lg sm:text-xl text-text-muted leading-relaxed"
						>
							{featuredProduct.story.content}
						</Text>
					</div>
				{/snippet}
			</ScrollReveal>
		</div>
	</div>
</section>

<!-- Características Destacadas -->
<section
	id="caracteristicas"
	class="py-16 sm:py-20 lg:py-28 bg-surface-tertiary"
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<ScrollReveal animation="fly" direction="up" delay={0}>
			{#snippet children()}
				<Heading
					level="h2"
					class="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16"
				>
					¿Por qué elegir este producto?
				</Heading>
			{/snippet}
		</ScrollReveal>

		<div class="grid md:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto">
			{#each featuredProduct.features as feature, index}
				<ScrollReveal animation="fly" direction="up" delay={index * 100}>
					{#snippet children()}
						<div
							class="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
						>
							<div
								class="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6"
							>
								<svelte:component
									this={feature.icon}
									class="w-8 h-8 text-primary"
								/>
							</div>
							<Heading
								level="h3"
								class="text-xl sm:text-2xl font-bold mb-3"
							>
								{feature.title}
							</Heading>
							<Text class="text-text-muted leading-relaxed">
								{feature.description}
							</Text>
						</div>
					{/snippet}
				</ScrollReveal>
			{/each}
		</div>
	</div>
</section>

<!-- Galería Visual -->
<section
	id="galeria"
	class="py-16 sm:py-20 lg:py-28 bg-white"
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<ScrollReveal animation="fade" delay={0}>
			{#snippet children()}
				<Heading
					level="h2"
					class="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16"
				>
					Galería del Producto
				</Heading>
			{/snippet}
		</ScrollReveal>

		<div class="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
			{#each featuredProduct.images.gallery as image, index}
				<ScrollReveal
					animation="scale"
					delay={index * 150}
				>
					{#snippet children()}
						<div
							class="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
						>
							<img
								src={image}
								alt={`${featuredProduct.name} - Vista ${index + 1}`}
								class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
								loading="lazy"
							/>
							<div
								class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
							></div>
						</div>
					{/snippet}
				</ScrollReveal>
			{/each}
		</div>
	</div>
</section>

<!-- Highlights / Especificaciones -->
<section
	id="especificaciones"
	class="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-white to-secondary/5"
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-4xl mx-auto">
			<ScrollReveal animation="fly" direction="up" delay={0}>
				{#snippet children()}
					<div class="bg-white rounded-3xl p-8 sm:p-12 shadow-xl">
						<Heading
							level="h2"
							class="text-3xl sm:text-4xl font-bold mb-8 text-center"
						>
							Características Técnicas
						</Heading>

						<div class="grid sm:grid-cols-2 gap-4 sm:gap-6">
							{#each featuredProduct.highlights as highlight}
								<div class="flex items-start gap-3">
									<CheckCircle2
										class="w-6 h-6 text-success flex-shrink-0 mt-0.5"
									/>
									<Text class="text-base sm:text-lg">{highlight}</Text>
								</div>
							{/each}
						</div>
					</div>
				{/snippet}
			</ScrollReveal>
		</div>
	</div>
</section>

<!-- CTA Final -->
<section
	id="cta"
	class="py-16 sm:py-20 lg:py-28 bg-primary text-text-on-primary"
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto text-center">
			<ScrollReveal animation="fade" delay={0}>
				{#snippet children()}
					<div class="space-y-8">
						<Heading
							level="h2"
							class="text-3xl sm:text-4xl lg:text-5xl font-bold"
						>
							¿Listo para personalizar tu proyecto?
						</Heading>

						<Text class="text-lg sm:text-xl text-text-on-primary/90 max-w-2xl mx-auto">
							Contacta con nuestro equipo y recibe un presupuesto
							personalizado en menos de 24 horas. Sin compromiso.
						</Text>

						<div class="flex flex-wrap justify-center gap-4 pt-6">
							<Button
								intent="secondary"
								size="lg"
								href={featuredProduct.cta.primary.href}
								class="min-h-[56px] px-8 bg-white text-primary hover:bg-white/90"
							>
								{featuredProduct.cta.primary.text}
							</Button>
							<Button
								intent="ghost"
								size="lg"
								href={featuredProduct.cta.secondary.href}
								class="min-h-[56px] px-8 border-2 border-white text-white hover:bg-white/10"
							>
								{featuredProduct.cta.secondary.text}
							</Button>
						</div>
					</div>
				{/snippet}
			</ScrollReveal>
		</div>
	</div>
</section>

