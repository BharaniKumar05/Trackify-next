import { useState, useEffect } from 'react'

export default function TaskList() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('trackify-tasks')) || []
    setTasks(stored)
  }, [])

  return (
    <ul>
      {tasks.length === 0 ? (
        <li>No tasks found</li>
      ) : (
        tasks.map((task, index) => (
          <li key={index}>
            {task.task} - Due on {task.dueDate}
          </li>
        ))
      )}
    </ul>
  )
}
