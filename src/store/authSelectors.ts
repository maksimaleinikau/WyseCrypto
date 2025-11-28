import { RootState } from "./store";
import { createSelector } from "@reduxjs/toolkit";

const selectAuthState = (state: RootState) => state.auth;

export const selectIsAuthorized = (state: RootState) =>
  !!state.auth.email && state.auth.email.length > 0;

export const selectUser = createSelector([selectAuthState], (auth) => ({
  fullName: auth.fullName,
  phoneNumber: auth.phoneNumber,
}));

export const selectEmail = (state: RootState) => state.auth.email;

export const selectCurrentPassword = (state: RootState) => state.auth.password;

export const selectFavorites = createSelector(
  [selectAuthState],
  (auth) => auth.favorites
);

export const selectIsFavorite = (symbol: string) => {
  createSelector([selectAuthState], (auth) => auth.favorites.includes(symbol));
};
