import React from 'react';
import { FiCompass } from 'react-icons/fi';

import Header from '../../components/Header';

import {
  Container,
  AboutSection,
  PresentationContainer,
  EmphasisText,
} from './styles';

const Dashboard: React.FC = () => {

  return (
    <>
      <Header />

      <Container>
        <PresentationContainer>
          <h2>Software <br/> Engineer</h2>
          <div>
            <h2 className="emphasised" > {"</>"} </h2>
          </div>
        </PresentationContainer>

        <AboutSection>
          <img src="https://www.petz.com.br/blog/wp-content/uploads/2020/04/meu-primeiro-gato.jpg" alt="André"/>
          
          <h3>About me</h3>
          <p>Hi! I'm André,
          <br />
            <EmphasisText>
              Software Engineer.
            </EmphasisText>
          </p>

          <p>I'm a passionate fullstack web engineer with emphasis
            on Javascript and Typescript, currently graduating in the
            Computer Engineering course at UFPA and working at Mudi Saúde.
          </p>

          <footer>
            <EmphasisText>
              <FiCompass />
              Belém, Brazil
            </EmphasisText>
          </footer>
        </AboutSection>
      </Container>
    </>
  );
}

export default Dashboard;
