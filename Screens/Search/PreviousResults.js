import React from "react";
import ScrollContainer from "../../Components/SlideComponent/ScrollContainer";
import VerticalScroll from "../../Components/SlideComponent/VerticalScroll";
import Vertical from "../../Components/SlideComponent/Vertical";

const PreviousResults = ({ moviePopular, tvPopular }) => {
  return (
    <ScrollContainer>
      <VerticalScroll title="Popular Search">
        {moviePopular.map((movie) => (
          <Vertical
            key={movie.id}
            id={movie.id}
            title={movie.original_title}
            overview={movie.overview}
            poster={movie.poster_path}
          />
        ))}
      </VerticalScroll>

      <VerticalScroll title="Popular Search">
        {tvPopular.map((show) => (
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
    </ScrollContainer>
  );
};

export default PreviousResults;
