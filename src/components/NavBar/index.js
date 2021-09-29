import React from 'react';

import { Award } from '@styled-icons/feather';

import { IconWrapper, StyledNavBar } from './styles';
import { Button } from '../Button';

export const NavBar = () => {
  return (
    <StyledNavBar>
      <IconWrapper>
        <Award size='2rem' />
      </IconWrapper>
      <Button>login</Button>
    </StyledNavBar>
  );
};
