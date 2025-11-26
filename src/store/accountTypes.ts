export const SIGN_IN = "account/SIGN_IN" as const;
export const SIGN_UP = "account/SIGN_UP" as const;
export const LOGOUT = "account/LOGOUT" as const;
export const EDIT_PERSONAL_INFORMATION =
  "account/EDIT_PERSONAL_INFORMATION" as const;
export const EDIT_EMAIL = "account/EDIT_EMAIL" as const;
export const CHANGE_PASSWORD = "account/CHANGE_PASSWORD" as const;
export interface SignInPayload {
  email: string;
  password: string;
  fullName?: string;
  phoneNumber?: string;
}
export interface EditPersonalInformationPayload {
  fullName?: string;
  phoneNumber?: string;
}

export interface EditEmailPayload {
  email: string;
}

export interface ChangePasswordPayload {
  password: string;
}

export type AccountAction =
  | { type: typeof SIGN_IN; payload: SignInPayload }
  | { type: typeof SIGN_UP; payload: SignInPayload }
  | { type: typeof LOGOUT }
  | {
      type: typeof EDIT_PERSONAL_INFORMATION;
      payload: EditPersonalInformationPayload;
    }
  | { type: typeof EDIT_EMAIL; payload: EditEmailPayload }
  | { type: typeof CHANGE_PASSWORD; payload: ChangePasswordPayload };
