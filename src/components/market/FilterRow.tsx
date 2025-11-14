import { FlatList } from "react-native";
import { Box, Button } from "../ui";

type Filter = {
  id: string;
  label: string;
};

const filters: Filter[] = [
  { id: "all", label: "All" },
  { id: "usdcad", label: "USDCAD" },
  { id: "eurusd", label: "EURUSD" },
  { id: "gbpusd", label: "GBPUSD" },
  { id: "usdjpy", label: "USDJPY" },
  { id: "audusd", label: "AUDUSD" },
  { id: "usdchf", label: "USDCHF" },
  { id: "nzdusd", label: "NZDUSD" },
  { id: "usdcny", label: "USDCNY" },
  { id: "usdmxn", label: "USDMXN" },
  { id: "usdinr", label: "USDINR" },
  { id: "favorites", label: "Favorites" },
];

type FilterRowProps = {
  activeFilter: string;
  onPress: (id: string) => void;
};

export const FilterRow = ({ activeFilter, onPress }: FilterRowProps) => {
  return (
    <FlatList
      data={filters}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Box marginRight="s">
          <Button
            label={item.label}
            variant={
              activeFilter === item.id ? "filterActive" : "filterInactive"
            }
            onPress={() => onPress(item.id)}
          />
        </Box>
      )}
    />
  );
};
