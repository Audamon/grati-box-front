import {
  Button, Form, Input, SignUpPage,
} from './SignUp_style';

export default function SignUp() {
  return (
    <SignUpPage>
      <h1>Bem vindo ao <strong>GratiBox</strong></h1>
      <Form>
        <Input placeholder=' Nome'></Input>
        <Input placeholder=' Email'></Input>
        <Input placeholder=' Senha'></Input>
        <Input placeholder=' Confirmar senha'></Input>
        <Button>Cadastrar</Button>
      </Form>
    </SignUpPage>
  );
}
