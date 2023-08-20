import React, { useState } from "react";

function CategoryFilter({categories}) {
  const [selectedCategory,setselectedCategory]= useState("All")
function onCategoryClicked(category){
  setselectedCategory(category)

}


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
    {categories.map(category => <button  className={`${selectedCategory === category ? `selected`: ``}`} onClick={onCategoryClicked(category)}key={category}>{category}</button>)
    }
    </div>
  );
}

export default CategoryFilter;
