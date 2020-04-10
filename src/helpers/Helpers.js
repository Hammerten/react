function todoList() {
    const todos = []
    return todos;
}

function weekDays() {
    const week = [
        {
            name:"Monday",
            id: 0
        },
        {
            name:"Tuesday",
            id: 1
        },
        {
            name:"Wednesday",
            id: 2
        }, 
        {
            name:"Thursday",
            id: 3
        },
        {
            name:"Friday",
            id: 4
        },
        {
            name:"Saturday",
            id: 5
        },
        {
            name:"Sunday",
            id: 6
        }
    ]
    return week;
}

function NewTodo(dayId, title, id) {
    this.dayId = dayId
    this.title = title
    this.id = id
    this.status = false
}

export {
    todoList,
    weekDays,
    NewTodo
}
