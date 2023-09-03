import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({ categories, tasks, onTaskFormSubmit }) {
  const [taskToDo, setTasktoDO] = useState("something");
  const [taskCategories, setTaskCategory] = useState("ALL");

  const newTask = {
    text: taskToDo,
    category: taskCategories,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(newTask);
    setTasktoDO("");
    setTaskCategory("");
  };

  const categorySelectFilter = categories.filter(
    (category) => category !== "All"
  );

  // function selectCategoryHandler(){
  // const categoryFilter = filterList.map((task) => {
  //   <option key={12345}>{task.category}</option>;
  //   })};

  const onChangeHandler = (e) => {
    e.preventDefault();
    setTasktoDO(e.target.value);
  };

  const categoryHandler = (e) => {
    e.preventDefault();
    setTaskCategory(e.target.value);
  };

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
        <select id="category" onChange={categoryHandler} value={taskCategories}>
          {/* render <option> elements for each category here */}
          {categorySelectFilter.map((task) => {
            return <option key={uuid()}>{task}</option>;
          })}
        </select>
      </label>
      <input value="Add task" type="submit" />
    </form>
  );
}

export default NewTaskForm;
