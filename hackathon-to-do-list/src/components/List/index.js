import React from "react"
import Item from '../Item'

export default function List(props) {
    const { arrayOfTodos, deleteTodo } = props
    
    return (
        <ul className="todo-list">
            {arrayOfTodos.map(todo => (
                <Item
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </ul>
    )
};
