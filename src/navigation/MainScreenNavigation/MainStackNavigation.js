import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../../components/common/AppHeaderIcon/AppHeaderIcon";
import { PostsScreen } from "../../screens/PostsScreen";
import { THEME } from "../../theme/theme";
import { MainScreen } from "../../screens/MainScreen";

const Stack = createStackNavigator();

export const MainStackNavigation = ({ navigation }) => {
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
        name="Main"
        component={MainScreen}
        options={{
          title: "My blog",
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item
                title={"Right"}
                iconName="camera"
                onPress={() => navigation.navigate("Create")}
              />
            </HeaderButtons>
          ),
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

      <Stack.Screen
        name="Posts"
        component={PostsScreen}
        options={({ route }) => ({
          title: `Post from  ${new Date(
            route.params.date
          ).toLocaleDateString()}`,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item
                title={"Right"}
                iconName="star"
                onPress={() => alert("In process...")}
              />
            </HeaderButtons>
          ),
        })}
      />
    </Stack.Navigator>
  );
};
