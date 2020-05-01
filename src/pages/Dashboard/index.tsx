import React from 'react';
import Habilities from '../../components/Habilities';
import Projects from '../../components/Projects';
import Parallax from '../../components/Parallax';

import { Container, AboutSection } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Container>
        <Parallax />
      </Container>

      <AboutSection>
        <h3>ABOUT</h3>

        <div>
          <aside>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fuga id iusto totam porro, facilis illum alias beatae perspiciatis, iste veritatis quidem cupiditate repellat! Incidunt numquam itaque exercitationem illum quam!</p>
          </aside>
        </div>

        <Habilities />

        <Projects />

      </AboutSection>
    </>
  );
}

export default Dashboard;
