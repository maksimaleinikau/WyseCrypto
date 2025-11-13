import { FlatList } from "react-native";
import { Security } from "../../navigation";
import { useCallback } from "react";
import { SecuritiesListItem } from "./SecuritiesListItem";

export const mockSecurities: Security[] = [
  {
    id: "1",
    symbol: "EURUSD",
    name: "Euro / US Dollar",
    price: 1.17639,
    change24h: -0.09,
  },
  {
    id: "2",
    symbol: "GBPUSD",
    name: "British Pound / US Dollar",
    price: 1.37582,
    change24h: 0.45,
  },
  {
    id: "3",
    symbol: "USDJPY",
    name: "US Dollar / Japanese Yen",
    price: 145.23,
    change24h: 0.12,
  },
  {
    id: "4",
    symbol: "AUDUSD",
    name: "Australian Dollar / US Dollar",
    price: 0.67891,
    change24h: -0.34,
  },
  {
    id: "5",
    symbol: "USDCAD",
    name: "US Dollar / Canadian Dollar",
    price: 1.37845,
    change24h: 0.28,
  },
  {
    id: "6",
    symbol: "USDCHF",
    name: "US Dollar / Swiss Franc",
    price: 0.8921,
    change24h: -0.15,
  },
  {
    id: "7",
    symbol: "NZDUSD",
    name: "New Zealand Dollar / US Dollar",
    price: 0.61234,
    change24h: 0.67,
  },
  {
    id: "8",
    symbol: "USDCNY",
    name: "US Dollar / Chinese Yuan",
    price: 7.2654,
    change24h: 0.03,
  },
  {
    id: "9",
    symbol: "USDMXN",
    name: "US Dollar / Mexican Peso",
    price: 19.8721,
    change24h: -0.41,
  },
  {
    id: "10",
    symbol: "USDINR",
    name: "US Dollar / Indian Rupee",
    price: 83.9512,
    change24h: 0.11,
  },
];

type SecuritiesListProps = {
  data?: Security[];
};

export const SecuritiesList = ({ data }: SecuritiesListProps) => {
  const renderItem = useCallback(({ item }: { item: Security }) => {
    return <SecuritiesListItem item={item} />;
  }, []);
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
