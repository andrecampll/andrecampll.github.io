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
  padding: 30px 50px;

  h2 {
    color: #fff;
    font-size: 2em;
    font-family: 'Poppins';
  }
`;

export const AboutSection = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    
    .second-section {
      margin-right: 5%;
    }
  }

  @media (min-width: 828px) {
    margin: 30px 50px;
  }

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

  .full-sized {
    width: 100%;
  }

  section {
    svg {
      margin-right: 5px;
    }
  }
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
  transition: 0.3s;

  &:hover {
    transform: translateY(-10px);
  }

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

      /* svg {
        &:hover {
          transform: rotate(200px);
        }
      } */

      h4 {
        font-family: 'Poppins';
        color: #9e9e9e;
        font-weight: bold;
        font-size:0.7em;
      }

      p {
        font-family: 'Poppins';
        font-weight: bold;
        font-size: 1.3em;
        margin-bottom: 10px;
      }
    }

    .Ecoleta {
      left: -50px !important;
      height: 145px;
      @media (min-width: 343px) {
        height: 164px;
      }
    }

    .GoRestaurantWeb {
      left: 15px !important;
      height: 100px;
      @media (min-width: 343px) {
        height: 145px;
      }
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
    width: 70%;

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

    div {
      font-family: 'Poppins';
      color: #000;
      text-decoration: none;
      font-weight: bold;
      font-size: 15px;
      margin-top: 10%;
      width: 100%;

      display: flex;
      align-items: center;
      flex-direction: column;

      footer {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        width: 100%;

        a {
          color:#9e9e9e;
          
          svg {
              &:hover {
              color: #ec135a;
              transition: 0.3s;
            }
          }
        }
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
