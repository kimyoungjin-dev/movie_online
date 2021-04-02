import React from "react";
import styled from "styled-components/native";
import VerticalScroll from "../../Components/SlideComponent/VerticalScroll";
import Vertical from "../../Components/SlideComponent/Vertical";
import ScrollContainer from "../../Components/SlideComponent/ScrollContainer";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";

const Container = styled.View`
  padding: 50px 15px 0px 15px;
`;

const Presenter = ({
  ActionAdventure,
  Animation,
  Comedy,
  Crime,
  Documentary,
  Drama,
  Mystery,
  News,
  Reality,
  SF_Fantasy,
  Talk,
  Western,
  loading,
}) => {
  const navigation = useNavigation();
  return (
    <ScrollContainer loading={loading}>
      <Container>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={{ color: "white" }}>뒤로가기</Text>
        </TouchableOpacity>
        <VerticalScroll title={"ActionAdventure"}>
          {ActionAdventure.map((show) => (
            <Vertical
              key={show.id}
              id={show.id}
              title={show.original_name}
              overview={show.overview}
              poster={show.poster_path}
              isShow={true}
            />
          ))}
        </VerticalScroll>
        <VerticalScroll title={"애니메이션"}>
          {Animation.map((show) => (
            <Vertical
              key={show.id}
              id={show.id}
              title={show.original_name}
              overview={show.overview}
              poster={show.poster_path}
              isShow={true}
            />
          ))}
        </VerticalScroll>

        <VerticalScroll title={"Comedy 프로그램"}>
          {Comedy.map((show) => (
            <Vertical
              key={show.id}
              id={show.id}
              title={show.original_name}
              overview={show.overview}
              poster={show.poster_path}
              isShow={true}
            />
          ))}
        </VerticalScroll>

        <VerticalScroll title={"Crime"}>
          {Crime.map((show) => (
            <Vertical
              key={show.id}
              id={show.id}
              title={show.original_name}
              overview={show.overview}
              poster={show.poster_path}
              isShow={true}
            />
          ))}
        </VerticalScroll>

        <VerticalScroll title={"Documentary"}>
          {Documentary.map((show) => (
            <Vertical
              key={show.id}
              id={show.id}
              title={show.original_name}
              overview={show.overview}
              poster={show.poster_path}
              isShow={true}
            />
          ))}
        </VerticalScroll>

        <VerticalScroll title={"Drama"}>
          {Drama.map((show) => (
            <Vertical
              key={show.id}
              id={show.id}
              title={show.original_name}
              overview={show.overview}
              poster={show.poster_path}
              isShow={true}
            />
          ))}
        </VerticalScroll>

        <VerticalScroll title={"Mystery"}>
          {Mystery.map((show) => (
            <Vertical
              key={show.id}
              id={show.id}
              title={show.original_name}
              overview={show.overview}
              poster={show.poster_path}
              isShow={true}
            />
          ))}
        </VerticalScroll>
        <VerticalScroll title={"News"}>
          {News.map((show) => (
            <Vertical
              key={show.id}
              id={show.id}
              title={show.original_name}
              overview={show.overview}
              poster={show.poster_path}
              isShow={true}
            />
          ))}
        </VerticalScroll>

        <VerticalScroll title={"Reality"}>
          {Reality.map((show) => (
            <Vertical
              key={show.id}
              id={show.id}
              title={show.original_name}
              overview={show.overview}
              poster={show.poster_path}
              isShow={true}
            />
          ))}
        </VerticalScroll>

        <VerticalScroll title={"SF_Fantasy"}>
          {SF_Fantasy.map((show) => (
            <Vertical
              key={show.id}
              id={show.id}
              title={show.original_name}
              overview={show.overview}
              poster={show.poster_path}
              isShow={true}
            />
          ))}
        </VerticalScroll>

        <VerticalScroll title={"Talk"}>
          {Talk.map((show) => (
            <Vertical
              key={show.id}
              id={show.id}
              title={show.original_name}
              overview={show.overview}
              poster={show.poster_path}
              isShow={true}
            />
          ))}
        </VerticalScroll>

        <VerticalScroll title={"Western"}>
          {Western.map((show) => (
            <Vertical
              key={show.id}
              id={show.id}
              title={show.original_name}
              overview={show.overview}
              poster={show.poster_path}
              isShow={true}
            />
          ))}
        </VerticalScroll>
      </Container>
    </ScrollContainer>
  );
};

export default Presenter;
