import { NavigatorScreenParams } from "@react-navigation/native";

export type HomeStackParamList = {
  HomeMain: undefined;
  Portfolio: undefined;
  HoldingDetails: { id: string; title: string };
  SecurityDetails: {
    id: string;
    title: string;
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
};

export type MarketStackParamList = {
  Market: undefined;
  SecurityDetails: {
    id: string;
    title: string;
    price: number;
    change24h: number;
  };
  PlaceOrder: {
    securityId: string;
    side: "BUY" | "SELL";
    title: string;
    price: number;
    change24h: number;
  };
};

export type ProfileStackParamList = {
  Profile: undefined;
  AccountInformation: undefined;
};

export type MainTabParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>;
  MarketTab: NavigatorScreenParams<MarketStackParamList>;
  ProfileTab: NavigatorScreenParams<ProfileStackParamList>;
};

export type RootStackParamList = {
  MainApp: NavigatorScreenParams<MainTabParamList>;
  SignIn: undefined;
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
}
