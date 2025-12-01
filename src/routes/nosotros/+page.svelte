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
			year: "[AÑO FUNDACIÓN]",
			title: "Fundación",
			description: "Inicio de operaciones especializadas en agendas escolares personalizadas"
		},
		{
			year: "[AÑO EXPANSIÓN]",
			title: "Expansión de Servicios",
			description: "Incorporación de líneas de textil corporativo y merchandising educativo"
		},
		{
			year: "[AÑO CERTIFICACIÓN]",
			title: "Certificaciones de Calidad",
			description: "Obtención de certificaciones FSC/PEFC y Oeko-Tex, compromiso con sostenibilidad"
		},
		{
			year: "2025",
			title: "Líderes en Consultoría Educativa",
			description: "Posicionamiento como socio estratégico, no solo proveedor, con metodología consultiva B2B"
		}
	];
	
	const valores = [
		{
			title: "Excelencia Pedagógica",
			description: "Entendemos el ciclo de vida escolar. Nuestros productos no son solo materiales; son herramientas que facilitan la organización académica y la comunicación familia-escuela."
		},
		{
			title: "Compromiso con la Sostenibilidad",
			description: "Materiales certificados FSC/PEFC, textiles Oeko-Tex, procesos responsables. Educar en valores empieza por el material que usamos."
		},
		{
			title: "Consultoría Especializada",
			description: "No vendemos productos; ofrecemos soluciones. Asesoramos a directores en organización y a AMPAs en financiación, actuando como consultores de negocio educativo."
		},
		{
			title: "Garantía de Entrega",
			description: "El 'pánico de septiembre' no existe con nosotros. Compromiso firme con plazos, calidad certificada y servicio integral desde el diseño hasta la entrega."
		}
	];

	const equipo = [
		{
			name: "[CONFIRMAR NOMBRE]",
			role: "Director General / Responsable Comercial",
			description: "Experto en gestión de proyectos B2B educativos. Especializado en asesoramiento a directores de centros y AMPAs.",
			image: "/images/team/director-general.webp"
		},
		{
			name: "[CONFIRMAR NOMBRE]",
			role: "Responsable de Producción / Jefe de Taller",
			description: "Garantiza la calidad y cumplimiento de plazos en todos los proyectos. Experto en procesos de impresión, encuadernación y personalización textil.",
			image: "/images/team/responsable-produccion.webp"
		},
		{
			name: "[CONFIRMAR NOMBRE]",
			role: "Diseñador Gráfico / Especialista en Personalización",
			description: "Crea y adapta diseños para que queden perfectos en nuestros productos. Experto en mockups digitales, técnicas de personalización y branding educativo.",
			image: "/images/team/disenadora-grafica.webp"
		},
		{
			name: "[CONFIRMAR NOMBRE]",
			role: "Atención al Cliente / Asesora Comercial",
			description: "Primera línea de contacto con clientes. Gestiona solicitudes de presupuesto, envío de muestras y seguimiento post-venta. Especializada en consultoría para AMPAs.",
			image: "/images/team/director-comercial.webp"
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
			<Heading level="h1" class="mb-6">Tu Socio Estratégico Escolar</Heading>
			<Text size="lg" class="text-text-muted mb-8">
				Publisol Ronda nació con la visión de transformar el sector de material escolar personalizado, 
				elevándolo de simple proveedor a socio estratégico de centros educativos. Nuestra filosofía se basa 
				en entender que cada colegio tiene necesidades únicas: los directores buscan eficiencia y calidad 
				pedagógica, mientras que las AMPAs necesitan soluciones de financiación para sus proyectos. 
				Por eso, no nos limitamos a fabricar productos; creamos ecosistemas de organización educativa y financiación.
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

<!-- Misión y Visión -->
<section class="py-16 bg-gradient-to-br from-primary/5 via-white to-secondary/5" id="mision-vision">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<Card padding="lg" elevation={1} class="hover-shadow-primary transition-all">
					{#snippet header()}
						<Heading level="h2" class="mb-4">Nuestra Misión</Heading>
					{/snippet}
					{#snippet children()}
						<Text class="text-text-muted">
							Transformar la relación entre centros educativos y proveedores de material personalizado, 
							elevándola de transacción comercial a alianza estratégica. Ofrecemos orden académico para 
							directores y soluciones de financiación para AMPAs, siempre con calidad certificada y 
							compromiso con la sostenibilidad.
						</Text>
					{/snippet}
				</Card>
				<Card padding="lg" elevation={1} class="hover-shadow-primary transition-all">
					{#snippet header()}
						<Heading level="h2" class="mb-4">Nuestra Visión</Heading>
					{/snippet}
					{#snippet children()}
						<Text class="text-text-muted">
							Ser el referente nacional en personalización educativa B2B, reconocidos no solo por la 
							calidad de nuestros productos, sino por nuestra capacidad de consultoría especializada. 
							Aspiramos a que cada director y cada AMPA nos vean como su socio de confianza para 
							organizar el curso escolar y financiar sus proyectos.
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
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
			{#each valores as valor}
				<Card padding="lg" elevation={1} class="hover-shadow-primary transition-all">
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
							Papel certificado FSC/PEFC (Gestión Forestal Responsable), textiles Oeko-Tex (libres de sustancias nocivas) y materiales reciclados en toda nuestra gama
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
							Procesos optimizados que minimizan residuos y consumo energético. Cumplimiento estricto de normativa UNE-EN 14682 de seguridad en ropa infantil
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
							FSC/PEFC, Oeko-Tex Standard 100, ISO 9001 (si aplica) y cumplimiento normativa UNE-EN 14682. Argumento de venta para directores que quieren transmitir valores ecológicos
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
					<Text class="text-text-muted text-sm">FSC/PEFC</Text>
				</div>
				<Text class="text-sm font-semibold">FSC/PEFC</Text>
				<Text class="text-xs text-text-muted mt-1">Gestión Forestal Responsable</Text>
			</div>
			<div class="text-center">
				<div class="w-32 h-32 bg-surface-tertiary rounded-lg flex items-center justify-center mb-4 hover-shadow-secondary transition-all">
					<Text class="text-text-muted text-sm">Oeko-Tex</Text>
				</div>
				<Text class="text-sm font-semibold">Oeko-Tex Standard 100</Text>
				<Text class="text-xs text-text-muted mt-1">Textiles libres de sustancias nocivas</Text>
			</div>
			<div class="text-center">
				<div class="w-32 h-32 bg-surface-tertiary rounded-lg flex items-center justify-center mb-4 hover-shadow-primary transition-all">
					<Text class="text-text-muted text-sm">ISO 9001</Text>
				</div>
				<Text class="text-sm font-semibold">ISO 9001</Text>
				<Text class="text-xs text-text-muted mt-1">Sistema de gestión de calidad</Text>
			</div>
			<div class="text-center">
				<div class="w-32 h-32 bg-surface-tertiary rounded-lg flex items-center justify-center mb-4 hover-shadow-secondary transition-all">
					<Text class="text-text-muted text-sm">UNE-EN 14682</Text>
				</div>
				<Text class="text-sm font-semibold">UNE-EN 14682</Text>
				<Text class="text-xs text-text-muted mt-1">Seguridad en ropa infantil</Text>
			</div>
		</div>
	</div>
</section>

