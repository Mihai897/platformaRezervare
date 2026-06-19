import React from 'react'
import HoteluriList from './HoteluriList'
import hotels from './Hotel/hotels'
const Hoteluri = () => {
 
  return (
    <ul className='space-y-8 mt-4'>
      {
        hotels.map((component)=>(
          <HoteluriList hotel={component} />
        ))
      }
      
    </ul>
  )
}

export default Hoteluri
