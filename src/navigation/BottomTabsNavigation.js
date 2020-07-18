import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Entypo, SimpleLineIcons } from "@expo/vector-icons";
import { THEME } from "../theme/theme";
import { TodoNavigation } from "./TodoScreenNavigation/TodoScreenNavigation";
import { FavoritNavigation } from "./FavoritScreenNavigation/FavoritScreenNavigation";
import { MainStackNavigation } from "./MainScreenNavigation/MainStackNavigation";

const Tab = createMaterialBottomTabNavigator();

export const BottomTabsNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      shifting={true}
    >
      <Tab.Screen
        name="Main"
        component={MainStackNavigation}
        options={{
          tabBarColor: THEME.MAIN_COLOR,
          tabBarLabel: "All",
          tabBarIcon: ({ color }) => (
            <Entypo name="folder-images" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoritNavigation}
        options={{
          tabBarColor: THEME.TAB_COLOR_FAVARITE,
          tabBarIcon: ({ color }) => (
            <Entypo name="star" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Notes"
        component={TodoNavigation}
        options={{
          tabBarColor: THEME.TAB_COLOR_NOTES,
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="notebook" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
