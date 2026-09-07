import styled from "styled-components";

export const ListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  width: 100%;
`;

export const ListTitle = styled.h2`
  margin: 0;
  color: var(--color-accent-strong);
  font-family: "Josefin Sans", sans-serif;
  font-size: 42px;
  font-weight: 700;
  @media (max-width: 420px) { font-size: 28px; }
`;

export const ContactCount = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  height: 36px;
  padding: 0 10px;
  border-radius: 20px;
  background: var(--color-accent);
  color: #fff;
  font: 700 16px "Quicksand", sans-serif;
`;

export const EmptyState = styled.div`
  width: 100%;
  padding: 28px 20px;
  border: 1px dashed var(--color-border);
  border-radius: 14px;
  background: rgba(42, 34, 56, 0.55);
  color: var(--color-text-muted);
  text-align: center;
  font: 17px "Quicksand", sans-serif;
`;

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-height: 320px;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  overflow-y: auto;
  list-style: none;
  scrollbar-width: thin;
  scrollbar-color: var(--color-scrollbar-thumb) var(--color-scrollbar-track);

  &::-webkit-scrollbar { width: 8px; }
  &::-webkit-scrollbar-track { background: var(--color-scrollbar-track); border-radius: 10px; }
  &::-webkit-scrollbar-thumb { background: var(--color-scrollbar-thumb); border-radius: 10px; }
  &::-webkit-scrollbar-thumb:hover { background: var(--color-scrollbar-thumb-hover); }
  @media (max-width: 420px) { max-height: 260px; gap: 8px; }
`;
