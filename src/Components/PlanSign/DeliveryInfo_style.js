import styled from 'styled-components';

const PlanSignPage = styled.div`
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
const PlanSignCard = styled.div`
  width: 85vw;
  height: 65vh;
  background-color: #ffffff;
  margin-top: 30px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 25px;
  color: black;
  position: relative;
  button{
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      border-radius: 5px;
      height: 40px;
      width: 40%;
      background-color: #ffffff;
      color: #4D65A8;
      font-size: 18px;
      font-weight: 700;
  }
  label{
      font-size: 14px;
  }
`;
const Img = styled.img`
  width: 100%;
  border-radius: 25px;
`;
const EndButton = styled.button`
    color: #ffffff;
    background-color: #8C97EA;
    border: none;
    border-radius:10px;
    height: 40px;
    width: 50%;
    font-size: 24px;
    font-weight: 500;
`;
const Input = styled.input`
    border: none;
    height: 40px;
    width: 80%;
    overflow: hidden;
    font-size: 18px;
    font-weight: 700;
    color: #4D65A8 ;
    ::placeholder{
      font-size: 18px;
      font-weight: 700;
      color: #4D65A8 ;
      opacity: 1;
    }
`;
const CityMenu = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-evenly;
 align-items: center;
 input{
     width: 130px;
     margin-right: 40px;
 }
`;
export {
  PlanSignPage, PlanSignCard, Img, EndButton, Input, CityMenu,
};
