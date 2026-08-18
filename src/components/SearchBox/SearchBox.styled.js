import styled from "styled-components";

export const SearchBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 340px;
  margin: 20px 0;
`;

export const SearchBoxLabel = styled.label`
  color: #1825d3ff;
  font-family: "Quicksand", sans-serif;
  font-size: 17px;
`;

export const SearchBoxInput = styled.input`
  padding: 10px;
  border: solid 1px #2534ffff;
  border-radius: 4px;
  font-family: "Quicksand", sans-serif;
  font-size: 16px;
  outline: none;

  &:focus {
    box-shadow: 0 4px 8px rgba(1, 97, 176, 0.2);
  }
`;
