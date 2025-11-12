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
        >
          <Box>
            <Text variant="headerLarge">{item.name}</Text>
            <Text variant="subtitle">${item.price.toLocaleString()}</Text>
          </Box>
          <Badge
            label={changeLabel}
            variant={isPositive ? "success" : "failure"}
          />
        </Box>
      </Card>
    </Pressable>
  );
};
