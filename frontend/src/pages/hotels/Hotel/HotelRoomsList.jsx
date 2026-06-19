import React, { useState } from 'react'
import { Link, useNavigate, useOutletContext } from 'react-router-dom'
import RoomSideBar1 from './RoomSideBar1';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FiWind } from "react-icons/fi";
import { FaWifi } from "react-icons/fa";
import { BiCabinet } from "react-icons/bi";
import { IoTvOutline } from "react-icons/io5";
import { AiFillBank } from "react-icons/ai";
import { PiHairDryer } from "react-icons/pi";


const HotelRoomsList = () => {
  const {hotel} = useOutletContext();
  const [visibleSide, setVisibleSide] = useState(false);
  const iconMap = {
    Aer:FiWind,
    WIFI: FaWifi,
    Minibar:BiCabinet,
    TV:IoTvOutline,
    Seif:AiFillBank,
    Uscator:PiHairDryer
  }
  const navigate = useNavigate()
  return (
    <div className='max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8'>
      <div className=' bg-button1 border border-button/40 rounded-b-xl px-4 py-4'>
        <p className='text-[24px] font-medium'>Alege camera perfecta pentru tine</p>
        <div className='mt-4 '>
          <div className='relative flex justify-between'>
            <button className='cursor-pointer px-4 border py-1 rounded-sm border-button/50 ' onClick={()=>setVisibleSide(!visibleSide)} >Filtreaza camerele</button>
            <RoomSideBar1 visibleSide={visibleSide}/>
            <div className=' flex items-center space-x-4 max-modf2:hidden'>
              <p className=''>Sorteaza dupa:</p>
              <button className='px-4 border py-1 rounded-sm border-button/50 flex cursor-pointer items-center space-x-4'><p>Recomandate</p> <IoIosArrowDown/></button>
            </div>
          </div>
          <div className='flex max-modf1:space-x-4 relative'>
          
            <div className='w-full '>
            
                <ul>
                  {
                    hotel?.rooms?.map((par,i)=>(
                      <li key={i} className=' border flex max-modf1:flex-col modf1:space-x-4 px-4 py-4 mt-3 rounded-lg  border-button/30 relative'>
                        <div className='absolute top-3 right-0 max-modf1:right-3'>
                          <FaRegHeart className='cursor-pointer'/>
                        </div>
                        <div className='modf1:flex-3 flex max-modf2:flex-col space-x-3 modf1:border-r modf1:border-r-button/30 items-center'>

                          <div className='flex-1 h-40 max-modf2:mt-6 w-full'>
                            <div className='overflow-hidden border max-modf1:h-40 max-modf2:h-60 h-full border-button/40 rounded-lg'>
                              <img className='w-full h-full object-center rounded-lg  hover:scale-110 transition-all duration-400 ' src={par.image} alt="" />
                            </div>
                          </div>

                          <div className='flex-2'>
                            <Link to={par.slugs} className='font-medium text-[18px] max-modf1:mt-3'>{par.title}</Link>

                            <div className='flex text-gray-400 text-[14px] space-x-5 max-modf:space-x-1.5 mt-1 items-end flex-wrap'>
                              <p className=''>{par.dimensiune}m<sapn className="align-super text-[10px]">2</sapn></p>
                              <p>{par.tipVedere}</p>
                              <p>Max: {par.nrPersoane}</p>
                              <p>{par.tipulPatului}</p>
                            </div>
                            <div>
                              <p className='text-gray-400 text-[14px] my-3'>{par.descriereCamera}</p>
                            </div>

                            <div>
                              <ul className='grid grid-cols-3 max-modf:grid-cols-2 max-modf1:1'>
                                {par?.facilitatiCamera?.slice(0,6).map((par1,i1)=>{
                                const Icon = iconMap[par?.iconiteFacilitati[i1]]
                                return(
                                  <li className='text-[14px] mr-1 text-gray-400'>
                                    <div className='flex items-center space-x-1'>
                                      {Icon && <Icon  className="text-button"/>}
                                      <p>{par1}</p>
                                    </div>
                                  </li>
                                )})}
                              </ul>
                            </div>
                            
                          </div>
                        </div>

                        <div className='flex modf1:flex-1 flex-col   justify-center text-[14px]'>
                          
                          <div className='mt-5'>
                            <p className='text-gray-400'>{par.include}</p>
                            
                            <p className='mt-2 text-lime-600'>{par.anulareGratuita}</p>
                            <p className='text-gray-400 mt-2'><span className='text-white font-medium text-[26px]'>{par.price}</span> <span className='text-[18px]'>RON</span> / noapte</p>

                            <div>
                              <button onClick={()=>navigate(par.slugs)} className='bg-button w-full rounded-lg py-2 mt-3 cursor-pointer'>
                                Selecteaza
                              </button>
                            </div>
                          </div>
                          

                          
                        </div>
                        
                      </li>
                    ))
                  }
                </ul>
          


            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default HotelRoomsList
