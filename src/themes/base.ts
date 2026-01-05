import type { Theme, ThemeColors } from '@/types/theme';

const colors: ThemeColors = {
    primary: "#1c72c3",
    secondary: "#8bb4db",
    // accent: "#d4b075",
    accent: "#e0a036",
    background: "#0a121c",
    card: "#061a2d",
    cardLight: "#193856",
    text: "#e9f0f7",
    muted: "#607b94"
};

const base: Theme = {
    name: "base",
    colors
};

export default base;