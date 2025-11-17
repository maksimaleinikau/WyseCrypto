import { Box, Text, Button } from "../components/ui";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootParamList } from "../navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type PlaceOrderRouteProp = NativeStackScreenProps<RootParamList, "PlaceOrder">;

export const PlaceOrderScreen = ({ route }: PlaceOrderRouteProp) => {
  const { side, title, price } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} padding="l" justifyContent="center" alignItems="center">
        <Text variant="headerLarge" marginBottom="m">
          {side} {title}
        </Text>
        <Text variant="headerLarge" color="textSecondary" marginBottom="s">
          ${price.toLocaleString()}
        </Text>
        <Button
          label={`Confirm ${side}`}
          variant={side === "BUY" ? "primary" : "danger"}
          onPress={() => alert(`${side} order placed!`)}
        />
      </Box>
    </SafeAreaView>
  );
};
