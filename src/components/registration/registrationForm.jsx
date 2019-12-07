import React from "react";
import register from "../../services/loginService";
import Joi from "joi-browser";
import Form from "../forms&Inputs/form";
import { Link } from "react-router-dom";

class RegistrationForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      employeeId: "",
      managerName: ""
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .email()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    firstname: Joi.string()
      .required()
      .label("Firstname"),
    lastname: Joi.string()
      .required()
      .label("Lastname"),
    employeeId: Joi.string()
      .required()
      .label("employeeId"),
    managerName: Joi.string()
      .required()
      .label("managerName")
  };

  doSubmit = () => {
    console.log(this.state.data);
    register(this.state.data);
    // localStorage.setItem("user", JSON.stringify(this.state.data));
    //window.location = "/";
  };
  render() {
    return (
      <div className="loginForm">
        <form
          style={{ width: "90%" }}
          onSubmit={this.handleSubmit}
          className="bg-light border border-light p-5 m-5"
        >
          <h1>Register</h1>
          {this.renderInput("username", "username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("firstname", "Firstname")}
          {this.renderInput("lastname", "Lastname")}
          {this.renderInput("employeeId", "EmployeeId")}
          {this.renderInput("managerName", "Manager")}
          {this.renderButton("Register")}
          <div className="hint-text">
            Already have an account? <Link to="/">Login here</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
