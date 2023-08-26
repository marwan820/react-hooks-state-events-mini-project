import matchers from "@testing-library/jest-dom/matchers";
import React, { useState } from "react";

function CategoryFilter({categories,tasks,handleCategoryClick}) {

function onCategoryClicked(category){
// the list of tasks being displayed should be filtered
// so that only tasks that match the category that was clicked are displayed 
console.log(categories)
/* Pseudocode
if user clicks a category 
render the list the that matches the selectedCategory 

list = filter(selectedCategory === category)






*/
handleCategoryClick()
}

 return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
    {categories.map(category => <button  type="button" key={category} className={`${selectedCategory === category ? `selected`: ``}`} onClick={() => onCategoryClicked(category)} value={categories}>{category}</button>)
    }
    </div>
  );
}

export default CategoryFilter;
