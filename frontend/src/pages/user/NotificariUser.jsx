import React, { useState } from 'react'
import clientData from './client'
import { IoIosArrowDown, IoIosArrowUp, IoIosNotificationsOutline } from "react-icons/io";
import { MdEditCalendar } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiPackage } from "react-icons/fi";
import { RiMegaphoneLine } from "react-icons/ri";
const NotificariUser = () => {
  const [client,setClient]= useState(clientData)
  const iconMapNotificari ={
    confirmari: FaRegCalendarCheck,
    checkin: IoIosNotificationsOutline,
    modificari:MdEditCalendar,
    oferte: MdOutlineLocalOffer,
    reduceri: FiPackage,
    noutati:RiMegaphoneLine
  };
  const [visibleToate,setVisibleToate] = useState(true);
  const [visibleNecitite,setVisibleNecitite] = useState(false);

  const [visibleFiltruPerioada,setVisibleFiltruPerioada]= useState(false);

  const nrToateNotificarile = client[0].notificari.length;
  const nrNotificariNecitite = client[0].notificari.filter(notificare=>notificare.check === false).length
  return (
    <div className='bg-button1/55 max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8  py-10'>
      <p className='text-[22px] font-medium'>Notificari</p>
      <p className='text-gray-400'>Vezi toate notificarile tale.</p>

      <div className='flex modf1:space-x-3 modf1:items-center max-modf1:flex-col max-modf1:space-y-5   modf1:justify-between'>
        <ul className='flex space-x-5 mt-3'>
          <li onClick={()=>{setVisibleToate(true); setVisibleNecitite(false)}} className={`relative cursor-pointer group`}>
            <p className={``}>Toate    <span className='bg-button/30 px-2 py-1 rounded-full ml-1 text-[15px]'>{nrToateNotificarile}</span></p>

            <div className={`w-0 ${visibleToate===true?"w-full":"group-hover:w-full"} transition-all duration-300 ease-in-out  h-0.5 bg-amber-50 absolute -bottom-3 left-0`}></div>
            
          </li>

          
          <li onClick={()=>{setVisibleToate(false); setVisibleNecitite(true)}} className={`relative cursor-pointer group`}>
            <p className={``}>Necitite    <span className='bg-button/30 px-2 py-1 rounded-full ml-1 text-[15px]'>{nrNotificariNecitite}</span></p>

            <div className={`w-0 ${visibleNecitite===true?"w-full":"group-hover:w-full"} transition-all duration-300 ease-in-out  h-0.5 bg-amber-50 absolute -bottom-3 left-0`}></div>
            
          </li>

          
          
          
        </ul>

        <div className='flex modf8:space-x-3 max-modf8:flex-col max-modf8:items-start max-modf8:space-y-3'>
          <button onClick={()=>{ setClient(prev=>
            prev.map(client=>(
              {...client,
                notificari: client.notificari.map(notificare=>(
                  {
                    ...notificare, check: true
                  }
                ))
              }
            ))
          )

          }} className='border px-3 py-1.5 border-button/30 text-button hover:bg-button/30 transition-all duration-300 ease-in-out cursor-pointer'>Marcheaza toate ca citite</button>
          <div className='relative'>
            <button onClick={()=>setVisibleFiltruPerioada(!visibleFiltruPerioada)} className={`border px-3 py-1.5 border-button/30 text-white hover:bg-button/30 transition-all   duration-300 ease-in-out cursor-pointer flex space-x-3 
            items-center ${visibleFiltruPerioada?"bg-button/30 ":"bg-button1"}`}>
              <p>Cele mai recente</p>
              {visibleFiltruPerioada?<IoIosArrowUp/>:<IoIosArrowDown/>}
            </button>
            <ul className={`absolute w-full bg-button1 overflow-hidden transition-all duration-500 ease-in-out ${visibleFiltruPerioada?"max-h-30 opacity-100":"max-h-0 opacity-0"}`}>
              {
                ["Cele mai recente","Cele mai vechi"].map((per,iPer)=>(
                  <li className='px-3 py-1.5 border border-button/30 cursor-pointer hover:bg-button/30 transition-all duration-300 ease-in-out' key={iPer}>
                    {per}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>

      {
        visibleToate && (
          <ul className='mt-6 border border-button/30    space-y-4'>
            {
              client[0].notificari.map((notificare,iNotificare)=>{
                const IconNot = iconMapNotificari[notificare.icon]
                return(
                <li key={iNotificare} className='flex modf2:space-x-3 px-3 transition-all duration-300 ease-in-out max-modf2:flex-col cursor-pointer hover:bg-button/30 modf2:items-center max-modf2:space-y-3 border-y py-3 border-y-button/30 justify-between'>
                  <div className='flex flex-4 modf2:space-x-3 items-start max-modf2:space-y-3 max-modf2:flex-col'>
                    <div className='shrink-0 text-button bg-button/30 px-3 py-3 text-[20px] rounded-full max-modf2:mx-auto'>
                      {IconNot && <IconNot/>}
                    </div>
                    <div>
                      <p>{notificare.nume}</p>
                      <p className='text-gray-400'>{notificare.text}</p>
                    </div>
                  </div>

                  <div className='flex flex-1 justify-between space-x-3 items-center'>
                    <p className='text-gray-400 '>Acum {notificare.primita}</p>
                    {notificare.check===false &&(<div className='w-3 shrink-0 h-3 rounded-full bg-button mt-1'></div>)}
                  </div>
                </li>
              )})
            }
          </ul>
        )
      }
      {
        visibleNecitite && (
          <ul className='mt-6 border border-button/30    space-y-4'>
            {
              client[0].notificari.filter(notif=>notif.check===false).map((notificareNicitita,iNotificareNecitita)=>{
                const IconNot = iconMapNotificari[notificareNicitita.icon]
                return(
                <li key={iNotificareNecitita} className='flex modf2:space-x-3 transition-all duration-300 ease-in-out px-3 max-modf2:flex-col cursor-pointer hover:bg-button/30 modf2:items-center max-modf2:space-y-3 border-y py-3 border-y-button/30 justify-between'>
                  <div className='flex flex-4 modf2:space-x-3 items-start max-modf2:space-y-3 max-modf2:flex-col'>
                    <div className='shrink-0 text-button bg-button/30 px-3 py-3 text-[20px] rounded-full max-modf2:mx-auto'>
                      {IconNot && <IconNot/>}
                    </div>
                    <div>
                      <p>{notificareNicitita.nume}</p>
                      <p className='text-gray-400'>{notificareNicitita.text}</p>
                    </div>
                  </div>

                  <div className='flex flex-1 justify-between space-x-3 items-center'>
                    <p className='text-gray-400 '>Acum {notificareNicitita.primita}</p>
                    {notificareNicitita.check===false &&(<div className='w-3 shrink-0 h-3 rounded-full bg-button mt-1'></div>)}
                  </div>
                </li>
              )})
            }
          </ul>
        )
      }
    </div>
  )
}

export default NotificariUser
