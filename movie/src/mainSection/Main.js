import {
  CardMovie,
  Containercard,
  ContainerMain,
  Selection,
} from "./Mainstyled";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Imagepath, API_key } from "../constants/Url";
import { useNavigate } from "react-router-dom";
import { detailsPage } from "../routes/Coordinator";
import Header from "../header/Header";
import HeroSection from "../heroSection.js/Herosection";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  const goToDetails = (id) => {
    detailsPage(navigate, id);
    window.scrollTo(0, 0);
  };

  const scrollTop = (param) => {
    setPage(param);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_key}&language=pt-br-US&page=${page}`
      )
      .then((res) => {
        setMovies(res.data.results);
        console.log(res.data);
      });
  }, [page]);

  const moviesMap = movies.map((movie) => {
    const americanDate = movie.release_date;
    let brasilianDate = americanDate
      .split("-")
      .reverse()
      .join()
      .replace(/,/g, " ");
    return (
      <CardMovie key={movie.id}>
        <img
          src={`${Imagepath}${movie.poster_path}`}
          alt="pôster do respectivo filme"
          onClick={() => goToDetails(movie.id)}
        />
        <h2>{movie.title}</h2>
        <h4>{brasilianDate}</h4>
      </CardMovie>
    );
  });
  return (
    <>
    <Header />
    <HeroSection />
    <ContainerMain>
      <Containercard>{moviesMap}</Containercard>
      <Selection>
        <p onClick={() => scrollTop(1)}>1</p>
        <p onClick={() => scrollTop(2)}>2</p>
        <p onClick={() => scrollTop(3)}>3</p>
        <p onClick={() => scrollTop(4)}>4</p>
        <p onClick={() => scrollTop(5)}>5</p>
        <p onClick={() => scrollTop(page + 1)}> &gt; </p>
        <p onClick={() => scrollTop(500)}>Última</p>
      </Selection>
    </ContainerMain>
    </>
  );
};

export default Main;
