<script lang="ts">
	import { Button, Heading, Text } from "atomic-design-svelte";
	import { Link } from "atomic-design-svelte";
	import { onMount } from "svelte";
	import { fly, fade } from "svelte/transition";
	import {
		BookOpen,
		GraduationCap,
		Pencil,
		Gift,
		Shirt,
		Pen,
		Briefcase,
		Recycle,
		Calendar,
		Notebook,
		ClipboardList,
		Palette,
	} from "lucide-svelte";
	import { siteConfig } from "$lib/siteConfig";
	import {
		searchProducts,
		type ProductSearchItem,
	} from "$lib/data/productsIndex";

	let isSearchOpen = $state(false);
	let searchQuery = $state("");
	let isProductsMenuOpen = $state(false);
	let isMobileMenuOpen = $state(false);
	let mobileMenuOpenCategories = $state<Record<string, boolean>>({});
	let productsMenuTimeout: ReturnType<typeof setTimeout> | null = null;
	let searchInputElement: HTMLInputElement | null = $state(null);

	// Buscar productos usando el índice centralizado
	let filteredSuggestions = $derived(searchProducts(searchQuery));

	const menuItems = siteConfig.navigation.main;

	const productsMenuItems = [
		{
			title: "Agendas Escolares",
			items: [
				{
					label: "Agendas Educación Primaria",
					href: "/productos/agendas-escolares",
					icon: BookOpen,
				},
				{
					label: "Agendas Educación Secundaria",
					href: "/productos/agendas-escolares",
					icon: BookOpen,
				},
				{
					label: "Agendas Universitarias",
					href: "/productos/agendas-escolares",
					icon: GraduationCap,
				},
				{
					label: "Agendas Personalizadas",
					href: "/productos/agendas-escolares",
					icon: Pencil,
				},
			],
			featuredImage: "/images/products/agenda-premium.png",
			featuredTitle: "Producto del Mes",
			featuredDescription: "Mi primera agenda 2025",
		},
		{
			title: "Merchandising Empresarial",
			items: [
				{
					label: "Kits Corporativos",
					href: "/productos/merchandising",
					icon: Gift,
				},
				{
					label: "Textil Corporativo",
					href: "/productos/textil",
					icon: Shirt,
				},
				{
					label: "Material de Oficina",
					href: "/productos/papeleria",
					icon: Pen,
				},
				{
					label: "Regalos Empresariales",
					href: "/productos/merchandising",
					icon: Briefcase,
				},
				{
					label: "Productos Sostenibles",
					href: "/productos/sostenibles",
					icon: Recycle,
				},
			],
			featuredImage: "/images/products/kit-bienvenida.png",
			featuredTitle: "Nuevo 2025",
			featuredDescription: "Kits de Bienvenida Premium",
		},
		{
			title: "Agendas & Papelería",
			items: [
				{
					label: "Agendas Anuales",
					href: "/productos/agendas-escolares",
					icon: Calendar,
				},
				{
					label: "Cuadernos y Libretas",
					href: "/productos/papeleria",
					icon: Notebook,
				},
				{
					label: "Planificadores",
					href: "/productos/papeleria",
					icon: ClipboardList,
				},
				{
					label: "Papelería Premium",
					href: "/productos/papeleria",
					icon: Palette,
				},
			],
			featuredImage: "/images/products/libreta-ejecutiva.png",
			featuredTitle: "Destacado",
			featuredDescription: "Colección Premium 2025",
		},
	];

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
		productsMenuTimeout = setTimeout(() => {
			isProductsMenuOpen = false;
			productsMenuTimeout = null;
		}, 200);
	}

	function toggleProductsMenu() {
		if (isProductsMenuOpen) {
			closeProductsMenu();
		} else {
			openProductsMenu();
		}
	}

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function closeSearchOverlay() {
		isSearchOpen = false;
		searchQuery = "";
	}

	function handleSearchSubmit() {
		if (searchQuery.trim()) {
			window.location.href = `/productos?q=${encodeURIComponent(searchQuery.trim())}`;
		}
	}

	function handleSearchKeydown(event: KeyboardEvent) {
		if (event.key === "Enter") {
			event.preventDefault();
			handleSearchSubmit();
		} else if (event.key === "Escape") {
			closeSearchOverlay();
		}
	}

	function handleSearchBackdropKeydown(event: KeyboardEvent) {
		if (event.key === "Escape") {
			closeSearchOverlay();
		}
	}

	// Focus programático cuando se abre el modal de búsqueda
	$effect(() => {
		if (isSearchOpen && searchInputElement) {
			setTimeout(() => {
				searchInputElement?.focus();
			}, 100);
		}
	});
</script>

<!-- Header con Layout Flexbox: Nav (izq) | Logo (centro) | Buscador+CTA (derecha) -->
<header
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {isTransparent
		? 'bg-transparent text-white shadow-none'
		: 'bg-white/95 backdrop-blur-md text-primary shadow-md'}"
>
	<nav class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-16 lg:h-20">
			<!-- Izquierda: Logo -->
			<div class="flex-shrink-0 flex items-center">
				<Link href="/" class="flex items-center">
					<!-- Logo Verde Publisol -->
					<img
						src="/images/logo-publisol-green.png"
						alt={siteConfig.company.name}
						class="h-8 sm:h-10 lg:h-12 w-auto"
						onerror={(e) => {
							// Fallback a SVG si no existe el PNG
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
				</Link>
			</div>

			<!-- Centro: Navegación -->
			<div class="flex items-center gap-4 lg:gap-6 flex-1 justify-center">
				<!-- Menú Hamburguesa (Mobile) -->
				<button
					onclick={toggleMobileMenu}
					class="lg:hidden p-2 text-gray-900 hover:bg-surface-tertiary rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
					aria-label="Menú"
					aria-expanded={isMobileMenuOpen}
				>
					<svg
						class="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						{#if isMobileMenuOpen}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						{:else}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						{/if}
					</svg>
				</button>

				<!-- Navegación Desktop -->
				<div class="hidden lg:flex items-center gap-4 xl:gap-6">
					<!-- Dropdown de Productos -->
					<div
						class="relative h-full flex items-center"
						role="menu"
						tabindex="0"
						onmouseenter={openProductsMenu}
						onmouseleave={closeProductsMenu}
					>
						<button
							class="text-sm xl:text-base h-full flex items-center text-gray-900 hover:text-primary font-medium transition-colors gap-1 whitespace-nowrap px-2"
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
								class="absolute top-full left-0 mt-2 w-[90vw] max-w-[900px] bg-white rounded-lg shadow-xl border border-border-default p-4 md:p-6 z-50"
								transition:fly={{ y: -10, duration: 200 }}
								onmouseenter={openProductsMenu}
								onmouseleave={closeProductsMenu}
								role="menu"
								tabindex="0"
							>
								<div
									class="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6"
								>
									{#each productsMenuItems as column}
										<div class="md:col-span-1">
											<h3
												class="font-semibold text-text-default mb-3 text-sm md:text-base"
											>
												{column.title}
											</h3>
											<ul class="space-y-2">
												{#each column.items as subItem}
													{@const Icon = subItem.icon}
													<li>
														<Link
															href={subItem.href}
															class="flex items-center gap-3 text-sm text-text-muted hover:text-primary transition-colors py-2 group"
														>
															<Icon
																class="w-5 h-5 group-hover:scale-110 transition-transform"
															/>
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
													src={productsMenuItems[0]
														.featuredImage}
													alt={productsMenuItems[0]
														.featuredTitle}
													class="w-full h-full object-cover"
												/>
											</div>
											<h4
												class="font-semibold text-text-default text-sm mb-1"
											>
												{productsMenuItems[0]
													.featuredTitle}
											</h4>
											<p
												class="text-xs text-text-muted mb-3"
											>
												{productsMenuItems[0]
													.featuredDescription}
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
											<p
												class="text-xs sm:text-sm text-text-muted"
											>
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

					<!-- Resto de menú items -->
					{#each menuItems as item}
						<Link
							href={item.href}
							class="text-sm xl:text-base h-full flex items-center justify-center text-gray-900 hover:text-primary font-medium transition-colors whitespace-nowrap px-2"
						>
							{item.label}
						</Link>
					{/each}
				</div>
			</div>

			<!-- Derecha: Buscador + CTA -->
			<div class="flex items-center gap-2 lg:gap-3 flex-1 justify-end">
				<!-- Buscador -->
				<button
					onclick={() => (isSearchOpen = !isSearchOpen)}
					class="p-2 text-gray-900 hover:text-primary hover:bg-surface-tertiary rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
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

				<!-- CTA Button -->
				<Link href="/contacto" class="hidden sm:block">
					<Button
						intent="primary"
						size="sm"
						class="whitespace-nowrap text-sm xl:text-base bg-[#2e7625] hover:bg-[#256020] text-white border-[#2e7625] hover:border-[#256020]"
					>
						Solicitar Presupuesto
					</Button>
				</Link>
			</div>
		</div>
	</nav>

	<!-- Menú Móvil -->
	{#if isMobileMenuOpen}
		<div
			class="lg:hidden border-t border-border-default bg-white max-h-[calc(100dvh-64px)] overflow-y-auto"
			transition:fly={{ y: -20, duration: 200 }}
		>
			<div class="p-4 sm:p-6 space-y-4">
				<!-- Productos en móvil -->
				<div class="pt-2 border-t border-border-default">
					<div class="space-y-2">
						{#each productsMenuItems as column}
							<div class="mb-3">
								<button
									onclick={() =>
										toggleMobileCategory(column.title)}
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
											{@const Icon = subItem.icon}
											<li>
												<Link
													href={subItem.href}
													onclick={() =>
														(isMobileMenuOpen = false)}
													class="flex items-center gap-3 text-sm text-text-muted hover:text-primary hover:bg-surface-tertiary py-2.5 px-2 min-h-[44px] rounded-lg transition-colors"
												>
													<Icon
														class="w-5 h-5 flex-shrink-0"
													/>
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

				{#each menuItems as item}
					<Link
						href={item.href}
						onclick={() => (isMobileMenuOpen = false)}
						class="block py-3 px-2 text-base text-text-default hover:text-primary hover:bg-surface-tertiary font-medium min-h-[48px] flex items-center rounded-lg transition-colors"
					>
						{item.label}
					</Link>
				{/each}

				<!-- Redes Sociales -->
				<div class="pt-4 border-t border-border-default">
					<Heading
						level="h4"
						class="text-sm font-semibold text-text-default mb-3 px-2"
						>Síguenos</Heading
					>
					<div class="flex gap-4 px-2">
						{#if siteConfig.social.linkedin}
							<a
								href={siteConfig.social.linkedin}
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
						{/if}
						{#if siteConfig.social.instagram}
							<a
								href={siteConfig.social.instagram}
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
						{/if}
						{#if siteConfig.social.facebook}
							<a
								href={siteConfig.social.facebook}
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
						{/if}
					</div>
				</div>

				<div
					class="pt-4 border-t border-border-default space-y-3 sticky bottom-0 bg-white pb-2"
				>
					<Link
						href="/contacto"
						onclick={() => (isMobileMenuOpen = false)}
					>
						<Button
							intent="primary"
							size="lg"
							class="w-full min-h-[48px] text-base"
						>
							Solicitar Presupuesto
						</Button>
					</Link>
					<button
						onclick={() => {
							isSearchOpen = !isSearchOpen;
							isMobileMenuOpen = false;
						}}
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
		</div>
	{/if}
</header>

<!-- Modal de Búsqueda -->
{#if isSearchOpen}
	<div
		class="fixed inset-0 bg-black/50 z-[60] flex items-start justify-center pt-16 sm:pt-20 px-4"
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
			<div class="flex gap-2 mb-4">
				<input
					type="text"
					bind:value={searchQuery}
					bind:this={searchInputElement}
					onkeydown={handleSearchKeydown}
					placeholder="Buscar productos..."
					class="flex-1 px-4 py-3 border border-border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-base min-h-[48px]"
				/>
				<Button
					intent="primary"
					onclick={handleSearchSubmit}
					class="px-6 min-h-[48px]"
				>
					Buscar
				</Button>
			</div>

			<!-- Sugerencias de productos -->
			{#if filteredSuggestions.length > 0}
				<div class="border-t border-border-default pt-4">
					<Text
						class="text-sm font-semibold text-text-default mb-3 block"
					>
						{#if searchQuery.trim() === ""}
							Productos destacados
						{:else}
							Sugerencias
						{/if}
					</Text>
					<div class="space-y-2 max-h-[400px] overflow-y-auto">
						{#each filteredSuggestions as product}
							<Link
								href={product.href}
								onclick={() => (isSearchOpen = false)}
								class="flex items-center justify-between p-3 rounded-lg hover:bg-surface-tertiary transition-colors group min-h-[48px]"
							>
								<div class="flex-1">
									<Text
										class="font-medium text-text-default group-hover:text-primary transition-colors"
									>
										{product.name}
									</Text>
									<Text
										class="text-xs text-text-muted mt-0.5"
									>
										{product.category}
									</Text>
								</div>
								<svg
									class="w-5 h-5 text-text-muted group-hover:text-primary transition-colors flex-shrink-0"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 5l7 7-7 7"
									/>
								</svg>
							</Link>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	</div>
{/if}
