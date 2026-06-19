import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { FaStar, FaUserGroup } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa6";
import { MdFamilyRestroom } from "react-icons/md";
import { IoTimerOutline } from "react-icons/io5";
import { FaWarehouse } from "react-icons/fa6";
import { BiSolidLike } from "react-icons/bi";

const HotelRecenziiLista = () => {
  const {hotel}= useOutletContext();
  const iconMapCalator = {
    Cuplu: FaUserGroup,
    Singur: FaUserTie,
    Familie: MdFamilyRestroom
  }
  const iconMapPerioada = {
    Perioada:IoTimerOutline
  }
  const iconMapRoom = {
    Room:FaWarehouse
  }

  return (
    <ul>
      {hotel?.rooms?.map((par,i)=>(
        <li key={i}>
          
          <ul className='space-y-4 '>

            {par?.recenzii?.map((par1,i1)=>{
              const Icon = iconMapCalator[par1.iconCalator]
              const IconPerioada = iconMapPerioada[par1.iconPerioada]
              const IconRoom = iconMapRoom[par1.iconRoom]
              return(
              <li key={i1} className='flex max-modf1:flex-col  border px-4 py-4 border-button/30 rounded-lg'>

                <div className='flex-1 modf1:border-r modf1:border-r-button/30 modf1:pr-4  flex flex-col justify-center '>
                  <div className='flex space-x-3 items-center '>
                    <div className='w-10 h-10 rounded-full'>
                      <img className='rounded-full h-full' src={par1.imgProfil} alt="" />
                    </div>
                    <div>
                      <div>
                        <p>{par1?.numeUser}</p>
                      </div>
                      <p className='-mt-1 text-gray-400 text-[15px]'>{par1?.tara}</p>
                    </div>
                  </div>

                  <div className='text-gray-300 mt-1.5 max-modf1:flex max-modf1:justify-between max-modf2:flex-col '>
                    <div className='flex items-center space-x-3'>
                      {Icon && <Icon  className="text-button"/>}
                      <p>{par1.tipCalator}</p>
                    </div>

                    <div className='flex items-center space-x-3'>
                      {Icon && <IconPerioada className="text-button"/>}
                      <p>{par1.perioada}</p>
                    </div>

                    <div className='flex items-center space-x-3'>
                      {Icon && <IconRoom className="text-button"/>}
                      <p>{par.title}</p>
                    </div>
                    
                    
                  </div>
                </div>


                <div className='flex-2 max-modf:mt-2  modf1:pl-4'>
                  <div className='flex items-center space-x-3 text-gray-400'>
                    <div className='flex space-x-1'>
                      {[1,2,3,4,5].map(star=><FaStar className={star<=Math.round(par1.nrRecenzieCamera) ? "text-yellow-400" : "text-gray-400"}/>)}
                    </div>
                    <p>{par1.nrRecenzieCamera}</p>
                    <p>Acum {par1.timpPostare}</p>
                  </div>

                  <div>
                    <p className='font-medium'>{par1.titluRecenzieCamera}</p>
                  </div>
                  <div>
                    <p className='mt-1 text-[15px] text-gray-400'>{par1.descriereRecenzieCamera}</p>
                  </div>

                  <div className='text-[15px] flex modf2:items-center space-x-5 text-gray-400 mt-1 max-modf2:flex-col'>
                    <p>A fost utila aceasta recenzie?</p>
                    <div className='flex space-x-3 max-modf2:mt-2 max-modf2:justify-between'>
                      <button className='border px-4 py-0.75 border-button/30 rounded-sm flex items-center space-x-1.5'>
                        <BiSolidLike className='text-button text-[18px]'/>
                        <p>14</p>
                      </button>
                      <button className='border px-4 py-0.75 border-button/30 rounded-sm'>Raspunde</button>
                    </div>
                  </div>
                  
                </div>

              </li>
            )})}
          </ul>
        </li>
      ))}
    </ul>
  )
}

export default HotelRecenziiLista
