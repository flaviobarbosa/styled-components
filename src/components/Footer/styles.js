import styled from 'styled-components';

export const StyledFooter = styled.footer`
  grid-area: footer;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1.5rem;
  width: 80%;
`;

export const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 2rem;
  width: 80%;
`;

export const Link = styled.div`
  color: #374151;
  font-weight: bold;
`;
