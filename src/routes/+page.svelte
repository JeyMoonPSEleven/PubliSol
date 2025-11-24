<script lang="ts">
	import {
		Hero,
		Card,
		Button,
		Heading,
		Text,
		Carousel,
	} from "atomic-design-svelte";
	import { Link } from "atomic-design-svelte";

	// Sección 1: Hero Principal
	const heroData = {
		title: "Agendas y Merchandising Personalizado",
		subtitle:
			"Desde 1995 creando productos únicos para colegios, empresas y asociaciones. Calidad, creatividad y servicio integral.",
		primaryAction: {
			label: "Ver Catálogo",
			href: "/productos",
		},
		secondaryAction: {
			label: "Contactar",
			href: "/contacto",
		},
	};

	// Sección 2: Propuesta de Valor
	const services = [
		{
			icon: "🎨",
			title: "Personalización Total",
			description:
				"Diseñamos agendas y productos 100% adaptados a tu imagen corporativa o centro educativo.",
			link: "/nosotros#personalizacion",
		},
		{
			icon: "✓",
			title: "Calidad Garantizada",
			description:
				"Materiales premium y procesos de fabricación certificados. Garantía en todos nuestros productos.",
			link: "/nosotros#calidad",
		},
		{
			icon: "📦",
			title: "Servicio Integral",
			description:
				"Desde el diseño hasta la entrega. Nos encargamos de todo para que no te preocupes de nada.",
			link: "/nosotros#servicio",
		},
		{
			icon: "🔢",
			title: "Sin Mínimos",
			description:
				"Adaptamos cantidades a tus necesidades. Proyectos grandes o pequeños, todos son importantes.",
			link: "/contacto",
		},
		{
			icon: "🚚",
			title: "Entrega Rápida",
			description:
				"Plazos ajustados y cumplidos. Envíos a toda España en 24-48h para productos en stock.",
			link: "/contacto#envios",
		},
		{
			icon: "🌱",
			title: "Sostenibilidad",
			description:
				"Productos eco-friendly y compromiso con el medio ambiente en cada proceso.",
			link: "/productos/sostenibles",
		},
	];

	// Sección 3: Categorías Principales
	const categories = [
		{
			name: "Agendas Escolares",
			image: "https://images.unsplash.com/photo-1503676260728-1c00e094b736?w=800&h=600&fit=crop&q=80",
			productCount: "45+",
			href: "/productos/agendas-escolares",
			size: "large",
		},
		{
			name: "Merchandising Empresarial",
			image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=600&fit=crop&q=80",
			productCount: "60+",
			href: "/productos/merchandising-empresarial",
			size: "medium",
		},
		{
			name: "Textil Personalizado",
			image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80",
			productCount: "35+",
			href: "/productos/textil-corporativo",
			size: "medium",
		},
		{
			name: "Papelería y Libretas",
			image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=600&fit=crop&q=80",
			productCount: "50+",
			href: "/productos/papeleria",
			size: "medium",
		},
		{
			name: "Productos Sostenibles",
			image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop&q=80",
			productCount: "25+",
			href: "/productos/sostenibles",
			size: "large",
		},
	];

	// Sección 4: Casos de Éxito
	const projects = [
		{
			image: "https://images.unsplash.com/photo-1503676260728-1c00e094b736?w=600&h=400&fit=crop&q=80",
			logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop&q=80",
			client: "Colegio San José",
			testimonial:
				"Excelente calidad y servicio. Las agendas quedaron perfectas y los alumnos están encantados. Repetiremos sin duda.",
			author: "María González, Directora",
			badge: "Agendas Escolares",
			details: "800 agendas escolares con diseño exclusivo",
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
		},
	];

	// Sección 5: Proceso de Trabajo
	const processSteps = [
		{
			number: "1",
			icon: "💬",
			title: "Contacto",
			description: "Nos cuentas tu proyecto y necesidades específicas.",
			time: "24-48h",
		},
		{
			number: "2",
			icon: "✏️",
			title: "Diseño",
			description:
				"Creamos propuesta visual personalizada adaptada a tu marca.",
			time: "3-5 días",
		},
		{
			number: "3",
			icon: "🏭",
			title: "Producción",
			description:
				"Fabricamos con los mejores materiales y procesos certificados.",
			time: "10-15 días",
		},
		{
			number: "4",
			icon: "📦",
			title: "Entrega",
			description: "Recibe tu pedido en tiempo y forma, listo para usar.",
			time: "24-48h",
		},
	];

	// Sección 6: Stats
	const stats = [
		{ value: "+25", label: "AÑOS", description: "de experiencia" },
		{ value: "+500", label: "CLIENTES", description: "satisfechos" },
		{
			value: "+10,000",
			label: "PRODUCTOS",
			description: "entregados al año",
		},
		{
			value: "100%",
			label: "PERSONALIZACIÓN",
			description: "en cada proyecto",
		},
	];
</script>

<!-- SECCIÓN 1: HERO PRINCIPAL -->
<section
	class="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden"
>
	<!-- Imagen de fondo con overlay -->
	<div class="absolute inset-0">
		<img
			src="https://images.unsplash.com/photo-1503676260728-1c00e094b736?w=1920&h=1080&fit=crop&q=80"
			alt=""
			class="w-full h-full object-cover"
		/>
		<div
			class="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/70 to-secondary/75"
		></div>
		<div class="absolute inset-0 bg-black/40"></div>
	</div>

	<div
		class="relative z-10 container mx-auto px-4 py-12 sm:py-20 text-center"
	>
		<Heading
			level="h1"
			class="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg leading-tight animate-fade-in"
		>
			{heroData.title}
		</Heading>
		<Text
			size="xl"
			class="mb-6 sm:mb-8 max-w-3xl mx-auto text-white/95 text-base sm:text-lg md:text-xl px-2 drop-shadow-md"
		>
			{heroData.subtitle}
		</Text>
		<div
			class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4"
		>
			<Button
				intent="primary"
				size="lg"
				class="w-full sm:w-auto min-h-[48px]"
				href={heroData.primaryAction.href}
			>
				{heroData.primaryAction.label}
			</Button>
			<Button
				intent="secondary"
				size="lg"
				class="w-full sm:w-auto min-h-[48px]"
				href={heroData.secondaryAction.href}
			>
				{heroData.secondaryAction.label}
			</Button>
		</div>

		<!-- Trust Badges Mejorados -->
		<div
			class="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 px-4 mt-8 sm:mt-12"
		>
			<div
				class="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
			>
				<svg
					class="w-5 h-5 text-white"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5 13l4 4L19 7"
					/>
				</svg>
				<span class="text-sm sm:text-base text-white font-medium"
					>Más de 500 colegios confían en nosotros</span
				>
			</div>
			<div
				class="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
			>
				<svg
					class="w-5 h-5 text-white"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2h2.945M15 15v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3m0-4V8a2 2 0 012-2h4l2 2h4a2 2 0 012 2v3M9 19h6"
					/>
				</svg>
				<span class="text-sm sm:text-base text-white font-medium"
					>Producción sostenible certificada</span
				>
			</div>
			<div
				class="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
			>
				<svg
					class="w-5 h-5 text-white"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
					/>
				</svg>
				<span class="text-sm sm:text-base text-white font-medium"
					>Entrega en toda España</span
				>
			</div>
		</div>
	</div>

	<!-- Scroll Down Indicator Mejorado -->
	<div
		class="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block z-10"
	>
		<div class="flex flex-col items-center gap-2">
			<span class="text-xs text-white/80 uppercase tracking-wider"
				>Scroll</span
			>
			<svg
				class="w-6 h-6 text-white"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M19 14l-7 7m0 0l-7-7m7 7V3"
				/>
			</svg>
		</div>
	</div>
</section>

<!-- SECCIÓN 2: PROPUESTA DE VALOR -->
<section class="py-12 sm:py-16 md:py-24 bg-surface-page">
	<div class="container mx-auto px-4 sm:px-6">
		<Heading
			level="h2"
			class="text-center mb-4 text-2xl sm:text-3xl md:text-4xl"
			>¿Por qué elegirnos?</Heading
		>
		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12"
		>
			{#each services as service, index}
				<Card
					padding="lg"
					elevation={1}
					class="hover:elevation-2 transition-all duration-300 hover:-translate-y-1 hover-lift group"
				>
					{#snippet header()}
						<div
							class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
						>
							{service.icon}
						</div>
						<Heading
							level="h3"
							class="mb-2 group-hover:text-primary transition-colors"
							>{service.title}</Heading
						>
					{/snippet}
					{#snippet children()}
						<Text class="mb-4 text-text-muted"
							>{service.description}</Text
						>
						<Link
							href={service.link}
							class="text-primary hover:underline font-medium"
						>
							Saber más →
						</Link>
					{/snippet}
				</Card>
			{/each}
		</div>
	</div>
</section>

<!-- SECCIÓN 3: CATEGORÍAS PRINCIPALES -->
<section class="py-12 sm:py-16 md:py-24 bg-surface-tertiary">
	<div class="container mx-auto px-4 sm:px-6">
		<Heading
			level="h2"
			class="text-center mb-2 text-2xl sm:text-3xl md:text-4xl"
			>Nuestros Productos</Heading
		>
		<Text class="text-center text-text-muted mb-8 sm:mb-12 px-4"
			>Explora nuestro catálogo completo</Text
		>

		<!-- Bento Grid Layout -->
		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-fr"
		>
			{#each categories as category}
				{@const isLarge = category.size === "large"}
				<Link
					href={category.href}
					class="group relative overflow-hidden rounded-lg sm:rounded-xl {isLarge
						? 'sm:col-span-2 sm:row-span-2'
						: ''} h-48 sm:h-64 md:h-auto min-h-[200px]"
				>
					<div
						class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"
					></div>
					<div
						class="absolute inset-0 bg-primary/25 group-hover:bg-primary/40 transition-all duration-500 z-10"
					></div>
					<img
						src={category.image}
						alt={category.name}
						class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
					/>
					<div class="absolute bottom-0 left-0 right-0 p-6 z-20">
						<Heading level="h3" class="text-white mb-2"
							>{category.name}</Heading
						>
						<Text class="text-white/80 text-sm"
							>Ver {category.productCount} productos</Text
						>
						<Button
							intent="primary"
							size="sm"
							class="mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
						>
							Explorar
						</Button>
					</div>
				</Link>
			{/each}
		</div>

		<div class="text-center mt-12">
			<Button intent="primary" size="lg" href="/productos">
				Ver Catálogo Completo
			</Button>
		</div>
	</div>
</section>

<!-- SECCIÓN 4: CASOS DE ÉXITO -->
<section class="py-16 md:py-24 bg-surface-page">
	<div class="container mx-auto px-4">
		<Heading level="h2" class="text-center mb-4"
			>Proyectos que nos enorgullecen</Heading
		>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
			{#each projects as project}
				<Card
					padding="lg"
					elevation={1}
					class="hover:elevation-2 transition-all"
				>
					{#snippet header()}
						<div
							class="relative h-48 mb-4 rounded-lg overflow-hidden"
						>
							<img
								src={project.image}
								alt={project.client}
								class="w-full h-full object-cover"
							/>
						</div>
						<div class="flex items-center gap-3 mb-4">
							<img
								src={project.logo}
								alt={project.client}
								class="h-12 w-12 object-contain"
							/>
							<div>
								<Heading level="h4">{project.client}</Heading>
								<span
									class="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
								>
									{project.badge}
								</span>
							</div>
						</div>
					{/snippet}
					{#snippet children()}
						<Text class="mb-4 text-text-muted italic"
							>"{project.testimonial}"</Text
						>
						<Text class="text-sm text-text-muted"
							>— {project.author}</Text
						>
						<Text class="text-sm text-text-muted mt-2"
							>{project.details}</Text
						>
					{/snippet}
				</Card>
			{/each}
		</div>
	</div>
</section>

<!-- SECCIÓN 5: PROCESO DE TRABAJO -->
<section class="py-12 sm:py-16 md:py-24 bg-surface-tertiary">
	<div class="container mx-auto px-4 sm:px-6">
		<Heading
			level="h2"
			class="text-center mb-2 text-2xl sm:text-3xl md:text-4xl"
			>Cómo trabajamos contigo</Heading
		>
		<Text
			class="text-center text-text-muted mb-8 sm:mb-12 text-sm sm:text-base"
			>Simple, transparente y efectivo</Text
		>

		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12"
		>
			{#each processSteps as step}
				<Card
					padding="md sm:lg"
					elevation={1}
					class="text-center relative"
				>
					{#snippet header()}
						<div
							class="text-5xl sm:text-6xl font-bold text-primary/20 mb-3 sm:mb-4"
						>
							{step.number}
						</div>
						<div class="text-3xl sm:text-4xl mb-3 sm:mb-4">
							{step.icon}
						</div>
						<Heading level="h3" class="mb-2 text-lg sm:text-xl"
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
			{/each}
		</div>
	</div>
</section>

<!-- SECCIÓN 6: NÚMEROS / STATS -->
<section class="py-12 sm:py-16 md:py-24 bg-primary text-white">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
			{#each stats as stat}
				<div class="text-center px-2">
					<div
						class="text-3xl sm:text-4xl md:text-5xl font-bold mb-2"
					>
						{stat.value}
					</div>
					<div class="text-lg sm:text-xl font-semibold mb-1">
						{stat.label}
					</div>
					<div class="text-white/80 text-xs sm:text-sm">
						{stat.description}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- SECCIÓN 7: CTA FINAL -->
<section
	class="py-12 sm:py-16 md:py-24 bg-gradient-to-r from-primary to-secondary text-white"
>
	<div class="container mx-auto px-4 sm:px-6 text-center">
		<Heading
			level="h2"
			class="mb-4 text-white text-2xl sm:text-3xl md:text-4xl"
			>¿Listo para tu próximo proyecto?</Heading
		>
		<Text
			class="mb-6 sm:mb-8 text-white/90 max-w-2xl mx-auto px-4 text-base sm:text-lg"
		>
			Solicita presupuesto sin compromiso y descubre cómo podemos ayudarte
		</Text>

		<form class="max-w-2xl mx-auto flex flex-col gap-3 sm:gap-4 mb-6 px-4">
			<input
				type="text"
				placeholder="Nombre"
				class="w-full px-4 py-3 rounded-lg text-text-default min-h-[48px] text-base"
			/>
			<input
				type="email"
				placeholder="Email"
				class="w-full px-4 py-3 rounded-lg text-text-default min-h-[48px] text-base"
			/>
			<input
				type="tel"
				placeholder="Teléfono"
				class="w-full px-4 py-3 rounded-lg text-text-default min-h-[48px] text-base"
			/>
		</form>

		<Button
			intent="secondary"
			size="lg"
			class="mb-4 min-h-[48px] w-full sm:w-auto px-8"
		>
			Quiero que me contacten
		</Button>

		<Text class="text-white/80 text-sm sm:text-base px-4">
			O llámanos: <a
				href="tel:+34XXXXXXXXX"
				class="underline hover:no-underline">+34 XXX XXX XXX</a
			>
		</Text>
	</div>
</section>
