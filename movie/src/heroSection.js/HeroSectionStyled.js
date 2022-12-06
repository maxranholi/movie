import styled from "styled-components";

export const ContainerHero = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  background-color: #2d0c5e;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 0;
`;

export const Title = styled.h2`
  color: #ffffff;
  width: 48.8125rem;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;
  line-height: 3.5rem;
  text-align: center;
  letter-spacing: -0.005em;
  margin-top: 2rem;

  @media (max-width: 768px) {
    width: 90%;
    font-size: 1.7rem;
    line-height: 1.75rem;
    text-align: left;
  }
`;

export const SelectionArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
`;

export const SubTitle = styled.h6`
  color: #ffffff;
  width: 100%;
  height: 20px;
  left: 679px;
  top: 293px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    text-align: left;
  }
`;
export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 80%;
  gap: 0.75rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    justify-content: start;
    align-items: flex-start;
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: 0px 0px;
    height: 2.5rem;
    background: #ffffff;
    border-radius: 4px;
    border: none;

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 24px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #323232;
      margin: 1rem;
    }
  }
`;
