import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, Text, Button } from "../components/ui";
import { SafeAreaView } from "react-native-safe-area-context";
import { MarketStackParamList, HomeStackParamList } from "../navigation/types";
import { useState, useLayoutEffect } from "react";
import { Pressable } from "react-native";
import { StarIcon } from "../components/ui";
import { CommonActions } from "@react-navigation/native";

type SecurityDetailsProps =
  | NativeStackScreenProps<MarketStackParamList, "SecurityDetails">
  | NativeStackScreenProps<HomeStackParamList, "SecurityDetails">;

export const SecurityDetailsScreen = ({
  route,
  navigation,
}: SecurityDetailsProps) => {
  const { security } = route.params;
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
    navigation.dispatch(
      CommonActions.navigate({
        //typization of navigation
        name: "PlaceOrder",
        params: { side: "BUY", security },
      })
    );
  };

  const handleSell = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: "PlaceOrder",
        params: { side: "SELL", security },
      })
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} backgroundColor="mainBackground" padding="l">
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="flex-start"
          marginBottom="m"
        >
          <Box flex={1}>
            <Text variant="headerXL" color="textPrimary">
              {security.name}
            </Text>
            <Text variant="headerLarge" color="textSecondary">
              ${security.price.toLocaleString()}
            </Text>
            <Text
              color={security.change24h >= 0 ? "primary" : "danger"}
              variant="subtitle"
            >
              {security.change24h >= 0 ? "+" : ""}
              {security.change24h}%
            </Text>
          </Box>
        </Box>

        <Box flexDirection="row" gap="s" marginTop="xl">
          <Button label="BUY" onPress={handleBuy} variant="primary" flex={1} />
          <Button label="SELL" onPress={handleSell} variant="danger" flex={1} />
        </Box>
      </Box>
    </SafeAreaView>
  );
};
