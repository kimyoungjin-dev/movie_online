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
    } = await request(path, params);
    return [results];
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const MovieApi = {
  MovieNowPlaying: () => getAnything("/movie/now_playing"),
  MoviePopular: () => getAnything("/movie/popular"),
  MovieTopRated: () => getAnything("/movie/top_rated"),
  MovieUpcoming: () => getAnything("/movie/upcoming"),
  MovieCredit: () => getAnything(`/movie/${id}/credits`),
  MovieDetail: (id) =>
    getAnything(`/movie/${id}`, {
      append_to_response: "videos",
    }),
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
