import { TextInput, TextInputProps } from "react-native";
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
} from "@shopify/restyle";

import { Theme } from "../../theme";
import { Text } from "./Text";
import { Box } from "./Box";
import { useState } from "react";

type RestyleProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  LayoutProps<Theme> &
  VariantProps<Theme, "inputVariants">;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  backgroundColor,
  layout,
  createVariant({ themeKey: "inputVariants" }),
]);

export interface InputProps extends RestyleProps, TextInputProps {
  variant?: "default" | "focused" | "disabled" | "calculated";
  label?: string;
  onValueChange?: (value: string) => void;
  errorMessage?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  multiline?: boolean;
}

export const Input: React.FC<InputProps> = ({
  variant = "default",
  label,
  onValueChange,
  placeholder,
  errorMessage,
  leftIcon,
  rightIcon,
  multiline = false,
  ...rest
}) => {
  const theme = useTheme<Theme>();
  const [isFocused, setIsFocused] = useState(false);

  const getVariant = (): string => {
    if (errorMessage) return "error";
    if (isFocused) return "focused";
    return variant;
  };

  const props = useRestyle(restyleFunctions as any, {
    variant: getVariant(),
    ...rest,
  });

  const textColor = theme.colors.inputText;
  const placeholderColor =
    variant === "disabled"
      ? theme.colors.inputDisabledPlaceholder
      : theme.colors.inputPlaceholder;

  const handleChangeText = (text: string) => {
    onValueChange?.(text);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  const hasLeftIcon = !!leftIcon;
  const hasRightIcon = !!rightIcon;

  return (
    <Box>
      {label && <Text variant="inputLabel">{label}</Text>}
      <Box position="relative">
        {hasLeftIcon && (
          <Box position="absolute" left={12} top={12} zIndex={1}>
            {leftIcon}
          </Box>
        )}
        {hasRightIcon && (
          <Box position="absolute" right={16} top={13} zIndex={1}>
            {rightIcon}
          </Box>
        )}

        <TextInput
          {...props}
          onChangeText={handleChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholderTextColor={placeholderColor}
          placeholder={placeholder}
          editable={variant !== "disabled"}
          multiline={multiline}
          style={[
            props.style,
            {
              color: textColor,
              paddingVertical: 12,
              paddingLeft: hasLeftIcon ? 0 : 12,
              paddingRight: hasRightIcon ? 0 : 12,
              textAlignVertical: multiline ? "top" : "center",
              minHeight: multiline ? 100 : undefined,
            },
          ]}
        />
      </Box>
      {errorMessage && (
        <Text variant="inputError" color="danger">
          {errorMessage}
        </Text>
      )}
    </Box>
  );
};
