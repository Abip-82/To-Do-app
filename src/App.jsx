import {useState} from 'react'
import './App.css'

function App() {

  const [inputText, setInputText] =useState('') 
  const [todos , setTodos] = useState([])

  function handleAddTodo(){
    setTodos([...todos, inputText])
    setInputText('')
  }

  return(
    <>
      <div>To-do app</div>
      <input type="text" placeholder="Enter a task" value={inputText} onChange={(event) => setInputText(event.target.value)}/>
      <button onClick={handleAddTodo}>Add Task</button>
      <div>
        <h2>To DO List:</h2>
        <ul>
          {todos.map((todo,index) => <li key={index}>{todo}</li>)}
        </ul>
      </div>
    <>

  )
}

export default App
