<script lang="ts">
	import { onMount } from 'svelte';
	
	interface Props {
		value: number;
		duration?: number;
		className?: string;
	}
	
	let { value, duration = 2, className = '' }: Props = $props();
	
	let displayValue = $state(0);
	
	onMount(() => {
		const startValue = 0;
		const endValue = value;
		const startTime = Date.now();
		
		function animate() {
			const elapsed = Date.now() - startTime;
			const progress = Math.min(elapsed / (duration * 1000), 1);
			
			// Ease-out function: t * (2 - t)
			const eased = progress * (2 - progress);
			displayValue = Math.floor(startValue + (endValue - startValue) * eased);
			
			if (progress < 1) {
				requestAnimationFrame(animate);
			} else {
				displayValue = endValue;
			}
		}
		
		requestAnimationFrame(animate);
	});
</script>

<span class={className}>
	{displayValue.toLocaleString()}
</span>

