import BookingDetail from "./BookingDetail";
import { useLocation } from "react-router-dom";
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
                <span className="text-sm text-gray-700">{bookingDetails?.building || "N/A"}</span>
                <span className="text-primary font-semibold">
                 {building}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-700">{bookingDetails?.room || "N/A"}</span>
                <span className="text-primary font-semibold">
                  {room}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="max-h-[60vh] overflow-y-auto p-4">
          <BookingDetail bookingDetails ={ bookingDetails} />
        </div>
      </div>
    </div>
  );
}

export default PopupDetail;
