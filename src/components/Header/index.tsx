import React from 'react';

import { Container, HeaderText } from './styles';

interface HeaderProps {
  text: string;
}

const Header = ({ text }: HeaderProps) => (
  <Container>
    <HeaderText>
      {text}
    </HeaderText>
  </Container>
);

export default Header;
