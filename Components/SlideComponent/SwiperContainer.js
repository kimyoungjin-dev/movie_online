import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Swiper from "react-native-web-swiper";

const { height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  height: ${HEIGHT / 2.3};
  width: 100%;
`;

const SwiperContainer = ({ children }) => {
  return (
    <Container>
      <Swiper loop timeout={3} controlsEnabled={false}>
        {children}
      </Swiper>
    </Container>
  );
};

export default SwiperContainer;
