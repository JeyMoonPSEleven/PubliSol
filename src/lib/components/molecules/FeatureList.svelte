<script lang="ts">
	import { fade } from "svelte/transition";

	type Feature = {
		text: string;
	};

	type Props = {
		features: Feature[];
		class?: string;
	};

	let { features, class: className = "" }: Props = $props();
</script>

<div class="flex flex-col gap-2 {className}">
	{#each features as feature, index}
		<div
			class="flex items-center gap-2"
			in:fade={{ duration: 500, delay: index * 100 }}
		>
			<div class="flex-shrink-0">
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="text-green-500"
				>
					<path
						d="M13.3333 4L6 11.3333L2.66667 8"
						stroke="rgb(34, 197, 94)"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>
			<span class="text-xs font-medium text-black/80">{feature.text}</span>
		</div>
	{/each}
</div>

