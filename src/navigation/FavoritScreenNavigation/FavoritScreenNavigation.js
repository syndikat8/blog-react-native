import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../../components/common/AppHeaderIcon/AppHeaderIcon";
import { FavoriteScreen } from "../../screens/FavoriteScreen";
import { THEME } from "../../theme/theme";
import { createStackNavigator } from "@react-navigation/stack";
import { PostsScreen } from "../../screens/PostsScreen";

const Stack = createStackNavigator();

export const FavoritNavigation = ({ navigation }) => {
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
        component={FavoriteScreen}
        options={{
          title: "Favorite",
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
