import { createTheme } from "@shopify/restyle";
import { palette } from "./palette";

const theme = createTheme({
  spacing: {
    xs: 4,
    s: 8,
    sm: 11,
    sm2: 12,
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
    textDanger: palette.danger,

    white: palette.white,

    buttonSecondary: palette.ligthgray,
    buttonDisabled: palette.gray3,

    iconColor: palette.gray2,
    iconActiveColor: palette.primary,

    inputBackground: palette.white,
    inputBorder: palette.primaryLight,
    inputDisabledPlaceholder: palette.gray,
    inputPlaceholder: palette.gray2,
    inputText: palette.black,
    inputFocus: palette.primary,
    inputDisabled: palette.gray4,
    inputLabel: palette.black,

    successLight: palette.primarylight2,
    pendingLight: palette.warninglight,
    errorLight: palette.dangerlight,

    checkboxColor: palette.blue,
    successText: palette.success,
    pendingText: palette.warning,
    failureText: palette.danger,
  },

  textVariants: {
    defaults: {
      fontSize: 12,
      fontWeight: "700",
      color: "textPrimary",
      lineHeight: 22,
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
    button: {
      fontSize: 14,
      fontWeight: "700",
      textAlign: "center",
    },
    input: {
      fontSize: 14,
      fontWeight: "400",
      lineHeight: "100%",
    },
    inputLabel: {
      fontSize: 14,
      fontWeight: "400",
      marginBottom: "s",
    },
    badgeStatus: {
      fontSize: 12,
      fontWeight: "400",
      textAlign: "center",
    },
    uploadLabel: {
      fontSize: 12,
      fontWeight: "400",
    },
  },
  buttonVariants: {
    defaults: {
      borderRadius: 4,
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      paddingVertical: "sm",
      marginBottom: "xs",
    },
    primary: {
      backgroundColor: "primary",
      color: "textInverted",
    },
    secondary: {
      backgroundColor: "buttonSecondary",
      color: "textPrimary",
    },
    danger: {
      backgroundColor: "cardBackground",
      borderWidth: 1,
      borderColor: "danger",
      color: "textDanger",
    },
    disabled: {
      backgroundColor: "buttonDisabled",
      borderWidth: 1,
      borderColor: "buttonDisabled",
      color: "textTertiary",
    },
  },
  inputVariants: {
    defaults: {
      backgroundColor: "inputBackground",
      borderWidth: 1,
      borderColor: "inputBorder",
      borderRadius: 8,
      color: "inputText",
      paddingLeft: "m",
      paddingVertical: "sm2",
      fontSize: 14,
      marginBottom: "s",
    },
    default: {},
    focused: {
      borderColor: "inputFocus",
    },
    disabled: {
      backgroundColor: "inputDisabled",
      borderColor: "inputDisabled",
    },
    textArea: {
      minHeight: 100,
      paddingVertical: "m",
    },
  },
  badgeVariants: {
    defaults: {
      padding: "m",
      marginBottom: "s",
      borderRadius: 8,
      paddingHorizontal: "s",
      paddingVertical: "xs",
      alignSelf: "flex-start",
      flexDirection: "row",
      alignItems: "center",
    },
    default: {},
    success: {
      backgroundColor: "successLight",
    },
    pending: {
      backgroundColor: "pendingLight",
    },
    failure: {
      backgroundColor: "errorLight",
    },
  },
});

export type Theme = typeof theme;
export default theme;
