import { ITasks } from "../Interfaces"
import '../App.css'

interface Tasks{
    task:ITasks;
    deleteTask( taskToDelete:string ):void
}

export const Tasks = ({task, deleteTask}:Tasks) => {

    const deleteTaks = () => {
        task.taskName = '';
        
    }
    return(
        <div className="content-container">
            <div className="content">
                <textarea disabled>{task.taskName}</textarea>
                <textarea disabled>{task.deadline}</textarea>
            </div>
            <button onClick={()=>{
                deleteTask(task.taskName)
            }} className="delete-btn">Delete</button>
        </div>
    )
}