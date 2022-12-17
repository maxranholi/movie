import {
  Cast,
  CastCard,
  CastList,
  Container,
  ContainerHero,
  ImgPoster,
  MovieInformation,
  Overview,
  Recomendations,
  RecomendationsList,
  Title,
  Video,
  TitleMovie,
  Genres,
  ProgressBar,
  Progress,
} from "./DetailsStyled";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_key } from "../constants/Url";
import Header from "../header/Header";
import { Imagepath } from "../constants/Url";
import { CardMovie } from "../mainSection/Mainstyled";
import Youtube from "react-youtube";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Details = () => {
  const [movie, setMovie] = useState([]);
  const [cast, setCast] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [genres, setGenres] = useState([]);
  const { id } = useParams();
  const [recomendations, setRecomendations] = useState([]);
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_key}&language=en-US`
      )
      .then((res) => {
        setMovie(res.data);
        setGenres(res.data.genres);
      });
  }, [id]);

  useEffect(() =>  {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_key}&language=en-US`
      )
      .then((res) => {
        setCast(res.data.cast);
        setCrew(res.data.crew)

      });
  }, [id]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_key}&language=en-US`
      )
      .then((res) => {
        setTrailer(res.data.results);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_key}&language=en-US&page=1`
      )
      .then((res) => {
        setRecomendations(res.data.results);
      });
  }, [id]);

  const castMap = cast.map((actor) => {
    return (
      <CastCard key={actor.id}>
        <img
          src={`${Imagepath}${actor.profile_path}`}
          alt="Foto do ator/atriz"
        />
        <h6>{actor.name}</h6>
        <p>{actor.character}</p>
      </CastCard>
    );
  });

  const recomendationsMap = recomendations.map((recomendation) => {
    const americanDate = recomendation.release_date;
    let brasilianDate = americanDate
      .split("-")
      .reverse()
      .join()
      .replace(/,/g, " ");
    return (
      <CardMovie key={recomendation.id}>
        <img
          src={`${Imagepath}${recomendation.poster_path}`}
          alt="pôster do respectivo filme"
          // onClick={() => goToDetails(movie.id)}
        />
        <h2>{recomendation.title}</h2>
        <h4>{brasilianDate}</h4>
      </CardMovie>
    );
  });

  const fetchTrailer =
    trailer &&
    trailer.filter((trailer) => {
      return trailer["type"] === "Trailer" ? trailer.key : undefined;
    });

  let trailerKey = fetchTrailer;

  if (fetchTrailer.length > 0) {
    trailerKey = trailerKey[0].key;
  }

  // const fetchCrew =
  //   crew &&
  //   crew.filter((crew) => {
  //     return crew["known_for_department"] === "Sound" ? (
  //       <p>{crew.name}</p>
  //     ) : undefined;
  //   });

  // console.log(fetchCrew);

  const opts = {
    height: "480vh",
    width: "100%",
  };

  const gendersMap = genres.map((genre) => {
    return <p key={genre.id}>{`${genre.name},`}</p>;
  });

  const runtimeToFixed = (movie.runtime / 60).toFixed(2);
  const runTimeHour = runtimeToFixed.slice(0, 1);
  const runTimeMinutes = runtimeToFixed.slice(2, 4);

  let releaseYear = movie.release_date;
  let releaseDate = movie.release_date;
  let vote = movie.vote_average;

  if (releaseYear && releaseDate && vote) {
    releaseYear = releaseYear.slice(0, 4);
    releaseDate = releaseDate.replace(/-/g, "/");
    vote = vote.toFixed(1).replace(".", "");
  }

  return (
    <Container>
      <Header />
      <ContainerHero>
        <ImgPoster src={`${Imagepath}${movie.poster_path}`}></ImgPoster>
        <MovieInformation>
          <TitleMovie>
            {movie.title} ({releaseYear})
          </TitleMovie>
          <Genres>
            {releaseDate} . {gendersMap} . {runTimeHour}h {runTimeMinutes}m
          </Genres>
          <Progress>
            <ProgressBar>
              <CircularProgressbar
                style={{ width: 10, height: 10 }}
                value={vote}
                text={`${vote}%`}
                strokeWidth={8}
                styles={buildStyles({
                  textColor: "#14FF00",
                  pathColor: "#14FF00",
                  trailColor: "transparent",
                  textSize: "20px",
                  backgroundColor: "#3e98c7",
                })}
              />
            </ProgressBar>
            <p>Avaliação dos Usuários</p>
          </Progress>
          <Overview>
            <h6>Sinopse</h6>
            {movie.overview}
          </Overview>
        </MovieInformation>
      </ContainerHero>
      <Cast>
        <Title>Elenco Original</Title>
        <CastList>{castMap}</CastList>
      </Cast>
      <Video>
        <Title>Trailer</Title>
        <Youtube opts={opts} videoId={trailerKey} key={trailer.id} />
      </Video>
      <Recomendations>
        <Title>Recomendações</Title>
        <RecomendationsList>{recomendationsMap}</RecomendationsList>
      </Recomendations>
    </Container>
  );
};

export default Details;
