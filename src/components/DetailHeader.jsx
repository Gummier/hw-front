import React , {useState} from 'react'
import BookingDetail from './BookingDetail';
import { useNavigate } from 'react-router';
import { useLocation } from "react-router-dom";
import TimeTable from './TimeTable';
function DetailHeader() {
    const location = useLocation();
    const navigate = useNavigate();
    const { selectedDate, building, room } = location.state || {
        selectedDate: null,
        building: null,
        room: null,
      };
    const handleClick = () => {
        navigate('/')
    }
    const [open,setOpen] = useState(false);
    
    const exampleBookings = {
        "12:00": { text: "SIT119 Hello World", color: "bg-red-200 text-black" },
        "15:30": { text: "Meeting", color: "bg-gray-300 text-black" },
      }; // switch to get detail
  return (
    
    <div className=''>
        <div className="flex items-center justify-between  border-gray-300 px-12 py-3 bg-white  w-7xl">
        <div className="flex items-center space-x-4">
            <button className="text-black hover:text-gray-600" onClick={handleClick}>
            ←
            </button>
            <div className="flex flex-col">
            <span className="text-sm text-gray-700">{new Date(selectedDate).toLocaleDateString("en-US", {weekday: "long",})}</span>
            <span className="text-xl font-bold text-primary">{selectedDate}</span>
            </div>
        <div className="ml-36 h-10 w-[1px] bg-gray-400"></div>
        <div className="flex space-x-20">
            <div className="flex flex-col">
            <span className="text-sm text-gray-700">Building</span>
            <span className="text-primary  font-semibold">{building}</span>
            </div>

            <div className="flex flex-col">
            <span className="text-sm text-gray-700">Room</span>
            <span className="text-primary  font-semibold">{room}</span>
            </div>
        </div>
        </div>
        </div>
        <TimeTable/>
        
       
    </div>

  );
}

export default DetailHeader
