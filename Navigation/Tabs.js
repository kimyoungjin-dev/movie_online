import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Search from "../Screens/Search";
import Folder from "../Screens/Folder";
import User from "../Screens/User";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import styled from "styled-components/native";

const Container = styled.View``;

const Tabs = createBottomTabNavigator();

export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route?.state?.routeNames[route?.state?.index] || "MovieOnline",
    });
  }, [route]);

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = "";
          if (route.name === "Home") {
            iconName = "house";
          } else if (route.name === "Search") {
            iconName = "search";
          } else if (route.name === "Folder") {
            iconName = "folder-open";
          } else if (route.name === "User") {
            return (
              <Feather
                name="user"
                size={30}
                color={focused ? "white" : "gray"}
              />
            );
          }
          return (
            <MaterialIcons
              name={iconName}
              size={30}
              color={focused ? "white" : "gray"}
            />
          );
        },
      })}
      tabBarOptions={{
        labelStyle: { fontSize: 14 },
        style: { backgroundColor: "rgb(31,32,34)", borderTopColor: "black" },
        showLabel: false,
      }}
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="Folder" component={Folder} />
      <Tabs.Screen name="User" component={User} />
    </Tabs.Navigator>
  );
};
