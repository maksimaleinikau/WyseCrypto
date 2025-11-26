import { RootState } from "./store";

export const selectIsAuthorized = (state: RootState) =>
  !!state.auth.email && state.auth.email.length > 0;

export const selectUser = (state: RootState) => ({
  fullName: state.auth.fullName,
  phoneNumber: state.auth.phoneNumber,
});

export const selectEmail = (state: RootState) => state.auth.email;

export const selectCurrentPassword = (state: RootState) => state.auth.password;
