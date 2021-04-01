import React, { useState, useEffect } from "react";
import { MovieApi } from "../../Components/api";
import Presenter from "./Presenter";

// 0: {id: 28, name: "Action"}
// 1: {id: 12, name: "Adventure"}
// 2: {id: 16, name: "Animation"}
// 3: {id: 35, name: "Comedy"}
// 4: {id: 80, name: "Crime"}
// 5: {id: 99, name: "Documentary"}
// 6: {id: 18, name: "Drama"}
// 7: {id: 10751, name: "Family"}
// 8: {id: 14, name: "Fantasy"}
// 9: {id: 36, name: "History"}
// 10: {id: 27, name: "Horror"}
// 11: {id: 10402, name: "Music"}
// 12: {id: 9648, name: "Mystery"}
// 13: {id: 10749, name: "Romance"}
// 14: {id: 878, name: "Science Fiction"}
// 15: {id: 10770, name: "TV Movie"}
// 16: {id: 53, name: "Thriller"}
// 17: {id: 10752, name: "War"}
// 18: {id: 37, name: "Western"}

const Container = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState({
    movieNowPlaying: [],
    moviePopular: [],
    movieTopRated: [],
    movieUpcoming: [],
  });

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
