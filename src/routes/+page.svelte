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
	import { siteConfig } from "$lib/siteConfig";
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
		Shirt,
		BookOpen,
		Pen,
		Gift,
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
			image: "/images/categories/categoria-agendas-escolares.jpg",
			productCount: "[CONFIRMAR]",
			description: "Agendas personalizadas por etapa educativa (Infantil, Primaria, Secundaria/Bachillerato) y formato (Semana Vista, Día Página). Papel premium certificado FSC.",
			href: "/productos/agendas-escolares",
			size: "large",
		},
		{
			name: "Textil y Uniformidad",
			image: "/images/categories/categoria-textil-personalizado.jpg",
			productCount: "[CONFIRMAR]",
			description: "Uniformes escolares, equipaciones deportivas, ropa laboral. Certificación Oeko-Tex, cumplimiento normativa seguridad UNE-EN 14682.",
			href: "/productos/textil",
			size: "medium",
		},
		{
			name: "Merchandising y Viajes Fin de Curso",
			image: "/images/categories/categoria-merchandising-empresarial.jpg",
			productCount: "[CONFIRMAR]",
			description: "Sudaderas, camisetas, polares para financiar viajes. Soluciones llave en mano con calculadora de rentabilidad para AMPAs.",
			href: "/productos/merchandising",
			size: "medium",
		},
		{
			name: "Packs Erasmus",
			image: "/images/products/kit-corporativo.png",
			productCount: "[CONFIRMAR]",
			description: "Mochila + Powerbank + Botella + Agenda de Viaje. Solución integral para coordinadores de programas internacionales.",
			href: "/productos",
			size: "medium",
		},
		{
			name: "Regalos Institucionales",
			image: "/images/categories/categoria-papeleria-libretas.jpg",
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
			image: "/images/cases/proyecto-colegio-san-juan.jpg",
			logo: "/images/cases/proyecto-colegio-san-juan-logo.png",
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
			image: "/images/cases/proyecto-empresa-tech-solutions.jpg",
			logo: "/images/cases/proyecto-empresa-tech-solutions-logo.png",
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
			image: "/images/cases/proyecto-universidad-madrid.jpg",
			logo: "/images/cases/proyecto-universidad-madrid-logo.png",
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

	let ctaFormType = $state<'appointment' | 'callback'>('appointment');
	let ctaFormData = $state({
		nombre: '',
		telefono: '',
		email: '',
		fechaHora: '',
	});

	function handleFooterFormSubmit(event: SubmitEvent) {
		event.preventDefault();
		console.log('Formulario CTA enviado:', { type: ctaFormType, data: ctaFormData });
		// Aquí iría la lógica de envío
		// Reset form
		ctaFormData = {
			nombre: '',
			telefono: '',
			email: '',
			fechaHora: '',
		};
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
	image="/images/hero/main-hero-bg.jpg"
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

<!-- SECCIÓN 2: Banner de Separación con Iconos -->
<section class="py-10 sm:py-12 md:py-16 bg-surface-page overflow-hidden" aria-label="Categorías de productos">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="flex items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 flex-wrap">
			{#each [
				{ icon: "shirt", label: "Textil", href: "/productos/textil" },
				{ icon: "book", label: "Agendas", href: "/productos/agendas-escolares" },
				{ icon: "pen", label: "Papelería", href: "/productos/papeleria" },
				{ icon: "gift", label: "Merchandising", href: "/productos/merchandising" },
				{ icon: "package", label: "Catálogos", href: "/catalogos" }
			] as category}
				<a
					href={category.href}
					class="group flex flex-col items-center gap-2 sm:gap-3 transition-all duration-300 hover:scale-110"
					aria-label={category.label}
				>
					<div class="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
						{#if category.icon === "shirt"}
							<Shirt class="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
						{:else if category.icon === "book"}
							<BookOpen class="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
						{:else if category.icon === "pen"}
							<Pen class="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
						{:else if category.icon === "gift"}
							<Gift class="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
						{:else if category.icon === "package"}
							<Package class="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
						{/if}
					</div>
					<Text class="text-xs sm:text-sm font-medium text-text-muted group-hover:text-primary transition-colors">
						{category.label}
					</Text>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- SECCIÓN 3: PROPUESTA DE VALOR (Bento Grid Moderno) -->
<section class="py-12 sm:py-16 md:py-20 lg:py-24 bg-surface-page" aria-labelledby="propuesta-valor">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<ScrollReveal animation="fly" direction="up" delay={0}>
			{#snippet children()}
				<Heading
					id="propuesta-valor"
					level="h2"
					class="text-center mb-8 sm:mb-12 text-2xl sm:text-3xl md:text-4xl"
					>¿Por qué elegirnos?</Heading
				>
			{/snippet}
		</ScrollReveal>
		
		<!-- Layout Desktop: 2 Columnas (Imagen Izquierda + Bento Grid Derecha) -->
		<div class="hidden lg:grid lg:grid-cols-2 gap-6 lg:gap-8">
			<!-- Columna Izquierda: Header Visual Potente -->
			<ScrollReveal animation="fly" direction="right" delay={100}>
				{#snippet children()}
					<div class="relative h-full min-h-[600px] rounded-2xl overflow-hidden group">
						<div class="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20"></div>
						<img
							src="/images/categories/categoria-agendas-escolares.jpg"
							alt="Calidad Publisol"
							class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
							loading="lazy"
							decoding="async"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
						<div class="absolute bottom-0 left-0 right-0 p-8 text-white">
							<Heading level="h3" class="text-3xl font-bold mb-4">
								Tu Socio Estratégico Escolar
							</Heading>
							<Text class="text-lg text-white/90 mb-6">
								Desde 1975 creando productos únicos para colegios, empresas y asociaciones. Calidad, compromiso y rapidez en la entrega.
							</Text>
							<Button intent="primary" size="lg" href="/nosotros" class="bg-white text-primary hover:bg-white/90">
								Conoce nuestra historia
							</Button>
						</div>
					</div>
				{/snippet}
			</ScrollReveal>
			
			<!-- Columna Derecha: Bento Grid Asimétrico -->
			<div class="grid grid-cols-2 gap-4 lg:gap-6 auto-rows-[minmax(180px,auto)]">
				{#each services as service, index}
					{@const isLarge = index === 0 || index === 3}
					<ScrollReveal animation="fly" direction="up" delay={index * 100}>
						{#snippet children()}
							{@const IconComponent = service.icon}
							<Link
								href={service.link}
								class="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] {isLarge
									? 'col-span-2 row-span-2'
									: 'col-span-1'} border-2 border-transparent hover:border-primary"
							>
								<div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								<div class="relative z-10">
									<div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
										<IconComponent class="w-6 h-6 text-primary" />
									</div>
									<Heading level="h3" class="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
										{service.title}
									</Heading>
									<Text class="text-text-muted text-sm leading-relaxed">
										{service.description}
									</Text>
									<div class="mt-4 flex items-center gap-2 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
										<span>Saber más</span>
										<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
										</svg>
									</div>
								</div>
							</Link>
						{/snippet}
					</ScrollReveal>
				{/each}
			</div>
		</div>
		
		<!-- Layout Mobile/Tablet: Grid Simple -->
		<div class="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
			{#each services as service, index}
				<ScrollReveal animation="fly" direction="up" delay={index * 100}>
					{#snippet children()}
						{@const IconComponent = service.icon}
						<Link
							href={service.link}
							class="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-primary"
						>
							<div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							<div class="relative z-10">
								<div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
									<IconComponent class="w-6 h-6 text-primary" />
								</div>
								<Heading level="h3" class="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
									{service.title}
								</Heading>
								<Text class="text-text-muted text-sm leading-relaxed">
									{service.description}
								</Text>
								<div class="mt-4 flex items-center gap-2 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
									<span>Saber más</span>
									<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
									</svg>
								</div>
							</div>
						</Link>
					{/snippet}
				</ScrollReveal>
			{/each}
		</div>
	</div>
</section>

<!-- SECCIÓN 3: CATEGORÍAS PRINCIPALES -->
<section
	class="py-12 sm:py-16 md:py-24 bg-surface-tertiary relative overflow-hidden"
	aria-labelledby="categorias-productos"
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
					id="categorias-productos"
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
								class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"
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
								class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"
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
<article
	class="py-16 md:py-24 bg-surface-page relative overflow-hidden border-t border-border-default"
	aria-labelledby="casos-exito"
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
						id="casos-exito"
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
</article>

<!-- SECCIÓN 5: PROCESO DE TRABAJO -->
<section class="py-12 sm:py-16 md:py-20 lg:py-24 bg-surface-tertiary" aria-labelledby="proceso-trabajo">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<ScrollReveal animation="fly" direction="up" delay={0}>
			{#snippet children()}
				<Heading
					id="proceso-trabajo"
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
	aria-labelledby="estadisticas"
>
	<div class="container mx-auto px-4 sm:px-6">
		<div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0">
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
							<div class="text-white text-xs sm:text-sm">
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
<section class="py-12 sm:py-16 bg-surface-page border-y border-border-default" aria-labelledby="clientes">
	<div class="container mx-auto px-4 sm:px-6">
		<ScrollReveal animation="fly" direction="up" delay={0}>
			{#snippet children()}
				<Heading
					id="clientes"
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
	aria-labelledby="cta-final"
>
	<!-- Efecto de fondo animado -->
	<div class="absolute inset-0 opacity-10">
		<AnimatedGridPattern numSquares={20} />
	</div>

	<div class="container mx-auto px-4 sm:px-6 text-center relative z-10">
		<ScrollReveal animation="fly" direction="up" delay={0}>
			{#snippet children()}
				<Heading
					id="cta-final"
					level="h2"
					class="mb-4 text-white text-2xl sm:text-3xl md:text-4xl"
				>
					¿Listo para tu próximo proyecto?
				</Heading>
				<Text
					class="mb-6 sm:mb-8 text-white max-w-2xl mx-auto px-4 text-base sm:text-lg"
				>
					Solicita presupuesto sin compromiso y descubre cómo podemos
					ayudarte
				</Text>
			{/snippet}
		</ScrollReveal>

		<ScrollReveal animation="fly" direction="up" delay={200}>
			{#snippet children()}
				<!-- Pestañas -->
				<div class="max-w-2xl mx-auto mb-6 px-4">
					<div class="flex gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-1">
						<button
							type="button"
							onclick={() => (ctaFormType = 'appointment')}
							class="flex-1 px-4 py-3 rounded-lg font-medium transition-all duration-300 min-h-[48px] {ctaFormType === 'appointment'
								? 'bg-white text-primary'
								: 'text-white/80 hover:text-white hover:bg-white/10'}"
						>
							Agendar Cita
						</button>
						<button
							type="button"
							onclick={() => (ctaFormType = 'callback')}
							class="flex-1 px-4 py-3 rounded-lg font-medium transition-all duration-300 min-h-[48px] {ctaFormType === 'callback'
								? 'bg-white text-primary'
								: 'text-white/80 hover:text-white hover:bg-white/10'}"
						>
							Te llamamos
						</button>
					</div>
				</div>

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
							bind:value={ctaFormData.nombre}
							class="w-full px-4 py-4 rounded-lg text-text-default min-h-[56px] text-base transition-all duration-300 focus:ring-2 focus:ring-white/50 focus:outline-none touch-target"
							required
							aria-label="Nombre completo"
						/>
					</div>
					
					{#if ctaFormType === 'appointment'}
						<div class="relative">
							<label for="cta-datetime" class="sr-only">Fecha y hora</label>
							<input
								id="cta-datetime"
								name="cta-datetime"
								type="datetime-local"
								bind:value={ctaFormData.fechaHora}
								class="w-full px-4 py-4 rounded-lg text-text-default min-h-[56px] text-base transition-all duration-300 focus:ring-2 focus:ring-white/50 focus:outline-none touch-target"
								required
								aria-label="Fecha y hora preferida"
							/>
						</div>
					{/if}
					
					<div class="relative">
						<label for="cta-phone" class="sr-only">Teléfono</label>
						<input
							id="cta-phone"
							name="cta-phone"
							type="tel"
							placeholder="Teléfono"
							inputmode="tel"
							autocomplete="tel"
							bind:value={ctaFormData.telefono}
							class="w-full px-4 py-4 rounded-lg text-text-default min-h-[56px] text-base transition-all duration-300 focus:ring-2 focus:ring-white/50 focus:outline-none touch-target"
							required
							aria-label="Número de teléfono"
						/>
					</div>
					
					{#if ctaFormType === 'appointment'}
						<div class="relative">
							<label for="cta-email" class="sr-only">Email</label>
							<input
								id="cta-email"
								name="cta-email"
								type="email"
								placeholder="Email (opcional)"
								inputmode="email"
								autocomplete="email"
								bind:value={ctaFormData.email}
								class="w-full px-4 py-4 rounded-lg text-text-default min-h-[56px] text-base transition-all duration-300 focus:ring-2 focus:ring-white/50 focus:outline-none touch-target"
								aria-label="Dirección de correo electrónico"
							/>
						</div>
					{/if}
					
					<Button
						type="submit"
						intent="primary"
						size="lg"
						class="w-full text-base font-semibold mt-2 transition-all duration-300 hover:scale-105 min-h-[56px] touch-target bg-white text-primary hover:bg-white/90"
						aria-label="Enviar solicitud de presupuesto"
					>
						{ctaFormType === 'appointment' ? 'Agendar Cita' : 'Solicitar Llamada'}
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
						href="tel:{siteConfig.contact.phone.main.replace(/\s/g, '')}"
						class="underline hover:no-underline transition-all"
						>{siteConfig.contact.phone.main}</a
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
</main>
