import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "left",
        headerStyle: {
          backgroundColor: "black",
          borderBottomColor: "black",
          shadowColor: "black",
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="Tabs" component={Tabs} />
    </Stack.Navigator>
  );
};
