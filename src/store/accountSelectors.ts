import { RootState } from "./store";

export const selectIsAuthorized = (state: RootState) =>
  !!state.email && state.email.length > 0;

export const selectUser = (state: RootState) => ({
  fullName: state.fullName,
  phoneNumber: state.phoneNumber,
});

export const selectEmail = (state: RootState) => state.email;

export const selectCurrentPassword = (state: RootState) => state.password;
