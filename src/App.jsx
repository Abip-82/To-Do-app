import { useState } from "react";
import "./App.css";

function TodoItem(props){
  return(
    <div>
      {props.todo}
      <button onClick={() => props.deletetodo(props.index)}>Delete</button>
    </div>
  )
}

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  function handleAddTodo() {
    setTodos([...todos, inputText]);
    setInputText("");
  }
  function handleDeleteTodo(indexDelete) {
    const newTodos = todos.filter((todo,index) => {
      return (
        index !== indexDelete
      )
    })
    setTodos(newTodos)
  }

  return (
    <>
      <div>To-do app</div>
      <input
        type="text"
        placeholder="Enter a task"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />
      <button onClick={handleAddTodo}>Add Task</button>
      <div>
        <h2>To DO List:</h2>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}> <TodoItem todo={todo} index={index} deletetodo={handleDeleteTodo} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
