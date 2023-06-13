import React from 'react';
import ToDo from './toDo';

const ToDoList = ({ toDoList,handleToggle,handleFilter }) => {
    return(
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo  key={todo.id+todo.task} todo={todo} handleToggle={handleToggle}/>
                )
            })}
        </div>
    )
}

export default ToDoList;