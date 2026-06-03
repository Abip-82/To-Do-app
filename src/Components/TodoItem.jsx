function TodoItem({todo, index, deletetodo}){
  return(
    <div className="task-item">
      {todo}
      <button className="btn-icon" onClick={() =>deletetodo(index)}>Delete</button>
    </div>
  )
}

export default TodoItem;