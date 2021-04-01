import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Search from "../Screens/Search";
import Coming from "../Screens/Coming";
import User from "../Screens/User";
import {
  MaterialIcons,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

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
          } else if (route.name === "Coming") {
            return (
              <MaterialCommunityIcons
                name="gesture-spread"
                size={30}
                color="white"
              />
            );
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
        style: {
          backgroundColor: "rgb(31,32,34)",
          borderTopColor: "rgb(32,33,35)",
        },
        showLabel: false,
      }}
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="Coming" component={Coming} />
      <Tabs.Screen name="User" component={User} />
    </Tabs.Navigator>
  );
};
