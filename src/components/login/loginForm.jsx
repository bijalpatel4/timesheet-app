import React from "react";
import "../css/login.css";
import Joi from "joi-browser";
import Form from "../forms&Inputs/form";
import { login } from "../../services/loginService";
import { Link } from "react-router-dom";

class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    const { data } = this.state;
    const user = login(data.username, data.password);
    localStorage.setItem("user", JSON.stringify(user));
    window.location = "/projects";
  };

  render() {
    return (
      <div className="loginForm">
        <form
          style={{ width: "90%" }}
          onSubmit={this.handleSubmit}
          className="bg-light border border-light p-5 m-5"
        >
          <h1>Login</h1>
          {this.renderInput("username", "username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
          <p>
            Not a member? <Link to="/registration">Register</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default LoginForm;
