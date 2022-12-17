import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #e5e5e5;
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ContainerHero = styled.div`
  height: 74vh;
  width: 100%;
  background-color: #2d0c5e;
  display: flex;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;
export const ImgPoster = styled.img`
  width: 383px;
  height: 574px;
  left: 112px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 8px;
  margin-left: 7rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    display: flex;
    margin-left: 0rem;
    justify-content: center;
    align-items: center;
  }
`;
export const MovieInformation = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  margin-left: 2rem;
  margin-top: 2rem;
  gap: 1rem;
  @media (max-width: 768px) {
    width: 86%;
  }
`;
export const TitleMovie = styled.div`
  top: 128px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: -0.005em;
  color: #ffffff;

  h2 {
    top: 128px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    letter-spacing: -0.005em;
    color: #ffffff;
  }
`;

export const SubTitle = styled.div``;

export const Overview = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
  width: 80%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.005em;
  color: #dddddd;
  gap: 1rem;
  margin-top: 1rem;

  h6 {
    width: 73px;
    height: 24px;
    left: 528px;
    top: 308px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 0px;
    display: flex;
    align-items: center;
    color: #ffffff;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const Genres = styled.div`
  display: flex;
  height: 24px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  align-items: center;
  color: #ffffff;
  gap: 0.2rem;
`;

export const Cast = styled.div`
  display: block;
  flex-direction: column;
  margin-top: 9rem;
  width: 84%;
  overflow-y: hidden;

  @media (max-width: 768px) {
    margin-top: 0rem;
  }

  &::-webkit-scrollbar {
    background-color: #dddddd;
    height: 0.8rem;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #adadad;
    border-radius: 10px;
  }
`;

export const Title = styled.h5`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 0px;
  letter-spacing: -0.005em;
  margin-bottom: 32px;
`;

export const CastList = styled.div`
  display: flex;
  gap: 1rem;
  padding-bottom: 1rem;
`;

export const CastCard = styled.div`
  display: block;
  flex-direction: column;
  align-items: flex-start;
  width: 178px;
  padding: 8px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  img {
    width: 175px;
    height: 222px;
    border-radius: 4px;
  }

  h6 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    color: #131313;
    margin-top: 18px;
    line-height: 1rem;
    display: flex;
    flex-wrap: wrap;
  }

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #131313;
    line-height: 1rem;
    display: flex;
    flex-wrap: wrap;
    margin-top: -0.5rem;
  }
`;

export const Recomendations = styled.div`
  width: 84%;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  margin-bottom: 32px;
  gap: 32px;

  &::-webkit-scrollbar {
    background-color: #dddddd;
    height: 0.8rem;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #adadad;
    border-radius: 8px;
  }
`;

export const RecomendationsList = styled.div`
  display: flex;
  gap: 1rem;
  padding-bottom: 1rem;
  margin-top: -6.6rem;
`;

export const Video = styled.div`
  margin-top: 1rem;
  height: 100%;
  width: 64%;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-left: 6.8rem;
  margin-bottom: 1rem;

  h6 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 0px;
    letter-spacing: -0.005em;
  }

  @media (max-width: 768px) {
    height: 60%;
    width: 84%;
    margin-left: 2.8rem;
  }
`;

export const Progress = styled.div`
display: flex;
flex-direction: row;
gap: 1rem;

p{
  width: 102px;
height: 40px;
left: 601px;
top: 225px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
display: flex;
align-items: center;
color: #FFFFFF
}

`
export const ProgressBar = styled.div`
height: 20%;
width: 10%;
`
