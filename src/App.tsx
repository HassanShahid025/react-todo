import React from 'react';
import './App.css';
import Header from './components/header/Header';
import TodoList from './components/todoList/TodoList';

function App() {
  return (
    <div className="App">
      <Header/>
      <TodoList/>
    </div>
  );
}

export default App;
