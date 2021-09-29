import React from 'react';

import { StyledButton } from './styles';

export const Button = ({ children, type }) => {
  return <StyledButton type={type}>{children}</StyledButton>;
};
