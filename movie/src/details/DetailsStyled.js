import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
`;
export const ContainerHero = styled.div`
  height: 74vh;
  width: 100%;
  background-color: #2d0c5e;
  display: flex;
`;
export const ImgPoster = styled.img`
  width: 383px;
  height: 574px;
  left: 112px;
  top: 128px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 8px;
  margin-left: 7rem;
  margin-top: 4.5rem;
`;
export const MovieInformation = styled.div`
display: flex;
height: 100%;
width: 100%;
border: 1px black solid;
`
export const Title = styled.div`
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
`
export const Overview = styled.div`
 h6 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #ffffff;
  }
  p {
    width: 80%;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.005em;
    color: #dddddd;
  };
  border: 1px black solid
`
