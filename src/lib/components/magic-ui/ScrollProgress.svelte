<script lang="ts">
	import { onMount } from 'svelte';
	
	interface Props {
		className?: string;
		height?: string;
		color?: string;
	}
	
	let { className = '', height = '2px', color = 'var(--color-primary)' }: Props = $props();
	
	let progress = $state(0);
	
	onMount(() => {
		function updateProgress() {
			const scrollTop = window.scrollY;
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
		}
		
		updateProgress();
		window.addEventListener('scroll', updateProgress, { passive: true });
		
		return () => {
			window.removeEventListener('scroll', updateProgress);
		};
	});
</script>

<div
	class="fixed top-0 left-0 right-0 z-50 {className}"
	style="height: {height}; background: rgba(0,0,0,0.1);"
>
	<div
		class="h-full transition-all duration-150 ease-out"
		style="width: {progress}%; background: {color};"
	></div>
</div>

