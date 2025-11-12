import { FlatList } from "react-native";
import { Box, Text, Badge, ListItem } from "./ui";
import { Investment } from "../navigation";
import { useCallback } from "react";
export const mockInvestments: Investment[] = [
  { id: "1", name: "BTC", amount: 50000, change: 2.5 },
  { id: "2", name: "ETH", amount: 3000, change: -1.2 },
  { id: "3", name: "LTC", amount: 2.5, change: -5.7 },
];

type InvestmentsListProps = {
  data?: Investment[];
};
export const InvestmentsList = ({
  data = mockInvestments,
}: InvestmentsListProps) => {
  const renderItem = useCallback(
    ({ item }: { item: Investment }) => (
      <ListItem
        item={item}
        to="HoldingDetails"
        params={(i) => ({ investment: i })}
        marginBottom="s"
      >
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
            label={`${item.change >= 0 ? "+" : ""}${item.change}%`}
            variant={item.change >= 0 ? "success" : "failure"}
          />
        </Box>
      </ListItem>
    ),
    []
  );

  const keyExtractor = useCallback((item: Investment) => item.id, []);

  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
};
