import React from "react";
import {
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import Slide from "../../Components/SlideComponent/Slide";
import Horizontal from "../../Components/SlideComponent/Horizontal";
import SwiperContainer from "../../Components/SlideComponent/SwiperContainer";
import HorizontalScroll from "../../Components/SlideComponent/HorizontalScroll";
import HHorizontal from "../../Components/SlideComponent/HHorizontal";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import ScrollContainer from "../../Components/SlideComponent/ScrollContainer";

const Container = styled.View`
  padding: 0px 15px;
`;

const Router = styled.View`
  justify-content: flex-end;
  width: 100%;
  align-items: flex-end;
  margin-bottom: 10px;
`;

const RouterButton = styled.View`
  flex-direction: row;
  color: white;
  opacity: 0.8;
  align-items: center;
  width: 150px;
  justify-content: space-between;
`;

const Presenter = ({
  loading,
  movieNowPlaying,
  moviePopular,
  movieUpcoming,
}) => {
  const navigation = useNavigation();
  return (
    <ScrollContainer loading={loading}>
      <Container>
        <Router>
          <RouterButton>
            <TouchableOpacity onPress={() => navigation.navigate("Movie")}>
              <Text style={{ color: "white", fontSize: 16 }}>영화</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("TV")}>
              <Text style={{ color: "white", fontSize: 16 }}>TV 프로그램</Text>
            </TouchableOpacity>
          </RouterButton>
        </Router>
        <SwiperContainer>
          {movieNowPlaying.map((movie) => (
            <Slide
              key={movie.id}
              id={movie.id}
              adult={movie.adult}
              poster={movie.poster_path}
              language={movie.original_language}
              title={movie.original_title}
              genre={movie.genre_ids}
            />
          ))}
        </SwiperContainer>

        <HorizontalScroll title={"Popular Movies"}>
          {moviePopular.map((movie) => (
            <Horizontal
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              overview={movie.overview}
              poster={movie.poster_path}
            />
          ))}
        </HorizontalScroll>

        <HorizontalScroll title={"New on Cinemas"}>
          {movieUpcoming.map((movie) => (
            <HHorizontal
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              overview={movie.overview}
              poster={movie.poster_path}
            />
          ))}
        </HorizontalScroll>
      </Container>
    </ScrollContainer>
  );
};

export default Presenter;
