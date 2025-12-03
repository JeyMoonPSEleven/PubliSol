<script lang="ts">
	import { Text, Button } from "atomic-design-svelte";

	interface Step {
		title: string;
		description?: string;
		content: import("svelte").Snippet;
	}

	interface Props {
		steps: Step[];
		currentStep?: number;
		onStepChange?: (step: number) => void;
		onComplete?: () => void;
	}

	let { 
		steps, 
		currentStep = $bindable(0),
		onStepChange,
		onComplete 
	}: Props = $props();

	function nextStep() {
		if (currentStep < steps.length - 1) {
			currentStep++;
			onStepChange?.(currentStep);
		} else {
			onComplete?.();
		}
	}

	function previousStep() {
		if (currentStep > 0) {
			currentStep--;
			onStepChange?.(currentStep);
		}
	}

	function goToStep(step: number) {
		if (step >= 0 && step < steps.length) {
			currentStep = step;
			onStepChange?.(currentStep);
		}
	}

	const progress = $derived((currentStep + 1) / steps.length * 100);
</script>

<div class="wizard-container">
	<!-- Barra de progreso -->
	<div class="mb-8">
		<div class="flex items-center justify-between mb-4">
			{#each steps as step, index}
				<button
					type="button"
					onclick={() => goToStep(index)}
					class="flex flex-col items-center flex-1 relative {index < steps.length - 1 ? 'pr-4' : ''}"
					disabled={index > currentStep}
				>
					<div class="flex items-center w-full">
						<div class="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 transition-all {index <= currentStep
							? 'bg-primary border-primary text-white'
							: 'bg-white border-border-default text-text-muted'} min-w-[40px] min-h-[40px] sm:min-w-[48px] sm:min-h-[48px]">
							{#if index < currentStep}
								<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
								</svg>
							{:else}
								<span class="text-sm font-semibold">{index + 1}</span>
							{/if}
						</div>
						{#if index < steps.length - 1}
							<div class="flex-1 h-0.5 mx-2 {index < currentStep ? 'bg-primary' : 'bg-border-default'} transition-colors"></div>
						{/if}
					</div>
					<div class="mt-2 text-center">
						<Text class="text-xs font-medium {index <= currentStep ? 'text-primary' : 'text-text-muted'}">
							{step.title}
						</Text>
					</div>
				</button>
			{/each}
		</div>
		<!-- Barra de progreso visual -->
		<div class="w-full h-2 bg-surface-tertiary rounded-full overflow-hidden">
			<div 
				class="h-full bg-primary transition-all duration-300 ease-out"
				style="width: {progress}%"
			></div>
		</div>
	</div>

	<!-- Contenido del paso actual -->
	<div class="wizard-content">
		{#if steps[currentStep]?.description}
			<Text class="text-text-muted mb-6 text-center">
				{steps[currentStep].description}
			</Text>
		{/if}
		{@render steps[currentStep].content()}
	</div>

	<!-- Navegación -->
	<div class="flex justify-between items-center mt-8 pt-6 border-t border-border-default">
		<Button
			intent="ghost"
			size="lg"
			onclick={previousStep}
			disabled={currentStep === 0}
			class="min-h-[48px]"
		>
			Anterior
		</Button>
		<Text class="text-sm text-text-muted">
			Paso {currentStep + 1} de {steps.length}
		</Text>
		<Button
			intent="primary"
			size="lg"
			onclick={nextStep}
			class="min-h-[48px]"
		>
			{currentStep === steps.length - 1 ? "Enviar" : "Siguiente"}
		</Button>
	</div>
</div>

