import React from 'react';

const ToDo=({todo,handleToggle})=>{
    const handleEvent=(e)=>{
        console.log(e.currentTarget.id)
        e.preventDefault();
        handleToggle(e.currentTarget.id)
    }

    return (
        <div id={todo.id} value={todo.id} onClick={handleEvent} className={todo.complete ? 'todo strike' : 'todo'}>
            {todo.task}
        </div>
    )
}

export default ToDo;