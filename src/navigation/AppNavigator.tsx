import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../contexts/AuthContext";
import { SignInScreen } from "../screens";
import { MainTabs } from "./MainTabs";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  const { isAuthorized } = useAuth();

  return (
    <NavigationContainer>
      {isAuthorized ? (
        <Stack.Navigator>
          <Stack.Screen
            name="MainApp"
            component={MainTabs}
            options={{
              title: "Main App",
              headerBackVisible: false,
              headerLeft: () => null,
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{
              headerShown: false,
              gestureEnabled: false,
              animation: "fade",
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
