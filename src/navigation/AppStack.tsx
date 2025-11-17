import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainTabs } from "./MainTabs";
import {
  SecurityDetailsScreen,
  PlaceOrderScreen,
  PortfolioScreen,
  HoldingDetailsScreen,
  AccountInformationScreen,
} from "../screens";
import { RootParamList } from "./types";

const Stack = createNativeStackNavigator<RootParamList>();

export const AppStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MainTabs" component={MainTabs} />

    <Stack.Screen
      name="SecurityDetails"
      component={SecurityDetailsScreen}
      options={({ route }) => ({
        headerShown: true,
        title: route.params.title,
      })}
    />
    <Stack.Screen
      name="PlaceOrder"
      component={PlaceOrderScreen}
      options={({ route }) => ({
        headerShown: true,
        title: `${route.params.side} ${route.params.title}`,
      })}
    />
    <Stack.Screen
      name="Portfolio"
      component={PortfolioScreen}
      options={{ headerShown: true }}
    />
    <Stack.Screen
      name="HoldingDetails"
      component={HoldingDetailsScreen}
      options={{ headerShown: true }}
    />
    <Stack.Screen
      name="AccountInformation"
      component={AccountInformationScreen}
      options={{ headerShown: true }}
    />
  </Stack.Navigator>
);
