import React from 'react';

import { Twitter, Facebook, Instagram, Youtube } from '@styled-icons/feather';

import { StyledFooter, SocialMediaWrapper, LinksWrapper, Link } from './styles';

export const Footer = () => {
  return (
    <StyledFooter>
      <SocialMediaWrapper>
        <Twitter size='2rem' color='#374151' />
        <Facebook size='2rem' color='#374151' />
        <Instagram size='2rem' color='#374151' />
        <Youtube size='2rem' color='#374151' />
      </SocialMediaWrapper>
      <LinksWrapper>
        <Link>Privay</Link>
        <Link>Terms & Conditions</Link>
        <Link>Feedback</Link>
      </LinksWrapper>
    </StyledFooter>
  );
};
