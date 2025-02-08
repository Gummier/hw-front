import React from 'react'
import Logo from '../../assets/only_SIT_logo.png'
import { Link } from 'react-router'
function Nav() {
  return (
    
    <div className='bg-white h-[80px] flex items-center justify-between shadow-xl w-screen'>
        <div className='flex items-center py-2.5 px-5'>
          <Link to="/"><img src={Logo} alt="Logo" width={166} height={66} className='object-contain' /> </Link>
        <h3 className='font-semibold'>Booking System</h3>
      </div>
      <div className='flex px-10'>
        <Link to="/" className='px-10 hover:scale-125  hover:transition duration-400 ease-in-out active:scale-100'>Home</Link>
        <Link to="/report" className='px-10 hover:scale-125  hover:transition duration-400 ease-in-out active:scale-100'>Report</Link>
      </div>
    </div>
  )
}

export default Nav
