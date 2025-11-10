import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, Text, Button } from "../components/ui";
import { SafeAreaView } from "react-native-safe-area-context";
import { MarketStackParamList } from "../navigation";

type PlaceOrderProps = NativeStackScreenProps<
  MarketStackParamList,
  "PlaceOrder"
>;
export const PlaceOrderScreen = ({ route }: PlaceOrderProps) => {
  const { side, security } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} backgroundColor="mainBackground" padding="l">
        <Text variant="headerLarge" marginBottom="m" textAlign="center">
          {side} {security.name}
        </Text>

        <Box
          backgroundColor="cardBackground"
          padding="l"
          borderRadius={12}
          marginBottom="l"
        >
          <Text variant="subtitle" color="textSecondary">
            Current Price
          </Text>
          <Text variant="headerLarge" color="textPrimary">
            ${security.price.toLocaleString()}
          </Text>
        </Box>

        <Button
          label={`Confirm ${side}`}
          onPress={() => alert(`${side} order placed!`)}
          variant={side === "BUY" ? "primary" : "danger"}
        />
      </Box>
    </SafeAreaView>
  );
};
