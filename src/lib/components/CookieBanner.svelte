<script lang="ts">
	import { Button, Text, Link } from "atomic-design-svelte";
	import { onMount } from "svelte";
	import { fade, slide } from "svelte/transition";

	let showBanner = $state(false);
	let showSettings = $state(false);

	// Estado de preferencias de cookies
	let cookiePreferences = $state({
		necesarias: true, // Siempre activas
		analiticas: false,
		marketing: false,
	});

	onMount(() => {
		// Verificar si ya hay preferencias guardadas
		if (typeof window !== "undefined") {
			const saved = localStorage.getItem("cookiePreferences");
			if (saved) {
				try {
					cookiePreferences = { ...cookiePreferences, ...JSON.parse(saved) };
				} catch (e) {
					console.error("Error parsing cookie preferences:", e);
				}
			} else {
				// Mostrar banner solo si no hay preferencias guardadas
				showBanner = true;
			}
		}
	});

	function acceptAll() {
		cookiePreferences.analiticas = true;
		cookiePreferences.marketing = true;
		savePreferences();
		showBanner = false;
	}

	function rejectAll() {
		cookiePreferences.analiticas = false;
		cookiePreferences.marketing = false;
		savePreferences();
		showBanner = false;
	}

	function savePreferences() {
		if (typeof window !== "undefined") {
			localStorage.setItem(
				"cookiePreferences",
				JSON.stringify(cookiePreferences),
			);
			showSettings = false;
			showBanner = false;
			// Aquí se podrían inicializar los scripts de analytics/marketing según preferencias
			initializeCookies();
		}
	}

	function initializeCookies() {
		// Inicializar Google Analytics solo si está permitido
		if (cookiePreferences.analiticas && typeof window !== "undefined") {
			// Aquí se inicializaría Google Analytics
			// Ejemplo: gtag('consent', 'update', { analytics_storage: 'granted' });
		}

		// Inicializar cookies de marketing solo si está permitido
		if (cookiePreferences.marketing && typeof window !== "undefined") {
			// Aquí se inicializarían Meta Pixel, LinkedIn, etc.
		}
	}
</script>

<!-- Banner de Cookies -->
{#if showBanner}
	<div
		class="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-primary/20 shadow-2xl z-[100] p-4 sm:p-6"
		transition:slide={{ axis: "y", duration: 300 }}
		role="dialog"
		aria-modal="true"
		aria-labelledby="cookie-banner-title"
	>
		<div class="container mx-auto max-w-6xl">
			<div
				class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
			>
				<div class="flex-1">
					<Text
						id="cookie-banner-title"
						class="font-semibold mb-2 text-base sm:text-lg"
					>
						🍪 Este sitio usa cookies
					</Text>
					<Text class="text-sm sm:text-base text-text-muted mb-2">
						Usamos cookies propias y de terceros para mejorar tu experiencia,
						analizar el tráfico y personalizar contenido. Puedes aceptar todas,
						rechazarlas o configurarlas según tus preferencias.
					</Text>
					<Link
						href="/cookies"
						class="text-sm text-primary hover:underline mt-2 inline-block"
					>
						Más información sobre cookies
					</Link>
				</div>
				<div
					class="flex flex-wrap gap-2 sm:gap-3 flex-shrink-0 w-full md:w-auto"
				>
					<Button
						intent="secondary"
						size="sm"
						onclick={rejectAll}
						class="min-h-[44px] text-sm sm:text-base"
						aria-label="Rechazar todas las cookies"
					>
						Rechazar
					</Button>
					<Button
						intent="ghost"
						size="sm"
						onclick={() => (showSettings = true)}
						class="min-h-[44px] text-sm sm:text-base"
						aria-label="Configurar cookies"
					>
						Configurar
					</Button>
					<Button
						intent="primary"
						size="sm"
						onclick={acceptAll}
						class="min-h-[44px] text-sm sm:text-base"
						aria-label="Aceptar todas las cookies"
					>
						Aceptar todas
					</Button>
				</div>
			</div>
		</div>
	</div>
{/if}

<!-- Modal de Configuración de Cookies -->
{#if showSettings}
	<div
		class="fixed inset-0 bg-black/50 z-[110] flex items-center justify-center p-4"
		onclick={() => (showSettings = false)}
		role="dialog"
		aria-modal="true"
		aria-labelledby="cookie-settings-title"
		transition:fade={{ duration: 200 }}
	>
		<div
			class="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
			onclick={(e) => e.stopPropagation()}
			transition:slide={{ axis: "y", duration: 300 }}
		>
			<div class="p-6">
				<div class="flex items-center justify-between mb-6">
					<Text
						id="cookie-settings-title"
						class="text-xl sm:text-2xl font-bold"
					>
						Configuración de Cookies
					</Text>
					<button
						onclick={() => (showSettings = false)}
						class="p-2 hover:bg-surface-tertiary rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
						aria-label="Cerrar configuración de cookies"
					>
						<svg
							class="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>

				<div class="space-y-6">
					<!-- Cookies Necesarias -->
					<div class="p-4 border-2 border-border-default rounded-lg">
						<div class="flex items-center justify-between mb-2">
							<div>
								<Text class="font-semibold text-base">✅ Cookies Necesarias</Text>
								<Text class="text-xs text-text-muted"
									>(No se pueden desactivar)</Text
								>
							</div>
							<input
								type="checkbox"
								checked={cookiePreferences.necesarias}
								disabled
								class="w-5 h-5 rounded border-border-default text-primary focus:ring-2 focus:ring-primary"
								aria-label="Cookies necesarias (siempre activas)"
							/>
						</div>
						<Text class="text-sm text-text-muted">
							Esenciales para el funcionamiento del sitio. Incluyen
							autenticación, seguridad y funcionalidades básicas.
						</Text>
					</div>

					<!-- Cookies Analíticas -->
					<div class="p-4 border-2 border-border-default rounded-lg">
						<div class="flex items-center justify-between mb-2">
							<Text class="font-semibold text-base">Cookies Analíticas</Text>
							<input
								type="checkbox"
								bind:checked={cookiePreferences.analiticas}
								class="w-5 h-5 rounded border-border-default text-primary focus:ring-2 focus:ring-primary"
								aria-label="Activar cookies analíticas"
							/>
						</div>
						<Text class="text-sm text-text-muted mb-2">
							Google Analytics - Nos ayudan a entender cómo usas el sitio para
							mejorar la experiencia. IP anonimizada.
						</Text>
						<Text class="text-xs text-text-muted">
							Puedes consultar más información en:
							<Link
								href="https://policies.google.com/technologies/cookies"
								target="_blank"
								rel="noopener noreferrer"
								class="text-primary hover:underline"
							>
								Política de Cookies de Google
							</Link>
						</Text>
					</div>

					<!-- Cookies de Marketing -->
					<div class="p-4 border-2 border-border-default rounded-lg">
						<div class="flex items-center justify-between mb-2">
							<Text class="font-semibold text-base">Cookies de Marketing</Text>
							<input
								type="checkbox"
								bind:checked={cookiePreferences.marketing}
								class="w-5 h-5 rounded border-border-default text-primary focus:ring-2 focus:ring-primary"
								aria-label="Activar cookies de marketing"
							/>
						</div>
						<Text class="text-sm text-text-muted">
							Meta Pixel, LinkedIn Insight - Personalización de anuncios y
							seguimiento de conversiones. Solo se activan con tu
							consentimiento.
						</Text>
					</div>
				</div>

				<div class="flex flex-col sm:flex-row gap-3 mt-8">
					<Button
						intent="primary"
						class="flex-1 min-h-[48px]"
						onclick={savePreferences}
					>
						Guardar Preferencias
					</Button>
					<Button
						intent="secondary"
						class="flex-1 min-h-[48px]"
						onclick={acceptAll}
					>
						Aceptar Todas
					</Button>
				</div>
			</div>
		</div>
	</div>
{/if}

