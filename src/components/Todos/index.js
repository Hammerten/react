import React, {useState} from "react";
import { weekDays, todoList, NewTodo } from "../../helpers/Helpers"
import TodoList from "./TodoList"

let id = 0;

function Todos(props) {
    const [todo, setTodoList] = useState(todoList())
    const [selectValue, setSelectValue] = useState(0)
    const [titleValue, setTitleValue] = useState('')
    const {inputDivTitle, listDivTitle} = props
    const week = weekDays()

    function addTodo(){
        const newTodo = new NewTodo(selectValue, titleValue, id)
        setTodoList([...todo, newTodo])
        setTitleValue('')
        id++
    }

    function handleSelectChange(e) {
        setSelectValue(parseInt(e.target.value))
    }

    function handleTodoDelete(id) {
        const newTodo = todo.filter(item => item.id !== id)
        setTodoList([...newTodo])
    }

    function handleTitleChange (e) {
        setTitleValue(e.target.value)
    }

    return (
    <div>
        <div className="container">
            <div className="container-title">
                <h2>{inputDivTitle}</h2>
            </div>
            <div className="todo-input">
                <label className="input-label" htmlFor="weekDay">Day:
                    <select value={selectValue} onChange={handleSelectChange}>
                        {week.map(({name},index) => {
                            return (
                            <option key={`${name}--${index}`} value={index}>{name}</option>
                            )
                        })}
                    </select>
                </label>
                <label className="input-label" htmlFor="todoTitle">Title:
                    <input onChange={handleTitleChange} value={titleValue} name="todoTitle" type="text"/>
                </label>
                <button onClick={addTodo} type="button" style={{marginTop: "20px"}}>ADD TODO</button>
            </div>
        </div>
        <div className="container">
            <div className="container-title">
                    <h2>{listDivTitle}</h2>
            </div>
            <div className="todos-container">
                {week.map(day => <TodoList handleTodoDelete={handleTodoDelete} key={`${day.name}--${day.id}`} day={day} todos={todo.filter(item => item.dayId === day.id)}/>)}
            </div>
        </div>
    </div>
    )
}

export default Todos;