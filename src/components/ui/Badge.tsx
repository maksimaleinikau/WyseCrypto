import {
  useRestyle,
  spacing,
  backgroundColor,
  layout,
  createVariant,
  VariantProps,
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
  LayoutProps,
  useTheme,
  composeRestyleFunctions,
  color,
  border,
} from "@shopify/restyle";
import { Theme } from "../../theme";
import { Text } from "./Text";
import { Box } from "./Box";
import { TouchableOpacity } from "react-native";

type RestyleProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  LayoutProps<Theme> &
  VariantProps<Theme, "badgeVariants">;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  backgroundColor,
  layout,
  createVariant({ themeKey: "badgeVariants" }),
]);

export type StatusType = "success" | "pending" | "failure";

export interface BadgeProps extends RestyleProps {
  label: string;
  statuses: {
    success?: string | number;
    pending?: string | number;
    failure?: string | number;
  };
  onStatusPress?: (status: StatusType, count?: number) => void;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  statuses,
  onStatusPress,
  variant = "default",
  ...rest
}) => {
  const theme = useTheme<Theme>();
  const props = useRestyle(restyleFunctions as any, {
    variant,
    ...rest,
  });

  const statusItems = [
    { type: "success" as const, count: statuses.success },
    { type: "pending" as const, count: statuses.pending },
    { type: "failure" as const, count: statuses.failure },
  ].filter((item) => item.count !== undefined);

  return (
    <Box {...props}>
      <Text variant="badgeLabel" mb="sm">
        {label}
      </Text>
      <Box
        flexDirection="row"
        gap="m"
        justifyContent="center"
        alignItems="center"
      >
        {statusItems.map((item) => {
          const statusProps = useRestyle(restyleFunctions as any, {
            variant: item.type,
          });
          return (
            <TouchableOpacity
              key={item.type}
              onPress={() => {
                console.log(`Clicked ${item.type}:`, item.count);
                onStatusPress?.(item.type);
              }}
            >
              <Box {...statusProps}>
                <Text
                  variant="badgeStatus"
                  color={item.type as keyof Theme["colors"]}
                >
                  {item.count}
                </Text>
              </Box>
            </TouchableOpacity>
          );
        })}
      </Box>
    </Box>
  );
};
