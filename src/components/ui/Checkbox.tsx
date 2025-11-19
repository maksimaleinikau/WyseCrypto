import { Theme } from "../../theme";
import { Box } from "./Box";
import { Text } from "./Text";
import { TouchableOpacity } from "react-native";
import { useTheme } from "@shopify/restyle";

export interface CheckboxProps {
  checked: boolean;
  onPress?: () => void;
  disabled?: boolean;
  size?: number;
  label?: React.ReactNode;
  children?: React.ReactNode;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  onPress,
  disabled = false,
  size = 24,
  label,
  children,
}) => {
  const theme = useTheme<Theme>();

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
      style={{
        flexDirection: "row",
        alignItems: "flex-start",
        paddingHorizontal: 16,
        paddingVertical: 8,
      }}
    >
      <Box
        width={size}
        height={size}
        borderWidth={1}
        borderColor="checkboxColor"
        backgroundColor={checked ? "checkboxColor" : "inputBackground"}
        borderRadius={4}
        alignItems="center"
        justifyContent="center"
        marginTop="xs"
      />

      {(label || children) && (
        <Box flex={1} marginLeft="s">
          {label ? <Text variant="checkBoxLabel">{label}</Text> : children}
        </Box>
      )}
    </TouchableOpacity>
  );
};
