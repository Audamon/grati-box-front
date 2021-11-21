import styled from 'styled-components';

const Header = styled.div`
  font-family: 'Roboto', sans-serif;
  color: #ffffff;
  background-color: #6d7ce4;
  height: 30vh;
  width: 100vw;
  top: 0;
  position: absolute;
  padding: 25px 30px 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h1{
      font-size: 28px;
      font-weight: 500;
      text-align: center;
  }
  h2{
      text-align: center;
      font-size: 18px;
      font-weight: 300;
  }
`;
const Footer = styled.div`
  background-color: #4d65a8;
  height: 20vh;
  width: 100vw;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 5% 0 5% 0;
`;
const HomePage = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;
const Img = styled.img`
  margin: 30vh 0 50px 0;
  width: 100vw;
  height: 55vh;
`;
const GoesToSignUpButton = styled.button`
  border: none;
  border-radius: 8px;
  height: 40px;
  width: 200px;
  color: #ffffff;
  background-color: #8C97EA;
  font-weight: 700;
  font-size: 18px;

`;
const GoesToLoginButton = styled.button`
  border: none;
  background-color: #4D65A8;
  color: #ffffff;
  font-weight: 700;
  font-size: 18px;
`;
export {
  Header, Footer, HomePage, Img,
  GoesToLoginButton, GoesToSignUpButton,
};
