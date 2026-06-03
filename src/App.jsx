import { useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem"

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
    <div className ="todo-wrapper">
      <h1 className="todo-title">To-do app</h1>
      <div className = "input-container">
        <input className="todo-input"
          type="text"
          placeholder="Enter a task"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        />
        <button className = "btn-add" onClick={handleAddTodo}>Add Task</button>
      </div>
        <div className="tasks-list-container">
          <ul>
            {todos.map((todo, index) => (
              <li key={index}> <TodoItem todo={todo} index={index} deletetodo={handleDeleteTodo} />
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
}

export default App;
