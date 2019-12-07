import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Logo from "../../images/logo.png";
import "../css/navbar.css";

const NavBar = props => {
  return (
    <div>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <div className="my-0 mr-md-auto font-weight-normal">
          <img src={Logo} alt="logo" />
        </div>
        {/* 
        {!props.currentUser && (
          <React.Fragment>
            <NavLink
              className="btn btn-outline-primary mr-5"
              to="/registration"
            >
              Registration
            </NavLink>
          </React.Fragment>
        )} */}
        {props.currentUser && (
          <React.Fragment>
            <NavLink className="btn btn-dark btn-circle btn-xl" to="#">
              {props.currentUser.firstname}
            </NavLink>
            <NavLink className="btn btn-primary btn-logout btn-xl" to="/logout">
              Log Out
            </NavLink>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default NavBar;
