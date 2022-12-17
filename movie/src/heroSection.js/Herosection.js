import {
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
       
      </SelectionArea>
    </ContainerHero>
  );
};

export default HeroSection;
