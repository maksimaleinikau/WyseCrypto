import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, Text, Button } from "../components/ui";
import { SafeAreaView } from "react-native-safe-area-context";
import { MarketStackParamList } from "../navigation/types";
import { useState } from "react";
import { Pressable } from "react-native";
import { StarIcon } from "../components/ui";

type SecurityDetailsProps = NativeStackScreenProps<
  MarketStackParamList,
  "SecurityDetails"
>;

export const SecurityDetailsScreen = ({
  route,
  navigation,
}: SecurityDetailsProps) => {
  const { security } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  const handleBuy = () => {
    navigation.navigate("PlaceOrder", {
      side: "BUY",
      security,
    });
  };

  const handleSell = () => {
    navigation.navigate("PlaceOrder", {
      side: "SELL",
      security,
    });
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

          <Pressable
            onPress={() => setIsFavorite((prev) => !prev)}
            hitSlop={12}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.7 : 1,
                padding: 8,
                borderRadius: 8,
              },
            ]}
          >
            <StarIcon color={isFavorite ? "#5EDE99" : "#BEBEBE"} />
          </Pressable>
        </Box>
        <Box flexDirection="row" gap="m" marginTop="xl">
          <Button label="BUY" onPress={handleBuy} variant="primary" flex={1} />
          <Button label="SELL" onPress={handleSell} variant="danger" flex={1} />
        </Box>
      </Box>
    </SafeAreaView>
  );
};
