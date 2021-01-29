import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/common.scss"

import { Provider } from "react-redux";
import store from "./store";

import Login from './Component/login'
import SignUp from './Component/signUp'
//import Profile from './Component/profile'
import Dashboard from './Component/dashboard'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
       <Route exact path="/login" component={Login} /> 
       <Route exact path="/signUp" component={SignUp} /> 
      {/*  <Route exact path="/profile" component={Profile} />  */}
       <Route exact path="/AdminDashboard" component={Dashboard} /> 
       </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
