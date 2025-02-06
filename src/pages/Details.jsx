import React from 'react'
import Nav from '../components/Nav'
import DetailHeader from '../components/DetailHeader'
import { useNavigate } from 'react-router'
import Popup from '../components/Popup'
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
        <Popup/>
        </div>
    </div>
  )
}

export default Details
