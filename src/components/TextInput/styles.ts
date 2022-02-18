import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 85%;
`;

export const Label = styled.label`
  font-size: 2rem;
  align-self: flex-start;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 20vh;
  padding: .4em .7em;
  border: 2px solid rgba(0, 0, 0, .3);
  border-radius: 10px;
  resize: none;
  font-size: 1.5rem;
`;
