import styled from 'styled-components';

export const StyledSideBar = styled.div`
  grid-area: sidebar;

  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 10rem;
  }
`;
