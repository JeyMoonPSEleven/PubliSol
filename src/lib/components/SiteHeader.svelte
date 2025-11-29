<script lang="ts">
	import { Header, Button, SearchBar, Heading } from "atomic-design-svelte";
	import { Link } from "atomic-design-svelte";
	import { onMount } from "svelte";
	import { fly, fade } from "svelte/transition";

	let isSearchOpen = $state(false);
	let isProductsMenuOpen = $state(false);
	let isHeaderVisible = $state(true);
	let lastScrollY = $state(0);
	let mobileMenuOpenCategories = $state<Record<string, boolean>>({});
	let productsMenuTimeout: ReturnType<typeof setTimeout> | null = null;

	const menuItems = [
		{ label: "Inicio", href: "/" },
		{ label: "Sobre Nosotros", href: "/nosotros" },
		{ label: "Catálogos", href: "/catalogos" },
		{ label: "Contacto", href: "/contacto" },
	];

	const productsMenuItems = [
		{
			title: "Agendas Escolares",
			items: [
				{
					label: "Agendas Educación Primaria",
					href: "/productos/agendas-escolares",
					icon: "📚",
				},
				{
					label: "Agendas EducaciónSecundaria",
					href: "/productos/agendas-escolares",
					icon: "📖",
				},
				{
					label: "Agendas Universitarias",
					href: "/productos/agendas-escolares",
					icon: "🎓",
				},
				{
					label: "Agendas Personalizadas",
					href: "/productos/agendas-escolares",
					icon: "✏️",
				},
			],
			featuredImage:
				"https://images.unsplash.com/photo-1503676260728-1c00e094b736?w=300&h=200&fit=crop&q=80",
			featuredTitle: "Producto del Mes",
			featuredDescription: "Mi primera agenda 2025",
		},
		{
			title: "Merchandising Empresarial",
			items: [
				{
					label: "Kits Corporativos",
					href: "/productos/merchandising",
					icon: "🎁",
				},
				{
					label: "Textil Corporativo",
					href: "/productos/textil",
					icon: "👕",
				},
				{
					label: "Material de Oficina",
					href: "/productos/papeleria",
					icon: "🖊️",
				},
				{
					label: "Regalos Empresariales",
					href: "/productos/merchandising",
					icon: "💼",
				},
				{
					label: "Productos Sostenibles",
					href: "/productos/sostenibles",
					icon: "♻️",
				},
			],
			featuredImage:
				"https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&h=200&fit=crop&q=80",
			featuredTitle: "Nuevo 2025",
			featuredDescription: "Kits de Bienvenida Premium",
		},
		{
			title: "Agendas & Papelería",
			items: [
				{
					label: "Agendas Anuales",
					href: "/productos/agendas-escolares",
					icon: "📅",
				},
				{
					label: "Cuadernos y Libretas",
					href: "/productos/papeleria",
					icon: "📔",
				},
				{
					label: "Planificadores",
					href: "/productos/papeleria",
					icon: "📋",
				},
				{
					label: "Papelería Premium",
					href: "/productos/papeleria",
					icon: "🎨",
				},
			],
			featuredImage:
				"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=200&fit=crop&q=80",
			featuredTitle: "Destacado",
			featuredDescription: "Colección Premium 2025",
		},
	];

	// Smart Sticky Header: ocultarse al hacer scroll hacia abajo, aparecer al hacer scroll hacia arriba
	onMount(() => {
		let ticking = false;

		function handleScroll() {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					const currentScrollY = window.scrollY;

					// Solo ocultar/mostrar después de cierto scroll (ej: 100px)
					if (currentScrollY > 100) {
						// Si el scroll es hacia abajo, ocultar header
						if (currentScrollY > lastScrollY) {
							isHeaderVisible = false;
						} else {
							// Si el scroll es hacia arriba, mostrar header
							isHeaderVisible = true;
						}
					} else {
						// Cerca del top, siempre mostrar
						isHeaderVisible = true;
					}

					lastScrollY = currentScrollY;
					ticking = false;
				});
				ticking = true;
			}
		}

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	function toggleMobileCategory(categoryTitle: string) {
		mobileMenuOpenCategories[categoryTitle] =
			!mobileMenuOpenCategories[categoryTitle];
		mobileMenuOpenCategories = { ...mobileMenuOpenCategories };
	}

	function openProductsMenu() {
		if (productsMenuTimeout) {
			clearTimeout(productsMenuTimeout);
			productsMenuTimeout = null;
		}
		isProductsMenuOpen = true;
	}

	function closeProductsMenu() {
		// Delay para dar tiempo al usuario de mover el ratón al dropdown
		productsMenuTimeout = setTimeout(() => {
			isProductsMenuOpen = false;
			productsMenuTimeout = null;
		}, 200); // 200ms de delay
	}

	function toggleProductsMenu() {
		if (isProductsMenuOpen) {
			closeProductsMenu();
		} else {
			openProductsMenu();
		}
	}

	function closeSearchOverlay() {
		isSearchOpen = false;
	}

	function handleSearchBackdropKeydown(event: KeyboardEvent) {
		if (event.key === "Escape") {
			closeSearchOverlay();
		} else if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			closeSearchOverlay();
		}
	}
</script>

{#snippet logo()}
	<Link href="/" class="flex items-center">
		<span class="text-xl sm:text-2xl font-bold text-primary">Publisol</span>
	</Link>
{/snippet}

{#snippet navigation()}
	<nav class="hidden lg:flex items-center gap-4 xl:gap-6">
		{#each menuItems as item}
			<Link
				href={item.href}
				class="text-sm xl:text-base text-text-default hover:text-primary font-medium transition-colors whitespace-nowrap"
			>
				{item.label}
			</Link>
		{/each}

		<!-- Dropdown de Productos -->
		<div
			class="relative"
			role="menu"
			tabindex="0"
			onmouseenter={openProductsMenu}
			onmouseleave={closeProductsMenu}
		>
			<button
				class="text-sm xl:text-base text-text-default hover:text-primary font-medium transition-colors flex items-center gap-1 whitespace-nowrap"
				onclick={toggleProductsMenu}
				onkeydown={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						toggleProductsMenu();
					}
				}}
				aria-expanded={isProductsMenuOpen}
				aria-haspopup="true"
			>
				Productos
				<svg
					class="w-4 h-4 transition-transform {isProductsMenuOpen
						? 'rotate-180'
						: ''}"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</button>

			{#if isProductsMenuOpen}
				<div
					class="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[90vw] max-w-[900px] bg-white rounded-lg shadow-xl border border-border-default p-4 md:p-6 z-50"
					transition:fly={{ y: -10, duration: 200 }}
					onmouseenter={openProductsMenu}
					onmouseleave={closeProductsMenu}
					role="menu"
					tabindex="0"
				>
					<div class="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
						{#each productsMenuItems as column}
							<div class="md:col-span-1">
								<h3
									class="font-semibold text-text-default mb-3 text-sm md:text-base"
								>
									{column.title}
								</h3>
								<ul class="space-y-2">
									{#each column.items as subItem}
										<li>
											<Link
												href={subItem.href}
												class="flex items-center gap-3 text-sm text-text-muted hover:text-primary transition-colors py-2 group"
											>
												<span
													class="text-xl group-hover:scale-110 transition-transform"
													>{subItem.icon}</span
												>
												<span class="flex-1"
													>{subItem.label}</span
												>
											</Link>
										</li>
									{/each}
								</ul>
							</div>
						{/each}
						<!-- Columna destacada con imagen -->
						<div class="md:col-span-1 hidden md:block">
							<div
								class="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-4 h-full"
							>
								<div
									class="aspect-video mb-3 rounded-lg overflow-hidden"
								>
									<img
										src={productsMenuItems[0].featuredImage}
										alt={productsMenuItems[0].featuredTitle}
										class="w-full h-full object-cover"
									/>
								</div>
								<h4
									class="font-semibold text-text-default text-sm mb-1"
								>
									{productsMenuItems[0].featuredTitle}
								</h4>
								<p class="text-xs text-text-muted mb-3">
									{productsMenuItems[0].featuredDescription}
								</p>
								<Link
									href="/productos/agendas-escolares"
									class="text-xs text-primary hover:underline font-medium"
								>
									Ver más →
								</Link>
							</div>
						</div>
					</div>
					<div
						class="col-span-1 md:col-span-4 mt-4 pt-4 border-t border-border-default"
					>
						<div
							class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
						>
							<div>
								<span
									class="text-sm font-semibold text-text-default"
									>Nuevo 2025</span
								>
								<p class="text-xs sm:text-sm text-text-muted">
									Descubre nuestras novedades
								</p>
							</div>
							<Link
								href="/productos"
								class="text-sm text-primary hover:underline whitespace-nowrap"
							>
								Ver todas las novedades →
							</Link>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</nav>
{/snippet}

{#snippet mobileMenuButton()}
	<Button intent="ghost" size="sm" class="md:hidden">
		<svg
			class="w-6 h-6"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4 6h16M4 12h16M4 18h16"
			/>
		</svg>
	</Button>
{/snippet}

{#snippet mobileNavigationPanel()}
	<div
		class="p-4 sm:p-6 space-y-4 bg-white max-h-[calc(100dvh-64px)] overflow-y-auto"
	>
		{#each menuItems as item}
			<Link
				href={item.href}
				class="block py-3 px-2 text-base text-text-default hover:text-primary hover:bg-surface-tertiary font-medium min-h-[48px] flex items-center rounded-lg transition-colors"
			>
				{item.label}
			</Link>
		{/each}

		<div class="pt-2 border-t border-border-default">
			<div class="space-y-2">
				{#each productsMenuItems as column}
					<div class="mb-3">
						<button
							onclick={() => toggleMobileCategory(column.title)}
							class="w-full flex items-center justify-between py-2.5 px-2 text-sm font-semibold text-text-default hover:bg-surface-tertiary rounded-lg transition-colors min-h-[44px]"
						>
							<span>{column.title}</span>
							<svg
								class="w-5 h-5 transition-transform {mobileMenuOpenCategories[
									column.title
								]
									? 'rotate-180'
									: ''}"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>
						{#if mobileMenuOpenCategories[column.title]}
							<ul
								class="space-y-1 pl-4 mt-1"
								transition:fade={{ duration: 200 }}
							>
								{#each column.items as subItem}
									<li>
										<Link
											href={subItem.href}
											class="flex items-center gap-3 text-sm text-text-muted hover:text-primary hover:bg-surface-tertiary py-2.5 px-2 min-h-[44px] rounded-lg transition-colors"
										>
											<span class="text-lg flex-shrink-0"
												>{subItem.icon}</span
											>
											<span class="flex-1"
												>{subItem.label}</span
											>
										</Link>
									</li>
								{/each}
							</ul>
						{/if}
					</div>
				{/each}
			</div>
		</div>

		<!-- Redes Sociales -->
		<div class="pt-4 border-t border-border-default">
			<Heading
				level="h4"
				class="text-sm font-semibold text-text-default mb-3 px-2"
				>Síguenos</Heading
			>
			<div class="flex gap-4 px-2">
				<a
					href="https://linkedin.com/company/publisol"
					target="_blank"
					rel="noopener noreferrer"
					class="text-text-muted hover:text-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-surface-tertiary"
					aria-label="LinkedIn"
				>
					<svg
						class="w-6 h-6"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
						/>
					</svg>
				</a>
				<a
					href="https://instagram.com/publisol"
					target="_blank"
					rel="noopener noreferrer"
					class="text-text-muted hover:text-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-surface-tertiary"
					aria-label="Instagram"
				>
					<svg
						class="w-6 h-6"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
						/>
					</svg>
				</a>
				<a
					href="https://facebook.com/publisol"
					target="_blank"
					rel="noopener noreferrer"
					class="text-text-muted hover:text-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-surface-tertiary"
					aria-label="Facebook"
				>
					<svg
						class="w-6 h-6"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
						/>
					</svg>
				</a>
			</div>
		</div>

		<div
			class="pt-4 border-t border-border-default space-y-3 sticky bottom-0 bg-white pb-2"
		>
			<Button
				intent="primary"
				size="lg"
				class="w-full min-h-[48px] text-base"
				href="/contacto"
			>
				Solicitar Presupuesto
			</Button>
			<button
				onclick={() => (isSearchOpen = !isSearchOpen)}
				class="w-full py-3 px-4 border-2 border-border-default rounded-lg text-text-default hover:bg-surface-tertiary hover:border-primary flex items-center justify-center gap-2 min-h-[48px] transition-colors text-base font-medium"
			>
				<svg
					class="w-5 h-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
				<span>Buscar productos</span>
			</button>
		</div>
	</div>
{/snippet}

<div class="relative">
	<div
		class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border-muted shadow-sm transition-transform duration-300 {isHeaderVisible
			? 'translate-y-0'
			: '-translate-y-full'}"
	>
		<Header
			{logo}
			{navigation}
			{mobileMenuButton}
			{mobileNavigationPanel}
		/>
	</div>

	<!-- Search and CTA buttons (Desktop) -->
	<div
		class="hidden lg:flex items-center gap-3 xl:gap-4 absolute right-4 top-1/2 -translate-y-1/2 z-10"
	>
		<button
			onclick={() => (isSearchOpen = !isSearchOpen)}
			class="p-2 text-text-muted hover:text-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
			aria-label="Buscar"
		>
			<svg
				class="w-5 h-5"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/>
			</svg>
		</button>

		<Button
			intent="primary"
			size="sm"
			href="/contacto"
			class="whitespace-nowrap text-sm xl:text-base"
		>
			Solicitar Presupuesto
		</Button>
	</div>
</div>

{#if isSearchOpen}
	<div
		class="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-16 sm:pt-20 px-4"
		onclick={closeSearchOverlay}
		onkeydown={handleSearchBackdropKeydown}
		role="dialog"
		aria-modal="true"
		aria-label="Buscador"
		tabindex="0"
	>
		<div
			class="bg-white rounded-lg shadow-xl p-4 sm:p-6 w-full max-w-2xl"
			onclick={(e) => e.stopPropagation()}
			onkeydown={(e) => e.stopPropagation()}
			role="presentation"
		>
			<div class="flex items-center justify-between mb-4">
				<Heading level="h3" class="text-lg sm:text-xl"
					>Buscar productos</Heading
				>
				<button
					onclick={() => (isSearchOpen = false)}
					class="p-2 hover:bg-surface-tertiary rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
					aria-label="Cerrar buscador"
				>
					<svg
						class="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
			<SearchBar placeholder="Buscar productos..." class="w-full" />
		</div>
	</div>
{/if}
