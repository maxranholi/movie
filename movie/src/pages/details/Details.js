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
  opts,
  Characters,
  CharacterNames,
} from "./DetailsStyled";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { Imagepath } from "../../constants/Url";
import { CardMovie } from "../../homePage/HomePageStyled";
import Youtube from "react-youtube";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router";
import { detailsPage } from "../../routes/Coordinator";
import { getCastAndCrew, getRecommendations, getTrailer, selectedMovie } from "../../services/requestDetails";

const Details = () => {
  const [movie, setMovie] = useState([]);
  const [cast, setCast] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [genres, setGenres] = useState([]);
  const { id } = useParams();
  const [recommendations, setRecommendations] = useState([]);
  const [crew, setCrew] = useState([]);

  const navigate = useNavigate();

  const goToDetails = (id) => {
    detailsPage(navigate, id);
    window.scroll(0, 0);
  };

  useEffect(() => selectedMovie(setMovie, setGenres, id), [id]);

  useEffect(() => getCastAndCrew(setCast, setCrew, id), [id]);

  useEffect(() => getTrailer(setTrailer, id), [id])

  useEffect(() => getRecommendations(setRecommendations, id), [id])

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

  const recommendationsMap = recommendations.map((recomendation) => {
    const americanDate = recomendation.release_date;
    let brasilianDate = americanDate
      .split("-")
      .reverse()
      .join()
      .replace(/,/g, " ");
    return (
      <CardMovie key={recomendation.id}>
        <p>Ver Detalhes</p>
        <img
          src={`${Imagepath}${recomendation.poster_path}`}
          alt="p??ster do respectivo filme"
          onClick={() => goToDetails(recomendation.id)}
        />
        <h2>{recomendation.title}</h2>
        <h4>{brasilianDate}</h4>
      </CardMovie>
    );
  });

  const gendersMap = genres.map((genre) => {
    return <p key={genre.id}>{`${genre.name},`}</p>;
  });

  //========================================================= Vari??vel para pegar o id do trailer
  const fetchTrailer =
    trailer &&
    trailer.filter((trailer) => {
      return trailer["type"] === "Trailer" ? trailer.key : undefined;
    });

  let trailerKey = fetchTrailer;

  if (fetchTrailer.length > 0) {
    trailerKey = trailerKey[0].key;
  }
  //==============================================================================================

  //========================================================= Vari??veis pegar equipe do filme
  const fetchDirector =
    crew &&
    crew.filter((crew) => {
      return crew["known_for_department"] === "Directing" ? (
        <p>{crew.name}</p>
      ) : undefined;
    });

  let director = fetchDirector;

  if (fetchDirector.length > 0) {
    director = director[0].name;
  }

  const fetchWriting =
    crew &&
    crew.filter((crew) => {
      return crew["department"] === "Writing" ? crew : undefined;
    });

  let writing = fetchWriting;

  if (fetchWriting.length > 0) {
    writing = writing[0].name;
  }

  const charactersFilter =
    cast &&
    cast.filter((character, index) => {
      return index < 2 ? character : undefined;
    });

  let character1 = charactersFilter;
  let character2 = charactersFilter;

  if (charactersFilter.length > 0) {
    character1 = charactersFilter[0].name;
    character2 = charactersFilter[1].name;
  }

  //==============================================================================================

  //====================================================== Vari??veis para formatar a hora do filme
  const runtimeToFixed = (movie.runtime / 60).toFixed(2);
  const runTimeHour = runtimeToFixed.slice(0, 1);
  const runTimeMinutes = runtimeToFixed.slice(2, 4);
  //================================================================================================

  //====================================================== Vari??veis para formatar a data e avalia????o do filme
  let releaseYear = movie.release_date;
  let releaseDate = movie.release_date;
  let score = movie.vote_average;

  if (releaseYear && releaseDate && score) {
    releaseYear = releaseYear.slice(0, 4);
    releaseDate = releaseDate.replace(/-/g, "/");
    score = score.toFixed(1).replace(".", "");
  }
  //================================================================================================
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
            {releaseDate} {gendersMap} {runTimeHour}h {runTimeMinutes}m
          </Genres>
          <Progress>
            <ProgressBar>
              <CircularProgressbar
                style={{ width: 10, height: 10 }}
                value={score}
                text={`${score}%`}
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
            <p>Avalia????o dos Usu??rios</p>
          </Progress>
          <Overview>
            <h6>Sinopse</h6>
            {movie.overview}
          </Overview>
          <Characters>
            <CharacterNames>
              <h6>characters:</h6>
              <p>{character1}</p>
            </CharacterNames>
            <CharacterNames>
              <h6>characters:</h6>
              <p>{character2}</p>
            </CharacterNames>
            <CharacterNames>
              <h6>Diretor:</h6>
              <p>{director}</p>
            </CharacterNames>
            <CharacterNames>
              <h6>Roteirista:</h6>
              <p>{writing}</p>
            </CharacterNames>
          </Characters>
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
        <Title>Recomenda????es</Title>
        <RecomendationsList>{recommendationsMap}</RecomendationsList>
      </Recomendations>
    </Container>
  );
};

export default Details;
