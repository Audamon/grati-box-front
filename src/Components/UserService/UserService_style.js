import styled from 'styled-components';

const UserPage = styled.div`
  background-color: #6d7ce4;
  height: auto;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  color: #ffffff;
  padding: 60px 20px 50px 20px;
  h1 {
    text-align: center;
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  h2 {
    text-align: start;
    font-size: 16px;
    font-weight: 300;
  }
`;
const Img = styled.img`
width: 100%;
  border-radius: 25px;
`;
const UserCard = styled.div`
  width: 85vw;
  height: 65vh;
  background-color: #ffffff;
  margin-top: 30px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 25px;
  color: black;
  div{
      width:90%;
      display: flex;
      justify-content: flex-start;
      margin-top: 50px;
      color:#6d7ce4;
      font-size: 18px;
      font-weight: 700;
  }
`;
export { UserPage, Img, UserCard };
