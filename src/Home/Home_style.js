import styled from 'styled-components';

const Header = styled.div`
  font-family: 'Roboto', sans-serif;
  color: #ffffff;
  background-color: #6d7ce4;
  height: 150px;
  width: 100vw;
  top: 0;
  position: absolute;
  padding: 25px 30px 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1{
      font-size: 28px;
      font-weight: 700;
  }
  h2{
      text-align: center;
      font-size: 18px;
      font-weight: 300;
  }
`;
const Footer = styled.div`
  background-color: #4d65a8;
  height: 130px;
  width: 100vw;

  position: absolute;
  bottom: 0;
`;
const HomePage = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;
const Img = styled.img`
  margin: 150px 0 50px 0;
  width: 100vw;
`;
export {
  Header, Footer, HomePage, Img,
};
