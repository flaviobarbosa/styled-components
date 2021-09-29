import React from 'react';
import { Container } from './styles';
import { NavBar, Main, Footer } from '../../components';

const App = () => {
  return (
    <Container>
      <NavBar />
      <Main />
      <Footer />
    </Container>
  );
};

export default App;
