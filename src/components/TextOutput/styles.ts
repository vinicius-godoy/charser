import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 85%;
  margin-top: 3em;
`;

export const Label = styled.label`
  font-size: 2rem;
  align-self: flex-start;
`;

export const OutputArea = styled.output`
  width: 100%;
  height: 20vh;
  padding: .4em .7em;
  border: 2px solid rgba(0, 0, 0, .3);
  border-radius: 10px;
  font-size: 1.5rem;
`;

export const CharCountBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: .7em;
`

export const CharInfo = styled.output`
  padding: 0 .2em;
  font-size: 1rem;
`
