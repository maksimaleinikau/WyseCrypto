import { RootState } from "./store";

export const selectIsAuthorized = (state: RootState) =>
  !!state.email && state.email.length > 0;