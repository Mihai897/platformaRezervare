import React from 'react'
import OferteList from './OferteList'
import hotels from '../hotels/Hotel/hotels'
const Oferte = () => {
  
  return (
    <div className='pt-15'>

      <div className='max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8 pb-8 '>
        <p className=' text-[24px] font-medium'>Oferte Speciale pentru tine</p>
      </div>
      

      <ul className='flex space-x-3 overflow-x-scroll scrollbar-thin max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8 pb-8'>
        { 

          hotels.map(hotel=>
            hotel?.rooms?.filter(room=>
              room?.oferta?.pretReducere !== "" &&
              room?.oferta?.reducere !== "" &&
              room?.oferta?.bgreducere !== ""  &&
              room?.oferta?.stare === "Activ"
            ).map(component=>
              <OferteList room={component} hotel={hotel}/>
            )
          )
        }


         
      </ul>
    </div>
  )
}

export default Oferte
