<script lang="ts">
	import { fade } from "svelte/transition";

	type Certification = {
		name: string;
		image?: string;
		alt: string;
	};

	type Props = {
		certifications?: Certification[];
		class?: string;
	};

	let {
		certifications = [
			{ name: "ISO 9001", alt: "ISO 9001" },
			{ name: "ISO 14001", alt: "ISO 14001" },
			{ name: "Ecovadis Gold", alt: "Ecovadis Gold" },
		],
		class: className = "",
	}: Props = $props();
</script>

<div class="flex flex-wrap items-center gap-4 {className}" in:fade={{ duration: 500, delay: 500 }}>
	{#each certifications as cert}
		<div
			class="flex h-12 w-24 items-center justify-center rounded-lg bg-gray-100 px-3 transition-all hover:bg-gray-200"
			title={cert.alt}
		>
			{#if cert.image}
				<img src={cert.image} alt={cert.alt} class="h-full w-full object-contain" />
			{:else}
				<span class="text-[10px] font-semibold text-gray-600">{cert.name}</span>
			{/if}
		</div>
	{/each}
</div>

