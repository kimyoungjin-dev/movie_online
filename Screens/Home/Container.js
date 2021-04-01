import React, { useState, useEffect } from "react";
import { MovieApi } from "../../Components/api";
import Presenter from "./Presenter";

const Container = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState();

  const getData = async () => {
    const [movieNowPlaying] = await MovieApi.MovieNowPlaying();
    const [moviePopular] = await MovieApi.MoviePopular();
    const [movieTopRated] = await MovieApi.MovieTopRated();
    const [movieUpcoming] = await MovieApi.MovieUpcoming();
    setMovies({
      movieNowPlaying,
      moviePopular,
      movieTopRated,
      movieUpcoming,
    });
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return <Presenter {...movies} loading={loading} />;
};

export default Container;
