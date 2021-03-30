import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Movie from "../Screens/Movie";
import TV from "../Screens/TV";
import Search from "../Screens/Search";

const Tabs = createBottomTabNavigator();

export default () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 14 },
        activeTintColor: "white",
        inactiveTintColor: "gray",
        style: { backgroundColor: "black", borderTopColor: "black" },
      }}
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Movie" component={Movie} />
      <Tabs.Screen name="TV" component={TV} />
      <Tabs.Screen name="Search" component={Search} />
    </Tabs.Navigator>
  );
};
