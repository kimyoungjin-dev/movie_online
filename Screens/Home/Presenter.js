import React from "react";
import { ActivityIndicator, Dimensions, ScrollView, View } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import Slide from "../../Components/Slide";

const { height: HEIGHT } = Dimensions.get("window");

const SwiperContainer = styled.View`
  height: ${HEIGHT / 2.5};
  width: 100%;
`;

const Presenter = ({
  loading,
  movieNowPlaying,
  moviePopular,
  movieTopRated,
  movieUpcoming,
}) => {
  return (
    <ScrollView
      contentContainerStyle={{
        flex: loading ? 1 : "auto",
        justifyContent: loading ? "center" : "auto",
      }}
    >
      {loading ? (
        <ActivityIndicator color="white" size="large" />
      ) : (
        <SwiperContainer>
          <Swiper loop timeout={3} controlsEnabled={false}>
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
          </Swiper>
        </SwiperContainer>
      )}
    </ScrollView>
  );
};

export default Presenter;
