import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { sendBodyToDoTheRegisterToTheBackEnd } from '../../Services/Api';
import {
  Button, Form, Input, SignUpPage,
} from './SignUp_style';

export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  function checkDataToSendoToTheRegister(e) {
    e.preventDefault();
    if (!name || !password || !email || !confirmPassword) {
      alert('Preencha os campos para realizar o cadastro');
      return;
    }
    if (password !== confirmPassword) {
      alert('As senhas não são iguais');
      navigate('/signup');
    }
    const body = {
      name,
      email,
      password,
    };
    sendBodyToDoTheRegisterToTheBackEnd(body);
    navigate('/login');
  }
  return (
    <SignUpPage>
      <h1>Bem vindo ao <strong>GratiBox</strong></h1>
      <Form onSubmit={(e) => checkDataToSendoToTheRegister(e)}>
        <Input type='text' placeholder=' Nome' value={name} onChange={(e) => setName(e.target.value)}></Input>
        <Input type='email' placeholder=' Email' value={email} onChange={(e) => setEmail(e.target.value)}></Input>
        <Input type='password' placeholder=' Senha' value={password} onChange={(e) => setPassword(e.target.value)}></Input>
        <Input type='password'placeholder=' Confirmar senha' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></Input>
        <Button type='submit'>Cadastrar</Button>
      </Form>
      <Link to='/'>Voltar para a Home</Link>
    </SignUpPage>
  );
}
