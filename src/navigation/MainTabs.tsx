import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../theme";
import { HomeStack } from "./HomeStack";
import { MainTabParamList } from "./types";
import {
  BagEmptyIcon,
  BagIcon,
  Box,
  HomeEmptyIcon,
  HomeIcon,
  ProfileEmptyIcon,
  ProfileIcon,
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
              paddingHorizontal: theme.spacing.xl,
              paddingTop: theme.spacing.sm2,
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: "600",
              marginTop: theme.spacing.s,
            },
          }}
        >
          <Tab.Screen
            name="HomeTab"
            component={HomeStack}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? <HomeIcon /> : <HomeEmptyIcon />,
            }}
          />
          <Tab.Screen
            name="MarketTab"
            component={MarketStack}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? <BagIcon /> : <BagEmptyIcon />,
            }}
          />
          <Tab.Screen
            name="ProfileTab"
            component={ProfileStack}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? <ProfileIcon /> : <ProfileEmptyIcon />,
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </Box>
  );
};
