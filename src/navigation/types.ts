import { NavigatorScreenParams } from "@react-navigation/native";

export type HomeStackParamList = {
  HomeMain: undefined;
  Portfolio: undefined;
  HoldingDetails: { investment: Investment };
  SecurityDetails: { security: Security };
  PlaceOrder: {
    side: "BUY" | "SELL";
    security: Security;
  };
};

export type MarketStackParamList = {
  Market: undefined;
  SecurityDetails: { security: Security };
  PlaceOrder: {
    side: "BUY" | "SELL";
    security: Security;
  };
};

export type ProfileStackParamList = {
  Profile: undefined;
  AccountInfo: undefined;
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
