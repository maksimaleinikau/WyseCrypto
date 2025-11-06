import { Theme } from "../../theme";
import { Box } from "./Box";
import { TouchableOpacity } from "react-native";
import { useTheme } from "@shopify/restyle";

export interface CheckboxProps {
  checked: boolean;
  onPress?: () => void;
  disabled?: boolean;
  size?: number;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  onPress,
  disabled = false,
  size = 24,
}) => {
  const theme = useTheme<Theme>();
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Box
        width={size}
        height={size}
        borderWidth={1}
        borderColor="checkboxColor"
        backgroundColor={checked ? "checkboxColor" : "inputBackground"}
        borderRadius={4}
        alignItems="center"
        justifyContent="center"
      />
    </TouchableOpacity>
  );
};
