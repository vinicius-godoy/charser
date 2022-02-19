import React from 'react';

import { 
  Container,
  Label,
  OutputArea,
  CharCountBox,
  CharInfo,
} from './styles';

const TextOutput = () => (
  <Container>
    <Label htmlFor='text-output'> 
      Your Characters:
    </Label>

    <OutputArea
      id='text-output'
      name='text-output'
    ></OutputArea>

    <CharCountBox>
      <CharInfo>Characters: 52</CharInfo>
      <CharInfo>Bytes: 57</CharInfo>
    </CharCountBox>
</Container>
);

export default TextOutput;
