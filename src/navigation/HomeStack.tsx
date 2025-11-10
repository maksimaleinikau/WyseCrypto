import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HomeScreen,
  PortfolioScreen,
  HoldingDetailsScreen,
  SecurityDetailsScreen,
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
      <Stack.Screen name="HoldingDetails" component={HoldingDetailsScreen} />
      <Stack.Screen name="SecurityDetails" component={SecurityDetailsScreen} />
    </Stack.Navigator>
  );
};
