import { FlatList } from "react-native";
import { Box, Text, Badge, ListItem } from "./ui";

export interface Security {
  id: string;
  name: string;
  price: number;
  change24h: number;
}

export const mockWatchlist: Security[] = [
  { id: "1", name: "name1", price: 178.5, change24h: 1.2 },
  { id: "2", name: "name2", price: 2800, change24h: -0.8 },
  { id: "3", name: "name3", price: 720, change24h: 3.5 },
];

export type WatchListProps = {
  data?: Security[];
};

export const WatchList = ({ data = mockWatchlist }: WatchListProps) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ListItem
          item={item}
          to="SecurityDetails"
          params={(i) => ({ security: i })}
          marginBottom="s"
        >
          {(item) => (
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
                label={`${item.change24h >= 0 ? "+" : ""}${item.change24h}%`}
                variant={item.change24h >= 0 ? "success" : "failure"}
              />
            </Box>
          )}
        </ListItem>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};
