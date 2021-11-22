import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userContext from '../../Services/Context/UserContext.js';
import planContext from '../../Services/Context/PlanContext.js';
import {
  PlanSignPage,
  PlanSignCard,
  Img,
  EndButton,
  Input,
  CityMenu,
} from './DeliveryInfo_style.js';
import DropdownUF from './DropdownMenu/DropdownUF.js';
import sign from '../../Assets/meditation_sign.jpg';
import { send } from '../../Services/Api.js';

export default function DeliveryInfo() {
  const { user } = useContext(userContext);
  const { setSignPlan, signPlan } = useContext(planContext);
  const [completeName, setCompleteName] = useState('');
  const [address, setAddress] = useState('');
  const [cep, setCep] = useState('');
  const [city, setCity] = useState('');
  const [open, setOpen] = useState(false);
  const [uf, setUf] = useState('Estado');
  const navigate = useNavigate();
  function endOrder() {
    const completeAdress = `${address}, ${cep}, ${city}/${uf}`;
    const t = {
      name: completeName,
      adress: completeAdress,
    };
    setSignPlan({ ...t, ...signPlan });
    send(signPlan);
    navigate('/userservice');
  }
  return (
    <PlanSignPage>
      <h1>Bom te ver por aqui, {user}.</h1>
      <h2>“Agradecer é arte de atrair coisas boas”</h2>
      <PlanSignCard>
        <Img src={sign} />
        <Input
          type="text"
          placeholder=" Nome completo"
          value={completeName}
          onChange={(e) => setCompleteName(e.target.value)}
        ></Input>
        <Input
          type="text"
          placeholder=" Endereço de entrega"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></Input>
        <Input
          type="text"
          placeholder=" CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        ></Input>
        <CityMenu>
          <Input
            type="text"
            placeholder=" Cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></Input>
          <button onClick={() => setOpen(!open)}>{uf}</button>
          {open && <DropdownUF setUf={setUf} open={open} setOpen={setOpen} />}
        </CityMenu>
      </PlanSignCard>
      <EndButton onClick={endOrder}>Finalizar</EndButton>
    </PlanSignPage>
  );
}
