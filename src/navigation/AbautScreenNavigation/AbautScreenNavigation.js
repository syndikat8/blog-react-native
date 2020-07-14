import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../../components/common/AppHeaderIcon/AppHeaderIcon";
import { AboutScreen } from "../../screens/AboutScreen";
import { THEME } from "../../theme/theme";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const AbautNavigation = ({ navigation }) => {
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
        name="AboutScreen"
        component={AboutScreen}
        options={{
          title: "About application",
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
