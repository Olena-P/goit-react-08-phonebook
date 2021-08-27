import styled from "@emotion/styled";

export const Form = styled.form`
  flex-direction: column;
  border-radius: 15px;
  background-color: var(--secondary-color);
  padding: 25px;
`;

export const Input = styled.input`
  width: 200px;
  padding: 5px 10px;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 14px;
`;

export const Label = styled.label`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 400;
`;

export const Button = styled.button`
  width: max-content;
  margin-right: auto;
  margin-left: auto;
  cursor: pointer;
  padding: 5px 10px;
  border: none;
  outline: none;
  border-radius: 10px;
  box-shadow: 2px 2px 2px var(--secondary-color);
  transition: transform 0.25s cubic-bezier(0.77, 0, 0.175, 1);
  font-size: large;
  background-color: var(--main-bg-color);
  color: var(--secondary-color);

  &:hover {
    background-color: var(--main-bg-color);
    transform: scale(1.05);
    border: none;
    outline: none;
  }
`;

export const Error = styled.span`
  font-size: 11px;
  left: 400px;
  bottom: 0px;
  color: coral;
  margin: 10px;
`;

export const Name = styled.span`
  color: var(--title-color);
`;

export const Number = styled.span`
  color: var(--title-color);
`;
