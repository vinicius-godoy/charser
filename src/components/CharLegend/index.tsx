import React from 'react';

import { Container } from './styles';
import LegendItem from '../LegendItem';

const CharLegend = () => (
  <Container>
    <LegendItem text="ASCII Character" color="#DFDFDF" />
    <LegendItem text="Extended ASCII Character" color="#438AF5" />
    <LegendItem text="Unicode Character" color="#F59943" />
  </Container>
);

export default CharLegend;
