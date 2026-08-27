import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;

  width: min(100% - 40px, 1000px);
  margin: 40px auto;
  padding: 55px 65px;

  background-color: #ffffff;
  border-radius: 28px;
  box-shadow: 0 15px 40px rgba(76, 45, 160, 0.12);

  overflow: hidden;

  @media (max-width: 700px) {
    width: calc(100% - 20px);
    padding: 35px 20px;
  }
`;

export const Title = styled.h1`
  margin: 0 0 25px;

  color: #32158f;
  font-family: "Josefin Sans", sans-serif;
  font-size: 52px;
  font-weight: 700;
  letter-spacing: 0.5px;

  @media (max-width: 600px) {
    font-size: 40px;
  }
`;
