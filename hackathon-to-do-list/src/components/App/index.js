// _state_

// - list of to dos

// _behaviour_

// - add item to list
// - remove item from list
// - render an Input and List

import React, {useState} from "react";

import "./index.css";

// import Input from "./Input";
import List from "./List";
import Input from "./input"
import { v4 as uuidv4 } from 'uuid';


function App() {

  const newInput = {item: Input.userInput, id: uuidv4()}
  const initialInput = [{item: "", id: 0}]
  
  const [userData, setUserData] = useState(initialInput)

  setUserData(preState => [...preState, newInput])


  // function handleDeleteClick(id) {
  //   const removeItem = todos.filter((todo) => {
  //     return todo.id !== id;
  //   });
  //   setTodos(removeItem);
  // }

  // {todos.map((todo) => (
  //   <li key={todo.id}>
  //     {todo.text} <button onClick={() => handleDeleteClick(todo.id)}>X</button>
  //   </li>

  const deleteItems = (id) => {
    let filtered = userData.filter(data => {
      return data.id !== id;
    });
    setUserData(filtered);
  }

  const updatedUserDataElements = userData.map(data => {
    <li key={data.id}>
        {data.item} 
        <button className ="delete-button" onClick={() => deleteItems(data.id)}>
          Delete
        </button>
    </li>
  })


  const addItems = (userInput ) => {
    let copy = [...userData];
    copy = [...copy, { item: userInput, id: uuidv4()}];
    setUserData(copy);
  }

  return (
    <div id="app">
      <List items = {updatedUserDataElements}/>
      <Input add={addItems}/>
    </div>
  );
}

export default App;
