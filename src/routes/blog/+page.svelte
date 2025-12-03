<script lang="ts">
	import { Heading, Text, Card, Button, Breadcrumb, SearchBar } from "atomic-design-svelte";
	import { Link } from "atomic-design-svelte";
	import Seo from "$lib/components/Seo.svelte";
	
	const breadcrumbItems = [
		{ label: "Inicio", href: "/" },
		{ label: "Blog", href: "/blog" }
	];
	
	const categories = ["Todos", "Tendencias", "Consejos", "Casos de Éxito", "Sostenibilidad"];
	let selectedCategory = $state("Todos");
	
		const articles = [
		{
			id: 1,
			title: "10 ideas creativas para merchandising de empresa en 2025",
			category: "Tendencias",
			excerpt: "Descubre las últimas tendencias en merchandising corporativo y cómo pueden potenciar tu marca.",
			image: "/images/blog/blog-merchandising-2025.jpg",
			author: "Equipo Publisol",
			date: "15 Nov 2024",
			readTime: "5 min",
			href: "/blog"
		},
		{
			id: 2,
			title: "Cómo elegir la agenda escolar perfecta para tu centro",
			category: "Consejos",
			excerpt: "Guía completa para directores y jefes de estudio sobre qué considerar al elegir agendas escolares.",
			image: "/images/blog/blog-agenda-escolar-perfecta.jpg",
			author: "María González",
			date: "10 Nov 2024",
			readTime: "8 min",
			href: "/blog"
		},
		{
			id: 3,
			title: "Productos eco-friendly: La tendencia que llegó para quedarse",
			category: "Sostenibilidad",
			excerpt: "El compromiso con el medio ambiente en el merchandising corporativo ya no es opcional.",
			image: "/images/blog/blog-productos-ecofriendly.jpg",
			author: "Equipo Publisol",
			date: "5 Nov 2024",
			readTime: "6 min",
			href: "/blog"
		},
		{
			id: 4,
			title: "Guía completa: Preparar archivos para impresión",
			category: "Consejos",
			excerpt: "Todo lo que necesitas saber para preparar tus diseños y obtener los mejores resultados.",
			image: "/images/blog/blog-preparar-archivos-impresion.jpg",
			author: "Juan Pérez",
			date: "1 Nov 2024",
			readTime: "10 min",
			href: "/blog"
		},
		{
			id: 5,
			title: "Casos de éxito: Cómo Empresa X renovó su imagen corporativa",
			category: "Casos de Éxito",
			excerpt: "Conoce cómo ayudamos a una empresa a transformar su imagen a través del merchandising personalizado.",
			image: "/images/blog/blog-caso-exito-empresa-x.jpg",
			author: "Equipo Publisol",
			date: "28 Oct 2024",
			readTime: "7 min",
			href: "/blog"
		},
		{
			id: 6,
			title: "Textil corporativo: Tendencias 2025 en uniformes escolares",
			category: "Tendencias",
			excerpt: "Explora las últimas innovaciones en diseño de uniformes escolares y textil corporativo para el próximo año.",
			image: "/images/blog/blog-textil-corporativo-2025.jpg",
			author: "Equipo Publisol",
			date: "25 Oct 2024",
			readTime: "6 min",
			href: "/blog"
		},
		{
			id: 7,
			title: "5 razones para personalizar tu material de oficina",
			category: "Consejos",
			excerpt: "Descubre por qué la personalización de material de oficina puede mejorar la identidad de tu empresa.",
			image: "/images/blog/blog-material-oficina.jpg",
			author: "Carlos Ruiz",
			date: "20 Oct 2024",
			readTime: "4 min",
			href: "/blog"
		},
		{
			id: 8,
			title: "Sostenibilidad en la industria: Certificaciones que importan",
			category: "Sostenibilidad",
			excerpt: "Entiende la importancia de las certificaciones FSC, PEFC y Oeko-Tex en productos personalizados.",
			image: "/images/blog/blog-certificaciones.jpg",
			author: "Equipo Publisol",
			date: "15 Oct 2024",
			readTime: "7 min",
			href: "/blog"
		},
		{
			id: 9,
			title: "Cómo financiar proyectos escolares con merchandising",
			category: "Casos de Éxito",
			excerpt: "Estrategias exitosas para que las AMPAs financien sus proyectos a través de productos personalizados.",
			image: "/images/blog/blog-financiacion-ampa.jpg",
			author: "María González",
			date: "10 Oct 2024",
			readTime: "9 min",
			href: "/blog"
		}
	];
	
	const filteredArticles = $derived(
		selectedCategory === "Todos" 
			? articles 
			: articles.filter(a => a.category === selectedCategory)
	);
</script>

<Seo
	title="Blog y Recursos - Publisol | Consejos y Tendencias"
	description="Descubre consejos, tendencias y novedades sobre personalización, merchandising empresarial y agendas escolares."
	url="/blog"
/>

<!-- Hero -->
<section class="bg-surface-tertiary py-8 sm:py-12">
	<div class="container mx-auto px-4 sm:px-6">
		<Breadcrumb items={breadcrumbItems} />
		<Heading level="h1" class="mt-4 mb-2 text-2xl sm:text-3xl md:text-4xl">Blog y Recursos</Heading>
		<Text class="text-text-muted mb-6 sm:mb-8 text-base sm:text-lg">
			Consejos, tendencias y novedades sobre personalización y merchandising
		</Text>
		
		<!-- Buscador -->
		<div class="max-w-2xl">
			<SearchBar placeholder="Buscar artículos..." class="min-h-[48px]" />
		</div>
	</div>
</section>

<!-- Categorías -->
<section class="py-6 sm:py-8 bg-surface-page border-b border-border-default">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="flex flex-wrap gap-2">
			{#each categories as category}
			<button
				type="button"
				onclick={() => (selectedCategory = category)}
				class="px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border transition-colors text-sm sm:text-base min-h-[44px] {
					selectedCategory === category
						? 'bg-primary text-white border-primary'
						: 'bg-white border-border-default hover:border-primary'
				}"
				aria-pressed={selectedCategory === category}
			>
				{category}
			</button>
			{/each}
		</div>
	</div>
</section>

<!-- Grid de Artículos -->
<section class="py-12 sm:py-16">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
			{#each filteredArticles as article}
				<Card padding="lg" class="hover:elevation-2 transition-all h-full flex flex-col">
					{#snippet header()}
						<div class="aspect-video bg-surface-tertiary rounded-lg mb-4 flex items-center justify-center">
							<Text class="text-text-muted text-sm">Imagen</Text>
						</div>
						<div class="flex items-center gap-2 mb-2">
							<span class="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
								{article.category}
							</span>
						</div>
						<Heading level="h3" class="mb-2">{article.title}</Heading>
					{/snippet}
					{#snippet children()}
						<Text class="text-text-muted mb-4 flex-1">{article.excerpt}</Text>
						<div class="flex items-center gap-4 text-sm text-text-muted mb-4">
							<div class="flex items-center gap-2">
								<span>{article.author}</span>
							</div>
							<div class="flex items-center gap-2">
								<span>📅</span>
								<span>{article.date}</span>
							</div>
							<div class="flex items-center gap-2">
								<span>⏱️</span>
								<span>{article.readTime} lectura</span>
							</div>
						</div>
						<Button intent="secondary" size="sm" class="w-full" href={article.href}>
							Leer más →
						</Button>
					{/snippet}
				</Card>
			{/each}
		</div>
		
		<!-- Paginación -->
		<div class="flex justify-center items-center gap-1 sm:gap-2 mt-8 sm:mt-12 flex-wrap">
			<Button intent="ghost" size="sm" class="min-h-[44px]">« Anterior</Button>
			<Button intent="primary" size="sm" class="min-h-[44px] min-w-[44px]">1</Button>
			<Button intent="ghost" size="sm" class="min-h-[44px] min-w-[44px]">2</Button>
			<Button intent="ghost" size="sm" class="min-h-[44px] min-w-[44px]">3</Button>
			<Button intent="ghost" size="sm" class="min-h-[44px]">Siguiente »</Button>
		</div>
	</div>
</section>

