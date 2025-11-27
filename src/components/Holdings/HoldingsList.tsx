import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import { useCallback } from "react";
import { HoldingsListItem } from "./HoldingListItem";
import { selectHoldingsDetailed } from "../../store/portfolioSelectors";

export const HoldingsList = () => {
  const holdings = useSelector(selectHoldingsDetailed);

  const renderItem = useCallback(
    ({ item }: any) => <HoldingsListItem item={item} onPress={() => {}} />,
    []
  );

  const keyExtractor = useCallback((item: any) => item.symbol, []);

  return (
    <FlatList
      data={holdings}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
    />
  );
};
