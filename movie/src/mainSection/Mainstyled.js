import styled from "styled-components";

export const ContainerMain = styled.div`
  height: 100%;
  width: 100%;
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Containercard = styled.div`
  height: 100%;
  width: 100%;
  background-color: #e5e5e5;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
    padding: 0;
    padding-left: 0.5rem;
  }
`;

export const CardMovie = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0;
  height: 10%;
  padding-top: 2rem;
  gap: 0.5rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
    height: 34vh;
    gap: 0;
  }

  img {
    width: 13rem;
    height: 19.5rem;
    left: 112px;
    border: 1px solid #e7e7e7;
    border-radius: 4px;

    @media (max-width: 768px) {
      width: 156px;
      height: 232px;
      border: 1px solid #e7e7e7;
      border-radius: 4px;
    }
  }

  h2 {
    width: 11rem;
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
    justify-content: start;
    color: #000000;
  }

  h4 {
    width: 11rem;
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
    margin-top: -0.5rem;
  }
`;

export const Selection = styled.div`
  display: flex;
  width: 100%;
  height: 24px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5c16c5;
  gap: 2rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  cursor: pointer;
`;
