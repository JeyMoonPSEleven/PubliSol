<script lang="ts">
    export type BadgeVariant = "emerald" | "violet" | "sunrise";

    const variantStyles: Record<
        BadgeVariant,
        { background: string; shadow: string }
    > = {
        emerald: {
            background:
                "linear-gradient(140deg, rgba(16,185,129,0.25), rgba(16,185,129,0.05))",
            shadow: "0 20px 35px rgba(16,185,129,0.35)",
        },
        violet: {
            background:
                "linear-gradient(140deg, rgba(99,102,241,0.35), rgba(126,34,206,0.08))",
            shadow: "0 20px 35px rgba(99,102,241,0.35)",
        },
        sunrise: {
            background:
                "linear-gradient(140deg, rgba(245,158,11,0.35), rgba(250,204,21,0.08))",
            shadow: "0 20px 35px rgba(245,158,11,0.35)",
        },
    };

    export interface GlassBadgeProps {
        size?: number | string;
        variant?: BadgeVariant;
        label?: string;
        icon?: string;
        class?: string;
    }

    let {
        size = 56,
        variant = "emerald",
        label,
        icon,
        class: className = "",
    }: GlassBadgeProps = $props();

    const resolvedSize = typeof size === "number" ? `${size}px` : String(size);
    const style = `
		width: ${resolvedSize};
		height: ${resolvedSize};
	`;
    const gradient = variantStyles[variant];
</script>

<div class={`relative inline-flex ${className}`} {style}>
    <div
        class="glass absolute inset-0 rounded-full border border-white/30"
        style={`background: ${gradient.background}; box-shadow: ${gradient.shadow};`}
        aria-hidden="true"
    ></div>
    <div
        class="relative z-10 flex h-full w-full flex-col items-center justify-center gap-0.5 text-center"
    >
        {#if icon}
            <span class="text-2xl leading-none text-white">{icon}</span>
        {/if}
        {#if label}
            <span
                class="text-[0.55rem] font-semibold uppercase tracking-[0.35em] text-white/90"
                >{label}</span
            >
        {/if}
        <slot />
    </div>
</div>
