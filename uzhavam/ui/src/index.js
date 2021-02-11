import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/common.scss"

import { Provider } from "react-redux";
import store from "./store";

import Login from './Pages/login'
import SignUp from './Pages/signUp'
//import Profile from './Component/profile'
import Dashboard from './Admin/dashboard'
import Temp from './User/tempDashboard'
import ViewProducts from './Admin/viewProduct'
import AddProduct from './Admin/addProduct'
import UpdateTags from './Admin/updateTags'
import Users from './Admin/userList'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
      <Route exact path="/" component={Login} /> 
       <Route exact path="/login" component={Login} /> 
       <Route exact path="/signUp" component={SignUp} /> 
      {/*  <Route exact path="/profile" component={Profile} />  */}
       <Route exact path="/User/Dashboard" component={Temp} /> 
       <Route exact path="/Dashboard" component={Dashboard} /> 
       <Route exact path="/ViewProduct" component={ViewProducts} /> 
       <Route exact path="/AddProduct" component={AddProduct} /> 
       <Route exact path="/UpdateTags" component={UpdateTags} /> 
       <Route exact path="/ViewUser" component={Users} /> 
       </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
