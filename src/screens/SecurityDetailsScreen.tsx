import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Text } from "../components/ui";

export const SecurityDetailsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 10 }}>
      <Box>
        <Text>Security Details Screen</Text>
      </Box>
    </SafeAreaView>
  );
};
