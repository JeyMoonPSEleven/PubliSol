<script lang="ts">
	import type { HTMLImgAttributes } from "svelte/elements";

	type Props = HTMLImgAttributes & {
		src: string;
		alt: string;
		width?: number;
		height?: number;
		priority?: boolean;
		class?: string;
		sizes?: string;
	};

	let {
		src,
		alt,
		width,
		height,
		priority = false,
		class: className = "",
		sizes = "100vw",
		...rest
	}: Props = $props();

	// Calcular aspect ratio si se proporcionan width y height
	const aspectRatio = width && height ? height / width : undefined;

	// Generar URLs optimizadas con vite-imagetools
	// Formato: ?w=800&format=webp o ?w=800&format=avif
	const getOptimizedSrc = (format: 'avif' | 'webp' | 'original', size?: number) => {
		if (src.startsWith('http') || src.startsWith('//')) {
			// URLs externas no se optimizan
			return src;
		}
		
		const baseUrl = src.split('?')[0];
		const params = new URLSearchParams();
		
		if (size) {
			params.set('w', size.toString());
		}
		
		if (format !== 'original') {
			params.set('format', format);
		}
		
		return params.toString() ? `${baseUrl}?${params.toString()}` : baseUrl;
	};

	// Generar srcset para responsive images
	const srcsetAvif = width
		? [400, 800, 1200, 1600]
				.filter((w) => w <= (width * 2))
				.map((w) => `${getOptimizedSrc('avif', w)} ${w}w`)
				.join(', ')
		: undefined;

	const srcsetWebp = width
		? [400, 800, 1200, 1600]
				.filter((w) => w <= (width * 2))
				.map((w) => `${getOptimizedSrc('webp', w)} ${w}w`)
				.join(', ')
		: undefined;

	const fallbackSrc = getOptimizedSrc('original', width);
</script>

<picture>
	{#if srcsetAvif}
		<source srcset={srcsetAvif} type="image/avif" {sizes} />
	{/if}
	{#if srcsetWebp}
		<source srcset={srcsetWebp} type="image/webp" {sizes} />
	{/if}
	<img
		src={fallbackSrc}
		{alt}
		{width}
		{height}
		class="w-full h-full object-cover {className}"
		loading={priority ? "eager" : "lazy"}
		fetchpriority={priority ? "high" : "low"}
		decoding="async"
		{sizes}
		{...rest}
		style={aspectRatio
			? `aspect-ratio: ${width} / ${height};`
			: undefined}
	/>
</picture>

