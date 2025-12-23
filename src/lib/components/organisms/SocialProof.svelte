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
			body: "Excelente calidad y servicio. Las agendas quedaron perfectas y los alumnos están encantados. El proceso fue muy sencillo y el equipo muy profesional.",
			author: "María González",
			center: "Colegio San José",
			initials: "MG",
		},
		{
			body: "Como AMPA, la solución de financiación que nos ofrecieron fue perfecta. Las agendas se vendieron muy bien y pudimos financiar nuestro proyecto de viaje de fin de curso.",
			author: "Carlos Ruiz",
			center: "AMPA Instituto San Juan",
			initials: "CR",
		},
		{
			body: "Personalización total desde el primer día. Nos ayudaron con el diseño, los festivos locales y hasta incluyeron códigos QR para contenidos exclusivos. Muy recomendable.",
			author: "Ana Martínez",
			center: "Colegio Santa María",
			initials: "AM",
		},
		{
			body: "Plazos cumplidos a la perfección. Recibimos las agendas justo cuando las necesitábamos, con calidad premium y un precio muy competitivo. Repetiremos sin duda.",
			author: "José López",
			center: "Centro Educativo Los Pinos",
			initials: "JL",
		},
	];
</script>

<section
	class="py-12 sm:py-16 md:py-20 lg:py-24 bg-surface-tertiary"
	aria-labelledby="social-proof-heading"
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<ScrollReveal animation="fly" direction="up" delay={0}>
			{#snippet children()}
				<Heading
					id="social-proof-heading"
					level="h2"
					class="text-center mb-8 sm:mb-12 text-2xl sm:text-3xl md:text-4xl"
				>
					Lo que otros centros dicen de nosotros
				</Heading>
			{/snippet}
		</ScrollReveal>

		<div
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
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
							class="h-full flex flex-col hover:elevation-2 transition-all duration-300 hover:-translate-y-1 min-h-[280px]"
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
									class="text-text-muted text-sm leading-relaxed mb-6 flex-grow"
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

