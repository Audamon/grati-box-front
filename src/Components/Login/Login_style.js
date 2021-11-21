import styled from 'styled-components';

const LoginPage = styled.div`
  background-color: #6D7CE4;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  color: #ffffff;
  padding:  90px 0 0 0;
  h1{
      text-align: center;
      font-size: 28px;
      font-weight: 500;
  }
  a{
    color: #ffffff;
    font-size:18px;
    margin-top: 20px;
    text-decoration: none;
    text-align: center;
  }
`;
const Form = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 60vh;
`;
const Input = styled.input`
    width: 80vw;
    height: 60px;
    border: 1px solid #604848;
    border-radius: 10px;
    font-size: 28px;
    padding: 0 0 0 10px;
    margin:  0 0 10px 0;
    ::placeholder{
        font-size: 24px;
        font-weight: 500;
        color: #604848;
    }
`;
const Button = styled.button`
    width: 60vw;
    height: 50px;
    border: none;
    background-color: #8C97EA;
    border-radius: 10px;
    margin-top: 30vh;
    color: #ffffff;
    font-size: 36px;
`;
export {
  LoginPage, Form, Input, Button,
};
