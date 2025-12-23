<!-- ARCHIVADO: Sección de Nuestros Valores -->
<!-- Esta sección ha sido movida a _archived y no se muestra en la página nosotros -->
<script lang="ts">
	import { Heading, Text, Card } from "atomic-design-svelte";

	export let valores: Array<{
		title: string;
		description: string;
	}>;
</script>

<section class="py-16 bg-surface-page" id="valores">
	<div class="container mx-auto px-4">
		<Heading level="h2" class="text-center mb-12">Nuestros Valores</Heading>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
			{#each valores as valor}
				<Card padding="lg" elevation={1} class="hover-shadow-primary transition-all">
					{#snippet header()}
						<Heading level="h3" class="mb-4">{valor.title}</Heading>
					{/snippet}
					{#snippet children()}
						<Text class="text-text-muted">{valor.description}</Text>
					{/snippet}
				</Card>
			{/each}
		</div>
	</div>
</section>

