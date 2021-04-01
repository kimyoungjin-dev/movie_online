import React, { useState, useEffect } from "react";
import Presenter from "./Presenter";
import { tvApi } from "../../Components/api";

const Container = () => {
  const [genres, setGenres] = useState({
    ActionAdventure: [],
    Animation: [],
    Comedy: [],
    Crime: [],
    Documentary: [],
    Drama: [],
    Mystery: [],
    News: [],
    Reality: [],
    SF_Fantasy: [],
    Talk: [],
    Western: [],
  });
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const [ActionAdventure] = await tvApi.showDisCovery(10759);
    const [Animation] = await tvApi.showDisCovery(16);
    const [Comedy] = await tvApi.showDisCovery(35);
    const [Crime] = await tvApi.showDisCovery(80);
    const [Documentary] = await tvApi.showDisCovery(99);
    const [Drama] = await tvApi.showDisCovery(18);
    const [Mystery] = await tvApi.showDisCovery(9648);
    const [News] = await tvApi.showDisCovery(10763);
    const [Reality] = await tvApi.showDisCovery(10764);
    const [SF_Fantasy] = await tvApi.showDisCovery(10765);
    const [Talk] = await tvApi.showDisCovery(10767);
    const [Western] = await tvApi.showDisCovery(37);

    setGenres({
      ActionAdventure,
      Animation,
      Comedy,
      Crime,
      Documentary,
      Drama,
      Mystery,
      News,
      Reality,
      SF_Fantasy,
      Talk,
      Western,
    });
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return <Presenter {...genres} loading={loading} />;
};

export default Container;
