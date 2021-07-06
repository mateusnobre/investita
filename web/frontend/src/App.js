import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from './pages/Login';
import SignUp  from './pages/SignUp';
import Home from './pages/Home';
import MarketStats from './pages/MarketStats';
import './assets/styles/reset.css';
import './assets/styles/style.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/login" exact>
          <Login></Login>
        </Route>
        <Route path="/sign-up" exact>
          <SignUp></SignUp>
        </Route>
        <Route path="/home" exact>
          <Home></Home>
        </Route>
        <Route path="/market-stats" exact>
          <MarketStats/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
