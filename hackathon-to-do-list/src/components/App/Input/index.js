import React from 'react';

import './index.css';

export default function Input (props) => {

    const [ userInput, setUserInput ] = useState('');

    const addMore= (e) => {
        setUserInput(e.currentTarget.value)
    }
    
    const handleSubmit = (e) => {
        props.addItems(userInput);
        setUserInput("");
    }
    return (
        <div onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={props.addMore} placeholder="Enter task..."/>
            <button>Submit</button>
        </div>
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