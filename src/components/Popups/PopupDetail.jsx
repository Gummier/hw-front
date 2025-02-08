import BookingDetail from "../Bookings/BookingDetail";
import { useLocation } from "react-router-dom";
import PopupEdit from "./PopupEdit";
import {motion} from 'framer-motion'
function PopupDetail({ isOpen, onClose , bookingDetails}) {
  if (!isOpen) return null; // Don't render if closed
    const location = useLocation();
    const { selectedDate, building, room } = location.state || {
        selectedDate: null,
        building: null,
        room: null,
      };  
  return (
    
    <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-30 backdrop-blur-sm z-50">
      <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // Close popup on backdrop click
            >

      {/* Popup Box */}
      <div className="bg-white rounded-lg shadow-lg w-[70vw] max-w-3xl p-6 relative">
        {/* Close Button */}
        <button className="absolute top-2 right-3 text-2xl" onClick={onClose}>
          ✖
        </button>

        {/* Popup Header */}
        <div className="flex items-center justify-between border-b border-gray-300 px-6 py-3 bg-white">
          <div className="flex items-center space-x-4">
            <div className="flex flex-col">
              <span className="text-sm text-gray-700">{new Date(bookingDetails?.startTime).toLocaleDateString("en-US", {weekday: "long",})}
                </span>
              <span className="text-xl font-bold text-primary">{new Date(bookingDetails?.startTime).toLocaleDateString()}</span>
            </div>
            <div className="ml-8 h-10 w-[1px] bg-gray-400"></div>
            <div className="flex space-x-10">
              <div className="flex flex-col">
                <span className="text-sm text-gray-700">Building</span>
                <span className="text-primary font-semibold">
                {bookingDetails?.building || "N/A"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-700">Room</span>
                <span className="text-primary font-semibold">
                {bookingDetails?.room || "N/A"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="max-h-[60vh] overflow-y-auto p-4">
          <BookingDetail booking ={ bookingDetails } />
        </div>
        <div className="flex justify-center">
            <PopupEdit bookingId={[]}/>
        </div>
      </div>
          </motion.div>
    </div>
  );
}

export default PopupDetail;
