import React from 'react'
import { IoMdStar } from "react-icons/io";
import { Link } from 'react-router-dom';

const OferteList = ({hotel,room}) => {
  
  return (
    <Link to={`/hotels/${hotel.slug}/camere/${room.slugs}`} className='w-[35%] max-modf:w-[50%] max-modf1:w-[60%] max-modf2:w-[70%] shrink-0 relative group overflow-hidden border border-button/20 rounded-lg h-70'>
      
      <img className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out' src={room?.image} alt="" />
      <p className={`absolute ${room.oferta?.bgreducere} top-4 left-4 rounded-xl px-3 py-1.5`}>{room.oferta?.reducere}</p>
      <div className='absolute bottom-0 bg-background/65 w-full py-3'>
        <div className='px-4'>
          <p className='font-medium '>{hotel.nume}, <span className='text-gray-400 text-[14px]'>{room.title}</span></p>
          
          <div className='flex space-x-3'>
            <div className='flex items-center text-orange-400'>
              <IoMdStar className='mr-1'/>
              <p>{room.recenzieCamera}</p>
            </div>
            <p className='text-gray-300'>( {room.recenziePers} )</p>
          </div>
          <p>De la <span className='text-button font-medium'>{room.price} RON</span> <span className='text-gray-400 ml-1.5 line-through'>{room.oferta?.pretReducere}</span></p>
        </div>
      </div>
    </Link>
  )
}

export default OferteList
