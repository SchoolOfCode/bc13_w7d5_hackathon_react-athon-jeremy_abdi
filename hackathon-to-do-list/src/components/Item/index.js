import React from "react"
import "./index.css"

export default function Item(props) {
  const { todo, deleteTodo } = props
  
  return (
    <li className="todo-item">
      {todo.item} 
      <button className ="delete-button" onClick={() => deleteTodo(todo.id)}>
          Delete
      </button>
    </li>
  )
};
