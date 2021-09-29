import React from 'react';

import { Twitter, Facebook, Instagram, Youtube } from '@styled-icons/feather';

import { StyledFooter, SocialMediaWrapper, LinksWrapper, Link } from './styles';

export const Footer = () => {
  return (
    <StyledFooter>
      <SocialMediaWrapper>
        <Link>
          <Twitter size='2rem' color='#374151' />
        </Link>
        <Link>
          <Facebook size='2rem' color='#374151' />
        </Link>
        <Link>
          <Instagram size='2rem' color='#374151' />
        </Link>
        <Link>
          <Youtube size='2rem' color='#374151' />
        </Link>
      </SocialMediaWrapper>
      <LinksWrapper>
        <Link>Privacy</Link>
        <Link>Terms & Conditions</Link>
        <Link>Feedback</Link>
      </LinksWrapper>
    </StyledFooter>
  );
};
