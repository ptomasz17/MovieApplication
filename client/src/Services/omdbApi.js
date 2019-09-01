import axios from "axios";
import packageJson from "../../package.json";
export const apiKey = packageJson.apiKey;

const api = "http://www.omdbapi.com/";

export const searchMovieRequest = (searchValue, page) => {
  return axios.get(api, {
    params: {
      s: searchValue,
      apiKey: apiKey,
      page: page
    }
  });
};

export const getMovieRequest = id => {
  return axios.get(api, {
    params: {
      i: id,
      apiKey: apiKey
    }
  });
};
