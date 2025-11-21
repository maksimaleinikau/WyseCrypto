export type RootParamList = {
  Auth: undefined;
  MainApp: undefined;
  MainTabs: undefined;

  SecurityDetails: {
    id: string;
    title: string;
    symbol: string;
    price: number;
    change24h: number;
  };
  PlaceOrder: {
    side: "BUY" | "SELL";
    securityId: string;
    title: string;
    price: number;
    change24h: number;
    symbol: string;
  };
  Portfolio: undefined;
  HoldingDetails: { id: string; title: string };
  AccountInformation: undefined;

  EditPersonalInfo: undefined;
  EditEmail: undefined;
  ChangePassword: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Market: undefined;
  Profile: undefined;
};
export type AuthStackParamlist = {
  SignIn: undefined;
  SignUp: undefined;
};

export interface Investment {
  id: string;
  name: string;
  amount: number;
  change: number;
}
export interface Security {
  id: string;
  name: string;
  price: number;
  change24h: number;
  symbol: string;
}
