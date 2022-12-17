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
  width: 92%;
  background-color: #e5e5e5;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
`;

export const CardMovie = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  align-items: start;
  color: transparent;
  margin-top: 5rem;

  p {
    display: flex;
    margin-top: -3rem;
  }

  &:hover {
    color: #000000;
  }

  img {
    width: 200px;
    height: 264px;
    border-radius: 4px;

    &:hover {
      -webkit-mask-image: linear-gradient(black, transparent);
      mask-image: linear-gradient(black, transparent);
      -webkit-transform: scale(1.2);
      -ms-transform: scale(1.2);
      transform: scale(1.2);
    }
  }

  h2 {
    width: 11rem;
    height: 24px;
    left: 112px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: start;
    color: #000000;
    margin-top: 1rem;
  }

  h4 {
    width: 11rem;
    height: 24px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #646464;
  }

  h6 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    display: flex;
    align-items: center;
    color: transparent;
    margin-top: -4rem;
    display: flex;
    justify-content: center;

    &:hover {
      color: #000000;
    }
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
export const Buttons = styled.div`
  display: flex;
  width: 82%;
  height: 100%;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 5.25rem;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const ButtonClicked = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  width: fit-content;
  height: 40px;
  background: #d18000;
  border-radius: 4px;
  border: none;
  gap: 0.5rem;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #d18000;
    border: 1px solid white;
    width: 1.2rem;
    border-radius: 50%;
    background-color: #ffffff;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  width: fit-content;
  height: 40px;
  background: #ffffff;
  border-radius: 4px;
  border: none;

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #323232;

    &:hover {
      color: #ffffff;
      font-weight: 600;
    }
  }
  &:hover {
    background: #d18000;
  }
`;
