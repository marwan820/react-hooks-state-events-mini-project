import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES);
  const [selectedCategory, setselectedCategory] = useState("All");


  const filterList = tasks.filter((task) => {
    if (selectedCategory === "All") {
      return true;
    } else if (task.category === null) {
      return task.category === selectedCategory;
    } else {
      return task.category === selectedCategory;
    }
  });

  const onDeleteTask = (taskToBeDeleted) => {
    setTasks(tasks.filter((task) => taskToBeDeleted !== task));
  };

  function onTaskFormSubmit(newTask) {
    const newTaskList = [...tasks, newTask];
    setTasks(newTaskList);
  }


  const onCategoryClick = (e) => {
    setselectedCategory(
      (selectedCategory) => (selectedCategory = e.target.textContent)
    );
  };

  

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        selectedCategory={selectedCategory}
        categories={categories}
        onCategoryClick={onCategoryClick}
      />
      <NewTaskForm
        categories={categories}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList onDeleteTask={onDeleteTask} tasks={filterList} />
    </div>
  );
}

export default App;
