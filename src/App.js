import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import ToDoList from './components/toDoList';
import data from './data.json';
function App() {
  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, compete: !task.complete } : { ...task }
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

  return (
    <div className="App">
      <Header></Header>
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} />
      <button style={{ margin: '20px' }} onClick={handleFilter}>Clear Completed</button>
    </div>
  );
}

export default App;
