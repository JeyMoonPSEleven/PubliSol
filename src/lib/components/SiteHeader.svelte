<script lang="ts">
	import { Header, Button, SearchBar, Heading } from "atomic-design-svelte";
	import { Link } from "atomic-design-svelte";
	
	let isSearchOpen = $state(false);
	let isProductsMenuOpen = $state(false);
	
	const menuItems = [
		{ label: "Inicio", href: "/" },
		{ label: "Sobre Nosotros", href: "/nosotros" },
		{ label: "Catálogos", href: "/catalogos" },
		{ label: "Contacto", href: "/contacto" }
	];
	
	const productsMenuItems = [
		{
			title: "Agendas Escolares",
			items: [
				{ label: "Agendas Primaria", href: "/productos/agendas-primaria", icon: "📚" },
				{ label: "Agendas Secundaria", href: "/productos/agendas-secundaria", icon: "📖" },
				{ label: "Agendas Universitarias", href: "/productos/agendas-universitarias", icon: "🎓" },
				{ label: "Agendas Personalizadas", href: "/productos/agendas-personalizadas", icon: "✏️" }
			]
		},
		{
			title: "Merchandising Empresarial",
			items: [
				{ label: "Kits Corporativos", href: "/productos/kits-corporativos", icon: "🎁" },
				{ label: "Textil Corporativo", href: "/productos/textil-corporativo", icon: "👕" },
				{ label: "Material de Oficina", href: "/productos/material-oficina", icon: "🖊️" },
				{ label: "Regalos Empresariales", href: "/productos/regalos-empresariales", icon: "💼" },
				{ label: "Productos Sostenibles", href: "/productos/sostenibles", icon: "♻️" }
			]
		},
		{
			title: "Agendas & Papelería",
			items: [
				{ label: "Agendas Anuales", href: "/productos/agendas-anuales", icon: "📅" },
				{ label: "Cuadernos y Libretas", href: "/productos/cuadernos-libretas", icon: "📔" },
				{ label: "Planificadores", href: "/productos/planificadores", icon: "📋" },
				{ label: "Papelería Premium", href: "/productos/papeleria-premium", icon: "🎨" }
			]
		}
	];
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
			onmouseenter={() => isProductsMenuOpen = true}
			onmouseleave={() => isProductsMenuOpen = false}
		>
			<button 
				class="text-sm xl:text-base text-text-default hover:text-primary font-medium transition-colors flex items-center gap-1 whitespace-nowrap"
			>
				Productos
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
				</svg>
			</button>
			
			{#if isProductsMenuOpen}
				<div class="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[90vw] max-w-[800px] bg-white rounded-lg shadow-xl border border-border-default p-4 md:p-6 z-50">
					<div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
						{#each productsMenuItems as column}
							<div>
								<h3 class="font-semibold text-text-default mb-3 text-sm md:text-base">{column.title}</h3>
								<ul class="space-y-2">
									{#each column.items as subItem}
										<li>
											<Link 
												href={subItem.href}
												class="flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors py-1"
											>
												<span class="text-base">{subItem.icon}</span>
												<span>{subItem.label}</span>
											</Link>
										</li>
									{/each}
								</ul>
							</div>
						{/each}
						<div class="col-span-1 md:col-span-3 mt-4 pt-4 border-t border-border-default">
							<div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
								<div>
									<span class="text-sm font-semibold text-text-default">Nuevo 2025</span>
									<p class="text-xs sm:text-sm text-text-muted">Descubre nuestras novedades</p>
								</div>
								<Link href="/productos" class="text-sm text-primary hover:underline whitespace-nowrap">
									Ver todas las novedades →
								</Link>
							</div>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</nav>
{/snippet}

{#snippet mobileMenuButton()}
	<Button 
		intent="ghost" 
		size="sm"
		class="md:hidden"
	>
		<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
		</svg>
	</Button>
{/snippet}

{#snippet mobileNavigationPanel()}
	<div class="p-4 sm:p-6 space-y-4 bg-white max-h-[calc(100vh-64px)] overflow-y-auto">
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
						<p class="text-sm font-semibold text-text-default mb-2 px-2">{column.title}</p>
						<ul class="space-y-1">
							{#each column.items as subItem}
								<li>
									<Link 
										href={subItem.href}
										class="flex items-center gap-3 text-sm text-text-muted hover:text-primary hover:bg-surface-tertiary py-2.5 px-2 min-h-[44px] rounded-lg transition-colors"
									>
										<span class="text-lg flex-shrink-0">{subItem.icon}</span>
										<span class="flex-1">{subItem.label}</span>
									</Link>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>
		
		<div class="pt-4 border-t border-border-default space-y-3 sticky bottom-0 bg-white pb-2">
			<Button intent="primary" size="lg" class="w-full min-h-[48px] text-base" href="/contacto">
				Solicitar Presupuesto
			</Button>
			<button
				onclick={() => isSearchOpen = !isSearchOpen}
				class="w-full py-3 px-4 border-2 border-border-default rounded-lg text-text-default hover:bg-surface-tertiary hover:border-primary flex items-center justify-center gap-2 min-h-[48px] transition-colors text-base font-medium"
			>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
				</svg>
				<span>Buscar productos</span>
			</button>
		</div>
	</div>
{/snippet}

<div class="relative">
	<Header 
		{logo} 
		{navigation} 
		{mobileMenuButton} 
		{mobileNavigationPanel}
		class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border-muted shadow-sm"
	/>
	
	<!-- Search and CTA buttons (Desktop) -->
	<div class="hidden lg:flex items-center gap-3 xl:gap-4 absolute right-4 top-1/2 -translate-y-1/2 z-10">
		<button
			onclick={() => isSearchOpen = !isSearchOpen}
			class="p-2 text-text-muted hover:text-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
			aria-label="Buscar"
		>
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
			</svg>
		</button>
		
		<Button intent="primary" size="sm" href="/contacto" class="whitespace-nowrap text-sm xl:text-base">
			Solicitar Presupuesto
		</Button>
	</div>
</div>

{#if isSearchOpen}
	<div 
		class="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-16 sm:pt-20 px-4" 
		onclick={() => isSearchOpen = false}
		role="dialog"
		aria-modal="true"
		aria-label="Buscador"
	>
		<div 
			class="bg-white rounded-lg shadow-xl p-4 sm:p-6 w-full max-w-2xl" 
			onclick={(e) => e.stopPropagation()}
		>
			<div class="flex items-center justify-between mb-4">
				<Heading level="h3" class="text-lg sm:text-xl">Buscar productos</Heading>
				<button
					onclick={() => isSearchOpen = false}
					class="p-2 hover:bg-surface-tertiary rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
					aria-label="Cerrar buscador"
				>
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<SearchBar 
				placeholder="Buscar productos..."
				class="w-full"
			/>
		</div>
	</div>
{/if}

