import React from 'react';

import { Container, LinkContainer, ContactLink } from './styles';

import { ReactComponent as GitHub } from '../../assets/images/GitHubLogo.svg';
import { ReactComponent as LinkedIn } from '../../assets/images/LinkedInLogo.svg';

const Footer = () => (
  <Container>
    By @vinicius-godoy
    <br/>

    <LinkContainer>
      <ContactLink href="https://github.com/vinicius-godoy" target="_blank">
        <GitHub />
        GitHub
      </ContactLink>

      <ContactLink href="https://www.linkedin.com/in/-vinicius-godoy/" target="_blank">
        <LinkedIn />
        LinkedIn
      </ContactLink>
    </LinkContainer>
  </Container>
);

export default Footer;
