<script lang="ts">
	export interface GlassCardProps {
		title: string;
		description?: string;
		image: string;
		tag?: string;
		className?: string;
	}

	export let title = "";
	export let description = "";
	export let image = "";
	export let tag = "";
	export let className = "";
</script>

<article
	class={`relative overflow-hidden rounded-[32px] border border-white/25 bg-white/5 shadow-[0_30px_80px_rgba(2,6,23,0.75)] backdrop-blur-2xl ${className}`}
>
	<div class="absolute inset-0">
		<img
			src={image}
			alt={title}
			class="absolute inset-0 h-full w-full object-cover opacity-90"
			loading="lazy"
		/>
		<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
		<div class="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/10 blur-3xl opacity-70"></div>
	</div>

	<div class="relative z-10 flex h-full flex-col justify-end gap-2 p-6">
		{#if tag}
			<span class="text-[10px] font-semibold uppercase tracking-[0.4em] text-white/70">
				{tag}
			</span>
		{/if}
		<h3 class="text-xl sm:text-2xl font-semibold text-white leading-tight">
			{title}
		</h3>
		{#if description}
			<p class="text-sm text-white/80 leading-relaxed">{description}</p>
		{/if}
	</div>
</article>

