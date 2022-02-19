import React from 'react';

import { Container, ItemColor, ItemText } from './styles';

interface LegendItemProps {
  color: string;
  text: string;
}

const LegendItem = ({ color, text }: LegendItemProps) => (
  <Container>
    <ItemColor color={color} />
    <ItemText>{text}</ItemText>
  </Container>
);

export default LegendItem;
