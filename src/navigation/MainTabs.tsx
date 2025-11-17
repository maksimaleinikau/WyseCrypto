import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../theme";
import { MainTabParamList } from "./types";
import {
  BagIcon,
  BagIconInactive,
  Box,
  HomeIcon,
  HomeIconInactive,
  ProfileIcon,
  ProfileIconInactive,
} from "../components/ui";
import { HomeScreen, MarketScreen, ProfileScreen } from "../screens";

const Tab = createBottomTabNavigator<MainTabParamList>();

export const MainTabs = () => {
  const theme = useTheme<Theme>();
  return (
    <Box flex={1}>
      <SafeAreaView style={{ flex: 1 }} edges={["bottom"]}>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: theme.colors.primary,
            tabBarStyle: {
              paddingTop: theme.spacing.sm2,
              paddingHorizontal: theme.spacing.xl,
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: "600",
              marginTop: theme.spacing.xs,
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? <HomeIcon /> : <HomeIconInactive />,
            }}
          />
          <Tab.Screen
            name="Market"
            component={MarketScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? <BagIcon /> : <BagIconInactive />,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? <ProfileIcon /> : <ProfileIconInactive />,
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </Box>
  );
};
