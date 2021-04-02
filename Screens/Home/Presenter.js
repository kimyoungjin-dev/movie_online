import React from "react";
import Slide from "../../Components/SlideComponent/Slide";
import Horizontal from "../../Components/SlideComponent/Horizontal";
import SwiperContainer from "../../Components/SlideComponent/SwiperContainer";
import HorizontalScroll from "../../Components/SlideComponent/HorizontalScroll";
import HHorizontal from "../../Components/SlideComponent/HHorizontal";
import styled from "styled-components/native";
import ScrollContainer from "../../Components/SlideComponent/ScrollContainer";
import Category from "./Category";

const Container = styled.View`
  padding: 0px 5px;
`;

const Presenter = ({
  loading,
  movieNowPlaying,
  moviePopular,
  movieUpcoming,
}) => {
  return (
    <ScrollContainer loading={loading}>
      <Category />
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
      <Container>
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
