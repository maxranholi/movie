import axios from "axios";
import { BASE_URL } from "../constants/Url";
import { API_key } from "../constants/Url";

export const selectedMovie = (setMovie, setGenres, id) => {
  axios
    .get(`${BASE_URL}/movie/${id}?api_key=${API_key}&language=en-US`)
    .then((res) => {
      setMovie(res.data);
      setGenres(res.data.genres);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const getCastAndCrew = (setCast, setCrew, id) => {
  axios
    .get(`${BASE_URL}/movie/${id}/credits?api_key=${API_key}&language=en-US`)
    .then((res) => {
      setCast(res.data.cast);
      setCrew(res.data.crew);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const getTrailer = (setTrailer, id) => {
  axios
    .get(`${BASE_URL}/movie/${id}/videos?api_key=${API_key}&language=en-US`)
    .then((res) => {
      setTrailer(res.data.results);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const getRecommendations = (setRecommendations, id) => {
  axios
    .get(
      `${BASE_URL}/movie/${id}/recommendations?api_key=${API_key}&language=en-US&page=1`
    )
    .then((res) => {
      setRecommendations(res.data.results);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
