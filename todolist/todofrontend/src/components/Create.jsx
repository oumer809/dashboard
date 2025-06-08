import React, { useState } from 'react'

const Create = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

const addTask = () => {
   if (newTask.trim()) {
     setTasks([...tasks, {
       text: newTask,
       completed: false
      }]); 
       setNewTask('');
    }
};

const toggleTaskCompletion = (index) => {
     const updatedTasks = tasks.map((task, i) => (
      i === index ? { ...task, completed: !task.completed } : task
     ));
    setTasks(updatedTasks);
};

const deleteTask = (index) => {
   const updatedTasks = tasks.filter((_, i) => i !== index);
   setTasks(updatedTasks); };

   return (
  <div className="max-w-full mx-auto p-4 bg-white rounded shadow-md">
    <div className='flex gap-5 '>
         <input
      type="text"
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      placeholder="Add a new task..."
      className="w-full p-2  border border-gray-300 rounded outline-none"
    />
    <button
      onClick={addTask}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Add
    </button>
    </div>
 
    <ul>
      {tasks.map((task, index) => (
        <li key={index} className="flex justify-between py-2 border-b border-gray-300 my-4">
          <span
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            onClick={() => toggleTaskCompletion(index)}
            className="cursor-pointer"
          >
            {task.text}
          </span>
          <button
            onClick={() => deleteTask(index)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);
}

export default Create