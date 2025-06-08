import React from 'react'
import Create from './components/Create'
const App = () => {
  return (
    <div className='h-screen flex items-center justify-center bg-slate-400'>
    <div className='flex flex-col '>
      <h1 className='text-3xl font-bold my-4'>Todo List</h1>
      <Create/>
    </div>
    </div>
  )
}

export default App