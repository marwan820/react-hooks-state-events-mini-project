import matchers from "@testing-library/jest-dom/matchers";
import React, { useState } from "react";

function CategoryFilter({
  categories,
  tasks,
  setTasks,
  selectedCategory,
  handleCategoryClick
}) {
  //console.log(tasks)

  // function for chooing category
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) => (
        <button
          type="button"
          key={category}
          className={`${selectedCategory === category ? `selected` : ``}`}
          onClick={handleCategoryClick}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
