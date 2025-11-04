import { TextInput, TextInputProps, TouchableOpacity } from "react-native";
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
import { EyeIcon, EyeOffIcon, SearchIcon } from "./icons";

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
  variant?: "default" | "focused" | "disabled";
  label?: string;
  onValueChange?: (value: string) => void;
  autoFocusVariant?: boolean;
  type?: "text" | "password" | "search";
  rightIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  variant = "default",
  label,
  onValueChange,
  onChangeText,
  placeholder,
  autoFocusVariant = true,
  type = "text",
  rightIcon,
  ...rest
}) => {
  const theme = useTheme<Theme>();
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const props = useRestyle(restyleFunctions as any, {
    variant: autoFocusVariant && isFocused ? "focused" : variant,
    ...rest,
  });

  const textColor = theme.colors.inputText;

  const placeholderColor =
    variant === "disabled"
      ? theme.colors.inputDisabledPlaceholder
      : theme.colors.inputPlaceholder;

  const handleChangeText = (text: string) => {
    console.log("input value", text);
    onValueChange?.(text);
    onChangeText?.(text);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const getRightIcon = () => {
    if (rightIcon) return rightIcon;
    if (type === "password") {
      return (
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          disabled={variant === "disabled"}
        >
          {isPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}
        </TouchableOpacity>
      );
    }
    if (type === "search") {
      return <SearchIcon />;
    }
    return null;
  };

  const rightIconComponent = getRightIcon();
  const hasRightIcon = !!rightIconComponent;

  return (
    <Box>
      {label && <Text variant="inputLabel">{label}</Text>}
      <Box position="relative">
        {hasRightIcon && (
          <Box position="absolute" right={16} top={13} zIndex={1}>
            {rightIconComponent}
          </Box>
        )}
        <TextInput
          {...props}
          {...rest}
          onChangeText={handleChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholderTextColor={placeholderColor}
          placeholder={placeholder}
          editable={variant !== "disabled"}
          style={[
            props.style,
            { color: textColor, paddingRight: hasRightIcon ? 40 : undefined },
          ]}
          secureTextEntry={type === "password" && !isPasswordVisible}
          autoCapitalize={type === "password" ? "none" : undefined}
          autoCorrect={type === "password" ? false : undefined}
        />
      </Box>
    </Box>
  );
};
