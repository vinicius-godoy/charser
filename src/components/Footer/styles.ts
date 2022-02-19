import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 3em;
  padding: 1em 0;
  font-style: normal;
  align-self: flex-end;
`;

export const LinkContainer = styled.address`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  font-style: normal;
  gap: .5em;
  color: #000;
  margin-top: .3em;
`;
