import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

const selectHoldings = (state: RootState) => state.portfolio.holdings;
const selectMarketSecurities = (state: RootState) => state.market.securities;

export const selectInvestments = createSelector(
  [selectHoldings, selectMarketSecurities],
  (holdings, marketSecurities) => {
    const result: any[] = [];

    for (const [symbol, quantity] of Object.entries(holdings)) {
      if (symbol === "USD" || !quantity || quantity <= 0) continue;

      const security = marketSecurities.find(
        (s) => s.symbol === `${symbol}USD`
      );
      if (!security) continue;

      const amount = quantity * security.price;

      result.push({
        id: symbol,
        name: symbol,
        amount,
        change: security.changePercentage,
      });
    }

    result.sort((a, b) => b.amount - a.amount);

    return result;
  }
);

export const selectHoldingsDetailed = createSelector(
  [selectHoldings, selectMarketSecurities],
  (holdings, marketSecurities) => {
    const result: any[] = [];

    for (const [symbol, quantity] of Object.entries(holdings)) {
      if (symbol === "USD" || !quantity || quantity <= 0) continue;

      const security = marketSecurities.find(
        (s) => s.symbol === `${symbol}USD`
      );
      if (!security) continue;

      const valueUsd = quantity * security.price;
      const changeUsd = valueUsd * (security.changePercentage / 100);

      result.push({
        symbol: security.symbol,
        name: security.name,
        quantity,
        price: security.price,
        valueUsd,
        changeUsd,
        changePercentage: security.changePercentage,
      });
    }

    result.sort((a, b) => b.valueUsd - a.valueUsd);

    return result;
  }
);
