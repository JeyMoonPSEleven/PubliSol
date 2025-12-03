<script lang="ts">
	/**
	 * Componente SEO reutilizable para todas las páginas
	 * Acepta título, descripción e imagen para OpenGraph y meta tags
	 * Incluye Schema Markup (JSON-LD) para mejor SEO
	 */
	type SchemaType =
		| "Organization"
		| "WebSite"
		| "LocalBusiness"
		| "Product"
		| "BlogPosting"
		| "Article"
		| "ContactPage";

	type Props = {
		title?: string;
		description?: string;
		image?: string;
		url?: string;
		type?: string;
		siteName?: string;
		schemaType?: SchemaType;
		schemaData?: Record<string, unknown>;
	};

	import { siteConfig } from "$lib/siteConfig";

	let {
		title = siteConfig.seo.defaultTitle,
		description = siteConfig.seo.defaultDescription,
		image = siteConfig.seo.defaultImage,
		url = "",
		type = "website",
		siteName = siteConfig.seo.companyName,
		schemaType = "Organization",
		schemaData = {},
	}: Props = $props();

	// Construir URL completa
	const fullUrl = $derived(
		url ? `${siteConfig.seo.siteUrl}${url}` : siteConfig.seo.siteUrl,
	);
	const fullImageUrl = $derived(
		image.startsWith("http") ? image : `${siteConfig.seo.siteUrl}${image}`,
	);

	// Generar Schema Markup (JSON-LD)
	const generateSchema = $derived(() => {
		const baseSchema = {
			"@context": "https://schema.org",
			"@type": schemaType,
			name: siteName,
			url: fullUrl,
			...(schemaData || {}),
		};

		// Schema base para Organization (homepage)
		if (
			(schemaType === "Organization" && !schemaData) ||
			Object.keys(schemaData).length === 0
		) {
			return {
				...baseSchema,
				logo: "https://publisolronda.com/logo.png",
				description: description,
				contactPoint: {
					"@type": "ContactPoint",
					telephone: "+34-653-189-599",
					contactType: "Customer Service",
					areaServed: "ES",
					availableLanguage: ["Spanish"],
				},
				sameAs: [
					"https://www.linkedin.com/company/publisol",
					"https://www.instagram.com/publisol",
				],
			};
		}

		// Schema para WebSite
		if (schemaType === "WebSite") {
			return {
				...baseSchema,
				description: description,
				potentialAction: {
					"@type": "SearchAction",
					target: {
						"@type": "EntryPoint",
						urlTemplate:
							"https://publisolronda.com/buscar?q={search_term_string}",
					},
					"query-input": "required name=search_term_string",
				},
			};
		}

		// Schema para LocalBusiness
		if (schemaType === "LocalBusiness") {
			return {
				...baseSchema,
				description: description,
				address: {
					"@type": "PostalAddress",
					addressCountry: "ES",
					addressLocality: "Málaga",
					addressRegion: "Málaga",
				},
				openingHoursSpecification: {
					"@type": "OpeningHoursSpecification",
					dayOfWeek: [
						"Monday",
						"Tuesday",
						"Wednesday",
						"Thursday",
						"Friday",
					],
					opens: "09:00",
					closes: "18:00",
				},
			};
		}

		return baseSchema;
	});

	const schemaJson = $derived(JSON.stringify(generateSchema(), null, 2));
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

	<!-- Schema Markup (JSON-LD) -->
	{@html `<script type="application/ld+json">${schemaJson}</script>`}
</svelte:head>
