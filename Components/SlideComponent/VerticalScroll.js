import React from "react";
import { ScrollView } from "react-native";
import Title from "../Title";

const VerticalScroll = ({ title, children }) => {
  return (
    <>
      <Title title={title} />
      <ScrollView>{children}</ScrollView>
    </>
  );
};

export default VerticalScroll;
