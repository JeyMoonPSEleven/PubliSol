<script lang="ts">
	/**
	 * Componente SEO reutilizable para todas las páginas
	 * Acepta título, descripción e imagen para OpenGraph y meta tags
	 */
	type Props = {
		title?: string;
		description?: string;
		image?: string;
		url?: string;
		type?: string;
		siteName?: string;
	};

	let {
		title = "Publisol - Agendas y Merchandising Personalizado",
		description = "Desde 1995 creando productos únicos para colegios, empresas y asociaciones. Calidad, creatividad y servicio integral.",
		image = "https://images.unsplash.com/photo-1503676260728-1c00e094b736?w=1200&h=630&fit=crop&q=80",
		url = "",
		type = "website",
		siteName = "Publisol",
	}: Props = $props();

	// Construir URL completa
	const fullUrl = $derived(url ? `https://publisol.com${url}` : "https://publisol.com");
	const fullImageUrl = $derived(image.startsWith("http") ? image : `https://publisol.com${image}`);
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={type} />
	<meta property="og:url" content={fullUrl} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={fullImageUrl} />
	<meta property="og:site_name" content={siteName} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={fullUrl} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={fullImageUrl} />

	<!-- Additional Meta Tags -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="theme-color" content="#1E3A8A" />
	<link rel="canonical" href={fullUrl} />
</svelte:head>

