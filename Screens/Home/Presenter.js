import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  background-color: black;
  height: 100%;
  width: 100%;
  flex: 1;
`;
const Presenter = () => {
  return (
    <Container>
      <Text>hello</Text>
    </Container>
  );
};

export default Presenter;
