import { Box, Text, Button } from "../components/ui";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useLayoutEffect } from "react";
import { Pressable } from "react-native";
import { StarIcon } from "../components/ui";
import { RootParamList } from "../navigation";
import { useAppNavigation } from "../hooks/useAppNavigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type SecurityDetailsRouteProps = NativeStackScreenProps<
  RootParamList,
  "SecurityDetails"
>;

export const SecurityDetailsScreen = ({ route }: SecurityDetailsRouteProps) => {
  const navigation = useAppNavigation();
  const { id, title, price, change24h } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => setIsFavorite((prev) => !prev)}>
          <StarIcon color={isFavorite ? "#5EDE99" : "#BEBEBE"} />
        </Pressable>
      ),
    });
  }, [navigation, isFavorite]);

  const handleBuy = () => {
    navigation.navigate("PlaceOrder", {
      side: "BUY",
      securityId: id,
      title,
      price,
      change24h,
    });
  };

  const handleSell = () => {
    navigation.navigate("PlaceOrder", {
      side: "SELL",
      securityId: id,
      title,
      price,
      change24h,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} backgroundColor="mainBackground" padding="l">
        <Box alignItems="center" marginBottom="xl">
          <Text variant="headerXL" color="textPrimary" marginBottom="s">
            {title}
          </Text>

          <Text variant="headerLarge" color="textSecondary" marginBottom="s">
            ${price.toLocaleString()}
          </Text>

          <Text
            variant="subtitle"
            color={change24h >= 0 ? "primary" : "danger"}
          >
            {change24h >= 0 ? "+" : ""}
            {change24h}%
          </Text>
        </Box>

        <Box flexDirection="row" gap="s" width="100%">
          <Button label="BUY" onPress={handleBuy} variant="primary" flex={1} />
          <Button label="SELL" onPress={handleSell} variant="danger" flex={1} />
        </Box>
      </Box>
    </SafeAreaView>
  );
};
