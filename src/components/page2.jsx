import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
function Page2() {

const [text,settext]=useState("Thik Hai")
function Change(){
  settext("Yaaay😁")
}

  return (
    <div className='h-screen flex justify-center items-center'>
        <div className='flex justify-center items-center border-red-300 rounded-3xl border-4 w-96 h-4/5'>
           <img src='../assets/download1.jpg' className='w-80 mb-44 rounded-3xl shadow-md shadow-rose-700 hover:scale-110 transition ease-in-out delay-200'></img>
           <h1 className='absolute mt-56 font-bold text-3xl '>Kyu? Kya hua? 🥲</h1>
           <h1 className='absolute mt-80 font-bold text-2xl'>Please ban jao na😭</h1>
           <div className='absolute translate-y-56'>
            <button onClick={Change} className='mr-12  border-pink-500 px-4 py-2 items-center border-4 rounded-2xl hover:scale-125 transition ease-in-out delay-150'>{text}</button>
            <button className='mr-12  border-pink-500 px-4 py-2 items-center border-4 rounded-2xl hover:scale-125 transition ease-in-out delay-150'><Link to="/">Back</Link></button>
            <button className=' border-pink-500 px-4 py-2 items-center border-4 rounded-2xl hover:scale-125 transition ease-in-out delay-150'><Link to="/last">Nahi!</Link></button>
           </div>
        </div>
    </div>
  )
}

export default Page2
