/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import {
  FiCompass,
  FiArrowRight,
  FiArrowDown,
  FiLinkedin,
  FiGithub,
  FiInstagram,
  FiMail,
  FiTwitter,
} from 'react-icons/fi';

import Header from '../../components/Header';

import GoRestaurantWeb from '../../assets/GoRestaurantWeb.png';

import {
  Container,
  AboutSection,
  PresentationContainer,
  WorksContainer,
  ProjectContainer,
  GithubLink,
  ContactContainer,
  Footer,
  Projects,
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
          <section>
            <img
              src="https://avatars1.githubusercontent.com/u/53975579?s=460&u=cd6e9edc185253240aa8280c8d5baf445efd1a7f&v=4"
              alt="André"
            />
          </section>

          <section className="second-section" >
            <h3>About me</h3>
            <p>Hi! I'm André,
            <br />
              <span className="emphasized" >
                Software Engineer.
              </span>
            </p>

            <p>
              Formed by Rocketseat, I'm a passionate software engineer with emphasis
              on Javascript and Typescript. Also, I have a great interest in Cyber Security.
            </p>

            <p>
              Nowadays, I work as Software Engineer
              in <span className="emphasized">Mudi Saúde</span>, a brazilian
              startup with focus on health.
            </p>

            <p className="emphasized" >
              <FiCompass />
              Belém, Brazil
            </p>
          </section>
        </AboutSection>

        <WorksContainer>
          <h2>Works</h2>

          <GithubLink
            href="https://github.com/andrecampll"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="emphasized">
              All Works
              
              {/* <span role="img">🚀</span> */}
            </h3>
            <FiArrowRight size={20} className="emphasized" />

          </GithubLink>

          <Projects>
            <ProjectContainer>
              <div>
                <aside>
                  <h4>CASE STUDY</h4>

                  <p>
                    GoRestaurant <br/> <span className="emphasized">Web Application</span>
                  </p>

                  <FiArrowRight size={20} color="#9e9e9e" />
                </aside>
                <main>
                  <img
                    className="GoRestaurantWeb"
                    src={GoRestaurantWeb}
                    alt="Project"
                  />
                </main>
              </div>
            </ProjectContainer>

            <ProjectContainer>
              <div>
                <aside>
                  <h4>CASE STUDY</h4>

                  <p>
                    Ecoleta <br/> <span className="emphasized">Web Application</span>
                  </p>

                  <FiArrowRight size={20} color="#9e9e9e" />
                </aside>

                <main>
                  <img
                    className="Ecoleta"
                    src="https://lpaulovt.github.io/img/cases/ecoleta.png"
                    alt="Project"
                  />
                </main>
              </div>
            </ProjectContainer>
          </Projects>
        </WorksContainer>

        <ContactContainer>
          <section>
            <p>GOT A PROJECT?</p>
            <h3>Let's <span className="emphasized">talk.</span></h3>
            <div>
              Get in touch
              <FiArrowDown size={20} color="#9e9e9e" />
              <footer>
                <a href="https://www.linkedin.com/in/andrecampll/">
                  <FiLinkedin size={25} />
                </a>
                <a href="https://github.com/andrecampll">
                  <FiGithub size={25}  />
                </a>
                <a href="https://www.instagram.com/andrecampll/?hl=pt-br">
                  <FiInstagram size={25}  />
                </a>
                <a href="mailto:andrevictor50@gmail.com">
                  <FiMail size={25}  />
                </a>
                <a href="https://twitter.com/andrecampll">
                  <FiTwitter size={25}  />
                </a>
              </footer>
            </div>
          </section>
        </ContactContainer>

        <Footer>
          <div>
            <h5>André Victor - 2020</h5>
          </div>
        </Footer>
      </Container>
    </>
  );
}

export default Dashboard;
