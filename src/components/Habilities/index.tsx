import React from 'react';

import { Container } from './styles';

const Habilities: React.FC = () => {
  return (
    <Container>
      <h3>HABILITIES</h3>
      <ul>
        <strong >React</strong>
        <li>
          <div>
            <div id="React"></div>
          </div>
        </li>

        <strong>React Native</strong>
        <li>
          <div>
            <div id="ReactNative" ></div>
          </div>
        </li>

        <strong>NodeJS</strong>
         <li>
           <div>
              <div id="NodeJS" ></div>
           </div>
         </li>

        <strong>HTML</strong>
        <li>
          <div>
            <div id="HTML" ></div>
          </div>
        </li>

        <strong>CSS</strong>
        <li>
          <div>
            <div id="CSS" ></div>
          </div>
        </li>
      </ul>
    </Container>
  );
}

export default Habilities;
