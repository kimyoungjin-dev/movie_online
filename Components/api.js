import axios from "axios";

const request = (path, params) => {
  return axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      ...params,
      language: "ko-KR",
      api_key: "84746f07785a093ed42c3cee12d5a642",
    },
  });
};

const getAnything = async (path, params = {}) => {
  try {
    const {
      data: { results },
      data,
    } = await request(path, params);
    return [results || data];
  } catch (error) {
    console.log(error);
    return error;
  }
};

//MovieApi
export const MovieApi = {
  MovieNowPlaying: () => getAnything("/movie/now_playing"),
  MoviePopular: () => getAnything("/movie/popular"),
  MovieTopRated: () => getAnything("/movie/top_rated"),
  MovieUpcoming: () => getAnything("/movie/upcoming"),
  MovieDisCovery: (with_genres) =>
    getAnything(`/discover/movie`, {
      with_genres,
    }),

  MovieDetail: (id) =>
    getAnything(`/movie/${id}`, {
      append_to_response: "videos",
    }),
  MovieSearch: (query) => getAnything("/search/movie", { query }),
  MovieCredit: (id) => getAnything(`/movie/${id}/credits`),
};

//tv api
export const tvApi = {
  showAiringToday: () => getAnything("/tv/airing_today"),
  showPopular: () => getAnything("/tv/popular"),
  showDisCovery: (with_genres) =>
    getAnything(`/discover/tv`, {
      with_genres,
    }),
  showDetail: (id) =>
    getAnything(`/tv/${id}`, {
      append_to_response: "videos",
    }),
  showSearch: (query) => getAnything("/search/tv", { query }),
  showCredit: (id) => getAnything(`/tv/${id}/credits`),
};

export const apiImagePath = (
  path,
  defaultPath = "https://unsplash.com/photos/uWjBqbCHY7g"
) => {
  if (path) {
    return `https://image.tmdb.org/t/p/original/${path}`;
  } else {
    return defaultPath;
  }
};
