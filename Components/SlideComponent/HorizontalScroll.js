import React from "react";
import { ScrollView } from "react-native";
import Title from "../Title";

const HorizontalScroll = ({ title, children }) => {
  return (
    <>
      <Title title={title} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {children}
      </ScrollView>
    </>
  );
};

export default HorizontalScroll;
