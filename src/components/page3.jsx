import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Flex() {
const [style,newstyle]=useState(false);
const Click=()=>{
newstyle(!style)
}
const [text,settext]=useState("Okay Fine")

function Change(){
  settext("Yaaay😁")
}

  return (
    <div className='h-screen flex justify-center items-center'>
        <div className='flex justify-center items-center border-red-300 rounded-3xl border-4 w-96 h-4/5'>
           <img src='../assets/download2.jpg' className='w-80 mb-44 rounded-3xl shadow-md shadow-rose-700 hover:scale-110 transition ease-in-out delay-200'></img>
           <h1 className='absolute mt-56 font-bold text-3xl '>Chalo thik hai 🥲</h1>
           <h1 className='absolute mt-80 font-bold text-2xl'>"NO" pe click krke batao😁</h1>
           <div className='absolute translate-y-56'>
            <button onClick={Change} className='mr-12  border-pink-500 px-4 py-2 items-center border-4 rounded-2xl hover:scale-125 transition ease-in-out delay-150'>{text}</button>
            <button onClick={Click} onMouseOver={Click} className={style?'translate-x-full -translate-y-56 border-pink-500 px-4 py-2 items-center border-4 rounded-2xl ':' border-pink-500 px-4 py-2 items-center border-4 rounded-2xl '}><Link to="/last">Nopee</Link></button>
           </div>
        </div>
    </div>

  )
}

export default Flex;
