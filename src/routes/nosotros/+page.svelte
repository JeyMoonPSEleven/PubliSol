<script lang="ts">
	import { Heading, Text, Card, Timeline } from "atomic-design-svelte";
	import { Breadcrumb } from "atomic-design-svelte";
	import Seo from "$lib/components/Seo.svelte";
	
	const breadcrumbItems = [
		{ label: "Inicio", href: "/" },
		{ label: "Sobre Nosotros", href: "/nosotros" }
	];
	
	const timeline = [
		{
			year: "1995",
			title: "Fundación",
			description: "Primeros pasos en agendas escolares"
		},
		{
			year: "2005",
			title: "Expansión",
			description: "Incorporamos merchandising empresarial"
		},
		{
			year: "2015",
			title: "Sostenibilidad",
			description: "Certificación ISO y productos eco"
		},
		{
			year: "2025",
			title: "Presente",
			description: "Líderes en personalización y calidad"
		}
	];
	
	const valores = [
		{
			title: "Calidad",
			description: "Materiales premium y controles rigurosos"
		},
		{
			title: "Compromiso",
			description: "Con nuestros clientes y el medio ambiente"
		},
		{
			title: "Innovación",
			description: "Siempre buscando nuevas soluciones"
		}
	];

	const equipo = [
		{
			name: "María González",
			role: "Directora General",
			description: "Más de 20 años de experiencia en el sector",
			image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80"
		},
		{
			name: "Juan Pérez",
			role: "Director Comercial",
			description: "Especialista en merchandising empresarial",
			image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80"
		},
		{
			name: "Ana Martínez",
			role: "Diseñadora Gráfica",
			description: "Creatividad y atención al detalle",
			image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80"
		},
		{
			name: "Carlos Ruiz",
			role: "Responsable de Producción",
			description: "Garantía de calidad en cada proyecto",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80"
		}
	];
</script>

<Seo
	title="Sobre Nosotros - Publisol | Más de 25 años de experiencia"
	description="Conoce la historia, valores y equipo de Publisol. Desde 1995 creando productos personalizados de calidad para colegios y empresas."
	url="/nosotros"
/>

<!-- Hero About -->
<section class="relative py-20 bg-gradient-to-br from-primary/10 via-white to-secondary/10">
	<div class="container mx-auto px-4">
		<Breadcrumb items={breadcrumbItems} />
		<div class="mt-8 max-w-4xl">
			<Heading level="h1" class="mb-6">Más de 25 años creando productos únicos</Heading>
			<Text size="lg" class="text-text-muted mb-8">
				Nuestra historia comenzó en 1995 con un objetivo claro: ofrecer productos personalizados 
				de la más alta calidad para colegios y empresas. Desde entonces, hemos crecido hasta 
				convertirnos en referentes del sector, siempre manteniendo nuestros valores de calidad, 
				compromiso e innovación.
			</Text>
			<div class="aspect-video bg-surface-tertiary rounded-lg flex items-center justify-center">
				<Text class="text-text-muted">Imagen: Equipo / Instalaciones</Text>
			</div>
		</div>
	</div>
</section>

<!-- Nuestra Historia (Timeline) -->
<section class="py-16 bg-surface-page" id="historia">
	<div class="container mx-auto px-4">
		<Heading level="h2" class="text-center mb-12">Nuestra Historia</Heading>
		<Timeline items={timeline} />
	</div>
</section>

<!-- Personalización Total -->
<section class="py-16 bg-surface-page" id="personalizacion">
	<div class="container mx-auto px-4">
		<Heading level="h2" class="text-center mb-12">Personalización Total</Heading>
		<div class="max-w-4xl mx-auto">
			<Text class="text-center text-lg text-text-muted mb-8">
				Cada proyecto es único. Ofrecemos personalización completa desde el diseño hasta la producción final.
			</Text>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<Card padding="lg" elevation={1} class="hover-shadow-primary transition-all">
					{#snippet header()}
						<div class="text-4xl mb-4">🎨</div>
						<Heading level="h3" class="mb-2">Diseño Exclusivo</Heading>
					{/snippet}
					{#snippet children()}
						<Text class="text-text-muted">
							Nuestro equipo de diseño crea soluciones únicas adaptadas a tu marca o centro educativo.
						</Text>
					{/snippet}
				</Card>
				<Card padding="lg" elevation={1} class="hover-shadow-primary transition-all">
					{#snippet header()}
						<div class="text-4xl mb-4">🖼️</div>
						<Heading level="h3" class="mb-2">Mockups Digitales</Heading>
					{/snippet}
					{#snippet children()}
						<Text class="text-text-muted">
							Visualiza tu producto antes de producir con muestras digitales gratuitas.
						</Text>
					{/snippet}
				</Card>
				<Card padding="lg" elevation={1} class="hover-shadow-primary transition-all">
					{#snippet header()}
						<div class="text-4xl mb-4">📐</div>
						<Heading level="h3" class="mb-2">Formatos Flexibles</Heading>
					{/snippet}
					{#snippet children()}
						<Text class="text-text-muted">
							Adaptamos tamaños, colores y materiales a tus necesidades específicas.
						</Text>
					{/snippet}
				</Card>
				<Card padding="lg" elevation={1} class="hover-shadow-primary transition-all">
					{#snippet header()}
						<div class="text-4xl mb-4">✨</div>
						<Heading level="h3" class="mb-2">Técnicas Avanzadas</Heading>
					{/snippet}
					{#snippet children()}
						<Text class="text-text-muted">
							Bordado, serigrafía, impresión digital y técnicas especiales para resultados únicos.
						</Text>
					{/snippet}
				</Card>
			</div>
		</div>
	</div>
</section>

<!-- Calidad Garantizada -->
<section class="py-16 bg-gradient-to-br from-primary/5 via-white to-secondary/5" id="calidad">
	<div class="container mx-auto px-4">
		<Heading level="h2" class="text-center mb-12">Calidad Garantizada</Heading>
		<div class="max-w-4xl mx-auto">
			<Text class="text-center text-lg text-text-muted mb-8">
				Materiales premium, procesos certificados y controles de calidad rigurosos en cada etapa.
			</Text>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				<Card padding="lg" elevation={1} class="text-center hover-shadow-primary transition-all">
					{#snippet header()}
						<div class="text-4xl mb-4">🏆</div>
						<Heading level="h3" class="mb-2">Materiales Premium</Heading>
					{/snippet}
					{#snippet children()}
						<Text class="text-text-muted">
							Trabajamos solo con proveedores certificados y materiales de primera calidad.
						</Text>
					{/snippet}
				</Card>
				<Card padding="lg" elevation={1} class="text-center hover-shadow-primary transition-all">
					{#snippet header()}
						<div class="text-4xl mb-4">✅</div>
						<Heading level="h3" class="mb-2">Controles Rigurosos</Heading>
					{/snippet}
					{#snippet children()}
						<Text class="text-text-muted">
							Inspección en cada fase del proceso para garantizar la excelencia del resultado final.
						</Text>
					{/snippet}
				</Card>
				<Card padding="lg" elevation={1} class="text-center hover-shadow-primary transition-all">
					{#snippet header()}
						<div class="text-4xl mb-4">🛡️</div>
						<Heading level="h3" class="mb-2">Garantía Total</Heading>
					{/snippet}
					{#snippet children()}
						<Text class="text-text-muted">
							Garantía de calidad en todos nuestros productos. Si hay defectos, reposición inmediata.
						</Text>
					{/snippet}
				</Card>
			</div>
		</div>
	</div>
</section>

<!-- Servicio Integral -->
<section class="py-16 bg-surface-tertiary" id="servicio">
	<div class="container mx-auto px-4">
		<Heading level="h2" class="text-center mb-12">Servicio Integral</Heading>
		<div class="max-w-4xl mx-auto">
			<Text class="text-center text-lg text-text-muted mb-8">
				Desde la primera consulta hasta la entrega final. Nos encargamos de todo para que tú solo tengas que disfrutar del resultado.
			</Text>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<Card padding="lg" elevation={1} class="hover-shadow-primary transition-all">
					{#snippet header()}
						<div class="flex items-center gap-4 mb-4">
							<div class="text-4xl">📞</div>
							<Heading level="h3">Asesoramiento Personalizado</Heading>
						</div>
					{/snippet}
					{#snippet children()}
						<Text class="text-text-muted">
							Un equipo comercial dedicado que te guía en cada paso y resuelve todas tus dudas.
						</Text>
					{/snippet}
				</Card>
				<Card padding="lg" elevation={1} class="hover-shadow-primary transition-all">
					{#snippet header()}
						<div class="flex items-center gap-4 mb-4">
							<div class="text-4xl">📋</div>
							<Heading level="h3">Gestión Completa</Heading>
						</div>
					{/snippet}
					{#snippet children()}
						<Text class="text-text-muted">
							Diseño, producción, empaquetado y logística. Todo gestionado por nuestro equipo.
						</Text>
					{/snippet}
				</Card>
				<Card padding="lg" elevation={1} class="hover-shadow-primary transition-all">
					{#snippet header()}
						<div class="flex items-center gap-4 mb-4">
							<div class="text-4xl">🚚</div>
							<Heading level="h3">Logística Optimizada</Heading>
						</div>
					{/snippet}
					{#snippet children()}
						<Text class="text-text-muted">
							Envíos coordinados y seguimiento hasta la entrega final en tu ubicación.
						</Text>
					{/snippet}
				</Card>
				<Card padding="lg" elevation={1} class="hover-shadow-primary transition-all">
					{#snippet header()}
						<div class="flex items-center gap-4 mb-4">
							<div class="text-4xl">💬</div>
							<Heading level="h3">Soporte Continuo</Heading>
						</div>
					{/snippet}
					{#snippet children()}
						<Text class="text-text-muted">
							Atención post-venta y soporte para cualquier consulta o necesidad adicional.
						</Text>
					{/snippet}
				</Card>
			</div>
		</div>
	</div>
</section>

<!-- Nuestros Valores -->
<section class="py-16 bg-surface-page" id="valores">
	<div class="container mx-auto px-4">
		<Heading level="h2" class="text-center mb-12">Nuestros Valores</Heading>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each valores as valor}
				<Card padding="lg" elevation={1} class="text-center hover-shadow-primary transition-all">
					{#snippet header()}
						<Heading level="h3" class="mb-4">{valor.title}</Heading>
					{/snippet}
					{#snippet children()}
						<Text class="text-text-muted">{valor.description}</Text>
					{/snippet}
				</Card>
			{/each}
		</div>
	</div>
</section>

<!-- Nuestro Equipo -->
<section class="py-16 bg-surface-page" id="equipo">
	<div class="container mx-auto px-4">
		<Heading level="h2" class="text-center mb-12">Nuestro Equipo</Heading>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
			{#each equipo as miembro}
				<Card padding="lg" elevation={1} class="text-center hover-shadow-primary transition-all hover:-translate-y-1">
					{#snippet header()}
						<div class="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-surface-tertiary">
							<img
								src={miembro.image}
								alt={miembro.name}
								class="w-full h-full object-cover"
							/>
						</div>
						<Heading level="h3" class="mb-2 text-lg">{miembro.name}</Heading>
						<Text class="text-sm text-primary font-semibold mb-2">{miembro.role}</Text>
					{/snippet}
					{#snippet children()}
						<Text class="text-sm text-text-muted">{miembro.description}</Text>
					{/snippet}
				</Card>
			{/each}
		</div>
	</div>
</section>

<!-- Sostenibilidad -->
<section class="py-16 bg-gradient-to-br from-secondary/10 via-white to-primary/10" id="sostenibilidad">
	<div class="container mx-auto px-4">
		<Heading level="h2" class="text-center mb-12">Compromiso con la Sostenibilidad</Heading>
		<div class="max-w-4xl mx-auto">
			<Text class="text-center text-lg text-text-muted mb-8">
				En Publisol, creemos que la calidad y la sostenibilidad van de la mano. Por eso, trabajamos constantemente para reducir nuestro impacto ambiental y ofrecer productos que respeten el planeta.
			</Text>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
				<Card padding="lg" elevation={1} class="text-center hover-shadow-secondary transition-all">
					{#snippet header()}
						<div class="text-4xl mb-4">🌱</div>
						<Heading level="h3" class="mb-2">Materiales Sostenibles</Heading>
					{/snippet}
					{#snippet children()}
						<Text class="text-text-muted">
							Papel FSC, algodón orgánico y materiales reciclados en toda nuestra gama
						</Text>
					{/snippet}
				</Card>
				<Card padding="lg" elevation={1} class="text-center hover-shadow-secondary transition-all">
					{#snippet header()}
						<div class="text-4xl mb-4">♻️</div>
						<Heading level="h3" class="mb-2">Producción Responsable</Heading>
					{/snippet}
					{#snippet children()}
						<Text class="text-text-muted">
							Procesos optimizados que minimizan residuos y consumo energético
						</Text>
					{/snippet}
				</Card>
				<Card padding="lg" elevation={1} class="text-center hover-shadow-secondary transition-all">
					{#snippet header()}
						<div class="text-4xl mb-4">🌍</div>
						<Heading level="h3" class="mb-2">Certificaciones</Heading>
					{/snippet}
					{#snippet children()}
						<Text class="text-text-muted">
							FSC, ISO 14001 y compromiso con los Objetivos de Desarrollo Sostenible
						</Text>
					{/snippet}
				</Card>
			</div>
		</div>
	</div>
</section>

<!-- Certificaciones -->
<section class="py-16 bg-surface-page" id="certificaciones">
	<div class="container mx-auto px-4">
		<Heading level="h2" class="text-center mb-12">Certificaciones</Heading>
		<div class="flex flex-wrap justify-center items-center gap-8">
			<div class="text-center">
				<div class="w-32 h-32 bg-surface-tertiary rounded-lg flex items-center justify-center mb-4 hover-shadow-primary transition-all">
					<Text class="text-text-muted text-sm">ISO 9001</Text>
				</div>
				<Text class="text-sm font-semibold">ISO 9001</Text>
			</div>
			<div class="text-center">
				<div class="w-32 h-32 bg-surface-tertiary rounded-lg flex items-center justify-center mb-4 hover-shadow-secondary transition-all">
					<Text class="text-text-muted text-sm">FSC</Text>
				</div>
				<Text class="text-sm font-semibold">FSC</Text>
			</div>
			<div class="text-center">
				<div class="w-32 h-32 bg-surface-tertiary rounded-lg flex items-center justify-center mb-4 hover-shadow-primary transition-all">
					<Text class="text-text-muted text-sm">EcoVadis</Text>
				</div>
				<Text class="text-sm font-semibold">EcoVadis</Text>
			</div>
		</div>
	</div>
</section>

