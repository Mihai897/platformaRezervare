import React from 'react'
import ReviewList from './ReviewList'
import review from './review.json'
import { IoChevronDownOutline } from "react-icons/io5";

const Review = () => {
  const createReviewList = (component) =>{
    return <ReviewList 
      id= {component.id}
      key= {component.id}
      img = {component.img}
      nume = {component.nume}
      locatie = {component.locatie}
      stele1 ={component.stele1}
      stele2 = {component.stele2}
      stele3 = {component.stele3}
      stele4 = {component.stele4}
      stele5 = {component.stele5}
      numeRecenzie = {component.numeRecenzie}
      textRecenzie = {component.textRecenzie}
      perioadaPostare = {component.perioadaPostare}
    />
  }
  return (
    <div className='mt-10'>
      
      <div className='flex items-center space-x-4'>
        <p className='text-button'>Filtreaza recenziile:</p>
        <div >
          <button className='bg-button1 border border-button/40 space-x-3 px-3 py-1.5 rounded-lg flex items-center'>
            <p>Toate evaluarile</p>
            <IoChevronDownOutline className='mt-0.5'/>
          </button>
          
        </div>
        <div >
          <button className='bg-button1 border border-button/40 space-x-3 px-3 py-1.5 rounded-lg flex items-center'>
            <p>Cele mai recente</p>
            <IoChevronDownOutline className='mt-0.5'/>
          </button>
          
        </div>
      </div>

      <ul className='mt-8 grid grid-cols-2 items-stretch gap-4 max-modf:grid-cols-1'>
        {review && review.map(createReviewList)}
      </ul>
    </div>
  )
}

export default Review
