import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../theme";
import { HomeStack } from "./HomeStack";
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
import { MarketStack } from "./MarketStack";
import { ProfileStack } from "./ProfileStack";

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
            name="HomeTab"
            component={HomeStack}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? <HomeIcon /> : <HomeIconInactive />,
            }}
          />
          <Tab.Screen
            name="MarketTab"
            component={MarketStack}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? <BagIcon /> : <BagIconInactive />,
            }}
          />
          <Tab.Screen
            name="ProfileTab"
            component={ProfileStack}
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
