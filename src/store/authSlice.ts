import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  email: string;
  password: string;
  fullName: string;
  phoneNumber: string;
  favorites: string[];
}

const initialState: AuthState = {
  email: "",
  password: "",
  fullName: "",
  phoneNumber: "",
  favorites: ["BTCUSD", "ETHUSD", "SOLUSD"],
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
      state.fullName = "";
      state.phoneNumber = "";
    },
    signUp: (
      state,
      action: PayloadAction<{
        email: string;
        password: string;
        fullName?: string | null;
        phoneNumber?: string | null;
      }>
    ) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.fullName = action.payload.fullName ?? "";
      state.phoneNumber = action.payload.phoneNumber ?? "";
    },
    editPersonalInformation: (
      state,
      action: PayloadAction<{ fullName: string; phoneNumber: string }>
    ) => {
      state.fullName = action.payload.fullName;

      state.phoneNumber = action.payload.phoneNumber;
    },
    editEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    changePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    logout: () => initialState,
    addToFavorites: (state, action: PayloadAction<string>) => {
      const symbol = action.payload;
      if (!state.favorites.includes(symbol)) {
        state.favorites.push(symbol);
      }
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter((s) => s !== action.payload);
    },
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const symbol = action.payload;
      if (state.favorites.includes(symbol)) {
        state.favorites = state.favorites.filter((s) => s !== symbol);
      } else {
        state.favorites.push(symbol);
      }
    },
  },
});

export const {
  signIn,
  signUp,
  editPersonalInformation,
  editEmail,
  changePassword,
  logout,
  addToFavorites,
  removeFromFavorites,
  toggleFavorite,
} = authSlice.actions;

export default authSlice.reducer;
