import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Page1() {

const [text,settext]=useState("Yes")

function Change(){
  settext("Yaaay😁")
}

  return (
    <div className='h-screen flex justify-center items-center'>
        <div className='flex justify-center items-center border-red-300 rounded-3xl border-4 w-96 h-4/5'>
           <img src='../assets/download.png' className='w-80 mb-44 rounded-3xl shadow-md shadow-rose-700 hover:scale-110 transition ease-in-out delay-200'></img>
           <h1 className='absolute mt-10 font-bold text-xl'>Hi Tasmiya</h1>
           <h1 className='absolute mt-56 font-bold text-3xl bg-gradient-to-r from-violet-800 via-rose-600 to-pink-500 text-clip bg-clip-text text-transparent '>You are so pretty </h1>
           <h1 className='absolute mt-80 font-bold text-2xl'>Will you be a my girlfriend?😁</h1>
           <div className='absolute translate-y-56'>
            <button onClick={Change} className='mr-36  border-pink-500 px-4 py-2 items-center border-4 rounded-2xl hover:scale-125 transition ease-in-out delay-150'>{text}</button>
            <button className=' border-pink-500 px-4 py-2 items-center border-4 rounded-2xl hover:scale-125 transition ease-in-out delay-150'><Link to="/page1">No</Link></button>
           </div>
        </div>
    </div>
  )
}

export default Page1
