import axios from 'axios';
import api from './UrlApi.js';

function storeUser(user) {
  const serialUser = JSON.stringify(user);
  localStorage.setItem('user', serialUser);
}

function getStoredUser() {
  const serialUser = localStorage.getItem('user');
  const user = JSON.parse(serialUser);
  return user;
}

function sendBodyToDoTheRegisterToTheBackEnd(body) {
  const route = 'signup';
  const promise = axios.post(api + route, body);
  promise.catch((err) => { console.error(err); });
  return promise;
}
function sendBodyToDoTheLoginToTheBackEnd(body) {
  const route = 'signin';
  console.log('sdfsgdgsdg');
  const promise = axios.post(api + route, body);
  promise.catch((err) => {
    if (err.response.status === 500) {
      alert('não foi possivel logar, tente novamente mais tarde');
    }
    if (err.response.status === 400) {
      alert('não foi possivel logar, tente novamente mais tarde');
    }
  });
  return promise;
}

function getDeliveryDays(plan) {
  const route = `getdeliverydays/${plan}`;
  const { token } = getStoredUser();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const promise = axios.get(api + route, config);
  return promise;
}
function send(signPlan) {
  const route = 'endorder';
  const { token } = getStoredUser();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const promise = axios.post(api + route, signPlan, config);
  promise.catch((err) => {
    if (err.response.statusCode === 401) {
      alert('Usuśrio não logado');
    }
  });
  return promise;
}
function getServiceInfo() {
  const route = 'userservice';
  const { token } = getStoredUser();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const promise = axios.get(api + route, config);
  promise.catch((err) => {
    console.log(err);
  });
  return promise;
}
export {
  sendBodyToDoTheRegisterToTheBackEnd, sendBodyToDoTheLoginToTheBackEnd, getDeliveryDays, storeUser, getStoredUser, send, getServiceInfo,
};
