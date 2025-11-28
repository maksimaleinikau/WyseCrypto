import { Pressable } from "react-native";
import { Box, Text, Badge, Card } from "../ui";
import { useNavigation } from "@react-navigation/native";

type HoldingsListItemProps = {
  item: {
    symbol: string;
    name: string;
    quantity: number;
    price: number;
    valueUsd: number;
    changeUsd: number;
    changePercentage: number;
  };
  onPress?: () => void;
};

export const HoldingsListItem = ({ item, onPress }: HoldingsListItemProps) => {
  const navigation = useNavigation<any>();

  const handlePress = () => {
    onPress?.();
    navigation.navigate("HoldingDetails", {
      symbol: item.symbol,
      title: item.name,
    });
  };

  const isPositive = item.changeUsd >= 0;
  const changeLabel = `${isPositive ? "+" : ""}${item.changeUsd.toFixed(2)}`;

  const ticker = item.symbol.replace("USD", "");

  return (
    <Pressable onPress={handlePress}>
      <Card padding="m" marginBottom="s">
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          flex={1}
        >
          <Box flexDirection="row" alignItems="center" gap="m" flex={1}>
            <Box
              width={40}
              height={40}
              backgroundColor="mainBackground"
              borderRadius={10}
            />

            <Box>
              <Text variant="headerXL" marginBottom="xs">
                {item.name}
              </Text>
              <Text variant="headerLarge" color="textSecondary">
                {item.quantity.toFixed(6).replace(/\.?0+$/, "")} {ticker}
              </Text>
            </Box>
          </Box>

          <Box alignItems="flex-end">
            <Text variant="headerLarge" marginBottom="xs">
              ${item.valueUsd.toLocaleString()}
            </Text>
            <Badge
              label={changeLabel}
              variant={isPositive ? "success" : "failure"}
            />
          </Box>
        </Box>
      </Card>
    </Pressable>
  );
};
