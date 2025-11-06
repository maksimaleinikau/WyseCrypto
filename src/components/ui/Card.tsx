import {
  spacing,
  backgroundColor,
  layout,
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
  LayoutProps,
  color,
  ColorProps,
} from "@shopify/restyle";

import { Box } from "./Box";
import { Theme } from "../../theme";

type RestyleProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  LayoutProps<Theme> &
  ColorProps<Theme>;

type CardProps = RestyleProps & {
  children: React.ReactNode;
  onPress?: () => void;
};

export const Card: React.FC<CardProps> = ({ children, onPress, ...rest }) => {
  return (
    <Box
      backgroundColor="cardBackground"
      borderRadius={10}
      padding="m"
      {...rest}
    >
      {children}
    </Box>
  );
};
