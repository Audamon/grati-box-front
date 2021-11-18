import { Link, useNavigate } from 'react-router-dom';
import {
  Button, Form, Input, SignUpPage,
} from './SignUp_style';

export default function SignUp() {
  const navigate = useNavigate();
  function sendDataToDoTheRegister() {
    navigate('/');
  }
  return (
    <SignUpPage>
      <h1>Bem vindo ao <strong>GratiBox</strong></h1>
      <Form onSubmit={sendDataToDoTheRegister}>
        <Input type='text' placeholder=' Nome'></Input>
        <Input type='email' placeholder=' Email'></Input>
        <Input type='password' placeholder=' Senha'></Input>
        <Input type='password'placeholder=' Confirmar senha'></Input>
        <Button type='submit'>Cadastrar</Button>
      </Form>
      <Link to='/'>Voltar para a Home</Link>
    </SignUpPage>
  );
}
