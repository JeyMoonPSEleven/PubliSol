<script lang="ts">
	import { fade } from "svelte/transition";
	import CTAButtons from "$lib/components/molecules/CTAButtons.svelte";

	// Función para smooth scroll al formulario
	function scrollToForm() {
		const formElement = document.getElementById("contacto");
		if (formElement) {
			formElement.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	}

	const heroData = {
		h1: "Agendas escolares personalizadas para tu centro – con descuentos por pedido anticipado",
		description:
			"Impresos en alta calidad, personalizados a tu gusto y entregados a tiempo. Reserva tu pedido ya y evita prisas de última hora.",
		cta: {
			primary: {
				text: "Solicita Presupuesto",
				action: scrollToForm,
			},
			secondary: { 
				text: "Ver más", 
				action: () => {
					const target = document.getElementById("beneficios");
					if (target) {
						target.scrollIntoView({ behavior: "smooth", block: "start" });
					}
				}
			},
		},
	};
</script>

<section
	class="relative overflow-hidden min-h-[85vh] sm:min-h-[90vh] flex items-center px-4 sm:px-6 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24"
>
	<!-- Imagen de fondo impactante -->
	<div class="absolute inset-0 z-0">
		<img
			src="/images/hero/main-hero-bg.jpg"
			alt="Agendas escolares y productos textiles personalizados"
			class="w-full h-full object-cover"
			aria-hidden="true"
			loading="eager"
		/>
		<!-- Overlay para legibilidad -->
		<div
			class="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/70 backdrop-blur-sm"
		></div>
	</div>

	<div class="relative z-10 mx-auto max-w-[1400px] w-full">
		<div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
			<!-- Contenido Principal - Izquierda -->
			<div
				class="space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 relative z-10"
			>
				<!-- Título Principal - H1 SEO -->
				<h1
					class="text-fluid-3xl sm:text-fluid-4xl lg:text-fluid-5xl font-bold leading-tight text-gray-900"
					in:fade={{ duration: 600, delay: 200 }}
				>
					{heroData.h1}
				</h1>

				<!-- Descripción - Copy persuasivo -->
				<p
					class="leading-relaxed text-gray-700 text-fluid-base sm:text-fluid-lg max-w-2xl copy"
					style="font-size: clamp(1rem, 0.95rem + 0.25vw, 1.25rem);"
					in:fade={{ duration: 600, delay: 400 }}
				>
					{heroData.description}
				</p>

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

