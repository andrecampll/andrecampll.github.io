import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: #fff;
    font-family: "poppins-medium", sans-serif;
    font-size: 40px;

    text-align: center;
  }

  h2 {
    color: #7159c1;
    font-size: 0.8em;
    font-weight: 600;
    letter-spacing: 1px;
  }
  div {
    h3 {
      color: #7159c1;
      text-align: center;
      font-size: 0.7em;
      font-weight: 600;
      letter-spacing: 1px;
    }
  }
`;

export const AboutSection = styled.div`
  text-align: center;
  font-family: "poppins-medium", sans-serif;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #7159c1;
    letter-spacing: 2px;
  }

  div {
    display: flex;
    max-width: 900px;
    padding: 20px 10px;
    
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }

    aside {
      margin-left: 16px;
      width: 100%;
      p {
        text-align: center;
        font-size: 20px;
        line-height: 1.8;
        font-family: "Roboto", sans-serif;
        color: #fff;
      }
    }
  }
`;