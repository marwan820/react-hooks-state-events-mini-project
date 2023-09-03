import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({ onTaskFormSubmit, filterList }) {
  const [taskToDo, setTasktoDO] = useState("");
  const [taskCategories, setTaskCategory] = useState("");

  const handleSubmit = (e) => {
    console.log(e.target);
  };
  const onChangeHandler = (e) =>
    setTasktoDO((taskToDo) => (taskToDo = e.target.id));
  console.log("TASK:", taskToDo);
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          id="text"
          value={taskToDo}
          type="text"
          name="text"
          onChange={onChangeHandler}
        />
      </label>
      <label>
        Category
        <select  id="category" value={taskCategories}>
          {/* render <option> elements for each category here */}
          {filterList.map((task) => (
            <option>{task.category}</option>
          ))}
        </select>
      </label>
      <input value="Add task" type="submit" />
    </form>
  );
}

export default NewTaskForm;
