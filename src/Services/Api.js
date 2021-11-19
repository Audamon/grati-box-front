import axios from 'axios';
import UrlApi from './UrlApi';

function sendBodyToDoTheRegisterToTheBackEnd(body) {
  const route = 'signup';
  const promise = axios.post(UrlApi + route, body);
  promise.catch((err) => { console.error(err); });
  return promise;
}
function sendBodyToDoTheLoginToTheBackEnd() {

}
export { sendBodyToDoTheRegisterToTheBackEnd, sendBodyToDoTheLoginToTheBackEnd };
