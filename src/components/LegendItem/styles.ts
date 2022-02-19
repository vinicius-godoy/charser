import styled from "styled-components";

export const Container = styled.figure`
  display: flex;
  align-items: center;
  gap: .6em;
  margin-top: 1em;
`;

export const ItemColor = styled.div`
  background-color: ${(props) => (props.color)};
  width: 40px;
  height: 55px;
  border-radius: 4px;
`;

export const ItemText = styled.figcaption`
  font-size: .9rem;
`;
