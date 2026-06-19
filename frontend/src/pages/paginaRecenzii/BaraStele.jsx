import React from 'react'
import BaraSteleList from './BaraSteleList'
import baraStele from './baraStele.json'
const BaraStele = () => {
  const createBaraSteleList = (component)=>{
    return <BaraSteleList 
      id = {component.id}
      key = {component.id}
      nrStele = {component.nrStele}
      procent = {component.procent}
      nrRecenzii = {component.nrRecenzii}
    />
  }
  return (
    <ul className='space-y-2 mt-2 flex flex-col justify-center h-full '>
      {baraStele && baraStele.map(createBaraSteleList)}
    </ul>
  )
}

export default BaraStele
