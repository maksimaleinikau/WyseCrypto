import { SafeAreaView } from "react-native-safe-area-context";
import { HoldingsList } from "../components/Holdings/HoldingsList";

export const PortfolioScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 10 }}>
      <HoldingsList />
    </SafeAreaView>
  );
};
