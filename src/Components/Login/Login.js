import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import userContext from '../../Services/Context/UserContext.js';
import {
  LoginPage, Form, Input, Button,
} from './Login_style.js';
import { sendBodyToDoTheLoginToTheBackEnd, storeUser } from '../../Services/Api.js';

export default function Login() {
  const { setUser } = useContext(userContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  function checkDataToSendToTheLogin(e) {
    e.preventDefault();
    if (!email || !password) {
      alert('ok');
      return;
    }
    const body = {
      email,
      password,
    };
    const promise = sendBodyToDoTheLoginToTheBackEnd(body);
    promise.then((res) => {
      console.log(res.data.name);
      setUser(res.data.name);
      console.log(res.data.token);
      storeUser(res.data);
      if (!res.data.services) {
        navigate('/subscriptions');
      } else {
        navigate('/userservice');
      }
    });
  }
  return (
      <LoginPage>
        <h1>Bem vindo ao <strong>GratiBox</strong></h1>
        <Form onSubmit={(e) => checkDataToSendToTheLogin(e)}>
         <Input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
         <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
         <Button type="submit">Login</Button>
        </Form>
        <Link to='/signup'>Ainda não sou grato</Link>
      </LoginPage>
  );
}
