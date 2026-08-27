import styled from "styled-components";

export const ListTitle = styled.h2`
  align-self: flex-start;

  margin: 0;

  color: #5427b8;
  font-family: "Josefin Sans", sans-serif;
  font-size: 42px;
  font-weight: 700;
`;

export const ContactsList = styled.ul`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 100%;
  max-height: 320px;

  padding: 0;
  margin: 0;

  overflow-x: hidden;
  overflow-y: auto;

  list-style: none;

  scrollbar-width: thin;
  scrollbar-color: #8a6bdd #f1edfa;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1edfa;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #8a6bdd;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #6542d6;
  }
`;
