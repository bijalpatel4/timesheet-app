import { Component } from "react";

class Logout extends Component {
  componentDidMount() {
    const log = localStorage.removeItem("user");
    console.log(log);
    window.location = "/";
  }
  render() {
    return null;
  }
}

export default Logout;
