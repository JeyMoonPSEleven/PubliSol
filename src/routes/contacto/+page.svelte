<script lang="ts">
	import { Heading, Text, Card, Link } from "atomic-design-svelte";
	import { Breadcrumb } from "atomic-design-svelte";
	import Seo from "$lib/components/Seo.svelte";
	import { siteConfig } from "$lib/siteConfig";
	import StandardContactForm from "$lib/components/organisms/StandardContactForm.svelte";
	import { MapPin, Phone, Mail, Clock, Truck } from "lucide-svelte";

	const breadcrumbItems = [
		{ label: "Inicio", href: "/" },
		{ label: "Contacto", href: "/contacto" },
	];
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
<section
	class="py-8 sm:py-12 md:py-16 relative overflow-hidden bg-surface-page"
>
	<div class="container mx-auto px-4 sm:px-6 relative z-10">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
			<!-- Columna Izquierda: Formulario -->
			<div>
				<Heading level="h2" class="mb-6">Cuéntanos tu proyecto</Heading>
				<StandardContactForm
					formId="contacto-form"
					heading=""
					description=""
					class="!py-0"
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
									<Text class="font-semibold">Dirección:</Text
									>
								</div>
								<Text class="text-text-muted">
									{siteConfig.contact.address.full}
								</Text>
							</div>

							<div>
								<div class="flex items-center gap-2 mb-2">
									<Phone class="w-5 h-5 text-primary" />
									<Text class="font-semibold">Teléfono:</Text>
								</div>
								<Text class="text-text-muted">
									<Link
										href="tel:{siteConfig.contact.phone.main.replace(
											/\s/g,
											'',
										)}"
										class="hover:text-primary"
										>{siteConfig.contact.phone.main}</Link
									><br />
									{#if siteConfig.contact.phone.commercial}
										<Text class="text-sm"
											>{siteConfig.contact.phone
												.commercial} (Comercial)</Text
										><br />
									{/if}
									{#if siteConfig.contact.phone.customerService}
										<Text class="text-sm"
											>{siteConfig.contact.phone
												.customerService} (Atención Cliente)</Text
										>
									{/if}
								</Text>
							</div>

							<div>
								<div class="flex items-center gap-2 mb-2">
									<Mail class="w-5 h-5 text-primary" />
									<Text class="font-semibold">Email:</Text>
								</div>
								<Text class="text-text-muted">
									<Link
										href="mailto:{siteConfig.contact.email}"
										class="hover:text-primary"
										>{siteConfig.contact.email}</Link
									>
								</Text>
							</div>

							<div>
								<div class="flex items-center gap-2 mb-2">
									<Clock class="w-5 h-5 text-primary" />
									<Text class="font-semibold">Horario:</Text>
								</div>
								<Text class="text-text-muted">
									{siteConfig.contact.schedule.weekdays}<br />
									{#if siteConfig.contact.schedule.saturday}
										{siteConfig.contact.schedule
											.saturday}<br />
									{/if}
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
										d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
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
							<Truck class="w-10 h-10 text-primary" />
							<Heading level="h3">Islas y Ceuta/Melilla</Heading>
						</div>
					{/snippet}
					{#snippet children()}
						<div class="space-y-3">
							<Text class="text-text-muted">
								<strong>Plazo:</strong> 3-5 días laborables
							</Text>
							<Text class="text-text-muted">
								<strong>Coste:</strong> Consultar según destino
							</Text>
							<Text class="text-text-muted">
								<strong>Método:</strong> Correos o mensajería
							</Text>
						</div>
					{/snippet}
				</Card>
			</div>
		</div>
	</div>
</section>
