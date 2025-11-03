import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, MarketScreen, ProfileScreen } from "../screens";
import { SafeAreaView } from "react-native-safe-area-context";

import HomeInactiveIcon from "../../assets/TempTabsIcons/HomeInactiveIcon";
import MarketInactiveIcon from "../../assets/TempTabsIcons/MarketInactiveIcon";
import ProfileInactiveIcon from "../../assets/TempTabsIcons/ProfileInactiveIcon";
import HomeActiveIcon from "../../assets/TempTabsIcons/HomeActiveIcon";
import MarketActiveIcon from "../../assets/TempTabsIcons/MarketActiveIcon";
import ProfileActiveIcon from "../../assets/TempTabsIcons/ProfileActiveIcon";

const Tab = createBottomTabNavigator();

export const MainTabs = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["bottom"]}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#5EDE99",
          tabBarStyle: {
            paddingRight: 32,
            paddingLeft: 32,
            paddingTop: 12,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
            marginTop: 8,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
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
  );
};
