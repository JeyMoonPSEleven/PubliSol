<script lang="ts">
	// Layout específico para la landing - sin header ni footer del sitio
	import "../../app.css";
	import ScrollProgress from "$lib/components/magic-ui/ScrollProgress.svelte";
	import LandingHeader from "$lib/components/LandingHeader.svelte";

	let { children } = $props();
</script>

<ScrollProgress
	color="linear-gradient(90deg, var(--color-primary), var(--color-secondary))"
	height="3px"
	className="shadow-[0_8px_24px_rgba(16,185,129,0.35)] pointer-events-none"
/>

<LandingHeader />
<main class="min-h-dvh overflow-x-hidden">
	{@render children()}
</main>

