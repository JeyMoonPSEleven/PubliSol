<script lang="ts">
	export interface GlassCardProps {
		title: string;
		description?: string;
		image: string;
		tag?: string;
		className?: string;
	}

	let {
		title = "",
		description = "",
		image = "",
		tag = "",
		className = "",
	}: GlassCardProps = $props();
</script>

<article
	class={`relative overflow-hidden rounded-2xl border border-gray-200/60 bg-white/80 backdrop-blur-sm ${className}`}
>
	<div class="absolute inset-0">
		<img
			src={image}
			alt={title}
			class="absolute inset-0 h-full w-full object-cover opacity-70"
			loading="lazy"
		/>
		<div class="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-gray-900/10 to-transparent"></div>
	</div>

	<div class="relative z-10 flex h-full flex-col justify-end gap-1.5 p-4">
		{#if tag}
			<span class="text-[9px] font-semibold uppercase tracking-wider text-white/80">
				{tag}
			</span>
		{/if}
		<h3 class="text-base font-semibold text-white leading-tight">
			{title}
		</h3>
		{#if description}
			<p class="text-xs text-white/90 leading-snug line-clamp-2">{description}</p>
		{/if}
	</div>
</article>

