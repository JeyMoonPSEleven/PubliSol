<script lang="ts">
	import { onMount } from "svelte";

	interface TypewriterTextProps {
		text?: string;
		speed?: number;
		className?: string;
	}

	let {
		text = "",
		speed = 70,
		className = "",
	}: TypewriterTextProps = $props();

	let displayText = $state("");
	let charIndex = $state(0);
	let typingInterval: ReturnType<typeof setInterval> | null = $state(null);
	let previousText = $state("");

	const clearTyping = () => {
		if (typingInterval) {
			clearInterval(typingInterval);
			typingInterval = null;
		}
	};

	const startTyping = () => {
		clearTyping();

		if (!text) {
			displayText = "";
			charIndex = 0;
			return;
		}

		charIndex = 0;
		displayText = "";
		const delay = Math.max(speed, 30);

		typingInterval = setInterval(() => {
			charIndex += 1;
			displayText = text.slice(0, charIndex);

			if (charIndex >= text.length) {
				clearTyping();
			}
		}, delay);
	};

	onMount(() => {
		startTyping();
		return () => {
			clearTyping();
		};
	});

	$effect(() => {
		if (text !== previousText) {
			previousText = text;
			startTyping();
		}
	});
</script>

<div
	class={`flex items-center gap-2 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white ${className}`}
	aria-live="polite"
>
	<span>{displayText}</span>
	<span
		class="h-6 w-[2px] rounded-full bg-white/90 animate-pulse"
		aria-hidden="true"
	></span>
</div>

