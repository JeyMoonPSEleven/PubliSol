<script lang="ts">
	import { Heading, Text, Input, Textarea, Button, Select, Checkbox } from "atomic-design-svelte";
	import ScrollReveal from "$lib/components/atoms/ScrollReveal.svelte";
	import { Mail, User, Package, MessageSquare, ChevronDown } from "lucide-svelte";
	import { sendContactEmail } from "$lib/utils/emailService";
	import type { ContactFormData } from "$lib/utils/emailService";

	// Tipos de productos
	const agendaTypes = [
		{ value: "agenda-clasica", label: "Agenda Clásica" },
		{ value: "agenda-dia-pagina", label: "Agenda Día Página" },
		{ value: "agenda-doble-pagina", label: "Agendas de Doble Página" },
		{ value: "agenda-personalizada", label: "Agendas Personalizadas" },
	];

	const textilTypes = [
		{ value: "sublimacion", label: "Sublimación" },
		{ value: "dtf", label: "DTF" },
		{ value: "laser", label: "Laser" },
		{ value: "serigrafia", label: "Serigrafía" },
		{ value: "digital-directa", label: "Digital Directa" },
	];

	let categoriaProducto = $state<"agenda" | "textil" | "">("");
	let tipoProducto = $state("");
	let opcionesAgenda = $state({
		gomillas: false,
		pegatinas: false,
	});

	// Opciones predefinidas de unidades
	const unidadesOpciones = [
		{ value: "10", label: "10 unidades" },
		{ value: "50", label: "50 unidades" },
		{ value: "100", label: "100 unidades" },
		{ value: "200", label: "200 unidades" },
		{ value: "personalizada", label: "Personalizada" },
	];
	let unidadSeleccionada = $state("");
	let cantidadPersonalizada = $state("");

	let formData = $state<ContactFormData>({
		nombre: "",
		email: "",
		cantidad: "",
		mensaje: "",
		telefono: "",
		empresa: "",
		tipoProyecto: "",
		fechaNecesaria: "",
		privacidad: false,
		newsletter: false,
	});

	// Actualizar tipoProyecto cuando cambia la categoría
	$effect(() => {
		if (categoriaProducto && tipoProducto) {
			formData.tipoProyecto = `${categoriaProducto === "agenda" ? "Agenda" : "Textil"}: ${categoriaProducto === "agenda" ? agendaTypes.find(t => t.value === tipoProducto)?.label : textilTypes.find(t => t.value === tipoProducto)?.label}`;
		}
	});

	let errors = $state<Record<string, string>>({});
	let isSubmitting = $state(false);
	let submitSuccess = $state(false);

	function validateEmail(email: string): boolean {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	}

	function validateForm(): boolean {
		errors = {};

		if (!formData.nombre.trim()) {
			errors.nombre = "El nombre es obligatorio";
		}

		if (!formData.email.trim()) {
			errors.email = "El email es obligatorio";
		} else if (!validateEmail(formData.email)) {
			errors.email = "El email no es válido";
		}

		if (!categoriaProducto) {
			errors.categoria = "Debes seleccionar una categoría de producto";
		}

		if (!tipoProducto) {
			errors.tipoProducto = "Debes seleccionar un tipo de producto";
		}

		// Validar unidades: debe haber seleccionado una opción o tener cantidad personalizada
		if (!unidadSeleccionada) {
			errors.cantidad = "Debes seleccionar una cantidad";
		} else if (unidadSeleccionada === "personalizada") {
			if (!cantidadPersonalizada.trim()) {
				errors.cantidad = "Debes ingresar una cantidad personalizada";
			} else if (isNaN(Number(cantidadPersonalizada)) || Number(cantidadPersonalizada) < 1) {
				errors.cantidad = "Debe ser un número válido mayor a 0";
			} else {
				formData.cantidad = cantidadPersonalizada;
			}
		} else {
			formData.cantidad = unidadSeleccionada;
		}

		if (!formData.privacidad) {
			errors.privacidad = "Debes aceptar la política de privacidad";
		}

		return Object.keys(errors).length === 0;
	}

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();

		if (!validateForm()) {
			return;
		}

		isSubmitting = true;

		try {
			const result = await sendContactEmail(formData);
			if (result.success) {
				submitSuccess = true;
				// Reset form
				categoriaProducto = "";
				tipoProducto = "";
				opcionesAgenda = { gomillas: false, pegatinas: false };
				unidadSeleccionada = "";
				cantidadPersonalizada = "";
				formData = {
					nombre: "",
					email: "",
					cantidad: "",
					mensaje: "",
					telefono: "",
					empresa: "",
					tipoProyecto: "",
					fechaNecesaria: "",
					privacidad: false,
					newsletter: false,
				};
				// Reset success message after 5 seconds
				setTimeout(() => {
					submitSuccess = false;
				}, 5000);
			} else {
				errors.submit = result.message || "Error al enviar el formulario";
			}
		} catch (error) {
			errors.submit = "Error al enviar el formulario. Por favor, inténtalo de nuevo.";
		} finally {
			isSubmitting = false;
		}
	}

		// Clear errors when field is corrected
	$effect(() => {
		if (formData.nombre && errors.nombre) delete errors.nombre;
		if (formData.email && validateEmail(formData.email) && errors.email)
			delete errors.email;
		if (categoriaProducto && errors.categoria) delete errors.categoria;
		if (tipoProducto && errors.tipoProducto) delete errors.tipoProducto;
		if (formData.cantidad && !isNaN(Number(formData.cantidad)) && Number(formData.cantidad) > 0 && errors.cantidad)
			delete errors.cantidad;
		if (formData.privacidad && errors.privacidad) delete errors.privacidad;
	});

	// Añadir opciones de agenda al mensaje
	$effect(() => {
		if (categoriaProducto === "agenda" && (opcionesAgenda.gomillas || opcionesAgenda.pegatinas)) {
			const opciones = [];
			if (opcionesAgenda.gomillas) opciones.push("Gomillas elásticas");
			if (opcionesAgenda.pegatinas) opciones.push("Pegatinas personalizadas");
			if (formData.mensaje && !formData.mensaje.includes("Opciones:")) {
				formData.mensaje += `\n\nOpciones seleccionadas: ${opciones.join(", ")}`;
			}
		}
	});
</script>

<section
	id="lead-capture"
	class="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary/5 via-white to-secondary/5"
	aria-labelledby="lead-capture-heading"
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<ScrollReveal animation="fly" direction="up" delay={0}>
			{#snippet children()}
				<div class="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
					<Heading
						id="lead-capture-heading"
						level="h2"
						class="mb-4 text-2xl sm:text-3xl md:text-4xl"
					>
						Solicita tu presupuesto personalizado
					</Heading>
					<Text
						class="text-lg text-text-muted max-w-2xl mx-auto"
					>
						Completa el formulario y recibirás un presupuesto personalizado en menos de 48 horas. Ideal para centros educativos y AMPAs.
					</Text>
				</div>
			{/snippet}
		</ScrollReveal>

		<div class="max-w-2xl mx-auto">
			{#if submitSuccess}
				<ScrollReveal animation="scale" delay={0}>
					{#snippet children()}
						<div
							class="mb-6 p-6 bg-success/10 border-2 border-success/20 rounded-xl"
						>
							<div class="flex items-center gap-3">
								<svg
									class="w-6 h-6 text-success flex-shrink-0"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								<div>
									<Text class="text-success font-semibold text-lg mb-1">
										¡Formulario enviado correctamente!
									</Text>
									<Text class="text-success/80 text-sm">
										Te responderemos en menos de 48 horas con tu presupuesto personalizado.
									</Text>
								</div>
							</div>
						</div>
					{/snippet}
				</ScrollReveal>
			{/if}

			{#if errors.submit}
				<div
					class="mb-6 p-4 bg-error/10 border border-error/20 rounded-lg"
				>
					<Text class="text-error text-sm">{errors.submit}</Text>
				</div>
			{/if}

			<form
				onsubmit={handleSubmit}
				class="space-y-6"
				novalidate
			>
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
					<div>
						<label
							for="lead-nombre"
							class="block text-sm font-medium mb-2 text-text-default"
						>
							Nombre / Centro <span class="text-error">*</span>
						</label>
						<div class="relative">
							<User
								class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted"
								aria-hidden="true"
							/>
							<Input
								id="lead-nombre"
								type="text"
								bindValue={formData.nombre}
								required
								class="w-full pl-10 min-h-[48px] text-base {errors.nombre
									? 'border-error focus:border-error focus:ring-error'
									: ''}"
								placeholder="Tu nombre o nombre del centro"
								aria-label="Nombre o centro educativo"
							/>
						</div>
						{#if errors.nombre}
							<Text
								class="text-error text-xs mt-1 flex items-center gap-1"
							>
								<svg
									class="w-4 h-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								{errors.nombre}
							</Text>
						{/if}
					</div>

					<div>
						<label
							for="lead-email"
							class="block text-sm font-medium mb-2 text-text-default"
						>
							Email <span class="text-error">*</span>
						</label>
						<div class="relative">
							<Mail
								class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted"
								aria-hidden="true"
							/>
							<Input
								id="lead-email"
								type="email"
								bindValue={formData.email}
								required
								class="w-full pl-10 min-h-[48px] text-base {errors.email
									? 'border-error focus:border-error focus:ring-error'
									: ''}"
								placeholder="tu@email.com"
								inputmode="email"
								aria-label="Dirección de correo electrónico"
							/>
						</div>
						{#if errors.email}
							<Text
								class="text-error text-xs mt-1 flex items-center gap-1"
							>
								<svg
									class="w-4 h-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								{errors.email}
							</Text>
						{/if}
					</div>
				</div>

				<!-- Categoría de Producto -->
				<div>
					<label
						for="lead-categoria"
						class="block text-sm font-medium mb-2 text-text-default"
					>
						Tipo de Producto <span class="text-error">*</span>
					</label>
					<Select
						id="lead-categoria"
						bindValue={categoriaProducto}
						required
						class="w-full min-h-[48px] text-base {errors.categoria
							? 'border-error focus:border-error focus:ring-error'
							: ''}"
						aria-label="Seleccionar categoría de producto"
					>
						<option value="">Selecciona una categoría</option>
						<option value="agenda">Agendas Escolares</option>
						<option value="textil">Textil Corporativo</option>
					</Select>
					{#if errors.categoria}
						<Text
							class="text-error text-xs mt-1 flex items-center gap-1"
						>
							<svg
								class="w-4 h-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							{errors.categoria}
						</Text>
					{/if}
				</div>

				<!-- Tipo específico según categoría -->
				{#if categoriaProducto}
					<div>
						<label
							for="lead-tipo-producto"
							class="block text-sm font-medium mb-2 text-text-default"
						>
							{categoriaProducto === "agenda" ? "Tipo de Agenda" : "Técnica de Impresión"} <span class="text-error">*</span>
						</label>
						<Select
							id="lead-tipo-producto"
							bindValue={tipoProducto}
							required
							class="w-full min-h-[48px] text-base"
							aria-label="Seleccionar tipo de producto"
						>
							<option value="">Selecciona un tipo</option>
							{#if categoriaProducto === "agenda"}
								{#each agendaTypes as type}
									<option value={type.value}>{type.label}</option>
								{/each}
							{:else}
								{#each textilTypes as type}
									<option value={type.value}>{type.label}</option>
								{/each}
							{/if}
						</Select>
					</div>
				{/if}

				<!-- Opciones específicas para Agendas -->
				{#if categoriaProducto === "agenda" && tipoProducto}
					<div class="space-y-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
						<Text class="text-sm font-semibold mb-3 text-text-default">Opciones adicionales para agendas:</Text>
						<label class="flex items-center gap-3 cursor-pointer min-h-[48px] py-2">
							<Checkbox bind:checked={opcionesAgenda.gomillas} />
							<Text class="text-sm leading-relaxed">Añadir gomillas elásticas (+0.50€/ud)</Text>
						</label>
						<label class="flex items-center gap-3 cursor-pointer min-h-[48px] py-2">
							<Checkbox bind:checked={opcionesAgenda.pegatinas} />
							<Text class="text-sm leading-relaxed">Añadir pegatinas personalizadas (+0.30€/ud)</Text>
						</label>
					</div>
				{/if}

				<div>
					<label
						for="lead-cantidad"
						class="block text-sm font-medium mb-2 text-text-default"
					>
						Unidades estimadas <span class="text-error">*</span>
					</label>
					<div class="space-y-3">
						<div class="relative">
							<Package
								class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted z-10"
								aria-hidden="true"
							/>
							<Select
								id="lead-cantidad"
								bindValue={unidadSeleccionada}
								required
								class="w-full pl-10 min-h-[48px] text-base {errors.cantidad
									? 'border-error focus:border-error focus:ring-error'
									: ''}"
								aria-label="Selecciona cantidad de unidades estimadas"
							>
								<option value="">Selecciona una cantidad...</option>
								{#each unidadesOpciones as opcion}
									<option value={opcion.value}>{opcion.label}</option>
								{/each}
							</Select>
						</div>
						{#if unidadSeleccionada === "personalizada"}
							<div class="relative">
								<Package
									class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted"
									aria-hidden="true"
								/>
								<Input
									id="lead-cantidad-personalizada"
									type="number"
									bindValue={cantidadPersonalizada}
									required
									min="1"
									class="w-full pl-10 min-h-[48px] text-base {errors.cantidad
										? 'border-error focus:border-error focus:ring-error'
										: ''}"
									placeholder="Ej: 350"
									inputmode="numeric"
									aria-label="Cantidad personalizada de unidades"
								/>
							</div>
						{/if}
					</div>
					{#if errors.cantidad}
						<Text
							class="text-error text-xs mt-1 flex items-center gap-1"
						>
							<svg
								class="w-4 h-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							{errors.cantidad}
						</Text>
					{/if}
				</div>

				<div>
					<label
						for="lead-mensaje"
						class="block text-sm font-medium mb-2 text-text-default"
					>
						Observaciones técnicas
					</label>
					<div class="relative">
						<MessageSquare
							class="absolute left-3 top-3 w-5 h-5 text-text-muted"
							aria-hidden="true"
						/>
						<Textarea
							id="lead-mensaje"
							bindValue={formData.mensaje}
							rows="4"
							class="w-full pl-10 min-h-[120px] text-base resize-y"
							placeholder="Cuéntanos sobre tu proyecto, necesidades específicas, fechas importantes..."
							aria-label="Observaciones técnicas del proyecto"
						/>
					</div>
				</div>

				<div class="flex items-start gap-3">
					<input
						type="checkbox"
						id="lead-privacidad"
						bind:checked={formData.privacidad}
						required
						class="mt-1 w-5 h-5 rounded border-border-default text-primary focus:ring-2 focus:ring-primary {errors.privacidad
							? 'border-error'
							: ''}"
						aria-label="Aceptar política de privacidad"
					/>
					<label
						for="lead-privacidad"
						class="text-sm text-text-muted leading-relaxed flex-1 {errors.privacidad
							? 'text-error'
							: ''}"
					>
						Acepto el tratamiento de mis datos personales según la <a
							href="/privacidad"
							target="_blank"
							class="text-primary hover:underline"
						>política de privacidad</a> <span class="text-error">*</span>
					</label>
				</div>
				{#if errors.privacidad}
					<Text
						class="text-error text-xs ml-8 flex items-center gap-1"
					>
						<svg
							class="w-4 h-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						{errors.privacidad}
					</Text>
				{/if}

				<Button
					type="submit"
					intent="primary"
					size="lg"
					class="w-full min-h-[56px] text-base font-semibold"
					disabled={isSubmitting}
					aria-label="Enviar solicitud de presupuesto"
				>
					{#if isSubmitting}
						<span class="flex items-center gap-2">
							<svg
								class="animate-spin h-5 w-5"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									class="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									stroke-width="4"
								></circle>
								<path
									class="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								></path>
							</svg>
							Enviando...
						</span>
					{:else}
						Solicitar Presupuesto Gratis
					{/if}
				</Button>
			</form>
		</div>
	</div>
</section>
