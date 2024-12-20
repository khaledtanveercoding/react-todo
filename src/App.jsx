import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList"


function App() {


  return (
    <div>
    <div>
      <h1>Todo List here</h1>
      <AddTodoForm />
    </div>
    <div>
      <TodoList />
    </div>
    </div>
  )
}

export default App;
