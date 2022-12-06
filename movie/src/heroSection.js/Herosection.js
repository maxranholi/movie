import {
  Buttons,
  ContainerHero,
  SelectionArea,
  SubTitle,
  Title,
} from "./HeroSectionStyled";

const HeroSection = () => {
  return (
    <ContainerHero>
      <Title>
        Milhões de filmes, séries e pessoas para descobrir. Explore já.
      </Title>
      
      <SelectionArea>
      <SubTitle>FILTRE POR:</SubTitle>
        <Buttons>
      
          <button>
            <p>Ação</p>
          </button>
          <button>
            <p>Aventura</p>
          </button>
          <button>
            <p>Animação</p>
          </button>
          <button>
            <p>Comédia</p>
          </button>
          <button>
            <p>Crime</p>
          </button>
          <button>
            <p>Documentário</p>
          </button>
          <button>
            <p>Drama</p>
          </button>
          <button>
            <p>Família</p>
          </button>
          <button>
            <p>Fantasia</p>
          </button>
          <button>
            <p>História</p>
          </button>
          <button>
            <p>Terror</p>
          </button>
          <button>
            <p>Música</p>
          </button>
          <button>
            <p>Mistério</p>
          </button>
          <button>
            <p>Romance</p>
          </button>
          <button>
            <p>Ficção científica</p>
          </button>
          <button>
            <p>Cinema TV</p>
          </button>
          <button>
            <p>Thriller</p>
          </button>
          <button>
            <p>Guerra</p>
          </button>
          <button>
            <p>Faroeste</p>
          </button>
        </Buttons>
      </SelectionArea>
    </ContainerHero>
  );
};

export default HeroSection;
