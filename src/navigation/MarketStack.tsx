import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MarketScreen } from "../screens/MarketScreen";
import { MarketStackParamList } from "./types";
import { SecurityDetailsScreen, PlaceOrderScreen } from "../screens";

const Stack = createNativeStackNavigator<MarketStackParamList>();

export const MarketStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Market"
        component={MarketScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SecurityDetails"
        component={SecurityDetailsScreen}
        options={({ route }) => ({
          headerShown: true,
          headerTitle: route.params.title,
          headerBackTitleVisible: false,
        })}
      />
      <Stack.Screen
        name="PlaceOrder"
        component={PlaceOrderScreen}
        options={({ route }) => ({
          headerTitle: `${route.params.side} ${route.params.title}`,
          headerBackTitleVisible: false,
        })}
      />
    </Stack.Navigator>
  );
};
