import React from 'react'
import Nav from '../components/Nav'
import DetailHeader from '../components/DetailHeader'
import { useNavigate } from 'react-router'
function Details() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/booking')
    }
  return (
      <div className='flex-wrap justify-center items-center'>
        <Nav></Nav>
        <div className='flex justify-center m-10'>
            <DetailHeader/>
        </div>
        <div className='flex w-screen justify-center mt-16'>
        <button className='bg-primary text-white py-2 px-4 rounded-md transform transition duration-300 ease-in-out hover:scale-105 hover:translate-y-1' onClick={handleClick}>Add New Booking</button>
        </div>
    </div>
  )
}

export default Details
