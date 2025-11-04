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

import { Theme } from "../../../theme";
import { Text } from "../Text";
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
};

const Button = ({ onPress, label, variant = "primary", ...rest }: Props) => {
  const theme = useTheme<Theme>();
  const props = useRestyle(restyleFunctions, { variant, ...rest } as any); //
  const textColor = theme.buttonVariants[variant]?.color ?? "textPrimary";
  console.log(textColor);
  return (
    <TouchableOpacity onPress={onPress} {...props}>
      <Text variant="button" color={textColor}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
