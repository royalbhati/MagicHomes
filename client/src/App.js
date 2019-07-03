import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/signup";
import Property from "./components/ViewProp";
import AddProperty from "./components/AddProperty/";
import EditProperty from "./components/EditProperty";
import UnAuth from "./components/UnAuth";
import jwtDecode from "jwt-decode";
import "./App.css";
export default class App extends Component {
  isAuth = () => {
    if (localStorage.getItem("jwtToken")) {
      return true;
    } else {
      return false;
    }
  };
  getRole = () => {
    if (localStorage.getItem("jwtToken")) {
      const role = jwtDecode(localStorage.getItem("jwtToken")).role;
      console.log(role);
      return role;
    }
  };
  render() {
    return (
      <Router>
        <div>
          <div className='App'>
            <div className='container' />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
            <Route
              exact
              path='/'
              render={props =>
                this.isAuth() ? (
                  <Dashboard auth='true' />
                ) : (
                  <Dashboard auth='false' />
                )
              }
            />
            <Route exact path='/property' component={Property} />
            <Route
              exact
              path='/editproperty'
              render={props =>
                this.isAuth() && this.getRole() === "admin" ? (
                  <EditProperty {...props} />
                ) : (
                  <UnAuth />
                )
              }
            />
            <Route
              exact
              path='/addproperty'
              render={props =>
                this.isAuth() && this.getRole() === "admin" ? (
                  <AddProperty {...props} />
                ) : (
                  <UnAuth />
                )
              }
            />
          </div>
        </div>
      </Router>
    );
  }
}
