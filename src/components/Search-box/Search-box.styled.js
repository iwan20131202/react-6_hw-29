import styled from "styled-components";

export const SearchWrapper = styled.div`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  gap: 25px;

  width: 100%;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
`;

export const SearchLabel = styled.label`
  flex-shrink: 0;

  color: #6542d6;
  font-family: "Quicksand", sans-serif;
  font-size: 22px;
`;

export const SearchInput = styled.input`
  box-sizing: border-box;

  flex: 1;
  min-width: 0;
  height: 58px;
  padding: 12px 16px;

  background: #ffffff;
  border: 2px solid #d2c5f2;
  border-radius: 8px;

  color: #292044;
  font-family: "Quicksand", sans-serif;
  font-size: 18px;

  outline: none;

  &:focus {
    border-color: #6937d5;
    box-shadow: 0 0 0 3px rgba(105, 55, 213, 0.12);
  }

  &::placeholder {
    color: #a39bb8;
  }
`;
