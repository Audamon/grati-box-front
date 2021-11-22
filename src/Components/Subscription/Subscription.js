import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import userContext from '../../Services/Context/UserContext.js';
import {
  SubscriptionPage, SubscriptionCard, Img, SubscriptionButton,
} from './Subscription_style';
import week from '../../Assets/meditation_week.jpg';
import month from '../../Assets/meditation_month.jpg';

export default function Subscription() {
  const { user } = useContext(userContext);
  const navigate = useNavigate();
  function goToSignPlan() {
    navigate('/sign_plan');
  }
  return (
      <SubscriptionPage>
          <h1>Bom te ver por aqui, {user}.</h1>
          <h2>Você ainda não assinou um plano, que tal começar agora?</h2>
          <SubscriptionCard>
              <Img src={week} />
              <h3>Você recebe um box por semana.
                  Ideal para quem quer exercer a gratidão todos os dias.</h3>
              <SubscriptionButton onClick={goToSignPlan}>Assinar</SubscriptionButton>
          </SubscriptionCard>
          <SubscriptionCard>
              <Img src={month} />
              <h3>Você recebe um box por mês.
                   Ideal para quem está começando agora.</h3>
              <SubscriptionButton onClick={goToSignPlan}>Assinar</SubscriptionButton>
          </SubscriptionCard>
      </SubscriptionPage>
  );
}
