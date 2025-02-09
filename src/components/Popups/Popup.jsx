import { useState } from "react";
import axios from "axios";
import SingleDropdown from "../SingleDropdown";
import {motion} from 'framer-motion'
import PopupConfirmed from "./PopupConfirm";
export default function Popup({ initialBuilding, initialRoom, selectedDate }) {
  const [isOpen, setIsOpen] = useState(false);
  const repeat_type = ["Teacher","Staff",'LF',"Student"];
  const [open,setOpen] = useState(false);

  const timezone = [
    "8:30", "9:00", "9:30", "10:00", "10:30", "11:00",
    "11:30", "12:00", "12:30", "13:00", "13:30", "14:00",
    "14:30", "15:00", "15:30", "16:00", "16:30", "17:00",
    "17:30", "18:00", "18:30", "19:00", "19:30", "20:00",
    "20:30", "21:00", "21:30", "22:00",
  ];
  const buildings = [
    "CB2",
    "LX Building (10th Floor)",
    "LX Building (11th Floor)",
    "LX Building (12th Floor)",
    "SIT Building (1st Floor)",
    "SIT Building (3st Floor)",
    "SIT Building (4st Floor)",
  ];
  const rooms = [1,2,3];

  const [formData, setFormData] = useState({
    bookingId: "",
    bookingName: "",
    bookingDESC: "",
    startTime: "2025-02-07T16:32:57.541Z",
    endTime: "2025-02-07T16:32:57.541Z",
    createdBy: "string",
    modifiedBy: "",
    type: "Staff",
    repeatType: "EVERY_DAY",
    repeatDay: "MONDAY",
    repeatEndDate: "2025-08-07",
    buildings_buildingId: initialBuilding || "",
    rooms: initialRoom || "",
  });
  // Create a reusable function for the API call

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  
  const handleSubmit = async () => {
    try {
      const requestBody = {
        roomName: formData.buildings_buildingId,
        startTime: formData.startTime,
        endTime: formData.endTime,
        SType: formData.type,
        fk_room: rooms.map((room) => {
          // Ensure `room` is a string before applying `.match`
          if (typeof room === "string") {
            const match = room.match(/\d+/); // Extract digits
            return match ? parseInt(match[0], 10) : null; // Convert to integer
          }
          return null; // Handle non-string cases
        }),
      };
      const response = await axios.post("http://helloworld07:2048/api/bookings/add", requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      

      if (response.status === 200) {
        console.log("Booking added successfully:", response.data);
        setOpen(true);
        console.log(response.data)
        console.log(requestBody)
        // Handle success (e.g., clear the form or show a success message)
      }
    } catch (error) {
      console.error("Error adding booking:", error.response?.data || error.message);
      // Handle error (e.g., show an error message to the user)
    }
  };


  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-primary text-white py-2 px-4 rounded-md transform transition duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
      >
        Add New Booking
      </button>

      {isOpen && (
        <motion.div
                className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                // Close popup on backdrop click
                >
                    
                
          <div className="bg-white p-6 rounded-lg shadow-lg">
          <form className="grid grid-cols-2 gap-4">
              <button className="absolute top-[180px] right-[530px]  right text-2xl" onClick={() => setIsOpen(false)}>
              ✖
            </button>
            <div className="flex flex-col">
              <label htmlFor="text" className="text-sm font-medium  text-gray-700 mb-1">Subject</label>
              <input
                  name="bookingName"
                value={formData.bookingName}
                onChange={handleInputChange}
                type = 'text'
                className="mt-1 block w-full border-1 rounded-lg shadow-sm h-[42px] px-4 focus:border-indigo-500 focus:ring-indigo-500 "
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="" className="text-sm font-medium text-gray-700  mb-2">Staff Type</label>
              <div className="">
            <SingleDropdown
                items={repeat_type}
                initialValue= {formData.type}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, building: value }))
                }
              /></div>
              </div>
            <div className="flex flex-col">
              <label htmlFor="text" className="text-sm font-medium text-gray-700  mb-1">Description</label>
              <textarea
                name="bookingDESC"
                value={formData.bookingDESC}
                onChange={handleInputChange}
                rows={4}
                className="border-1 rounded-lg px-4"
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="text" className="text-sm font-medium  text-gray-700  ">End At</label>
              <input
                  name="repeatEndDate"
                value={formData.repeatEndDate}
                onChange={handleInputChange}
                type = 'date'
                className="mt-1 block w-full border-1 rounded-lg shadow-sm h-[42px] px-4 focus:border-indigo-500 focus:ring-indigo-500 "
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="text" className="text-sm font-medium  text-gray-700  mb-1">Date</label>
            <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full border rounded-md p-2 mt-2 px-4"
              />
            </div>
            <div className="flex flex-col mt-1">
              <label htmlFor="text" className="text-sm font-medium  text-gray-700 mb-1">Creator</label>
              <input
                  name="createdBy"
                value={formData.createdBy}
                onChange={handleInputChange}
                type = 'text'
                className="mt-1 block w-full border-1 rounded-lg shadow-sm h-[42px] px-4 focus:border-indigo-500 focus:ring-indigo-500 "
              />
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="text" className="text-sm font-medium  text-gray-700 mb-1">Building</label>
              <SingleDropdown
                items={buildings}
                initialValue={initialBuilding}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, building: value }))
                }
              />

            </div>
            <div className="flex flex-col">
              <label htmlFor="text" className="text-sm font-medium  text-gray-700 mb-1">Room</label>
              <SingleDropdown
                items={rooms}
                initialValue={initialRoom}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, room: value }))
                }
              />
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="text" className="text-sm font-medium  text-gray-700 mb-1">Start</label>
              <SingleDropdown
                items={timezone}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, beginTime: value }))
                }
              />

            </div>

            <div className="flex flex-col">
              <label htmlFor="text" className="text-sm font-medium  text-gray-700 mb-1">End</label>
              <SingleDropdown
                items={timezone}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, endTime: value }))
                }
              />

            </div >
            
            </form>
              <div className="flex justify-center w-full">
               
                <button
                  onClick={handleSubmit}
                  
                  className="mt-4 px-4 py-2 bg-white text-green-button shadow-3xl rounded-lg font-semibold hover:bg-green-hover hover:scale-105 hover:transition duration-700 ease-in-out "
                >
                  Confirm
                </button>
                
                {open&& (<motion.div
                            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            // Close popup on backdrop click
                            >
                                
                            <div class="bg-white rounded-2xl shadow-lg p-6 w-96 relative text-center">
                              {/* <!-- Close Button --> */}
                              <button class="absolute top-4 right-4 text-blue-900 text-xl font-bold" onClick={() => setOpen(false)}>
                                &times;
                              </button>
                              {/* <!-- Title --> */}
                              <h2 class="text-2xl font-semibold text-blue-900">Booking Confirmed!</h2>
                              {/* <!-- Subtitle --> */}
                              <p class="text-gray-700 mt-4">
                                Your room booking has been successfully completed.
                              </p>
                              
                              <div class="mt-6">
                                
                              </div>
                            </div>
                            </motion.div>) }
                
              </div>
          </div>
          
        </motion.div>
      )}
    </div>
  );
}
