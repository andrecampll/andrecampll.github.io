import React from 'react';
import Habilities from '../../components/Habilities';

import { Container, AboutSection } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Container>
        <h2>HELLO, WORLD.</h2>
        <h1>I'm André Victor</h1>
        <div>
          <h3>
            FRONT-END DEVELOPER | BACK-END DEVELOPER
          </h3>
        </div>
      </Container>

      <AboutSection>
        <h3>ABOUT</h3>

        <div>
          <aside>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fuga id iusto totam porro, facilis illum alias beatae perspiciatis, iste veritatis quidem cupiditate repellat! Incidunt numquam itaque exercitationem illum quam!</p>
          </aside>
        </div>

        <Habilities />
      </AboutSection>
    </>
  );
}

export default Dashboard;
