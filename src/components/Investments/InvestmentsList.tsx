import { FlatList } from "react-native";
import { useCallback } from "react";
import { InvestmentsListItem } from "./InvestmenstListItem";
import { useSelector } from "react-redux";
import { selectInvestments } from "../../store/portfolioSelectors";

export const InvestmentsList = () => {
  const investments = useSelector(selectInvestments);

  const renderItem = useCallback(
    ({ item }: any) => <InvestmentsListItem item={item} />,
    []
  );
  const keyExtractor = useCallback((item: any) => item.id, []);
  return (
    <FlatList
      data={investments}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
};
