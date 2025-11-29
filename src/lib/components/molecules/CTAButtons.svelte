<script lang="ts">
	import { fade } from "svelte/transition";

	type CTAButton = {
		text: string;
		href: string;
	};

	type Props = {
		primary: CTAButton;
		secondary: CTAButton;
		class?: string;
	};

	let { primary, secondary, class: className = "" }: Props = $props();
</script>

<div class="flex flex-wrap gap-3 {className}">
	<a
		href={primary.href}
		class="group inline-flex items-center justify-center gap-2 rounded-xl bg-[rgb(6,81,63)] px-6 py-3.5 text-sm font-semibold text-[rgb(244,251,248)] transition-all duration-300 hover:bg-[rgb(5,65,50)] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[rgb(6,81,63)]/30 min-h-[56px] touch-target"
		in:fade={{ duration: 500, delay: 200 }}
		aria-label={primary.text}
	>
		<span>{primary.text}</span>
		<svg
			width="16"
			height="16"
			viewBox="0 0 256 256"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="transition-transform duration-300 group-hover:translate-x-1"
		>
			<path
				d="M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"
				fill="currentColor"
			/>
		</svg>
	</a>

	<a
		href={secondary.href}
		class="inline-flex items-center justify-center rounded-xl border border-[rgb(6,81,63)] bg-white px-6 py-3.5 text-sm font-semibold text-[rgb(6,81,63)] transition-all duration-300 hover:bg-[rgb(6,81,63)] hover:text-white min-h-[56px] touch-target"
		in:fade={{ duration: 500, delay: 300 }}
		aria-label={secondary.text}
	>
		{secondary.text}
	</a>
</div>

