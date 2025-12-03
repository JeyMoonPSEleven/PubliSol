<script lang="ts">
	import { Link } from "atomic-design-svelte";
	import { page } from "$app/stores";

	type NavItem = {
		label: string;
		href: string;
		ariaLabel: string;
	};

	const navItems: NavItem[] = [
		{
			label: "Inicio",
			href: "/",
			ariaLabel: "Ir a inicio",
		},
		{
			label: "Productos",
			href: "/productos",
			ariaLabel: "Ver productos",
		},
		{
			label: "Contacto",
			href: "/contacto",
			ariaLabel: "Contactar con nosotros",
		},
		{
			label: "Catálogos",
			href: "/catalogos",
			ariaLabel: "Ver catálogos",
		},
	];

	let currentPath = $derived($page.url.pathname);

	function isActive(href: string): boolean {
		if (href === "/") {
			return currentPath === "/";
		}
		return currentPath.startsWith(href);
	}
</script>

<!-- Bottom Navigation - Solo visible en móvil (Thumb Zone) -->
<nav
	class="fixed bottom-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-t border-border-default shadow-lg lg:hidden pb-safe"
	aria-label="Navegación principal móvil"
>
	<div class="flex items-center justify-around px-1 sm:px-2 py-2.5 sm:py-3">
		{#each navItems as item}
			{@const active = isActive(item.href)}
			<Link
				href={item.href}
				class="flex flex-col items-center justify-center gap-1 px-2 sm:px-3 py-2 min-h-[56px] min-w-[56px] rounded-lg transition-all duration-200 touch-target {active
					? 'text-primary bg-primary/10'
					: 'text-text-default hover:text-primary hover:bg-surface-tertiary'}"
				aria-label={item.ariaLabel}
				aria-current={active ? "page" : undefined}
			>
				<!-- Icono Home -->
				{#if item.href === "/"}
					<svg
						class="w-6 h-6 transition-all duration-200 {active ? 'scale-110' : ''}"
						fill={active ? "currentColor" : "none"}
						stroke="currentColor"
						stroke-width={active ? "0" : "2"}
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						{#if active}
							<!-- Home relleno -->
							<path
								d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
							/>
							<path
								d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
							/>
						{:else}
							<!-- Home outline -->
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
							/>
						{/if}
					</svg>
				{/if}

				<!-- Icono Productos -->
				{#if item.href === "/productos"}
					<svg
						class="w-6 h-6 transition-all duration-200 {active ? 'scale-110' : ''}"
						fill={active ? "currentColor" : "none"}
						stroke="currentColor"
						stroke-width={active ? "0" : "2"}
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						{#if active}
							<!-- Shopping Bag relleno -->
							<path
								d="M5.507 4.048A3 3 0 017.785 3h8.43a3 3 0 012.278 1.048l1.722 2.008A4.533 4.533 0 0019.5 6h-15c-.243 0-.482.02-.715.056l1.722-2.008z"
							/>
							<path
								fill-rule="evenodd"
								d="M1.5 10.5a3 3 0 013-3h15a3 3 0 110 6h-15a3 3 0 01-3-3z"
								clip-rule="evenodd"
							/>
							<path
								d="M3 18.75V19.5A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 19.5v-.75M9 16.5v.75M9 16.5H7.5M9 16.5h1.5m-1.5 0v-.75m0 .75H10.5m-1.5 0H7.5m0 0H6m1.5 0v.75M6 16.5h1.5m0 0H9m-1.5 0v.75M9 16.5h1.5m-1.5 0H12m3-2.25v.75m0-.75v-.75m0 0H15m0 0h-1.5m0 0H12m1.5 0H15m-1.5 0v.75m0-.75v.75M15 16.5h1.5m-1.5 0H18m-1.5 0v.75m1.5-.75v-.75M18 16.5h-1.5m1.5 0H18"
							/>
						{:else}
							<!-- Shopping Bag outline -->
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12A1.875 1.875 0 0118.75 22H5.25a1.875 1.875 0 01-1.875-1.993l1.263-12A1.875 1.875 0 016.513 7.5h10.974c.576 0 1.059.435 1.126 1.007zM8.25 10.5V6a2.25 2.25 0 114.5 0v4.5m-4.5 0V6a2.25 2.25 0 104.5 0v4.5"
							/>
						{/if}
					</svg>
				{/if}

				<!-- Icono Contacto -->
				{#if item.href === "/contacto"}
					<svg
						class="w-6 h-6 transition-all duration-200 {active ? 'scale-110' : ''}"
						fill={active ? "currentColor" : "none"}
						stroke="currentColor"
						stroke-width={active ? "0" : "2"}
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						{#if active}
							<!-- Envelope relleno -->
							<path
								d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
							/>
							<path
								d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
							/>
						{:else}
							<!-- Envelope outline -->
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
							/>
						{/if}
					</svg>
				{/if}

				<!-- Icono Catálogos -->
				{#if item.href === "/catalogos"}
					<svg
						class="w-6 h-6 transition-all duration-200 {active ? 'scale-110' : ''}"
						fill={active ? "currentColor" : "none"}
						stroke="currentColor"
						stroke-width={active ? "0" : "2"}
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						{#if active}
							<!-- Document relleno -->
							<path
								fill-rule="evenodd"
								d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009.75 1.5H5.625z"
								clip-rule="evenodd"
							/>
							<path
								d="M12.971 1.816A5.25 5.25 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.25 5.25 0 013.434 1.279 9.81 9.81 0 00-6.963-6.963z"
							/>
						{:else}
							<!-- Document outline -->
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
							/>
						{/if}
					</svg>
				{/if}

				<span class="text-[10px] font-medium leading-tight mt-0.5">{item.label}</span>
			</Link>
		{/each}
	</div>
</nav>

<style>
	/* Asegurar que el contenido no quede oculto detrás de la navegación */
	:global(main) {
		padding-bottom: calc(72px + env(safe-area-inset-bottom));
	}

	@media (min-width: 1024px) {
		:global(main) {
			padding-bottom: 0;
		}
	}
</style>
