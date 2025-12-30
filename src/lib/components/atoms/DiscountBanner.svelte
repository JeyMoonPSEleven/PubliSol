<script lang="ts">
	import { fade, fly } from "svelte/transition";
	import { Percent, Calendar, Package } from "lucide-svelte";

	type DiscountType = "volume" | "early";

	type Props = {
		type: DiscountType;
		class?: string;
	};

	let { type, class: className = "" }: Props = $props();

	const discounts = {
		volume: {
			title: "Descuentos por Volumen",
			description: "Hasta 15% de descuento según cantidad",
			details: "100-249 unidades: 5% | 250-499: 10% | 500+: 15%",
			icon: Package,
			color: "from-primary/20 to-primary/5",
			borderColor: "border-primary/30",
		},
		early: {
			title: "Descuento por Pronto Pedido",
			description: "8% adicional si confirmas antes del 31 de marzo 2026",
			details: "Descuentos acumulables hasta 23%",
			icon: Calendar,
			color: "from-accent/20 to-accent/5",
			borderColor: "border-accent/30",
		},
	};

	const discount = discounts[type];
	const Icon = discount.icon;
</script>

<div
	class="relative overflow-hidden rounded-xl border-2 {discount.borderColor} bg-gradient-to-br {discount.color} p-4 sm:p-5 backdrop-blur-sm {className}"
	in:fly={{ y: 20, duration: 500 }}
	transition:fade={{ duration: 300 }}
>
	<div class="flex items-start gap-4">
		<div
			class="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center"
		>
			<Icon class="w-6 h-6 text-primary" />
		</div>
		<div class="flex-1 min-w-0">
			<h3
				class="text-base sm:text-lg font-bold text-text-default mb-1 flex items-center gap-2"
			>
				<span>{discount.title}</span>
				<span
					class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-bold bg-primary text-text-on-primary animate-pulse"
				>
					<Percent class="w-3 h-3 mr-1" />
					{type === "volume" ? "Hasta 15%" : "8%"}
				</span>
			</h3>
			<p class="text-sm text-text-muted mb-2">{discount.description}</p>
			<p class="text-xs text-text-muted/80 font-medium">{discount.details}</p>
		</div>
	</div>
	<!-- Efecto de brillo animado -->
	<div
		class="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer-slide"
		style="--speed: 3s;"
	></div>
</div>

<style>
	@keyframes shimmer-slide {
		0% {
			transform: translateX(-100%) translateY(-100%) rotate(-45deg);
		}
		100% {
			transform: translateX(100%) translateY(100%) rotate(-45deg);
		}
	}

	.animate-shimmer-slide {
		animation: shimmer-slide var(--speed, 3s) linear infinite;
	}
</style>

