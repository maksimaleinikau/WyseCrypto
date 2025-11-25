import { Pressable } from "react-native";
import { Box, Text, Badge, Card } from "../ui";
import { useNavigation } from "@react-navigation/native";
import { Security } from "../../navigation";

type SecuritiesListItemProps = {
  item: Security;
};

export const SecuritiesListItem = ({ item }: SecuritiesListItemProps) => {
  const navigation = useNavigation<any>();

  const handlePress = () => {
    navigation.navigate("SecurityDetails", {
      id: item.id,
      title: item.name,
      price: item.price,
      change24h: item.change24h,
      symbol: item.symbol,
    });
  };

  const isPositive = item.change24h >= 0;
  const changeLabel = `${isPositive ? "+" : ""}${item.change24h}%`;

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
              <Text variant="headerXL" marginBottom="xs">
                {item.symbol}
              </Text>
            </Box>
          </Box>

          <Box alignItems="flex-end">
            <Text variant="headerLarge" marginBottom="xs">
              ${item.price.toLocaleString()}
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
