import styled from 'styled-components';

export const StyledNavBar = styled.header`
  grid-area: nav;
  /* background-color: #3b82f6; */

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;
`;

export const IconWrapper = styled.div`
  &:hover {
    transform: scale(1.1);
  }
`;
