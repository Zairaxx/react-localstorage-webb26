import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [todos,setTodos] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
  const [text,setText] = useState("");


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos])

  const addTodo = () => {
    setTodos([...todos, text]);
  }

  return (
    <>
      <h1>Local Storage</h1>
      <input type="text" onChange={(e) => {setText(e.target.value)}}/>
      <button onClick={addTodo}>Lägg till</button>
      <button onClick={() => setTodos([])}>Rensa lista</button>
      <ul>
        {todos.map((todo,i) => <li>#{i} - {todo}</li>)}
      </ul>
    </>
  )
}

export default App
