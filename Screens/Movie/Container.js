import React, { useState, useEffect } from "react";
import Presenter from "../Movie/Presenter";
import { MovieApi } from "../../Components/api";

const Container = () => {
  const [genres, setGenres] = useState({
    Comedy: [],
    Fantasy: [],
    Horror: [],
    Romance: [],
    Thriller: [],
    Action: [],
    Adventure: [],
    Animation: [],
    Crime: [],
    War: [],
  });
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const [Comedy] = await MovieApi.MovieDisCovery(35);
    const [Fantasy] = await MovieApi.MovieDisCovery(14);
    const [Horror] = await MovieApi.MovieDisCovery(27);
    const [Romance] = await MovieApi.MovieDisCovery(10749);
    const [Thriller] = await MovieApi.MovieDisCovery(53);
    const [Action] = await MovieApi.MovieDisCovery(28);
    const [Adventure] = await MovieApi.MovieDisCovery(12);
    const [Animation] = await MovieApi.MovieDisCovery(16);
    const [Crime] = await MovieApi.MovieDisCovery(80);
    const [War] = await MovieApi.MovieDisCovery(10752);

    setGenres({
      Comedy,
      Fantasy,
      Horror,
      Romance,
      Thriller,
      Action,
      Adventure,
      Animation,
      Crime,
      War,
    });
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return <Presenter {...genres} loading={loading} />;
};

export default Container;
