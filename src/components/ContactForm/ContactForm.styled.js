import styled from "styled-components";

export const ContactFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  border-radius: 16px;
  background: #182033;
`;

export const FormTitle = styled.h2`
  margin: 0 0 5px;
  color: #fff;
  font-size: 19px;
`;

export const ContactFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: #aab2c3;
  font-size: 12px;
`;

export const ContactFormInput = styled.input`
  width: 100%;
  padding: 11px 12px;
  border: 1px solid #303a50;
  border-radius: 10px;
  outline: none;
  color: #fff;
  background: #101622;

  &:focus { border-color: #6366f1; }
`;

export const ContactFormError = styled.p`
  margin: -2px 0 0;
  color: #fb7185;
  font-size: 11px;
`;

export const ContactFormButton = styled.button`
  padding: 11px 14px;
  border: 0;
  border-radius: 10px;
  background: #6366f1;
  color: white;
  font-weight: 700;
  cursor: pointer;

  &:hover { background: #5558dc; }
`;
