import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HomeScreen,
  PortfolioScreen,
  HoldingDetailsScreen,
  SecurityDetailsScreen,
  PlaceOrderScreen
} from "../screens";
import { HomeStackParamList } from "./types";

const Stack = createNativeStackNavigator<HomeStackParamList>();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{
          headerShown: false,
          gestureEnabled: false,
          animation: "fade",
        }}
      />
      <Stack.Screen name="Portfolio" component={PortfolioScreen} />
      <Stack.Screen
        name="HoldingDetails"
        component={HoldingDetailsScreen}
        options={({ route }) => ({
          headerShown: true,
          headerTitle: route.params.investment.name,
          headerBackTitleVisible: false,
        })}
      />
      <Stack.Screen
        name="SecurityDetails"
        component={SecurityDetailsScreen}
        options={({ route }) => ({
          headerShown: true,
          headerTitle: route.params.security.name,
          headerBackTitleVisible: false,
        })}
      />
      <Stack.Screen
        name="PlaceOrder"
        component={PlaceOrderScreen}
        options={({ route }) => ({
          headerTitle: `${route.params.side} ${route.params.security.name}`,
          headerBackTitleVisible: false,
        })}
      />
    </Stack.Navigator>
  );
};
