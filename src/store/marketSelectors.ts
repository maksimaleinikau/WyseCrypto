import { RootState } from "./store";
import { createSelector } from "@reduxjs/toolkit";

const selectMarketState = (state: RootState) => state.market;
const selectFavorites = (state: RootState) => state.auth.favorites;

export const selectSecurities = createSelector(
  [selectMarketState],
  (market) => market.securities
);

export const selectWatchList = createSelector(
  [selectFavorites, selectSecurities],
  (favorites, securities) => {
    return securities.filter((s) => favorites.includes(s.symbol));
  }
);
