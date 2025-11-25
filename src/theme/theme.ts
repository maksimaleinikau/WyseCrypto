import { createTheme } from "@shopify/restyle";
import { palette } from "./palette";

const theme = createTheme({
  spacing: {
    xxs: 2,
    xs: 4,
    s: 8,
    sm: 11,
    sm2: 12,
    m: 16,
    m2: 19,
    l: 24,
    xl: 32,
    xxl: 40,
    "2xl": 48,
    "3xl": 53,
    "4xl": 72,
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
    cardBackgroundInactive: palette.lightgray2,

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

    successPopup: palette.primaryLight3,
    successPopupLabel: palette.gray,
  },

  textVariants: {
    defaults: {
      fontSize: 12,
      fontWeight: "700",
      color: "textPrimary",
    },
    headerXXL: {
      fontSize: 32,
      fontWeight: "700",
      color: "textPrimary",
    },
    headerXXL2: {
      fontSize: 24,
      fontWeight: "700",
    },
    headerXL: {
      fontSize: 20,
      fontWeight: "700",
      color: "textPrimary",
    },
    headerLarge: {
      fontSize: 16,
      fontWeight: "700",
      color: "textPrimary",
    },
    headerLarge2: {
      fontSize: 16,
      fontWeight: "400",
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
    inputError: {
      fontSize: 14,
      fontWeight: "300",
      lineHeight: "100%",
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
    modalText: {
      fontSize: 16,
      fontWeight: "400",
    },
    filterButton: {
      fontSize: 12,
      fontWeight: "700",
    },
    listSubtitle: {
      fontSize: 16,
      fontWeight: "400",
    },
    checkBoxLabel: {
      fontSize: 12,
      fontWeight: "600",
      lineHeight: 18,
    },
    cardInactive: {
      fontSize: 12,
      fontWeight: "400",
    },
  },
  buttonVariants: {
    defaults: {
      borderRadius: 4,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: "sm",
      paddingHorizontal: "sm2",
    },
    primary: {
      backgroundColor: "primary",
      color: "textInverted",
      width: "100%",
    },
    secondary: {
      backgroundColor: "buttonSecondary",
      color: "textPrimary",
      width: "100%",
    },
    danger: {
      backgroundColor: "cardBackground",
      borderWidth: 1,
      borderColor: "danger",
      color: "textDanger",
      width: "100%",
    },
    disabled: {
      backgroundColor: "buttonDisabled",
      borderWidth: 1,
      borderColor: "buttonDisabled",
      color: "textTertiary",
      width: "100%",
    },
    confirm: {
      backgroundColor: "danger",
      color: "textInverted",
      width: "100%",
    },
    smallAction: {
      backgroundColor: "primary",
      borderRadius: 8,
      color: "textInverted",
      paddingVertical: "s",
      paddingHorizontal: "s",
    },
  },
  inputVariants: {
    defaults: {
      backgroundColor: "inputBackground",
      borderWidth: 1,
      borderColor: "inputBorder",
      borderRadius: 8,
      color: "inputText",
      paddingHorizontal: "m",
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
    error: {
      borderColor: "danger",
      borderWidth: 1,
    },
    calculated: {
      backgroundColor: "inputDisabled",
      borderColor: "inputDisabled",
    },
  },
  badgeVariants: {
    defaults: {
      padding: "m",
      marginBottom: "s",
      borderRadius: 12,
      paddingHorizontal: "s",
      paddingVertical: "xs",
      alignSelf: "flex-start",
      flexDirection: "row",
      alignItems: "center",
      gap: "xxs",
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
