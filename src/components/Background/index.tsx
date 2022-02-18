import React from 'react';

import { Wrapper } from './styles';

interface BackgroundProps {
  children: React.ReactNode;
}

const Background = ({ children }: BackgroundProps) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default Background;
