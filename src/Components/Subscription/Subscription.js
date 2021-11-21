import {
  SubscriptionPage, SubscriptionCard, Img, SubscriptionButton,
} from './Subscription_style';
import week from '../../Assets/meditation_week.jpg';
import month from '../../Assets/meditation_month.jpg';

export default function Subscription() {
  return (
      <SubscriptionPage>
          <h1>Bom te ver por aqui, User.</h1>
          <h2>Você ainda não assinou um plano, que tal começar agora?</h2>
          <SubscriptionCard>
              <Img src={week} />
              <h3>Você recebe um box por semana.
                  Ideal para quem quer exercer a gratidão todos os dias.</h3>
              <SubscriptionButton>Assinar</SubscriptionButton>
          </SubscriptionCard>
          <SubscriptionCard>
              <Img src={month} />
              <h3>Você recebe um box por mês.
                   Ideal para quem está começando agora.</h3>
              <SubscriptionButton>Assinar</SubscriptionButton>
          </SubscriptionCard>
      </SubscriptionPage>
  );
}
