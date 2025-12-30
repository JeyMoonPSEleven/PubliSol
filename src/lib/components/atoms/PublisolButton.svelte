<script lang="ts">
	import { ArrowRight } from "lucide-svelte";
	import { Link } from "atomic-design-svelte";

	type Props = {
		/** Texto del botón */
		text: string;
		/** Variante del botón: 'primary' (con flecha) o 'secondary' (con borde) */
		variant?: "primary" | "secondary";
		/** Tamaño del botón */
		size?: "sm" | "md" | "lg";
		/** URL de destino (si se proporciona, se renderiza como Link) */
		href?: string;
		/** Función a ejecutar al hacer click (si se proporciona, se renderiza como button) */
		onclick?: () => void;
		/** Clases CSS adicionales */
		class?: string;
		/** Deshabilitado */
		disabled?: boolean;
		/** Tipo de botón (solo para variant button) */
		type?: "button" | "submit" | "reset";
	};

	let {
		text,
		variant = "primary",
		size = "md",
		href,
		onclick,
		class: className = "",
		disabled = false,
		type = "button",
	}: Props = $props();

	const sizeClasses = {
		sm: "px-4 py-2.5 text-sm min-h-[40px]",
		md: "px-6 py-3.5 text-sm min-h-[56px]",
		lg: "px-8 py-4 text-base min-h-[64px]",
	};

	const baseClasses =
		"inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

	const primaryClasses =
		"bg-primary text-white hover:bg-primary-hover hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30";

	const secondaryClasses =
		"border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white";
</script>

{#if href}
	<Link
		href={href}
		class="{baseClasses} {variant === 'primary' ? primaryClasses : secondaryClasses} {sizeClasses[size]} {className}"
		aria-label={text}
	>
		<span>{text}</span>
		{#if variant === "primary"}
			<ArrowRight
				class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
				aria-hidden="true"
			/>
		{/if}
	</Link>
{:else}
	<button
		type={type}
		onclick={onclick}
		disabled={disabled}
		class="group {baseClasses} {variant === 'primary' ? primaryClasses : secondaryClasses} {sizeClasses[size]} {className}"
		aria-label={text}
	>
		<span>{text}</span>
		{#if variant === "primary"}
			<ArrowRight
				class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
				aria-hidden="true"
			/>
		{/if}
	</button>
{/if}

