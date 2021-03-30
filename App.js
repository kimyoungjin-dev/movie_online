import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import RootNav from "./Navigation/Root";

const loadImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

const loadFonts = (fonts) => fonts.map((font) => [Font.loadAsync(font)]);

const App = () => {
  const [loading, setLoading] = useState(false);
  const start = () => {
    const images = loadImages([
      "https://images.unsplash.com/photo-1615149956009-f9fa32fc75e5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      require("./assets/splash.png"),
    ]);
    const fonts = loadFonts([Ionicons.font], [FontAwesome.font]);
    return Promise.all([...images, ...fonts]);
  };

  const onFinish = () => setLoading(true);
  return (
    <>
      {loading ? (
        <NavigationContainer>
          <RootNav />
        </NavigationContainer>
      ) : (
        <AppLoading
          startAsync={start}
          onError={console.error}
          onFinish={onFinish}
        />
      )}
    </>
  );
};

export default App;
