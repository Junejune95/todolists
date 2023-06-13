import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import ToDoList from './components/toDoList';
import ToDoForm from './components/toDoForm';
import data from './data.json';

function App() {
  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    console.log(id)
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task }
    });
    
    setToDoList(mapped);
    //  this.setState({ toDoList: mapped })
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
}

  return (
    <div className="App">
      <Header></Header>
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} />
      <button style={{ margin: '20px' }} onClick={handleFilter}>Clear Completed</button>
      <ToDoForm addTask={addTask}/>
    </div>
  );
}

export default App;
