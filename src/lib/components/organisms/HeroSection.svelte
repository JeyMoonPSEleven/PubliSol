<script lang="ts">
	import { fade } from "svelte/transition";
	import { onMount } from "svelte";
	import ChristmasBanner from "$lib/components/atoms/ChristmasBanner.svelte";
	import FeatureList from "$lib/components/molecules/FeatureList.svelte";
	import CTAButtons from "$lib/components/molecules/CTAButtons.svelte";

	// Función para smooth scroll al formulario
	function scrollToForm() {
		const formElement = document.getElementById("lead-capture");
		if (formElement) {
			formElement.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	}

	// Datos del hero actualizados
	const heroData = {
		h1: "Calendarios escolares personalizados para tu centro – con descuentos por pedido anticipado",
		description:
			"Impresos en alta calidad, personalizados a tu gusto y entregados a tiempo. Reserva tu pedido ya y evita prisas de última hora",
		features: [
			{ text: "Personalización total: logo, festivos y actividades" },
			{ text: "Descuentos por pedido anticipado" },
		],
		cta: {
			primary: {
				text: "Solicita Presupuesto",
				action: scrollToForm,
			},
			secondary: { text: "Ver Productos", href: "/productos" },
		},
	};

	// Carrusel de imágenes
	const heroImages = [
		"/images/hero/main-hero-bg.jpg",
		"/images/hero/hero-background-2.jpg",
		"/images/hero/hero-background-alt.jpg",
		"/images/hero/ll.jpg",
	];

	let currentImageIndex = $state(0);
	let isPaused = $state(false);
	let carouselInterval: ReturnType<typeof setInterval> | null = null;

	// Efecto typewriter
	let displayedText = $state("");
	let isTyping = $state(true);
	const fullText = heroData.h1;
	let charIndex = $state(0);

	onMount(() => {
		// Iniciar typewriter
		function typeWriter() {
			if (charIndex < fullText.length) {
				displayedText += fullText.charAt(charIndex);
				charIndex++;
				setTimeout(typeWriter, 50);
			} else {
				isTyping = false;
			}
		}
		typeWriter();

		// Iniciar carrusel
		function startCarousel() {
			if (!isPaused) {
				carouselInterval = setInterval(() => {
					currentImageIndex =
						(currentImageIndex + 1) % heroImages.length;
				}, 6000);
			}
		}

		startCarousel();

		return () => {
			if (carouselInterval) {
				clearInterval(carouselInterval);
			}
		};
	});

	function pauseCarousel() {
		isPaused = true;
		if (carouselInterval) {
			clearInterval(carouselInterval);
		}
	}

	function resumeCarousel() {
		isPaused = false;
		if (carouselInterval) {
			clearInterval(carouselInterval);
		}
		carouselInterval = setInterval(() => {
			currentImageIndex = (currentImageIndex + 1) % heroImages.length;
		}, 6000);
	}

	function goToSlide(index: number) {
		currentImageIndex = index;
		if (carouselInterval) {
			clearInterval(carouselInterval);
		}
		carouselInterval = setInterval(() => {
			currentImageIndex = (currentImageIndex + 1) % heroImages.length;
		}, 6000);
	}
</script>

<section
	class="relative overflow-hidden min-h-[85vh] sm:min-h-[90vh] flex items-center px-4 sm:px-6 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24"
	onmouseenter={pauseCarousel}
	onmouseleave={resumeCarousel}
>
	<!-- Carrusel de imágenes de fondo -->
	<div class="absolute inset-0 z-0">
		{#each heroImages as image, index}
			<img
				src={image}
				alt=""
				class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 {index ===
				currentImageIndex
					? 'opacity-100'
					: 'opacity-0'}"
				aria-hidden="true"
				loading={index === 0 ? "eager" : "lazy"}
			/>
		{/each}
		<!-- Overlay para legibilidad -->
		<div
			class="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/70 backdrop-blur-sm"
		></div>
	</div>

	<!-- Indicadores del carrusel -->
	<div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
		{#each heroImages as _, index}
			<button
				type="button"
				onclick={() => goToSlide(index)}
				class="w-2 h-2 rounded-full transition-all duration-300 {index ===
				currentImageIndex
					? 'bg-primary w-8'
					: 'bg-gray-300 hover:bg-gray-400'}"
				aria-label="Ir a slide {index + 1}"
			></button>
		{/each}
	</div>

	<div class="relative z-10 mx-auto max-w-[1400px] w-full">
		<div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
			<!-- Contenido Principal - Izquierda -->
			<div
				class="space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 relative z-10"
			>
				<!-- Banner de Navidad -->
				<div in:fade={{ duration: 600, delay: 0 }}>
					<ChristmasBanner />
				</div>

				<!-- Título Principal - H1 SEO con efecto typewriter -->
				<h1
					class="text-fluid-3xl sm:text-fluid-4xl lg:text-fluid-5xl font-bold leading-tight text-gray-900 min-h-[1.2em]"
					in:fade={{ duration: 600, delay: 200 }}
				>
					{displayedText}
					{#if isTyping}
						<span
							class="inline-block w-0.5 h-[1em] bg-primary ml-1 animate-pulse"
							aria-hidden="true">|</span
						>
					{/if}
				</h1>

				<!-- Descripción - Copy persuasivo -->
				<p
					class="leading-relaxed text-gray-700 text-fluid-base sm:text-fluid-lg max-w-2xl copy"
					style="font-size: clamp(1rem, 0.95rem + 0.25vw, 1.25rem);"
					in:fade={{ duration: 600, delay: 400 }}
				>
					{heroData.description}
				</p>

				<!-- Lista de Características -->
				<div in:fade={{ duration: 600, delay: 500 }}>
					<FeatureList features={heroData.features} />
				</div>

				<!-- Botones CTA -->
				<div in:fade={{ duration: 600, delay: 600 }}>
					<CTAButtons
						primary={heroData.cta.primary}
						secondary={heroData.cta.secondary}
					/>
				</div>
			</div>

			<!-- Imagen de producto destacado - Derecha -->
			<div
				class="hidden lg:block relative z-10"
				in:fade={{ duration: 800, delay: 300 }}
			>
				<div class="relative">
					<img
						src="/images/products/agenda-premium.png"
						alt="Agenda escolar personalizada"
						class="w-full h-auto object-contain drop-shadow-2xl"
						loading="eager"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.scrollbar-hide {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}
</style>
