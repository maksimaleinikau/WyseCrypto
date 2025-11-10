import { NavigatorScreenParams } from "@react-navigation/native";
import { Investment } from "../components";
import { Security } from "../components";
export type MainTabParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Market: undefined;
  Profile: undefined;
};

export type HomeStackParamList = {
  HomeMain: undefined;
  Portfolio: undefined;
  HoldingDetails: { investment: Investment };
  SecurityDetails: { security: Security };
};

export type RootStackParamList = {
  MainApp: NavigatorScreenParams<MainTabParamList>;
  SignIn: undefined;
};
