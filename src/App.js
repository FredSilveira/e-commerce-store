import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';

import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import SignInSignUpPage from "./pages/sign-in-sign-up/signInSignUp";
import { auth } from "../src/firebase/firebase.utils";

class App extends React.Component {
  constructor () {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ current: user });

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render () {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={ HomePage }/>
          <Route path="/shop" component={ ShopPage }/>
          <Route path="/signin" component={ SignInSignUpPage }/>
        </Switch>
      </div>
    );
  }
}

export default App;
