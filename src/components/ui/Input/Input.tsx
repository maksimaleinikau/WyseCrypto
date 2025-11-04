import { TextInput, TextInputProps } from "react-native";
import {
  useRestyle,
  spacing,
  border,
  backgroundColor,
  layout,
  createVariant,
  VariantProps,
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
  LayoutProps,
  composeRestyleFunctions,
} from "@shopify/restyle";

import { Theme } from "../../../theme";
import { Text } from "../Text";

// type RestyleProps = SpacingProps<Theme> &
//   BorderProps<Theme> &
//   BackgroundColorProps<Theme> &
//   LayoutProps<Theme> &
//   VariantProps<Theme, "buttonVariants">;
