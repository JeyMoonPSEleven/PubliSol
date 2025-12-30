<script lang="ts">
	import { Heading, Text, Card } from "atomic-design-svelte";
	import ScrollReveal from "$lib/components/atoms/ScrollReveal.svelte";
	import { BookOpen, Calendar, FileText, Palette } from "lucide-svelte";

	type AgendaType = {
		icon: typeof BookOpen;
		title: string;
		description: string;
		emoji: string;
	};

	const agendaTypes: AgendaType[] = [
		{
			icon: BookOpen,
			title: "Agenda Clásica",
			description: "El equilibrio ideal entre funcionalidad y diseño tradicional.",
			emoji: "📚",
		},
		{
			icon: Calendar,
			title: "Agenda Día Página",
			description: "Máximo espacio para anotaciones diarias y organización detallada.",
			emoji: "📖",
		},
		{
			icon: FileText,
			title: "Agendas de Doble Página",
			description: "Visión semanal completa para una planificación rápida.",
			emoji: "🎓",
		},
		{
			icon: Palette,
			title: "Agendas Personalizadas",
			description: "Diseñamos desde cero según las necesidades pedagógicas de tu centro.",
			emoji: "✏️",
		},
	];
</script>

<section
	class="py-12 sm:py-16 md:py-20 lg:py-24 bg-surface-page"
	aria-labelledby="agenda-catalog-heading"
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<ScrollReveal animation="fly" direction="up" delay={0}>
			{#snippet children()}
				<div class="text-center mb-8 sm:mb-12">
					<Heading
						id="agenda-catalog-heading"
						level="h2"
						class="mb-4 text-2xl sm:text-3xl md:text-4xl"
					>
						La herramienta perfecta para tus alumnos
					</Heading>
					<Text class="text-text-muted text-base sm:text-lg max-w-2xl mx-auto">
						Elige el modelo que mejor se adapte a las necesidades de tu centro educativo
					</Text>
				</div>
			{/snippet}
		</ScrollReveal>

		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto"
		>
			{#each agendaTypes as agenda, index}
				<ScrollReveal
					animation="fly"
					direction="up"
					delay={index * 100}
				>
					{#snippet children()}
						{@const IconComponent = agenda.icon}
						<Card
							padding="lg"
							elevation={1}
							class="h-full text-center hover:elevation-2 transition-all duration-300 hover:-translate-y-1 group bg-white"
						>
							{#snippet header()}
								<!-- Emoji + Icono -->
								<div class="mb-4">
									<div
										class="text-5xl mb-3"
										aria-hidden="true"
									>
										{agenda.emoji}
									</div>
									<div
										class="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110"
									>
										<IconComponent
											class="w-8 h-8 text-primary"
										/>
									</div>
								</div>
								<Heading
									level="h3"
									class="mb-3 text-xl font-bold text-gray-900 group-hover:text-primary transition-colors"
								>
									{agenda.title}
								</Heading>
							{/snippet}
							{#snippet children()}
								<Text class="text-text-muted text-sm leading-relaxed">
									{agenda.description}
								</Text>
							{/snippet}
						</Card>
					{/snippet}
				</ScrollReveal>
			{/each}
		</div>
	</div>
</section>

