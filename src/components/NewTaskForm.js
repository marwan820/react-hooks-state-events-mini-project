import  React,{ useState } from "react"
import { v4 as uuid  } from "uuid"

function NewTaskForm({onTaskFormSubmit}) {
  const [taskToDo,setTasktoDO] =  useState("")
  const [taskCategories, setTaskCategory] = useState("")




  return (
    <form className="new-task-form" onSubmit={handleSubmit} >
      <label>
        Details
        <input value={newTask.text}  type="text" name="text" onChange={(event) => console.log(event.target.value)} />
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input onChange={onChangeHandler} name="task-category" type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
