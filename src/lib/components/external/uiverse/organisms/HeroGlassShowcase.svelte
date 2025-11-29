<script lang="ts">
    import { Button } from "atomic-design-svelte";
    import AnimatedGridPattern from "$lib/components/magic-ui/AnimatedGridPattern.svelte";
    import ShimmerButton from "$lib/components/magic-ui/ShimmerButton.svelte";
    import GlassBadge from "../atoms/GlassBadge.svelte";
    import GlassCard from "../molecules/GlassCard.svelte";
    import type { GlassCardProps } from "../molecules/types";

    export interface ShowcaseAction {
        label: string;
        href?: string;
        onClick?: () => void;
    }

    export interface HeroGlassShowcaseProps {
        heroData: {
            title: string;
            subtitle: string;
            primaryAction: ShowcaseAction;
            secondaryAction: ShowcaseAction;
            badge?: string;
            trustBadges?: string[];
        };
        cards?: GlassCardProps[];
        background?: "gradient" | "dark";
        class?: string;
    }

    let {
        heroData,
        cards = [],
        background = "gradient",
        class: className = "",
    }: HeroGlassShowcaseProps = $props();

    function handlePrimaryAction() {
        heroData.primaryAction.onClick?.();
        if (heroData.primaryAction.href && typeof window !== "undefined") {
            window.location.href = heroData.primaryAction.href;
        }
    }

    function computeBackground() {
        if (background === "dark") {
            return "bg-gradient-to-br from-surface-card/60 via-surface-card/30 to-black/40";
        }
        return "bg-gradient-to-br from-primary/90 via-secondary/70 to-black/60";
    }
</script>

<section class={`relative overflow-hidden px-4 py-16 ${className}`}>
    <div
        class={`absolute inset-0 pointer-events-none ${computeBackground()} opacity-95`}
    ></div>
    <div class="absolute inset-0 pointer-events-none">
        <AnimatedGridPattern className="opacity-30" numSquares={32} />
    </div>

    <div
        class="relative z-10 container mx-auto grid grid-cols-1 items-center gap-10 lg:grid-cols-2"
    >
        <div class="space-y-6 text-white">
            {#if heroData.badge}
                <GlassBadge
                    icon="✨"
                    label={heroData.badge}
                    size={60}
                    variant="emerald"
                />
            {/if}
            <h1
                class="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
            >
                {heroData.title}
            </h1>
            <p class="text-base text-white/80 sm:text-lg md:text-xl">
                {heroData.subtitle}
            </p>
            <div class="flex flex-wrap gap-3">
                <ShimmerButton
                    type="button"
                    class="w-full min-w-[180px] px-6 text-sm font-semibold uppercase tracking-[0.2em] sm:w-auto"
                    action={handlePrimaryAction}
                >
                    <span>{heroData.primaryAction.label}</span>
                </ShimmerButton>
                <Button
                    intent="secondary"
                    size="lg"
                    class="w-full min-w-[180px] px-6 text-sm font-semibold uppercase tracking-[0.2em] sm:w-auto"
                    href={heroData.secondaryAction.href}
                    on:click={() => heroData.secondaryAction.onClick?.()}
                >
                    {heroData.secondaryAction.label}
                </Button>
            </div>
            {#if heroData.trustBadges?.length}
                <div class="flex flex-wrap gap-3 text-xs text-white/80">
                    {#each heroData.trustBadges as badge}
                        <span
                            class="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 uppercase tracking-[0.2em]"
                        >
                            <span
                                class="h-1.5 w-1.5 rounded-full bg-white"
                                aria-hidden="true"
                            ></span>
                            {badge}
                        </span>
                    {/each}
                </div>
            {/if}
        </div>

        {#if cards.length}
            <div class="relative flex flex-col gap-6 lg:gap-8">
                {#each cards as card, index (card.title)}
                    <div
                        class={`relative transition-transform duration-500 hover:-translate-y-1 ${
                            index === 1
                                ? "lg:translate-x-6"
                                : index === 2
                                  ? "lg:-translate-x-6"
                                  : ""
                        }`}
                    >
                        <GlassCard
                            {...card}
                            class={`shadow-[0_40px_80px_rgba(15,23,42,0.55)] ${card.class ?? ""}`}
                        />
                    </div>
                {/each}
            </div>
        {/if}
    </div>
</section>
