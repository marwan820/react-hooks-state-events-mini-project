import React from "react";
import Task from "./Task";
import {v4 as uuid} from "uuid"

function TaskList({filterList,onDeleteTask}) {



  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {filterList.map(task => (<Task  onDeleteTask={onDeleteTask} task={task} key={uuid()} /> ))}
    </div>
  );
}

export default TaskList;
