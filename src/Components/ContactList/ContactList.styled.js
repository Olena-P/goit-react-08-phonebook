import styled from "@emotion/styled";

export const List = styled.ul`
  padding: 25px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 16px;
  color: var(--title-color);
  text-shadow: var(--secondary-color) 1px 0 10px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const Button = styled.button`
  padding: 0px;
  margin-left: 25px;
  transition: transform 0.25s cubic-bezier(0.77, 0, 0.175, 1);
  color: var(--secondary-color);
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  font-size: 24px;

  &:hover {
    color: var(--red-color);
    transform: scale(1.1);
  }
`;
