"use client"
import React, { useState } from 'react'
const page = () => {
  const[title,settitle] =useState("")
  const[disc,setdisc] =useState("")
  const[maintask,settask] =useState([])
  const submitHandler =  (e) => {
    e.preventDefault()
    // if (title!=null){
  settask([...maintask,{title,disc}])
    console.log(maintask)
    settitle("")
    setdisc("")
  }
// }
const deleteHandler= (i)=>{
 let copytask=[...maintask]
copytask.splice(i,1)
settask(copytask)
}
let renderTask= <h2>No Task Available</h2>
if (maintask.length>0) {
  renderTask= maintask.map((t,i)=>{
    return <li className='flex items-center justify-between'>
      <div className='mb-5 w-2/3'>
      <h5 className='text-2xl font-semibold'>
        {t.title}
      </h5>
      <p className='text-xl font-semibold'>
        {t.disc}
      </p>
      
    </div>
    <button className='bg-red-400 px-2 py-2 rounded font-bold mb-5'onClick={()=>{deleteHandler(i)}}>
      Delete
    </button>
    </li>
  })
}  
  return (
    <>
    <h1 className='bg-black text-white p-5 text-xl font-bold text-center'>
      soumya's todo-list</h1>
    <form onSubmit={submitHandler} >
      <input type="text" className='text-xl border-zinc-800 border-2 m-5 p-2'placeholder='enter task here' 
      value={title} 
      onChange={(e)=>{
        settitle(e.target.value)
      }}/>
      <input type="text" className='text-xl border-zinc-800 border-2 m-5 p-2'
      placeholder='enter description here'
      value={disc}
      onChange={(e)=>{
        setdisc(e.target.value)
      }}/>
    <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded'>
      add task</button>
    </form>
    <hr />
    <div className='p-4 bg-slate-300 '>
      <ul>
        {renderTask}
      </ul>
    </div>

    </>
  )
}

export default page
