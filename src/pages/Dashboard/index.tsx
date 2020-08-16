/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { FiCompass, FiArrowRight } from 'react-icons/fi';

import Header from '../../components/Header';

import {
  Container,
  AboutSection,
  PresentationContainer,
  EmphasisText,
  WorksContainer,
  ProjectContainer,
  GithubLink,
} from './styles';

const Dashboard: React.FC = () => {

  return (
    <>
      <Header />

      <Container>
        <PresentationContainer>
          <h2>Software <br/> Engineer</h2>
          <div>
            <h2 className="emphasized" > {"</>"} </h2>
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

          <p>
            Formed by Rocketseat, I'm a passionate software engineer with emphasis
            on Javascript and Typescript. Also, I have a great interest in Cyber Security.
          </p>

          <p>
            Now a days, I work as Software Engineer in <span className="emphasized">mudi saúde</span>, a startup with focus on health.
          </p>

          <footer>
            <EmphasisText>
              <FiCompass />
              Belém, Brazil
            </EmphasisText>
          </footer>
        </AboutSection>

        <WorksContainer>
          <h2>Works</h2>

          <GithubLink href="https://github.com/andrecampll" target="_blank" >
            <h3 className="emphasized">
              All Works
              
              {/* <span role="img">🚀</span> */}
            </h3>
            <FiArrowRight size={20} className="emphasized" />

          </GithubLink>

          <ProjectContainer>
            <div>
              <aside>
                <h4>CASE STUDY</h4>

                <p>
                  Insure Landing Page <span className="emphasized">Website</span>
                </p>

                <FiArrowRight size={20} color="#9e9e9e" />
              </aside>
              <img
                src="https://lpaulovt.github.io/img/cases/insure.png"
                alt="Project"
              />
            </div>
          </ProjectContainer>

          <ProjectContainer>
            <div>
              <aside>
                <h4>CASE STUDY</h4>

                <p>
                  Ecoleta <span className="emphasized">Web Application</span>
                </p>

                <FiArrowRight size={20} color="#9e9e9e" />
              </aside>
              <img
                className="Ecoleta"
                src="https://lpaulovt.github.io/img/cases/ecoleta.png"
                alt="Project"
              />
            </div>
          </ProjectContainer>
        </WorksContainer>
      </Container>
    </>
  );
}

export default Dashboard;
