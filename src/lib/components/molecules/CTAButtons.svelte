<script lang="ts">
	import { fade } from "svelte/transition";
	import PublisolButton from "$lib/components/atoms/PublisolButton.svelte";

	type CTAButton = {
		text: string;
		href?: string;
		action?: () => void;
	};

	type Props = {
		primary: CTAButton;
		secondary: CTAButton;
		class?: string;
	};

	let { primary, secondary, class: className = "" }: Props = $props();
</script>

<div class="flex flex-wrap gap-3 {className}">
	<div in:fade={{ duration: 500, delay: 200 }}>
		<PublisolButton
			text={primary.text}
			variant="primary"
			size="md"
			href={primary.href}
			onclick={primary.action}
		/>
	</div>
	<div in:fade={{ duration: 500, delay: 300 }}>
		<PublisolButton
			text={secondary.text}
			variant="secondary"
			size="md"
			href={secondary.href}
			onclick={secondary.action}
		/>
	</div>
</div>

