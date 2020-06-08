import React from 'react';
import './global.css';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import { Main, Container, Section } from './styles';

function App() {
  return (
    <>
      <Navbar />
      <Main>
        <Container>
          <Sidebar />
          <Section>
          </Section>
        </Container>
      </Main>
    </>
  );
}

export default App;
