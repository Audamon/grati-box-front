import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userContext from '../../Services/Context/UserContext.js';
import planContext from '../../Services/Context/PlanContext.js';
import DropdownDate from './DropdownMenu/DropdownDate.js';
import DropdownMonth from './DropdownMenu/DropdownMonth.js';
import {
  PlanSignPage, PlanSignCard, Img, NextButton, CheckMenu,
} from './PlanSign_style.js';
import sign from '../../Assets/meditation_sign.jpg';

export default function PlanSign() {
  const navigate = useNavigate();
  const { user } = useContext(userContext);
  const { setSignPlan } = useContext(planContext);
  const [openPlan, setOpenPlan] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const [plan, setPlan] = useState('Plano');
  const [date, setDate] = useState('Entrega');
  const [product, setProduct] = useState('Chás');
  const handleChanges = (e) => {
    setProduct(e.target.value);
  };
  function nextPage() {
    const planInfo = {
      product,
      date,
      plan,
    };
    console.log(planInfo);
    setSignPlan(planInfo);
    navigate('/deliveryinfo');
  }
  return (
      <PlanSignPage>
          <h1>Bom te ver por aqui, {user}.</h1>
          <h2>“Agradecer é arte de atrair coisas boas”</h2>
          <PlanSignCard>
              <Img src={sign} />
              <button onClick={ () => setOpenPlan(!openPlan)}>{plan}</button>
              {openPlan && <DropdownMonth
                            setPlan={setPlan}
                            setOpenPlan={setOpenPlan}
                            openPlan={openPlan}/> }
              <button onClick={() => setOpenDate(!openDate)}>{date}</button>
              {openDate && <DropdownDate
                            setDate={setDate}
                            setOpenDate={setOpenDate}
                            openDate={openDate}
                            plan={plan}/> }
              <CheckMenu>
                  Quero receber
                  <div>
                  <label>
                  <input type="radio" value='Chás' checked={product === 'Chás'} onChange={handleChanges}></input>
                  Chás
                  </label>
                  <label>
                  <input type="radio" value='Incênsos'checked={product === 'Incênsos'}onChange={handleChanges}></input>
                  Incênsos
                  </label>
                  <label>
                  <input type="radio" value='Produtos Orgânicos'checked={product === 'Produtos Orgânicos'}onChange={handleChanges}></input>
                  Produtos Orgânicos
                  </label>
                  </div>
              </CheckMenu>
          </PlanSignCard>
          <NextButton onClick={nextPage}>Próximo</NextButton>
      </PlanSignPage>
  );
}
