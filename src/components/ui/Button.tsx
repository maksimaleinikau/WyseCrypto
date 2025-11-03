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
} from "@shopify/restyle";

import { Theme } from "../../theme/theme";
import { Text } from "./Text";
import { TouchableOpacity, View } from "react-native";

type RestyleProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  LayoutProps<Theme> &
  VariantProps<Theme, "buttonVariants">;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  createVariant({ themeKey: "buttonVariants" }),
  spacing,
  backgroundColor,
  layout,
]);

type Props = RestyleProps & {
  onPress: () => void;
  label: string;
  variant?: "primary" | "secondary" | "danger" | "disabled";
};

const Button = ({ onPress, label, variant = "primary", ...rest }: Props) => {
  const props = useRestyle(restyleFunctions, { variant, ...rest }); //

  const getTextVariant = (): keyof Theme["textVariants"] => {
    switch (variant) {
      case "primary":
        return "buttonPrimary";
      case "secondary":
        return "buttonSecondary";
      case "danger":
        return "buttonDanger";
      case "disabled":
        return "buttonDisabled";
    }
  };

  const textVariant = getTextVariant();

  return (
    <TouchableOpacity onPress={onPress}>
      <View {...props}>
        <Text variant={textVariant}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
