import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import userContext from './Services/Context/UserContext.js';
import planContext from './Services/Context/PlanContext.js';
import Home from './Components/Home/Home.js';
import SignUp from './Components/Signup/SignUp.js';
import Login from './Components/Login/Login.js';
import Subscription from './Components/Subscription/Subscription.js';
import PlanSign from './Components/PlanSign/PlanSign.js';
import DeliveryInfo from './Components/PlanSign/DeliveryInfo.js';
import UserService from './Components/UserService/UserService.js';

export default function App() {
  const [user, setUser] = useState();
  const [signPlan, setSignPlan] = useState({});
  return (
    <planContext.Provider value={{ signPlan, setSignPlan }}>
    <userContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/subscriptions" element={<Subscription />}></Route>
          <Route exact path="/sign_plan" element={<PlanSign />}></Route>
          <Route exact path="/deliveryinfo" element={<DeliveryInfo />}></Route>
          <Route exact path="/userservice" element={<UserService />}></Route>
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
    </planContext.Provider>
  );
}
