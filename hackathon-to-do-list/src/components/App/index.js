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

function App() {
    const [list, setList]= useState([]);
    const[input, setInput]= useState("")
  return (
    <div id="app">
      <List />
    </div>
  );
}

export default App;
