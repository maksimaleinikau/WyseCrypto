import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, LoadingIndicator, SearchInput } from "../components/ui";
import { SafeAreaView } from "react-native-safe-area-context";
import { SecuritiesList, mockSecurities } from "../components";
import { MarketStackParamList } from "../navigation/types";
import { useForm, FormProvider, useWatch } from "react-hook-form";
import { useMemo, useDeferredValue, useState } from "react";
import { FilterRow } from "../components/market/FilterRow";

type MarketScreenProps = NativeStackScreenProps<MarketStackParamList, "Market">;

export const MarketScreen = ({}: MarketScreenProps) => {
  const methods = useForm();
  const search = useWatch({ control: methods.control, name: "search" }) || "";

  const deferredSearch = useDeferredValue(search);
  const isPending = search !== deferredSearch;

  const [activeFilter, setActiveFilter] = useState("all");

  const filteredData = useMemo(() => {
    const loadingTime = Date.now();
    while (Date.now() - loadingTime < 500) {} //loading imitation

    let result = mockSecurities;
    if (activeFilter !== "all" && activeFilter !== "favorites") {
      result = result.filter(
        (item) => item.symbol.toLowerCase() === activeFilter.toLowerCase()
      );
    }

    if (deferredSearch) {
      result = result.filter(
        (item) =>
          item.symbol.toLowerCase().includes(deferredSearch.toLowerCase()) ||
          item.name.toLowerCase().includes(deferredSearch.toLowerCase())
      );
    }
    return result;
  }, [deferredSearch, activeFilter]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} padding="m">
        <FormProvider {...methods}>
          <SearchInput name="search" placeholder="Search..." />
          <Box marginTop="s">
            <FilterRow activeFilter={activeFilter} onPress={setActiveFilter} />
          </Box>
          <Box marginTop="m" flex={1}>
            {isPending ? (
              <LoadingIndicator />
            ) : (
              <SecuritiesList data={filteredData} />
            )}
          </Box>
        </FormProvider>
      </Box>
    </SafeAreaView>
  );
};
