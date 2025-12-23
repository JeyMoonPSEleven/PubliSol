<script lang="ts">
	import { Heading, Text, Breadcrumb, Card, Button, Checkbox, Modal } from "atomic-design-svelte";
	import { Link } from "atomic-design-svelte";
	import Seo from "$lib/components/Seo.svelte";
	
	const breadcrumbItems = [
		{ label: "Inicio", href: "/" },
		{ label: "Política de Cookies", href: "/cookies" }
	];
	
	let showCookieBanner = $state(false);
	let showCookieSettings = $state(false);
	
	// Estado de preferencias de cookies
	let cookiePreferences = $state({
		necesarias: true, // Siempre activas
		analiticas: false,
		marketing: false
	});
	
	function acceptAll() {
		cookiePreferences.analiticas = true;
		cookiePreferences.marketing = true;
		savePreferences();
		showCookieBanner = false;
	}
	
	function rejectAll() {
		cookiePreferences.analiticas = false;
		cookiePreferences.marketing = false;
		savePreferences();
		showCookieBanner = false;
	}
	
	function savePreferences() {
		localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
		showCookieSettings = false;
	}
	
	// Verificar si ya hay preferencias guardadas
	if (typeof window !== 'undefined') {
		const saved = localStorage.getItem('cookiePreferences');
		if (!saved) {
			showCookieBanner = true;
		}
	}
</script>

<Seo
	title="Política de Cookies - Publisol"
	description="Información sobre el uso de cookies en el sitio web de Publisol. Tipos de cookies, finalidad y cómo gestionarlas."
	url="/cookies"
/>

<!-- Banner de Cookies (si no hay preferencias guardadas) -->
{#if showCookieBanner}
	<div class="fixed bottom-0 left-0 right-0 bg-white border-t border-border-default shadow-xl z-50 p-4">
		<div class="container mx-auto max-w-6xl">
			<div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
				<div class="flex-1">
					<Text class="font-semibold mb-2">🍪 Este sitio usa cookies</Text>
					<Text class="text-sm text-text-muted">
						Usamos cookies propias y de terceros para mejorar tu experiencia. Puedes aceptar todas o configurarlas.
					</Text>
					<Link href="/cookies" class="text-sm text-primary hover:underline mt-2 inline-block">
						Más información sobre cookies
					</Link>
				</div>
				<div class="flex gap-2 flex-shrink-0">
					<Button intent="secondary" size="sm" onclick={rejectAll}>
						Rechazar
					</Button>
					<Button intent="ghost" size="sm" onclick={() => showCookieSettings = true}>
						Configurar
					</Button>
					<Button intent="primary" size="sm" onclick={acceptAll}>
						Aceptar todas
					</Button>
				</div>
			</div>
		</div>
	</div>
{/if}

<!-- Modal de Configuración de Cookies -->
{#if showCookieSettings}
	<Modal open={showCookieSettings} onclose={() => showCookieSettings = false}>
		{#snippet children()}
			<div class="p-6">
				<Heading level="h3" class="mb-6">Configuración de Cookies</Heading>
				
				<div class="space-y-6">
					<!-- Cookies Necesarias -->
					<div>
						<div class="flex items-center justify-between mb-2">
							<div>
								<Text class="font-semibold">✅ Cookies Necesarias</Text>
								<Text class="text-sm text-text-muted">(No se pueden desactivar)</Text>
							</div>
							<Checkbox checked={cookiePreferences.necesarias} disabled />
						</div>
						<Text class="text-sm text-text-muted">
							Esenciales para el funcionamiento del sitio. Incluyen autenticación, seguridad y funcionalidades básicas.
						</Text>
					</div>
					
					<!-- Cookies Analíticas -->
					<div>
						<div class="flex items-center justify-between mb-2">
							<Text class="font-semibold">Cookies Analíticas</Text>
							<Checkbox bind:checked={cookiePreferences.analiticas} />
						</div>
						<Text class="text-sm text-text-muted mb-2">
							Google Analytics - Nos ayudan a entender cómo usas el sitio para mejorar la experiencia.
						</Text>
						<Text class="text-xs text-text-muted">
							Puedes consultar más información en: <Link href="https://policies.google.com/technologies/cookies" target="_blank" class="text-primary hover:underline">Política de Cookies de Google</Link>
						</Text>
					</div>
					
					<!-- Cookies de Marketing -->
					<div>
						<div class="flex items-center justify-between mb-2">
							<Text class="font-semibold">Cookies de Marketing</Text>
							<Checkbox bind:checked={cookiePreferences.marketing} />
						</div>
						<Text class="text-sm text-text-muted">
							Meta Pixel, LinkedIn Insight - Personalización de anuncios y seguimiento de conversiones.
						</Text>
					</div>
				</div>
				
				<div class="flex gap-4 mt-8">
					<Button intent="primary" class="flex-1" onclick={savePreferences}>
						Guardar Preferencias
					</Button>
					<Button intent="secondary" onclick={acceptAll}>
						Aceptar Todas
					</Button>
				</div>
			</div>
		{/snippet}
	</Modal>
{/if}

<section class="py-12 bg-surface-tertiary">
	<div class="container mx-auto px-4">
		<Breadcrumb items={breadcrumbItems} />
		<Heading level="h1" class="mt-4 mb-2">Política de Cookies</Heading>
		<Text class="text-text-muted">
			Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
		</Text>
	</div>
</section>

<article class="py-16">
	<div class="container mx-auto px-4 max-w-4xl">
		<div class="prose prose-lg max-w-none">
			<Text class="mb-8">
				En este sitio web utilizamos cookies propias y de terceros con la finalidad de ofrecer una mejor experiencia de navegación, analizar el uso del sitio y mostrar información personalizada en función de los hábitos de navegación.
			</Text>
			<Text class="mb-8">
				Al continuar navegando en este sitio web, el usuario acepta el uso de cookies en los términos establecidos en la presente política.
			</Text>
			
			<Heading level="h2" class="mt-12 mb-4">1. ¿Qué son las cookies?</Heading>
			<Text class="mb-8">
				Una cookie es un pequeño archivo de texto que se descarga en el dispositivo del usuario (ordenador, smartphone o tableta) al acceder a determinadas páginas web. Las cookies permiten que el sitio web reconozca al usuario y recupere información sobre sus hábitos de navegación, preferencias o datos de inicio de sesión.
			</Text>
			
			<Heading level="h2" class="mt-12 mb-4">2. Tipos de cookies utilizadas en este sitio web</Heading>
			<Text class="mb-4">
				En Publisol utilizamos las siguientes categorías de cookies:
			</Text>
			
			<Card padding="md" class="mb-4">
				<Text class="font-semibold mb-2">Cookies técnicas o necesarias:</Text>
				<Text class="text-sm">
					Permiten al usuario la navegación básica en la web, el uso de sus diferentes opciones o servicios, y garantizar la seguridad de la sesión. Estas cookies son esenciales y no se pueden desactivar.
				</Text>
			</Card>
			
			<Card padding="md" class="mb-4">
				<Text class="font-semibold mb-2">Cookies de personalización:</Text>
				<Text class="text-sm">
					Permiten recordar información para que el usuario acceda con determinadas características, como el idioma, el tipo de navegador o la configuración regional.
				</Text>
			</Card>
			
			<Card padding="md" class="mb-8">
				<Text class="font-semibold mb-2">Cookies de análisis:</Text>
				<Text class="text-sm">
					Permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico del uso del sitio web. Ejemplo: Google Analytics.
				</Text>
			</Card>
			
			<Heading level="h2" class="mt-12 mb-4">3. Cookies de terceros</Heading>
			<Text class="mb-4">
				Este sitio web puede utilizar servicios de terceros que recopilan información con fines estadísticos, de uso del sitio por parte del usuario y para la prestación de otros servicios relacionados con la actividad de la web.
			</Text>
			<Text class="mb-4">
				En particular, este sitio web utiliza:
			</Text>
			<ul class="list-disc space-y-2 mb-8 ml-6">
				<li>
					<Text>
						<strong>Google Analytics (Google LLC):</strong> Herramienta de análisis que utiliza cookies para analizar el tráfico y comportamiento de los usuarios en la web. Puede consultar más información en: <Link href="https://policies.google.com/technologies/cookies" target="_blank" class="text-primary hover:underline">Política de Cookies de Google</Link>.
					</Text>
				</li>
				<li>
					<Text>
						<strong>Meta Pixel (Meta Platforms):</strong> Para seguimiento de conversiones y personalización de anuncios en Facebook e Instagram.
					</Text>
				</li>
			</ul>
			
			<Heading level="h2" class="mt-12 mb-4">4. Tabla de cookies utilizadas</Heading>
			<div class="overflow-x-auto mb-8">
				<table class="w-full border-collapse border border-border-default">
					<thead>
						<tr class="bg-surface-tertiary">
							<th class="border border-border-default p-3 text-left">Nombre</th>
							<th class="border border-border-default p-3 text-left">Tipo</th>
							<th class="border border-border-default p-3 text-left">Duración</th>
							<th class="border border-border-default p-3 text-left">Propósito</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="border border-border-default p-3">session_id</td>
							<td class="border border-border-default p-3">Necesaria</td>
							<td class="border border-border-default p-3">Sesión</td>
							<td class="border border-border-default p-3">Mantener la sesión del usuario</td>
						</tr>
						<tr>
							<td class="border border-border-default p-3">_ga</td>
							<td class="border border-border-default p-3">Analítica</td>
							<td class="border border-border-default p-3">2 años</td>
							<td class="border border-border-default p-3">Google Analytics - Identificación de usuarios</td>
						</tr>
						<tr>
							<td class="border border-border-default p-3">_gid</td>
							<td class="border border-border-default p-3">Analítica</td>
							<td class="border border-border-default p-3">24 horas</td>
							<td class="border border-border-default p-3">Google Analytics - Identificación de sesión</td>
						</tr>
						<tr>
							<td class="border border-border-default p-3">cookie_consent</td>
							<td class="border border-border-default p-3">Necesaria</td>
							<td class="border border-border-default p-3">1 año</td>
							<td class="border border-border-default p-3">Recordar preferencias de cookies</td>
						</tr>
						<tr>
							<td class="border border-border-default p-3">_fbp</td>
							<td class="border border-border-default p-3">Marketing</td>
							<td class="border border-border-default p-3">3 meses</td>
							<td class="border border-border-default p-3">Meta Pixel - Seguimiento de conversiones</td>
						</tr>
					</tbody>
				</table>
			</div>
			
			<Heading level="h2" class="mt-12 mb-4">5. Gestión y eliminación de cookies</Heading>
			<Text class="mb-4">
				El usuario puede configurar, bloquear o eliminar las cookies instaladas en su dispositivo mediante la configuración de las opciones de su navegador.
			</Text>
			<Text class="mb-4">
				A continuación, se indican enlaces con la información necesaria para la gestión de cookies en los principales navegadores:
			</Text>
			<ul class="list-disc space-y-2 mb-8 ml-6">
				<li><Link href="https://support.google.com/chrome/answer/95647" target="_blank" class="text-primary hover:underline">Google Chrome</Link></li>
				<li><Link href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" class="text-primary hover:underline">Mozilla Firefox</Link></li>
				<li><Link href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" class="text-primary hover:underline">Microsoft Edge</Link></li>
				<li><Link href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" class="text-primary hover:underline">Safari (Apple)</Link></li>
			</ul>
			<Text class="mb-8 text-warning">
				⚠️ La desactivación de cookies puede afectar a la correcta funcionalidad de este sitio web.
			</Text>
			
			<Heading level="h2" class="mt-12 mb-4">6. Conservación de las cookies</Heading>
			<Text class="mb-8">
				Las cookies se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron instaladas y nunca más allá del plazo máximo legal establecido. Las cookies de sesión se eliminan al cerrar el navegador, mientras que las cookies persistentes permanecen hasta su fecha de expiración o hasta que el usuario las elimine manualmente.
			</Text>
			
			<Heading level="h2" class="mt-12 mb-4">7. Consentimiento</Heading>
			<Text class="mb-4">
				Al pulsar el botón de "Aceptar" en el banner de cookies, el usuario consiente expresamente el uso de cookies según lo descrito en la presente Política. El consentimiento puede retirarse en cualquier momento:
			</Text>
			<ul class="list-disc space-y-2 mb-8 ml-6">
				<li><Text>Configurando el navegador para rechazar o eliminar cookies.</Text></li>
				<li><Text>Accediendo a la configuración de cookies desde el banner o esta página.</Text></li>
			</ul>
			
			<Heading level="h2" class="mt-12 mb-4">8. Modificaciones</Heading>
			<Text class="mb-8">
				Publisol podrá actualizar en cualquier momento la presente Política de Cookies, en función de exigencias normativas o por cambios en la configuración de los servicios utilizados. Se recomienda revisar esta política de manera periódica.
			</Text>
			
			<div class="mt-12 p-6 bg-primary/5 rounded-lg">
				<Text class="font-semibold mb-2">¿Tienes dudas sobre nuestras cookies?</Text>
				<Text>
					Puedes contactarnos en <Link href="mailto:privacidad@publisol.es" class="text-primary hover:underline">privacidad@publisol.es</Link> o consultar nuestra <Link href="/privacidad" class="text-primary hover:underline">Política de Privacidad</Link>.
				</Text>
			</div>
		</div>
	</div>
</article>

