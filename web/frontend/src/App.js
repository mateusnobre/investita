import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn  from './components/SignIn';
import SignUp  from './components/SignUp';
import Home from './components/Home';
import MyAccount from './components/MyAccount';
import Wallet from './components/Wallet';
import Stats from './components/Stats';
import Asset from './components/Asset';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sign-in" exact>
          <SignIn></SignIn>
        </Route>
        <Route path="/sign-up" exact>
          <SignUp></SignUp>
        </Route>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Route path="/my-account" exact>
          <MyAccount/>
        </Route>
        <Route path="/wallet" exact>
          <Wallet/>
        </Route>
        <Route path="/stats" exact>
          <Stats></Stats>
        </Route>
        <Route path="/asset/:id" exact>
          <Asset></Asset>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
