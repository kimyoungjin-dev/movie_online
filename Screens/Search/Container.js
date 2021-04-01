import React, { useState, useEffect } from "react";
import { MovieApi, tvApi } from "../../Components/api";
import Presenter from "./Presenter";

const Container = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchData, setSearchData] = useState({
    movieResults: [],
    tvResults: [],
  });
  const [popularData, setPopularData] = useState({
    moviePopular: [],
    tvPopular: [],
  });

  const onChange = (text) => setValue(text);
  const onSearch = async () => {
    setLoading(true);
    const [movieResults] = await MovieApi.MovieSearch(value);
    const [tvResults] = await tvApi.showSearch(value);

    setSearchData({
      movieResults,
      tvResults,
    });
    setLoading(false);
  };

  const getData = async () => {
    const [moviePopular] = await MovieApi.MoviePopular();
    const [tvPopular] = await tvApi.showPopular();

    setPopularData({
      moviePopular,
      tvPopular,
    });

    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Presenter
      onChange={onChange}
      onSearch={onSearch}
      loading={loading}
      value={value}
      {...searchData}
      {...popularData}
    />
  );
};

export default Container;
