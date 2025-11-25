import { SIGN_IN, SIGN_UP, LOGOUT, type SignInPayload } from "./accountTypes";

export const signIn = (payload: SignInPayload) => ({
  type: SIGN_IN,
  payload,
});
export const signUp = (payload: SignInPayload) => ({
  type: SIGN_UP,
  payload,
});
export const logout = () => ({
  type: LOGOUT,
});
