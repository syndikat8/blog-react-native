import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../../components/common/AppHeaderIcon/AppHeaderIcon";
import { CreateScreen } from "../../screens/CreateScreen";
import { THEME } from "../../theme/theme";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const CreateNavigation = ({ navigation }) => {
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
        name="Create"
        component={CreateScreen}
        options={{
          title: "Create post",
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
