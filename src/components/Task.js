import React from "react";

function Task({text,category,onDeleteTask,task}) {
  return (
    <div className="task">
      <div   className="label">{category}</div>
      <div   className="text">{text}</div>
      <button onClick={() => onDeleteTask(task)} className="delete">X</button>
    </div>
  );
}

export default Task;
