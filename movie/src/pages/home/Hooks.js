import axios from "axios";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/Url";

const getMovies = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios
          .get(
            `${BASE_URL}/movie/popular?api_key=${API_key}&language=pt-br-US&page=${page}`
          )
          .then((res) => {
            setMovies(res.data.results);
            console.log(res.data);
          });
      }, [page]);
    return (
        <></>
    )
}

export default getMovies