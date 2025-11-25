import { legacy_createStore as createStore } from "redux";
import accountReducer from "./accountReducer";

export const store = createStore(accountReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
