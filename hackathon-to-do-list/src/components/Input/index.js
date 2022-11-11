import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

import './index.css';

const DEFAULT_INPUT_STATE = ""

export default function Input (props) {
    const { addTodo } = props
    const [ userInput, setUserInput ] = useState(DEFAULT_INPUT_STATE);

    const handleInputChange = (event) => {
        setUserInput(event.target.value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        if(userInput !== DEFAULT_INPUT_STATE) {
            addTodo({ item: userInput, id: uuidv4() });
            setUserInput(DEFAULT_INPUT_STATE);
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={userInput}
                type="text"
                onChange={handleInputChange}
                placeholder="Enter task..."
            />
            <button type="submit">Submit</button>
        </form>
    );
};




// export default function Input(props) {
//     return <input type="text" onChange={props.onChange}></input>
// }
// _state_

// - text

// _props_

// - add function

// _behaviour_

// - render an input field and a button
// - change of input text will update state of this component
// - button click will call the add function from props with value of input