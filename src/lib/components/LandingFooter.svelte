<script lang="ts">
	import { Footer, Heading, Text } from "atomic-design-svelte";
	import { siteConfig } from "$lib/siteConfig";
	import PublisolButton from "$lib/components/atoms/PublisolButton.svelte";
	import { Phone, Mail, MapPin, Clock } from "lucide-svelte";

	const phoneNumber = siteConfig.contact.phone.main.replace(/\s/g, "");

	function scrollToForm() {
		const formElement = document.getElementById("contacto");
		if (formElement) {
			formElement.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	}
</script>

<Footer>
	{#snippet children()}
		<div class="space-y-8 sm:space-y-12">
			<!-- Main Footer Content -->
			<div
				class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8"
			>
				<!-- Columna 1: Identidad -->
				<div>
					<span class="text-2xl font-bold text-primary block mb-4"
						>{siteConfig.company.name}</span
					>
					<Text class="text-sm text-text-muted mb-4 leading-relaxed">
						{siteConfig.company.description}
					</Text>
					<div class="flex flex-wrap gap-2 mb-4">
						{#each siteConfig.company.certifications as cert}
							<span
								class="inline-flex items-center gap-1 text-xs bg-success/10 text-success px-3 py-1.5 rounded-full font-medium border border-success/20"
							>
								<svg
									class="w-3 h-3"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fill-rule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clip-rule="evenodd"
									/>
								</svg>
								{cert}
							</span>
						{/each}
					</div>
				</div>

				<!-- Columna 2: Productos (sin enlaces, solo texto) -->
				<div>
					<Heading level="h4" class="mb-4 text-text-default"
						>Productos</Heading
					>
					<ul class="space-y-2.5 text-sm">
						{#each siteConfig.products.categories as category}
							<li>
								<span class="text-text-muted">{category.name}</span>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Columna 3: Conoce Publisol (sin enlaces, solo texto) -->
				<div>
					<Heading level="h4" class="mb-4">Conoce Publisol</Heading>
					<ul class="space-y-2 text-sm">
						{#each siteConfig.navigation.company as item}
							<li>
								<span class="text-text-muted">{item.label}</span>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Columna 4: Recursos Útiles (sin enlaces, solo texto) -->
				<div>
					<Heading level="h4" class="mb-4">Recursos Útiles</Heading>
					<ul class="space-y-2 text-sm">
						{#each siteConfig.navigation.resources as item}
							<li>
								<span class="text-text-muted">{item.label}</span>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Columna 5: ¿Necesitas ayuda? (solo acciones) -->
				<div>
					<Heading level="h4" class="mb-4 text-text-default"
						>¿Necesitas ayuda?</Heading
					>
					<div class="space-y-4 text-sm">
						<!-- Teléfono -->
						<div class="flex items-start gap-3">
							<Phone
								class="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
								aria-hidden="true"
							/>
							<div>
								<Text class="font-semibold text-text-default">Teléfono</Text>
								<a
									href="tel:{phoneNumber}"
									class="text-text-muted hover:text-primary transition-colors block"
								>
									{siteConfig.contact.phone.main}
								</a>
								{#if siteConfig.contact.phone.commercial}
									<Text class="text-xs text-text-muted mt-1"
										>{siteConfig.contact.phone.commercial} (Comercial)</Text
									>
								{/if}
								{#if siteConfig.contact.phone.customerService}
									<Text class="text-xs text-text-muted"
										>{siteConfig.contact.phone
											.customerService} (Atención Cliente)</Text
									>
								{/if}
							</div>
						</div>

						<!-- Email -->
						<div class="flex items-start gap-3">
							<Mail
								class="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
								aria-hidden="true"
							/>
							<div>
								<Text class="font-semibold text-text-default">Email</Text>
								<a
									href="mailto:{siteConfig.contact.email}"
									class="text-text-muted hover:text-primary transition-colors block"
								>
									{siteConfig.contact.email}
								</a>
							</div>
						</div>

						<!-- Dirección -->
						<div class="flex items-start gap-3">
							<MapPin
								class="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
								aria-hidden="true"
							/>
							<div>
								<Text class="font-semibold text-text-default">Dirección</Text>
								<Text class="text-text-muted text-sm"
									>{siteConfig.contact.address.full}</Text
								>
							</div>
						</div>

						<!-- Horario -->
						<div class="flex items-start gap-3">
							<Clock
								class="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
								aria-hidden="true"
							/>
							<div>
								<Text class="font-semibold text-text-default">Horario</Text>
								<Text class="text-text-muted text-sm"
									>{siteConfig.contact.schedule.weekdays}
									{#if siteConfig.contact.schedule.saturday}
										<br />{siteConfig.contact.schedule.saturday}
									{/if}
								</Text>
							</div>
						</div>

						<!-- Botón CTA al formulario -->
						<div class="mt-4">
							<PublisolButton
								text="Consulta sin compromiso"
								variant="primary"
								size="md"
								onclick={scrollToForm}
								class="w-full"
							/>
						</div>
					</div>
				</div>
			</div>

			<!-- Bottom Bar -->
			<div class="border-t border-border-default pt-6 sm:pt-8">
				<div
					class="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm"
				>
					<div class="text-text-muted text-center sm:text-left">
						© {new Date().getFullYear()}
						{siteConfig.company.name}. Todos los derechos reservados.
					</div>
				</div>
			</div>
		</div>
	{/snippet}
</Footer>
