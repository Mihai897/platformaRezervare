import React from 'react'
import { Link, Outlet, useMatches, useParams } from 'react-router-dom'
import hotels from './hotels'
import NavbarHotelPage from './NavbarHotelPage';
const HotelPage = () => {

  const matches = useMatches();
  const showNavbar = matches.length <= 3;
  
  const { slug } = useParams();

  const hotel = hotels.find(h => h.slug === slug)
  return (
    
    <div>
      
      {showNavbar && <NavbarHotelPage hotel={hotel} />}
      <Outlet context={{ hotel }}/>
    </div>
  )
}

export default HotelPage
