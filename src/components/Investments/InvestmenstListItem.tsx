import { Pressable } from "react-native";
import { Box, Text, Badge, Card } from "../ui";
import { useNavigation } from "@react-navigation/native";

export const InvestmentsListItem = ({ item }: { item: any }) => {
  const navigation = useNavigation<any>();

  const handlePress = () => {
    navigation.navigate("HoldingDetails", {
      id: item.id,
      title: item.name,
    });
  };

  const isPositive = item.change >= 0;
  const changeLabel = `${isPositive ? "+" : ""}${item.change}%`;

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
            <Text variant="subtitle">${item.amount.toLocaleString()}</Text>
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
