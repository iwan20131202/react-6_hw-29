import styled from "styled-components";

export const SearchWrapper = styled.div`
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

  @media (max-width: 420px) { font-size: 18px; }
`;

export const SearchField = styled.div`
  position: relative;
  flex: 1;
  min-width: 0;
`;

export const SearchInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 58px;
  padding: 12px 48px 12px 16px;
  background: var(--color-input-bg);
  border: 2px solid var(--color-border);
  border-radius: 12px;
  color: var(--color-text);
  font-family: "Quicksand", sans-serif;
  font-size: 18px;
  outline: none;
  transition: 0.2s;

  &:focus {
    border-color: var(--color-accent);
    box-shadow: 0 0 0 4px rgba(154, 124, 240, 0.12);
  }

  &::placeholder { color: var(--color-text-muted); }
  @media (max-width: 420px) { height: 50px; font-size: 16px; }
`;

export const ClearButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 36px;
  height: 36px;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: var(--color-text-muted);
  font-size: 20px;
  cursor: pointer;
  transition: 0.2s;

  &:hover { background: var(--color-accent); color: #fff; }
`;
