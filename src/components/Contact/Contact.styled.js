import styled from "styled-components";

export const ContactCard = styled.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  width: 100%;
  min-width: 0;

  padding: 18px 20px;

  background: var(--color-contact-bg);

  border: 1px solid var(--color-contact-border);
  border-left: 6px solid var(--color-accent);
  border-radius: 12px;

  color: var(--color-text);

  font-family: "Quicksand", sans-serif;
  font-size: 18px;

  box-shadow: 0 4px 12px var(--color-contact-shadow);

  transition:
    transform 0.2s,
    box-shadow 0.2s,
    background-color 0.2s,
    border-color 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 7px 18px var(--color-contact-shadow-hover);
  }

  span {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (max-width: 550px) {
    align-items: flex-start;
    flex-direction: column;

    span {
      white-space: normal;
    }
  }

  @media (max-width: 420px) {
    padding: 14px 16px;
    font-size: 16px;
  }
`;

export const DeleteButton = styled.button`
  flex-shrink: 0;

  padding: 10px 20px;

  border: 2px solid var(--color-accent);
  border-radius: 8px;

  background: var(--color-input-bg);
  color: var(--color-accent-strong);

  font-family: "Quicksand", sans-serif;
  font-size: 16px;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: var(--color-accent);
    color: #ffffff;
  }

  @media (max-width: 550px) {
    align-self: stretch;
  }
`;
