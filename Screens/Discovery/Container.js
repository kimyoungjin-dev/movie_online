import React, { useState, useEffect } from "react";
import { MovieApi } from "../../Components/api";
import Presenter from "./Presenter";

const Container = () => {
  const [results, setResults] = useState({
    discovery: [],
  });

  const getData = async () => {
    const [discovery] = await MovieApi.MDiscovery();
    setResults({ discovery });
  };

  useEffect(() => {
    getData();
  }, []);

  return <Presenter {...results} />;
};

export default Container;
