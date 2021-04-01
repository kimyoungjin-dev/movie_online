import React from "react";
import ScrollContainer from "../../Components/SlideComponent/ScrollContainer";
import TopData from "./TopData";
import styled from "styled-components/native";
import { apiImagePath } from "../../Components/api";
import { FontAwesome } from "@expo/vector-icons";
import { Text } from "react-native";
import { LocaleDate } from "../../Components/utils";

const Container = styled.View`
  margin-bottom: 80px;
`;

const PosterContainer = styled.Image`
  height: 230px;
  width: 100%;
`;

const Data = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
`;

const Title = styled.Text`
  font-weight: bold;
  color: white;
  font-size: 20px;
`;

const Content = styled.View`
  flex-direction: row;
  width: 100px;
  justify-content: space-between;
`;

const IconContainer = styled.View`
  align-items: center;
`;

const InfoIcon = styled(FontAwesome)`
  color: white;
  font-size: 20px;
`;

const Year = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 20px;
  opacity: 0.7;
  margin-bottom: 10px;
`;

const Overview = styled.Text`
  opacity: 0.7;
  color: white;
  font-size: 16px;
`;

const Presenter = ({ movieComing, showComing, loading }) => {
  console.log(movieComing);
  return (
    <ScrollContainer loading={loading}>
      <TopData showComing={showComing} />
      {movieComing.map((movie) => (
        <Container key={movie.id}>
          <PosterContainer source={{ uri: apiImagePath(movie.poster_path) }} />
          <Data>
            <Title>{movie.original_title}</Title>
            <Content>
              <IconContainer>
                <InfoIcon name="bell" />
                <Text style={{ color: "white" }}>알림 받기</Text>
              </IconContainer>

              <IconContainer>
                <InfoIcon name="info-circle" />
                <Text style={{ color: "white" }}>정보</Text>
              </IconContainer>
            </Content>
          </Data>
          <Year>{LocaleDate(movie.release_date)} 공개</Year>
          <Title>{movie.original_title}</Title>
          <Overview>{movie.overview}</Overview>
        </Container>
      ))}
    </ScrollContainer>
  );
};

export default Presenter;
