import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { apiImagePath } from "../api";
import { trimText, ButtonColor } from "../utils";

const Container = styled.View`
  margin-bottom: 20px;
`;

const Data = styled.View`
  flex-direction: row;
  width: 100%;
`;

const PosterBox = styled.View`
  height: 120px;
  width: 50%;
  margin-right: 5px;
`;

const PosterContainer = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 3px;
`;

const Contents = styled.View`
  width: 50%;
  height: 100%;
`;

const Title = styled.Text`
  color: white;
  margin-bottom: 6px;
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

const Vertical = ({ id, title, overview, poster, isShow = false }) => {
  return (
    <Container>
      <Data>
        <PosterBox>
          <TouchableOpacity onPress={(() => "Detail", { id, isShow })}>
            <PosterContainer source={{ uri: apiImagePath(poster) }} />
          </TouchableOpacity>
          <HDBox>
            <Text>HD</Text>
          </HDBox>
        </PosterBox>

        <Contents>
          <Title>{title}</Title>
          <Overview>{trimText(overview, 140)}</Overview>
        </Contents>
      </Data>
    </Container>
  );
};

export default Vertical;
