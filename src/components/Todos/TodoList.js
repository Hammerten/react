import React from "react";
import Todo from "../Todos/Todo/Todo"

function TodoList(props) {
    const { day, todos } = props
    return (
        <div className="weekday-container">
            <h3>{day.name}</h3>
            <div className="card">
                {todos.map(todo => <Todo handleTodoDelete={props.handleTodoDelete} key={`todo--${todo.id}--${todo.dayId}`} todoItem={todo}/>)}
            </div>
        </div>
    )
}

export default TodoList;