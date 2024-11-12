import { useState } from 'react'
import './App.css'

const todoList = [
  {id: 1, title: "wake up one morning"},
  {id: 2, title: "papa always told me"},
  {id: 3, title: "I was the chosen one"},
  {id: 4, title: "one in a million"}
]



function App() {

  return (
    <div>
    <h1>Todo List here</h1>
    <ul>
      {todoList.map(List)}
    </ul>
    </div>
  )
}

export default App
