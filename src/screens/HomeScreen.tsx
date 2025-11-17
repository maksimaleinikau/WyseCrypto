import { Box, Button } from "../components/ui";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  InvestmentsList,
  mockInvestments,
  mockWatchlist,
  WatchList,
} from "../components";
import { useAppNavigation } from "../hooks/useAppNavigation";

export const HomeScreen = () => {
  const navigation = useAppNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} padding="m">
        <Button
          label="Go to portfolio"
          onPress={() => navigation.navigate("Portfolio")}
          marginBottom="l"
        />
        <InvestmentsList data={mockInvestments} />
        <WatchList data={mockWatchlist} />
      </Box>
    </SafeAreaView>
  );
};
