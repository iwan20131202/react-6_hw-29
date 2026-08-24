import styled from "styled-components";

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border: 1px solid #29334a;
  border-radius: 12px;
  background: #111827;
  transition: .15s ease;

  &:hover { border-color: #465271; }
`;

export const ContactAvatar = styled.div`
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  flex: 0 0 42px;
  border-radius: 12px;
  background: #30378a;
  color: #c7c9ff;
  font-size: 12px;
  font-weight: 700;
`;

export const ContactInfo = styled.div` min-width: 0; flex: 1; `;

export const ContactName = styled.div`
  overflow: hidden;
  color: #f3f4f8;
  font-size: 14px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ContactNumber = styled.div`
  margin-top: 3px;
  color: #818a9d;
  font-size: 12px;
`;

export const ContactButton = styled.button`
  width: 32px;
  height: 32px;
  border: 1px solid #713747;
  border-radius: 9px;
  background: transparent;
  color: #fb7185;
  cursor: pointer;

  &:hover { background: #713747; color: white; }
`;
