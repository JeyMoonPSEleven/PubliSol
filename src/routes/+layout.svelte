<script lang="ts">
	// Importar estilos globales (incluye tokens del design-system)
	import "../app.css";
	import SiteHeader from "$lib/components/SiteHeader.svelte";
	import SiteFooter from "$lib/components/SiteFooter.svelte";
	import WhatsAppWidget from "$lib/components/WhatsAppWidget.svelte";
	import ScrollProgress from "$lib/components/magic-ui/ScrollProgress.svelte";
	import BottomNavigation from "$lib/components/organisms/BottomNavigation.svelte";
	import { onMount } from "svelte";
	import { browser } from "$app/environment";

	let { children } = $props();

	// Habilitar View Transitions API si está disponible
	onMount(() => {
		if (browser && "startViewTransition" in document) {
			// View Transitions ya está disponible en SvelteKit 2+
			// Solo necesitamos asegurarnos de que esté habilitado
		}
	});
</script>

<ScrollProgress />

<SiteHeader />
<main class="min-h-dvh">
	{@render children()}
</main>
<SiteFooter />
<BottomNavigation />
<WhatsAppWidget />
