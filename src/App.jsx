import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList"
import { useState } from "react";

function App() {

 const [newTodo, setnewTodo] = useState();

  return (
    <div>
    <div>
      <h1>Todo List here</h1>
      <AddTodoForm onAddTodo = {setnewTodo}/> 
      <p>{newTodo}</p>

    </div>
    <div>
      <TodoList />  
    </div>
    </div>
  )
}

export default App;
