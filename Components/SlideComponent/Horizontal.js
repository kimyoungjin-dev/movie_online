import React from "react";
import styled from "styled-components/native";
import { apiImagePath } from "../api";
import { trimText, ButtonColor } from "../utils";

const Container = styled.View`
  align-items: flex-start;
  margin-right: 10px;
`;

const Data = styled.View`
  align-items: center;
  justify-content: center;
`;

const PosterContainer = styled.Image`
  height: 120px;
  width: 250px;
  border-radius: 3px;
`;

const Contents = styled.View`
  width: 250px;
`;

const Title = styled.Text`
  color: white;
  margin: 8px 0px;
`;

const Overview = styled.Text`
  font-size: 10px;
  color: white;
  opacity: 0.7;
`;

const HDBox = styled.View`
  background-color: ${ButtonColor};
  padding: 5px 10px 5px 10px;
  position: absolute;
  top: 5px;
  right: 5px;
  border-radius: 3px;
`;

const HDText = styled.Text``;

const Horizontal = ({ id, title, overview, poster, isShow = false }) => {
  return (
    <Container>
      <Data>
        <PosterContainer source={{ uri: apiImagePath(poster) }} />
        <HDBox>
          <HDText>HD</HDText>
        </HDBox>
        <Contents>
          <Title>{title}</Title>
          <Overview>{trimText(overview, 80)}</Overview>
        </Contents>
      </Data>
    </Container>
  );
};

export default Horizontal;
