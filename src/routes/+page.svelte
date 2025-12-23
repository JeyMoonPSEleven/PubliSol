<script lang="ts">
	import { Button, Heading, Text } from "atomic-design-svelte";
	import ScrollProgress from "$lib/components/magic-ui/ScrollProgress.svelte";
	import Seo from "$lib/components/Seo.svelte";
	import HeroSection from "$lib/components/organisms/HeroSection.svelte";
	import Features from "$lib/components/organisms/Features.svelte";
	import ProcessSteps from "$lib/components/organisms/ProcessSteps.svelte";
	import SocialProof from "$lib/components/organisms/SocialProof.svelte";
	import CTASection from "$lib/components/organisms/CTASection.svelte";
	import LeadCapture from "$lib/components/organisms/LeadCapture.svelte";
</script>

<Seo
	title="Publisol - Agendas y Merchandising Personalizado desde 1995"
	description="Desde 1995 creando productos únicos para colegios, empresas y asociaciones. Calidad, creatividad y servicio integral. Agendas escolares, merchandising empresarial y productos personalizados."
	image="/images/og-image.jpg"
	url="/"
	schemaType="Organization"
/>

<ScrollProgress
	color="linear-gradient(90deg, var(--color-primary), var(--color-secondary))"
	height="3px"
	className="shadow-[0_8px_24px_rgba(16,185,129,0.35)] pointer-events-none"
/>

<!-- SECCIÓN 1: HERO PRINCIPAL -->
<main>
	<HeroSection />

	<!-- SECCIÓN 2: BENEFICIOS - ¿Por qué confiar en Publisol para tus calendarios escolares? -->
	<Features />

	<!-- SECCIÓN 3: CÓMO FUNCIONA EL PEDIDO (Simple y visual) -->
	<ProcessSteps />

	<!-- SECCIÓN 4: TESTIMONIOS - Lo que otros centros dicen de nosotros -->
	<SocialProof />

	<!-- SECCIÓN 5: LLAMADO A LA ACCIÓN (Antes del formulario) -->
	<CTASection />

	<!-- SECCIÓN 6: FORMULARIO DE CONTACTO (Zona de conversión) -->
	<LeadCapture />
</main>
