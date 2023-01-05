import axios from "axios";
import { BASE_URL } from "../constants/Url";
import { API_key } from "../constants/Url";

export const getMovies = (setMovies, page) => {
  axios
    .get(
      `${BASE_URL}/movie/popular?api_key=${API_key}&language=pt-br-US&page=${page}`
    )
    .then((res) => {
      setMovies(res.data.results);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const getMovieBygenre = (setGenre) => {
  axios
    .get(`${BASE_URL}/genre/movie/list?api_key=${API_key}&language=en-US`)
    .then((res) => {
      setGenre(res.data.genres);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
