'use client'
import React from 'react'
import { useState } from 'react';
type Props = Todo

function Todo({ props }: Props) {
    const [iscom, setIsCom] = useState(false);

    function handleChange(){
        console.log('asdas')
    }
  return (
    <div className='py-2 w-screen lg:w-3/6 px-20 flex justify-center items-center'>
           <div className='w-2/3'>
           <p className={`truncate text-sm lg:text-base w-full text-teal-200 ${props.isCompleted?('line-through'):(' ')}`}>{props.title}</p>
           </div>
           <div className='w-1/3   px-10 grid grid-cols-2 min-w-1/3'>
              <input onChange={handleChange} type="checkbox" name="" id="" defaultChecked={props.isCompleted} />
              <div className='text-xs  min-w-min cursor-pointer col-span-1 p-2 border border-red-500 text-red-500 flex justify-center items-center'>
                  Remove
              </div>
           </div>
    </div>
  )
}

export default Todo