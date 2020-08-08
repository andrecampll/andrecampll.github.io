import React from 'react';

import Header from '../../components/Header';

import { Container } from './styles';

const Dashboard: React.FC = () => {

  return (
    <>
      <Header />

      <Container>
        <h2>Software <br/> Engineer</h2>
      </Container>
    </>
  );
}

export default Dashboard;
