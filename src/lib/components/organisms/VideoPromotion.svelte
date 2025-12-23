<script lang="ts">
	import { Heading, Text, Card } from "atomic-design-svelte";
	import ScrollReveal from "$lib/components/atoms/ScrollReveal.svelte";
	import { Play } from "lucide-svelte";

	type VideoItem = {
		id: string;
		title: string;
		description: string;
		thumbnail?: string;
		videoUrl?: string;
	};

	const videos: VideoItem[] = [
		{
			id: "video-1",
			title: "Agendas Escolares Personalizadas",
			description: "Descubre cómo creamos agendas únicas para tu centro educativo",
			thumbnail: "/images/products/agenda-premium.png",
		},
		{
			id: "video-2",
			title: "Textil Corporativo de Calidad",
			description: "Técnicas de impresión profesional: Sublimación, DTF, Laser y más",
			thumbnail: "/images/products/camiseta-corporativa.png",
		},
		{
			id: "video-3",
			title: "Proceso de Personalización",
			description: "Desde el diseño hasta la entrega final, conoce nuestro proceso",
			thumbnail: "/images/categories/categoria-agendas-escolares.jpg",
		},
		{
			id: "video-4",
			title: "Testimonios de Clientes",
			description: "Lo que dicen nuestros clientes sobre nuestros productos",
			thumbnail: "/images/cases/proyecto-colegio-san-juan.jpg",
		},
		{
			id: "video-5",
			title: "Calidad y Certificaciones",
			description: "Materiales premium certificados FSC y Oeko-Tex",
			thumbnail: "/images/categories/categoria-textil-personalizado.jpg",
		},
	];

	function handleVideoClick(video: VideoItem) {
		// Cuando tengas los videos, aquí se abriría el reproductor
		console.log("Reproducir video:", video.id);
		// Ejemplo: window.open(video.videoUrl, '_blank');
	}
</script>

<section
	class="py-12 sm:py-16 md:py-20 lg:py-24 bg-surface-page"
	aria-labelledby="videos-promocion"
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<ScrollReveal animation="fly" direction="up" delay={0}>
			{#snippet children()}
				<Heading
					id="videos-promocion"
					level="h2"
					class="text-center mb-4 text-2xl sm:text-3xl md:text-4xl"
				>
					Conoce nuestros productos en acción
				</Heading>
				<Text class="text-center text-text-muted mb-8 sm:mb-12 text-base sm:text-lg max-w-2xl mx-auto">
					Descubre cómo creamos productos personalizados de calidad para centros educativos y AMPAs
				</Text>
			{/snippet}
		</ScrollReveal>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
			{#each videos as video, index}
				<ScrollReveal animation="fly" direction="up" delay={index * 100}>
					{#snippet children()}
						<Card
							padding="none"
							elevation={1}
							class="overflow-hidden rounded-xl hover:elevation-2 transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
							onclick={() => handleVideoClick(video)}
						>
							<div class="relative aspect-video overflow-hidden bg-surface-tertiary">
								{#if video.thumbnail}
									<img
										src={video.thumbnail}
										alt={video.title}
										class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
										loading="lazy"
										decoding="async"
									/>
								{:else}
									<div class="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
										<Text class="text-text-muted text-sm">Placeholder Video</Text>
									</div>
								{/if}
								
								<!-- Overlay con botón de play -->
								<div class="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
									<div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
										<Play class="w-8 h-8 sm:w-10 sm:h-10 text-primary ml-1" fill="currentColor" />
									</div>
								</div>
								
								<!-- Badge "Próximamente" si no hay video -->
								{#if !video.videoUrl}
									<div class="absolute top-3 right-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
										Próximamente
									</div>
								{/if}
							</div>
							
							<div class="p-4 sm:p-6">
								<Heading level="h3" class="mb-2 text-lg sm:text-xl font-bold group-hover:text-primary transition-colors">
									{video.title}
								</Heading>
								<Text class="text-text-muted text-sm leading-relaxed">
									{video.description}
								</Text>
							</div>
						</Card>
					{/snippet}
				</ScrollReveal>
			{/each}
		</div>
	</div>
</section>

