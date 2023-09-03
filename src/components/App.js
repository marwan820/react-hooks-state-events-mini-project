import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES);
  const [selectedCategory, setselectedCategory] = useState("All");

  
  // console.log("taskList:", taskList)

  

  const filterTaskbyCategories = tasks.filter((task) => {
    if (selectedCategory === "All") {
      return true;
    } else if (task.category === null) {
      return task.category === selectedCategory;
    } else {
      return task.category === selectedCategory;
    }
  });
;
const filterList = filterTaskbyCategories

  // function updateTasks(object) {
  // setTasks(object);

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


  

  //const handleCategoryClick = (e) => {setselectedCategory(e.target.textContent)}

  // const filterList =  {
  //   category: filterTaskbyCategories.category,
  //   text: filterTaskbyCategories.text,
  // };
  //  console.log(filterList)

//const filterListBycatefory = filterTaskbyCategories.map(task => task)

 //const handleTask = (obj) => {
 // const filterList = { text : obj.text, category : obj.category }
 // setTasks(filterList)}

  const onCategoryClick = (e) => {
    
    //const filterlist = filterTaskbyCategories.map(task => {task.category = task.category, task.text = task.text})
    setselectedCategory((selectedCategory) => selectedCategory = e.target.textContent)
  
  

  
   // console.log(filterList)
    //const taskVariable = filterTaskbyCategories
    // console.log("selectedState:",selectedCategory);
    //console.log(filterTaskbyCategories)
    //console.log( "category:",categorySelect);
  };
  console.log(selectedCategory)
  console.log("filter after:",filterTaskbyCategories);
  console.log("TASKS:",tasks)


   
  // console.log(selectedCategory)
  //console.log("filter:" ,filterTaskbyCategories)
  // const handleTaskbyCategory = () => {
  //   setTasks(newObject);
  // };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        selectedCategory={selectedCategory}
        categories={categories}
        onCategoryClick={onCategoryClick}
      />
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList onDeleteTask={onDeleteTask} filterList={filterList} />
    </div>
  );
}

export default App;
