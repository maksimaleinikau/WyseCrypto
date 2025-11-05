import { TouchableOpacity } from "react-native";
import { Text } from "./Text";
import { Box } from "./Box";
import { Theme } from "../../theme";
import { UploadIcon, RadioButtonIcon } from "./icons";
import { useTheme } from "@shopify/restyle";

export interface UploadAreaProps {
  onPress?: () => void;
  isLoading?: boolean;
  label?: string;
}

export const Upload: React.FC<UploadAreaProps> = ({
  onPress,
  isLoading = false,
  label = "Upload File",
}) => {
  const theme = useTheme<Theme>();

  return (
    <TouchableOpacity onPress={onPress}>
      <Box
        borderWidth={1}
        borderColor="inputBorder"
        backgroundColor="inputBackground"
        borderRadius={4}
        alignItems="center"
        justifyContent="center"
        minHeight={120}
      >
        <Box mb="xs">{isLoading ? <RadioButtonIcon /> : <UploadIcon />}</Box>
        <Text variant="uploadLabel" color="textTertiary">
          {label}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};
