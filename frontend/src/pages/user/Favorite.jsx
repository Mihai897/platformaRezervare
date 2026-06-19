import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowForward, IoIosArrowUp } from "react-icons/io";
import { RiResetRightFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import hotels from '../hotels/Hotel/hotels';
import { useNavigate } from 'react-router-dom';
const Favorite = () => {
  const [visibleSort,setVisibleSort] = useState(false);
  const navigate = useNavigate();
  const [visibleMoreHotels,setVisibleMoreHotels] = useState(2);
  const [visibleMoreRooms,setVisibleMoreRooms] = useState(2);
  const [visibleBarFiltreaza,setVisibleBarFiltreaza] = useState(false);
  const showMoreHotels = ()=>{
    setVisibleMoreHotels(prev=>prev+2);
  }
  const showMoreRooms = ()=>{
    setVisibleMoreRooms(prev=>prev+2);
  }
  const nrHotelFavorite  = hotels.filter(fav=>fav.favoriteHotel===true).length;

  const nrRoomsFavorite = hotels.flatMap(hotel=>
    hotel.rooms.map(room=>({
      hotel,room
    }))
  ).filter(roomFav=>roomFav.room.favoriteCamera===true).length;


  const [visibleFac,setVisibleFac] = useState(5);

  const show3FacPlus = ()=>{
    setVisibleFac(prev=>prev+3)
  }

  const shoe5Fac= ()=>{
    setVisibleFac(prev=>prev-3)
  }



  return (
    <div className='bg-button1/55 max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8  py-10'>
      <p className='text-[22px] font-medium'>Favorite</p>
      <p className='text-gray-400'>Hotelurile si camerele tale preferate, salvate pentru urmatoarea calatorie.</p>
      <div className='flex items-center space-x-3 justify-end'>
        <p className='text-gray-400'>Sorteaza dupa:</p>
        <div className='relative'>
          <button onClick={()=>setVisibleSort(!visibleSort)} className={`flex items-center space-x-3 border px-3 hover:bg-button/60 ${visibleSort?"rounded-t-sm bg-button/60":"rounded-sm"} transition-all duration-300 ease-in-out py-1.5  cursor-pointer ho border-button/30`}>
            <p>Cele mai recente</p>
            {visibleSort?<IoIosArrowUp/>:<IoIosArrowDown/>}
          </button>
          <ul className={`absolute z-500 overflow-hidden transition-all duration-500 ${visibleSort?"max-h-50 opacity-100":"max-h-0 opacity-0"} ease-in-out bg-button1 w-full`}>
            {
              ["Cele mai recente", "Cele mai vechi","Camere","Hoteluri"].map((sort,isort)=>{
                return (
                  <li className='border-button/30 border px-3 py-1.5 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out'>
                    {sort}
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>


      <div className='mt-5 flex space-x-3 items-start max-modf6:flex-col max-modf6:space-y-3'>

        <div className='border-button/20 bg-button1 border w-75 max-modf6:w-full rounded-lg shrink-0 px-3 py-3 shadow-lg'>
          <div className='flex space-x-3 justify-between'>
            <button onClick={()=>setVisibleBarFiltreaza(!visibleBarFiltreaza)} className='cursor-pointer hover:text-button/80 transition-all duration-300 ease-in-out'>Filtreaza</button>
            <button className='flex space-x-1.5 text-button cursor-pointer hover:text-button/80 transition-all duration-300 ease-in-out items-center'>
              <RiResetRightFill/>
              <p>Reseteaza</p>
            </button>
          </div>
          

            
          <div className={`${visibleBarFiltreaza?"max-h-500 opacity-100": "max-h-0 opacity-0"} overflow-hidden transition-all duration-500 ease-in-out`}>
            <div className='mt-3 border-button/30 pt-3 border-t'>
              <p>Rating</p>

              <ul className='mt-1.5 space-y-1.5'>
                {
                  [{nume:"5 stele",nr:5},{nume:"4 stele",nr:4},{nume:"3 stele",nr:3},{nume:"2 stele",nr:2}, {nume:"1 stea",nr:1}].map((star,iStar)=>(
                    <li key={iStar} className='flex items-center space-x-1.5'>
                      <input type="checkbox" name="" id="" />
                      <div className='flex space-x-1.5 items-center'>
                        <ul className='flex space-x-1.5'>
                          {[5,4,3,2,1].map((stele,iStele)=>(
                            <li key={iStele} className={`${star.nr>5-stele?"text-yellow-400":"text-gray-400"}`}>
                              <FaStar/>
                              
                            </li>
                          ))}
                        </ul>
                        <p className='text-gray-400'>{star.nume}</p>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>

            <div className='border-t mt-3 border-button/30 py-3'>
              <p>Facilitati</p>
              <ul className={`space-y-1.5 mt-1.5`}>
                {
                  hotels[0].rooms[0].facilitatiCamera.slice(0,visibleFac).map((fac,ifac)=>(
                    <li key={ifac} className='flex space-x-3 items-center'>
                      <input type="checkbox" name="" id="" />
                      <p>{fac}</p>
                    </li>
                  ))
                }
              </ul>
              <div className='flex space-x-3'>
                {
                  visibleFac<hotels[0].rooms[0].facilitatiCamera.length && (
                    <button onClick={show3FacPlus} className='text-button mt-1.5 cursor-pointer hover:text-button/80 transition-all flex items-center space-x-1.5 duration-300 ease-in-out'>
                      <p>Vezi mai multe</p>
                      <IoIosArrowDown/>
                    </button>
                  )
                }
                {
                  visibleFac>=8 && (
                    <button onClick={shoe5Fac} className='text-button mt-1.5 cursor-pointer hover:text-button/80 transition-all duration-300 ease-in-out flex items-center space-x-1.5'>
                      <p>Vezi mai putine</p>
                      <IoIosArrowUp/>
                    </button>
                  )
                }
              </div>
            </div>

            <div className='mt-5 '>
              <button className='hover:bg-button/80 transition-all duration-300 ease-in-out cursor-pointer w-full bg-button px-3 py-1.5 rounded-lg'>Aplica filtrele</button>
            </div>
          </div>
            
         
        </div>


        <div className='border border-button/20 bg-button1 space-y-6 w-full rounded-lg px-3 py-3 shadow-lg'>


          <div >
            <p>Lista cu hotelurile tale favorite:</p>
            <ul className='mt-3 space-y-3'>
              {hotels.filter(hotelFav=>hotelFav.favoriteHotel===true).slice(0,visibleMoreHotels).map((hotel,iHotel)=>(
                <li key={hotel.id} className='border border-button/30 px-3 py-3 rounded-lg flex space-x-3 text-[15px] max-modf1:flex-col max-modf1:space-y-3'>
                  <div className='flex-2 flex modf8:space-x-3 max-modf8:w-full items-center max-modf8:flex-col max-modf8:items-start'>
                    <div className='w-40 max-modf8:w-full max-modf8:h-50 h-35 shrink-0 rounded-lg border border-button/30'>
                      <img className='w-full h-full shrink-0 object-center rounded-lg' src={hotel.img} alt="" />
                    </div>

                    <div className='max-modf8:mt-2'>
                      <p className='text-[19px]'>{hotel.nume}</p>
                      <p className='text-gray-400'>{hotel.locatie}</p>
                      <div className='flex space-x-3 mt-1'>
                        <div className='bg-button/30 px-3 py-2 rounded-lg'>
                          <p>{hotel.nrRecenzie}</p>
                        </div>
                        <div>
                          <ul className='flex space-x-1'>
                            {
                              [1,2,3,4,5].map((star,iStar)=>(
                                <li className={`${star<=Math.round(hotel.nrRecenzie)?"text-yellow-400":"text-gray-400"}`}>
                                  <FaStar/>
                                </li>
                              ))
                            }
                          </ul>
                          <p className='text-gray-400 text-[15px] mt-1'>{hotel.textRecenzie}</p>
                        </div>
                      </div>

                      <div className='mt-1 flex space-x-2 text-gray-400'>
                        <p>{hotel.facilitate}</p>
                        <p>{hotel.facilitate1}</p>
                      </div>
                      
                      <div>
                        <p className='text-green-400'>{hotel.anulareGratuita}</p>
                        <p className='text-gray-400 text-[15px]'>{hotel.dataAnulare}</p>
                      </div>


                    </div>
                    
                  </div>
                  <div className='flex-1 modf1:border-l modf1:pl-3 flex modf1:border-l-button/30 items-end'>
                    <button onClick={()=>navigate(`/hotels/${hotel.slug}`)} className='bg-button w-full px-3 py-1.5 rounded-lg cursor-pointer hover:bg-button/80 transition-all duration-300 ease-in-out'>Vezi detalii</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className='mt-2 flex items-start'>
              {
                visibleMoreHotels < nrHotelFavorite && (
                  <button onClick={showMoreHotels} className='text-button hover:text-button/80 transition-all duration-300 ease-in-out cursor-pointer'>Vezi mai multe hoteluri</button>
                )
              }
              {
                visibleMoreHotels >= nrHotelFavorite && 
                <button onClick={()=>setVisibleMoreHotels(2)} className='text-button hover:text-button/80 transition-all duration-300 ease-in-out cursor-pointer'>Vezi mai putine hoteluri</button>
              }
            </div>
          </div>

          <div className='border-t border-t-button/60'>
            <p className='mt-6 '>Lista cu camerele tale favorite:</p>
            <ul className='mt-3 space-y-3'>
              {
                hotels.flatMap(hotel=>
                  hotel.rooms.map(room=>({
                    hotel,
                    room
                  }))
                )
                .filter(favCam=>favCam.room.favoriteCamera === true).slice(0,visibleMoreRooms).map((item,iItem)=>(
                  <li key={item.room.codCamer} className='border border-button/30 px-3 py-3 rounded-lg flex space-x-3 text-[15px] max-modf1:flex-col max-modf1:space-y-3'>
                    <div className='flex-2 flex modf8:space-x-3 max-modf8:w-full items-center max-modf8:flex-col max-modf8:items-start'>
                      <div className='w-40 max-modf8:w-full max-modf8:h-50 h-35 shrink-0 rounded-lg border border-button/30'>
                        <img className='w-full h-full shrink-0 object-center rounded-lg' src={item.room.image} alt="" />
                      </div>

                      <div className='max-modf8:mt-2'>
                        <p className='text-[19px]'>{item.hotel.nume}, <span className='text-gray-400 text-[14px]'>{item.room.title}</span></p>
                        <p className='text-gray-400'>{item.hotel.locatie}</p>
                        <div className='flex space-x-3 mt-1'>
                          <div className='bg-button/30 px-3 py-2 rounded-lg'>
                            <p>{item.room.recenzieCamera}</p>
                          </div>
                          <div>
                            <ul className='flex space-x-1'>
                              {
                                [1,2,3,4,5].map((star,iStar)=>(
                                  <li className={`${star<=Math.round(item.room.recenzieCamera)?"text-yellow-400":"text-gray-400"}`}>
                                    <FaStar/>
                                  </li>
                                ))
                              }
                            </ul>
                            <p className='text-gray-400 text-[15px] mt-1'>{item.room.recenziePers}</p>
                          </div>
                        </div>

                        <div className='mt-1 flex space-x-2 text-gray-400'>
                          <p>{item.hotel.facilitate}</p>
                          <p>{item.hotel.facilitate1}</p>
                        </div>
                        
                        <div>
                          <p className='text-green-400'>{item.hotel.anulareGratuita}</p>
                          <p className='text-gray-400 text-[15px]'>{item.hotel.dataAnulare}</p>
                        </div>


                      </div>
                      
                    </div>
                    <div className='flex-1 modf1:border-l modf1:pl-3 flex modf1:border-l-button/30 items-end relative'>
                      {
                        item.room.oferta.stare ==="Activ" && <div className='absolute max-modf1:right-0 top-0'>
                        <p className={`${item.room.oferta.bgreducere} px-2 py-1 rounded-lg`}>{item.room.oferta.reducere}</p>
                      </div>
                      }
                              
                      <div className='w-full '>
                        { item.room?.oferta?.stare === "Activ" && <p className='text-gray-400 line-through'>{item.room.price} RON</p>}
                        <p className='text-[20px]'>{item.room?.oferta?.stare === "Activ"?item.room.oferta.pretReducere:`${item.room.price} RON` } <span className='text-gray-400 text-[15px]'>/noapte</span></p>
                        <button onClick={()=>navigate(`/hotels/${item.hotel.slug}/camere/${item.room.slugs}`)} className='bg-button w-full px-3 mt-1.5 py-1.5 rounded-lg cursor-pointer hover:bg-button/80 transition-all duration-300 ease-in-out'>Vezi detalii</button>
                      </div>
                    </div>
                </li>
                ))
              }
            </ul>
            <div className='mt-2 flex items-start'>
              {
                visibleMoreRooms < nrRoomsFavorite && (
                  <button onClick={showMoreRooms} className='text-button hover:text-button/80 transition-all duration-300 ease-in-out cursor-pointer'>Vezi mai multe camere</button>
                )
              }
              {
                visibleMoreRooms >= nrRoomsFavorite && (
                  <button onClick={()=>setVisibleMoreRooms(2)} className='text-button hover:text-button/80 transition-all duration-300 ease-in-out cursor-pointer'>Vezi mai putine camere</button>
                )
              }
            </div>
          </div>




        </div>

      </div>
    </div>
  )
}

export default Favorite
