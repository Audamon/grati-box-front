import {
  Footer, Header, HomePage, Img,
} from './Home_style';
import meditation from '../Assets/meditation_woman.jpg';

export default function Home() {
  return (
    <HomePage>
      <Header>
          <h1>Bem vindo ao GratiBox</h1>
          <h2>Receba em casa um box com chás, produtos organicos, incensos e muito mais...</h2>
      </Header>
      <Img src={meditation}/>
      <Footer></Footer>
    </HomePage>
  );
}
