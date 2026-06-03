function TodoItem({todo, index, deletetodo}){
  return(
    <div>
      {todo}
      <button onClick={() =>deletetodo(index)}>Delete</button>
    </div>
  )
}

export default TodoItem;