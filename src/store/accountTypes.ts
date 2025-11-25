export const SIGN_IN = "account/SIGN_IN" as const;
export const SIGN_UP = "account/SIGN_UP" as const;
export const LOGOUT = "account/LOGOUT" as const;

export interface SignInPayload {
  email: string;
  password: string;
  fullName?: string;
  phoneNumber?: string;
}

export type AccountAction =
  | { type: typeof SIGN_IN; payload: SignInPayload }
  | { type: typeof SIGN_UP; payload: SignInPayload }
  | { type: typeof LOGOUT };
