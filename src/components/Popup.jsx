import { useState } from "react";
import BookingForm from './BookingForm'
export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center ">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-primary text-white py-2 px-4 rounded-md transform transition duration-300 ease-in-out hover:scale-105 hover:translate-y-1'"
      >
        Add New Booking
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-sm">

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-center items-center  bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
          {/* Form Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Left Column */}
            <div>
              <label className="block text-gray-700 font-medium">
                Subject<span className="text-red-500">*</span>
              </label>
              <input type="text" className="w-full border rounded-md p-2" />
  
              <input type="text" placeholder="Description" className="w-full border rounded-md p-2 mt-2" />
              <input type="text" placeholder="Class" className="w-full border rounded-md p-2 mt-2" />
              <input type="text" placeholder="Room" className="w-full border rounded-md p-2 mt-2" />
              <input type="text" placeholder="Instructor" className="w-full border rounded-md p-2 mt-2" />
              <input type="text" placeholder="Duration" className="w-full border rounded-md p-2 mt-2" />
  
              {/* Begin Time Picker */}
              <div className="relative mt-2">
                <label className="block text-gray-700 font-medium">Begin</label>
                <input type="time" className="w-full border rounded-md p-2" />
              </div>
            </div>
  
            {/* Right Column */}
            <div>
              <label className="block text-gray-700 font-medium">
                Date<span className="text-red-500">*</span>
              </label>
              <input type="date" className="w-full border rounded-md p-2" />
  
              <input type="text" placeholder="Type" className="w-full border rounded-md p-2 mt-2" />
              <input type="text" placeholder="Repeat every" className="w-full border rounded-md p-2 mt-2" />
              <input type="text" placeholder="Repeat end date" className="w-full border rounded-md p-2 mt-2" />
              <input type="text" placeholder="Created by" className="w-full border rounded-md p-2 mt-2" />
              <input type="text" placeholder="Last updated" className="w-full border rounded-md p-2 mt-2" />
  
              {/* End Time Picker */}
              <div className="relative mt-2">
                <label className="block text-gray-700 font-medium">End</label>
                <input type="time" className="w-full border rounded-md p-2" />
              </div>
            </div>
          </div>
  
          
        </div>
      </div >
            <div className="flex justify-between">
                <button onClick={() => setIsOpen(false)}className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg">
                Close
                </button>
                <button onClick={() => setIsOpen(false)}className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg">
                Confirm Book
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
