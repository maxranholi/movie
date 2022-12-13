import {
  Container,
  ContainerHero,
  ImgPoster,
  MovieInformation,
  Overview,
  Title,
} from "./DetailsStyled";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_key } from "../constants/Url";
import Header from "../header/Header";
import { Imagepath } from "../constants/Url";

const Details = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_key}&language=en-US`
      )
      .then((res) => {
        setMovie(res.data);
        console.log(res.data);
      });
  }, [id]);

  return (
    <>
      <Header />
      <ContainerHero>
        <ImgPoster src={`${Imagepath}${movie.poster_path}`}></ImgPoster>
      </ContainerHero>
    </>
  );
};

export default Details;
