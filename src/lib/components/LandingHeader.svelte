<script lang="ts">
	import { onMount } from "svelte";
	import { siteConfig } from "$lib/siteConfig";

	// Header siempre visible: transparente en top, sticky blanco al scroll
	let scrollY = $state(0);
	let isTransparent = $derived(scrollY < 50);

	onMount(() => {
		scrollY = window.scrollY;

		function handleScroll() {
			scrollY = window.scrollY;
		}

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	// Navegación interna de la landing - solo anclas a secciones de la misma landing
	const landingNavItems = [
		{ label: "Inicio", href: "#hero" },
		{ label: "Beneficios", href: "#beneficios" },
		{ label: "Cómo funciona", href: "#proceso" },
		{ label: "Testimonios", href: "#testimonios" },
		{ label: "Contacto", href: "#contacto" },
	];

	// Obtener el teléfono del siteConfig
	const phoneNumber = siteConfig.contact.phone.main.replace(/\s/g, "");
</script>

<!-- Header simplificado para Landing Page -->
<header
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {isTransparent
		? 'bg-transparent text-white shadow-none'
		: 'bg-white/95 backdrop-blur-md text-primary shadow-md'}"
>
	<nav class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-16 lg:h-24">
			<!-- Izquierda: Logo (sin link, solo visual) -->
			<div class="flex-shrink-0 flex items-center">
				<a
					href="#hero"
					class="flex items-center cursor-pointer"
					onclick={(e) => {
						e.preventDefault();
						const target = document.querySelector("#hero");
						if (target) {
							target.scrollIntoView({
								behavior: "smooth",
								block: "start",
							});
						}
					}}
				>
					<img
						src="/images/logo-publisol-green.png"
						alt={siteConfig.company.name}
						class="h-8 sm:h-10 lg:h-16 xl:h-20 w-auto"
						onerror={(e) => {
							const target = e.currentTarget as HTMLImageElement;
							target.src = "/images/logo-publisol-green.svg";
							target.onerror = () => {
								target.style.display = "none";
								const fallback =
									target.parentElement?.querySelector(
										".logo-fallback",
									) as HTMLElement;
								if (fallback) {
									fallback.style.display = "block";
								}
							};
						}}
					/>
					<span
						class="logo-fallback text-2xl sm:text-3xl xl:text-4xl font-bold leading-none {isTransparent
							? 'text-white'
							: 'text-primary'} transition-colors"
						style="display: none;">{siteConfig.company.name}</span
					>
				</a>
			</div>

			<!-- Centro: Navegación interna -->
			<div
				class="hidden lg:flex items-center gap-4 xl:gap-6 flex-1 justify-center"
			>
				{#each landingNavItems as item}
					<a
						href={item.href}
						class="text-sm xl:text-base h-full flex items-center justify-center text-gray-900 hover:text-primary font-medium transition-colors whitespace-nowrap px-2 rounded-xl hover:bg-primary/10 py-2"
						onclick={(e) => {
							e.preventDefault();
							const target = document.querySelector(item.href);
							if (target) {
								target.scrollIntoView({
									behavior: "smooth",
									block: "start",
								});
							}
						}}
					>
						{item.label}
					</a>
				{/each}
			</div>

			<!-- Derecha: CTA y Llamada -->
			<div class="flex items-center gap-2 lg:gap-3 flex-1 justify-end">
				<!-- Botón de llamada -->
				<a
					href="tel:{phoneNumber}"
					class="hidden sm:flex items-center gap-2 rounded-xl border-2 border-primary bg-white text-primary px-4 py-3.5 text-sm font-semibold transition-all duration-300 hover:bg-primary hover:text-white min-h-[56px] touch-target focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
					aria-label="Llamar a {siteConfig.contact.phone.main}"
				>
					<svg
						class="w-5 h-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
						/>
					</svg>
					<span class="hidden lg:inline">Llamar</span>
				</a>
				<!-- Botón CTA -->
				<a
					href="#contacto"
					class="hidden sm:block rounded-xl bg-primary text-text-on-primary px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:bg-primary-hover hover:text-text-on-primary hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 min-h-[56px] touch-target focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
					onclick={(e) => {
						e.preventDefault();
						const target = document.querySelector("#contacto");
						if (target) {
							target.scrollIntoView({
								behavior: "smooth",
								block: "start",
							});
						}
					}}
				>
					Solicitar Presupuesto
				</a>
			</div>
		</div>
	</nav>
</header>
