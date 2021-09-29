import styled from 'styled-components';

export const StyledFooter = styled.footer`
  grid-area: footer;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    padding: 1rem;
    flex-direction: row-reverse;
    justify-content: center;
    height: 10rem;
  }
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1.5rem;
  width: 80%;
  min-width: 350px;

  @media (min-width: 768px) {
    max-width: 400px;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 2rem;
  width: 80%;
  min-width: 350px;

  @media (min-width: 768px) {
    max-width: 400px;
    flex-direction: column;

    gap: 0.5rem;
  }
`;

export const Link = styled.div`
  color: #374151;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: #3b82f6;

    transform: translateY(-0.1rem);
  }
`;
