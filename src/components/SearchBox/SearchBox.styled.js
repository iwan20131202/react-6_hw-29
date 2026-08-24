import styled from "styled-components";

export const SearchBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 15px;
  padding: 18px 20px;
  border-radius: 16px;
  background: #182033;
`;

export const SearchBoxLabel = styled.label`
  color: #aab2c3;
  font-size: 12px;
  font-weight: 700;
`;

export const SearchBoxInput = styled.input`
  width: 100%;
  padding: 11px 12px;
  border: 1px solid #303a50;
  border-radius: 10px;
  outline: none;
  color: #fff;
  background: #101622;

  &:focus { border-color: #6366f1; }
`;
