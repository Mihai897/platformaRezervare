import React from 'react'
import RecenziiList from './RecenziiList'
import recenzii from './recenzii.json'
import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
const Recenzii = () => {
  const createRecenziiList = (component)=>{
    return <RecenziiList 
      id = {component.id}
      key = {component.id}
      img = {component.img}
      nume = {component.nume}
      locatie = {component.locatie}
      info = {component.info}
    />
  }
  const navigate = useNavigate();
  return (
    <div className='max-w-screen-2xl mx-auto px-15 max-modf:px-10  max-modf1:px-8'>
      
      <div className=' flex justify-between space-x-3'>
        <p className='text-[24px] max-modf8:text-[19px] font-medium'>Ce spun utilizatorii despre noi</p>
        <button onClick={()=>navigate("/review")} className='text-button cursor-pointer flex items-center space-x-1.5 bg'>
          <p >Vezi toate recenziile</p>
          <FaArrowRight size={12}/>
        </button>
      </div>

      <ul className='grid grid-cols-4 gap-4 mt-6 max-modf:grid-cols-2 max-modf2:grid-cols-1'>
        {recenzii && recenzii.map(createRecenziiList)}
      </ul>
    </div>
  )
}

export default Recenzii
