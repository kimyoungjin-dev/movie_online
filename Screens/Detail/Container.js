import React, { useState, useEffect } from "react";
import { MovieApi, tvApi } from "../../Components/api";
import Presenter from "./Presenter";

const Container = ({
  route: {
    params: { id, isShow },
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
    setResult(data);
    setGenres(Credit);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return <Presenter result={result} loading={loading} {...genres} />;
};

export default Container;
