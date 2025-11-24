<script lang="ts">
	import {
		Heading,
		Text,
		Card,
		Button,
		Breadcrumb,
		Gallery,
		Tabs,
		Rating,
		Badge,
	} from "atomic-design-svelte";
	import { Link } from "atomic-design-svelte";

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
			"https://images.unsplash.com/photo-1503676260728-1c00e094b736?w=800&h=800&fit=crop&q=80",
			"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=800&fit=crop&q=80",
			"https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=800&fit=crop&q=80",
			"https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=800&fit=crop&q=80",
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
		return ((basePrice + optionsPrice) * quantity).toFixed(2);
	});

	const relatedProducts = [
		{
			name: "Agenda Escolar Básica",
			image: "https://images.unsplash.com/photo-1503676260728-1c00e094b736?w=400&h=400&fit=crop&q=80",
			href: "/producto/agenda-escolar-basica",
		},
		{
			name: "Agenda Universitaria Premium",
			image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop&q=80",
			href: "/producto/agenda-universitaria-premium",
		},
		{
			name: "Libreta Ejecutiva A5",
			image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop&q=80",
			href: "/producto/libreta-ejecutiva",
		},
		{
			name: "Cuaderno Personalizado",
			image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop&q=80",
			href: "/producto/cuaderno-personalizado",
		},
	];
</script>

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
				<div class="mb-3 sm:mb-4">
					<img
						src={product.images[selectedImageIndex]}
						alt={product.name}
						class="w-full h-auto rounded-lg border border-border-default aspect-square object-cover"
					/>
				</div>
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
								<div class="space-y-2">
									{#each product.formats as format}
										<label
											class="flex items-center gap-3 p-3 sm:p-4 border-2 rounded-lg cursor-pointer min-h-[60px] {selectedFormat.name ===
											format.name
												? 'border-primary bg-primary/5'
												: 'border-border-default'} transition-colors"
										>
											<input
												type="radio"
												name="format"
												value={format.name}
												checked={selectedFormat.name ===
													format.name}
												onchange={() =>
													(selectedFormat = format)}
												class="text-primary w-5 h-5"
											/>
											<div class="flex-1">
												<Text
													class="font-medium text-sm sm:text-base"
													>{format.name} ({format.size})</Text
												>
											</div>
											<Text
												class="font-semibold text-sm sm:text-base"
												>{format.price}</Text
											>
										</label>
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
										<label
											class="flex items-center justify-between p-3 sm:p-4 border border-border-default rounded-lg cursor-pointer hover:bg-surface-tertiary min-h-[56px] transition-colors"
										>
											<div
												class="flex items-center gap-3 flex-1"
											>
												<input
													type="checkbox"
													bind:checked={
														option.checked
													}
													class="rounded w-5 h-5"
												/>
												<Text
													class="text-sm sm:text-base"
													>{option.name}</Text
												>
											</div>
											<Text
												class="text-xs sm:text-sm text-text-muted ml-2"
												>{option.price}</Text
											>
										</label>
									{/each}
								</div>
							</div>
						</div>
					{/snippet}
				</Card>

				<!-- Cantidades y Presupuesto -->
				<Card padding="md sm:lg" class="mb-4 sm:mb-6">
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

				<!-- CTAs -->
				<div class="space-y-3">
					<Button
						intent="primary"
						size="lg"
						class="w-full min-h-[48px] text-base"
						href="/contacto"
					>
						Solicitar Presupuesto Personalizado
					</Button>
					<Button
						intent="secondary"
						size="lg"
						class="w-full min-h-[48px] text-base"
					>
						Descargar Ficha Técnica PDF
					</Button>
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
				<Card padding="md" class="hover:elevation-2 transition-all">
					{#snippet header()}
						<div
							class="aspect-square bg-surface-tertiary rounded-lg mb-4 flex items-center justify-center"
						>
							<Text class="text-text-muted text-sm">Imagen</Text>
						</div>
						<Heading level="h4" class="mb-2">{related.name}</Heading
						>
					{/snippet}
					{#snippet children()}
						<Button
							intent="secondary"
							size="sm"
							class="w-full"
							href={related.href}
						>
							Ver Detalles
						</Button>
					{/snippet}
				</Card>
			{/each}
		</div>
	</div>
</section>
