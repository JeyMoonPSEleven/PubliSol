<script lang="ts">
	import { Heading, Text } from "atomic-design-svelte";
	import ScrollReveal from "$lib/components/atoms/ScrollReveal.svelte";
	import PublisolButton from "$lib/components/atoms/PublisolButton.svelte";

	function scrollToForm() {
		const formElement = document.getElementById("contacto");
		if (formElement) {
			formElement.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	}
</script>

<section
	class="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20"
	aria-labelledby="landing-cta-heading"
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<ScrollReveal animation="fade" direction="up" delay={0}>
			{#snippet children()}
				<div class="text-center max-w-3xl mx-auto">
					<Heading
						id="landing-cta-heading"
						level="h2"
						class="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold"
					>
						Reserva tu pedido ahora y benefíciate del descuento por anticipación
					</Heading>
					<Text
						class="text-lg sm:text-xl text-text-muted mb-8 leading-relaxed"
					>
						¡Sólo toma un minuto!
					</Text>
					<div class="flex justify-center">
						<PublisolButton
							text="Solicita Presupuesto"
							variant="primary"
							size="lg"
							onclick={scrollToForm}
						/>
					</div>
				</div>
			{/snippet}
		</ScrollReveal>
	</div>
</section>

