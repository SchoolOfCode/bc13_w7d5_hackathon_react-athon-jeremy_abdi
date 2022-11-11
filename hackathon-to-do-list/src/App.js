import React, { useState } from "react";
import List from "./components/List";
import Input from "./components/Input"

import "./index.css";

const DEFAULT_STATE = [];

function App() {
  const [todos, setTodos] = useState(DEFAULT_STATE)

  const deleteTodo = (todoID) => {
    setTodos(todos.filter(todo => todo.id !== todoID));
  }
  
  const addTodo = (todoObj) => {
    setTodos([...todos, todoObj]);
  }

  return (
    <div id="app" className="container">
      <h1>Todo List</h1>
      <Input addTodo={addTodo} />
      <List arrayOfTodos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;

