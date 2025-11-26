import {
  SIGN_IN,
  SIGN_UP,
  LOGOUT,
  EDIT_PERSONAL_INFORMATION,
  EDIT_EMAIL,
  CHANGE_PASSWORD,
} from "./accountTypes";
import type {
  SignInPayload,
  EditEmailPayload,
  EditPersonalInformationPayload,
  ChangePasswordPayload,
} from "./accountTypes";

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

export const editPersonalInformation = (
  payload: EditPersonalInformationPayload
) =>
  ({
    type: EDIT_PERSONAL_INFORMATION,
    payload,
  } as const);

export const editEmail = (payload: EditEmailPayload) =>
  ({
    type: EDIT_EMAIL,
    payload,
  } as const);

export const changePassword = (payload: ChangePasswordPayload) =>
  ({
    type: CHANGE_PASSWORD,
    payload,
  } as const);
