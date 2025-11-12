import { FlatList } from "react-native";
import { ListItem, ListItemContent } from "./ui";
import { Security } from "../navigation";
import { useCallback } from "react";
export const mockSecurities: Security[] = [
  { id: "1", name: "Bitcoin", price: 69234.5, change24h: 2.34 },
  { id: "2", name: "Ethereum", price: 3782.1, change24h: -0.87 },
  { id: "3", name: "BNB", price: 598.2, change24h: 1.45 },
];

type SecuritiesListProps = {
  data?: Security[];
};

export const SecuritiesList = ({
  data = mockSecurities,
}: SecuritiesListProps) => {
  const renderItem = useCallback(
    ({ item }: { item: Security }) => (
      <ListItem
        item={item}
        to="SecurityDetails"
        params={(i) => ({ security: i })}
        marginBottom="s"
      >
        <ListItemContent item={item} />
      </ListItem>
    ),
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
