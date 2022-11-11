// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, {useState} from "react";

import "./index.css";

// import Input from "./Input";
import List from "./components/List";
import Input from "./components/Input"
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
//ll
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

