import styled from "styled-components";

export const ListCard = styled.section`
  min-height: 400px;
  padding: 20px;
  border-radius: 16px;
  background: #182033;
`;

export const ContactListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 15px;
`;

export const ContactListTitle = styled.h2`
  margin: 0;
  color: #fff;
  font-size: 20px;
`;

export const ContactListHeaderP = styled.p`
  margin: 4px 0 0;
  color: #818a9d;
  font-size: 12px;
`;

export const ContactListWrapper = styled.ul`
  display: grid;
  gap: 9px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const DeleteAllButton = styled.button`
  padding: 8px 11px;
  border: 1px solid #713747;
  border-radius: 9px;
  background: transparent;
  color: #fb7185;
  font-size: 11px;
  cursor: pointer;

  &:hover { background: #713747; color: white; }
`;

export const EmptyState = styled.div`
  display: flex;
  min-height: 280px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #818a9d;

  div { font-size: 42px; margin-bottom: 10px; }
  strong { color: #e5e7ef; font-size: 16px; }
  span { max-width: 320px; margin-top: 6px; font-size: 12px; }
`;
