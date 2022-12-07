import { CardMovie, ContainerMain } from "./Mainstyled";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { API_key, Imagepath } from "../constants/Url";

const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_key}&language=en-US&page=1`
      )
      .then((res) => {
        setMovies(res.data.results);
        console.log(res.data.results);
      });
  }, []);
  return (
    <ContainerMain>
      {movies.map((movie) => {
        return (
          <CardMovie key={movie.id}>
            <img src={`${Imagepath}${movie.poster_path}`} />
            <h2>{movie.title}</h2>
            <h4>{movie.release_date}</h4>
          </CardMovie>
        );
      })}
    </ContainerMain>
  );
};

export default Main;
