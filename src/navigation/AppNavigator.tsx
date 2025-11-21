import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../contexts/AuthContext";
import { RootParamList } from "./types";
import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";

const Stack = createNativeStackNavigator<RootParamList>();

export const AppNavigator = () => {
  const { isAuthorized } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthorized ? (
          <Stack.Screen name="MainApp" component={AppStack} />
        ) : (
          <Stack.Screen
            name="Auth"
            component={AuthStack}
            options={{ gestureEnabled: false, animation: "fade" }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
