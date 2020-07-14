import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Entypo } from "@expo/vector-icons";

export const AppHeaderIcon = (props) => (
  <HeaderButton
    {...props}
    IconComponent={Entypo}
    iconSize={24}
    color={"#fff"}
  />
);
