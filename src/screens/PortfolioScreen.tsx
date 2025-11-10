import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Text } from "../components/ui";
export const PortfolioScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 10 }}>
      <Box>
        <Text>Portfolio Screen</Text>
      </Box>
    </SafeAreaView>
  );
};
