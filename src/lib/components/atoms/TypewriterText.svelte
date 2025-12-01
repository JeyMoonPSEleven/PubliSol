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
	class={`flex items-center gap-2 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight ${className}`}
	aria-live="polite"
>
	<span class="whitespace-pre-wrap">{displayText}</span>
	<span
		class="inline-block h-[1.2em] w-[3px] rounded-full bg-gray-900 animate-[blink_1s_ease-in-out_infinite]"
		aria-hidden="true"
		style="animation: blink 1s ease-in-out infinite;"
	></span>
</div>

<style>
	@keyframes blink {
		0%, 50% {
			opacity: 1;
		}
		51%, 100% {
			opacity: 0;
		}
	}
</style>

