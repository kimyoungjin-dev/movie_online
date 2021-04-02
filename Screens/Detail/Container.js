import React, { useState, useEffect } from "react";
import { MovieApi, tvApi } from "../../Components/api";
import Presenter from "./Presenter";
import * as WebBrowser from "expo-web-browser";

const Container = ({
  route: {
    params: { id, isShow, poster },
  },
}) => {
  const [result, setResult] = useState({
    data: [],
  });
  const [loading, setLoading] = useState(true);
  const [genres, setGenres] = useState({
    Credit: [],
  });

  const getData = async () => {
    const [data] = isShow
      ? await tvApi.showDetail(id)
      : await MovieApi.MovieDetail(id);

    const [Credit] = isShow
      ? await tvApi.showCredit(id)
      : await MovieApi.MovieCredit(id);
    setResult({
      ...data,
      poster: data.poster_path,
    });
    setGenres(Credit);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const openBrowser = async (url) => {
    return await WebBrowser.openBrowserAsync(url);
  };

  return (
    <Presenter
      result={result}
      loading={loading}
      {...genres}
      openBrowser={openBrowser}
    />
  );
};

export default Container;
