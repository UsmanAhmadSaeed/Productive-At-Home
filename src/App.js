import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import NewTask from "./components/NewTask"
import ToDoList from "./components/ToDoList"
import config from "./config"
import './App.css';

import LandingPage from './components/Landing';
import Register from './components/Register';
import SignInPage from './components/Signin';
// import PasswordForgetPage from './components/PasswordForget';
// import HomePage from './components/Home';
// import AccountPage from './components/Account';
// import AdminPage from './components/Admin';
 
import * as ROUTES from './constants/routes';

class App extends Component {
  render(){
      return (
      <div className="App">
        <Router>
          <Navbar />
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.REGISTER} component={Register} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          {/* <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} /> */}
        </Router>
        <NewTask />
        <ToDoList />
      </div>
    );
  }
}

export default App;