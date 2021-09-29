import React from 'react';
import { Container } from './styles';
import { NavBar, Main, Footer, Sidebar } from '../../components';

const App = () => {
  return (
    <Container>
      <NavBar />
      <Sidebar />
      <Main />
      <Footer />
    </Container>
  );
};

export default App;
