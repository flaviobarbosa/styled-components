import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: #f9fafb;
  display: grid;
  grid-template:
    'nav' 3rem
    'main' 1fr
    'footer' 10rem;
`;
