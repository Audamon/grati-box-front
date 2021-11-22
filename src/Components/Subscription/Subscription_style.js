import styled from 'styled-components';

const SubscriptionPage = styled.div`
  background-color: #6d7ce4;
  height: auto;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  color: #ffffff;
  padding: 90px 20px 50px 20px;
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
const SubscriptionCard = styled.div`
  width: 85vw;
  height: 60vh;
  background-color: #e5cdb3;
  margin-top: 30px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  h3{
      padding: 0 15px 0 15px;
      font-size: 16px;
      font-weight: 700;
      color: #4D65A8;
  }
`;
const Img = styled.img`
  width: 100%;
  border-radius: 25px;
`;
const SubscriptionButton = styled.button`
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
  SubscriptionPage, SubscriptionCard, Img, SubscriptionButton,
};
