import {useState, useContext} from 'react'
import { TaskContext } from '../context/TaskContext'

export function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const { createTask } = useContext(TaskContext)

    const handleSumit = (e) => {
        e.preventDefault();
        createTask({
            title,
            description,
        });
        setTitle("");
        setDescription("");
    };

  return (
    <div>
        <form onSubmit={handleSumit}>
            <h1>Crea tu tarea</h1>
            <input placeholder='Escribe tu tarea'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                autoFocus
            />
            <textarea placeholder='Escribe la descripcion de la tarea'
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            ></textarea>
            <button>guardar</button>
        </form>
    </div>
  );
}

