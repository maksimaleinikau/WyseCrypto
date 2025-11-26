import {
  SIGN_IN,
  SIGN_UP,
  LOGOUT,
  type AccountAction,
  EDIT_PERSONAL_INFORMATION,
  EDIT_EMAIL,
  CHANGE_PASSWORD,
} from "./accountTypes";

export interface AccountState {
  email: string;
  password: string;
  fullName: string | null;
  phoneNumber: string | null;
}

const initialState: AccountState = {
  email: "",
  password: "",
  fullName: null as string | null,
  phoneNumber: null as string | null,
};

export const accountReducer = (
  state = initialState,
  action: AccountAction
): AccountState => {
  switch (action.type) {
    case SIGN_IN:
    case SIGN_UP:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        fullName: action.payload.fullName || null,
        phoneNumber: action.payload.phoneNumber || null,
      };
    case LOGOUT:
      return initialState;
    case EDIT_PERSONAL_INFORMATION:
      return {
        ...state,
        fullName: action.payload.fullName ?? state.fullName,
        phoneNumber: action.payload.phoneNumber ?? state.phoneNumber,
      };
    case EDIT_EMAIL:
      return {
        ...state,
        email: action.payload.email,
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        password: action.payload.password,
      };
    default:
      return state;
  }
};

export default accountReducer;
