import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Css
import './app.css';
// Components
import Header from './components/Header';
import All from './components/All';
import Active from './components/Active';
import Completed from './components/Completed';
import Notification from './components/Notification';
import Footer from './components/Footer';

const App = () => {
  const [task, setTask] = useState('');
  // Tasks list
  const [list, setList] = useState([]);
  // Error notification
  const [notification, setNotification] = useState('');

  // Get todo list from local storage on first render
  useEffect(() => {
    const storageList = window.localStorage.getItem('todo-list');
    if(storageList){
      setList(JSON.parse(storageList));
    }
  }, [])

  // Set new list to local storage every time when list array changes
  useEffect(() => {
    window.localStorage.clear();
    window.localStorage.setItem('todo-list', JSON.stringify(list));
  }, [list])

  // Adding new task
  const handleSubmit = (e) => {
    e.preventDefault();

    if(task !== ''){
      const alreadyAdded = list.find(i => i.content === task);

      if(alreadyAdded){
        setTask('');
        setNotification('This task is already added');
        setTimeout(() => {
          setNotification('');
        }, 3000);
        return;
      }else{
        const taskObj = {
          content: task,
          completed: false
        }
        setList(list.concat(taskObj));
        setTask('');
      }
    }else{
      setNotification('Cannot add empty task');
      setTimeout(() => {
        setNotification('');
      }, 3000);
      return;
    }
  }

  // Updating task Active - Completed
  const updateTask = (task) => {
    const taskToUpdate = list.find(i => i.content === task.content);
    const newTask = { ...taskToUpdate, completed: !taskToUpdate.completed };
    setList(list.map(i => i.content === task.content ? newTask : i));
  }

  // Deleting single Task
  const deleteTask = (task) => {
    const newList = list.filter(i => i.content !== task.content);
    setList(newList);
  }

  // Deleting all completed tasks
  const deleteAll = () => {
    const newList = list.filter(i => i.completed === false);
    setList(newList);
  }

  return (
    <Router>
      <main className='container'>
        <h1>#todo</h1>
        <Header />
        <Notification notification={notification} />

        <form onSubmit={handleSubmit}>
          <input 
            type='text' 
            placeholder='add details'
            value={task}
            onChange={({ target }) => setTask(target.value)}
          />
          <button type='submit'>Add</button>
        </form>

        <Routes>
          <Route path='/completed' element={
            <Completed 
              list={list} 
              updateTask={updateTask} 
              deleteTask={deleteTask} 
              deleteAll={deleteAll} 
            />
          } />

          <Route path='/active' element={
            <Active 
              list={list} 
              updateTask={updateTask}
            />}
          />

          <Route path='/' element={
            <All 
              list={list} 
              updateTask={updateTask}
            />}
          />
        </Routes>

        <Footer />

      </main>
    </Router>
  );
}

export default App;