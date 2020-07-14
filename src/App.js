import * as React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { AppDrawerNavigation } from "./navigation/DrawerNavigation";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppDrawerNavigation />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
