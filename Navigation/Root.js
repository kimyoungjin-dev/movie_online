import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Stack from "./Stack";
import Movie from "../Screens/Movie";
import TV from "../Screens/TV";

const Root = createStackNavigator();

export default () => {
  return (
    <Root.Navigator headerMode="none">
      <Root.Screen name="Stack" component={Stack} />
      <Root.Screen name="Movie" component={Movie} />
      <Root.Screen name="TV" component={TV} />
    </Root.Navigator>
  );
};
