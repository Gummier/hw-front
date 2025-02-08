import { useState, useEffect } from "react";
import axios from "axios";
import SingleDropdown from "./SingleDropdown";
import PopupStatus from "./PopupStatus";
import PopupConfirmed from "./PopupConfirm";
import {motion} from 'framer-motion'
export default function PopupEdit({ bookingId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    bookingName: "",
    bookingDESC: "",
    startTime: "",
    endTime: "",
    createdBy: "",
    modifiedBy: "",
    type: "",
    repeatType: "",
    repeatDay: "",
    repeatEndDate: "",
    buildings_buildingId: "",
    rooms: "",
  });

  const repeat_type = ["Daily", "Weekly", "Monthly"];
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
  const rooms = ["Room 1", "Room 2", "Room 3"];

  // Fetch booking details when popup is opened
  const fetchBookingDetails = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.example.com/bookings/${bookingId}`);
      if (response.status === 200) {
        setFormData(response.data); // Populate formData with the fetched booking details
      }
    } catch (error) {
      console.error("Error fetching booking details:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // Open popup and fetch booking details
  const openPopup = () => {
    setIsOpen(true);
    fetchBookingDetails();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.put(
        `https://api.example.com/bookings/${bookingId}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Booking updated successfully:", response.data);
        setIsOpen(false); // Close popup on success
      }
    } catch (error) {
      console.error("Error updating booking:", error.response?.data || error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      <button
        onClick={openPopup}
        className="bg-primary text-white py-2 px-4 rounded-md transform transition duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
      >
        Edit Booking
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
              <label htmlFor="" className="text-sm font-medium text-gray-700  mb-2">Repeat Type</label>
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
                initialValue={formData.buildings_buildingId}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, building: value }))
                }
              />

            </div>
            <div className="flex flex-col">
              <label htmlFor="text" className="text-sm font-medium  text-gray-700 mb-1">Room</label>
              <SingleDropdown
                items={rooms}
                initialValue={formData.room}
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
              <div className="flex justify-center  w-full">
                <PopupStatus/>
                <PopupConfirmed/>
              </div>
          </div>
          </motion.div>

      )}
    </div>
  );
}
