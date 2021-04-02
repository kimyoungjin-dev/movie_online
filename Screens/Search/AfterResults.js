import React from "react";
import Vertical from "../../Components/SlideComponent/Vertical";
import VerticalScroll from "../../Components/SlideComponent/VerticalScroll";
import styled from "styled-components/native";

const Container = styled.View`
  padding: 0px 5px;
`;

const AfterResults = ({ movieResults, tvResults }) => {
  return (
    <Container>
      {movieResults.length > 0 && (
        <VerticalScroll title="Movies">
          {movieResults.map((movie) => (
            <Vertical
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              overview={movie.overview}
              poster={movie.poster_path}
            />
          ))}
        </VerticalScroll>
      )}
      {tvResults.length > 0 && (
        <VerticalScroll title="TV Program">
          {tvResults.map((show) => (
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
      )}
    </Container>
  );
};

export default AfterResults;
