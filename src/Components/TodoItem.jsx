function TodoItem(props){
  return(
    <div>
      {props.todo}
      <button onClick={() => props.deletetodo(props.index)}>Delete</button>
    </div>
  )
}

export default TodoItem;