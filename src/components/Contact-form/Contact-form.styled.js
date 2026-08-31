import styled from "styled-components";

export const FormWrapper = styled.form`
  box-sizing: border-box;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px 35px;

  width: 100%;
  padding: 32px;

  background: var(--color-panel-bg);
  border-radius: 18px;

  font-family: "Quicksand", sans-serif;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    padding: 22px;
  }

  @media (max-width: 420px) {
    gap: 16px;
    padding: 16px;
    border-radius: 12px;
  }
`;

export const FieldLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;

  color: var(--color-accent-strong);
  font-size: 24px;
  font-weight: 500;

  @media (max-width: 420px) {
    font-size: 18px;
  }
`;

export const FieldInput = styled.input`
  box-sizing: border-box;

  width: 100%;
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

export const SubmitButton = styled.button`
  grid-column: 1 / -1;

  width: 100%;
  height: 58px;

  border: none;
  border-radius: 8px;

  background: var(--color-accent-strong);
  color: #ffffff;

  font-family: "Quicksand", sans-serif;
  font-size: 22px;
  cursor: pointer;

  transition: 0.2s;

  @media (max-width: 420px) {
    height: 48px;
    font-size: 18px;
  }

  &:hover {
    background: var(--color-accent-dark);
  }

  &:active {
    transform: scale(0.99);
  }
`;
