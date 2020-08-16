import styled from 'styled-components';

export const Container = styled.div`
  .emphasized {
    color: #ec135a;
  }
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
`;

export const AboutSection = styled.div`
  padding: 30px;

  img {
    width: 260px;
  }

  h3 {
    margin-top: 23px;
    font-size: 26px;
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

export const EmphasisText = styled.h4`
  color: #ec135a;
  font-weight: bold;
`;

export const WorksContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #000;
  padding: 30px;

  h2 {
    color: #fff;
    margin: 23px 0;
    font-size: 26px;
    font-family: 'Poppins';
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #fff;
  padding: 30px 30px;
  width: 100%;
  overflow: hidden;

  & + & {
    margin-top: 30px;
  }

  div {
    display: flex;
    align-items: center;
    width: 100%;

    aside {
      width: 100%;
      margin-right: auto;

      h4 {
        font-family: 'Poppins';
        color: #9e9e9e;
        font-weight: bold;
        font-size:1em;
      }

      p {
        font-family: 'Poppins';
        font-weight: bold;
        font-size: 1.5em;
        margin-bottom: 10px;
      }
    }

    .Ecoleta {
      left: -50px !important;
      height: 145px;

    }

    img {
      position: relative;
      left: 60px;
      height: 100px;
    }
  }
`;

export const GithubLink = styled.a`
  display: flex;
  align-items: center;
  margin: 23px 0;
  text-decoration: none;
  color: auto;
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #fff;
  padding: 100px 30px;

  section {
    display: flex;
    align-items: center;
    flex-direction: column;

    p {
      font-family: 'Poppins';
      color: #9e9e9e;
      font-weight: bold;
      font-size: 14px;
    }

    h3 {
      font-family: 'Poppins';
      color: #000;
      font-weight: bold;
      font-size: 30px;
      letter-spacing: 1px;
    }

    a {
      font-family: 'Poppins';
      color: #000;
      text-decoration: none;
      font-weight: bold;
      font-size: 15px;
      margin-top: 10%;

      display: flex;
      align-items: center;

      svg {
        margin-left: 5px;
      }
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;

  padding: 35px;

  div {
    text-align: center;
    
    h5 {
      font-family: 'Poppins';
      color: #fff;
      font-weight: bold;
      font-size: 10px;
      letter-spacing: 1px;
    }
  }
`;
