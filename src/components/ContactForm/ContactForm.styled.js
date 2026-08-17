import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
  padding: 20px;
  background-color: #007bffff;
  border-radius: 8px;
  font-family: "Quicksand", sans-serif;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: black;
`;

export const Input = styled.input`
  padding: 8px;
  border: none;
  border-radius: 4px;
  font-family: "Quicksand", sans-serif;
  font-size: 16px;
  outline: none;

  &:focus {
    box-shadow: 0 4px 8px rgba(0, 140, 255, 1);
  }
`;

export const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #17bfd5ff;
  color: white;
  font-family: "Quicksand", sans-serif;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #3d9f9fff;
  }
`;
