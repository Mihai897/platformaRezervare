import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HotelPrezentare = () => {
  const {hotel} = useOutletContext();
  return (
    
    <div className=' max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8'>
      <div className=' bg-button1 border border-button/40 rounded-b-xl px-4 py-4 '>
        <div className='flex modf1:space-x-15 max-modf:space-x-10 modf1:items-center max-modf1:flex-col max-modf:space-y-4'>
          <div className='flex-2'>
            <p className='text-[24px] font-medium'>Despre proprietate</p>
            <p className='text-gray-400 mt-4'>{hotel?.descriere}</p>
            
          </div>
          <div className='flex-1'>
            <ul className='bg-button/40 px-10 py-4 rounded-lg space-y-3 list-disc modf:ml-4 max-modf1:columns-2 max-modf2:columns-1 marker:text-button'>
              <li>Check-in: 14:00</li>
              <li>Check-out: 19:00</li>
              <li>Receptie: 24/7</li>
              <li>Limbi vorbite: Engleza, Italiana</li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default HotelPrezentare
