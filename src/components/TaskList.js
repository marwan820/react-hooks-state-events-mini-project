import React from "react";
import Task from "./Task";

function TaskList({tasks,onDeleteTask}) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
    {tasks.map(task => (<Task  onDeleteTask={onDeleteTask} task={task} key={Math.floor(Math.random()*100)} /> ))}
    </div>
  );
}

export default TaskList;
