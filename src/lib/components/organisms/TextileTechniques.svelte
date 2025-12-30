<script lang="ts">
	import { Heading, Text, Card } from "atomic-design-svelte";
	import ScrollReveal from "$lib/components/atoms/ScrollReveal.svelte";
	import {
		Sparkles,
		Zap,
		Target,
		Printer,
		Image as ImageIcon,
	} from "lucide-svelte";

	type Technique = {
		icon: typeof Sparkles;
		title: string;
		description: string;
		bestFor: string;
	};

	const techniques: Technique[] = [
		{
			icon: Sparkles,
			title: "Sublimación",
			description:
				"Ideal para prendas técnicas y diseños a todo color que no pierden intensidad.",
			bestFor: "Prendas técnicas y deportivas",
		},
		{
			icon: Zap,
			title: "DTF (Direct Transfer Film)",
			description:
				"Colores vibrantes y gran elasticidad en cualquier tipo de tela.",
			bestFor: "Alta durabilidad y flexibilidad",
		},
		{
			icon: Target,
			title: "Láser",
			description:
				"Precisión absoluta para acabados elegantes y duraderos.",
			bestFor: "Acabados premium y elegantes",
		},
		{
			icon: Printer,
			title: "Serigrafía",
			description:
				"La opción clásica y rentable para grandes tiradas con acabados impecables.",
			bestFor: "Grandes volúmenes",
		},
		{
			icon: ImageIcon,
			title: "Digital Directa",
			description:
				"Calidad fotográfica directamente sobre el tejido, perfecta para diseños complejos.",
			bestFor: "Diseños complejos y detallados",
		},
	];
</script>

<section
	class="py-12 sm:py-16 md:py-20 lg:py-24 bg-surface-tertiary"
	aria-labelledby="textile-techniques-heading"
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<ScrollReveal animation="fly" direction="up" delay={0}>
			{#snippet children()}
				<div class="text-center mb-8 sm:mb-12">
					<Heading
						id="textile-techniques-heading"
						level="h2"
						class="mb-4 text-2xl sm:text-3xl md:text-4xl"
					>
						Personalización textil de alta durabilidad
					</Heading>
					<Text class="text-text-muted text-base sm:text-lg max-w-3xl mx-auto">
						Contamos con la última tecnología para adaptarnos a cualquier diseño y tejido
					</Text>
				</div>
			{/snippet}
		</ScrollReveal>

		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto"
		>
			{#each techniques as technique, index}
				<ScrollReveal
					animation="fly"
					direction="up"
					delay={index * 100}
				>
					{#snippet children()}
						{@const IconComponent = technique.icon}
						<Card
							padding="lg"
							elevation={1}
							class="h-full hover:elevation-2 transition-all duration-300 hover:-translate-y-1 group bg-white"
						>
							{#snippet header()}
								<div
									class="w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110"
								>
									<IconComponent
										class="w-8 h-8 text-primary"
									/>
								</div>
								<Heading
									level="h3"
									class="mb-3 text-xl font-bold text-gray-900 group-hover:text-primary transition-colors"
								>
									{technique.title}
								</Heading>
							{/snippet}
							{#snippet children()}
								<Text class="text-text-muted text-sm leading-relaxed mb-3">
									{technique.description}
								</Text>
								<div
									class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-semibold"
								>
									<span>✓</span>
									<span>{technique.bestFor}</span>
								</div>
							{/snippet}
						</Card>
					{/snippet}
				</ScrollReveal>
			{/each}
		</div>
	</div>
</section>

