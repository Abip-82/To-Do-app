import {useState} from 'react'
import './App.css'

function App() {

const [inputText, setInputText] =useState('') 
const [todos , setTodos] = useState([])

  return(
    <>
      <div>To-do app</div>
      <input type="text" placeholder="Enter a task" value={inputText} onChange={(event) => setInputText(event.target.value)}/>
      <button>Add Task</button>
    </>

  )
}

export default App
