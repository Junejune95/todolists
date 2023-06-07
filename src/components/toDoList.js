import React from 'react';
import ToDo from './toDo';

const ToDoList = ({ toDoList }) => {
    return(
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} key={todo.id}/>
                )
            })}
        </div>
    )
}

export default ToDoList;