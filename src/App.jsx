import TaskList from './components/TaskList';
import { TaskForm } from './components/TaskForm'
import { tasks as data} from './data/tasks.js'
import { useState, useEffect } from 'react';


export function App() {

  const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(data)
    },[])

    function createTask(task ) {
      setTasks([...tasks,{
        title: task.title,
        id: tasks.length,
        description: task.description
      }])
    }

  return (
    <>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks}/>
    </>
  )
}

