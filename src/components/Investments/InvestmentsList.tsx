import { FlatList } from "react-native";
import { Investment } from "../../navigation";
import { useCallback } from "react";
import { InvestmentsListItem } from "./InvestmenstListItem";

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
    ({ item }: { item: Investment }) => <InvestmentsListItem item={item} />,
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
