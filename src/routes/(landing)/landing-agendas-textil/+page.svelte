<script lang="ts">
	import Seo from "$lib/components/Seo.svelte";
	import LandingHero from "$lib/components/organisms/LandingHero.svelte";
	import LandingBenefits from "$lib/components/organisms/LandingBenefits.svelte";
	import LandingProcessSteps from "$lib/components/organisms/LandingProcessSteps.svelte";
	import LandingSocialProof from "$lib/components/organisms/LandingSocialProof.svelte";
	import LandingCTASection from "$lib/components/organisms/LandingCTASection.svelte";
	import LandingLeadCapture from "$lib/components/organisms/LandingLeadCapture.svelte";
</script>

<Seo
	title="Agendas Escolares Personalizadas - Publisol | Descuentos por Pedido Anticipado"
	description="Agendas escolares personalizadas para tu centro. Impresos en alta calidad, personalizados a tu gusto y entregados a tiempo. Reserva tu pedido ya y evita prisas de última hora."
	image="/images/og-image.jpg"
	url="/landing-agendas-textil"
	schemaType="Organization"
/>

<!-- SECCIÓN 1: HERO PRINCIPAL -->
<section id="hero">
	<LandingHero />
</section>

<!-- SECCIÓN 2: BENEFICIOS: ¿Por qué confiar en Publisol? -->
<section id="beneficios">
	<LandingBenefits />
</section>

<!-- SECCIÓN 3: CÓMO FUNCIONA EL PEDIDO -->
<section id="proceso">
	<LandingProcessSteps />
</section>

<!-- SECCIÓN 4: TESTIMONIOS -->
<section id="testimonios">
	<LandingSocialProof />
</section>

<!-- SECCIÓN 5: LLAMADO A LA ACCIÓN (antes del formulario) -->
<LandingCTASection />

<!-- SECCIÓN 6: FORMULARIO DE CONTACTO (Zona de conversión) -->
<section id="contacto">
	<LandingLeadCapture />
</section>

