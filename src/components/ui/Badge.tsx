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
  composeRestyleFunctions,
} from "@shopify/restyle";
import { Theme } from "../../theme";
import { Text } from "./Text";
import { Box } from "./Box";

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
  label: number | string;
  variant?: BadgeVariant;
};

const Badge = ({ variant = "success", label, ...rest }: BadgeProps) => {
  const props = useRestyle(restyleFunctions as any, {
    variant,
    ...rest,
  });

  return (
    <Box {...props}>
      <Text variant="badgeStatus" color={`${variant}Text`}>
        {label}
      </Text>
    </Box>
  );
};

export default Badge;
