import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import ShowMessage from "./components/showMessage";
import Timesheet from "./components/timesheet/timesheet";
import LoginForm from "./components/login/loginForm";
import RegistrationForm from "./components/registration/registrationForm";
import Logout from "./components/logout/logout";
import NavBar from "./components/nav/navBar";
import Admin from "./components/admin/admin";
import { getUserFromLocalStorage } from "./services/loginService";
// import Home from "./components/home";

class TimeSheetApp extends Component {
  state = {};

  componentDidMount() {
    this.setState({ currentUser: getUserFromLocalStorage() });
  }
  render() {
    return (
      <React.Fragment>
        <NavBar currentUser={this.state.currentUser} />
        <div className="container">
          <Switch>
            <Route path="/registration" component={RegistrationForm} />
            <Route path="/showMessage" component={ShowMessage} />
            <Route path="/projects" component={Timesheet} />
            <Route path="/admin" component={Admin} />
            <Route path="/logout" component={Logout} />
            <Route path="/" component={LoginForm} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default TimeSheetApp;
