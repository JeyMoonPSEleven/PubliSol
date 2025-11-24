<script lang="ts">
	import { Heading, Text, Card, Timeline } from "atomic-design-svelte";
	import { Breadcrumb } from "atomic-design-svelte";
	
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
</script>

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

<!-- Nuestros Valores -->
<section class="py-16 bg-surface-tertiary" id="valores">
	<div class="container mx-auto px-4">
		<Heading level="h2" class="text-center mb-12">Nuestros Valores</Heading>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each valores as valor}
				<Card padding="lg" elevation={1} class="text-center">
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

<!-- Certificaciones -->
<section class="py-16 bg-surface-page" id="certificaciones">
	<div class="container mx-auto px-4">
		<Heading level="h2" class="text-center mb-12">Certificaciones</Heading>
		<div class="flex flex-wrap justify-center items-center gap-8">
			<div class="text-center">
				<div class="w-32 h-32 bg-surface-tertiary rounded-lg flex items-center justify-center mb-4">
					<Text class="text-text-muted text-sm">ISO 9001</Text>
				</div>
				<Text class="text-sm font-semibold">ISO 9001</Text>
			</div>
			<div class="text-center">
				<div class="w-32 h-32 bg-surface-tertiary rounded-lg flex items-center justify-center mb-4">
					<Text class="text-text-muted text-sm">FSC</Text>
				</div>
				<Text class="text-sm font-semibold">FSC</Text>
			</div>
			<div class="text-center">
				<div class="w-32 h-32 bg-surface-tertiary rounded-lg flex items-center justify-center mb-4">
					<Text class="text-text-muted text-sm">EcoVadis</Text>
				</div>
				<Text class="text-sm font-semibold">EcoVadis</Text>
			</div>
		</div>
	</div>
</section>

