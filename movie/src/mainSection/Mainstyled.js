import styled from "styled-components";

export const ContainerMain = styled.div`
  height: 100%;
  width: 100%;
  background-color: #e5e5e5;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 2rem 0rem;
`;

export const CardMovie = styled.div`

img {
    width: 176px;
    height: 264px;
    left: 112px;
    top: 534px;
    border: 1px solid #e7e7e7;
    border-radius: 4px;
  }

  h2 {
    width: 77px;
    height: 24px;
    left: 112px;
    top: 806px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #000000;
  }

  h4 {
    width: 84px;
    height: 24px;
    left: 320px;
    top: 830px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #646464;
  }
`
