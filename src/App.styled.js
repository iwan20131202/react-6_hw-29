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

  background-color: var(--color-card-bg);
  border-radius: 28px;
  box-shadow: 0 15px 40px var(--color-card-shadow);

  overflow: hidden;
  transition:
    background-color 0.2s,
    box-shadow 0.2s;

  @media (max-width: 700px) {
    width: calc(100% - 20px);
    padding: 35px 20px;
  }

  @media (max-width: 420px) {
    gap: 20px;
    margin: 20px auto;
    padding: 25px 14px;
    border-radius: 18px;
  }
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  width: 100%;

  @media (max-width: 420px) {
    gap: 10px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  text-align: center;

  color: var(--color-title);
  font-family: "Josefin Sans", sans-serif;
  font-size: 52px;
  font-weight: 700;
  letter-spacing: 0.5px;

  @media (max-width: 600px) {
    font-size: 40px;
  }

  @media (max-width: 420px) {
    font-size: 30px;
  }
`;

export const ThemeButton = styled.button`
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 46px;
  height: 46px;

  border: 2px solid var(--color-border);
  border-radius: 50%;

  background: var(--color-panel-bg);
  color: var(--color-accent-strong);

  font-size: 22px;
  line-height: 1;
  cursor: pointer;

  transition: 0.2s;

  &:hover {
    border-color: var(--color-accent);
  }

  @media (max-width: 420px) {
    width: 38px;
    height: 38px;
    font-size: 18px;
  }
`;
