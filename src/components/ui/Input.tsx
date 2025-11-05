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
import {
  EyeIcon,
  EyeOffIcon,
  SearchIcon,
  RadioButtonIcon,
  RadioButtonActiveIcon,
} from "./icons";

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
  type?: "text" | "password" | "search" | "textarea";
  rightIcon?: React.ReactNode;
  multiline?: boolean;
  numberOfLines?: number;
  withRadio?: boolean;
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
  multiline = type === "textarea",
  numberOfLines = multiline ? 4 : 1,
  withRadio = false,
  ...rest
}) => {
  const theme = useTheme<Theme>();
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isRadioChecked, setIsRadioChecked] = useState(false);

  const getVariant = (): string => {
    if (type === "textarea") return "textArea";
    if (autoFocusVariant && isFocused) return "focused";
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
  const toggleRadio = () => {
    setIsRadioChecked(!isRadioChecked);
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
  const hasRadio = withRadio && !multiline;

  return (
    <Box>
      {label && <Text variant="inputLabel">{label}</Text>}
      <Box flexDirection="row" alignItems="center" gap="s">
        {hasRadio && (
          <TouchableOpacity
            onPress={toggleRadio}
            disabled={variant === "disabled"}
          >
            {isRadioChecked ? <RadioButtonActiveIcon /> : <RadioButtonIcon />}
          </TouchableOpacity>
        )}
        <Box position="relative" flex={1}>
          {hasRightIcon && !multiline && (
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
              {
                color: textColor,
                paddingRight: hasRightIcon && multiline ? 40 : undefined,
                textAlignVertical: multiline ? "top" : "center",
                minHeight: multiline ? 100 : undefined,
                paddingLeft: hasRadio ? 8 : undefined,
              },
            ]}
            secureTextEntry={type === "password" && !isPasswordVisible}
            autoCapitalize={type === "password" ? "none" : undefined}
            autoCorrect={type === "password" ? false : undefined}
            multiline={multiline}
            numberOfLines={multiline ? numberOfLines : 1}
          />
        </Box>
      </Box>
    </Box>
  );
};
