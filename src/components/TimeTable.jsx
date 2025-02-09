import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PopupDetail from "./Popups/PopupDetail";
import axios from "axios";

const TimeTable = () => {
  const location = useLocation();
  const { selectedDate, building, room } = location.state || {};
  const [bookings, setBookings] = useState({});
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const timeSlots = [
    "08:30", "09:00", "09:30", "10:00", "10:30", "11:00",
    "11:30", "12:00", "12:30", "13:00", "13:30", "14:00",
    "14:30", "15:00", "15:30", "16:00", "16:30", "17:00",
    "17:30", "18:00", "18:30", "19:00", "19:30", "20:00",
    "20:30", "21:00", "21:30", "22:00",
  ];
  const mockData = [ {
    bookingName: "Team Meeting",
    startTime: "2025-02-02T08:30:00",
    endTime: "2025-02-02T09:30:00",
    building: "LX Building (10th Floor)",
    room: "Room 1",
  },
  {
    bookingName: "Project Discussion",
    startTime: "2025-02-03T10:00:00",
    endTime: "2025-02-03T11:00:00",
    building: "LX Building (10th Floor)",
    room: "Room 2",
  },
  {
    bookingName: "Project Discussion",
    startTime: "2025-02-03T09:00:00",
    endTime: "2025-02-03T15:00:00",
    building: "LX Building (10th Floor)",
    room: "Room 2",
  },
  {
    bookingName: "Tester",
    startTime: "2025-02-11T08:30:00",
    endTime: "2025-02-11T09:30:00",
    building: "LX Building (10th Floor)",
    room: "Room 1",
  },
  {
    bookingName: "Project Discussion",
    startTime: "2025-02-11T10:00:00",
    endTime: "2025-02-11T11:00:00",
    building: "LX Building (10th Floor)",
    room: "Room 2",
  },
  {
    bookingName: "Design Workshop",
    startTime: "2025-02-11T14:00:00",
    endTime: "2025-02-11T15:00:00",
    building: "LX Building (10th Floor)",
    room: "Room 2",
  },]
  const fetchBookings = async () => {
    try {
      
      const apiUrl = "http://helloworld07:2048/api/bookings/AllJoinTableRoom/"; // Replace with your API URL
      const response = await axios.get(apiUrl, {
        params: {
          date: selectedDate,
          building,
          room,
        },
      });
      const parsedDate = new Date(selectedDate);
      const selectedDateFormatted = parsedDate.toLocaleDateString("en-CA"); // Format as "yyyy-MM-dd"

      

      console.log("API Response: Calendar", response.data);

      // Filter bookings if backend does not handle filtering
      const filteredBookings = mockData.filter((booking) => {
        const bookingDate = new Date(booking.startTime).toISOString().split("T")[0];
        return bookingDate === selectedDateFormatted && booking.room === room && booking.building === building;
      });
      console.log(filteredBookings)
      // Map filtered bookings to time slots
      const mappedBookings = {};
      filteredBookings.forEach((booking) => {
        const startTime = new Date(booking.startTime).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false, // 24-hour time
        });
        mappedBookings[startTime] = {
          text: booking.bookingName,
          color: "bg-green-100",
          details: booking,
        };
      });

      console.log("Mapped Bookings:", mappedBookings);
      setBookings(mappedBookings);
    } catch (error) {
      console.error("Error fetching bookings:", error.message);
    }
  };

  const calculateRowSpan = (startTime, endTime) => {
    const startIndex = timeSlots.findIndex((slot) => slot === startTime);
    const endIndex = timeSlots.findIndex((slot) => slot === endTime) + 1; // Include the end time
    return endIndex - startIndex;
  };

  const renderRows = () => {
    const occupiedSlots = new Set(); // Track occupied time slots
    const rows = [];

    timeSlots.forEach((time) => {
      const booking = Object.keys(bookings).find((startTime) => startTime === time);

      if (occupiedSlots.has(time)) {
        // Add plain time column for occupied slots
        rows.push(
          <tr key={time} className="border">
            <td className="border w-20 py-2 text-center">{time}</td>
          </tr>
        );
      } else if (booking) {
        const bookingDetails = bookings[time];
        const startTime = time;
        const endTime = new Date(bookingDetails.details.endTime).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });

        // Calculate rowSpan
        const rowSpan = calculateRowSpan(startTime, endTime);

        // Add booking row
        rows.push(
          <tr key={time} className="border">
            <td className="border w-20 py-2 text-center">{time}</td>
            <td
              className={`border px-4 py-2 text-center cursor-pointer hover:bg-green-200 hover:transition duration-500 ease-in-out ${bookingDetails.color || ""}`}
              rowSpan={rowSpan}
              onClick={() => {
                setSelectedBooking(bookingDetails.details);
                setPopupOpen(true);
              }}
            >
              {bookingDetails.text}
            </td>
          </tr>
        );

        // Mark slots covered by the booking as occupied
        const startIndex = timeSlots.indexOf(startTime);
        const endIndex = timeSlots.indexOf(endTime);
        for (let i = startIndex; i <= endIndex; i++) {
          occupiedSlots.add(timeSlots[i]);
        }
      } else {
        // Add an empty row for free time slots
        rows.push(
          <tr key={time} className="border">
            <td className="border w-20 py-2 text-center">{time}</td>
            <td className="border px-4 py-2"></td>
          </tr>
        );
      }
    });

    return rows;
  };

  useEffect(() => {
    if (selectedDate && building && room) {
      fetchBookings();
    } else {
      console.warn("Required data missing: selectedDate, building, or room");
    }
  }, [selectedDate, building, room]);

  return (
    <div className="max-w-6xl mx-auto p-4 overflow-y-auto max-h-[500px] rounded-lg">
      <div className="flex justify-between mb-4">
        <div>
          <h2 className="text-lg font-bold">{selectedDate}</h2>
          <p>
            {building} - {room}
          </p>
        </div>
      </div>
      <table className="w-full border-collapse border-spacing-y-2">
        <thead>
          <tr className="bg-gray-100 text-center">
            <th className="border py-2">Time</th>
            <th className="border py-2">Status</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
      <PopupDetail isOpen={isPopupOpen} bookingDetails={selectedBooking} onClose={() => setPopupOpen(false)} />
    </div>
  );
};

export default TimeTable;
