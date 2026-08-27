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

  background: #ffffff;

  border: 1px solid #e2dcf1;
  border-left: 6px solid #6937d5;
  border-radius: 12px;

  color: #292044;

  font-family: "Quicksand", sans-serif;
  font-size: 18px;

  box-shadow: 0 4px 12px rgba(76, 45, 160, 0.08);

  transition: 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 7px 18px rgba(76, 45, 160, 0.13);
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
`;

export const DeleteButton = styled.button`
  flex-shrink: 0;

  padding: 10px 20px;

  border: 2px solid #6937d5;
  border-radius: 8px;

  background: #ffffff;
  color: #5427b8;

  font-family: "Quicksand", sans-serif;
  font-size: 16px;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: #6937d5;
    color: #ffffff;
  }
`;
