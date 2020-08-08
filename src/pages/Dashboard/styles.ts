import styled from 'styled-components';

export const Container = styled.div`
`;

export const PresentationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #000;
  width: 100%;
  height: 500px;
  padding: 30px;

  h2 {
    color: #fff;
    font-size: 2em;
    font-family: 'Poppins';
  }

  .emphasised {
    color: #ec135a;
  }
`;

export const AboutSection = styled.div`
  padding: 30px;

  img {
    width: 260px;
  }

  h3 {
    margin-top: 23px;
    font-size: 24px;
    font-family: 'Poppins';
  }

  p {
    font-family: 'Poppins';
    color: #9e9e9e;
    font-weight: bold;
    margin: 15px 0;
  }

  footer {
    svg {
      margin-right: 5px;
    }
  }
`;

export const EmphasisText = styled.div`
  color: #ec135a;
  font-weight: bold;
  display: flex;
  align-items: center;
`;
