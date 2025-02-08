import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PopupDetail from "./PopupDetail";
import axios from "axios";

const TimeTable = () => {
  const location = useLocation();
  const { selectedDate, building, room } = location.state || {};
  const [bookings, setBookings] = useState({});
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const timeSlots = [
    "8:30", "9:00", "9:30", "10:00", "10:30", "11:00",
    "11:30", "12:00", "12:30", "13:00", "13:30", "14:00",
    "14:30", "15:00", "15:30", "16:00", "16:30", "17:00",
    "17:30", "18:00", "18:30", "19:00", "19:30", "20:00",
    "20:30", "21:00", "21:30", "22:00",
  ];
  console.log("Selected Date:", selectedDate);
  const fetchBookings = async () => {
    try {
      const mockBookings = [
        {
          bookingName: "Team Meeting",
          startTime: "2025-02-02T08:30:00",
          endTime: "2025-02-02T09:30:00",
          room: "Room 1",
        },
        {
          bookingName: "Project Discussion",
          startTime: "2025-02-03T10:00:00",
          endTime: "2025-02-03T11:00:00",
          room: "Room 2",
        },
      ];
  
      // Parse selectedDate
      const parsedDate = new Date(selectedDate);
      const selectedDateFormatted = parsedDate.toISOString().split("T")[0];
  
      // Filter bookings by date and room
      const filteredBookings = mockBookings.filter((booking) => {
        const bookingDate = new Date(booking.startTime).toISOString().split("T")[0];
        return bookingDate === selectedDateFormatted && booking.room === room;
      });
      console.log("Filtered Bookings:", filteredBookings);
      // Map filtered bookings to time slots
      const mappedBookings = {};
      filteredBookings.forEach((booking) => {
        const startTime = new Date(booking.startTime).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false, // Use 24-hour time
        });
        mappedBookings[startTime] = {
          text: booking.bookingName,
          color: "bg-green-100",
          details: booking,
        };
      });
      setBookings(mappedBookings);
      console.log("Mapped Bookings:", mappedBookings);
    } catch (error) {
      console.error("Error fetching bookings:", error.message);
    }
  };
  
  useEffect(() => {
    if (selectedDate && building && room) {
      fetchBookings();
    }
  }, [selectedDate, building, room]);

  return (
    <div className="max-w-6xl mx-auto p-4 overflow-y-auto max-h-[500px] rounded-lg">
      <div className="flex justify-between mb-4">
        <div>
          <h2 className="text-lg font-bold">{selectedDate}</h2>
          <p>{building} - {room}</p>
        </div>
      </div>
      <table className="w-full border-collapse border-spacing-y-2">
        <thead>
          <tr className="bg-gray-100 text-center">
            <th className="border py-2">เวลา</th>
            <th className="border py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((time, index) => {
            const booking = bookings[time];
            return (
              <tr
                key={index}
                className="border bg-white"
                onClick={() => {
                  if (booking) {
                    setSelectedBooking(booking.details);
                    setPopupOpen(true);
                  }
                }}
              >
                <td className="border w-20 py-2 text-center">{time}</td>
                <td
                  className={`border px-4 py-2 ${booking ? "cursor-pointer hover:bg-blue-100" : ""} ${
                    booking?.color || ""
                  }`}
                >
                  {booking?.text || ""}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <PopupDetail isOpen={isPopupOpen} bookingDetails={selectedBooking} onClose={() => setPopupOpen(false)} />
    </div>
  );
};

export default TimeTable;
