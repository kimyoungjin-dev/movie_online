import React, { useState, useEffect } from "react";
import { MovieApi } from "../../Components/api";

const Container = (props) => {
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const [movieDetail] = await MovieApi.MovieDetail(id);
  };

  useEffect(() => {
    getData();
  }, []);
  return <></>;
};

export default Container;
