import React from "react";
import styled from "styled-components/native";
import { ActivityIndicator, ScrollView } from "react-native";
import VerticalScroll from "../../Components/SlideComponent/VerticalScroll";
import Vertical from "../../Components/SlideComponent/Vertical";
import ScrollContainer from "../../Components/SlideComponent/ScrollContainer";

const Container = styled.View`
  padding: 0px 15px;
`;

const MoviePresenter = ({
  Action,
  Adventure,
  Animation,
  Comedy,
  Crime,
  Fantasy,
  Horror,
  Romance,
  Thriller,
  War,
  loading,
}) => {
  return (
    <ScrollContainer loading={loading}>
      <Container>
        <VerticalScroll title={"Action Movies"}>
          {Action.map((movie) => (
            <Vertical
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              overview={movie.overview}
              poster={movie.poster_path}
            />
          ))}
        </VerticalScroll>

        <VerticalScroll title={"Adventure Movies"}>
          {Adventure.map((movie) => (
            <Vertical
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              overview={movie.overview}
              poster={movie.poster_path}
            />
          ))}
        </VerticalScroll>

        <VerticalScroll title={"Animation Movies"}>
          {Animation.map((movie) => (
            <Vertical
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              overview={movie.overview}
              poster={movie.poster_path}
            />
          ))}
        </VerticalScroll>

        <VerticalScroll title={"Comedy Movies"}>
          {Comedy.map((movie) => (
            <Vertical
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              overview={movie.overview}
              poster={movie.poster_path}
            />
          ))}
        </VerticalScroll>

        <VerticalScroll title={"Crime Movies"}>
          {Crime.map((movie) => (
            <Vertical
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              overview={movie.overview}
              poster={movie.poster_path}
            />
          ))}
        </VerticalScroll>

        <VerticalScroll title={"Fantasy Movies"}>
          {Fantasy.map((movie) => (
            <Vertical
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              overview={movie.overview}
              poster={movie.poster_path}
            />
          ))}
        </VerticalScroll>

        <VerticalScroll title={"Horror Movies"}>
          {Horror.map((movie) => (
            <Vertical
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              overview={movie.overview}
              poster={movie.poster_path}
            />
          ))}
        </VerticalScroll>

        <VerticalScroll title={"Romance Movies"}>
          {Romance.map((movie) => (
            <Vertical
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              overview={movie.overview}
              poster={movie.poster_path}
            />
          ))}
        </VerticalScroll>

        <VerticalScroll title={"Thriller Movies"}>
          {Thriller.map((movie) => (
            <Vertical
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              overview={movie.overview}
              poster={movie.poster_path}
            />
          ))}
        </VerticalScroll>
        <VerticalScroll title={"War Movies"}>
          {War.map((movie) => (
            <Vertical
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              overview={movie.overview}
              poster={movie.poster_path}
            />
          ))}
        </VerticalScroll>
      </Container>
    </ScrollContainer>
  );
};

export default MoviePresenter;
