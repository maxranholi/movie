import {
  Button,
  ButtonClicked,
  Buttons,
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
import Header from "../components/header/Header";
import { ContainerHero, Title } from "../heroSection.js/HeroSectionStyled";
import { getMovieBygenre, getMovies } from "../services/requests";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState([]);
  const [filter, setFilter] = useState("");

  const navigate = useNavigate();

  const goToDetails = (id) => {
    detailsPage(navigate, id);
    window.scrollTo(0, 0);
  };

  const scrollTop = (param) => {
    setPage(param);
    window.scrollTo(0, 0);
  };

  useEffect(() => getMovies(setMovies), []);

  useEffect(() => getMovieBygenre(setGenre), []);

  const genreMap = genre.map((genre) => {
    if (genre.id === filter) {
      return (
        <ButtonClicked key={genre.id}>
          <div onClick={() => setFilter(genre.id)}>{genre.name}</div>
          <p onClick={() => setFilter("")}>x</p>
        </ButtonClicked>
      );
    } else {
      return (
        <Button key={genre.id}>
          <p onClick={() => setFilter(genre.id)}>{genre.name}</p>
        </Button>
      );
    }
  });

  const moviesMap = movies.map((movie) => {
    const americanDate = movie.release_date;
    let brasilianDate = americanDate
      .split("-")
      .reverse()
      .join()
      .replace(/,/g, " ");
    if (filter === "") {
      return (
        <CardMovie className="showDetails" key={movie.id}>
          <img
            src={`${Imagepath}${movie.poster_path}`}
            alt="pôster do respectivo filme"
            onClick={() => goToDetails(movie.id)}
          />
          <p>{"Ver Detalhes"}</p>
          <h2>{movie.title}</h2>
          <h4>{brasilianDate}</h4>
        </CardMovie>
      );
    } else if (
      filter === movie.genre_ids[0] ||
      filter === movie.genre_ids[1] ||
      filter === movie.genre_ids[2] ||
      filter === movie.genre_ids[3]
    ) {
      return (
        <CardMovie className="showDetails" key={movie.id}>
          <p>detalhes</p>
          <img
            src={`${Imagepath}${movie.poster_path}`}
            alt="pôster do respectivo filme"
            onClick={() => goToDetails(movie.id)}
          />
          <h2>{movie.title}</h2>
          <h4>{brasilianDate}</h4>
        </CardMovie>
      );
    }
  });
  return (
    <>
      <Header />
      <ContainerHero>
        <Title>
          Milhões de filmes, séries e pessoas para descobrir. Explore já.
        </Title>
        <h6>FILTRE POR:</h6>
        <Buttons>{genreMap}</Buttons>
      </ContainerHero>
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
