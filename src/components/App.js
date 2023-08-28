import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";



function App() {
  const [tasks,setTasks] = useState(TASKS)
  const [categories,setCategories] = useState(CATEGORIES)
  const [selectedCategory,setselectedCategory]= useState('All')
  console.log(categories)
  console.log(tasks.category)
  console.log(selectedCategory)
  
  const onDeleteTask = (taskToBeDeleted) => {
  setTasks(tasks.filter(task => taskToBeDeleted !== task))
  }


  // function for choosing a category column and rerendering only tasks that match the selectedCategory

  const handleCategoryClick = (e) => {
    setselectedCategory(e.target.textContent)
  

/* 
when i click on a category- display only the
 filter(items.category === selectedCategory)



*/
   


  }

  function onTaskFormSubmit(newTask){ 
    e.preventDefault()
    const newArray = [...tasks,newTask]}




  console.log(tasks)






return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter  tasks={tasks}  handleCategoryClick={handleCategoryClick} categories={categories} />
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList onDeleteTask={onDeleteTask} tasks={tasks} />
    </div>
  );
}

export default App;
