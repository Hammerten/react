import React from "react";

function Todo(props) {
    let { todoItem } = props

    return (
        <div className="todo-item">
            <p>{todoItem.title}</p>
            <span onClick={() => props.handleTodoDelete(todoItem.id)} className="fas fa-times" aria-hidden="true"></span>
        </div>
    )
}

export default Todo;