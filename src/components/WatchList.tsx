import { FlatList } from "react-native";
import { Security } from "../navigation";
import { useCallback } from "react";
import { SecuritiesListItem } from "./Securities";
export const mockWatchlist: Security[] = [
  { id: "1", name: "name1", price: 178.5, change24h: 1.2 },
  { id: "2", name: "name2", price: 2800, change24h: -0.8 },
  { id: "3", name: "name3", price: 720, change24h: 3.5 },
];

export type WatchListProps = {
  data?: Security[];
};

export const WatchList = ({ data = mockWatchlist }: WatchListProps) => {
  const renderItem = useCallback(
    ({ item }: { item: Security }) => <SecuritiesListItem item={item} />,
    []
  );
  const keyExtractor = useCallback((item: Security) => item.id, []);
  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
};
