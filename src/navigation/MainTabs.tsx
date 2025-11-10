import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MarketScreen, ProfileScreen } from "../screens";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../theme";
import HomeInactiveIcon from "../../assets/TempTabsIcons/HomeInactiveIcon";
import MarketInactiveIcon from "../../assets/TempTabsIcons/MarketInactiveIcon";
import ProfileInactiveIcon from "../../assets/TempTabsIcons/ProfileInactiveIcon";
import HomeActiveIcon from "../../assets/TempTabsIcons/HomeActiveIcon";
import MarketActiveIcon from "../../assets/TempTabsIcons/MarketActiveIcon";
import ProfileActiveIcon from "../../assets/TempTabsIcons/ProfileActiveIcon";
import { HomeStack } from "./HomeStack";
import { MainTabParamList } from "./types";
import { Box } from "../components/ui";

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
            name="Home"
            component={HomeStack}
            options={{
              tabBarIcon: ({ focused }) =>
                focused ? <HomeActiveIcon /> : <HomeInactiveIcon />,
            }}
          />
          <Tab.Screen
            name="Market"
            component={MarketScreen}
            options={{
              tabBarIcon: ({ focused }) =>
                focused ? <MarketActiveIcon /> : <MarketInactiveIcon />,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ focused }) =>
                focused ? <ProfileActiveIcon /> : <ProfileInactiveIcon />,
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </Box>
  );
};
