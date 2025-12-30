<script lang="ts">
	import { Heading, Text, Card } from "atomic-design-svelte";
	import ScrollReveal from "$lib/components/atoms/ScrollReveal.svelte";
	import { Layers, Award, Users, Clock } from "lucide-svelte";

	type Benefit = {
		icon: typeof Layers;
		title: string;
		description: string;
	};

	const benefits: Benefit[] = [
		{
			icon: Layers,
			title: "Personalización Total",
			description:
				"Personalización con logo del centro, festivos locales, actividades y mucho más.",
		},
		{
			icon: Award,
			title: "Calidad Profesional",
			description:
				"Calidad profesional de impresión y papel. Materiales resistentes al uso diario escolar.",
		},
		{
			icon: Clock,
			title: "Entrega Garantizada",
			description:
				"Entrega garantizada a tiempo. Tu material listo cuando lo necesitas, sin retrasos.",
		},
		{
			icon: Users,
			title: "Descuentos y Trato Personalizado",
			description:
				"Descuentos exclusivos por pedido anticipado. Trato cercano y atención personalizada.",
		},
	];
</script>

<section
	class="py-12 sm:py-16 md:py-20 lg:py-24 bg-surface-page"
	aria-labelledby="landing-benefits-heading"
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<ScrollReveal animation="fly" direction="up" delay={0}>
			{#snippet children()}
				<div class="text-center mb-8 sm:mb-12">
					<Heading
						id="landing-benefits-heading"
						level="h2"
						class="mb-4 text-2xl sm:text-3xl md:text-4xl"
					>
						¿Por qué confiar en Publisol para tus agendas escolares?
					</Heading>
				</div>
			{/snippet}
		</ScrollReveal>

		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto"
		>
			{#each benefits as benefit, index}
				<ScrollReveal
					animation="fly"
					direction="up"
					delay={index * 100}
				>
					{#snippet children()}
						{@const IconComponent = benefit.icon}
						<Card
							padding="lg"
							elevation={1}
							class="h-full text-center hover:elevation-2 transition-all duration-300 hover:-translate-y-1 group bg-white flex flex-col min-h-[280px]"
						>
							{#snippet header()}
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
									{benefit.title}
								</Heading>
							{/snippet}
							{#snippet children()}
								<Text class="text-text-muted text-base leading-relaxed flex-grow">
									{benefit.description}
								</Text>
							{/snippet}
						</Card>
					{/snippet}
				</ScrollReveal>
			{/each}
		</div>
	</div>
</section>

