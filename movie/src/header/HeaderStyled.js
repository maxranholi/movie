import styled from "styled-components";

export const Containerheader = styled.div`
  height: 10vh;
  width: 100%;
  background-color: #5c16c5;
  display: flex;
  align-items: center;
  justify-content: start;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Title = styled.div`
  margin-left: 112px;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #ffffff;

  @media (max-width: 768px) {
    margin-left: 0;
  }

  input {
    border-radius: 4rem;
    border: none;
    width: 4rem;
    height: 1.3rem;
  }
`;
