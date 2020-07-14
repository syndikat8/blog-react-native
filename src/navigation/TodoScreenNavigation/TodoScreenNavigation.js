import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../../components/common/AppHeaderIcon/AppHeaderIcon";
import { TodoScreen } from "../../screens/TodoScreen";
import { THEME } from "../../theme/theme";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const TodoNavigation = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: THEME.MAIN_COLOR,
        },
        headerTintColor: THEME.FONT_COLOR,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="TodoScreen"
        component={TodoScreen}
        options={{
          title: "Notes",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item
                title={"Left"}
                iconName="menu"
                onPress={() => navigation.toggleDrawer()}
              />
            </HeaderButtons>
          ),
        }}
      />
    </Stack.Navigator>
  );
};
