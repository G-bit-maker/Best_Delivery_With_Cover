import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from "./Auth/register"
import Login from './Auth/login';
import Home from "./Auth/home"
import {Switch,Route} from "react-router-dom";
import ProductRouter from "./Auth/prodect";
import Dashboard from "./pages/Dashboard"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component = {Home} />
        <Route exact path="/home" component = {Home} />
        <ProductRouter exact path="/Dashboard" component = {Dashboard} />
        <Route exact path="/login" component = {Login} />
        <Route exact path="/register" component = {Register}/>
      </Switch>
      <ToastContainer/>
    </div>
  );
}

export default App;
