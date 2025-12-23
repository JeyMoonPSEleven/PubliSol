<script lang="ts">
	import { Heading, Text, Button } from "atomic-design-svelte";
	import ScrollReveal from "$lib/components/atoms/ScrollReveal.svelte";
	import { ArrowRight } from "lucide-svelte";

	// Función para smooth scroll al formulario
	function scrollToForm() {
		const formElement = document.getElementById('lead-capture');
		if (formElement) {
			formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}
</script>

<section
	class="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary via-primary/95 to-secondary text-white relative overflow-hidden"
	aria-labelledby="cta-heading"
>
	<!-- Efectos de fondo -->
	<div class="absolute inset-0 opacity-10">
		<div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
	</div>

	<div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
		<ScrollReveal animation="fly" direction="up" delay={0}>
			{#snippet children()}
				<div class="max-w-3xl mx-auto text-center">
					<Heading
						id="cta-heading"
						level="h2"
						class="mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white"
					>
						Reserva tu pedido ahora y benefíciate del descuento por anticipación
					</Heading>
					<Text
						class="mb-8 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
					>
						¡Sólo toma un minuto!
					</Text>
					<Button
						intent="secondary"
						size="lg"
						onclick={scrollToForm}
						class="group inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-white/90 min-h-[56px] px-8 py-4 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
					>
						<span>Solicitar Presupuesto</span>
						<ArrowRight
							class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
							aria-hidden="true"
						/>
					</Button>
				</div>
			{/snippet}
		</ScrollReveal>
	</div>
</section>

