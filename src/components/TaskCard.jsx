import React from 'react'

function TaskCard({task}) {
  return (
    <div>
        <h1>{task.title}</h1>
        <p>{ task.description}</p>
        <button>
           eliminar
        </button>
    </div>
  )
}

export default TaskCard