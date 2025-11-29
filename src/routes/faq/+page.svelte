<script lang="ts">
	import {
		Heading,
		Text,
		Breadcrumb,
		Accordion,
		Card,
		Button,
	} from "atomic-design-svelte";
	import { Link } from "atomic-design-svelte";
	import Seo from "$lib/components/Seo.svelte";

	const breadcrumbItems = [
		{ label: "Inicio", href: "/" },
		{ label: "Preguntas Frecuentes", href: "/faq" },
	];

	let openItems = $state<Set<string>>(new Set());

	function toggleItem(key: string) {
		if (openItems.has(key)) {
			openItems.delete(key);
		} else {
			openItems.add(key);
		}
		openItems = new Set(openItems);
	}

	const faqCategories = [
		{
			title: "Pedidos y Presupuestos",
			items: [
				{
					question: "¿Cuál es el pedido mínimo?",
					answer: "Depende del producto. Generalmente desde 25-50 unidades para agendas y 10-25 para textil. Consúltanos para tu caso específico y te ofreceremos la mejor solución adaptada a tus necesidades.",
				},
				{
					question: "¿Cómo solicito un presupuesto?",
					answer: "Puedes solicitar un presupuesto de varias formas: 1) Rellenando el formulario de contacto en nuestra web, 2) Llamándonos al +34 XXX XXX XXX, 3) Enviándonos un email a comercial@publisol.com. Te responderemos en menos de 24 horas laborables con un presupuesto personalizado.",
				},
				{
					question: "¿Cuánto tarda en llegar mi pedido?",
					answer: "Los plazos varían según el tipo de producto: Productos en stock: 24-48h (España peninsular). Producción personalizada: 10-15 días laborables. Textil con bordado: 15-20 días laborables. Para pedidos urgentes, consulta disponibilidad con nuestro equipo comercial.",
				},
				{
					question: "¿Puedo ver una muestra antes de producir?",
					answer: "Sí, ofrecemos muestras digitales (mockups) gratuitas antes de la producción. Para pedidos de gran volumen, podemos proporcionar una muestra física previa bajo consulta.",
				},
			],
		},
		{
			title: "Personalización y Diseño",
			items: [
				{
					question: "¿Qué formatos de archivo aceptan?",
					answer: "Aceptamos los siguientes formatos: .AI (Adobe Illustrator), .EPS (Encapsulated PostScript), .PDF (Alta resolución, mínimo 300 DPI), .PNG (Mínimo 300 DPI). Recomendamos formato vectorial (.AI o .EPS) para mejor calidad de impresión.",
				},
				{
					question: "¿Ofrecen servicio de diseño?",
					answer: "Sí, nuestro equipo de diseño puede ayudarte a crear o adaptar tu logo y diseño para que quede perfecto en nuestros productos. Este servicio tiene un coste adicional que se incluirá en el presupuesto.",
				},
				{
					question: "¿Puedo personalizar cualquier producto?",
					answer: "La mayoría de nuestros productos son personalizables. Algunos tienen limitaciones técnicas que te explicaremos en el presupuesto. Consulta opciones específicas con nuestro equipo comercial.",
				},
				{
					question: "¿Cuántos colores puedo usar en mi diseño?",
					answer: "Depende del método de impresión. Impresión digital: Sin límite de colores (CMYK). Serigrafía: Hasta 4-6 colores según el producto. Bordado: Hasta 8-10 hilos de color. Te asesoraremos sobre la mejor opción para tu diseño.",
				},
			],
		},
		{
			title: "Pagos y Facturación",
			items: [
				{
					question: "¿Qué formas de pago aceptan?",
					answer: "Aceptamos transferencia bancaria, cheque y, para pedidos recurrentes, podemos establecer condiciones de pago a 30, 60 o 90 días según el volumen y antigüedad del cliente.",
				},
				{
					question: "¿Emiten factura?",
					answer: "Sí, emitimos factura para todos los pedidos. La factura se enviará por email una vez confirmado el pedido y antes del envío.",
				},
				{
					question: "¿Los precios incluyen IVA?",
					answer: "Los precios mostrados en la web son orientativos y no incluyen IVA salvo indicación expresa. El presupuesto final incluirá el desglose completo con IVA aplicable.",
				},
			],
		},
		{
			title: "Envíos y Devoluciones",
			items: [
				{
					question: "¿Envían a toda España?",
					answer: "Sí, realizamos envíos a toda España peninsular, Islas Baleares, Islas Canarias, Ceuta y Melilla. Los costes y plazos varían según la zona. Consulta en nuestro formulario de contacto.",
				},
				{
					question: "¿Cuál es el coste de envío?",
					answer: "El coste de envío depende del volumen, peso y destino. Para pedidos superiores a 500€, el envío a España peninsular es gratuito. En el presupuesto se incluirá el coste detallado del envío.",
				},
				{
					question: "¿Puedo devolver un producto personalizado?",
					answer: "Los productos personalizados no admiten devolución salvo defecto de fabricación o error imputable a Publisol. En caso de defecto, procederemos a la reposición inmediata o reembolso según corresponda.",
				},
				{
					question: "¿Qué pasa si hay un error en mi pedido?",
					answer: "Si el error es imputable a Publisol, nos hacemos cargo de la reposición sin coste adicional. Si el error es por información incorrecta proporcionada por el cliente, se evaluará caso por caso. Es importante revisar la muestra digital antes de la producción.",
				},
			],
		},
		{
			title: "Sostenibilidad",
			items: [
				{
					question: "¿Qué productos eco-friendly ofrecen?",
					answer: "Ofrecemos una amplia gama de productos sostenibles: agendas en papel reciclado FSC, botellas de acero inoxidable, bolsas de algodón orgánico, libretas de papel piedra, bolígrafos de bambú y material de oficina reciclado.",
				},
				{
					question: "¿Tienen certificaciones ambientales?",
					answer: "Sí, contamos con certificación FSC (Forest Stewardship Council) para nuestros productos de papel, y estamos en proceso de obtener certificación ISO 14001. Muchos de nuestros productos textiles están certificados GOTS (Global Organic Textile Standard).",
				},
				{
					question: "¿Los materiales son reciclados?",
					answer: "Ofrecemos opciones tanto en materiales reciclados como en materiales convencionales. Todos nuestros productos de papel pueden fabricarse con papel 100% reciclado certificado FSC. Consulta las opciones disponibles en cada producto.",
				},
			],
		},
	];
</script>

<Seo
	title="Preguntas Frecuentes - Publisol | FAQ"
	description="Resuelve tus dudas sobre pedidos, personalización, pagos, envíos y sostenibilidad. Encuentra respuestas a las preguntas más frecuentes."
	url="/faq"
/>

<!-- Hero -->
<section class="bg-surface-tertiary py-8 sm:py-12">
	<div class="container mx-auto px-4 sm:px-6">
		<Breadcrumb items={breadcrumbItems} />
		<Heading level="h1" class="mt-4 mb-2 text-2xl sm:text-3xl md:text-4xl"
			>Preguntas Frecuentes</Heading
		>
		<Text class="text-text-muted text-base sm:text-lg">
			Resolvemos tus dudas más comunes
		</Text>

		<!-- Buscador -->
		<div class="mt-6 sm:mt-8 max-w-2xl">
			<input
				type="search"
				placeholder="Busca tu pregunta..."
				class="w-full px-4 py-3 rounded-lg border border-border-default min-h-[48px] text-base"
			/>
		</div>
	</div>
</section>

<!-- FAQ por Categorías -->
<section class="py-8 sm:py-12 md:py-16">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="space-y-6 sm:space-y-8">
			{#each faqCategories as category}
				<div>
					<Heading level="h2" class="mb-4 sm:mb-6 text-xl sm:text-2xl"
						>{category.title}</Heading
					>
					<div class="space-y-2">
						{#each category.items as item}
							{@const itemKey = `${category.title}-${item.question}`}
							<div
								class="border border-border-default rounded-lg overflow-hidden"
							>
								<button
									class="w-full flex items-center justify-between p-4 text-left hover:bg-surface-tertiary transition-colors"
									onclick={() => toggleItem(itemKey)}
								>
									<Text class="font-semibold"
										>{item.question}</Text
									>
									<svg
										class="w-5 h-5 text-text-muted transition-transform {openItems.has(
											itemKey,
										)
											? 'rotate-180'
											: ''}"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</button>
								{#if openItems.has(itemKey)}
									<div class="p-4 pt-0">
										<Text class="text-text-muted"
											>{item.answer}</Text
										>
									</div>
								{/if}
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<!-- Footer de Sección -->
		<Card padding="lg" class="mt-12 text-center">
			{#snippet children()}
				<Heading level="h3" class="mb-4"
					>¿No encuentras tu respuesta?</Heading
				>
				<Text class="mb-6 text-text-muted">
					Estamos aquí para ayudarte. Contacta con nosotros y
					resolveremos todas tus dudas.
				</Text>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<Button intent="primary" size="lg" href="/contacto">
						Contacta con nosotros
					</Button>
					<Text class="self-center text-text-muted">
						o llámanos: <Link
							href="tel:+34XXXXXXXXX"
							class="text-primary hover:underline font-semibold"
							>+34 XXX XXX XXX</Link
						>
					</Text>
				</div>
			{/snippet}
		</Card>
	</div>
</section>
