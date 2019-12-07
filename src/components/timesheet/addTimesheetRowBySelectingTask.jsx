import React from "react";
import getProjects from "../../services/tasksService";

const AddTimesheetRowBySelectingTask = ({ handleOnChange, addrow }) => {
  return (
    <div className="input-group">
      <select onChange={handleOnChange} className="select-option">
        <option value="#"> Select task</option>
        {getProjects().map((task, index) => (
          <option value={JSON.stringify(task)} key={index}>
            {task.taskId}
          </option>
        ))}
      </select>
      <button onClick={addrow} className="btn btn-primary btn-sm">
        {" "}
        ADD{" "}
      </button>
    </div>
  );
};

export default AddTimesheetRowBySelectingTask;
