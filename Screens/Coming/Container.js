import React, { useState, useEffect } from "react";
import { MovieApi, tvApi } from "../../Components/api";
import Presenter from "./Presenter";

const Container = () => {
  const [loading, setLoading] = useState(true);
  const [comingUp, setComingUp] = useState({
    movieComing: [],
    showComing: [],
  });

  const getData = async () => {
    const [movieComing] = await MovieApi.MovieNowPlaying();
    const [showComing] = await tvApi.showAiringToday();

    setComingUp({
      movieComing,
      showComing,
    });
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return <Presenter {...comingUp} loading={loading} />;
};

export default Container;
