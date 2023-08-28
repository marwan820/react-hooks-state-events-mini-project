import  React,{ useState } from "react"
import { v4 as uuid  } from "uuid"

function NewTaskForm({onTaskFormSubmit}) {
  const [taskToDo,setTasktoDO] =  useState("")
  const [taskCategories, setTaskCategory] = useState("")
  
  
  const newTask = {
    id: uuid()
    task: taskToDo
    category: taskCategories
  }


  function handleSubmit(e)
  e.preventDefault()




  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
