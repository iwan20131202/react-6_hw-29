import styled from "styled-components";

export const ListTitle = styled.h2`
  align-self: flex-start;

  margin: 0;

  color: var(--color-accent-strong);
  font-family: "Josefin Sans", sans-serif;
  font-size: 42px;
  font-weight: 700;

  @media (max-width: 420px) {
    font-size: 28px;
  }
`;

export const ContactsList = styled.ul`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 100%;
  max-height: 320px;

  @media (max-width: 420px) {
    max-height: 260px;
    gap: 8px;
  }

  padding: 0;
  margin: 0;

  overflow-x: hidden;
  overflow-y: auto;

  list-style: none;

  scrollbar-width: thin;
  scrollbar-color: var(--color-scrollbar-thumb) var(--color-scrollbar-track);

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: var(--color-scrollbar-track);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-scrollbar-thumb);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-scrollbar-thumb-hover);
  }
`;
