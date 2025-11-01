import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../contexts/AuthContext";
import { MainScreen, SignInScreen } from "../screens";

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  const { isAuthorized } = useAuth();

  return (
    <NavigationContainer>
      {isAuthorized ? (
        <Stack.Navigator>
          <Stack.Screen
            name="MainApp"
            component={MainScreen}
            options={{
              title: "Main App",
              headerBackVisible: false,
              headerLeft: () => null,
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
