import React from "react";
import { ActivityIndicator, ScrollView } from "react-native";

const ScrollContainer = ({ loading, children }) => {
  return (
    <ScrollView
      style={{
        backgroundColor: "rgb(32,33,35)",
      }}
      contentContainerStyle={{
        flex: loading ? 1 : "auto",
        justifyContent: loading ? "center" : "auto",
      }}
    >
      {loading ? (
        <ActivityIndicator color="white" size="large" />
      ) : (
        <>{children}</>
      )}
    </ScrollView>
  );
};

export default ScrollContainer;
