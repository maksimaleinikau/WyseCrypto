import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  email: string;
  password: string;
  fullName: string | null;
  phoneNumber: string | null;
}

const initialState: AuthState = {
  email: "",
  password: "",
  fullName: null,
  phoneNumber: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.fullName = null;
      state.phoneNumber = null;
    },
    editPersonalInformation: (
      state,
      action: PayloadAction<{ fullName?: string; phoneNumber?: string }>
    ) => {
      if (action.payload.fullName !== undefined) {
        state.fullName = action.payload.fullName;
      }
      if (action.payload.phoneNumber !== undefined) {
        state.phoneNumber = action.payload.phoneNumber;
      }
    },
    editEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    changePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    logout: () => initialState,
  },
});

export const {
  signIn,
  editPersonalInformation,
  editEmail,
  changePassword,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
