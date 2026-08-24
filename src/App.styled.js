import styled from "styled-components";

export const AppContainer = styled.div`
  width: min(1100px, calc(100% - 32px));
  margin: 0 auto;
  padding: 35px 0 50px;
`;

export const AppHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
  padding: 22px;
  border-radius: 18px;
  background: #182033;
`;

export const HeroIcon = styled.div`
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: #6366f1;
  color: white;
  font-size: 24px;
`;

export const AppTitle = styled.h1`
  margin: 0;
  color: #fff;
  font-size: 34px;
`;

export const AppSubtitle = styled.p`
  margin: 5px 0 0;
  color: #8d96aa;
  font-size: 14px;
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 330px 1fr;
  gap: 20px;

  @media (max-width: 800px) { grid-template-columns: 1fr; }
`;
