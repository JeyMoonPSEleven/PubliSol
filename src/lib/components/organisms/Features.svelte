<script lang="ts">
	import { Heading, Text, Card } from "atomic-design-svelte";
	import ScrollReveal from "$lib/components/atoms/ScrollReveal.svelte";
	import {
		Palette,
		Award,
		Truck,
		Clock,
		Users,
	} from "lucide-svelte";

	type Feature = {
		icon: typeof Palette;
		title: string;
		desc: string;
	};

	const features: Feature[] = [
		{
			icon: Palette,
			title: "Personalización Total",
			desc: "Logo, festivos y actividades de tu centro educativo. Diseños únicos para cada necesidad.",
		},
		{
			icon: Award,
			title: "Calidad Premium Certificada",
			desc: "Acabados profesionales en papel de alto gramaje certificado FSC y textiles Oeko-Tex.",
		},
		{
			icon: Truck,
			title: "Gestión Integral y Logística",
			desc: "Desde el diseño hasta la entrega en tu centro. Nos encargamos de todo el proceso.",
		},
		{
			icon: Clock,
			title: "Plazos Garantizados",
			desc: "Presupuesto personalizado en menos de 48h. Producción y entrega rápidas y fiables.",
		},
		{
			icon: Users,
			title: "Especialistas en AMPAs",
			desc: "Asesoramiento y soluciones de financiación adaptadas para Asociaciones de Madres y Padres.",
		},
	];
</script>

<section
	class="py-12 sm:py-16 md:py-20 lg:py-24 bg-surface-page"
	aria-labelledby="features-heading"
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<ScrollReveal animation="fly" direction="up" delay={0}>
			{#snippet children()}
				<Heading
					id="features-heading"
					level="h2"
					class="text-center mb-8 sm:mb-12 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
				>
					¿Por qué confiar en Publisol para tus calendarios escolares?
				</Heading>
			{/snippet}
		</ScrollReveal>

		<!-- Grid uniforme: 3 columnas en desktop, 2 en tablet, 1 en móvil -->
		<div
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto"
		>
			{#each features as feature, index}
				<ScrollReveal
					animation="fly"
					direction="up"
					delay={index * 100}
				>
					{#snippet children()}
						{@const IconComponent = feature.icon}
						<!-- Card uniforme: mismo estilo para todas -->
						<Card
							padding="lg"
							elevation={1}
							class="h-full text-center hover:elevation-2 transition-all duration-300 hover:-translate-y-1 group bg-white"
						>
							{#snippet header()}
								<!-- Icono circular uniforme: mismo tamaño para todas -->
								<div
									class="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110"
								>
									<IconComponent
										class="w-10 h-10 text-primary"
									/>
								</div>
								<Heading
									level="h3"
									class="mb-4 text-xl font-bold text-gray-900 group-hover:text-primary transition-colors"
								>
									{feature.title}
								</Heading>
							{/snippet}
							{#snippet children()}
								<Text class="text-text-muted text-base leading-relaxed">
									{feature.desc}
								</Text>
							{/snippet}
						</Card>
					{/snippet}
				</ScrollReveal>
			{/each}
		</div>
	</div>
</section>

