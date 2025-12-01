<script lang="ts">
	import {
		Heading,
		Text,
		Card,
		Button,
		Form,
		Input,
		Select,
		Textarea,
		Checkbox,
		Link,
	} from "atomic-design-svelte";
	import { Breadcrumb } from "atomic-design-svelte";
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import ShimmerButton from "$lib/components/magic-ui/ShimmerButton.svelte";
	import AnimatedGridPattern from "$lib/components/magic-ui/AnimatedGridPattern.svelte";
	import FormWizard from "$lib/components/magic-ui/FormWizard.svelte";
	import Seo from "$lib/components/Seo.svelte";
	import {
		MapPin,
		Phone,
		Mail,
		Clock,
		Truck,
		Globe,
		Package,
		Zap,
	} from "lucide-svelte";

	let currentStep = $state(0);

	const breadcrumbItems = [
		{ label: "Inicio", href: "/" },
		{ label: "Contacto", href: "/contacto" },
	];

	let formData = $state({
		nombre: "",
		apellidos: "",
		email: "",
		telefono: "",
		empresa: "",
		tipoProyecto: "",
		cantidad: "",
		fechaNecesaria: "",
		mensaje: "",
		privacidad: false,
		newsletter: false,
	});

	let errors = $state<Record<string, string>>({});
	let isSubmitting = $state(false);
	let submitSuccess = $state(false);
	
	// Pre-llenar formulario desde query param
	let productoParam = $derived($page.url.searchParams.get('producto') || '');
	
	$effect(() => {
		if (productoParam) {
			formData.tipoProyecto = productoParam;
			formData.mensaje = `Hola, estoy interesado en ${productoParam}. Me gustaría recibir más información y un presupuesto personalizado.`;
		}
	});

	const tiposProyecto = [
		"Agendas escolares",
		"Merchandising empresarial",
		"Textil corporativo",
		"Papelería",
		"Otro",
	];

	function validateEmail(email: string): boolean {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	}

	function validatePhone(phone: string): boolean {
		return /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/.test(
			phone,
		);
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

		if (!formData.telefono.trim()) {
			errors.telefono = "El teléfono es obligatorio";
		} else if (!validatePhone(formData.telefono)) {
			errors.telefono = "El teléfono no es válido";
		}

		if (!formData.tipoProyecto) {
			errors.tipoProyecto = "Debes seleccionar un tipo de proyecto";
		}

		if (!formData.mensaje.trim()) {
			errors.mensaje = "El mensaje es obligatorio";
		} else if (formData.mensaje.trim().length < 50) {
			errors.mensaje = "El mensaje debe tener al menos 50 caracteres";
		}

		if (!formData.privacidad) {
			errors.privacidad = "Debes aceptar la política de privacidad";
		}

		return Object.keys(errors).length === 0;
	}

	function validateStep(step: number): boolean {
		errors = {};

		if (step === 0) {
			// Validar paso 1: Datos del Proyecto
			if (!formData.tipoProyecto) {
				errors.tipoProyecto = "Debes seleccionar un tipo de proyecto";
				return false;
			}
		} else if (step === 1) {
			// Validar paso 2: Detalles
			if (!formData.mensaje.trim()) {
				errors.mensaje = "El mensaje es obligatorio";
				return false;
			} else if (formData.mensaje.trim().length < 50) {
				errors.mensaje = "El mensaje debe tener al menos 50 caracteres";
				return false;
			}
		} else if (step === 2) {
			// Validar paso 3: Tus Datos
			if (!formData.nombre.trim()) {
				errors.nombre = "El nombre es obligatorio";
				return false;
			}
			if (!formData.email.trim()) {
				errors.email = "El email es obligatorio";
				return false;
			} else if (!validateEmail(formData.email)) {
				errors.email = "El email no es válido";
				return false;
			}
			if (!formData.telefono.trim()) {
				errors.telefono = "El teléfono es obligatorio";
				return false;
			} else if (!validatePhone(formData.telefono)) {
				errors.telefono = "El teléfono no es válido";
				return false;
			}
			if (!formData.privacidad) {
				errors.privacidad = "Debes aceptar la política de privacidad";
				return false;
			}
		}

		return true;
	}

	async function handleSubmit() {
		if (!validateStep(2)) {
			return;
		}

		isSubmitting = true;

		// Simular envío
		await new Promise((resolve) => setTimeout(resolve, 1500));

		console.log("Formulario enviado:", formData);
		submitSuccess = true;
		isSubmitting = false;

		// Reset form after 3 seconds
		setTimeout(() => {
			formData = {
				nombre: "",
				apellidos: "",
				email: "",
				telefono: "",
				empresa: "",
				tipoProyecto: "",
				cantidad: "",
				fechaNecesaria: "",
				mensaje: "",
				privacidad: false,
				newsletter: false,
			};
			currentStep = 0;
			submitSuccess = false;
		}, 3000);
	}

	function handleStepChange(step: number) {
		// Validar antes de avanzar
		if (step > currentStep && !validateStep(currentStep)) {
			return;
		}
		currentStep = step;
	}

	$effect(() => {
		// Clear errors when field is corrected
		if (formData.nombre && errors.nombre) delete errors.nombre;
		if (formData.email && validateEmail(formData.email) && errors.email)
			delete errors.email;
		if (
			formData.telefono &&
			validatePhone(formData.telefono) &&
			errors.telefono
		)
			delete errors.telefono;
		if (formData.tipoProyecto && errors.tipoProyecto)
			delete errors.tipoProyecto;
		if (formData.mensaje && formData.mensaje.length >= 50 && errors.mensaje)
			delete errors.mensaje;
		if (formData.privacidad && errors.privacidad) delete errors.privacidad;
	});
</script>

<Seo
	title="Contacto - Publisol | Solicita tu Presupuesto"
	description="Contacta con Publisol para solicitar un presupuesto personalizado. Estamos aquí para ayudarte con tu proyecto de agendas o merchandising."
	url="/contacto"
/>

<!-- Hero -->
<section class="bg-surface-tertiary py-12">
	<div class="container mx-auto px-4">
		<Breadcrumb items={breadcrumbItems} />
		<Heading level="h1" class="mt-4 mb-2">Contacto</Heading>
		<Text class="text-text-muted">
			Estamos aquí para ayudarte con tu proyecto de personalización
		</Text>
	</div>
</section>

<!-- Layout Dos Columnas -->
<section class="py-8 sm:py-12 md:py-16 relative overflow-hidden bg-surface-page">
	<div class="container mx-auto px-4 sm:px-6 relative z-10">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
			<!-- Columna Izquierda: Formulario -->
			<div>
				<Heading level="h2" class="mb-6">Cuéntanos tu proyecto</Heading>

				{#if submitSuccess}
					<div
						class="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg"
					>
						<div class="flex items-center gap-3">
							<svg
								class="w-6 h-6 text-success"
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
							<Text class="text-success font-semibold"
								>¡Mensaje enviado correctamente! Te
								responderemos pronto.</Text
							>
						</div>
					</div>
				{/if}

				{#snippet step1Content()}
					<div class="space-y-4 sm:space-y-6">
						<div>
							<label
								for="tipoProyecto"
								class="block text-sm font-medium mb-2"
							>
								Tipo de proyecto *
							</label>
							<Select
								id="tipoProyecto"
								bindValue={formData.tipoProyecto}
								required
								class="w-full min-h-[48px] text-base {errors.tipoProyecto
									? 'border-error focus:border-error focus:ring-error'
									: ''}"
							>
								<option value="">Selecciona...</option>
								{#each tiposProyecto as tipo}
									<option value={tipo}>{tipo}</option>
								{/each}
							</Select>
							{#if errors.tipoProyecto}
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
									{errors.tipoProyecto}
								</Text>
							{/if}
						</div>

						<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<div>
								<label
									for="cantidad"
									class="block text-sm font-medium mb-2"
								>
									Cantidad estimada
								</label>
								<Input
									id="cantidad"
									type="number"
									bindValue={formData.cantidad}
									class="w-full min-h-[48px] text-base"
								/>
							</div>
							<div>
								<label
									for="fechaNecesaria"
									class="block text-sm font-medium mb-2"
								>
									Fecha necesaria (aproximada)
								</label>
								<Input
									id="fechaNecesaria"
									type="date"
									bindValue={formData.fechaNecesaria}
									class="w-full min-h-[48px] text-base"
								/>
							</div>
						</div>
					</div>
				{/snippet}

				{#snippet step2Content()}
					<div class="space-y-4 sm:space-y-6">
						<div>
							<label
								for="mensaje"
								class="block text-sm font-medium mb-2"
							>
								Cuéntanos más sobre tu proyecto *
							</label>
							<Textarea
								id="mensaje"
								bindValue={formData.mensaje}
								required
								rows="6"
								class="w-full min-h-[120px] text-base resize-y {errors.mensaje
									? 'border-error focus:border-error focus:ring-error'
									: ''}"
								placeholder="Mínimo 50 caracteres"
							/>
							<div class="flex items-center justify-between mt-1">
								{#if errors.mensaje}
									<Text
										class="text-error text-xs flex items-center gap-1"
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
										{errors.mensaje}
									</Text>
								{:else}
									<span></span>
								{/if}
								<Text class="text-xs text-text-muted">
									{formData.mensaje.length}/50 caracteres
									mínimos
								</Text>
							</div>
						</div>
					</div>
				{/snippet}

				{#snippet step3Content()}
					<div class="space-y-4 sm:space-y-6">
						<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<div>
								<label
									for="nombre"
									class="block text-sm font-medium mb-2"
								>
									Nombre *
								</label>
								<Input
									id="nombre"
									type="text"
									bindValue={formData.nombre}
									required
									class="w-full min-h-[48px] text-base {errors.nombre
										? 'border-error focus:border-error focus:ring-error'
										: ''}"
								/>
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
									for="apellidos"
									class="block text-sm font-medium mb-2"
								>
									Apellidos
								</label>
								<Input
									id="apellidos"
									type="text"
									bindValue={formData.apellidos}
									class="w-full min-h-[48px] text-base"
								/>
							</div>
						</div>

						<div>
							<label
								for="email"
								class="block text-sm font-medium mb-2"
							>
								Email *
							</label>
							<Input
								id="email"
								type="email"
								bindValue={formData.email}
								required
								class="w-full min-h-[48px] text-base {errors.email
									? 'border-error focus:border-error focus:ring-error'
									: ''}"
								inputmode="email"
							/>
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

						<div>
							<label
								for="telefono"
								class="block text-sm font-medium mb-2"
							>
								Teléfono *
							</label>
							<Input
								id="telefono"
								type="tel"
								bindValue={formData.telefono}
								required
								class="w-full min-h-[48px] text-base {errors.telefono
									? 'border-error focus:border-error focus:ring-error'
									: ''}"
								inputmode="tel"
							/>
							{#if errors.telefono}
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
									{errors.telefono}
								</Text>
							{/if}
						</div>

						<div>
							<label
								for="empresa"
								class="block text-sm font-medium mb-2"
							>
								Empresa / Centro educativo
							</label>
							<Input
								id="empresa"
								type="text"
								bindValue={formData.empresa}
								class="w-full min-h-[48px] text-base"
							/>
						</div>

						<div class="space-y-3">
							<label
								class="flex items-start gap-3 cursor-pointer min-h-[48px] py-2 {errors.privacidad
									? 'text-error'
									: ''}"
							>
								<Checkbox
									bind:checked={formData.privacidad}
									required
									class="mt-1 {errors.privacidad
										? 'border-error'
										: ''}"
								/>
								<Text class="text-sm leading-relaxed">
									He leído y acepto la <Link
										href="/privacidad"
										class="text-primary hover:underline"
										>política de privacidad</Link
									> *
								</Text>
							</label>
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
							<label
								class="flex items-start gap-3 cursor-pointer min-h-[48px] py-2"
							>
								<Checkbox
									bind:checked={formData.newsletter}
									class="mt-1"
								/>
								<Text class="text-sm leading-relaxed">
									Quiero recibir novedades y ofertas
								</Text>
							</label>
						</div>
					</div>
				{/snippet}

				<FormWizard
					bind:currentStep
					steps={[
						{
							title: "Datos del Proyecto",
							description: "Cuéntanos qué necesitas",
							content: step1Content,
						},
						{
							title: "Detalles",
							description: "Proporciona más información",
							content: step2Content,
						},
						{
							title: "Tus Datos",
							description: "Cómo podemos contactarte",
							content: step3Content,
						},
					]}
					onStepChange={handleStepChange}
					onComplete={handleSubmit}
				/>
			</div>

			<!-- Columna Derecha: Información de Contacto -->
			<div class="space-y-8">
				<Card padding="lg">
					{#snippet header()}
						<Heading level="h3">Datos Directos</Heading>
					{/snippet}
					{#snippet children()}
						<div class="space-y-6">
							<div>
								<div class="flex items-center gap-2 mb-2">
									<MapPin class="w-5 h-5 text-primary" />
									<Text class="font-semibold">Dirección:</Text>
								</div>
								<Text class="text-text-muted">
									Carretera de Coin Nº 56 - 4º A<br />
									2970 Cártama, Málaga, España
								</Text>
							</div>

							<div>
								<div class="flex items-center gap-2 mb-2">
									<Phone class="w-5 h-5 text-primary" />
									<Text class="font-semibold">Teléfono:</Text>
								</div>
								<Text class="text-text-muted">
									<Link href="tel:+34653189599" class="hover:text-primary">+34 653 18 95 99</Link><br />
									<Text class="text-sm">95-287-52-56 (Comercial)</Text><br />
									<Text class="text-sm">95-287-50-13 (Atención Cliente)</Text>
								</Text>
							</div>

							<div>
								<div class="flex items-center gap-2 mb-2">
									<Mail class="w-5 h-5 text-primary" />
									<Text class="font-semibold">Email:</Text>
								</div>
								<Text class="text-text-muted">
									<Link href="mailto:publisolronda@gmail.com" class="hover:text-primary">publisolronda@gmail.com</Link>
								</Text>
							</div>

							<div>
								<div class="flex items-center gap-2 mb-2">
									<Clock class="w-5 h-5 text-primary" />
									<Text class="font-semibold">Horario:</Text>
								</div>
								<Text class="text-text-muted">
									Lunes a Viernes: 9:00 - 18:00<br />
									Sábados: 10:00 - 14:00<br />
									Domingos: Cerrado
								</Text>
							</div>
						</div>
					{/snippet}
				</Card>

				<Card padding="lg">
					{#snippet header()}
						<Heading level="h3">Mapa</Heading>
					{/snippet}
					{#snippet children()}
						<div
							class="aspect-video bg-surface-tertiary rounded-lg overflow-hidden"
						>
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.1234567890123!2d-4.6300000!3d36.7100000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzYuNzEwMDAwMCwtNC42MzAwMDAwMDA!5e0!3m2!1ses!2ses!4v1234567890123!5m2!1ses!2ses"
								width="100%"
								height="100%"
								style="border:0; filter: grayscale(0.3);"
								allowfullscreen
								loading="lazy"
								referrerpolicy="no-referrer-when-downgrade"
								title="Ubicación Publisol - Carretera de Coin Nº 56, Cártama, Málaga"
							></iframe>
						</div>
					{/snippet}
				</Card>

				<Card padding="lg">
					{#snippet header()}
						<Heading level="h3">Redes Sociales</Heading>
					{/snippet}
					{#snippet children()}
						<div class="flex gap-4">
							<a
								href="https://linkedin.com/company/publisol"
								target="_blank"
								rel="noopener noreferrer"
								class="text-text-muted hover:text-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
								aria-label="LinkedIn"
							>
								<svg
									class="w-6 h-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
									/>
								</svg>
							</a>
							<a
								href="https://instagram.com/publisol"
								target="_blank"
								rel="noopener noreferrer"
								class="text-text-muted hover:text-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
								aria-label="Instagram"
							>
								<svg
									class="w-6 h-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
									/>
								</svg>
							</a>
							<a
								href="https://facebook.com/publisol"
								target="_blank"
								rel="noopener noreferrer"
								class="text-text-muted hover:text-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
								aria-label="Facebook"
							>
								<svg
									class="w-6 h-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
									/>
								</svg>
							</a>
						</div>
					{/snippet}
				</Card>
			</div>
		</div>
	</div>
</section>

<!-- Sección Envíos -->
<section class="py-16 bg-surface-tertiary" id="envios">
	<div class="container mx-auto px-4">
		<Heading level="h2" class="text-center mb-12"
			>Información de Envíos</Heading
		>
		<div class="max-w-4xl mx-auto">
			<Text class="text-center text-lg text-text-muted mb-8">
				Realizamos envíos a toda España con diferentes opciones según
				tus necesidades.
			</Text>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<Card
					padding="lg"
					elevation={1}
					class="hover-shadow-primary transition-all"
				>
					{#snippet header()}
						<div class="flex items-center gap-4 mb-4">
							<Truck class="w-10 h-10 text-primary" />
							<Heading level="h3">España Peninsular</Heading>
						</div>
					{/snippet}
					{#snippet children()}
						<div class="space-y-3">
							<Text class="text-text-muted">
								<strong>Plazo:</strong> 24-48 horas (productos en
								stock)
							</Text>
							<Text class="text-text-muted">
								<strong>Coste:</strong> Gratis para pedidos superiores
								a 500€
							</Text>
							<Text class="text-text-muted">
								<strong>Método:</strong> Mensajería urgente
							</Text>
						</div>
					{/snippet}
				</Card>
				<Card
					padding="lg"
					elevation={1}
					class="hover-shadow-primary transition-all"
				>
					{#snippet header()}
						<div class="flex items-center gap-4 mb-4">
							<Globe class="w-10 h-10 text-primary" />
							<Heading level="h3"
								>Islas Baleares y Canarias</Heading
							>
						</div>
					{/snippet}
					{#snippet children()}
						<div class="space-y-3">
							<Text class="text-text-muted">
								<strong>Plazo:</strong> 3-5 días laborables
							</Text>
							<Text class="text-text-muted">
								<strong>Coste:</strong> Según volumen y destino
							</Text>
							<Text class="text-text-muted">
								<strong>Método:</strong> Transporte marítimo
							</Text>
						</div>
					{/snippet}
				</Card>
				<Card
					padding="lg"
					elevation={1}
					class="hover-shadow-primary transition-all"
				>
					{#snippet header()}
						<div class="flex items-center gap-4 mb-4">
							<Package class="w-10 h-10 text-primary" />
							<Heading level="h3"
								>Producción Personalizada</Heading
							>
						</div>
					{/snippet}
					{#snippet children()}
						<div class="space-y-3">
							<Text class="text-text-muted">
								<strong>Plazo:</strong> 10-15 días laborables
							</Text>
							<Text class="text-text-muted">
								<strong>Incluye:</strong> Diseño, producción y envío
							</Text>
							<Text class="text-text-muted">
								<strong>Seguimiento:</strong> Actualizaciones en
								cada fase
							</Text>
						</div>
					{/snippet}
				</Card>
				<Card
					padding="lg"
					elevation={1}
					class="hover-shadow-primary transition-all"
				>
					{#snippet header()}
						<div class="flex items-center gap-4 mb-4">
							<Zap class="w-10 h-10 text-primary" />
							<Heading level="h3">Pedidos Urgentes</Heading>
						</div>
					{/snippet}
					{#snippet children()}
						<div class="space-y-3">
							<Text class="text-text-muted">
								<strong>Disponibilidad:</strong> Consultar con comercial
							</Text>
							<Text class="text-text-muted">
								<strong>Plazo:</strong> Según disponibilidad de stock
							</Text>
							<Text class="text-text-muted">
								<strong>Coste adicional:</strong> Aplicable según
								urgencia
							</Text>
						</div>
					{/snippet}
				</Card>
			</div>
			<div class="mt-8 text-center">
				<Text class="text-text-muted mb-4">
					¿Necesitas más información sobre envíos? Contacta con
					nuestro equipo comercial.
				</Text>
				<Button intent="primary" href="/contacto">
					Contactar sobre Envíos
				</Button>
			</div>
		</div>
	</div>
</section>
