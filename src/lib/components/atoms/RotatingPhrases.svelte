<script lang="ts">
	import { fade } from "svelte/transition";
	import { onMount } from "svelte";

	interface RotatingPhrasesProps {
		phrases: string[];
		interval?: number; // Tiempo en ms que cada frase se muestra
		transitionDuration?: number; // Duración de la transición fade
		className?: string;
	}

	let {
		phrases = [],
		interval = 3000,
		transitionDuration = 500,
		className = "",
	}: RotatingPhrasesProps = $props();

	let currentIndex = $state(0);
	let isVisible = $state(true);
	let rotationInterval: ReturnType<typeof setInterval> | null = $state(null);

	const currentPhrase = $derived(phrases[currentIndex] || "");

	function rotatePhrase() {
		if (phrases.length <= 1) return;

		// Fade out
		isVisible = false;

		setTimeout(() => {
			// Cambiar a la siguiente frase
			currentIndex = (currentIndex + 1) % phrases.length;
			// Fade in
			isVisible = true;
		}, transitionDuration);
	}

	onMount(() => {
		if (phrases.length > 1) {
			rotationInterval = setInterval(rotatePhrase, interval);
		}

		return () => {
			if (rotationInterval) {
				clearInterval(rotationInterval);
			}
		};
	});
</script>

<div
	class="relative min-h-[1.2em] flex items-center {className}"
	aria-live="polite"
	role="status"
>
	{#if isVisible}
		<span
			class="block"
			transition:fade={{ duration: transitionDuration }}
		>
			{currentPhrase}
		</span>
	{:else}
		<span class="block opacity-0">{currentPhrase}</span>
	{/if}
</div>

