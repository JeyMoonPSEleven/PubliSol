<script lang="ts">
	import type { HTMLImgAttributes } from "svelte/elements";

	type Props = HTMLImgAttributes & {
		src: string;
		alt: string;
		width?: number;
		height?: number;
		priority?: boolean;
		class?: string;
	};

	let {
		src,
		alt,
		width,
		height,
		priority = false,
		class: className = "",
		...rest
	}: Props = $props();

	// Calcular aspect ratio si se proporcionan width y height
	const aspectRatio = width && height ? height / width : undefined;
</script>

<img
	{src}
	{alt}
	{width}
	{height}
	class="w-full h-full object-cover {className}"
	loading={priority ? "eager" : "lazy"}
	decoding="async"
	{...rest}
	style={aspectRatio
		? `aspect-ratio: ${width} / ${height};`
		: undefined}
/>

