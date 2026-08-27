import styled from "styled-components";

export const FormWrapper = styled.form`
  box-sizing: border-box;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px 35px;

  width: 100%;
  padding: 32px;

  background: #f5f1ff;
  border-radius: 18px;

  font-family: "Quicksand", sans-serif;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    padding: 22px;
  }
`;

export const FieldLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;

  color: #5427b8;
  font-size: 24px;
  font-weight: 500;
`;

export const FieldInput = styled.input`
  box-sizing: border-box;

  width: 100%;
  height: 58px;
  padding: 12px 16px;

  background: #ffffff;
  border: 2px solid #d2c5f2;
  border-radius: 8px;

  color: #292044;
  font-family: "Quicksand", sans-serif;
  font-size: 18px;

  outline: none;
  transition: 0.2s;

  &:focus {
    border-color: #6937d5;
    box-shadow: 0 0 0 3px rgba(105, 55, 213, 0.12);
  }

  &::placeholder {
    color: #a39bb8;
  }
`;

export const SubmitButton = styled.button`
  grid-column: 1 / -1;

  width: 100%;
  height: 58px;

  border: none;
  border-radius: 8px;

  background: #5427b8;
  color: #ffffff;

  font-family: "Quicksand", sans-serif;
  font-size: 22px;
  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: #43209b;
  }

  &:active {
    transform: scale(0.99);
  }
`;
