export type RootParamList = {
  SignIn: undefined;
  Registration: undefined;
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
  };
  Portfolio: undefined;
  HoldingDetails: { id: string; title: string };
  AccountInformation: undefined;
  EditProfile: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Market: undefined;
  Profile: undefined;
};
export interface Investment {
  id: string;
  name: string;
  amount: number;
  change: number;
}
export interface Security {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change24h: number;
}
