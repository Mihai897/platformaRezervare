import React from 'react'
import OferteleList from './OferteleList'
import hotels from '../hotels/Hotel/hotels'
const Ofertele = () => {
 
  return (
    <ul className='space-y-8 mt-4'>
      {
      
      hotels.map(hotel=>
        hotel?.rooms?.filter(room=>
          room?.oferta?.pretReducere !== "" &&
          room?.oferta?.reducere !== "" &&
          room?.oferta?.bgreducere !== "" &&
          room?.oferta?.stare === "Activ"
        ).map(component=>
          <OferteleList room={component} oferte={hotel}/>
        )
      )
      
      
     
      }
    </ul>
  )
}

export default Ofertele
