import React from 'react';

import { Container, Label, TextArea } from './styles';

const TextInput = () => (
  <Container>
    <Label htmlFor='text-input'> 
      Your Text:
    </Label>

    <TextArea
      id='text-input'
      name='text-input'
    ></TextArea>
  </Container>
);

export default TextInput;
