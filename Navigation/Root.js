import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Stack from "./Stack";
import Detail from "../Screens/Detail";

const Root = createStackNavigator();

export default () => {
  return (
    <Root.Navigator
      headerMode="none"
      screenOptions={{ headerTintColor: "white" }}
    >
      <Root.Screen name="Stack" component={Stack} />
      <Root.Screen name="Detail" component={Detail} />
    </Root.Navigator>
  );
};
