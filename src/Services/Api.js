import axios from 'axios';
import api from './UrlApi.js';

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
export { sendBodyToDoTheRegisterToTheBackEnd, sendBodyToDoTheLoginToTheBackEnd };
