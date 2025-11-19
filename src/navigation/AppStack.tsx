import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainTabs } from "./MainTabs";
import {
  SecurityDetailsScreen,
  PlaceOrderScreen,
  PortfolioScreen,
  HoldingDetailsScreen,
  AccountInformationScreen,
  EditPersonalInfoScreen,
  EditEmailScreen,
  ChangePasswordScreen,
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
    <Stack.Screen
      name="EditPersonalInfo"
      component={EditPersonalInfoScreen}
      options={{ headerShown: true, title: "Edit Personal Information" }}
    />

    <Stack.Screen
      name="EditEmail"
      component={EditEmailScreen}
      options={{ headerShown: true, title: "Edit Email" }}
    />

    <Stack.Screen
      name="ChangePassword"
      component={ChangePasswordScreen}
      options={{ headerShown: true, title: "Change Password" }}
    />
  </Stack.Navigator>
);
