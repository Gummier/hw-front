import React from 'react'
import BookingDetail from './BookingDetail';
import { useNavigate } from 'react-router';
import TimeTable from './TimeTable';
function DetailHeader() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/')
    }
  return (
    <div className=''>
        <div className="flex items-center justify-between  border-gray-300 px-12 py-3 bg-white  w-7xl">
        <div className="flex items-center space-x-4">
            <button className="text-black hover:text-gray-600" onClick={handleClick}>
            ←
            </button>
            <div className="flex flex-col">
            <span className="text-sm text-gray-700">Sunday</span>
            <span className="text-xl font-bold text-primary">2 Feb 2025</span>
            </div>
        <div className="ml-36 h-10 w-[1px] bg-gray-400"></div>
        <div className="flex space-x-20">
            <div className="flex flex-col">
            <span className="text-sm text-gray-700">Building</span>
            <span className="text-primary  font-semibold">LX Building (11th Floor)</span>
            </div>

            <div className="flex flex-col">
            <span className="text-sm text-gray-700">Room</span>
            <span className="text-primary  font-semibold">Training Room 11/3</span>
            </div>
        </div>
        </div>
        </div>
        <TimeTable bookings={[]}/>
        
       
    </div>

  );
}

export default DetailHeader
