import React from 'react'
import { FaStar } from 'react-icons/fa';
import { MdOutlineVerified } from "react-icons/md";
const ReviewList = (props) => {
  return (
    <li className='flex border px-1 py-4 border-button/40 rounded-lg '>
      <div className='flex-1 pr-3 border-r border-r-button/30'>
        <div className='flex items-center space-x-3'>
          <img className='w-8 h-8 rounded-full' src={props.img} alt="" />
          <div className='text-[14px] leading-5'>
            <p className='font-medium'>{props.nume}</p>
            <p className='text-gray-400'>{props.locatie}</p>
          </div>
        </div>
        <div className='text-[12.5px] flex items-center space-x-2 mt-3 text-lime-400'>
          <MdOutlineVerified size={16}/>
          <p>Cititor verificat</p>
        </div>
      </div>


      <div className='flex-2 px-3 pb-5'>
        <div className='flex items-center justify-between'>
          <div className='flex space-x-1'>
            <FaStar className={`${props.stele1}`}/>
            <FaStar className={`${props.stele2}`}/>
            <FaStar className={`${props.stele3}`}/>
            <FaStar className={`${props.stele4}`}/>
            <FaStar className={`${props.stele5}`}/>
          </div>
          <div>
            <p className='text-gray-400 text-[12.5px]'>{props.perioadaPostare}</p>
          </div>
        </div>

        <div className='mt-3'>
          <p>{props.numeRecenzie}</p>
          <p className='mt-1 text-gray-400 text-[12px]'>{props.textRecenzie}</p>
        </div>
      </div>
    </li>
  )
}

export default ReviewList
