<script lang="ts">
	import { fade } from "svelte/transition";
	import type { HTMLAnchorAttributes } from "svelte/elements";

	type Props = HTMLAnchorAttributes & {
		href?: string;
		text?: string;
		class?: string;
	};

	let { href = "/use-cases/christmas-packs", text = "Haz tus pedidos de Navidad ahora🎄->", class: className = "", ...rest }: Props = $props();
</script>

<a
	href={href}
	class="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm px-4 py-2 text-xs font-medium text-primary transition-all hover:border-primary/50 hover:bg-primary/20 {className}"
	{...rest}
	in:fade={{ duration: 400, delay: 0 }}
>
	<span>{text}</span>
</a>

