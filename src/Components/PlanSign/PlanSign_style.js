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
      justify-content: flex-start;
      align-items: center;
      border: none;
      border-radius: 5px;
      height: 40px;
      width: 80%;
      background-color: #E0D1ED 62%;
      color: #4D65A8;
      font-size: 18px;
      font-weight: 700;
  }
  label{
      font-size: 14px;
  }
`;
const CheckMenu = styled.div`
    background-color:  #E0D1ED 62%;
    height:50px;
    width: 80%;
    font-size: 18px;
    font-weight: 700;
    color: #4D65A8;
    flex-direction: column;
    div{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
`;
const Img = styled.img`
  width: 100%;
  border-radius: 25px;
`;
const NextButton = styled.button`
    color: #ffffff;
    background-color: #8C97EA;
    border: none;
    border-radius:10px;
    height: 40px;
    width: 50%;
    font-size: 24px;
    font-weight: 500;
`;
export {
  PlanSignPage, PlanSignCard, Img, NextButton, CheckMenu,
};
