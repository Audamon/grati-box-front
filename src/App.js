import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home.js';
import SignUp from './Components/Signup/SignUp.js';
import Login from './Components/Login/Login.js';
import Subscription from './Components/Subscription/Subscription.js';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/signup" element={<SignUp />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/subscriptions" element={<Subscription />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
