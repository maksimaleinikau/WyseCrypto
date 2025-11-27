import { FlatList } from "react-native";
import { Security } from "../../store/marketSlice";
import { useCallback } from "react";
import { SecuritiesListItem } from "./SecuritiesListItem";

type SecuritiesListProps = {
  data: Security[];
};

export const SecuritiesList = ({ data }: SecuritiesListProps) => {
  const renderItem = useCallback(({ item }: { item: Security }) => {
    return <SecuritiesListItem item={item} />;
  }, []);
  const keyExtractor = useCallback((item: Security) => item.symbol, []);
  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
};
