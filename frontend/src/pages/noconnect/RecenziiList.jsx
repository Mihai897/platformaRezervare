import React from 'react'
import { IoStar } from "react-icons/io5";

const RecenziiList = (props) => {
  return (
    <li key={props.id} className='bg-button1 border border-button/20 px-4 py-3 rounded-lg text-[12.5px]'>
      <div className='flex items-center space-x-3 mb-3'>
        <img className='w-10 h-10 rounded-full object-cover' src={props.img} alt="" />
        <div>
          <p>{props.nume}</p>
          <p className='text-gray-400'>{props.locatie}</p>
        </div>
      </div>
      <div className='flex mb-2 text-yellow-400 space-x-1'>
        {[1,2,3,4,5].map(par=>(
          <IoStar/>
        ))}
      </div>
      <p className='text-gray-400 '>{props.info}</p>
    </li>
  )
}

export default RecenziiList
