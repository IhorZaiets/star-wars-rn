import React, { FC } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import theme from "../../../theme";
import FavoriteScreen from "../../favorite/screens/FavoriteScreen";
import FeedScreen from "../../feed/screens/FeedScreen";
import { getTabBarIcon } from "../helpers/getTabBarIcon";
import { TabRoutes } from "../types";

const Tab = createBottomTabNavigator();

const TabNavigator: FC = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color }) => {
        const Icon = getTabBarIcon(route.name);

        return <Icon width={20} height={20} fill={color} />;
      },
      tabBarStyle: {
        paddingTop: 16,
      },
      tabBarActiveTintColor: theme.colors.ebonyClay,
      tabBarInactiveTintColor: theme.colors.gray,
      tabBarIconStyle: {
        height: 54,
        paddingTop: 7,
        elevation: 30,
        zIndex: 100,
      },
    })}
  >
    <Tab.Screen name={TabRoutes.FEED} component={FeedScreen} />
    <Tab.Screen name={TabRoutes.FAVORITE} component={FavoriteScreen} />
  </Tab.Navigator>
);

export default TabNavigator;
