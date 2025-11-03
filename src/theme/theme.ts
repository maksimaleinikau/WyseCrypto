import { createTheme } from "@shopify/restyle";
import { palette } from "./palette";

const theme = createTheme({
  spacing: {
    xs: 4,
    s: 8,
    sm: 11,
    m: 16,
    l: 24,
    xl: 32,
    "2xl": 48,
  },
  border: {
    s: 1,
    s2: 2,
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
    textDanger: palette.danger,

    white: palette.white,

    buttonSecondary: palette.buttonSecondary,
    buttonDisabled: palette.buttonDisabled,

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

    buttonPrimary: {
      fontSize: 14,
      fontWeight: "700",
      textAlign: "center",
      color: "textInverted",
    },
    buttonSecondary: {
      fontSize: 14,
      fontWeight: "700",
      textAlign: "center",
      color: "textPrimary",
    },
    buttonDanger: {
      fontSize: 14,
      fontWeight: "700",
      textAlign: "center",
      color: "textDanger",
    },
    buttonDisabled: {
      fontSize: 14,
      fontWeight: "700",
      textAlign: "center",
      color: "textTertiary",
    },
  },
  buttonVariants: {
    defaults: {
      borderRadius: 4,
      alignItems: "center",
      justifyContent: "center",
      width: '100%',
      paddingVertical: "sm",
    },
    primary: {
      backgroundColor: "primary",
    },
    secondary: {
      backgroundColor: "buttonSecondary",
    },
    danger: {
      backgroundColor: "cardBackground",
      borderWidth: 1,
      borderColor: "danger",
    },
    disabled: {
      backgroundColor: "buttonDisabled",
      borderWidth: 1,
      borderColor: "buttonDisabled",
    },
  },
});

export type Theme = typeof theme;
export default theme;
