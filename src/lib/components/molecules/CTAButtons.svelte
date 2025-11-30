<script lang="ts">
	import { fade } from "svelte/transition";
	import { ArrowRight } from "lucide-svelte";

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
		class="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-text-on-primary px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 min-h-[56px] touch-target focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
		in:fade={{ duration: 500, delay: 200 }}
		aria-label={primary.text}
	>
		<span>{primary.text}</span>
		<ArrowRight
			class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
			aria-hidden="true"
		/>
	</a>

	<a
		href={secondary.href}
		class="inline-flex items-center justify-center rounded-xl border-2 border-primary bg-white text-primary px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:bg-primary hover:text-text-on-primary min-h-[56px] touch-target focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
		in:fade={{ duration: 500, delay: 300 }}
		aria-label={secondary.text}
	>
		{secondary.text}
	</a>
</div>

