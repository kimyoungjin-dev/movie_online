import React from "react";
import ScrollContainer from "../../Components/SlideComponent/ScrollContainer";
import SearchForm from "./SearchForm";
import PreviousResults from "./PreviousResults";
import AfterResults from "./AfterResults";

const Presenter = ({
  onChange,
  onSearch,
  loading,
  value,
  movieResults,
  tvResults,
  moviePopular,
  tvPopular,
}) => {
  return (
    <ScrollContainer loading={loading}>
      <SearchForm value={value} onSearch={onSearch} onChange={onChange} />
      {movieResults.length === 0 && tvResults.length === 0 && (
        <PreviousResults moviePopular={moviePopular} tvPopular={tvPopular} />
      )}
      <AfterResults movieResults={movieResults} tvResults={tvResults} />
    </ScrollContainer>
  );
};

export default Presenter;
