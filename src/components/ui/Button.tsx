import {
  createVariant,
  spacing,
  backgroundColor,
  layout,
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
  LayoutProps,
  VariantProps,
  composeRestyleFunctions,
  useRestyle,
  color,
  ColorProps,
  useTheme,
} from "@shopify/restyle";

import { Theme } from "../../theme";
import { Text } from "./Text";
import { TouchableOpacity } from "react-native";

type RestyleProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  LayoutProps<Theme> &
  VariantProps<Theme, "buttonVariants"> &
  ColorProps<Theme>;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  backgroundColor,
  layout,
  color,
  createVariant({ themeKey: "buttonVariants" }),
]);

type Props = RestyleProps & {
  onPress: () => void;
  label: string;
  variant?: "primary" | "secondary" | "danger" | "disabled";
  disabled?: boolean;
};

const Button = ({
  onPress,
  label,
  variant = "primary",
  disabled = false,
  ...rest
}: Props) => {
  const theme = useTheme<Theme>();
  const buttonVariant = disabled ? "disabled" : variant;
  const props = useRestyle(restyleFunctions, {
    variant: buttonVariant,
    ...rest,
  } as any);
  const textColor = theme.buttonVariants[buttonVariant]?.color ?? "textPrimary";

  return (
    <TouchableOpacity
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
      {...props}
    >
      <Text variant="button" color={textColor}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
