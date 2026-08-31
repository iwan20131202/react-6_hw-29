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

  color: var(--color-accent-soft);
  font-family: "Quicksand", sans-serif;
  font-size: 22px;

  @media (max-width: 420px) {
    font-size: 18px;
  }
`;

export const SearchInput = styled.input`
  box-sizing: border-box;

  flex: 1;
  min-width: 0;
  height: 58px;
  padding: 12px 16px;

  background: var(--color-input-bg);
  border: 2px solid var(--color-border);
  border-radius: 8px;

  color: var(--color-text);
  font-family: "Quicksand", sans-serif;
  font-size: 18px;

  outline: none;

  @media (max-width: 420px) {
    height: 48px;
    font-size: 16px;
  }

  &:focus {
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px rgba(105, 55, 213, 0.12);
  }

  &::placeholder {
    color: var(--color-text-muted);
  }
`;
