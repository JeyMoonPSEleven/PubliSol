<script lang="ts">
	import { Heading, Text, Card } from "atomic-design-svelte";
	import ScrollReveal from "$lib/components/atoms/ScrollReveal.svelte";
	import { Quote } from "lucide-svelte";

	type Testimonial = {
		body: string;
		author: string;
		center: string;
		initials?: string;
		color?: string;
	};

	// Función para generar color basado en iniciales
	function getColorFromInitials(initials: string): string {
		const colors = [
			"bg-primary/10 text-primary",
			"bg-secondary/10 text-secondary",
			"bg-blue-500/10 text-blue-600",
			"bg-purple-500/10 text-purple-600",
			"bg-green-500/10 text-green-600",
		];
		const index = initials.charCodeAt(0) % colors.length;
		return colors[index];
	}

	// Función para obtener iniciales
	function getInitials(name: string): string {
		return name
			.split(" ")
			.map((n) => n[0])
			.join("")
			.toUpperCase()
			.slice(0, 2);
	}

	const testimonials: Testimonial[] = [
		{
			body: "Las agendas personalizadas han sido un éxito total. La calidad del papel y la impresión es excelente, y el trato personalizado nos ayudó a elegir el modelo perfecto para nuestros alumnos. La entrega fue puntual, justo antes del inicio de curso.",
			author: "María González",
			center: "CEIP San José - Madrid",
			initials: "MG",
		},
		{
			body: "Llevamos tres años trabajando con Publisol y siempre cumplen con los plazos. Las agendas quedan perfectas con nuestro logo y los festivos locales. El descuento por pedido anticipado es un plus que aprovechamos cada año.",
			author: "José Martínez",
			center: "IES Los Pinos - Valencia",
			initials: "JM",
		},
		{
			body: "Excelente atención y calidad. Nos asesoraron en todo momento y el resultado superó nuestras expectativas. Los alumnos están encantados con sus agendas personalizadas. Sin duda, repetiremos el próximo curso.",
			author: "Ana Rodríguez",
			center: "Colegio Santa María - Sevilla",
			initials: "AR",
		},
	];
</script>

<section
	class="py-12 sm:py-16 md:py-20 lg:py-24 bg-surface-tertiary"
	aria-labelledby="landing-social-proof-heading"
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<ScrollReveal animation="fly" direction="up" delay={0}>
			{#snippet children()}
				<Heading
					id="landing-social-proof-heading"
					level="h2"
					class="text-center mb-8 sm:mb-12 text-2xl sm:text-3xl md:text-4xl"
				>
					Lo que otros centros dicen de nosotros
				</Heading>
			{/snippet}
		</ScrollReveal>

		<div
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto"
		>
			{#each testimonials as testimonial, index}
				<ScrollReveal
					animation="fly"
					direction="up"
					delay={index * 100}
				>
					{#snippet children()}
						{@const initials = testimonial.initials || getInitials(testimonial.author)}
						{@const colorClass = testimonial.color || getColorFromInitials(initials)}
						<Card
							padding="lg"
							elevation={1}
							class="h-full flex flex-col hover:elevation-2 transition-all duration-300 hover:-translate-y-1 min-h-[320px]"
						>
							{#snippet header()}
								<div class="mb-4">
									<Quote
										class="w-8 h-8 text-primary/30 mb-3"
										aria-hidden="true"
									/>
								</div>
							{/snippet}
							{#snippet children()}
								<Text
									class="text-text-muted text-base leading-relaxed mb-6 flex-grow"
								>
									"{testimonial.body}"
								</Text>
								<div class="flex items-center gap-3 pt-4 border-t border-border-default">
									<div
										class="w-12 h-12 rounded-full {colorClass} flex items-center justify-center font-semibold text-sm flex-shrink-0"
										aria-hidden="true"
									>
										{initials}
									</div>
									<div class="flex-1 min-w-0">
										<Text
											class="font-semibold text-text-default text-sm mb-0.5"
										>
											{testimonial.author}
										</Text>
										<Text
											class="text-xs text-text-muted truncate"
										>
											{testimonial.center}
										</Text>
									</div>
								</div>
							{/snippet}
						</Card>
					{/snippet}
				</ScrollReveal>
			{/each}
		</div>
	</div>
</section>

