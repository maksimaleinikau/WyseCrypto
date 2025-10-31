import { createTheme } from "@shopify/restyle";
import { palette } from "./palette";

export const Theme = createTheme({
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    "2xl": 48,
  },

  colors: {
    primary: palette.primary,
    secondary: palette.secondary,
    success: palette.success,
    warning: palette.warning,
    danger: palette.danger,
    dark: palette.dark,

    mainBackground: palette.light,
    cardBackground: palette.white,

    textPrimary: palette.black,
    textSecondary: palette.gray,
    textTertiary: palette.gray2,
    textFourtiary: palette.primary,
    textInverted: palette.white,

    white: palette.white,

    iconColor: palette.gray2,
    iconActiveColor: palette.primary,
  },

  textVariants: {
    defaults: {
      fontSize: 12,
      fontWeight: "700",
      color: "textPrimary",
      lineHeight: "22",
    },
    headerLX: {
      fontSize: 32,
      fontWeight: "700",
      color: "textPrimary",
    },
    headerLarge: {
      fontSize: 16,
      fontWeight: "700",
      color: "textPrimary",
    },
    subtitle: {
      fontSize: 14,
      fontWeight: "600",
      color: "textFourtiary",
    },
    bodyXL: {
      fontSize: 20,
      fontWeight: "700",
      color: "textPrimary",
    },
    bodyLarge: {
      fontsize: "16",
      fontWeight: "700",
      color: "textPrimary",
    },
    bodyLarge2: {
      fontsize: "16",
      fontWeight: "600",
      color: "textPrimary",
    },
    bodyLarge3: {
      fontsize: "16",
      fontWeight: "400",
      color: "textSecondary",
      lineHeight: "140%",
    },
    bodyMiddle: {
      fontsize: "14",
      fontWeight: "400",
      color: "textPimary",
    },
    bodyMiddle2: {
      fontsize: "14",
      fontWeight: "400",
      color: "textSecondary",
    },
    bodyMiddle3: {
      fontsize: "14",
      fontWeight: "400",
      color: "textTertiary",
    },
    bodySmall: {
      fontsize: "10",
      fontWeight: "400",
      color: "textSecondary",
    },
    bodySmall2: {
      fontsize: "10",
      fontWeight: "400",
      color: "textTertiary",
    },

    buttonLarge: {
      fontsize: "32",
      fontWeight: "700",
      color: "textInverted",
    },
    buttonMiddle: {
      fontsize: "16",
      fontWeight: "600",
      color: "textInverted",
    },
    buttonSmall: {
      fontsize: "12",
      fontWeight: "600",
      color: "textInverted",
    },
  },
});
