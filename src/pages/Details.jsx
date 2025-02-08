import React from 'react'
import Nav from '../components/Semantic/Nav'
import DetailHeader from '../components/DetailHeader'
import { useNavigate } from 'react-router'
import { useLocation } from "react-router-dom";
import Popup from '../components/Popups/Popup'
function Details() {
    const navigate = useNavigate();
     const location = useLocation();
      const { selectedDate, building, room } = location.state || {
          selectedDate: null,
          building: null,
          room: null,
        };
  return (
      <div className='flex-wrap justify-center items-center'>
        <Nav></Nav>
        <div className='flex justify-center m-10'>
            <DetailHeader/>
        </div>
        <div className='flex w-screen justify-center mt-16'>
        <Popup initialRoom={room} initialBuilding={building} selectedDate={selectedDate}/>
        </div>
        
    </div>
  )
}

export default Details
