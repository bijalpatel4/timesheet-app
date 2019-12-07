import React, { Component } from "react";
//import getProjects from "../services/projectsService";

class Total extends Component {
  state = {};

  getDays = () => {
    const projects = this.props.projects;
    for (let i = 0; i < projects.length; i++) {
      let days = projects[i].days;
      console.log("Days", days.length);
      for (let j = 0; j < days.length; j++) {
        console.log("individual day", days[j]);
      }
    }
  };

  render() {
    return <React.Fragment>{this.getDays()}</React.Fragment>;
  }
}

export default Total;
