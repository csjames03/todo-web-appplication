'use client'
import React from 'react'
import { useState } from 'react';
import { modifyIsCompleteAction, deleteTodoAction } from '../_actions';
type Props = {
    props: Todo;
}

function Todo({ props }: Props) {
    const [iscom, setIsCom] = useState(false);

    async function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
        if(props.isCompleted){
            modifyIsCompleteAction(props.id.toString(), false)
        }else{
            modifyIsCompleteAction(props.id.toString(), true)
        }
    }

    async function handleDelete(){
        deleteTodoAction(props.id.toString())
    }
  return (
    <div className='py-2 w-screen lg:w-3/6 px-5 ml-5  md:px-20 flex justify-center items-center'>
           <div className='w-1/2 md:w-2/3'>
           <p className={`truncate text-sm lg:text-base w-full text-teal-200 ${props.isCompleted?('line-through'):(' ')}`}>{props.title}</p>
           </div>
           <div className='w-3/6 md:w-1/3   px-10 grid grid-cols-2 min-w-1/3'>
              <input className='w-10' onChange={handleChange} type="checkbox" name="" id="" defaultChecked={props.isCompleted} />
              <div onClick={handleDelete} className='text-xs  min-w-min cursor-pointer col-span-1 p-2 border border-red-500 text-red-500 flex justify-center items-center'>
                  Remove
              </div>
           </div>
    </div>
  )
}

export default Todo