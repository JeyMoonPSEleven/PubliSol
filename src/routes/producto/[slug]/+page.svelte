<script lang="ts">
	import {
		Heading,
		Text,
		Card,
		Breadcrumb,
		Gallery,
		Tabs,
		Rating,
		Badge,
	} from "atomic-design-svelte";
	import { Link } from "atomic-design-svelte";
	import { onMount } from "svelte";
	import Lightbox from "$lib/components/magic-ui/Lightbox.svelte";
	import Drawer from "$lib/components/magic-ui/Drawer.svelte";
	import Seo from "$lib/components/Seo.svelte";
	import { Checkbox, Input } from "atomic-design-svelte";
	import PublisolButton from "$lib/components/atoms/PublisolButton.svelte";

	// Datos del producto (en producción vendría de una API)
	const product = {
		slug: "agenda-escolar-premium",
		name: "Agenda Escolar Personalizada Premium",
		category: "Agendas Escolares",
		rating: 4.8,
		reviews: 12,
		description:
			"Agenda escolar con cubierta resistente, 100% personalizable con el logo de tu centro. Papel de 90g certificado FSC.",
		features: [
			"Personalización total",
			"Papel reciclado FSC",
			"Cubierta resistente",
			"Entrega en 10-15 días",
		],
		images: [
			"/images/products/agenda-premium.png",
			"/images/products/libreta-ejecutiva.png",
			"/images/products/agenda-sostenible.png",
			"/images/products/kit-corporativo.png",
		],
		colors: [
			{ name: "Negro", value: "#000000", available: true },
			{ name: "Azul", value: "#1E3A8A", available: true },
			{ name: "Rojo", value: "#DC2626", available: true },
			{ name: "Verde", value: "#10B981", available: true },
			{ name: "Blanco", value: "#FFFFFF", available: true },
		],
		formats: [
			{ name: "A5", size: "148x210mm", price: "6.50€", selected: false },
			{ name: "A4", size: "210x297mm", price: "7.80€", selected: true },
		],
		options: [
			{
				name: "Marcapáginas integrado",
				price: "+0.50€/ud",
				checked: false,
			},
			{
				name: "Esquinas redondeadas",
				price: "+0.30€/ud",
				checked: false,
			},
			{ name: "Cierre elástico", price: "+0.80€/ud", checked: false },
		],
		pricing: [
			{ quantity: 50, price: "8.50€" },
			{ quantity: 100, price: "7.80€", current: true },
			{ quantity: 250, price: "6.90€" },
			{ quantity: 500, price: "Consultar" },
		],
		minQuantity: 50,
	};

	const breadcrumbItems = [
		{ label: "Inicio", href: "/" },
		{ label: "Productos", href: "/productos" },
		{
			label: product.category,
			href: `/productos/${product.category.toLowerCase().replace(/\s+/g, "-")}`,
		},
		{ label: product.name, href: `/producto/${product.slug}` },
	];

	let selectedColor = $state(product.colors[0]);
	let selectedFormat = $state(
		product.formats.find((f) => f.selected) || product.formats[0],
	);
	let quantity = $state(100);
	let selectedOptions = $state(product.options.map((o) => ({ ...o })));
	let selectedImageIndex = $state(0);
	let lightboxOpen = $state(false);
	let summarySticky = $state(false);
	let discountModalOpen = $state(false);
	let budgetFormOpen = $state(false);
	let fechaEntrega = $state("");
	let fechaError = $state<string | null>(null);
	
	// Opciones específicas para agendas
	const isAgenda = $derived(product.category === "Agendas Escolares");
	let opcionesAgenda = $state({
		pegatina: false,
		gomillas: false,
	});

	// Datos del formulario de presupuesto
	let budgetFormData = $state({
		nombre: "",
		email: "",
		telefono: "",
		empresa: "",
		observaciones: "",
		privacidad: false,
		newsletter: false,
	});

	let budgetFormErrors = $state<Record<string, string>>({});
	let budgetFormSubmitting = $state(false);
	let budgetFormSuccess = $state(false);

	// Validar fecha de entrega
	function validateFechaEntrega(fecha: string): boolean {
		if (!fecha) {
			fechaError = null;
			return true; // No es obligatorio
		}
		const fechaObj = new Date(fecha);
		const hoy = new Date();
		hoy.setHours(0, 0, 0, 0);
		
		if (fechaObj < hoy) {
			fechaError = "La fecha de entrega no puede ser anterior a hoy";
			return false;
		}
		
		// Mínimo 10 días laborables (aproximadamente 14 días naturales)
		const diasMinimos = 14;
		const fechaMinima = new Date(hoy);
		fechaMinima.setDate(hoy.getDate() + diasMinimos);
		
		if (fechaObj < fechaMinima) {
			fechaError = `La fecha de entrega debe ser al menos ${diasMinimos} días después de hoy (${fechaMinima.toLocaleDateString('es-ES')})`;
			return false;
		}
		
		fechaError = null;
		return true;
	}

	// Calcular descuentos
	const descuentos = $derived(() => {
		const descuentosAplicables = [];
		
		// Descuento por volumen
		if (quantity >= 500) {
			descuentosAplicables.push({ tipo: "Volumen", porcentaje: 15, descripcion: "Pedido de 500+ unidades" });
		} else if (quantity >= 250) {
			descuentosAplicables.push({ tipo: "Volumen", porcentaje: 10, descripcion: "Pedido de 250+ unidades" });
		} else if (quantity >= 100) {
			descuentosAplicables.push({ tipo: "Volumen", porcentaje: 5, descripcion: "Pedido de 100+ unidades" });
		}
		
		// Descuento por pronto pago (antes del 31 de marzo 2026)
		const fechaLimite = new Date("2026-03-31");
		const hoy = new Date();
		if (hoy < fechaLimite && fechaEntrega) {
			const fechaEntregaObj = new Date(fechaEntrega);
			if (fechaEntregaObj <= fechaLimite) {
				descuentosAplicables.push({ tipo: "Pronto pago", porcentaje: 8, descripcion: "Pedido antes del 31 de marzo 2026" });
			}
		}
		
		return descuentosAplicables;
	});

	const estimatedPrice = $derived(() => {
		const basePrice = parseFloat(
			selectedFormat.price.replace("€", "").replace(",", "."),
		);
		const optionsPrice = selectedOptions
			.filter((o) => o.checked)
			.reduce(
				(sum, o) =>
					sum +
					parseFloat(
						o.price
							.replace("+", "")
							.replace("€/ud", "")
							.replace(",", "."),
					),
				0,
			);
		
		// Añadir precio de opciones de agenda
		let agendaOptionsPrice = 0;
		if (isAgenda) {
			if (opcionesAgenda.pegatina) agendaOptionsPrice += 0.30;
			if (opcionesAgenda.gomillas) agendaOptionsPrice += 0.50;
		}
		
		const precioUnitario = basePrice + optionsPrice + agendaOptionsPrice;
		const subtotal = precioUnitario * quantity;
		
		// Aplicar descuentos
		let descuentoTotal = 0;
		descuentos().forEach(desc => {
			descuentoTotal += (subtotal * desc.porcentaje) / 100;
		});
		
		const precioFinal = subtotal - descuentoTotal;
		return {
			unitario: precioUnitario.toFixed(2),
			subtotal: subtotal.toFixed(2),
			descuento: descuentoTotal.toFixed(2),
			final: precioFinal.toFixed(2),
		};
	});

	const relatedProducts = [
		{
			name: "Agenda Escolar Básica",
			image: "/images/products/agenda-premium.png",
			href: "/producto/agenda-escolar-basica",
			price: "6.50€",
		},
		{
			name: "Agenda Universitaria Premium",
			image: "/images/products/agenda-sostenible.png",
			href: "/producto/agenda-universitaria-premium",
			price: "8.90€",
		},
		{
			name: "Libreta Ejecutiva A5",
			image: "/images/products/libreta-ejecutiva.png",
			href: "/producto/libreta-ejecutiva",
			price: "5.20€",
		},
		{
			name: "Cuaderno Personalizado",
			image: "/images/products/libreta-ejecutiva.png",
			href: "/producto/cuaderno-personalizado",
			price: "4.80€",
		},
	];

	// Sticky summary para desktop
	onMount(() => {
		function handleScroll() {
			const summaryElement = document.querySelector("[data-summary-card]");
			if (summaryElement) {
				const rect = summaryElement.getBoundingClientRect();
				summarySticky = rect.top <= 100 && window.innerWidth >= 1024;
			}
		}

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});
	
	// SEO dinámico basado en el producto
	const seoTitle = $derived(product ? `${product.name} - Publisol` : "Producto - Publisol");
	const seoDescription = $derived(product ? product.description || `Descubre ${product.name} en Publisol. Personalización de calidad para tu proyecto.` : "Producto personalizado de Publisol");
	const seoImage = $derived(product?.images?.[0] || "/images/hero/main-hero-bg.jpg");
	const seoUrl = $derived(product ? `/producto/${product.slug}` : "/productos");
</script>

<Seo
	title={seoTitle}
	description={seoDescription}
	image={seoImage}
	url={seoUrl}
/>

<!-- Hero del Producto -->
<section class="bg-surface-tertiary py-8">
	<div class="container mx-auto px-4">
		<Breadcrumb items={breadcrumbItems} />
	</div>
</section>

<!-- Layout Principal: Galería + Información -->
<section class="py-8 sm:py-12">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
			<!-- Columna Izquierda: Galería -->
			<div>
				<button
					type="button"
					class="mb-3 sm:mb-4 cursor-zoom-in w-full text-left p-0 border-0 bg-transparent relative"
					onclick={() => { lightboxOpen = true; }}
					onkeydown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); lightboxOpen = true; } }}
					aria-label="Abrir galería de imágenes en pantalla completa"
				>
					<img
						src={product.images[selectedImageIndex]}
						alt={product.name}
						class="w-full h-auto rounded-lg border border-border-default aspect-square object-cover hover:opacity-90 transition-opacity"
					/>
					<div class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
						<div class="bg-black/50 text-white px-4 py-2 rounded-lg text-sm">
							Click para ampliar
						</div>
					</div>
				</button>
				<div class="grid grid-cols-4 gap-2 sm:gap-3">
					{#each product.images as image, index}
						<button
							onclick={() => (selectedImageIndex = index)}
							class="border-2 rounded-lg overflow-hidden min-h-[60px] sm:min-h-[80px] {selectedImageIndex ===
							index
								? 'border-primary'
								: 'border-border-default'} transition-colors"
							aria-label={`Ver imagen ${index + 1} de ${product.name}`}
						>
							<img
								src={image}
								alt={`${product.name} - Vista ${index + 1}`}
								class="w-full h-full object-cover"
							/>
						</button>
					{/each}
				</div>
			</div>

			<!-- Columna Derecha: Información -->
			<div>
				<div class="mb-3 sm:mb-4">
					<Badge intent="primary">{product.category}</Badge>
				</div>

				<Heading
					level="h1"
					class="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl"
					>{product.name}</Heading
				>

				<div class="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
					<Rating value={product.rating} max={5} />
					<Text class="text-sm sm:text-base text-text-muted"
						>({product.reviews} valoraciones)</Text
					>
				</div>

				<Text class="text-base sm:text-lg mb-4 sm:mb-6"
					>{product.description}</Text
				>

				<!-- Características Destacadas -->
				<div
					class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8"
				>
					{#each product.features as feature}
						<div class="flex items-center gap-2">
							<span class="text-success text-lg">✓</span>
							<Text class="text-sm sm:text-base">{feature}</Text>
						</div>
					{/each}
				</div>

				<!-- Configurador -->
				<Card padding="md sm:lg" class="mb-4 sm:mb-6">
					{#snippet header()}
						<Heading
							level="h3"
							class="mb-3 sm:mb-4 text-lg sm:text-xl"
							>Configura tu producto</Heading
						>
					{/snippet}
					{#snippet children()}
						<div class="space-y-4 sm:space-y-6">
							<!-- Variantes de Color -->
							<div>
								<Text
									class="font-semibold mb-2 sm:mb-3 text-sm sm:text-base"
									>Color de cubierta:</Text
								>
								<div class="flex gap-2 sm:gap-3 flex-wrap">
									{#each product.colors as color}
										<button
											onclick={() =>
												(selectedColor = color)}
											class="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 min-w-[44px] min-h-[44px] {selectedColor.value ===
											color.value
												? 'border-primary scale-110'
												: 'border-border-default'} transition-all"
											style="background-color: {color.value};"
											aria-label={color.name}
										></button>
									{/each}
								</div>
							</div>

							<!-- Formato -->
							<div>
								<Text
									class="font-semibold mb-2 sm:mb-3 text-sm sm:text-base"
									>Formato:</Text
								>
								<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
									{#each product.formats as format}
										<button
											type="button"
											onclick={() => (selectedFormat = format)}
											class="relative p-4 border-2 rounded-lg cursor-pointer min-h-[80px] text-left transition-all hover:shadow-md {selectedFormat.name ===
											format.name
												? 'border-primary bg-primary/10 shadow-md ring-2 ring-primary/20'
												: 'border-border-default hover:border-primary/50'} group"
										>
											{#if selectedFormat.name === format.name}
												<div class="absolute top-2 right-2">
													<svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
														<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
													</svg>
												</div>
											{/if}
											<div class="flex-1">
												<Text
													class="font-semibold text-sm sm:text-base mb-1"
													>{format.name}</Text
												>
												<Text
													class="text-xs text-text-muted mb-2"
													>{format.size}</Text
												>
												<Text
													class="font-bold text-primary text-base"
													>{format.price}</Text
												>
											</div>
										</button>
									{/each}
								</div>
							</div>

							<!-- Opciones Adicionales -->
							<div>
								<Text
									class="font-semibold mb-2 sm:mb-3 text-sm sm:text-base"
									>Opciones adicionales:</Text
								>
								<div class="space-y-2">
									{#each selectedOptions as option, index}
										<button
											type="button"
											onclick={() => option.checked = !option.checked}
											class="w-full flex items-center justify-between p-3 sm:p-4 border-2 rounded-lg cursor-pointer min-h-[56px] transition-all hover:shadow-sm {option.checked
												? 'border-primary bg-primary/5'
												: 'border-border-default hover:border-primary/50'}"
										>
											<div
												class="flex items-center gap-3 flex-1"
											>
												<div class="w-5 h-5 border-2 rounded flex items-center justify-center {option.checked
													? 'border-primary bg-primary'
													: 'border-border-default'}">
													{#if option.checked}
														<svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
															<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
														</svg>
													{/if}
												</div>
												<Text
													class="text-sm sm:text-base"
													>{option.name}</Text
												>
											</div>
											<Text
												class="text-xs sm:text-sm font-semibold text-primary ml-2"
												>{option.price}</Text
											>
										</button>
									{/each}
								</div>
							</div>
						</div>
					{/snippet}
				</Card>

				<!-- Cantidades y Presupuesto -->
				<Card 
					padding="md sm:lg" 
					class="mb-4 sm:mb-6 lg:sticky lg:top-24"
					data-summary-card
				>
					{#snippet header()}
						<Text class="font-semibold text-sm sm:text-base"
							>Cantidad mínima: {product.minQuantity} unidades</Text
						>
					{/snippet}
					{#snippet children()}
						<div class="space-y-3 sm:space-y-4">
							<div>
								<label
									for="quantity"
									class="block text-sm font-medium mb-2"
									>Cantidad:</label
								>
								<input
									id="quantity"
									type="number"
									min={product.minQuantity}
									bind:value={quantity}
									class="w-full px-4 py-3 border border-border-default rounded-lg min-h-[48px] text-base"
									inputmode="numeric"
								/>
							</div>

							<div class="overflow-x-auto -mx-2 sm:mx-0">
								<table
									class="w-full border-collapse text-sm sm:text-base"
								>
									<thead>
										<tr class="bg-surface-tertiary">
											<th
												class="border border-border-default p-2 sm:p-3 text-left"
												>Uds</th
											>
											<th
												class="border border-border-default p-2 sm:p-3 text-left"
												>Precio/Unidad</th
											>
										</tr>
									</thead>
									<tbody>
										{#each product.pricing as price}
											<tr
												class={price.current
													? "bg-primary/10"
													: ""}
											>
												<td
													class="border border-border-default p-2 sm:p-3"
													>{price.quantity}</td
												>
												<td
													class="border border-border-default p-2 sm:p-3"
												>
													{price.price}
													{#if price.current}
														<span
															class="text-primary ml-2 text-xs sm:text-sm"
															>← Tu precio</span
														>
													{/if}
												</td>
											</tr>
										{/each}
									</tbody>
								</table>
							</div>

							<div
								class="pt-3 sm:pt-4 border-t border-border-default"
							>
								<Text
									class="text-base sm:text-lg font-semibold"
								>
									Precio estimado: {estimatedPrice}€ (IVA no
									incl.)
								</Text>
							</div>
						</div>
					{/snippet}
				</Card>

				<!-- Opciones específicas para agendas -->
				{#if isAgenda}
					<Card padding="md" class="mb-4 sm:mb-6">
						{#snippet header()}
							<Heading level="h3" class="mb-3 sm:mb-4 text-lg sm:text-xl">
								Opciones adicionales para agendas
							</Heading>
						{/snippet}
						{#snippet children()}
							<div class="space-y-3">
								<label class="flex items-center gap-3 cursor-pointer min-h-[48px] py-2">
									<Checkbox
										bind:checked={opcionesAgenda.pegatina}
										class="mt-1"
									/>
									<div class="flex-1">
										<Text class="font-medium">Pegatina personalizada</Text>
										<Text class="text-sm text-text-muted">+0.30€/unidad</Text>
									</div>
								</label>
								<label class="flex items-center gap-3 cursor-pointer min-h-[48px] py-2">
									<Checkbox
										bind:checked={opcionesAgenda.gomillas}
										class="mt-1"
									/>
									<div class="flex-1">
										<Text class="font-medium">Gomillas elásticas</Text>
										<Text class="text-sm text-text-muted">+0.50€/unidad</Text>
									</div>
								</label>
							</div>
						{/snippet}
					</Card>
				{/if}

				<!-- Fecha de entrega -->
				<Card padding="md" class="mb-4 sm:mb-6">
					{#snippet header()}
						<Heading level="h3" class="mb-3 sm:mb-4 text-lg sm:text-xl">
							Fecha de entrega
						</Heading>
					{/snippet}
					{#snippet children()}
						<div>
							<label
								for="fecha-entrega"
								class="block text-sm font-medium mb-2"
							>
								Fecha necesaria (aproximada)
							</label>
							<Input
								id="fecha-entrega"
								type="date"
								bindValue={fechaEntrega}
								onchange={() => validateFechaEntrega(fechaEntrega)}
								class="w-full min-h-[48px] text-base {fechaError
									? 'border-error focus:border-error focus:ring-error'
									: ''}"
								min={(() => {
									const minDate = new Date();
									minDate.setDate(minDate.getDate() + 14);
									return minDate.toISOString().split('T')[0];
								})()}
							/>
							{#if fechaError}
								<Text class="text-error text-xs mt-1">
									{fechaError}
								</Text>
							{:else if fechaEntrega}
								<Text class="text-success text-xs mt-1">
									Fecha válida. Plazo mínimo: 14 días laborables.
								</Text>
							{/if}
						</div>
					{/snippet}
				</Card>

				<!-- Información de descuentos -->
				{#if descuentos().length > 0}
					<Card padding="md" class="mb-4 sm:mb-6 border-2 border-primary/20">
						{#snippet header()}
							<Heading level="h3" class="mb-3 sm:mb-4 text-lg sm:text-xl text-primary">
								Descuentos aplicables
							</Heading>
						{/snippet}
						{#snippet children()}
							<div class="space-y-2">
								{#each descuentos() as desc}
									<div class="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
										<div>
											<Text class="font-semibold text-primary">{desc.tipo}</Text>
											<Text class="text-sm text-text-muted">{desc.descripcion}</Text>
										</div>
										<Text class="font-bold text-primary text-lg">
											-{desc.porcentaje}%
										</Text>
									</div>
								{/each}
							</div>
							<Button
								intent="secondary"
								size="sm"
								class="mt-4 w-full"
								onclick={() => (discountModalOpen = true)}
							>
								Ver más información sobre descuentos
							</Button>
						{/snippet}
					</Card>
				{/if}

				<!-- Resumen de precio estimado -->
				<Card padding="md" class="mb-4 sm:mb-6 bg-gradient-to-br from-primary/5 to-secondary/5">
					{#snippet header()}
						<Heading level="h3" class="mb-3 sm:mb-4 text-lg sm:text-xl">
							Precio estimado
						</Heading>
					{/snippet}
					{#snippet children()}
						<div class="space-y-2">
							<div class="flex justify-between">
								<Text>Precio unitario:</Text>
								<Text class="font-semibold">{estimatedPrice().unitario}€</Text>
							</div>
							<div class="flex justify-between">
								<Text>Subtotal ({quantity} unidades):</Text>
								<Text class="font-semibold">{estimatedPrice().subtotal}€</Text>
							</div>
							{#if parseFloat(estimatedPrice().descuento) > 0}
								<div class="flex justify-between text-success">
									<Text>Descuentos:</Text>
									<Text class="font-semibold">-{estimatedPrice().descuento}€</Text>
								</div>
							{/if}
							<div class="flex justify-between pt-2 border-t border-border-default">
								<Text class="font-bold text-lg">Total estimado:</Text>
								<Text class="font-bold text-lg text-primary">{estimatedPrice().final}€</Text>
							</div>
							<Text class="text-xs text-text-muted mt-2">
								* Precio estimado. El presupuesto final puede variar según especificaciones.
							</Text>
						</div>
					{/snippet}
				</Card>

				<!-- CTAs -->
				<div class="space-y-3">
					<PublisolButton
						text="Solicita Presupuesto"
						variant="primary"
						size="lg"
						onclick={() => (budgetFormOpen = true)}
						class="w-full"
					/>
					<PublisolButton
						text="Ver Productos"
						variant="secondary"
						size="lg"
						class="w-full"
					/>
					<Link
						href="/contacto"
						class="block text-center text-primary hover:underline text-sm py-2 min-h-[44px] flex items-center justify-center"
					>
						¿Necesitas ayuda? Contacta con un asesor
					</Link>
				</div>

				<!-- Información de Envío -->
				<Card padding="md" class="mt-6">
					{#snippet children()}
						<div class="space-y-4">
							<div>
								<Text class="font-semibold mb-2">📦 Envío:</Text
								>
								<ul
									class="text-sm text-text-muted space-y-1 ml-4"
								>
									<li>
										• España peninsular: 24-48h (en stock)
									</li>
									<li>
										• Producción personalizada: 10-15 días
										laborables
									</li>
									<li>
										• Consulta envíos a Canarias, Baleares,
										Ceuta y Melilla
									</li>
								</ul>
							</div>
							<div>
								<Text class="font-semibold mb-2"
									>🔒 Garantía:</Text
								>
								<ul
									class="text-sm text-text-muted space-y-1 ml-4"
								>
									<li>
										• Satisfacción garantizada o devolución
										del dinero
									</li>
									<li>
										• Revisión de muestra digital antes de
										producción
									</li>
								</ul>
							</div>
						</div>
					{/snippet}
				</Card>
			</div>
		</div>
	</div>
</section>

<!-- Tabs de Información -->
<section class="py-8 sm:py-12 bg-surface-tertiary">
	<div class="container mx-auto px-4 sm:px-6">
		<Tabs>
			{#snippet tabs()}
				<button data-tab="descripcion">Descripción Detallada</button>
				<button data-tab="especificaciones"
					>Especificaciones Técnicas</button
				>
				<button data-tab="personalizacion"
					>Área de Personalización</button
				>
				<button data-tab="opiniones">Opiniones de Clientes</button>
			{/snippet}

			{#snippet content()}
				<div data-tab-content="descripcion">
					<Heading level="h3" class="mb-4"
						>Descripción Detallada</Heading
					>
					<div class="space-y-4">
						<Text>
							La Agenda Escolar Personalizada Premium es el
							producto estrella de nuestra gama, diseñada
							específicamente para centros educativos que buscan
							calidad, durabilidad y personalización total.
						</Text>
						<Text>
							Fabricada con los mejores materiales y procesos
							certificados, esta agenda combina funcionalidad y
							diseño para acompañar a los estudiantes durante todo
							el curso académico.
						</Text>
						<Heading level="h4" class="mt-6 mb-3"
							>Materiales:</Heading
						>
						<ul class="list-disc space-y-2 ml-6">
							<li>
								<Text
									>Cubierta en cartón 300g plastificado de
									alta resistencia</Text
								>
							</li>
							<li>
								<Text
									>Papel interior de 90g offset blanco
									certificado FSC</Text
								>
							</li>
							<li>
								<Text
									>Encuadernación Wire-o con espiral metálico
									reforzado</Text
								>
							</li>
							<li>
								<Text
									>160 páginas (80 hojas) con diseño
									personalizado</Text
								>
							</li>
						</ul>
					</div>
				</div>

				<div data-tab-content="especificaciones">
					<Heading level="h3" class="mb-4"
						>Especificaciones Técnicas</Heading
					>
					<div class="overflow-x-auto">
						<table class="w-full border-collapse">
							<thead>
								<tr class="bg-surface-tertiary">
									<th
										class="border border-border-default p-3 text-left"
										>Característica</th
									>
									<th
										class="border border-border-default p-3 text-left"
										>Detalle</th
									>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td
										class="border border-border-default p-3 font-semibold"
										>Dimensiones</td
									>
									<td class="border border-border-default p-3"
										>210 x 297 mm (A4)</td
									>
								</tr>
								<tr>
									<td
										class="border border-border-default p-3 font-semibold"
										>Peso</td
									>
									<td class="border border-border-default p-3"
										>450g</td
									>
								</tr>
								<tr>
									<td
										class="border border-border-default p-3 font-semibold"
										>Páginas</td
									>
									<td class="border border-border-default p-3"
										>160 páginas (80 hojas)</td
									>
								</tr>
								<tr>
									<td
										class="border border-border-default p-3 font-semibold"
										>Papel interior</td
									>
									<td class="border border-border-default p-3"
										>90g offset blanco</td
									>
								</tr>
								<tr>
									<td
										class="border border-border-default p-3 font-semibold"
										>Encuadernación</td
									>
									<td class="border border-border-default p-3"
										>Wire-o / Espiral metálico</td
									>
								</tr>
								<tr>
									<td
										class="border border-border-default p-3 font-semibold"
										>Cubierta</td
									>
									<td class="border border-border-default p-3"
										>Cartón 300g plastificado</td
									>
								</tr>
								<tr>
									<td
										class="border border-border-default p-3 font-semibold"
										>Impresión cubierta</td
									>
									<td class="border border-border-default p-3"
										>Full color (CMYK)</td
									>
								</tr>
								<tr>
									<td
										class="border border-border-default p-3 font-semibold"
										>Área personalización</td
									>
									<td class="border border-border-default p-3"
										>180 x 250 mm</td
									>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<div data-tab-content="personalizacion">
					<Heading level="h3" class="mb-4"
						>Área de Personalización</Heading
					>
					<div class="space-y-4">
						<Text>
							El área de personalización está claramente
							delimitada en la cubierta de la agenda, permitiendo
							incluir el logo, nombre del centro y cualquier
							diseño personalizado.
						</Text>
						<div
							class="bg-surface-tertiary p-6 rounded-lg border-2 border-dashed border-primary"
						>
							<Text class="text-center text-text-muted">
								[Diagrama visual mostrando zona imprimible: 180
								x 250 mm]
							</Text>
						</div>
						<Heading level="h4" class="mt-6 mb-3"
							>Formatos de archivo aceptados:</Heading
						>
						<ul class="list-disc space-y-2 ml-6">
							<li><Text>.AI (Adobe Illustrator)</Text></li>
							<li><Text>.PDF (Alta resolución)</Text></li>
							<li><Text>.EPS (Encapsulated PostScript)</Text></li>
							<li><Text>.PNG (Mínimo 300 DPI)</Text></li>
						</ul>
						<Heading level="h4" class="mt-6 mb-3"
							>Requisitos técnicos:</Heading
						>
						<ul class="list-disc space-y-2 ml-6">
							<li><Text>Resolución mínima: 300 DPI</Text></li>
							<li>
								<Text
									>Formato de color: CMYK para impresión</Text
								>
							</li>
							<li>
								<Text
									>Colores Pantone disponibles bajo consulta</Text
								>
							</li>
							<li>
								<Text>Bordes de seguridad: 3mm adicionales</Text
								>
							</li>
						</ul>
					</div>
				</div>

				<div data-tab-content="opiniones">
					<Heading level="h3" class="mb-4"
						>Opiniones de Clientes</Heading
					>
					<div class="space-y-6">
						<Card padding="md">
							<div class="flex items-start gap-4">
								<div
									class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center"
								>
									<Text class="font-semibold">MG</Text>
								</div>
								<div class="flex-1">
									<Text class="font-semibold mb-1"
										>Colegio Santa María</Text
									>
									<Rating value={5} max={5} class="mb-2" />
									<Text class="text-text-muted italic mb-2">
										"Excelente calidad y servicio. Las
										agendas quedaron perfectas y los alumnos
										están encantados. Repetiremos sin duda."
									</Text>
									<Text class="text-sm text-text-muted"
										>— María González, Directora</Text
									>
								</div>
							</div>
						</Card>

						<Card padding="md">
							<div class="flex items-start gap-4">
								<div
									class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center"
								>
									<Text class="font-semibold">JR</Text>
								</div>
								<div class="flex-1">
									<Text class="font-semibold mb-1"
										>Instituto San José</Text
									>
									<Rating value={5} max={5} class="mb-2" />
									<Text class="text-text-muted italic mb-2">
										"Profesionalismo y calidad excepcional.
										El proceso de personalización fue muy
										sencillo y el resultado superó nuestras
										expectativas."
									</Text>
									<Text class="text-sm text-text-muted"
										>— Juan Rodríguez, Jefe de Estudios</Text
									>
								</div>
							</div>
						</Card>
					</div>
				</div>
			{/snippet}
		</Tabs>
	</div>
</section>

<!-- Productos Relacionados -->
<section class="py-8 sm:py-12">
	<div class="container mx-auto px-4 sm:px-6">
		<Heading level="h2" class="mb-6 sm:mb-8 text-2xl sm:text-3xl"
			>También te puede interesar</Heading
		>
		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
		>
			{#each relatedProducts as related}
				<Card padding="md" class="hover:elevation-2 transition-all group">
					{#snippet header()}
						<div
							class="aspect-square bg-surface-tertiary rounded-lg mb-4 overflow-hidden relative"
						>
							<img
								src={related.image}
								alt={related.name}
								class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
							/>
						</div>
						<Heading level="h4" class="mb-1">{related.name}</Heading
						>
						<Text class="text-sm text-primary font-semibold mb-3">{related.price}</Text>
					{/snippet}
					{#snippet children()}
						<div class="flex gap-2">
							<PublisolButton
								text="Ver Productos"
								variant="secondary"
								size="sm"
								href={related.href}
								class="flex-1"
							/>
							<PublisolButton
								text="Contáctanos"
								variant="primary"
								size="sm"
								onclick={() => {
									// Simular añadir al presupuesto
									console.log("Añadido al presupuesto:", related.name);
									// Aquí se podría abrir un modal o actualizar un estado global
								}}
								class="flex-1"
							/>
						</div>
					{/snippet}
				</Card>
			{/each}
		</div>
	</div>
</section>

<!-- Lightbox para galería -->
<Lightbox 
	bind:open={lightboxOpen}
	bind:currentIndex={selectedImageIndex}
	images={product.images}
	onNavigate={(index) => selectedImageIndex = index}
/>

<!-- Modal de Información de Descuentos -->
{#if discountModalOpen}
	<div
		class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
		onclick={() => (discountModalOpen = false)}
		role="dialog"
		aria-modal="true"
		aria-labelledby="discount-modal-title"
	>
		<div
			class="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
			onclick={(e) => e.stopPropagation()}
		>
			<div class="p-6">
				<div class="flex items-center justify-between mb-4">
					<Heading level="h2" id="discount-modal-title" class="text-2xl">
						Información de Descuentos
					</Heading>
					<button
						onclick={() => (discountModalOpen = false)}
						class="p-2 hover:bg-surface-tertiary rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
						aria-label="Cerrar"
					>
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<div class="space-y-4">
					<Card padding="md" class="border-2 border-primary/20">
						<Heading level="h3" class="mb-2 text-lg">Descuento por Volumen</Heading>
						<ul class="list-disc space-y-2 ml-6 text-sm text-text-muted">
							<li>100-249 unidades: 5% de descuento</li>
							<li>250-499 unidades: 10% de descuento</li>
							<li>500+ unidades: 15% de descuento</li>
						</ul>
					</Card>
					<Card padding="md" class="border-2 border-primary/20">
						<Heading level="h3" class="mb-2 text-lg">Descuento por Pronto Pago</Heading>
						<Text class="text-sm text-text-muted mb-2">
							Pedidos confirmados antes del 31 de marzo de 2026: 8% de descuento adicional.
						</Text>
						<Text class="text-xs text-text-muted">
							Los descuentos son acumulables. El descuento máximo aplicable es del 23% (15% volumen + 8% pronto pago).
						</Text>
					</Card>
				</div>
			</div>
		</div>
	</div>
{/if}

<!-- Modal de Formulario de Presupuesto -->
{#if budgetFormOpen}
	<div
		class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
		onclick={() => (budgetFormOpen = false)}
		role="dialog"
		aria-modal="true"
		aria-labelledby="budget-form-title"
	>
		<div
			class="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
			onclick={(e) => e.stopPropagation()}
		>
			<div class="p-6">
				<div class="flex items-center justify-between mb-6">
					<Heading level="h2" id="budget-form-title" class="text-2xl">
						Solicitar Presupuesto
					</Heading>
					<button
						onclick={() => (budgetFormOpen = false)}
						class="p-2 hover:bg-surface-tertiary rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
						aria-label="Cerrar"
					>
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>

				{#if budgetFormSuccess}
					<div class="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg">
						<Text class="text-success font-semibold">
							¡Solicitud enviada correctamente! Te responderemos en menos de 48 horas.
						</Text>
					</div>
				{:else}
					<form
						onsubmit={async (e) => {
							e.preventDefault();
							budgetFormErrors = {};
							
							if (!budgetFormData.nombre.trim()) {
								budgetFormErrors.nombre = "El nombre es obligatorio";
							}
							if (!budgetFormData.email.trim()) {
								budgetFormErrors.email = "El email es obligatorio";
							} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(budgetFormData.email)) {
								budgetFormErrors.email = "El email no es válido";
							}
							if (!budgetFormData.telefono.trim()) {
								budgetFormErrors.telefono = "El teléfono es obligatorio";
							}
							if (!budgetFormData.privacidad) {
								budgetFormErrors.privacidad = "Debes aceptar la política de privacidad";
							}
							
							if (Object.keys(budgetFormErrors).length > 0) {
								return;
							}
							
							budgetFormSubmitting = true;
							
							// Preparar datos del presupuesto
							const budgetData = {
								...budgetFormData,
								producto: product.name,
								categoria: product.category,
								cantidad: quantity,
								formato: selectedFormat.name,
								color: selectedColor.name,
								opciones: selectedOptions.filter(o => o.checked).map(o => o.name),
								opcionesAgenda: isAgenda ? {
									pegatina: opcionesAgenda.pegatina,
									gomillas: opcionesAgenda.gomillas,
								} : null,
								fechaEntrega: fechaEntrega || "",
								precioEstimado: estimatedPrice().final,
								descuentos: descuentos(),
							};
							
							// Simular envío (en producción usar sendContactEmail)
							await new Promise(resolve => setTimeout(resolve, 1500));
							
							budgetFormSuccess = true;
							budgetFormSubmitting = false;
							
							setTimeout(() => {
								budgetFormOpen = false;
								budgetFormSuccess = false;
								budgetFormData = {
									nombre: "",
									email: "",
									telefono: "",
									empresa: "",
									observaciones: "",
									privacidad: false,
									newsletter: false,
								};
							}, 3000);
						}}
						class="space-y-4"
					>
						<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<div>
								<label for="budget-nombre" class="block text-sm font-medium mb-2">
									Nombre / Centro <span class="text-error">*</span>
								</label>
								<Input
									id="budget-nombre"
									type="text"
									bindValue={budgetFormData.nombre}
									required
									class="w-full min-h-[48px] text-base {budgetFormErrors.nombre
										? 'border-error focus:border-error focus:ring-error'
										: ''}"
								/>
								{#if budgetFormErrors.nombre}
									<Text class="text-error text-xs mt-1">{budgetFormErrors.nombre}</Text>
								{/if}
							</div>
							<div>
								<label for="budget-empresa" class="block text-sm font-medium mb-2">
									Empresa / Centro educativo
								</label>
								<Input
									id="budget-empresa"
									type="text"
									bindValue={budgetFormData.empresa}
									class="w-full min-h-[48px] text-base"
								/>
							</div>
						</div>

						<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<div>
								<label for="budget-email" class="block text-sm font-medium mb-2">
									Email <span class="text-error">*</span>
								</label>
								<Input
									id="budget-email"
									type="email"
									bindValue={budgetFormData.email}
									required
									class="w-full min-h-[48px] text-base {budgetFormErrors.email
										? 'border-error focus:border-error focus:ring-error'
										: ''}"
								/>
								{#if budgetFormErrors.email}
									<Text class="text-error text-xs mt-1">{budgetFormErrors.email}</Text>
								{/if}
							</div>
							<div>
								<label for="budget-telefono" class="block text-sm font-medium mb-2">
									Teléfono <span class="text-error">*</span>
								</label>
								<Input
									id="budget-telefono"
									type="tel"
									bindValue={budgetFormData.telefono}
									required
									class="w-full min-h-[48px] text-base {budgetFormErrors.telefono
										? 'border-error focus:border-error focus:ring-error'
										: ''}"
								/>
								{#if budgetFormErrors.telefono}
									<Text class="text-error text-xs mt-1">{budgetFormErrors.telefono}</Text>
								{/if}
							</div>
						</div>

						<div>
							<label for="budget-observaciones" class="block text-sm font-medium mb-2">
								Observaciones técnicas
							</label>
							<Textarea
								id="budget-observaciones"
								bindValue={budgetFormData.observaciones}
								rows="4"
								class="w-full min-h-[120px] text-base resize-y"
								placeholder="Especificaciones adicionales, requisitos especiales..."
							/>
						</div>

						<div class="space-y-3">
							<label class="flex items-start gap-3 cursor-pointer min-h-[48px] py-2 {budgetFormErrors.privacidad
								? 'text-error'
								: ''}">
								<Checkbox
									bind:checked={budgetFormData.privacidad}
									required
									class="mt-1 {budgetFormErrors.privacidad
										? 'border-error'
										: ''}"
								/>
								<Text class="text-sm leading-relaxed">
									He leído y acepto la <a
										href="/privacidad"
										target="_blank"
										class="text-primary hover:underline"
									>política de privacidad</a> <span class="text-error">*</span>
								</Text>
							</label>
							{#if budgetFormErrors.privacidad}
								<Text class="text-error text-xs ml-8">{budgetFormErrors.privacidad}</Text>
							{/if}
							<label class="flex items-start gap-3 cursor-pointer min-h-[48px] py-2">
								<Checkbox
									bind:checked={budgetFormData.newsletter}
									class="mt-1"
								/>
								<Text class="text-sm leading-relaxed">
									Quiero recibir novedades y ofertas
								</Text>
							</label>
						</div>

						<div class="pt-4 border-t border-border-default">
							<div class="bg-surface-tertiary p-4 rounded-lg mb-4">
								<Text class="font-semibold mb-2">Resumen del presupuesto:</Text>
								<div class="space-y-1 text-sm">
									<Text>Producto: {product.name}</Text>
									<Text>Cantidad: {quantity} unidades</Text>
									<Text>Formato: {selectedFormat.name}</Text>
									<Text>Color: {selectedColor.name}</Text>
									{#if descuentos().length > 0}
										<Text class="text-success">
											Descuentos: {descuentos().map(d => `${d.porcentaje}% ${d.tipo}`).join(', ')}
										</Text>
									{/if}
									<Text class="font-bold text-lg text-primary mt-2">
										Precio estimado: {estimatedPrice().final}€
									</Text>
								</div>
							</div>
							<Button
								type="submit"
								intent="primary"
								size="lg"
								class="w-full min-h-[48px] text-base"
								disabled={budgetFormSubmitting}
							>
								{#if budgetFormSubmitting}
									<span class="flex items-center gap-2">
										<svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
											<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
											<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
										</svg>
										Enviando...
									</span>
								{:else}
									Enviar Solicitud de Presupuesto
								{/if}
							</Button>
						</div>
					</form>
				{/if}
			</div>
		</div>
	</div>
{/if}
