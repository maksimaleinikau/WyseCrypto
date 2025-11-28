import { FlatList } from "react-native";
import { Security } from "../store/marketSlice";
import { useCallback } from "react";
import { SecuritiesListItem } from "./Securities";
import { useSelector } from "react-redux";
import { selectWatchList } from "../store/marketSelectors";

export const WatchList = () => {
  const watchList = useSelector(selectWatchList);

  const renderItem = useCallback(
    ({ item }: { item: Security }) => <SecuritiesListItem item={item} />,
    []
  );
  const keyExtractor = useCallback((item: Security) => item.symbol, []);
  return (
    <FlatList
      data={watchList}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
};
