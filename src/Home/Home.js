import { useNavigate } from 'react-router-dom';
import {
  Footer,
  GoesToLoginButton,
  GoesToSignUpButton,
  Header,
  HomePage,
  Img,
} from './Home_style';
import meditation from '../Assets/meditation_woman.jpg';

export default function Home() {
  const navigate = useNavigate();
  function GoesToSignUp() {
    navigate('/signup');
  }
  function GoesToLogin() {
    navigate('/login');
  }
  return (
    <HomePage>
      <Header>
        <h1>Bem vindo ao GratiBox</h1>
        <h2>
          Receba em casa um box com chás, produtos organicos, incensos e muito
          mais...
        </h2>
      </Header>
      <Img src={meditation} />
      <Footer>
        <GoesToSignUpButton onClick={GoesToSignUp}>
          Quero começar
        </GoesToSignUpButton>
        <GoesToLoginButton onClick={GoesToLogin}>
          Já sou grato
        </GoesToLoginButton>
      </Footer>
    </HomePage>
  );
}
