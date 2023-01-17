import React, { useState, ChangeEvent } from 'react';
import './App.css';
import { Tasks } from './components/Tasks';
import { ITasks } from './Interfaces';


function App() {

  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState(0);
  const [todo, setTodo] = useState<ITasks[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
    if(e.target.name==='task'){
      setTask(e.target.value)
    }else{
      setDeadline(Number(e.target.value))
    }
  }

  const addTask = () => {
    const newTask = { taskName:task, deadline:deadline };
    setTodo([...todo, newTask]) ;
    setTask('');
    setDeadline(0);
  }

  const deleteTask = (taskToDelete:string) => {
      setTodo(todo.filter((task) => {
        return(
          task.taskName != taskToDelete
        )
      }))  
  }

  return (
    <div className="App">
      <div className="first-section">
        <div className="input-container">
          <input type="text" placeholder='Task...' name='task' value={task} onChange={handleChange}/>
          <input type="number" placeholder='Time(in Days)' name='deadline' value={deadline} onChange={handleChange}/>
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="second-section">
        {todo.map((task) => {
          return(
            <Tasks task={task} deleteTask={deleteTask}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
