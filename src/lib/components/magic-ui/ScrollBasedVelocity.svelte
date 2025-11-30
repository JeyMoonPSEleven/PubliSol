<script lang="ts">
	import { onMount } from "svelte";
	import { cn } from "$lib/utils/cva";
	import type { HTMLAttributes } from "svelte/elements";

	interface ScrollBasedVelocityProps extends HTMLAttributes<HTMLDivElement> {
		baseVelocity?: number;
		direction?: 1 | -1;
		class?: string;
		children: import("svelte").Snippet;
	}

	let {
		baseVelocity = 5,
		direction = 1,
		class: className,
		children,
		...rest
	}: ScrollBasedVelocityProps = $props();

	let containerRef: HTMLDivElement | null = $state(null);
	let blockRef: HTMLDivElement | null = $state(null);
	let numCopies = $state(3);
	let baseX = $state(0);
	let unitWidth = $state(0);
	let isInView = $state(true);
	let isPageVisible = $state(true);
	let prefersReducedMotion = $state(false);
	let currentDirection = $state(direction >= 0 ? 1 : -1);
	let baseDirection = $state(direction >= 0 ? 1 : -1);

	const wrap = (min: number, max: number, v: number) => {
		const rangeSize = max - min;
		return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
	};

	onMount(() => {
		if (!containerRef) return;

		const updateSizes = () => {
			if (!containerRef || !blockRef) return;
			const cw = containerRef.offsetWidth || 0;
			const bw = blockRef?.scrollWidth || 0;
			unitWidth = bw;
			const nextCopies = bw > 0 ? Math.max(3, Math.ceil(cw / bw) + 2) : 1;
			numCopies = nextCopies;
		};

		updateSizes();

		const ro = new ResizeObserver(updateSizes);
		ro.observe(containerRef);
		ro.observe(blockRef);

		const io = new IntersectionObserver(([entry]) => {
			isInView = entry.isIntersecting;
		});
		io.observe(containerRef);

		const handleVisibility = () => {
			isPageVisible = document.visibilityState === "visible";
		};
		document.addEventListener("visibilitychange", handleVisibility, {
			passive: true,
		});
		handleVisibility();

		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		const handlePRM = () => {
			prefersReducedMotion = mq.matches;
		};
		mq.addEventListener("change", handlePRM);
		handlePRM();

		let lastTime = performance.now();
		let animationFrameId: number;

		const animate = (currentTime: number) => {
			if (!isInView || !isPageVisible || !blockRef) {
				animationFrameId = requestAnimationFrame(animate);
				return;
			}

			const delta = (currentTime - lastTime) / 1000;
			lastTime = currentTime;

			// Simular velocidad de scroll (simplificado)
			const speedMultiplier = prefersReducedMotion ? 1 : 1.2;
			const bw = unitWidth || 0;
			if (bw <= 0) {
				animationFrameId = requestAnimationFrame(animate);
				return;
			}

			const pixelsPerSecond = (bw * baseVelocity) / 100;
			const moveBy = currentDirection * pixelsPerSecond * speedMultiplier * delta;
			baseX = baseX + moveBy;

			animationFrameId = requestAnimationFrame(animate);
		};

		animate(performance.now());

		return () => {
			ro.disconnect();
			io.disconnect();
			document.removeEventListener("visibilitychange", handleVisibility);
			mq.removeEventListener("change", handlePRM);
			cancelAnimationFrame(animationFrameId);
		};
	});

	let x = $derived(unitWidth > 0 ? `${-wrap(0, unitWidth, baseX)}px` : "0px");
</script>

<div
	bind:this={containerRef}
	class={cn("w-full overflow-hidden whitespace-nowrap", className)}
	{...rest}
>
	<div
		class="inline-flex transform-gpu items-center will-change-transform select-none"
		style="transform: translateX({x});"
	>
		{#each Array(numCopies) as _, i}
			{#if i === 0}
				<div
					bind:this={blockRef}
					aria-hidden={false}
					class="inline-flex shrink-0 items-center"
				>
					{@render children()}
				</div>
			{:else}
				<div
					aria-hidden={true}
					class="inline-flex shrink-0 items-center"
				>
					{@render children()}
				</div>
			{/if}
		{/each}
	</div>
</div>

