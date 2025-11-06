import {
  useRestyle,
  spacing,
  backgroundColor,
  createVariant,
  VariantProps,
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
  LayoutProps,
  color,
  ColorProps,
  useTheme,
  composeRestyleFunctions,
} from "@shopify/restyle";
import { Theme } from "../../theme";
import { Text } from "./Text";
import { Box } from "./Box";
import { TouchableOpacity } from "react-native";

export type BadgeVariant = "success" | "pending" | "failure";

type RestyleProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  LayoutProps<Theme> &
  VariantProps<Theme, "badgeVariants"> &
  ColorProps<Theme>;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  backgroundColor,
  color,
  createVariant({ themeKey: "badgeVariants" }),
]);

type BadgeProps = RestyleProps & {
  onPress: () => void;
  label: number | string;
  variant?: "success" | "pending" | "failure";
};

const Badge = ({
  variant = "success",
  label,
  onPress,
  ...rest
}: BadgeProps) => {
  const props = useRestyle(restyleFunctions as any, {
    variant,
    ...rest,
  });

  const badgeContent = (
    <Box {...props}>
      <Text variant="badgeStatus" color={`${variant}Text`}>
        {label}
      </Text>
    </Box>
  );
  return onPress ? (
    <TouchableOpacity onPress={onPress}>{badgeContent}</TouchableOpacity>
  ) : (
    badgeContent
  );
};

export default Badge;
