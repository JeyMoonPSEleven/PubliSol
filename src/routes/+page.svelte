<script lang="ts">
	import { Card, Button, Heading, Text } from "atomic-design-svelte";
	import { Link } from "atomic-design-svelte";
	import { onMount } from "svelte";
	import NumberTicker from "$lib/components/magic-ui/NumberTicker.svelte";
	import AnimatedGridPattern from "$lib/components/magic-ui/AnimatedGridPattern.svelte";
	import Marquee from "$lib/components/magic-ui/Marquee.svelte";
	import ScrollProgress from "$lib/components/magic-ui/ScrollProgress.svelte";
	import QuickView from "$lib/components/magic-ui/QuickView.svelte";
	import ShimmerButton from "$lib/components/magic-ui/ShimmerButton.svelte";
	import ScrollBasedVelocity from "$lib/components/magic-ui/ScrollBasedVelocity.svelte";
	import LineShadowText from "$lib/components/magic-ui/LineShadowText.svelte";
	import BentoGrid from "$lib/components/magic-ui/BentoGrid.svelte";
	import BentoCard from "$lib/components/magic-ui/BentoCard.svelte";
	import Seo from "$lib/components/Seo.svelte";
	import HeroSection from "$lib/components/organisms/HeroSection.svelte";
	import ScrollReveal from "$lib/components/atoms/ScrollReveal.svelte";
	import {
		Palette,
		CheckCircle2,
		Package,
		Hash,
		Truck,
		Sprout,
		MessageCircle,
		Pencil,
		Factory,
		Box,
	} from "lucide-svelte";

	let statsVisible = $state(false);
	let statsObserver: IntersectionObserver | null = null;

	// Sección 2: Propuesta de Valor (Enfoque B2B - Socio Estratégico Escolar)
	const services = [
		{
			icon: Palette,
			title: "Consultoría Especializada",
			description:
				"No vendemos productos; ofrecemos soluciones. Asesoramos a directores en organización y a AMPAs en financiación.",
			link: "/nosotros#personalizacion",
		},
		{
			icon: CheckCircle2,
			title: "Calidad Certificada",
			description:
				"Materiales FSC/PEFC, textiles Oeko-Tex, cumplimiento UNE-EN 14682. Calidad pedagógica certificada para tu centro.",
			link: "/nosotros#calidad",
		},
		{
			icon: Package,
			title: "Gestión Integral",
			description:
				"Desde la primera consulta hasta la entrega final. Diseño, producción, empaquetado y logística. El cliente solo disfruta del resultado.",
			link: "/nosotros#servicio",
		},
		{
			icon: Hash,
			title: "Precios Dinámicos",
			description:
				"Precios adaptados según volumen. A partir de 300 unidades activamos 'Tarifa Gold' con descuentos significativos.",
			link: "/contacto",
		},
		{
			icon: Truck,
			title: "Garantía de Entrega",
			description:
				"El 'pánico de septiembre' no existe con nosotros. Compromiso firme con plazos: 10-15 días producción personalizada.",
			link: "/contacto#envios",
		},
		{
			icon: Sprout,
			title: "Compromiso Sostenible",
			description:
				"Educar en valores empieza por el material que usamos. Papel FSC, textiles Oeko-Tex, procesos responsables.",
			link: "/productos",
		},
	];

	// Sección 3: Categorías Principales (según formulario)
	const categories = [
		{
			name: "Agendas Escolares",
			image: "https://images.unsplash.com/photo-1503676260728-1c00e094b736?w=800&h=600&fit=crop&q=80",
			productCount: "[CONFIRMAR]",
			description: "Agendas personalizadas por etapa educativa (Infantil, Primaria, Secundaria/Bachillerato) y formato (Semana Vista, Día Página). Papel premium certificado FSC.",
			href: "/productos/agendas-escolares",
			size: "large",
		},
		{
			name: "Textil y Uniformidad",
			image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80",
			productCount: "[CONFIRMAR]",
			description: "Uniformes escolares, equipaciones deportivas, ropa laboral. Certificación Oeko-Tex, cumplimiento normativa seguridad UNE-EN 14682.",
			href: "/productos/textil",
			size: "medium",
		},
		{
			name: "Merchandising y Viajes Fin de Curso",
			image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=600&fit=crop&q=80",
			productCount: "[CONFIRMAR]",
			description: "Sudaderas, camisetas, polares para financiar viajes. Soluciones llave en mano con calculadora de rentabilidad para AMPAs.",
			href: "/productos/merchandising",
			size: "medium",
		},
		{
			name: "Packs Erasmus",
			image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=600&fit=crop&q=80",
			productCount: "[CONFIRMAR]",
			description: "Mochila + Powerbank + Botella + Agenda de Viaje. Solución integral para coordinadores de programas internacionales.",
			href: "/productos",
			size: "medium",
		},
		{
			name: "Regalos Institucionales",
			image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop&q=80",
			productCount: "[CONFIRMAR]",
			description: "Bolígrafos premium, tote bags ecológicos, libretas ejecutivas, material de oficina personalizado.",
			href: "/productos/papeleria",
			size: "large",
		},
	];

	// Sección 4: Casos de Éxito
	type CaseStudy = {
		image: string;
		logo: string;
		client: string;
		testimonial: string;
		author: string;
		badge: string;
		details: string;
		category: string;
		minQuantity: string;
		href: string;
		description: string;
		price: string;
	};

	const projects: CaseStudy[] = [
		{
			image: "https://images.unsplash.com/photo-1503676260728-1c00e094b736?w=600&h=400&fit=crop&q=80",
			logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop&q=80",
			client: "Colegio San José",
			testimonial:
				"Excelente calidad y servicio. Las agendas quedaron perfectas y los alumnos están encantados. Repetiremos sin duda.",
			author: "María González, Directora",
			badge: "Agendas Escolares",
			details: "800 agendas escolares con diseño exclusivo",
			category: "Agendas Escolares",
			minQuantity: "Desde 200 unidades",
			href: "/casos/cole-san-jose",
			description:
				"Diseñamos agendas con cubiertas personalizadas, papel premium y un interior que incorpora códigos QR para contenidos exclusivos.",
			price: "Desde 5,90 € / unidad",
		},
		{
			image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&h=400&fit=crop&q=80",
			logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop&q=80",
			client: "TechCorp Solutions",
			testimonial:
				"Kits de bienvenida perfectos para nuestros nuevos empleados. Profesionalismo y calidad excepcional.",
			author: "Juan Pérez, RRHH",
			badge: "Merchandising",
			details: "Kits de onboarding para 150 empleados",
			category: "Merchandising Empresarial",
			minQuantity: "Kits desde 50 unidades",
			href: "/casos/techcorp-solutions",
			description:
				"Pack premium con libreta, tumbler y pin en estuche personalizado que refuerza la cultura corporativa desde el primer día.",
			price: "Desde 34 € / kit",
		},
		{
			image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=80",
			logo: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=100&h=100&fit=crop&q=80",
			client: "Asociación Deportiva",
			testimonial:
				"Uniformes personalizados de excelente calidad. El equipo está muy contento con el resultado.",
			author: "Carlos Ruiz, Presidente",
			badge: "Textil",
			details: "Uniformes personalizados para equipo juvenil",
			category: "Textil Deportivo",
			minQuantity: "75 uniformes + complementos",
			href: "/casos/asociacion-deportiva",
			description:
				"Uniformes técnicos, botes y mochilas con estampado resistente y acabados reflectantes para facilitar entrenos nocturnos.",
			price: "Desde 18 € / uniforme",
		},
	];

	let selectedProject = $state<CaseStudy | null>(null);
	let isQuickViewOpen = $state(false);

	function openCaseStudy(project: CaseStudy) {
		selectedProject = project;
		isQuickViewOpen = true;
	}

	function closeCaseStudy() {
		isQuickViewOpen = false;
		selectedProject = null;
	}

	function handleFooterFormSubmit(event: SubmitEvent) {
		event.preventDefault();
	}

	// Sección 5: Proceso de Trabajo
	const processSteps = [
		{
			number: "1",
			icon: MessageCircle,
			title: "Contacto",
			description: "Nos cuentas tu proyecto y necesidades específicas.",
			time: "24-48h",
		},
		{
			number: "2",
			icon: Pencil,
			title: "Diseño",
			description:
				"Creamos propuesta visual personalizada adaptada a tu marca.",
			time: "3-5 días",
		},
		{
			number: "3",
			icon: Factory,
			title: "Producción",
			description:
				"Fabricamos con los mejores materiales y procesos certificados.",
			time: "10-15 días",
		},
		{
			number: "4",
			icon: Box,
			title: "Entrega",
			description: "Recibe tu pedido en tiempo y forma, listo para usar.",
			time: "24-48h",
		},
	];

	// Sección 6: Stats
	const stats = [
		{
			value: 25,
			prefix: "+",
			label: "AÑOS",
			description: "de experiencia",
		},
		{
			value: 500,
			prefix: "+",
			label: "CLIENTES",
			description: "satisfechos",
		},
		{
			value: 10000,
			prefix: "+",
			label: "PRODUCTOS",
			description: "entregados al año",
		},
		{
			value: 100,
			prefix: "",
			suffix: "%",
			label: "PERSONALIZACIÓN",
			description: "en cada proyecto",
		},
	];

	// Sección 7: Clientes (para Marquee)
	const clients = [
		{ name: "Colegio San José" },
		{ name: "TechCorp Solutions" },
		{ name: "Instituto San Juan" },
		{ name: "Asociación Deportiva" },
		{ name: "Universidad Complutense" },
		{ name: "Empresa ABC" },
		{ name: "Colegio Santa María" },
		{ name: "Corporación XYZ" },
	];

	// Intersection Observer para Stats
	onMount(() => {
		const statsSection = document.querySelector("[data-stats-section]");
		if (statsSection) {
			statsObserver = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							statsVisible = true;
						}
					});
				},
				{ threshold: 0.3 },
			);
			statsObserver.observe(statsSection);
		}

		return () => {
			statsObserver?.disconnect();
		};
	});
</script>

<Seo
	title="Publisol - Agendas y Merchandising Personalizado desde 1995"
	description="Desde 1995 creando productos únicos para colegios, empresas y asociaciones. Calidad, creatividad y servicio integral. Agendas escolares, merchandising empresarial y productos personalizados."
	image="https://images.unsplash.com/photo-1503676260728-1c00e094b736?w=1200&h=630&fit=crop&q=80"
	url="/"
/>

<ScrollProgress
	color="linear-gradient(90deg, var(--color-primary), var(--color-secondary))"
	height="3px"
	className="shadow-[0_8px_24px_rgba(16,185,129,0.35)] pointer-events-none"
/>

<!-- SECCIÓN 1: HERO PRINCIPAL -->
<HeroSection />

<!-- SECCIÓN 2: Scroll Based Velocity -->
<section class="py-8 sm:py-12 bg-surface-page overflow-hidden">
	<ScrollBasedVelocity baseVelocity={5} direction={1}>
		{#snippet children()}
			<span class="text-2xl sm:text-3xl md:text-4xl font-bold text-primary/80 whitespace-nowrap px-8">
				PERSONALIZACIÓN • CALIDAD • RAPIDEZ • EXPERIENCIA • SOSTENIBILIDAD •
			</span>
		{/snippet}
	</ScrollBasedVelocity>
</section>

<!-- SECCIÓN 3: PROPUESTA DE VALOR (Bento Grid) -->
<section class="py-12 sm:py-16 md:py-24 bg-surface-page">
	<div class="container mx-auto px-4 sm:px-6">
		<ScrollReveal animation="fly" direction="up" delay={0}>
			{#snippet children()}
				<Heading
					level="h2"
					class="text-center mb-8 sm:mb-12 text-2xl sm:text-3xl md:text-4xl"
					>¿Por qué elegirnos?</Heading
				>
			{/snippet}
		</ScrollReveal>
		<BentoGrid class="auto-rows-[18rem] sm:auto-rows-[20rem] lg:auto-rows-[22rem]">
			{#snippet children()}
				{#each services as service, index}
					<BentoCard
						name={service.title}
						description={service.description}
						href={service.link}
						cta="Saber más"
						class="col-span-1 sm:col-span-3 lg:col-span-1"
					>
						{#snippet icon()}
							{@const IconComponent = service.icon}
							<IconComponent class="w-full h-full" />
						{/snippet}
						{#snippet background()}
							<div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
						{/snippet}
					</BentoCard>
				{/each}
			{/snippet}
		</BentoGrid>
	</div>
</section>

<!-- SECCIÓN 3: CATEGORÍAS PRINCIPALES -->
<section
	class="py-12 sm:py-16 md:py-24 bg-surface-tertiary relative overflow-hidden"
>
	<!-- Animated Grid Pattern como fondo sutil -->
	<AnimatedGridPattern
		class="opacity-[0.05] absolute inset-0"
		numSquares={30}
	/>

	<div class="container mx-auto px-4 sm:px-6 relative z-10">
		<ScrollReveal animation="fly" direction="up" delay={0}>
			{#snippet children()}
				<Heading
					level="h2"
					class="text-center mb-2 text-2xl sm:text-3xl md:text-4xl"
					>Nuestros Productos</Heading
				>
				<Text class="text-center text-text-muted mb-8 sm:mb-12 px-4"
					>Explora nuestro catálogo completo</Text
				>
			{/snippet}
		</ScrollReveal>

		<!-- Bento Grid Layout con Container Queries -->
		<!-- Desktop: Grid normal -->
		<div
			class="hidden sm:grid @container grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-fr"
		>
			{#each categories as category, index}
				{@const isLarge = category.size === "large"}
				<ScrollReveal animation="scale" delay={index * 100}>
					{#snippet children()}
						<Link
							href={category.href}
							class="group relative overflow-hidden rounded-lg sm:rounded-xl {isLarge
								? 'sm:col-span-2 sm:row-span-2'
								: ''} h-48 sm:h-64 md:h-auto min-h-[200px] hover-shadow-primary transition-all duration-500 hover:-translate-y-2"
							aria-label={`Ver ${category.name}`}
						>
							<div
								class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"
							></div>
							<div
								class="absolute inset-0 bg-gradient-to-br from-primary/25 via-secondary/20 to-transparent group-hover:from-primary/40 group-hover:via-secondary/30 transition-all duration-500 z-10"
							></div>
							<img
								src={category.image}
								alt={category.name}
								class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
								loading="lazy"
								decoding="async"
								width="800"
								height="600"
							/>
							<div
								class="absolute bottom-0 left-0 right-0 p-6 z-20 transform group-hover:-translate-y-2 transition-transform duration-300"
							>
								<Heading level="h3" class="text-white mb-2"
									>{category.name}</Heading
								>
								<Text class="text-white/80 text-sm"
									>Ver {category.productCount} productos</Text
								>
								<span
									class="mt-4 inline-flex items-center justify-center px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide text-white uppercase transition-all duration-300 opacity-0 group-hover:opacity-100 bg-primary/90 transform translate-y-2 group-hover:translate-y-0"
									aria-hidden="true"
								>
									Explorar
								</span>
							</div>
						</Link>
					{/snippet}
				</ScrollReveal>
			{/each}
		</div>

		<!-- Mobile: Snap scrolling horizontal -->
		<div
			class="sm:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide"
			style="scroll-padding-left: 1rem;"
		>
			{#each categories as category, index}
				<ScrollReveal animation="scale" delay={index * 100}>
					{#snippet children()}
						<Link
							href={category.href}
							class="group relative overflow-hidden rounded-xl snap-center flex-shrink-0 w-[85vw] h-[60vh] min-h-[400px] hover-shadow-primary transition-all duration-500"
							aria-label={`Ver ${category.name}`}
						>
							<div
								class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"
							></div>
							<div
								class="absolute inset-0 bg-gradient-to-br from-primary/25 via-secondary/20 to-transparent group-hover:from-primary/40 group-hover:via-secondary/30 transition-all duration-500 z-10"
							></div>
							<img
								src={category.image}
								alt={category.name}
								class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
								loading={index < 2 ? "eager" : "lazy"}
								decoding="async"
								width="800"
								height="600"
							/>
							<div
								class="absolute bottom-0 left-0 right-0 p-6 z-20 transform group-hover:-translate-y-2 transition-transform duration-300"
							>
								<Heading level="h3" class="text-white mb-2"
									>{category.name}</Heading
								>
								<Text class="text-white/80 text-sm"
									>Ver {category.productCount} productos</Text
								>
								<span
									class="mt-4 inline-flex items-center justify-center px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide text-white uppercase transition-all duration-300 opacity-0 group-hover:opacity-100 bg-primary/90 transform translate-y-2 group-hover:translate-y-0"
									aria-hidden="true"
								>
									Explorar
								</span>
							</div>
						</Link>
					{/snippet}
				</ScrollReveal>
			{/each}
		</div>

		<ScrollReveal animation="fly" direction="up" delay={400}>
			{#snippet children()}
				<div class="text-center mt-12">
					<Button intent="primary" size="lg" href="/productos">
						Ver Catálogo Completo
					</Button>
				</div>
			{/snippet}
		</ScrollReveal>
	</div>
</section>

<!-- SECCIÓN 4: CASOS DE ÉXITO -->
<section
	class="py-16 md:py-24 bg-surface-page relative overflow-hidden border-t border-border-default"
	aria-label="Casos de éxito"
>
	<AnimatedGridPattern
		class="absolute inset-0 opacity-[0.06]"
		numSquares={24}
	/>

	<div class="container mx-auto px-4 relative z-10">
		<ScrollReveal animation="fly" direction="up" delay={0}>
			{#snippet children()}
				<div class="flex flex-col items-center text-center mb-12">
					<Heading
						level="h2"
						class="text-center mb-3 text-2xl sm:text-3xl"
					>
						Proyectos que nos enorgullecen
					</Heading>
					<Text class="max-w-2xl text-text-muted">
						Estudios de caso reales donde fusionamos el craft y la
						imagen de marca con animaciones sutiles, gradients y
						acabados premium.
					</Text>
				</div>
			{/snippet}
		</ScrollReveal>

		<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
			{#each projects as project, index}
				<ScrollReveal
					animation="fly"
					direction="up"
					delay={index * 150}
				>
					{#snippet children()}
						<Card
							padding="lg"
							elevation={1}
							class="overflow-hidden rounded-[1.25rem] border border-white/20 bg-gradient-to-br from-white/70 via-white/30 to-white/40 text-text-default drop-shadow-lg transition-all duration-500 hover:-translate-y-2 hover-shadow-primary group"
						>
							{#snippet header()}
								<div
									class="relative h-56 rounded-2xl overflow-hidden mb-5"
								>
									<img
										src={project.image}
										alt={project.client}
										class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
										loading="lazy"
										decoding="async"
										width="600"
										height="400"
									/>
									<div
										class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
									></div>
									<div
										class="absolute bottom-4 left-4 flex items-center gap-3"
									>
										<img
											src={project.logo}
											alt={`Logo de ${project.client}`}
											class="h-12 w-12 rounded-full border border-white/40 object-cover bg-white/30 transition-transform duration-300 group-hover:scale-110"
											loading="lazy"
											decoding="async"
											width="100"
											height="100"
										/>
										<div
											class="flex flex-col leading-tight text-sm"
										>
											<span
												class="font-semibold text-white"
												>{project.client}</span
											>
											<span
												class="text-xs uppercase tracking-[0.3em] text-white/80"
											>
												{project.badge}
											</span>
										</div>
									</div>
								</div>
							{/snippet}
							{#snippet children()}
								<div class="flex flex-wrap gap-3 mb-4">
									<span
										class="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.3em] bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20"
									>
										{project.category}
									</span>
									<span
										class="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.3em] bg-secondary/10 text-secondary transition-all duration-300 group-hover:bg-secondary/20"
									>
										{project.minQuantity}
									</span>
								</div>
								<Text
									class="text-sm text-text-muted italic mb-3"
									>"{project.testimonial}"</Text
								>
								<Text class="text-xs text-text-muted mb-3"
									>— {project.author}</Text
								>
								<Text class="text-sm text-text-muted mb-4"
									>{project.details}</Text
								>
								<div
									class="flex items-center justify-between gap-4 text-xs text-text-muted mb-4"
								>
									<Text class="uppercase tracking-[0.25em]"
										>{project.price}</Text
									>
									<Text class="text-text-muted/60"
										>Detalle exclusivo</Text
									>
								</div>
								<div class="flex flex-wrap gap-3">
									<ShimmerButton
										type="button"
										class="flex-1 sm:flex-none min-w-[170px] text-sm font-semibold"
										shimmerColor="#FDD9AA"
										background="rgba(15, 23, 42, 0.9)"
										action={() => openCaseStudy(project)}
									>
										<span>Ver caso destacado</span>
									</ShimmerButton>
									<Button
										intent="secondary"
										size="lg"
										class="min-w-[170px] text-sm font-semibold"
										href={project.href}
									>
										Ver detalles
									</Button>
								</div>
							{/snippet}
						</Card>
					{/snippet}
				</ScrollReveal>
			{/each}
		</div>
	</div>
</section>

<!-- SECCIÓN 5: PROCESO DE TRABAJO -->
<section class="py-12 sm:py-16 md:py-24 bg-surface-tertiary">
	<div class="container mx-auto px-4 sm:px-6">
		<ScrollReveal animation="fly" direction="up" delay={0}>
			{#snippet children()}
				<Heading
					level="h2"
					class="text-center mb-2 text-2xl sm:text-3xl md:text-4xl"
					>Cómo trabajamos contigo</Heading
				>
				<Text
					class="text-center text-text-muted mb-8 sm:mb-12 text-sm sm:text-base"
					>Simple, transparente y efectivo</Text
				>
			{/snippet}
		</ScrollReveal>

		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12"
		>
			{#each processSteps as step, index}
				<ScrollReveal
					animation="fly"
					direction="up"
					delay={index * 100}
				>
					{#snippet children()}
						<Card
							padding="md sm:lg"
							elevation={1}
							class="text-center relative group hover:elevation-2 transition-all duration-300 hover:-translate-y-2"
						>
						{#snippet header()}
							{@const StepIcon = step.icon}
							<div
								class="text-5xl sm:text-6xl font-bold text-primary/20 mb-3 sm:mb-4 transition-all duration-300 group-hover:text-primary/30"
							>
								{step.number}
							</div>
							<div
								class="mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110"
							>
								<StepIcon class="w-12 h-12 sm:w-16 sm:h-16 text-primary" />
							</div>
								<Heading
									level="h3"
									class="mb-2 text-lg sm:text-xl group-hover:text-primary transition-colors"
									>{step.title}</Heading
								>
							{/snippet}
							{#snippet children()}
								<Text
									class="mb-3 sm:mb-4 text-text-muted text-sm sm:text-base"
									>{step.description}</Text
								>
								<Text
									class="text-xs sm:text-sm text-primary font-semibold"
									>Tiempo: {step.time}</Text
								>
							{/snippet}
						</Card>
					{/snippet}
				</ScrollReveal>
			{/each}
		</div>
	</div>
</section>

<!-- SECCIÓN 6: NÚMEROS / STATS -->
<section
	class="py-12 sm:py-16 md:py-24 bg-primary text-white"
	data-stats-section
>
	<div class="container mx-auto px-4 sm:px-6">
		<div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
			{#each stats as stat, index}
				<ScrollReveal animation="scale" delay={index * 100}>
					{#snippet children()}
						<div class="text-center px-2">
							<div
								class="text-3xl sm:text-4xl md:text-5xl font-bold mb-2"
							>
								{#if statsVisible}
									{stat.prefix}<NumberTicker
										value={stat.value}
										duration={2}
									/>{stat.suffix || ""}
								{:else}
									{stat.prefix}0{stat.suffix || ""}
								{/if}
							</div>
							<div class="text-lg sm:text-xl font-semibold mb-1">
								{stat.label}
							</div>
							<div class="text-white/80 text-xs sm:text-sm">
								{stat.description}
							</div>
						</div>
					{/snippet}
				</ScrollReveal>
			{/each}
		</div>
	</div>
</section>

<!-- SECCIÓN 7: MARQUEE DE CLIENTES -->
<section class="py-12 sm:py-16 bg-surface-page border-y border-border-default">
	<div class="container mx-auto px-4 sm:px-6">
		<ScrollReveal animation="fly" direction="up" delay={0}>
			{#snippet children()}
				<Heading
					level="h2"
					class="text-center mb-8 sm:mb-12 text-xl sm:text-2xl md:text-3xl"
				>
					Confían en nosotros
				</Heading>
			{/snippet}
		</ScrollReveal>
		<Marquee
			items={clients}
			speed={30}
			direction="left"
			pauseOnHover={true}
			className="py-4"
		/>
	</div>
</section>

<!-- SECCIÓN 8: CTA FINAL -->
<section
	class="py-12 sm:py-16 md:py-24 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden"
>
	<!-- Efecto de fondo animado -->
	<div class="absolute inset-0 opacity-10">
		<AnimatedGridPattern numSquares={20} />
	</div>

	<div class="container mx-auto px-4 sm:px-6 text-center relative z-10">
		<ScrollReveal animation="fly" direction="up" delay={0}>
			{#snippet children()}
				<Heading
					level="h2"
					class="mb-4 text-white text-2xl sm:text-3xl md:text-4xl"
				>
					¿Listo para tu próximo proyecto?
				</Heading>
				<Text
					class="mb-6 sm:mb-8 text-white/90 max-w-2xl mx-auto px-4 text-base sm:text-lg"
				>
					Solicita presupuesto sin compromiso y descubre cómo podemos
					ayudarte
				</Text>
			{/snippet}
		</ScrollReveal>

		<ScrollReveal animation="fly" direction="up" delay={200}>
			{#snippet children()}
				<form
					class="max-w-2xl mx-auto flex flex-col gap-3 sm:gap-4 mb-6 px-4"
					onsubmit={handleFooterFormSubmit}
				>
					<div class="relative">
						<label for="cta-name" class="sr-only">Nombre</label>
						<input
							id="cta-name"
							name="cta-name"
							type="text"
							placeholder="Nombre"
							inputmode="text"
							autocomplete="name"
							class="w-full px-4 py-4 rounded-lg text-text-default min-h-[56px] text-base transition-all duration-300 focus:ring-2 focus:ring-white/50 focus:outline-none touch-target"
							required
							aria-label="Nombre completo"
						/>
					</div>
					<div class="relative">
						<label for="cta-email" class="sr-only">Email</label>
						<input
							id="cta-email"
							name="cta-email"
							type="email"
							placeholder="Email"
							inputmode="email"
							autocomplete="email"
							class="w-full px-4 py-4 rounded-lg text-text-default min-h-[56px] text-base transition-all duration-300 focus:ring-2 focus:ring-white/50 focus:outline-none touch-target"
							required
							aria-label="Dirección de correo electrónico"
						/>
					</div>
					<div class="relative">
						<label for="cta-phone" class="sr-only">Teléfono</label>
						<input
							id="cta-phone"
							name="cta-phone"
							type="tel"
							placeholder="Teléfono"
							inputmode="tel"
							autocomplete="tel"
							class="w-full px-4 py-4 rounded-lg text-text-default min-h-[56px] text-base transition-all duration-300 focus:ring-2 focus:ring-white/50 focus:outline-none touch-target"
							required
							aria-label="Número de teléfono"
						/>
					</div>
					<Button
						type="submit"
						intent="primary"
						size="lg"
						class="w-full text-base font-semibold mt-2 transition-all duration-300 hover:scale-105 min-h-[56px] touch-target"
						aria-label="Enviar solicitud de presupuesto"
					>
						Enviar solicitud
					</Button>
				</form>
			{/snippet}
		</ScrollReveal>

		<ScrollReveal animation="fly" direction="up" delay={400}>
			{#snippet children()}
				<div
					class="flex flex-col sm:flex-row justify-center items-center gap-3 mb-4"
				>
					<ShimmerButton
						type="button"
						class="w-full sm:w-auto min-h-[48px] px-8 text-sm font-semibold"
						shimmerColor="#ffffff"
						background="linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.05))"
						action={() => (window.location.href = "/catalogos")}
					>
						<span>Descargar catálogo</span>
					</ShimmerButton>
					<Button
						intent="secondary"
						size="lg"
						class="w-full sm:w-auto min-h-[48px] px-8 text-sm font-semibold transition-all duration-300 hover:scale-105"
					>
						Quiero que me contacten
					</Button>
				</div>

				<Text class="text-white/80 text-sm sm:text-base px-4">
					O llámanos: <a
						href="tel:+34XXXXXXXXX"
						class="underline hover:no-underline transition-all"
						>+34 XXX XXX XXX</a
					>
				</Text>
			{/snippet}
		</ScrollReveal>
	</div>
</section>

<QuickView
	bind:open={isQuickViewOpen}
	product={selectedProject
		? {
				name: selectedProject.client,
				category: selectedProject.category,
				image: selectedProject.image,
				badge: selectedProject.badge,
				minQuantity: selectedProject.minQuantity,
				href: selectedProject.href,
				description: selectedProject.description,
				price: selectedProject.price,
			}
		: undefined}
	onClose={closeCaseStudy}
/>
