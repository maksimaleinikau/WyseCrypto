import { ActivityIndicator } from "react-native";
import { Box } from "./Box";
import { Text } from "./Text";
export const LoadingIndicator = () => {
  return (
    <Box justifyContent="center" alignItems="center" marginBottom="s">
      <ActivityIndicator size="small" color="#5EDE99" />
      <Text variant="subtitle" color="textSecondary">
        Searching...
      </Text>
    </Box>
  );
};
