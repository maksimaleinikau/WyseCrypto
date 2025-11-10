import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, Text } from "../components/ui";
import { SafeAreaView } from "react-native-safe-area-context";
import { SecuritiesList, mockSecurities } from "../components";
import { MarketStackParamList } from "../navigation/types";

type MarketScreenProps = NativeStackScreenProps<MarketStackParamList, "Market">;

export const MarketScreen = ({}: MarketScreenProps) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} padding="m">
        <SecuritiesList data={mockSecurities} />
      </Box>
    </SafeAreaView>
  );
};
