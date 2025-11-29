<script lang="ts">
    import { Button } from "atomic-design-svelte";
    import type { GlassCardGradient, GlassCardProps } from "./types";
    import GlassBadge from "../atoms/GlassBadge.svelte";
    import ShimmerButton from "$lib/components/magic-ui/ShimmerButton.svelte";

    const gradientClasses: Record<GlassCardGradient, string> = {
        emerald:
            "bg-gradient-to-br from-primary/80 via-primary/40 to-secondary/25 border-white/30",
        violet: "bg-gradient-to-br from-indigo-600/80 via-purple-600/40 to-fuchsia-600/25 border-white/30",
        sunrise:
            "bg-gradient-to-br from-secondary/70 via-warning/40 to-warning/25 border-white/30",
    };

    let {
        title = "",
        description,
        badgeLabel,
        actions = [],
        socialIcons = [],
        gradient = "emerald",
        accentLabel,
        class: className = "",
        ...restProps
    }: GlassCardProps = $props();

    function navigateTo(href?: string) {
        if (href && typeof window !== "undefined") {
            window.location.href = href;
        }
    }
</script>

<article
    class={`relative overflow-hidden rounded-[2.5rem] border border-white/10 ${gradientClasses[gradient]} ${className}`}
    style="min-height: 260px;"
    {...restProps}
>
    <div class="absolute inset-0 pointer-events-none">
        <div class="absolute inset-0 bg-white/10 blur-[80px]"></div>
        <div
            class="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-70"
        ></div>
    </div>
    <div class="absolute inset-0 glass pointer-events-none"></div>

    {#if badgeLabel}
        <div class="absolute left-5 top-5">
            <GlassBadge variant={gradient} label={badgeLabel} size={52} />
        </div>
    {/if}

    <div class="relative z-10 flex h-full flex-col justify-between gap-5 p-6">
        <div class="space-y-3">
            {#if accentLabel}
                <span class="text-xs uppercase tracking-[0.3em] text-white/70"
                    >{accentLabel}</span
                >
            {/if}
            <h3 class="text-2xl font-semibold text-white leading-snug">
                {title}
            </h3>
            {#if description}
                <p class="text-sm text-white/80">{description}</p>
            {/if}
        </div>

        {#if actions.length}
            <div class="flex flex-wrap gap-3">
                {#each actions as action}
                    {#if action.variant === "primary"}
                        <ShimmerButton
                            type="button"
                            class="min-w-[160px] px-5 text-sm font-semibold uppercase tracking-[0.2em]"
                            action={() => {
                                action.onClick?.();
                                navigateTo(action.href);
                            }}
                        >
                            <span>{action.label}</span>
                        </ShimmerButton>
                    {:else}
                        <Button
                            intent="secondary"
                            size="lg"
                            class="min-w-[150px] rounded-full px-4 py-2 text-sm font-semibold tracking-[0.2em]"
                            href={action.href}
                            on:click={() => action.onClick?.()}
                        >
                            {action.label}
                        </Button>
                    {/if}
                {/each}
            </div>
        {/if}

        <slot />

        {#if socialIcons.length}
            <div class="flex flex-wrap gap-3 text-xs text-white/70">
                {#each socialIcons as social}
                    <a
                        href={social.href}
                        class="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-white transition-colors hover:bg-white/20"
                        rel={social.href ? "noopener noreferrer" : undefined}
                        target={social.href ? "_blank" : undefined}
                        aria-label={social.label}
                    >
                        <span class="text-base leading-none">{social.icon}</span
                        >
                        <span>{social.label}</span>
                    </a>
                {/each}
            </div>
        {/if}
    </div>
</article>
