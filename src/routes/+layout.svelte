<script lang="ts">
	// Importar estilos globales (incluye tokens del design-system)
	import "../app.css";
	import SiteHeader from "$lib/components/SiteHeader.svelte";
	import SiteFooter from "$lib/components/SiteFooter.svelte";
	import WhatsAppWidget from "$lib/components/WhatsAppWidget.svelte";
	import ScrollProgress from "$lib/components/magic-ui/ScrollProgress.svelte";

	let { children } = $props();
</script>

<ScrollProgress />

<SiteHeader />
<main class="min-h-screen">
	{@render children()}
</main>
<SiteFooter />
<WhatsAppWidget />

