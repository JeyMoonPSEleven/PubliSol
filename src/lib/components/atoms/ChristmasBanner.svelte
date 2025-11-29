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
	class="inline-flex items-center gap-2 rounded-full border border-black/20 bg-white px-4 py-2 text-xs font-medium text-black transition-all hover:border-black/40 hover:bg-gray-50 {className}"
	{...rest}
	in:fade={{ duration: 400, delay: 0 }}
>
	<span>{text}</span>
</a>

