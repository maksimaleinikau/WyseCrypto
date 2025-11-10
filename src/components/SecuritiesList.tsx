import { FlatList } from "react-native";
import { Box, Badge, ListItem, Text } from "./ui";
import { Security } from "../navigation";

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
