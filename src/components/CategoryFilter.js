import matchers from "@testing-library/jest-dom/matchers";
import React, { useState } from "react";

function CategoryFilter({categories,tasks,selectedCategory, handleCategoryClick}) {



 const filteredCategories = tasks.filter( task => task.category !== selectedCategory )
 console.log(filteredCategories)

 




  

  

// console.log(selectedCategory)


 

  //console.log(e.target)}


// the list of tasks being displayed should be filtered
// so that only tasks that match the category that was clicked are displayed 

// console.log(categories)

//const filteredTasksByCategories = tasks.filter(task => task.categories !== selectedCategory )

 //const itemCode = [...tasks,filteredTasksByCategories]

// return itemCode
// }

/* Pseudocode
if user clicks a category 
render the list the that matches the selectedCategory 

list = filter(selectedCategory === category)






*/


 return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
    {categories.map(category => <button  type="button" key={Math.floor(Math.random() * 100)} className={`${selectedCategory === category ? `selected`: ``}`} onClick={handleCategoryClick}>{category}</button>)
    }
    </div>
  );
  }

export default CategoryFilter;
