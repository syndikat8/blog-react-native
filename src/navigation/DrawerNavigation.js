import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AbautNavigation } from "../navigation/AbautScreenNavigation/AbautScreenNavigation";
import { THEME } from "../theme/theme";
import { CreateNavigation } from "./CreateScreenNavigation/CreateScreenNavigation";
import { TodoNavigation } from "./TodoScreenNavigation/TodoScreenNavigation";
import { BottomTabsNavigation } from "./BottomTabsNavigation";

const Drawer = createDrawerNavigator();

export const AppDrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      drawerContentOptions={{
        activeTintColor: THEME.MAIN_COLOR,
        labelStyle: {fontSize: 16},
      }}
      drawerStyle={{
        backgroundColor: THEME.DRAWER_COLOR,
        width: 200,
      }}
    >
      <Drawer.Screen name="Home" component={BottomTabsNavigation} />
      <Drawer.Screen name="Notes" component={TodoNavigation} />
      <Drawer.Screen name="Create" component={CreateNavigation} options={{ drawerLabel: "New post" }}/>
      <Drawer.Screen name="About" component={AbautNavigation} options={{ drawerLabel: "About application" }} />
    </Drawer.Navigator>
  );
};
