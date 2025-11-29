<script lang="ts">
	import { fade } from "svelte/transition";

	type Product = {
		id: string;
		title: string;
		subtitle?: string;
		image: string;
		tags?: string[];
	};

	type Props = {
		product: Product;
		class?: string;
	};

	let { product, class: className = "" }: Props = $props();
</script>

<div
	class="@container group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 {className}"
	in:fade={{ duration: 500 }}
>
	<div class="aspect-square overflow-hidden">
		<img
			src={product.image}
			alt={product.title}
			class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
			loading="lazy"
			decoding="async"
			width="400"
			height="400"
		/>
	</div>
	<div class="p-3 @sm:p-4">
		{#if product.subtitle}
			<p class="mb-1 text-[10px] @sm:text-xs font-medium uppercase tracking-wide text-gray-500">
				{product.subtitle}
			</p>
		{/if}
		<h3 class="mb-2 text-xs @sm:text-sm font-semibold text-black line-clamp-2">{product.title}</h3>
		{#if product.tags && product.tags.length > 0}
			<div class="flex flex-wrap gap-1">
				{#each product.tags as tag}
					<span
						class="rounded-full bg-gray-100 px-1.5 @sm:px-2 py-0.5 text-[9px] @sm:text-[10px] font-medium text-gray-600"
					>
						{tag}
					</span>
				{/each}
			</div>
		{/if}
	</div>
</div>

