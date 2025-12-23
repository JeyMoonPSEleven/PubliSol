<!-- ARCHIVADO: Sección de Nuestro Equipo -->
<!-- Esta sección ha sido movida a _archived y no se muestra en la página nosotros -->
<script lang="ts">
	import { Heading, Text, Card } from "atomic-design-svelte";

	export let equipo: Array<{
		name: string;
		role: string;
		description: string;
		image: string;
	}>;
</script>

<section class="py-16 bg-surface-page" id="equipo">
	<div class="container mx-auto px-4">
		<Heading level="h2" class="text-center mb-12">Nuestro Equipo</Heading>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
			{#each equipo as miembro}
				<Card padding="lg" elevation={1} class="text-center hover-shadow-primary transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden">
					{#snippet header()}
						<div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm rounded-lg"></div>
						<div class="relative z-10">
							<div class="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden bg-surface-tertiary ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300 shadow-lg group-hover:shadow-xl">
								<img
									src={miembro.image}
									alt={miembro.name}
									class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
								/>
							</div>
							<Heading level="h3" class="mb-2 text-lg group-hover:text-primary transition-colors">{miembro.name}</Heading>
							<Text class="text-sm text-primary font-semibold mb-2">{miembro.role}</Text>
						</div>
					{/snippet}
					{#snippet children()}
						<div class="relative z-10">
							<Text class="text-sm text-text-muted leading-relaxed">{miembro.description}</Text>
						</div>
					{/snippet}
				</Card>
			{/each}
		</div>
	</div>
</section>

