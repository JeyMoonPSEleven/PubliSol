import type { HTMLAttributes } from 'svelte/elements';

export type GlassCardGradient = 'emerald' | 'violet' | 'sunrise';

export interface GlassCardAction {
    label: string;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'ghost';
}

export interface GlassCardSocialIcon {
    icon: string;
    label: string;
    href?: string;
}

export interface GlassCardProps extends HTMLAttributes<HTMLElement> {
    title: string;
    description?: string;
    badgeLabel?: string;
    actions?: GlassCardAction[];
    socialIcons?: GlassCardSocialIcon[];
    gradient?: GlassCardGradient;
    accentLabel?: string;
    class?: string;
}

