import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Text } from "../components/ui";

export const AccountInformationScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 10 }}>
      <Box>
        <Text>Account information Screen</Text>
      </Box>
    </SafeAreaView>
  );
};
