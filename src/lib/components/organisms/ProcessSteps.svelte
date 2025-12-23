<script lang="ts">
	import { Heading, Text, Card } from "atomic-design-svelte";
	import ScrollReveal from "$lib/components/atoms/ScrollReveal.svelte";
	import { MessageCircle, Pencil, Factory } from "lucide-svelte";
	import { fly } from "svelte/transition";

	type Step = {
		number: string;
		icon: typeof MessageCircle;
		title: string;
		description: string;
		time: string;
	};

	const steps: Step[] = [
		{
			number: "1",
			icon: MessageCircle,
			title: "Input",
			description: "Recepción de requerimientos. Nos cuentas tu proyecto y necesidades específicas.",
			time: "Inmediato",
		},
		{
			number: "2",
			icon: Pencil,
			title: "Feedback",
			description: "Presupuesto personalizado adaptado a tu centro educativo y AMPA.",
			time: "< 48h",
		},
		{
			number: "3",
			icon: Factory,
			title: "Production",
			description: "Confirmación de arte final e impresión con los mejores materiales certificados.",
			time: "10-15 días",
		},
	];
</script>

<section
	class="py-12 sm:py-16 md:py-20 lg:py-24 bg-surface-page"
	aria-labelledby="proceso-pedido"
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<ScrollReveal animation="fly" direction="up" delay={0}>
			{#snippet children()}
				<Heading
					id="proceso-pedido"
					level="h2"
					class="text-center mb-4 text-2xl sm:text-3xl md:text-4xl"
				>
					Cómo funciona el pedido
				</Heading>
				<Text class="text-center text-text-muted mb-8 sm:mb-12 text-base sm:text-lg max-w-2xl mx-auto">
					Un proceso simple y transparente en 3 pasos
				</Text>
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
										class="text-center h-full hover:elevation-2 transition-all duration-300 hover:-translate-y-2 group min-h-[280px] flex flex-col"
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
											<div
												class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mt-auto"
											>
												<svg
													class="w-4 h-4"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
													/>
												</svg>
												{step.time}
											</div>
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

