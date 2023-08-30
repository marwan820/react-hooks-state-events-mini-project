import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES);
  const [selectedCategory, setselectedCategory] = useState("All");

  const filterTaskbyCategories = tasks.filter((task) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return task.category === selectedCategory;
    }
  });

  // const filterCategory = selectedCategory.filter((item) => {
  //   if (item === "ALL") {
  //     return true;
  //   } else {
  //     return item === selectedCategory;
  //   }
  // });
  //console.log(filterCategory)
  //console.log(filterTaskbyCategories);

  const onDeleteTask = (taskToBeDeleted) => {
    setTasks(tasks.filter((task) => taskToBeDeleted !== task));
  };

  function onTaskFormSubmit(newTask) {
    const newArray = [...tasks, newTask];
  }

  const handleCategoryClick = (e) => {
    setselectedCategory(e.target.textContent)
    console.log(selectedCategory)
    setTasks(filterTaskbyCategories)
    console.log(tasks);
  };

  // console.log(filterTaskbyCategories);
  // console.log(tasks);
  // console.log(selectedCategory}

 // const handleTask = () => setTasks(filterTaskbyCategories)

  // const onCategoryClick = () => {
    // handleCategoryClick();
    // ;
// 
    // console.log(filterTaskbyCategories)
  // };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        tasks={tasks}
        selectedCategory={selectedCategory}
        setTasks={setTasks}
        categories={categories}
        handleCategoryClick={handleCategoryClick}
      />
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList onDeleteTask={onDeleteTask} tasks={tasks} />
    </div>
  );
}

export default App;
