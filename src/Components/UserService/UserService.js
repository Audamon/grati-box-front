import { useContext, useEffect, useState } from 'react';
import userContext from '../../Services/Context/UserContext.js';
import { UserPage, Img, UserCard } from './UserService_style';
import sign from '../../Assets/meditation_sign.jpg';
import { getServiceInfo } from '../../Services/Api.js';

export default function UserService() {
  const { user } = useContext(userContext);
  const [info, setInfo] = useState({});
  useEffect(() => {
    const promise = getServiceInfo();
    promise.then((res) => {
      console.log(res.data);
      setInfo(res.data);
    });
  }, []);
  return (
    <UserPage>
      <h1>Bom te ver por aqui, {user}.</h1>
      <h2>“Agradecer é arte de atrair coisas boas”</h2>
      <UserCard>
        <Img src={sign} />
        <div>
          Plano: {info.service}
          <br />
          Data da assinatura:{info.signdate} <br />
          Próximas entregas: <br />
        </div>
        <div>{info.product}</div>
      </UserCard>
    </UserPage>
  );
}
