<script lang="ts">
	import { Heading, Text, Card } from "atomic-design-svelte";
	import ScrollReveal from "$lib/components/atoms/ScrollReveal.svelte";
	import { MessageCircle, Palette, Package } from "lucide-svelte";

	type Step = {
		number: string;
		icon: typeof MessageCircle;
		title: string;
		description: string;
	};

	const steps: Step[] = [
		{
			number: "1",
			icon: MessageCircle,
			title: "Rellena el formulario",
			description: "Rellena el formulario con tus necesidades (unidades, contacto, observaciones).",
		},
		{
			number: "2",
			icon: Palette,
			title: "Recibe tu presupuesto",
			description: "Te enviamos un presupuesto personalizado en 24-48h.",
		},
		{
			number: "3",
			icon: Package,
			title: "Confirma y ¡a imprimir!",
			description: "Confirmas el diseño y ¡nos ponemos a imprimir!",
		},
	];
</script>

<section
	class="py-12 sm:py-16 md:py-20 lg:py-24 bg-surface-page"
	aria-labelledby="landing-proceso-pedido"
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<ScrollReveal animation="fly" direction="up" delay={0}>
			{#snippet children()}
				<Heading
					id="landing-proceso-pedido"
					level="h2"
					class="text-center mb-4 text-2xl sm:text-3xl md:text-4xl"
				>
					Así de fácil es hacer tu pedido
				</Heading>
			{/snippet}
		</ScrollReveal>

		<!-- Timeline Visual -->
		<div class="relative max-w-5xl mx-auto">
			<!-- Línea conectora (solo desktop) -->
			<div class="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-20"></div>

			<div class="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
				{#each steps as step, index}
					<ScrollReveal animation="fly" direction="up" delay={index * 150}>
						{#snippet children()}
							{@const StepIcon = step.icon}
							<div class="relative">
								<!-- Número de paso con círculo -->
								<div class="flex flex-col items-center">
									<div
										class="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 border-4 border-white flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110"
									>
										<div
											class="text-2xl sm:text-3xl font-bold text-primary"
										>
											{step.number}
										</div>
									</div>

									<!-- Card del paso -->
									<Card
										padding="lg"
										elevation={1}
										class="text-center h-full hover:elevation-2 transition-all duration-300 hover:-translate-y-2 group min-h-[320px] flex flex-col"
									>
										{#snippet header()}
											<div
												class="mb-4 transition-transform duration-300 group-hover:scale-110"
											>
												<StepIcon class="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto" />
											</div>
											<Heading
												level="h3"
												class="mb-3 text-lg sm:text-xl font-bold group-hover:text-primary transition-colors"
											>
												{step.title}
											</Heading>
										{/snippet}
										{#snippet children()}
											<Text
												class="text-text-muted text-sm leading-relaxed mb-4 flex-grow"
											>
												{step.description}
											</Text>
										{/snippet}
									</Card>
								</div>
							</div>
						{/snippet}
					</ScrollReveal>
				{/each}
			</div>
		</div>
	</div>
</section>

