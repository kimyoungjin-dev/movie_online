import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";
import Credit from "../Components/Credit";
import Detail from "../Screens/Detail";
import Movie from "../Screens/Movie";
import TV from "../Screens/TV";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        headerTitleStyle: { fontSize: 16 },
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "rgb(32,33,35)",
          borderBottomColor: "rgb(32,33,35)",
          shadowColor: "rgb(32,33,35)",
        },
        headerTintColor: "white",
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Credit" component={Credit} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Movie" component={Movie} />
      <Stack.Screen name="TV" component={TV} />
    </Stack.Navigator>
  );
};
