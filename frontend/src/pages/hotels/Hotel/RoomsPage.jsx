import React from 'react'
import { Outlet, useLocation, useMatch, useNavigate, useParams } from 'react-router-dom'
import hotels from './hotels'
import { FaArrowLeftLong } from "react-icons/fa6";

const RoomsPage = () => {
  const { slug, roomSlug } = useParams();
  const hotel = hotels.find(h => h.slug === slug);
  const room = hotel.rooms.find(r => r.slugs === roomSlug);
  const navigate = useNavigate();

  const location = useLocation();
  const showRoom = location.pathname === `/hotels/${slug}/camere/${roomSlug}`
  return (
    <div className='bg-button1/70 py-4 border-y border-y-button/15'>
      
    

      {showRoom && <div className='max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8 '>

        <div className='pb-4'>
          <button onClick={()=>navigate(`/hotels/${hotel.slug}/camere`)} className='border px-4 py-1 border-button/40 rounded-lg flex space-x-1.5 items-center cursor-pointer hover:bg-button/60 transition-all duration-300 ease-in-out'>
            <FaArrowLeftLong className='mt-0.5'/>
            <p>Inapoi la camere</p>
            
          </button>
        </div>
        
        <div className='flex text-[14px] pb-4 modf2:items-center max-modf2:flex-col space-x-4'>
          <p className='text-[24px] font-medium'>{room.title}</p>
          <div className='flex space-x-4 max-modf2:space-x-2'>
            <p className='border px-3 bg-button/30 text-button border-button rounded-sm mt-1'>{room.recomandare}</p>
            <p className=' px-3 bg-blue-600 rounded-sm mt-1'>{hotel.nrRecenzie}</p>
            <p className='text-gray-400 mt-0.5'>({hotel.textRecenzie})</p>
          </div>
        </div>
        



       
        <div className='flex flex-col space-y-3'>
          <div className='w-full h-125 max-modf1:h-100 max-modf2:h-80 max-modf8:h-60  0'>
            <img className='w-full h-full object-center rounded-sm' src={room.image} alt="" />
          </div>

          <ul className='grid max-modf2:hidden grid-cols-5 gap-3'>
            {
              room.imaginiCamera.slice(0,4).map((imagine,iImagine)=>(
                <li key={iImagine} className='h-full'>
                  
                  <img className='w-full h-full object-center rounded-sm' src={imagine} alt="" />
              
                </li>
                
              ))
              
            }
            <li className='relative h-full'>
              <img className='object-center rounded-sm w-full h-full' src={room.image}/>
              <div className='absolute bg-black/70 top-0 w-full h-full flex justify-center items-center flex-col cursor-pointer'>
                <p className='font-medium text-[27px] max-modf1:text-2xl'>11+</p>
                <p className='text-[10px] max-modf1:text-[8px]'>Vezi toate fotografiile</p>
              </div>
            </li>
          </ul>
          <ul className='grid modf2:hidden grid-cols-3  gap-3'>
            {
              room.imaginiCamera.slice(0,2).map((imagine,iImagine)=>(
                <li key={iImagine} className='h-full'>
                  
                  <img className='w-full h-full object-center rounded-sm' src={imagine} alt="" />
              
                </li>
                
              ))
              
            }
            <li className='relative h-full'>
              <img className='object-center rounded-sm w-full h-full' src={room.image}/>
              <div className='absolute bg-black/70 top-0 w-full h-full flex justify-center items-center flex-col cursor-pointer'>
                <p className='font-medium text-[27px] max-modf1:text-2xl'>11+</p>
                <p className='text-[10px] max-modf1:text-[8px]'>Vezi toate fotografiile</p>
              </div>
            </li>
          </ul>

          
        </div>


        <div className='mt-4 text-center'> 
          <button onClick={()=>navigate("rezervare")} className='bg-button px-6 font-medium text-[20px] rounded-lg py-2 w-[50%] max-modf8:w-full cursor-pointer'>Rezerva acum</button>
        </div>

        <div className='mt-4 border px-4 py-4 border-button/30 rounded-lg'>

          <p className='text-[24px] font-medium'>Despre aceasta camera</p>
          <div className='text-gray-400'>
            <ul>
              {room.despreCamera.map((par,i)=>(
                <li className='mt-2'>{par}</li>
              ))}
            </ul>
          </div>
          

          <div className=' mt-4 py-4 border-y border-y-button/30 text-gray-400 grid grid-cols-4 max-modf1:grid-cols-2 gap-5 max-modf8:grid-cols-1 max-modf:gap-3 text-center'>
            <div className='border px-4 py-3 rounded-lg border-button/30'>
              <p>Pat</p>
              <p>{room.tipulPatului}</p>
            </div>
            <div className='border px-4 py-3 rounded-lg border-button/30'>
              <p>Capacitate</p>
              <p>{room.nrPersoane}</p>
            </div>
            <div className='border px-4 py-3 rounded-lg border-button/30'>
              <p>Dimensiune</p><p>{room.dimensiune} m<span className='align-super text-[9px]'>3</span></p>
            </div>
            <div className='border px-4 py-3 rounded-lg border-button/30'>
              <p>Vedere</p>
              <p>{room.tipVedere}</p>
            </div>
          </div>

          <p className='font-medium mt-4'>Facilitati camera</p>
          <ul className='mt-2 grid grid-cols-3 max-modf1:grid-cols-2 max-modf8:grid-cols-1 max-modf2:gap-x-8 list-disc ml-4  gap-x-2'>
            {room?.facilitatiCamera.map((par,i)=>(
                <li className=' text-gray-400 marker:text-button text-[15px] max-modf2:text-[14px]'>
                  <p>{par}</p>
                </li>
              )
            )}
          </ul>
        </div>
        
        
        
      </div>}

      <Outlet  context={{hotel,room}}/>
    </div>
  )
}

export default RoomsPage
