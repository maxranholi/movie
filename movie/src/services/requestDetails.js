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

}