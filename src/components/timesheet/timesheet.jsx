import React, { Component } from "react";
import TimesheetTable from "./timesheetTable";
import "../css/projects.css";
import { getUserFromLocalStorage } from "../../services/loginService";
import AddTimesheetRowBySelectingTask from "./addTimesheetRowBySelectingTask";

class Timesheet extends Component {
  state = {
    projects: []
  };

  selectedProject = "#";

  addrow = () => {
    if (this.selectedProject === "#") {
      return;
    }
    const projects = this.state.projects;
    var project = {
      projectId: this.selectedProject.taskId,
      description: this.selectedProject.taskDescription,
      days: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
        { id: 5, value: 0 },
        { id: 6, value: 0 },
        { id: 7, value: 0 }
      ],
      total: 0
    };
    projects.push(project);
    this.setState({ projects });
  };

  handleChange = e => {
    let value = e.target.value;
    if (value === "#") {
      this.selectedProject = "#";
      return;
    }
    this.selectedProject = JSON.parse(value);
  };

  deleteRow = projectId => {
    const removeProject = this.state.projects.filter(
      project => project.projectId !== projectId
    );
    this.setState({ projects: removeProject });
    console.log("deleted");
  };

  render() {
    const currentUser = getUserFromLocalStorage();
    if (!currentUser) {
      window.location = "/";
      return null;
    }
    return (
      <div className="Projects">
        <div>
          <h1 style={{ textAlign: "center", margin: "4%" }}>
            Employee Timesheet
          </h1>
        </div>
        <div>
          <div className="timesheet">
            <div>
              <div style={{ padding: "1%" }}>
                <h1 style={{ float: "left" }}>
                  {currentUser.firstname} {currentUser.lastname} (
                  {currentUser.employeeId})
                </h1>
                <h2 style={{ float: "right" }}>
                  Manager: {currentUser.managerName}
                </h2>
              </div>
              <AddTimesheetRowBySelectingTask
                handleOnChange={this.handleChange}
                addrow={this.addrow}
              />

              <TimesheetTable
                projects={this.state.projects}
                days={this.state.projects.days}
                total={this.state.projects.total}
                onDelete={this.deleteRow}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Timesheet;
