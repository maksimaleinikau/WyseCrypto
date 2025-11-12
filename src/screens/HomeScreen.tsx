import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Box, Button } from "../components/ui";
import { useNavigation } from "@react-navigation/native";
import { HomeStackParamList } from "../navigation";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  InvestmentsList,
  mockInvestments,
  mockWatchlist,
  WatchList,
} from "../components";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  "HomeMain"
>;

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

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
