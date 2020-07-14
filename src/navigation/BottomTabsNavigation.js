import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, SimpleLineIcons } from "@expo/vector-icons";
import { THEME } from "../theme/theme";
import { TodoNavigation } from "./TodoScreenNavigation/TodoScreenNavigation";
import { FavoritNavigation } from "./FavoritScreenNavigation/FavoritScreenNavigation";
import { MainStackNavigation } from "./MainScreenNavigation/MainStackNavigation";

const Tab = createBottomTabNavigator();

export const BottomTabsNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      tabBarOptions={{
        activeTintColor: THEME.FONT_COLOR,
        style: { backgroundColor: THEME.MAIN_COLOR },
      }}
    >
      <Tab.Screen
        name="Main"
        component={MainStackNavigation}
        options={{
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
          tabBarIcon: ({ color }) => (
            <Entypo name="star" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Notes"
        component={TodoNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="notebook" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
