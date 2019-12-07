import React, { Component } from "react";
import InputWeekHours from "./inputWeeklyHours";
// import Total from "./total";
//import { Link } from "react-router-dom";
//import ShowMessage from "./showMessage";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "../css/timeSheetForm.css";

class TimesheetTable extends Component {
  render() {
    var daysNames = ["", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let curr = new Date();
    let week = [];
    week[0] = "";
    for (let i = 1; i <= 7; i++) {
      let first = curr.getDate() - curr.getDay() + i;
      let day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
      week.push(day);
    }
    return (
      <div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Project</th>
                <th>Description</th>
                {daysNames.map((dayName, index) => (
                  <th key={index}>{dayName}</th>
                ))}
                <th>Total</th>
              </tr>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                {week.map((date, index) => (
                  <th key={index}>{date}</th>
                ))}
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.projects.map(project => (
                <tr key={project.projectId}>
                  <th>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => this.props.onDelete(project.projectId)}
                    >
                      X
                    </button>
                  </th>
                  <td>{project.projectId}</td>
                  <td>{project.description}</td>
                  <InputWeekHours days={project.days} total={project.total} />
                </tr>
              ))}
              {/* <tr>
                <td></td>
                <td></td>
                <td>Total</td>
                <Total projects={this.props.projects} />
              </tr> */}
            </tbody>
          </table>
          <NavLink
            to="/showMessage"
            className="btn btn-success btn-lg float-right"
          >
            Submit
          </NavLink>
        </div>
      </div>
    );
  }
}

export default TimesheetTable;
