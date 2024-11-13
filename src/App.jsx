import './App.css'

const todoList = [
  {id: 1, title: "woke up one morning"},
  {id: 2, title: "papa always told me"},
  {id: 3, title: "I was the chosen one"},
  {id: 4, title: "one in a million"}
]



function App() {


  return (
    <div>
      <h1>Todo List here</h1>
     <ul>
       {todoList.map(function(item) {
        return (<li key={item.id}>{item.title}</li>)
       })}
     </ul>
    </div>
  )
}

export default App;
